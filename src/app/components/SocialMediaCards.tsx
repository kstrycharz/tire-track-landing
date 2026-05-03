import { Download, Loader2 } from 'lucide-react';
import { toBlob } from 'html-to-image';
import { useRef, useState, useEffect } from 'react';
import logoImg from '../../imports/logo.png';
import appScreen1 from '../../imports/IMG_1411.PNG';
import appScreen2 from '../../imports/IMG_1409.PNG';
import appScreen3 from '../../imports/IMG_1418.jpg';

type SocialTab = 'New' | 'Mockups' | 'Quotes' | 'Features' | 'Data' | 'All';
const SOCIAL_TABS: SocialTab[] = ['New', 'Mockups', 'Quotes', 'Features', 'Data', 'All'];

export function SocialMediaCards() {
  const [tab, setTab] = useState<SocialTab>('New');

  return (
    <div className="min-h-screen py-12" style={{ background: 'var(--page-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="mb-1" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'var(--primary-text)'
          }}>
            Social Media Assets
          </h1>
          <p style={{ color: 'var(--muted-text)' }}>
            Square 1080×1080 cards for Instagram, Twitter, Facebook, and LinkedIn
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8" style={{ scrollbarWidth: 'none' }}>
          {SOCIAL_TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: tab === t ? 'var(--accent)' : 'var(--card-surface)',
                color: tab === t ? 'var(--page-bg)' : 'var(--muted-text)',
                border: `1px solid ${tab === t ? 'transparent' : 'var(--border)'}`,
                borderRadius: '100px',
                padding: '6px 16px',
                fontWeight: 600,
                fontSize: '0.8rem',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-8">
          {/* ── NEW ───────────────────────────────────────────── */}
          <CardWrapper activeTab={tab} category="New" title="Download Free — Square (1080x1080)"><DownloadCTACard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Race Day Ready — Square (1080x1080)"><RaceDayReadyCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Scan in 2 Seconds — Square (1080x1080)"><QuickScanCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Before vs After — Square (1080x1080)"><BeforeAfterCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Season Recap — Square (1080x1080)"><SeasonRecapCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Your Tire Vault — Square (1080x1080)"><TireVaultCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="14 Day Free Trial — Square (1080x1080)"><FreeTrialCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Garage on Your Phone — Square (1080x1080)"><GaragePhoneCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Never Guess Again — Square (1080x1080)"><NeverGuessCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Team Aligned — Square (1080x1080)"><TeamAlignedCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Scan It. Know It. — Square (1080x1080)"><ScanItKnowItCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="The Tire Bible — Square (1080x1080)"><TireBibleCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Built for Karting — Square (1080x1080)"><BuiltForKartingCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Every Session Counts — Square (1080x1080)"><EverySessionCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Know What's On — Square (1080x1080)"><KnowWhatsOnCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="App Store Launch — Square (1080x1080)"><AppStoreLaunchCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Heat Cycle Counter — Square (1080x1080)"><HeatCycleCounterCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Race Weekend Prep — Square (1080x1080)"><RaceWeekendPrepCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Stop Guessing — Square (1080x1080)"><StopGuessingCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="New" title="Track Every Set — Square (1080x1080)"><TrackEverySetCard /></CardWrapper>

          {/* ── MOCKUPS ───────────────────────────────────────── */}
          <CardWrapper activeTab={tab} category="Mockups" title="iPhone Mockup - Garage View (1080x1080)"><IPhoneMockup1 /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="iPhone Mockup - Session History (1080x1080)"><IPhoneMockup2 /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="iPhone Mockup - Scan Feature (1080x1080)"><IPhoneMockup3 /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Dual iPhone Mockup (1080x1080)"><DualIPhoneCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Triple Screenshot (1080x1080)"><TripleScreenCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Minimalist Hero (1080x1080)"><MinimalHeroCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Feature List with App (1080x1080)"><FeatureListCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="User Quote with App (1080x1080)"><UserQuoteCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Real Racer Quote (1080x1080)"><RealRacerQuoteCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Session Rating UI (1080x1080)"><SessionRatingCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Scan Demo (1080x1080)"><ScanDemoCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Mockups" title="Instagram Story / Reel (1080x1920)"><StoryCard /></CardWrapper>

          {/* ── QUOTES ────────────────────────────────────────── */}
          <CardWrapper activeTab={tab} category="Quotes" title="Hero Quote (1080x1080)"><HeroQuoteCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Testimonial / Quote (1080x1080)"><TestimonialCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Weekend Racer (1080x1080)"><WeekendWarriorCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Paddock Chaos (1080x1080)"><PaddockSceneCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="First Race Day (1080x1080)"><FirstRaceDayCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Competitive Advantage (1080x1080)"><CompetitiveEdgeCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Simple Truth (1080x1080)"><SimpleTruthCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Why We Built This (1080x1080)"><WhyWeBuiltCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Quotes" title="Twitter/X - Landscape (1200x675)"><TwitterCard /></CardWrapper>

          {/* ── FEATURES ──────────────────────────────────────── */}
          <CardWrapper activeTab={tab} category="Features" title="Feature Highlight (1080x1080)"><FeatureCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Problem Statement (1080x1080)"><StatCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Team Feature (1080x1080)"><TeamFeatureCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Know Your Heat Cycles (1080x1080)"><HeatCycleCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Race Day Use Case (1080x1080)"><UseCaseCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Track Multiple Compounds (1080x1080)"><CompoundTrackingCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Tire Pressure Tracking (1080x1080)"><PressureLogCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Championship Season (1080x1080)"><ChampionshipCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Mechanic's Tool (1080x1080)"><MechanicPerspectiveCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Multi-Track Racing (1080x1080)"><SeriesTravelerCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Multi-Kart Teams (1080x1080)"><MultiKartFamilyCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="For Parents & Mechanics (1080x1080)"><ParentMechanicCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Features" title="Pre-Race Prep (1080x1080)"><TrackDayPrepCard /></CardWrapper>

          {/* ── DATA ──────────────────────────────────────────── */}
          <CardWrapper activeTab={tab} category="Data" title="By The Numbers (1080x1080)"><StatsGridCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Pain Point (1080x1080)"><PainPointCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="ROI Message (1080x1080)"><ROICard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="ROI Math Explained (1080x1080)"><ROIMathCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Maximize Tire Investment (1080x1080)"><MaximizeTireLifeCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Data Driven Racing (1080x1080)"><DataDrivenCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Track Memory (1080x1080)"><TrackMemoryCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Problem Agitation (1080x1080)"><ProblemAgitationCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Tech Inspection Comparison (1080x1080)"><TechComparisonCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Stop Early Replacement (1080x1080)"><StopEarlyReplacementCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Money Left on Track (1080x1080)"><MoneyOnTrackCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Racing on a Budget (1080x1080)"><BudgetRacerCard /></CardWrapper>
          <CardWrapper activeTab={tab} category="Data" title="Own Your Data (1080x1080)"><OwnYourDataCard /></CardWrapper>
        </div>
      </div>
    </div>
  );
}

function HeroQuoteCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full relative" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0" style={{
          borderRadius: '14px',
          overflow: 'hidden',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)'
        }}></div>
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
          <img src={logoImg} alt="Tire Track" className="h-16 mb-8" />
          <h2 className="mb-6 uppercase tracking-wide" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.1,
            color: 'var(--primary-text)'
          }}>
            Know your tires.<br />Win more races.
          </h2>
          <p className="mb-8" style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--muted-text)',
            maxWidth: '400px'
          }}>
            Stop guessing. Start tracking. Every tire set gets a history.
          </p>
          <div className="px-6 py-2 inline-block" style={{
            background: 'var(--accent)',
            color: 'var(--page-bg)',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}>
            TireTrack.io
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Feature Spotlight
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Heat Cycle Tracking
            </h3>
            <p className="mb-6" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Never over-run a set again. Tire Track counts every session automatically — you always know where each set stands in its life.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--accent)'
                }}>
                  4
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--dim-text)' }}>
                  Heat Cycles
                </div>
              </div>
              <div className="flex-1 p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--tire-mid)'
                }}>
                  Mid
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--dim-text)' }}>
                  Wear Status
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-8" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full flex flex-col" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-6" style={{
            fontFamily: 'var(--font-chakra)',
            fontSize: '5rem',
            fontWeight: 700,
            lineHeight: 1,
            color: 'var(--accent)'
          }}>
            $400
          </div>
          <h3 className="mb-4" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2rem',
            color: 'var(--primary-text)'
          }}>
            per tire set
          </h3>
          <p className="mb-8" style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--muted-text)',
            maxWidth: '400px'
          }}>
            You're making expensive decisions from memory. Track every set's history and stop leaving money on the track.
          </p>
        </div>
        <div className="flex items-center justify-between pt-6" style={{
          borderTop: '1px solid var(--border)'
        }}>
          <img src={logoImg} alt="Tire Track" className="h-8" />
          <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
            Start tracking free
          </div>
        </div>
      </div>
    </div>
  );
}

