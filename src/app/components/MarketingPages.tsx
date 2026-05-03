import { useRef, useState, useEffect } from 'react';
import { toBlob } from 'html-to-image';
import { Download, Loader2 } from 'lucide-react';
import logoImg from '../../imports/logo.png';
import appScreen1 from '../../imports/IMG_1411.PNG';
import appScreen2 from '../../imports/IMG_1409.PNG';
import appScreen3 from '../../imports/IMG_1418.jpg';

type MarketingTab = 'Widescreen' | 'Square' | 'Vertical' | 'Headers' | 'All';
const MARKETING_TABS: MarketingTab[] = ['Widescreen', 'Square', 'Vertical', 'Headers', 'All'];

export function MarketingPages() {
  const [tab, setTab] = useState<MarketingTab>('Widescreen');

  return (
    <div className="min-h-screen py-12" style={{ background: 'var(--page-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="mb-1" style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.5rem', color: 'var(--primary-text)' }}>
            Marketing Pages
          </h1>
          <p style={{ color: 'var(--muted-text)' }}>
            Screenshot-ready layouts — pitch decks, app store, email headers, press kit.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8" style={{ scrollbarWidth: 'none' }}>
          {MARKETING_TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              background: tab === t ? 'var(--accent)' : 'var(--card-surface)',
              color: tab === t ? 'var(--page-bg)' : 'var(--muted-text)',
              border: `1px solid ${tab === t ? 'transparent' : 'var(--border)'}`,
              borderRadius: '100px', padding: '6px 16px', fontWeight: 600,
              fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'all 0.15s'
            }}>{t}</button>
          ))}
        </div>

        <div className="grid gap-10">
          {(tab === 'Widescreen' || tab === 'All') && <>
            <PageWrapper title="Launch Announcement — 1600×900 (16:9)"><LaunchAnnouncementPage /></PageWrapper>
            <PageWrapper title="Problem / Solution — 1600×900"><ProblemSolutionPage /></PageWrapper>
            <PageWrapper title="Feature Showcase — 1600×900"><FeatureShowcasePage /></PageWrapper>
            <PageWrapper title="Pitch Deck Slide — 1920×1080"><PitchDeckSlide /></PageWrapper>
            <PageWrapper title="Pricing Overview — 1600×900"><PricingOverviewPage /></PageWrapper>
            <PageWrapper title="Product Hunt Banner — 1270×760"><ProductHuntBanner /></PageWrapper>
          </>}

          {(tab === 'Square' || tab === 'All') && <>
            <PageWrapper title="App Store Screenshots — Side by Side"><AppStoreScreenshots /></PageWrapper>
            <PageWrapper title="Onboarding Value Prop — 1080×1080"><OnboardingValueProp /></PageWrapper>
          </>}

          {(tab === 'Vertical' || tab === 'All') && <>
            <PageWrapper title="App Store Feature Graphic — iPhone 15 Pro Max"><AppStoreHeroPage /></PageWrapper>
            <PageWrapper title="Race Weekend Story — 1080×1920"><RaceWeekendStory /></PageWrapper>
          </>}

          {(tab === 'Headers' || tab === 'All') && <>
            <PageWrapper title="Email Header — 600×300"><EmailHeader /></PageWrapper>
            <PageWrapper title="Press Kit Hero — 1200×800"><PressKitHero /></PageWrapper>
          </>}
        </div>
      </div>
    </div>
  );
}

function PageWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [preview, setPreview] = useState({ scale: 1, visW: 0, visH: 0 });

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const card = ref.current;
      if (!container || !card) return;
      const s = Math.min(1, container.clientWidth / card.scrollWidth);
      setPreview({ scale: s, visW: card.scrollWidth * s, visH: card.scrollHeight * s });
    };
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, []);

  const handleDownload = async () => {
    if (!ref.current || exporting) return;
    setExporting(true);
    try {
      await document.fonts.ready;
      // Wait for every image in the card to fully load before capturing
      await Promise.all(
        Array.from(ref.current.querySelectorAll('img')).map(img =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise<void>(res => {
                img.addEventListener('load', () => res(), { once: true });
                img.addEventListener('error', () => res(), { once: true });
              })
        )
      );
      const blob = await toBlob(ref.current, { pixelRatio: 2 });
      if (!blob) throw new Error('No blob');
      const filename = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
      const file = new File([blob], filename, { type: 'image/png' });
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile && navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Tire Track — ' + title });
      } else if (isMobile) {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 30000);
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed — check console for details.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div style={{
      background: 'var(--card-surface)',
      borderRadius: '14px',
      border: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <div className="flex items-center justify-between px-6 py-4" style={{
        borderBottom: '1px solid var(--border)'
      }}>
        <span style={{
          fontFamily: 'var(--font-chakra)',
          fontWeight: 600,
          fontSize: '0.875rem',
          color: 'var(--primary-text)'
        }}>{title}</span>
        <button
          onClick={handleDownload}
          disabled={exporting}
          className="flex items-center gap-2 px-3 py-1.5 transition-all hover:scale-105"
          style={{
            background: 'var(--input-surface)',
            borderRadius: '6px',
            color: exporting ? 'var(--dim-text)' : 'var(--muted-text)',
            fontSize: '0.8rem',
            fontWeight: 500
          }}
        >
          {exporting
            ? <Loader2 className="w-3.5 h-3.5 animate-spin" />
            : <Download className="w-3.5 h-3.5" />}
          {exporting ? 'Exporting…' : 'Download PNG'}
        </button>
      </div>
      <div className="p-6" ref={containerRef}>
        <div style={{
          width: preview.visW > 0 ? `${preview.visW}px` : '100%',
          height: preview.visH > 0 ? `${preview.visH}px` : undefined,
          overflow: 'hidden'
        }}>
          <div style={{
            transform: preview.scale < 1 ? `scale(${preview.scale})` : undefined,
            transformOrigin: 'top left'
          }}>
            <div ref={ref}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── App Store Feature Graphic ──────────────────────────────────────── */
function AppStoreHeroPage() {
  return (
    <div style={{
      width: '390px',
      background: 'var(--page-bg)',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, oklch(0.72 0.16 155 / 0.25) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', padding: '48px 32px 40px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '28px', marginBottom: '24px' }} />
        <h1 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2.4rem',
          lineHeight: 1.1,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          marginBottom: '12px'
        }}>
          Your tires.<br />
          <span style={{ color: 'var(--accent)' }}>Every session.</span><br />
          One app.
        </h1>
        <p style={{
          fontSize: '1rem',
          lineHeight: 1.6,
          color: 'var(--muted-text)',
          marginBottom: '28px',
          maxWidth: '280px'
        }}>
          Scan, log, and track every kart tire set you own. Stop guessing — start knowing.
        </p>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--accent)',
          color: 'var(--page-bg)',
          padding: '10px 20px',
          borderRadius: '100px',
          fontWeight: 700,
          fontSize: '0.875rem',
          letterSpacing: '0.02em',
          marginBottom: '40px'
        }}>
          Free to download
        </div>
      </div>
      {/* Screenshots row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        padding: '0 24px 0',
        alignItems: 'flex-end'
      }}>
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
          borderRadius: '20px',
          padding: '6px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          transform: 'rotate(-4deg) translateY(8px)',
          willChange: 'transform'
        }}>
          <img loading="eager" src={appScreen3} alt="Scan" style={{ width: '100px', borderRadius: '14px', display: 'block' }} />
        </div>
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))',
          borderRadius: '20px',
          padding: '6px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          zIndex: 2
        }}>
          <img loading="eager" src={appScreen1} alt="Garage" style={{ width: '130px', borderRadius: '14px', display: 'block' }} />
        </div>
        <div style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
          borderRadius: '20px',
          padding: '6px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7)',
          transform: 'rotate(4deg) translateY(8px)',
          willChange: 'transform'
        }}>
          <img loading="eager" src={appScreen2} alt="Session" style={{ width: '100px', borderRadius: '14px', display: 'block' }} />
        </div>
      </div>
      <div style={{ height: '32px', background: 'linear-gradient(to top, var(--page-bg), transparent)' }} />
    </div>
  );
}

/* ─── Product Hunt Banner ─────────────────────────────────────────────── */
function ProductHuntBanner() {
  return (
    <div style={{
      width: '635px',
      height: '380px',
      background: 'var(--page-bg)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 48px)'
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '260px',
        background: 'linear-gradient(to left, transparent, var(--page-bg) 100%)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        right: '48px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-end'
      }}>
        <img loading="eager" src={appScreen3} alt="" style={{
          width: '90px',
          borderRadius: '14px',
          boxShadow: '0 20px 48px rgba(0,0,0,0.7)',
          transform: 'rotate(-3deg)',
          willChange: 'transform'
        }} />
        <img loading="eager" src={appScreen1} alt="" style={{
          width: '110px',
          borderRadius: '14px',
          boxShadow: '0 28px 56px rgba(0,0,0,0.8)'
        }} />
      </div>
      <div style={{ position: 'relative', zIndex: 2, padding: '48px' }}>
        <div style={{
          display: 'inline-block',
          background: 'var(--accent-soft)',
          color: 'var(--accent)',
          padding: '4px 12px',
          borderRadius: '6px',
          fontSize: '0.7rem',
          fontWeight: 700,
          fontFamily: 'var(--font-chakra)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '16px'
        }}>
          Launching Today
        </div>
        <h2 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2.25rem',
          lineHeight: 1.1,
          color: 'var(--primary-text)',
          marginBottom: '12px',
          maxWidth: '280px'
        }}>
          Tire Track
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'var(--muted-text)',
          lineHeight: 1.6,
          maxWidth: '260px',
          marginBottom: '24px'
        }}>
          The kart tire management app that replaces memory, sticky notes, and expensive guesswork.
        </p>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1,2,3,4,5].map(i => (
              <span key={i} style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>★</span>
            ))}
          </div>
          <span style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
            Free — then $5/mo
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Launch Announcement (16:9) ─────────────────────────────────────── */
function LaunchAnnouncementPage() {
  return (
    <div style={{
      width: '800px',
      aspectRatio: '16/9',
      background: 'var(--page-bg)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at -10% 50%, oklch(0.72 0.16 155 / 0.18) 0%, transparent 60%)'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 48px)'
      }} />
      <div style={{ position: 'relative', padding: '64px 48px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '24px', marginBottom: '32px' }} />
        <div style={{
          fontFamily: 'var(--font-chakra)',
          fontSize: '0.7rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--accent)',
          marginBottom: '16px'
        }}>
          Now Available · iOS &amp; Android
        </div>
        <h1 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1.05,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Stop losing races<br />
          <span style={{ color: 'var(--accent)' }}>to bad tire calls.</span>
        </h1>
        <p style={{
          fontSize: '1.05rem',
          lineHeight: 1.65,
          color: 'var(--muted-text)',
          marginBottom: '32px',
          maxWidth: '320px'
        }}>
          Tire Track gives every set a barcode, a history, and a wear status. Know exactly what you're putting on the kart — every single time.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{
            background: 'var(--accent)',
            color: 'var(--page-bg)',
            padding: '10px 22px',
            borderRadius: '100px',
            fontWeight: 700,
            fontSize: '0.875rem'
          }}>
            Start for Free
          </div>
          <div style={{
            border: '1px solid var(--strong-border)',
            color: 'var(--muted-text)',
            padding: '10px 22px',
            borderRadius: '100px',
            fontSize: '0.875rem'
          }}>
            TireTrack.io
          </div>
        </div>
      </div>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '32px'
      }}>
        <img loading="eager" src={appScreen3} alt="" style={{
          width: '140px',
          borderRadius: '18px',
          boxShadow: '0 24px 56px rgba(0,0,0,0.7)',
          transform: 'rotate(-5deg) translateY(12px)',
          willChange: 'transform'
        }} />
        <img loading="eager" src={appScreen1} alt="" style={{
          width: '175px',
          borderRadius: '22px',
          boxShadow: '0 32px 72px rgba(0,0,0,0.8)',
          zIndex: 2
        }} />
      </div>
    </div>
  );
}