function StoryCard() {
  return (
    <div className="w-full mx-auto" style={{ aspectRatio: '9/16', maxWidth: '324px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)'
        }}></div>
        <div className="relative h-full flex flex-col justify-between p-8">
          <div className="flex justify-between items-start">
            <img src={logoImg} alt="Tire Track" className="h-10" />
          </div>
          <div>
            <h2 className="mb-4 uppercase tracking-wide" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.1,
              color: 'var(--primary-text)'
            }}>
              Every tire set gets a history
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Scan barcodes instantly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Log every session</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Know your wear state</span>
              </div>
            </div>
            <div className="text-center py-3 px-6" style={{
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              borderRadius: '9999px',
              fontWeight: 600
            }}>
              Start Free → TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwitterCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '16/9', maxWidth: '600px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px'
      }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20" style={{ borderRadius: '0 14px 14px 0', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1752348510978-4575000c0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
        </div>
        <div className="relative h-full flex flex-col justify-between p-8">
          <img src={logoImg} alt="Tire Track" className="h-8 w-auto" />
          <div>
            <h3 className="mb-3" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: 'var(--primary-text)',
              maxWidth: '400px'
            }}>
              Stop guessing which tires to run
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              maxWidth: '400px'
            }}>
              Track every set's heat cycles, sessions, and wear state. Built for kart racers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontSize: '4rem',
              lineHeight: 1,
              color: 'var(--accent)',
              opacity: 0.3
            }}>
              "
            </div>
            <p className="mb-8" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontSize: '1.75rem',
              fontWeight: 600,
              lineHeight: 1.4,
              color: 'var(--primary-text)'
            }}>
              Which set did I run at Whiteland last month?
            </p>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              You have four sets in the trailer and no idea which one is freshest. You're making a $400 decision from memory.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <div>
              <div style={{
                color: 'var(--primary-text)',
                fontWeight: 600,
                marginBottom: '0.25rem'
              }}>
                Sound familiar?
              </div>
              <div style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>
                There's a better way →
              </div>
            </div>
            <img src={logoImg} alt="Tire Track" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhoneMockup1() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full relative" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0 opacity-40" style={{ borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1752348510978-4575000c0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="mb-6 text-center">
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Your entire tire inventory
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)'
            }}>
              in your pocket
            </p>
          </div>
          <div className="relative">
            <div className="p-2 rounded-3xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}>
              <img src={appScreen1} alt="App" className="w-64 rounded-2xl" />
            </div>
          </div>
          <div className="mt-8">
            <img src={logoImg} alt="Tire Track" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhoneMockup2() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col items-center justify-between">
          <div className="text-center">
            <div className="inline-block px-3 py-1 mb-3" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Complete History
            </div>
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: 'var(--primary-text)'
            }}>
              Track every session
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)'
            }}>
              Ratings, lap times, heat cycles
            </p>
          </div>
          <div className="relative">
            <div className="p-2 rounded-3xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
            }}>
              <img src={appScreen2} alt="App" className="w-56 rounded-2xl" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-4" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Start Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IPhoneMockup3() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col items-center justify-between">
          <div className="text-center">
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              color: 'var(--primary-text)'
            }}>
              Scan in 2 seconds
            </h3>
            <p className="mb-4" style={{
              fontSize: '1rem',
              color: 'var(--muted-text)',
              maxWidth: '300px'
            }}>
              Point your phone at any tire barcode and instantly see its complete history
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-50" style={{
              background: 'var(--accent)'
            }}></div>
            <div className="relative p-2 rounded-3xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}>
              <img src={appScreen3} alt="App" className="w-56 rounded-2xl" />
            </div>
          </div>
          <div className="text-center">
            <img src={logoImg} alt="Tire Track" className="h-7 mb-2" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>
              Built for the paddock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsGridCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col">
          <h3 className="mb-8 text-center" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2rem',
            color: 'var(--primary-text)'
          }}>
            Why racers choose Tire Track
          </h3>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="p-4 text-center" style={{
              background: 'var(--input-surface)',
              borderRadius: '10px'
            }}>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}>
                2<span style={{ fontSize: '1.5rem' }}>sec</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '0.5rem' }}>
                Barcode scan time
              </div>
            </div>
            <div className="p-4 text-center" style={{
              background: 'var(--input-surface)',
              borderRadius: '10px'
            }}>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}>
                ∞
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '0.5rem' }}>
                Tire sets tracked
              </div>
            </div>
            <div className="p-4 text-center" style={{
              background: 'var(--input-surface)',
              borderRadius: '10px'
            }}>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}>
                $0
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '0.5rem' }}>
                To get started
              </div>
            </div>
            <div className="p-4 text-center" style={{
              background: 'var(--input-surface)',
              borderRadius: '10px'
            }}>
              <div style={{
                fontFamily: 'var(--font-chakra)',
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}>
                10
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '0.5rem' }}>
                Team members max
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6 mt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PainPointCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontSize: '4rem',
              lineHeight: 1
            }}>
              🤔
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              "Wait... was this the set I ran at Mid-Ohio or GingerMan?"
            </h3>
            <p className="mb-6" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              If you've ever stood in your trailer trying to remember which tires you used where, you need Tire Track.
            </p>
            <div className="inline-block px-6 py-3" style={{
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              borderRadius: '9999px',
              fontWeight: 600
            }}>
              Never forget again
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamFeatureCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Team Plan
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Shared team garage
            </h3>
            <p className="mb-6" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Driver, mechanic, and coach all see the same tire data in real time. No more miscommunication in the paddock.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                1
              </div>
              <span style={{ color: 'var(--primary-text)' }}>Driver logs the session</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                2
              </div>
              <span style={{ color: 'var(--primary-text)' }}>Team sees it instantly</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600
              }}>
                3
              </div>
              <span style={{ color: 'var(--primary-text)' }}>Everyone's aligned</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              $19/mo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UseCaseCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontFamily: 'var(--font-chakra)',
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--accent)'
            }}>
              Race Day Scenario
            </div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              It's Sunday morning at the track
            </h3>
            <div className="space-y-4">
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                borderLeft: '3px solid var(--dim-text)'
              }}>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  ❌ Without Tire Track
                </div>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                  "I think these are the ones from last weekend? Or was that the other set..."
                </p>
              </div>
              <div className="p-4" style={{
                background: 'var(--accent-soft)',
                borderRadius: '10px',
                borderLeft: '3px solid var(--accent)'
              }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  ✅ With Tire Track
                </div>
                <p style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                  "Set 3, 4 heat cycles, 3.8 stars, perfect for qualifying."
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Confidence on race day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ROICard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              One over-run tire set costs more than 5 years of Tire Track
            </h3>
            <div className="mb-8 p-6" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px'
            }}>
              <div className="flex items-baseline justify-between mb-4">
                <span style={{ color: 'var(--muted-text)' }}>New tire set</span>
                <span style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--tire-worn)'
                }}>
                  $400
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span style={{ color: 'var(--muted-text)' }}>Tire Track Pro</span>
                <span style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--accent)'
                }}>
                  $5/mo
                </span>
              </div>
            </div>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Stop the expensive guesswork. Start tracking.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Try 14 days free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DualIPhoneCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px', overflow: 'hidden' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 50%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '2rem',
        overflow: 'hidden'
      }}>
        <div className="h-full flex flex-col">
          <div className="text-center mb-4">
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Track → Review → Win
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--muted-text)'
            }}>
              From the garage to the podium
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="p-1.5 rounded-2xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              transform: 'rotate(-8deg)',
              willChange: 'transform'
            }}>
              <img src={appScreen1} alt="App" className="w-44 rounded-xl" />
            </div>
            <div className="p-1.5 rounded-2xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              transform: 'rotate(8deg)',
              zIndex: 2,
              willChange: 'transform'
            }}>
              <img src={appScreen2} alt="App" className="w-44 rounded-xl" />
            </div>
          </div>
          <div className="flex items-center justify-center pt-4 pb-2">
            <img src={logoImg} alt="Tire Track" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureListCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px', overflow: 'hidden' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '2.5rem',
        overflow: 'hidden'
      }}>
        <div className="h-full grid grid-cols-2 gap-6">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6" style={{
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 700,
                fontSize: '1.75rem',
                color: 'var(--primary-text)'
              }}>
                Everything you need to manage your tires
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Barcode scanning
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Heat cycle tracking
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Session logging
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Wear state status
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Team sharing
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                  <span style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    Lap time tracking
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img src={logoImg} alt="Tire Track" className="h-12" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-2 rounded-2xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
            }}>
              <img src={appScreen1} alt="App" className="w-44 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserQuoteCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px', overflow: 'hidden' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem',
        overflow: 'hidden'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="p-2 rounded-2xl" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
              }}>
                <img src={appScreen2} alt="App" className="w-40 rounded-xl" />
              </div>
              <div>
                <div className="mb-4" style={{
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  opacity: 0.3
                }}>
                  "
                </div>
                <p className="mb-4" style={{
                  fontFamily: 'var(--font-rajdhani)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  color: 'var(--primary-text)'
                }}>
                  I used to guess. Now I know.
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--muted-text)'
                }}>
                  Game changer for anyone serious about karting.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TripleScreenCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px', overflow: 'hidden' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '2.5rem',
        overflow: 'hidden'
      }}>
        <div className="h-full flex flex-col">
          <div className="text-center mb-4">
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: 'var(--primary-text)'
            }}>
              Built for kart racers
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--muted-text)'
            }}>
              Simple, fast, and always accessible
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <div className="p-1.5 rounded-xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img src={appScreen3} alt="App" className="w-32 rounded-lg" />
            </div>
            <div className="p-1.5 rounded-xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img src={appScreen1} alt="App" className="w-32 rounded-lg" />
            </div>
            <div className="p-1.5 rounded-xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img src={appScreen2} alt="App" className="w-32 rounded-lg" />
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <img src={logoImg} alt="Tire Track" className="h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MinimalHeroCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '4rem'
      }}>
        <div className="h-full flex flex-col items-center justify-center text-center">
          <img src={logoImg} alt="Tire Track" className="h-16 mb-12" />
          <div className="mb-8">
            <div className="p-2 rounded-3xl inline-block" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}>
              <img src={appScreen1} alt="App" className="w-64 rounded-2xl" />
            </div>
          </div>
          <h3 className="mb-4" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2rem',
            color: 'var(--primary-text)',
            textTransform: 'uppercase',
            letterSpacing: '0.02em'
          }}>
            Track Your Tires
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'var(--muted-text)',
            maxWidth: '300px'
          }}>
            Professional tire management for serious kart racers
          </p>
        </div>
      </div>
    </div>
  );
}

function ProblemAgitationCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              How many times have you grabbed the wrong tires?
            </h3>
            <div className="space-y-4 mb-6">
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                borderLeft: '3px solid var(--tire-worn)'
              }}>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                  Ran a worn set thinking it was fresh
                </p>
              </div>
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                borderLeft: '3px solid var(--tire-worn)'
              }}>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                  Wasted a qualifying set on practice
                </p>
              </div>
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                borderLeft: '3px solid var(--tire-worn)'
              }}>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                  Bought new tires because you lost track
                </p>
              </div>
            </div>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--primary-text)'
            }}>
              There's a better way. And it's free to start.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-12" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Get Started Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaximizeTireLifeCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6 uppercase tracking-wide" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.5rem',
              lineHeight: 1.1,
              color: 'var(--primary-text)'
            }}>
              Get every lap out of every set
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Tires are expensive. Make them last by knowing exactly when each set is at peak performance — and when it's done.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--tire-fresh)' }}></div>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Don't run sets past their prime
                  </div>
                  <p style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    Know when performance drops off
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--tire-mid)' }}></div>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Don't replace sets too early
                  </div>
                  <p style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    Track data shows when there's life left
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ background: 'var(--accent)' }}></div>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Match the right set to the right session
                  </div>
                  <p style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    Practice vs qualifying vs finals
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Start Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeatCycleCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-6" style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--accent-soft)',
              border: '3px solid var(--accent)'
            }}>
              <span style={{
                fontFamily: 'var(--font-chakra)',
                fontSize: '3.5rem',
                fontWeight: 700,
                color: 'var(--accent)',
                lineHeight: 1
              }}>
                4
              </span>
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Heat cycles tracked automatically
            </h3>
            <p className="mb-8" style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)',
              maxWidth: '360px',
              margin: '0 auto'
            }}>
              Every session gets counted. You always know if a set is fresh, mid-life, or done. No guessing, no spreadsheets, no memory required.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" style={{
                background: 'var(--tire-fresh)',
                color: 'var(--page-bg)',
                fontFamily: 'var(--font-chakra)',
                fontWeight: 700
              }}>
                1-2
              </div>
              <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>Fresh</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" style={{
                background: 'var(--tire-mid)',
                color: 'var(--page-bg)',
                fontFamily: 'var(--font-chakra)',
                fontWeight: 700
              }}>
                3-5
              </div>
              <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>Mid</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center" style={{
                background: 'var(--tire-worn)',
                color: 'var(--page-bg)',
                fontFamily: 'var(--font-chakra)',
                fontWeight: 700
              }}>
                6+
              </div>
              <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>Worn</div>
            </div>
          </div>
          <div className="mt-8">
            <img src={logoImg} alt="Tire Track" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

function WeekendWarriorCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Weekend Racer
            </div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              You race 2-3 times a month. That's a lot of tire sets to remember.
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Between work, family, and the rest of life, you don't have time to maintain a tire spreadsheet. Tire Track does it for you — scan once, never forget.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3" style={{
                background: 'var(--input-surface)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '0.25rem'
                }}>
                  12
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>
                  races/year
                </div>
              </div>
              <div className="text-center p-3" style={{
                background: 'var(--input-surface)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '0.25rem'
                }}>
                  4-6
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>
                  tire sets
                </div>
              </div>
              <div className="text-center p-3" style={{
                background: 'var(--input-surface)',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '0.25rem'
                }}>
                  0
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>
                  memory needed
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataDrivenCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6 uppercase tracking-wide" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.5rem',
              lineHeight: 1.1,
              color: 'var(--primary-text)'
            }}>
              Stop racing on instinct.<br />
              <span style={{ color: 'var(--accent)' }}>Start racing on data.</span>
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              You already log lap times and kart setup. Why guess on tires? Track performance ratings, pressure, weather, and track conditions for every session.
            </p>
            <div className="p-5" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px'
            }}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Session Rating
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ color: star <= 4 ? 'var(--accent)' : 'var(--border)', fontSize: '1.25rem' }}>★</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Best Lap
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'var(--primary-text)'
                  }}>
                    36.201
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Track
                  </div>
                  <div style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    LO206
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Conditions
                  </div>
                  <div style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                    75°F Dry
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Track smarter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackMemoryCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              "Which set worked best at Mid-Ohio?"
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Going back to a track you ran 3 months ago? Tire Track remembers which sets performed well, what compounds you used, and how many cycles they had.
            </p>
            <div className="space-y-3">
              <div className="p-4 flex items-center justify-between" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Set 3 - VEGA SH
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    Mid-Ohio • 4 cycles • 3.8★
                  </div>
                </div>
                <div style={{
                  background: 'var(--tire-mid)',
                  color: 'var(--page-bg)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  Mid
                </div>
              </div>
              <div className="p-4 flex items-center justify-between" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Set 8 - MOJO D2XX
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    Mid-Ohio • 8 cycles • 2.1★
                  </div>
                </div>
                <div style={{
                  background: 'var(--tire-worn)',
                  color: 'var(--page-bg)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  Worn
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Track-specific memory
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentMechanicCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: 1
            }}>
              👨‍👩‍👧‍👦
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              For parents running their kid's program
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              You're managing the kart, the trailer, the travel, and the tire budget. Tire Track keeps one less thing in your head. Your driver focuses on driving. You focus on the big picture.
            </p>
            <div className="p-5" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--primary-text)',
                marginBottom: '0.5rem'
              }}>
                "As a parent-mechanic, I don't have time for spreadsheets. This just works."
              </p>
              <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                — Every karting parent
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Built for busy teams
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StopEarlyReplacementCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              Stop buying new tires out of paranoia
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              When you can't remember a set's history, you buy new ones "just to be safe." That's expensive safety. With Tire Track, you know exactly what you have — and when it's actually time to replace.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                opacity: 0.6
              }}>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  ❌ Guessing
                </div>
                <p style={{ color: 'var(--muted-text)', fontSize: '0.95rem' }}>
                  "Not sure, better buy new ones"
                </p>
              </div>
              <div className="p-4" style={{
                background: 'var(--accent-soft)',
                borderRadius: '10px',
                border: '1px solid var(--accent)'
              }}>
                <div style={{ color: 'var(--accent)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  ✅ Knowing
                </div>
                <p style={{ color: 'var(--primary-text)', fontSize: '0.95rem' }}>
                  "3 cycles, still good for 2 more"
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Buy smart, not scared
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealRacerQuoteCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px', overflow: 'hidden' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '2.5rem',
        overflow: 'hidden'
      }}>
        <div className="h-full grid grid-cols-2 gap-6 items-center">
          <div className="p-2 rounded-2xl" style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
          }}>
            <img src={appScreen1} alt="App" className="w-40 rounded-xl" />
          </div>
          <div>
            <div className="mb-4" style={{
              fontSize: '2.5rem',
              lineHeight: 1,
              color: 'var(--accent)',
              opacity: 0.3
            }}>
              "
            </div>
            <p className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontSize: '1.5rem',
              fontWeight: 600,
              lineHeight: 1.3,
              color: 'var(--primary-text)'
            }}>
              Best $5 I spend every month
            </p>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--muted-text)'
            }}>
              I know which tires to run before I even get to the track. That's worth way more than a Starbucks.
            </p>
            <div className="mt-6">
              <img src={logoImg} alt="Tire Track" className="h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompoundTrackingCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Running multiple compounds?
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              VEGA, MOJO, MG, Bridgestone — track them all. Each compound ages differently. Tire Track keeps them organized so you're never mixing up your SH with your D2XX.
            </p>
            <div className="space-y-3">
              <div className="p-4 flex items-center justify-between" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                border: '1px solid var(--tire-fresh)'
              }}>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600 }}>
                    MG SH (Red)
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    1 session • Apex Karting Set
                  </div>
                </div>
                <div style={{
                  background: 'var(--tire-fresh)',
                  color: 'var(--page-bg)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  FRESH
                </div>
              </div>
              <div className="p-4 flex items-center justify-between" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                border: '1px solid var(--tire-worn)'
              }}>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600 }}>
                    MOJO D2XX (Red)
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    8 sessions • GLSS
                  </div>
                </div>
                <div style={{
                  background: 'var(--tire-worn)',
                  color: 'var(--page-bg)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  WORN
                </div>
              </div>
              <div className="p-4 flex items-center justify-between" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                border: '1px solid var(--tire-mid)'
              }}>
                <div>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600 }}>
                    VEGA VAH (Red)
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                    4 sessions • Set 1 - 2026
                  </div>
                </div>
                <div style={{
                  background: 'var(--tire-mid)',
                  color: 'var(--page-bg)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  USED
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              All compounds, one app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaddockSceneCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              Saturday morning. 8am. The paddock.
            </h3>
            <div className="space-y-4 mb-8">
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <p style={{ color: 'var(--muted-text)', fontSize: '1rem', lineHeight: 1.6 }}>
                  You're unloading the trailer. Practice starts in 45 minutes. Four tire sets are stacked in the corner.
                </p>
              </div>
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <p style={{ color: 'var(--muted-text)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Your kid asks: "Which ones are we running?"
                </p>
              </div>
              <div className="p-5" style={{
                background: 'var(--accent-soft)',
                borderRadius: '10px',
                border: '2px solid var(--accent)'
              }}>
                <p style={{ color: 'var(--primary-text)', fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.6 }}>
                  You pull out your phone. 2 seconds later: "Set 3. Four heat cycles. Ran a 36.2 here last time. Perfect for practice."
                </p>
              </div>
            </div>
            <p style={{ color: 'var(--accent)', fontSize: '1rem', fontWeight: 600 }}>
              That's the difference.
            </p>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstRaceDayCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              New Racer?
            </div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              Start tracking from day one
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              You just bought your first kart and your first set of tires. Scan them now. Six months from now, when you have 5 sets in the trailer, you'll thank yourself.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                  background: 'var(--accent)',
                  color: 'var(--page-bg)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}>
                  1
                </div>
                <span style={{ color: 'var(--primary-text)' }}>Buy your first tire set</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                  background: 'var(--accent)',
                  color: 'var(--page-bg)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}>
                  2
                </div>
                <span style={{ color: 'var(--primary-text)' }}>Scan the barcode</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                  background: 'var(--accent)',
                  color: 'var(--page-bg)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}>
                  3
                </div>
                <span style={{ color: 'var(--primary-text)' }}>Never lose track again</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Free to start
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoneyOnTrackCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div style={{
              fontFamily: 'var(--font-chakra)',
              fontSize: '6rem',
              fontWeight: 700,
              color: 'var(--accent)',
              lineHeight: 1,
              marginBottom: '1rem'
            }}>
              $100
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: 'var(--primary-text)'
            }}>
              left on the track
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)',
              maxWidth: '360px',
              margin: '0 auto 2rem'
            }}>
              Every time you pull a tire set one session early because you can't remember its history, you're throwing away performance and money.
            </p>
            <div className="inline-block px-6 py-3" style={{
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              borderRadius: '9999px',
              fontWeight: 600
            }}>
              Track everything
            </div>
          </div>
          <img src={logoImg} alt="Tire Track" className="h-7" />
        </div>
      </div>
    </div>
  );
}

function PressureLogCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Log tire pressure with every session
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Hot/cold pressure, track temp, weather — it all affects performance. Tire Track logs it so you can dial in your setup next time you're at the same track in similar conditions.
            </p>
            <div className="p-6" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px'
            }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Cold PSI
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-chakra)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--primary-text)'
                  }}>
                    10.5
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                    Hot PSI
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-chakra)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--accent)'
                  }}>
                    12.8
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4" style={{
                borderTop: '1px solid var(--border)'
              }}>
                <span style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                  Track: 75°F • Dry
                </span>
                <span style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
                  4★
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Setup dialed in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChampionshipCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: 1
            }}>
              🏆
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Running for a championship?
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Every point matters. Don't lose a race because you grabbed the wrong tires in the paddock rush. Championship teams track everything. Now you can too.
            </p>
            <div className="p-5" style={{
              background: 'var(--input-surface)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--primary-text)'
              }}>
                Champions don't leave performance to chance. They track, analyze, and execute.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Championship tool
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRatingCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '2.5rem'
      }}>
        <div className="h-full flex flex-col">
          <div className="text-center mb-6">
            <h3 className="mb-2" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '1.75rem',
              color: 'var(--primary-text)'
            }}>
              How did the tires feel?
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--muted-text)'
            }}>
              Rate every session in seconds
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="p-2 rounded-2xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
            }}>
              <img src={appScreen2} alt="App" className="w-64 rounded-xl" />
            </div>
          </div>
          <div className="text-center pt-6">
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: star <= 4 ? 'var(--accent)' : 'var(--input-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: star <= 4 ? 'var(--page-bg)' : 'var(--dim-text)'
                }}>
                  ★
                </div>
              ))}
            </div>
            <img src={logoImg} alt="Tire Track" className="h-6 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MechanicPerspectiveCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: 1
            }}>
              🔧
            </div>
            <h3 className="mb-4" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              For the mechanic who's wrenching on 3 karts
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              You're juggling multiple drivers, multiple karts, and way too many tire sets. Tire Track keeps it all organized. Scan a barcode, know instantly which kart it belongs to and when it was last run.
            </p>
            <div className="space-y-3">
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Kart #1 - Driver A
                </div>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                  3 tire sets tracked
                </div>
              </div>
              <div className="p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <div style={{ color: 'var(--primary-text)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Kart #2 - Driver B
                </div>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                  4 tire sets tracked
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Team plan: $19/mo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SeriesTravelerCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Racing at 6 different tracks this season?
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Tire Track remembers which sets you ran where — and how they performed. Going back to Mid-Ohio in July? Check what worked in April.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { track: 'Mid-Ohio', sets: 2 },
                { track: 'GingerMan', sets: 3 },
                { track: 'PittRace', sets: 2 },
                { track: 'New Castle', sets: 4 },
                { track: 'Whiteland', sets: 3 },
                { track: 'Concept Hauler', sets: 2 }
              ].map((item, i) => (
                <div key={i} className="p-3" style={{
                  background: 'var(--input-surface)',
                  borderRadius: '8px'
                }}>
                  <div style={{ color: 'var(--primary-text)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    {item.track}
                  </div>
                  <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>
                    {item.sets} sets logged
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Track-by-track history
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetitiveEdgeCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full relative" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0 opacity-30" style={{ borderRadius: '14px', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1752348510978-4575000c0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
          <h3 className="mb-8 uppercase tracking-wide" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.1,
            color: 'var(--primary-text)'
          }}>
            Your competitors are guessing.<br />
            <span style={{ color: 'var(--accent)' }}>You're not.</span>
          </h3>
          <p className="mb-8" style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--muted-text)',
            maxWidth: '400px'
          }}>
            That's the competitive edge. Data over instinct. Precision over guesswork.
          </p>
          <img src={logoImg} alt="Tire Track" className="h-20" />
        </div>
      </div>
    </div>
  );
}

function ScanDemoCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '2.5rem'
      }}>
        <div className="h-full flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 mb-4" style={{
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Watch it work
            </div>
            <h3 className="mb-3" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Point. Scan. Know.
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted-text)'
            }}>
              2 seconds from barcode to complete history
            </p>
          </div>
          <div className="relative mb-6">
            <div className="absolute -inset-6 rounded-full blur-3xl opacity-40" style={{
              background: 'var(--accent)'
            }}></div>
            <div className="relative p-2 rounded-3xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              boxShadow: '0 25px 70px rgba(0,0,0,0.6)'
            }}>
              <img src={appScreen3} alt="App" className="w-56 rounded-2xl" />
            </div>
          </div>
          <div className="text-center">
            <img src={logoImg} alt="Tire Track" className="h-7 mb-2" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Download free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BudgetRacerCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.25rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              Racing on a tight budget?
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Every tire set needs to earn its keep. Tire Track helps you squeeze every lap out of every dollar. No wasted sets. No early replacements. Just smart tire management.
            </p>
            <div className="p-6" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px'
            }}>
              <div className="flex items-center justify-between mb-4">
                <span style={{ color: 'var(--muted-text)' }}>Tire budget this season</span>
                <span style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-text)'
                }}>
                  $1,200
                </span>
              </div>
              <div className="flex items-center justify-between pb-4" style={{
                borderBottom: '1px solid var(--border)'
              }}>
                <span style={{ color: 'var(--muted-text)' }}>Tire Track Pro annual</span>
                <span style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)'
                }}>
                  $60
                </span>
              </div>
              <div className="mt-4 text-center">
                <span style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
                  5% of your tire budget protects 100% of it
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Smart investment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackDayPrepCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Thursday Night
            </div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Plan your tire strategy before you leave home
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Open Tire Track on Thursday night. Review your sets. Decide what's going on the kart for practice, qualifying, and finals. Load the trailer with confidence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <span style={{ color: 'var(--primary-text)' }}>Practice</span>
                <span style={{ color: 'var(--tire-mid)', fontWeight: 600 }}>Set 8 (Mid)</span>
              </div>
              <div className="flex items-center justify-between p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <span style={{ color: 'var(--primary-text)' }}>Qualifying</span>
                <span style={{ color: 'var(--tire-fresh)', fontWeight: 600 }}>Set 1 (Fresh)</span>
              </div>
              <div className="flex items-center justify-between p-4" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px'
              }}>
                <span style={{ color: 'var(--primary-text)' }}>Finals</span>
                <span style={{ color: 'var(--tire-mid)', fontWeight: 600 }}>Set 3 (Mid)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Strategy first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiKartFamilyCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              Two kids. Two karts. One app.
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Team Garage keeps everyone's tire data separate but accessible. Your cadet and junior drivers each have their own sets, tracked independently. No cross-contamination.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 text-center" style={{
                background: 'var(--card-surface)',
                borderRadius: '10px',
                border: '2px solid var(--accent)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  5
                </div>
                <div style={{ color: 'var(--muted-text)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  Cadet sets
                </div>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>
                  Kart #1
                </div>
              </div>
              <div className="p-4 text-center" style={{
                background: 'var(--card-surface)',
                borderRadius: '10px',
                border: '2px solid var(--accent)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-chakra)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>
                  7
                </div>
                <div style={{ color: 'var(--muted-text)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  Junior sets
                </div>
                <div style={{ color: 'var(--dim-text)', fontSize: '0.75rem' }}>
                  Kart #2
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Team plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnYourDataCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-6 uppercase tracking-wide" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.5rem',
              lineHeight: 1.1,
              color: 'var(--primary-text)'
            }}>
              Your tires.<br />
              Your data.<br />
              <span style={{ color: 'var(--accent)' }}>Your control.</span>
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Not a spreadsheet you'll lose. Not a memory you'll forget. Your complete tire history, always accessible, always yours.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Never lose your data</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Access from any device</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }}></div>
                <span style={{ color: 'var(--primary-text)' }}>Export anytime</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              Built for racers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyWeBuiltCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 mb-4" style={{
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-chakra)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Origin Story
            </div>
            <h3 className="mb-6" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              color: 'var(--primary-text)'
            }}>
              We built Tire Track because we needed it
            </h3>
            <p className="mb-6" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Standing in the paddock at Mid-Ohio, trying to remember which tires we ran at New Castle three weeks ago. Spreadsheets weren't cutting it. Memory definitely wasn't cutting it.
            </p>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              So we built the tool we wished existed. Point your phone. Scan the barcode. Know everything. Simple as that.
            </p>
            <div className="p-5" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--primary-text)'
              }}>
                Built by kart racers, for kart racers.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--dim-text)', fontSize: '0.875rem' }}>
              TireTrack.io
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleTruthCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full relative" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0" style={{
          borderRadius: '14px',
          overflow: 'hidden',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)'
        }}></div>
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
          <h3 className="mb-8 uppercase tracking-wide" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1.1,
            color: 'var(--primary-text)'
          }}>
            If tech can scan your tires,<br />
            <span style={{ color: 'var(--accent)' }}>why can't you?</span>
          </h3>
          <img src={logoImg} alt="Tire Track" className="h-12" />
        </div>
      </div>
    </div>
  );
}

function ROIMathCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-8" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2rem',
              lineHeight: 1.2,
              color: 'var(--primary-text)'
            }}>
              One over-run tire set costs more than 5 years of Tire Track
            </h3>

            <div className="space-y-6 mb-8">
              <div className="p-5" style={{
                background: 'var(--input-surface)',
                borderRadius: '10px',
                border: '1px solid var(--tire-worn)'
              }}>
                <div className="flex items-center justify-between mb-2">
                  <span style={{
                    color: 'var(--muted-text)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-chakra)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    One Wasted Tire Set
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-chakra)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--tire-worn)',
                    lineHeight: 1
                  }}>
                    $400
                  </span>
                </div>
                <p style={{
                  color: 'var(--dim-text)',
                  fontSize: '0.875rem',
                  lineHeight: 1.5
                }}>
                  Ran it one session too far, performance dropped off
                </p>
              </div>

              <div className="text-center" style={{
                color: 'var(--muted-text)',
                fontSize: '1.5rem',
                fontWeight: 700
              }}>
                vs.
              </div>

              <div className="p-5" style={{
                background: 'var(--accent-soft)',
                borderRadius: '10px',
                border: '1px solid var(--accent)'
              }}>
                <div className="flex items-center justify-between mb-2">
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-chakra)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Tire Track Pro × 5 Years
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-chakra)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    lineHeight: 1
                  }}>
                    $300
                  </span>
                </div>
                <p style={{
                  color: 'var(--muted-text)',
                  fontSize: '0.875rem',
                  lineHeight: 1.5
                }}>
                  $5/month × 60 months = Never over-run a set again
                </p>
              </div>
            </div>

            <div className="p-4 text-center" style={{
              background: 'var(--page-bg)',
              borderRadius: '10px'
            }}>
              <p style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--primary-text)'
              }}>
                One mistake pays for the app 5× over
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-6" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Try 14 days free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechComparisonCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="mb-8 uppercase tracking-wide" style={{
              fontFamily: 'var(--font-rajdhani)',
              fontWeight: 700,
              fontSize: '2.75rem',
              lineHeight: 1.1,
              color: 'var(--primary-text)'
            }}>
              If tech can scan your tires,<br />
              <span style={{ color: 'var(--accent)' }}>why can't you?</span>
            </h3>
            <p className="mb-8" style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              color: 'var(--muted-text)'
            }}>
              Tech inspectors scan tire barcodes to verify compound and legality. You should be scanning them to track heat cycles, sessions, and performance.
            </p>
            <div className="p-6 mb-6" style={{
              background: 'var(--card-surface)',
              borderRadius: '10px',
              borderLeft: '3px solid var(--accent)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: 'var(--primary-text)'
              }}>
                Tire Track turns every barcode scan into a complete tire history. Same tech, better use.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6" style={{
            borderTop: '1px solid var(--border)'
          }}>
            <img src={logoImg} alt="Tire Track" className="h-12" />
            <div style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600 }}>
              Start Scanning Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardWrapper({ title, children, category, activeTab }: {
  title: string;
  children: React.ReactNode;
  category?: SocialTab;
  activeTab?: SocialTab;
}) {
  if (category && activeTab && activeTab !== 'All' && activeTab !== category) return null;
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);
  const [preview, setPreview] = useState({ scale: 1, visW: 0, visH: 0 });

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const card = cardRef.current;
      if (!container || !card) return;
      const s = Math.min(1, container.clientWidth / card.scrollWidth);
      setPreview({ scale: s, visW: card.scrollWidth * s, visH: card.scrollHeight * s });
    };
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, []);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!cardRef.current || exporting) return;
    setExporting(true);
    try {
      await document.fonts.ready;
      // Wait for every image in the card to fully load before capturing
      await Promise.all(
        Array.from(cardRef.current.querySelectorAll('img')).map(img =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise<void>(res => {
                img.addEventListener('load', () => res(), { once: true });
                img.addEventListener('error', () => res(), { once: true });
              })
        )
      );
      const blob = await toBlob(cardRef.current, { pixelRatio: 2 });
      if (!blob) throw new Error('Failed to generate image');
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
      alert('Export failed — try again or check the browser console for details.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="p-6" style={{
      background: 'var(--card-surface)',
      borderRadius: '14px',
      border: '1px solid var(--border)',
      overflow: 'hidden'
    }}>
      <div className="flex items-center justify-between mb-4">
        <h3 style={{
          fontFamily: 'var(--font-chakra)',
          fontWeight: 600,
          color: 'var(--primary-text)'
        }}>
          {title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            disabled={exporting}
            className="p-2 transition-all hover:scale-105"
            style={{
              background: 'var(--input-surface)',
              borderRadius: '6px',
              color: 'var(--muted-text)',
              opacity: exporting ? 0.5 : 1
            }}
            title="Download as PNG"
          >
            {exporting
              ? <Loader2 className="w-4 h-4 animate-spin" />
              : <Download className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div ref={containerRef}>
        <div style={{
          width: preview.visW > 0 ? `${preview.visW}px` : '100%',
          height: preview.visH > 0 ? `${preview.visH}px` : undefined,
          overflow: 'hidden'
        }}>
          <div style={{
            transform: preview.scale < 1 ? `scale(${preview.scale})` : undefined,
            transformOrigin: 'top left'
          }}>
            <div ref={cardRef} className="flex justify-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── NEW CARDS ──────────────────────────────────────────────────────── */

function DownloadCTACard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.72 0.16 155 / 0.2) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '36px', marginBottom: '28px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '3rem', lineHeight: 1.05, color: 'var(--primary-text)', textTransform: 'uppercase', marginBottom: '12px' }}>
          Free to download.<br /><span style={{ color: 'var(--accent)' }}>Free to start.</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '380px' }}>
          Track your kart tires from day one — no credit card required.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--accent)', color: 'var(--page-bg)', padding: '12px 28px', borderRadius: '100px', fontWeight: 700, fontSize: '1rem' }}>
            Download Now
          </div>
          <div style={{ border: '1px solid var(--strong-border)', color: 'var(--muted-text)', padding: '12px 28px', borderRadius: '100px', fontSize: '1rem' }}>
            TireTrack.io
          </div>
        </div>
      </div>
    </div>
  );
}

function RaceDayReadyCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', position: 'relative', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 44px)' }} />
      <div style={{ position: 'relative' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '24px', marginBottom: '28px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1.05, color: 'var(--primary-text)', textTransform: 'uppercase', marginBottom: '10px' }}>
          Race morning.<br /><span style={{ color: 'var(--accent)' }}>Zero guesswork.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.65, maxWidth: '380px' }}>
          Open the trailer. Scan the tire. Know if it's ready to race — in two seconds.
        </p>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { label: 'Set A — MG SH · 1 session', status: 'FRESH', color: 'var(--tire-fresh)' },
          { label: 'Set B — MG SH · 4 sessions', status: 'MID', color: 'var(--tire-mid)' },
          { label: 'Set C — VEGA XH · 8 sessions', status: 'WORN', color: 'var(--tire-worn)' },
        ].map(({ label, status, color }) => (
          <div key={status} style={{ background: 'var(--card-surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>{label}</span>
            <span style={{ background: color, color: 'var(--page-bg)', padding: '3px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700 }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickScanCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <img src={logoImg} alt="Tire Track" style={{ height: '24px', marginBottom: '32px' }} />
      <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'var(--accent-soft)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', fontSize: '2rem' }}>⬛</div>
      <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.8rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '12px' }}>
        Scan.<br /><span style={{ color: 'var(--accent)' }}>Find. Know.</span>
      </h2>
      <p style={{ fontSize: '1.05rem', color: 'var(--muted-text)', lineHeight: 1.65, maxWidth: '360px', marginBottom: '28px' }}>
        Point your camera at any tire's barcode and get its full history — heat cycles, last session, wear status — instantly.
      </p>
      <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2 seconds · Zero typing · TireTrack.io</div>
    </div>
  );
}

function BeforeAfterCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ background: 'rgba(200,50,50,0.08)', padding: '40px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'oklch(0.68 0.22 25)' }}>Before</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Sticky notes in the trailer', 'Text messages to the mechanic', '"I think it was 3 sessions?"', 'Wrong tires on race day', '$400 set binned too early'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'oklch(0.68 0.22 25)', flexShrink: 0 }}>✕</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--muted-text)', lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
        <div />
      </div>
      <div style={{ background: 'oklch(0.72 0.16 155 / 0.06)', padding: '40px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>After</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Scan any tire in 2 seconds', 'Team sees same data', 'Exact heat cycle count', 'Right tires every time', 'Max every dollar spent'].map(t => (
            <div key={t} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--primary-text)', lineHeight: 1.4 }}>{t}</span>
            </div>
          ))}
        </div>
        <img src={logoImg} alt="Tire Track" style={{ height: '18px' }} />
      </div>
    </div>
  );
}

function SeasonRecapCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '24px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--primary-text)', textTransform: 'uppercase', marginBottom: '8px' }}>Your 2025 Season<br /><span style={{ color: 'var(--accent)' }}>by the numbers.</span></h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted-text)', lineHeight: 1.6 }}>Every set you ran. Every session you logged. All of it, tracked.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {[
          { n: '6', label: 'Tire Sets' },
          { n: '38', label: 'Sessions Logged' },
          { n: '4', label: 'Tracks Visited' },
          { n: '$0', label: 'Sets Over-run' },
        ].map(({ n, label }) => (
          <div key={label} style={{ background: 'var(--input-surface)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--font-chakra)', fontWeight: 700, fontSize: '2rem', color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--dim-text)', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TireVaultCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
        <span style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Your Garage</span>
      </div>
      <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.4rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '24px' }}>Every tire.<br /><span style={{ color: 'var(--accent)' }}>Every session.</span><br />One place.</h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-end' }}>
        {[
          { name: 'MG SH #1', compound: 'Red · Set A', cycles: '1 cycle', status: 'FRESH', color: 'var(--tire-fresh)' },
          { name: 'MG SH #2', compound: 'Red · Set B', cycles: '4 cycles', status: 'MID', color: 'var(--tire-mid)' },
          { name: 'VEGA XH #1', compound: 'Yellow · Set C', cycles: '8 cycles', status: 'WORN', color: 'var(--tire-worn)' },
          { name: 'Bridgestone YLC', compound: 'Set D', cycles: '2 cycles', status: 'FRESH', color: 'var(--tire-fresh)' },
        ].map(({ name, compound, cycles, status, color }) => (
          <div key={name} style={{ background: 'var(--card-surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--primary-text)' }}>{name}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>{compound} · {cycles}</div>
            </div>
            <span style={{ background: color, color: 'var(--page-bg)', padding: '2px 9px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700 }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FreeTrialCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 50%, oklch(0.72 0.16 155 / 0.12) 0%, transparent 70%)' }} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'var(--page-bg)', padding: '6px 20px', borderRadius: '100px', fontFamily: 'var(--font-chakra)', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '28px' }}>
          Pro Plan
        </div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '3.5rem', lineHeight: 1, color: 'var(--primary-text)', marginBottom: '8px' }}>14 Days<br /><span style={{ color: 'var(--accent)' }}>Free.</span></h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted-text)', lineHeight: 1.65, marginBottom: '32px', maxWidth: '360px' }}>
          Unlimited tire sets, lap time tracking, pressure logs, weather per session. Try everything — no card required.
        </p>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '16px' }} />
        <div style={{ fontSize: '0.875rem', color: 'var(--dim-text)' }}>TireTrack.io · $5/mo after trial</div>
      </div>
    </div>
  );
}

function GaragePhoneCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 100%)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.8rem', lineHeight: 1.1, color: 'var(--primary-text)', textTransform: 'uppercase', marginBottom: '12px' }}>
          Your garage.<br /><span style={{ color: 'var(--accent)' }}>Always in your pocket.</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted-text)', lineHeight: 1.65, maxWidth: '380px' }}>
          No clipboards, no spreadsheets, no sticky notes. Just open the app and know.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <img src={appScreen1} alt="App" style={{ width: '160px', borderRadius: '18px', boxShadow: '0 20px 48px rgba(0,0,0,0.7)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          {['Barcode scanning', 'Heat cycle counter', 'Session notes', 'Team sharing'].map(f => (
            <div key={f} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.875rem', color: 'var(--primary-text)' }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NeverGuessCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '48px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 44px), repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 44px)' }} />
      <div style={{ position: 'relative' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '24px', marginBottom: '36px' }} />
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dim-text)', marginBottom: '12px', textDecoration: 'line-through' }}>Guess. Hope. Lose.</div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '3.2rem', lineHeight: 1.05, color: 'var(--primary-text)', textTransform: 'uppercase', marginBottom: '16px' }}>
          Know.<br /><span style={{ color: 'var(--accent)' }}>Win more.</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--muted-text)', lineHeight: 1.65, maxWidth: '360px', marginBottom: '32px' }}>
          Tire Track turns your most expensive variable into your most reliable data point.
        </p>
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.8rem', color: 'var(--dim-text)', letterSpacing: '0.06em' }}>TireTrack.io</div>
      </div>
    </div>
  );
}

function TeamAlignedCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '24px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.5rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '10px' }}>
          Driver. Mechanic.<br />Coach. <span style={{ color: 'var(--accent)' }}>One garage.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted-text)', lineHeight: 1.65 }}>
          The Team plan gives everyone on your crew real-time access to the same tire data. No more wrong sets.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { role: 'Driver', task: 'Checks wear status before practice' },
          { role: 'Mechanic', task: 'Logs session after every run' },
          { role: 'Coach', task: 'Reviews tire history between sessions' },
        ].map(({ role, task }) => (
          <div key={role} style={{ display: 'flex', gap: '12px', alignItems: 'center', background: 'var(--input-surface)', borderRadius: '10px', padding: '12px 14px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{role[0]}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.825rem', color: 'var(--primary-text)' }}>{role}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--dim-text)' }}>{task}</div>
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'right', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>Team Plan · $19/mo</div>
      </div>
    </div>
  );
}

/* ─── Scan It. Know It. ─────────────────────────────────────────────────── */
function ScanItKnowItCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: '#0A0B0D', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '48px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(var(--accent-rgb,100,200,120),0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px', fontWeight: 700 }}>Quick Scan</div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '3rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '16px' }}>
          Scan It.<br /><span style={{ color: 'var(--accent)' }}>Know It.</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: '340px' }}>
          Point your camera at any tire. Tire Track logs the compound, pressure, and heat cycles — instantly.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {['Compound', 'Pressure', 'Heat Cycles', 'Wear'].map(tag => (
          <div key={tag} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '6px 12px', fontSize: '0.72rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)' }}>{tag}</div>
        ))}
      </div>
    </div>
  );
}

/* ─── The Tire Bible ──────────────────────────────────────────────────────── */
function TireBibleCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.65rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, opacity: 0.8 }}>Free to start</div>
      </div>
      <div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.8rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '14px' }}>
          Your tire's<br /><span style={{ color: 'var(--accent)' }}>complete history</span><br />in one place.
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)', lineHeight: 1.65 }}>
          Every session. Every track. Every set. Tire Track builds the record your paddock notebook never could.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['Sessions logged', 'Compounds tracked', 'Heat cycles', 'Pressure history'].map((item, i) => (
          <div key={i} style={{ flex: '1 1 45%', background: 'var(--input-surface)', borderRadius: '8px', padding: '10px 12px', fontSize: '0.75rem', color: 'var(--dim-text)', fontWeight: 500 }}>{item}</div>
        ))}
      </div>
    </div>
  );
}