/* ─── Problem / Solution (16:9) ──────────────────────────────────────── */
function ProblemSolutionPage() {
  return (
    <div style={{
      width: '800px',
      aspectRatio: '16/9',
      background: 'var(--card-surface)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {/* Problem side */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          padding: '52px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid var(--border)'
        }}>
          <div style={{
            fontFamily: 'var(--font-chakra)',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'oklch(0.68 0.22 25)',
            marginBottom: '20px'
          }}>
            Without Tire Track
          </div>
          {[
            'Guessing which tires to run',
            'Running sets one cycle too long',
            'Your mechanic picks the wrong set',
            '$400 decisions made from memory',
            'No data after the season ends'
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'oklch(0.68 0.22 25 / 0.2)',
                border: '1px solid oklch(0.68 0.22 25 / 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '0.7rem',
                color: 'oklch(0.68 0.22 25)'
              }}>✕</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
        {/* Solution side */}
        <div style={{
          padding: '52px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'oklch(0.72 0.16 155 / 0.04)'
        }}>
          <div style={{
            fontFamily: 'var(--font-chakra)',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--accent)',
            marginBottom: '20px'
          }}>
            With Tire Track
          </div>
          {[
            'Scan a barcode — instant history',
            'Wear status: Fresh, Mid, Worn',
            'Team garage — everyone sees the same data',
            'Session logs: lap times, pressure, weather',
            'Your entire tire fleet in your pocket'
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'oklch(0.72 0.16 155 / 0.2)',
                border: '1px solid oklch(0.72 0.16 155 / 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '0.7rem',
                color: 'var(--accent)'
              }}>✓</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--primary-text)', lineHeight: 1.4 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--card-surface)'
      }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '20px' }} />
        <span style={{ fontSize: '0.8rem', color: 'var(--dim-text)' }}>TireTrack.io — Free to start</span>
      </div>
    </div>
  );
}