/* ─── Built for Karting ──────────────────────────────────────────────────── */
function BuiltForKartingCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'linear-gradient(135deg, #0e1117 0%, #0A0B0D 100%)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '200px', background: 'linear-gradient(to top, rgba(var(--accent-rgb,100,200,120),0.07), transparent)', pointerEvents: 'none' }} />
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.8rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '16px' }}>
          Built for<br /><span style={{ color: 'var(--accent)' }}>karting.</span><br />Not spreadsheets.
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: '360px' }}>
          Generic apps don't understand heat cycles, compounds, or kart tire rotations. Tire Track does.
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
        <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>Available on iPhone · Free to download</span>
      </div>
    </div>
  );
}

/* ─── Every Session Counts ───────────────────────────────────────────────── */
function EverySessionCard() {
  const sessions = [
    { track: 'PFi', compound: 'MG Red', heat: 3, wear: 72 },
    { track: 'Rowrah', compound: 'Bridgestone', heat: 7, wear: 41 },
    { track: 'Clay Pigeon', compound: 'MG Yellow', heat: 1, wear: 90 },
  ];
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '24px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.4rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '8px' }}>
          Every session.<br /><span style={{ color: 'var(--accent)' }}>Always recorded.</span>
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginBottom: '20px' }}>Log in seconds, access forever.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {sessions.map(s => (
          <div key={s.track} style={{ display: 'flex', alignItems: 'center', background: 'var(--input-surface)', borderRadius: '10px', padding: '10px 14px', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent)', textAlign: 'center', lineHeight: 1.2, flexShrink: 0 }}>{s.track}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary-text)' }}>{s.compound}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--dim-text)' }}>{s.heat} heat cycles</div>
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: s.wear > 70 ? 'var(--accent)' : s.wear > 40 ? '#f5a623' : '#e53e3e' }}>{s.wear}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Know What's On ─────────────────────────────────────────────────────── */
function KnowWhatsOnCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: '#0A0B0D', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '380px', height: '380px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <div style={{ fontSize: '4.5rem', marginBottom: '8px' }}>🏁</div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.6rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '14px' }}>
          Always know<br /><span style={{ color: 'var(--accent)' }}>what's on.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
          No more kneeling in the rain trying to read a compound marking. Tire Track tells you exactly what's fitted — before you even touch the kart.
        </p>
      </div>
      <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>tiretrack.app</div>
    </div>
  );
}

/* ─── App Store Launch ────────────────────────────────────────────────────── */
function AppStoreLaunchCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'linear-gradient(145deg, #0f1520, #0A0B0D)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
        <div style={{ background: 'var(--accent)', color: '#000', borderRadius: '20px', padding: '4px 14px', fontSize: '0.7rem', fontWeight: 800, fontFamily: 'var(--font-chakra)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Now Live</div>
      </div>
      <div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.8rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '14px' }}>
          The kart tire app<br /><span style={{ color: 'var(--accent)' }}>you've been waiting for.</span>
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: '380px' }}>
          Tire Track is now available on the App Store. Free to download, free to start. Upgrade when you're ready.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ background: '#fff', color: '#000', borderRadius: '10px', padding: '10px 20px', fontSize: '0.8rem', fontWeight: 700 }}>📱 Download on the App Store</div>
      </div>
    </div>
  );
}

/* ─── Heat Cycle Counter ──────────────────────────────────────────────────── */
function HeatCycleCounterCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <div style={{ fontFamily: 'var(--font-chakra)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '10px' }}>Tire Intelligence</div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.6rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '14px' }}>
          Heat cycle<br /><span style={{ color: 'var(--accent)' }}>tracking</span><br />that actually works.
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.65 }}>
          Tire Track counts every heat cycle automatically. Know when to rotate, when to retire, and when to push hard.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {[1,2,3,4,5,6,7,8].map(n => (
          <div key={n} style={{ width: '36px', height: '36px', borderRadius: '8px', background: n <= 5 ? 'var(--accent-soft)' : 'var(--input-surface)', border: `1px solid ${n <= 5 ? 'var(--accent)' : 'transparent'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: n <= 5 ? 'var(--accent)' : 'var(--dim-text)' }}>{n}</div>
        ))}
      </div>
    </div>
  );
}

/* ─── Race Weekend Prep ───────────────────────────────────────────────────── */
function RaceWeekendPrepCard() {
  const checklist = [
    { done: true, item: 'Check heat cycles on Set A' },
    { done: true, item: 'Log Friday practice pressure' },
    { done: true, item: 'Rotate to fresh compound' },
    { done: false, item: 'Review wear history at track' },
    { done: false, item: 'Post-race condition log' },
  ];
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--page-bg)', borderRadius: '20px', overflow: 'hidden', padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 700, fontSize: '2.2rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '6px' }}>
          Race weekend<br /><span style={{ color: 'var(--accent)' }}>checklist.</span>
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--muted-text)', marginBottom: '18px' }}>From van unload to podium — stay on top of every set.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {checklist.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: c.done ? 'var(--accent)' : 'transparent', border: `1.5px solid ${c.done ? 'var(--accent)' : 'var(--border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {c.done && <span style={{ fontSize: '10px', color: '#000', fontWeight: 900 }}>✓</span>}
            </div>
            <span style={{ fontSize: '0.82rem', color: c.done ? 'var(--muted-text)' : 'var(--primary-text)', textDecoration: c.done ? 'line-through' : 'none', opacity: c.done ? 0.6 : 1 }}>{c.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stop Guessing ───────────────────────────────────────────────────────── */
function StopGuessingCard() {
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: '#0A0B0D', borderRadius: '20px', overflow: 'hidden', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 40px)', pointerEvents: 'none' }} />
      <img src={logoImg} alt="Tire Track" style={{ height: '22px' }} />
      <div>
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 900, fontSize: '3.5rem', color: '#fff', textTransform: 'uppercase', lineHeight: 1, marginBottom: '16px' }}>
          Stop<br /><span style={{ color: 'var(--accent)', WebkitTextStroke: '0px' }}>guessing.</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
          You wouldn't guess your fuel load. Why guess your tires?<br /><br />Tire Track gives you the data to make confident decisions — every session, every weekend.
        </p>
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', borderRadius: '10px', padding: '12px 20px', width: 'fit-content' }}>
        <span style={{ fontWeight: 800, fontSize: '0.875rem', color: '#000' }}>Download free on iPhone</span>
      </div>
    </div>
  );
}

/* ─── Track Every Set ────────────────────────────────────────────────────── */
function TrackEverySetCard() {
  const sets = [
    { label: 'Set A', compound: 'MG Red', cycles: 5, status: 'Race' },
    { label: 'Set B', compound: 'MG Yellow', cycles: 2, status: 'Practice' },
    { label: 'Set C', compound: 'Bridgestone', cycles: 9, status: 'Retired' },
  ];
  return (
    <div style={{ width: '540px', aspectRatio: '1/1', background: 'var(--card-surface)', borderRadius: '20px', overflow: 'hidden', padding: '44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img src={logoImg} alt="Tire Track" style={{ height: '22px', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 800, fontSize: '2.6rem', color: 'var(--primary-text)', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '10px' }}>
          Track<br /><span style={{ color: 'var(--accent)' }}>every set.</span>
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', lineHeight: 1.6, marginBottom: '20px' }}>Manage multiple sets across multiple karts. Tire Track keeps them all straight.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {sets.map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', background: 'var(--input-surface)', borderRadius: '10px', padding: '12px 16px', gap: '14px' }}>
            <div style={{ fontWeight: 800, fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-chakra)', width: '40px', flexShrink: 0 }}>{s.label}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--primary-text)' }}>{s.compound}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--dim-text)' }}>{s.cycles} heat cycles</div>
            </div>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', background: s.status === 'Race' ? 'var(--accent-soft)' : s.status === 'Retired' ? 'rgba(229,62,62,0.12)' : 'rgba(255,255,255,0.06)', color: s.status === 'Race' ? 'var(--accent)' : s.status === 'Retired' ? '#e53e3e' : 'var(--dim-text)' }}>{s.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