/* ─── Feature Showcase (16:9) ────────────────────────────────────────── */
function FeatureShowcasePage() {
  return (
    <div style={{
      width: '800px',
      aspectRatio: '16/9',
      background: 'var(--page-bg)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 50% at 75% 50%, oklch(0.72 0.16 155 / 0.12) 0%, transparent 65%)'
      }} />
      <div style={{ position: 'relative', padding: '52px 52px 0', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '40px', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: '52px' }}>
          <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '28px' }} />
          <h2 style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2.6rem',
            lineHeight: 1.1,
            color: 'var(--primary-text)',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            Everything you need.<br />
            <span style={{ color: 'var(--accent)' }}>Nothing you don't.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { label: 'Barcode Scanning', sub: 'Find any tire in 2 sec' },
              { label: 'Heat Cycle Log', sub: 'Automatic session count' },
              { label: 'Wear Status', sub: 'Fresh / Mid / Worn' },
              { label: 'Session Notes', sub: 'Pressure, laps, weather' },
              { label: 'Team Garage', sub: 'Share with your crew' },
              { label: 'Race History', sub: 'Every track, every result' }
            ].map(({ label, sub }) => (
              <div key={label} style={{
                background: 'var(--card-surface)',
                borderRadius: '10px',
                padding: '12px 14px',
                border: '1px solid var(--border)'
              }}>
                <div style={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: 'var(--primary-text)',
                  marginBottom: '2px'
                }}>{label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '12px',
          paddingBottom: '0'
        }}>
          <img loading="eager" src={appScreen2} alt="" style={{
            width: '130px',
            borderRadius: '18px',
            boxShadow: '0 20px 48px rgba(0,0,0,0.7)',
            transform: 'rotate(-3deg) translateY(16px)',
            willChange: 'transform'
          }} />
          <img loading="eager" src={appScreen1} alt="" style={{
            width: '160px',
            borderRadius: '22px',
            boxShadow: '0 28px 64px rgba(0,0,0,0.85)'
          }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Pitch Deck Slide (16:9 1920×1080) ─────────────────────────────── */
function PitchDeckSlide() {
  return (
    <div style={{
      width: '800px',
      aspectRatio: '16/9',
      background: 'var(--page-bg)',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 100%, oklch(0.72 0.16 155 / 0.15) 0%, transparent 60%)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)'
      }} />
      <div style={{ position: 'relative', textAlign: 'center', padding: '0 80px 60px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '28px', marginBottom: '36px' }} />
        <h1 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '3.4rem',
          lineHeight: 1.05,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          letterSpacing: '-0.01em',
          marginBottom: '20px'
        }}>
          The data layer<br />
          <span style={{ color: 'var(--accent)' }}>kart racing is missing.</span>
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--muted-text)',
          lineHeight: 1.65,
          maxWidth: '500px',
          margin: '0 auto 36px'
        }}>
          Kart tires are a $1,200+ annual expense for competitive racers, managed entirely by memory. Tire Track is the first purpose-built tool to change that.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          {[
            { value: '$1,200+', label: 'avg annual tire spend' },
            { value: '0', label: 'apps existed before us' },
            { value: 'Free', label: 'to start today' }
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontWeight: 700,
                fontSize: '2rem',
                color: 'var(--accent)',
                lineHeight: 1
              }}>{value}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Email Header ───────────────────────────────────────────────────── */
function EmailHeader() {
  return (
    <div style={{
      width: '600px',
      height: '280px',
      background: 'var(--page-bg)',
      borderRadius: '12px',
      overflow: 'hidden',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)'
      }} />
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: 'var(--accent)'
      }} />
      <div style={{ position: 'relative', padding: '40px 40px 40px 44px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '20px' }} />
        <h2 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '1.9rem',
          lineHeight: 1.15,
          color: 'var(--primary-text)',
          marginBottom: '10px'
        }}>
          Know your tires.<br />Win more races.
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.6, maxWidth: '280px' }}>
          Track every heat cycle, session, and wear state. Free to start.
        </p>
      </div>
      <div style={{ padding: '32px 40px 32px 0', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
        <img loading="eager" src={appScreen1} alt="" style={{
          width: '110px',
          borderRadius: '14px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.7)'
        }} />
      </div>
    </div>
  );
}

/* ─── Press Kit Hero ─────────────────────────────────────────────────── */
function PressKitHero() {
  return (
    <div style={{
      width: '700px',
      height: '467px',
      background: 'var(--page-bg)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 70% at 50% 110%, oklch(0.72 0.16 155 / 0.22) 0%, transparent 55%)'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 48px)'
      }} />
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '48px',
        textAlign: 'center'
      }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '36px', marginBottom: '28px' }} />
        <h1 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '3.2rem',
          lineHeight: 1.05,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          Tire Track
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--muted-text)',
          lineHeight: 1.65,
          maxWidth: '460px',
          marginBottom: '36px'
        }}>
          The kart tire management app for serious racers. Scan barcodes, log sessions, track heat cycles, and share data with your team — all from your phone.
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Category', value: 'Motorsport Tools' },
            { label: 'Platform', value: 'iOS + Android' },
            { label: 'Price', value: 'Free / $5 / $19 mo' }
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: 'var(--card-surface)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '10px 16px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--dim-text)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary-text)' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── App Store Screenshots Side by Side ─────────────────────────────── */
function AppStoreScreenshots() {
  return (
    <div style={{
      background: 'var(--page-bg)',
      borderRadius: '16px',
      padding: '48px',
      display: 'flex',
      gap: '24px',
      alignItems: 'flex-start',
      overflow: 'hidden'
    }}>
      {[
        { img: appScreen3, title: 'Scan', sub: 'Point and find any tire instantly' },
        { img: appScreen1, title: 'Garage', sub: 'Your full inventory at a glance' },
        { img: appScreen2, title: 'Sessions', sub: 'Complete history, every run' }
      ].map(({ img, title, sub }) => (
        <div key={title} style={{ textAlign: 'center', flex: 1 }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            borderRadius: '20px',
            padding: '8px',
            boxShadow: '0 24px 56px rgba(0,0,0,0.7)',
            marginBottom: '16px',
            display: 'inline-block'
          }}>
            <img src={img} alt={title} style={{ width: '160px', borderRadius: '14px', display: 'block' }} />
          </div>
          <div style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '1.2rem',
            color: 'var(--primary-text)',
            marginBottom: '4px'
          }}>{title}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── Onboarding Value Prop (1080x1080) ──────────────────────────────── */
function OnboardingValueProp() {
  return (
    <div style={{
      width: '520px',
      aspectRatio: '1/1',
      background: 'var(--page-bg)',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '48px'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.72 0.16 155 / 0.18) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '24px', marginBottom: '32px' }} />
        <h2 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2.5rem',
          lineHeight: 1.1,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          marginBottom: '16px'
        }}>
          Three steps to<br />
          <span style={{ color: 'var(--accent)' }}>total tire clarity.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.6 }}>
          From the first scan to the last lap — Tire Track has it all.
        </p>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { n: '1', title: 'Scan the barcode', detail: 'Point your camera at any tire.' },
          { n: '2', title: 'Log the session', detail: 'Pressure, laps, rating — 30 seconds.' },
          { n: '3', title: 'Know where you stand', detail: 'Fresh, Mid, or Worn. Always.' }
        ].map(({ n, title, detail }) => (
          <div key={n} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-chakra)',
              fontWeight: 700,
              fontSize: '0.875rem',
              flexShrink: 0
            }}>{n}</div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--primary-text)', fontSize: '0.95rem' }}>{title}</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--muted-text)', marginTop: '2px' }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Pricing Overview (16:9) ────────────────────────────────────────── */
function PricingOverviewPage() {
  return (
    <div style={{
      width: '800px',
      aspectRatio: '16/9',
      background: 'var(--card-surface)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '48px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '20px', marginBottom: '12px' }} />
        <h2 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2rem',
          color: 'var(--primary-text)'
        }}>
          Start free. Upgrade when you're ready.
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', flex: 1 }}>
        {[
          {
            name: 'Free',
            price: '$0',
            desc: 'For racers just getting started.',
            features: ['2 tire sets', 'Barcode scanning', 'Basic session logging'],
            accent: false
          },
          {
            name: 'Pro',
            price: '$5/mo',
            desc: 'For serious racers who want the full picture.',
            features: ['Unlimited tire sets', 'Lap time tracking', 'Tire pressure logs', 'Weather per session', '14-day free trial'],
            accent: true
          },
          {
            name: 'Team',
            price: '$19/mo',
            desc: 'For race teams who need to stay aligned.',
            features: ['Everything in Pro', 'Shared team garage', 'Up to 10 members', 'Real-time data sync'],
            accent: false
          }
        ].map(({ name, price, desc, features, accent }) => (
          <div key={name} style={{
            background: accent ? 'oklch(0.72 0.16 155 / 0.1)' : 'var(--input-surface)',
            borderRadius: '12px',
            border: `1px solid ${accent ? 'oklch(0.72 0.16 155 / 0.5)' : 'var(--border)'}`,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <div style={{
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: accent ? 'var(--accent)' : 'var(--primary-text)'
              }}>{name}</div>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--primary-text)',
                lineHeight: 1.2
              }}>{price}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted-text)', marginTop: '4px' }}>{desc}</div>
            </div>
            <div style={{ flex: 1 }}>
              {features.map(f => (
                <div key={f} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{
              background: accent ? 'var(--accent)' : 'transparent',
              color: accent ? 'var(--page-bg)' : 'var(--accent)',
              border: accent ? 'none' : '1px solid var(--accent)',
              borderRadius: '8px',
              padding: '8px',
              textAlign: 'center',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginTop: '12px'
            }}>
              {name === 'Free' ? 'Get Started' : `Try ${name} Free`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Race Weekend Story (Vertical) ─────────────────────────────────── */
function RaceWeekendStory() {
  return (
    <div style={{
      width: '300px',
      aspectRatio: '9/16',
      background: 'var(--page-bg)',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 100% 50% at 50% 0%, oklch(0.72 0.16 155 / 0.2) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 36px)',
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', padding: '40px 28px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '20px', marginBottom: '28px' }} />
        <h2 style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2rem',
          lineHeight: 1.1,
          color: 'var(--primary-text)',
          textTransform: 'uppercase',
          marginBottom: '12px'
        }}>
          Race morning,<br />
          <span style={{ color: 'var(--accent)' }}>no surprises.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.6, marginBottom: '24px' }}>
          Open the trailer. Scan the barcode. Know instantly if those tires are ready to race.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {[
            { status: 'FRESH', color: 'var(--tire-fresh)', bg: 'oklch(0.72 0.16 155 / 0.1)', label: 'Set A — MG SH Red · 1 session' },
            { status: 'MID', color: 'var(--tire-mid)', bg: 'oklch(0.78 0.15 75 / 0.1)', label: 'Set B — MG SH Red · 4 sessions' },
            { status: 'WORN', color: 'var(--tire-worn)', bg: 'oklch(0.68 0.22 25 / 0.1)', label: 'Set C — VEGA XH · 8 sessions' }
          ].map(({ status, color, bg, label }) => (
            <div key={status} style={{
              background: bg,
              border: `1px solid ${color}33`,
              borderRadius: '10px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted-text)' }}>{label}</span>
              <span style={{
                background: color,
                color: 'var(--page-bg)',
                padding: '2px 8px',
                borderRadius: '100px',
                fontSize: '0.65rem',
                fontWeight: 700
              }}>{status}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <img loading="eager" src={appScreen1} alt="App" style={{
            width: '180px',
            borderRadius: '18px',
            boxShadow: '0 24px 56px rgba(0,0,0,0.8)'
          }} />
        </div>
      </div>
    </div>
  );
}
