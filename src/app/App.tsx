import { useState } from 'react';
import { Star, HelpCircle, Users, RefreshCw, Check } from 'lucide-react';
import logoImg from '../imports/logo.png';
import appScreen1 from '../imports/IMG_1411.PNG';
import appScreen2 from '../imports/IMG_1409.PNG';
import appScreen3 from '../imports/IMG_1418.jpg';
import { SocialMediaCards } from './components/SocialMediaCards';

export default function App() {
  const [view, setView] = useState<'landing' | 'social'>('social');

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* View Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setView('landing')}
          className="px-4 py-2 transition-all duration-200"
          style={{
            background: view === 'landing' ? 'var(--accent)' : 'var(--card-surface)',
            color: view === 'landing' ? 'var(--page-bg)' : 'var(--muted-text)',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => setView('social')}
          className="px-4 py-2 transition-all duration-200"
          style={{
            background: view === 'social' ? 'var(--accent)' : 'var(--card-surface)',
            color: view === 'social' ? 'var(--page-bg)' : 'var(--muted-text)',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}
        >
          Social Media
        </button>
      </div>

      {view === 'social' ? <SocialMediaCards /> : <LandingPage />}
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50" style={{
        background: 'var(--page-bg)',
        borderBottom: '1px solid var(--strong-border)',
        borderTop: '2px solid transparent',
        borderImage: 'linear-gradient(90deg, var(--accent) 0%, var(--accent) 28%, transparent 28%, transparent 32%, var(--accent) 32%, var(--accent) 100%)',
        borderImageSlice: 1
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img src={logoImg} alt="Tire Track" className="h-8" />
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors" style={{ color: 'var(--muted-text)' }}>Log In</a>
            <button className="px-6 py-2 transition-all duration-200 active:scale-[0.97] hover:-translate-y-px" style={{
              background: 'var(--accent)',
              color: 'var(--page-bg)',
              borderRadius: '9999px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600
            }}>
              Start for Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: 'var(--page-bg)' }}>
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1752348510978-4575000c0e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6)' }}
          />
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="uppercase tracking-wide mb-6" style={{
                fontFamily: 'var(--font-rajdhani)',
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.1,
                color: 'var(--primary-text)'
              }}>
                Know your tires. Win more races.
              </h1>
              <p className="mb-8" style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--muted-text)'
              }}>
                Kart tires are your biggest expense and your biggest variable. Tire Track gives every set a history — scanned, logged, and tracked from the first lap to the last. No more guessing. No more over-running. Just cleaner decisions, faster.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 transition-all duration-200 active:scale-[0.97] hover:-translate-y-px" style={{
                  background: 'var(--accent)',
                  color: 'var(--page-bg)',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  boxShadow: '0 1px 0 rgba(255,255,255,0.22) inset, 0 8px 24px -12px var(--accent-glow)'
                }}>
                  Start for Free
                </button>
                <a href="#how-it-works" className="px-8 py-3 transition-opacity hover:opacity-80 underline" style={{
                  color: 'var(--dim-text)'
                }}>
                  See how it works
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                <img src={appScreen1} alt="Tire Track App" className="w-full rounded-3xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20" style={{ background: 'var(--page-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4" style={{
            fontFamily: 'var(--font-chakra)',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--accent)'
          }}>
            Sound familiar?
          </div>
          <h2 className="mb-12" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--primary-text)'
          }}>
            Every racer has been here.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ProblemCard
              icon={<HelpCircle className="w-6 h-6" style={{ color: 'var(--accent)' }} />}
              title="Which set did I run at Whiteland last month?"
              description="You have four sets in the trailer and no idea which one is freshest. You're making a $400 decision from memory."
            />
            <ProblemCard
              icon={<RefreshCw className="w-6 h-6" style={{ color: 'var(--accent)' }} />}
              title="Was this set on its 4th or 5th heat cycle?"
              description="Push a set one session too far and performance drops off a cliff. Run it one session short and you're leaving money on the track."
            />
            <ProblemCard
              icon={<Users className="w-6 h-6" style={{ color: 'var(--accent)' }} />}
              title="My mechanic put on the wrong tires — again."
              description="When tire data lives in your head, it doesn't travel. Everyone on the team is working from a different version of the truth."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20" style={{ background: 'var(--card-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4" style={{
            fontFamily: 'var(--font-chakra)',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'var(--accent)'
          }}>
            Simple by design.
          </div>
          <h2 className="mb-16" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--primary-text)'
          }}>
            Built for the paddock, not the office.
          </h2>

          <div className="space-y-20">
            <StepCard
              number="1"
              title="Scan"
              description="Point your phone at the tire barcode. Tire Track finds the set instantly and shows you everything — last session, heat cycles, wear state. Takes two seconds."
              image={appScreen3}
              reverse={false}
            />
            <StepCard
              number="2"
              title="Log"
              description="After each session, record how the tires felt. Star rating, lap times, tire pressure, track conditions, weather. Thirty seconds of data entry, a full picture of every set you own."
              image={appScreen2}
              reverse={true}
            />
            <StepCard
              number="3"
              title="Know"
              description="Every set shows its wear state at a glance. Status badges: Fresh (green), Mid (amber), Worn (red). When you open the trailer door on race morning, you know exactly what you're working with."
              image={appScreen1}
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'var(--page-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--primary-text)'
          }}>
            Everything you need. Nothing you don't.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              title="Heat cycle tracking"
              description="Tire Track counts every session automatically. You always know where a set stands in its life."
            />
            <FeatureCard
              title="Session logging"
              description="Lap times, pressure, track name, weather, and a star rating. Every run, recorded."
            />
            <FeatureCard
              title="Wear status at a glance"
              description="Fresh, Mid, Worn. Color-coded and always current."
            />
            <FeatureCard
              title="Barcode scanning"
              description="Scan any tire in the trailer and pull up its full history instantly."
            />
            <FeatureCard
              title="Team garage"
              description="Share your full tire inventory with your team. Driver, mechanic, and coach all see the same data."
            />
            <FeatureCard
              title="Built for trackside"
              description="Mobile-first, fast, and works where you need it — in the paddock, not at a desk."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ background: 'var(--card-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--primary-text)'
          }}>
            Start free. Upgrade when you're ready.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              name="Free"
              subtitle="For racers just getting started."
              price="$0"
              features={[
                '2 tire sets',
                'Barcode scanning',
                'Basic session logging'
              ]}
              ctaText="Get Started Free"
              ctaVariant="outline"
            />
            <PricingCard
              name="Pro"
              subtitle="For serious racers who want the full picture."
              price="$5"
              period="/mo"
              badge="Most Popular"
              features={[
                'Unlimited tire sets',
                'Tire pressure logging',
                'Lap time tracking',
                'Weather data per session',
                '14-day free trial'
              ]}
              ctaText="Try Pro Free"
              ctaVariant="filled"
              highlighted={true}
            />
            <PricingCard
              name="Team"
              subtitle="For race teams who need to stay aligned."
              price="$19"
              period="/mo"
              features={[
                'Everything in Pro',
                'Shared team garage',
                'Up to 10 members',
                'Real-time tire data for the whole team'
              ]}
              ctaText="Start Team Trial"
              ctaVariant="outline"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--page-bg)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px)'
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'var(--primary-text)'
          }}>
            Your tires are an investment. Treat them like one.
          </h2>
          <p className="mb-8" style={{
            fontSize: '1.125rem',
            color: 'var(--muted-text)'
          }}>
            Join racers who've stopped guessing and started winning.
          </p>
          <button className="px-8 py-3 transition-all duration-200 active:scale-[0.97] hover:-translate-y-px" style={{
            background: 'var(--accent)',
            color: 'var(--page-bg)',
            borderRadius: '9999px',
            fontWeight: 600,
            boxShadow: '0 1px 0 rgba(255,255,255,0.22) inset, 0 8px 24px -12px var(--accent-glow)'
          }}>
            Create Free Account
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{
        background: 'var(--page-bg)',
        borderTop: '1px solid var(--strong-border)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logoImg} alt="Tire Track" className="h-8" />
            <div className="flex gap-8">
              <a href="#" className="transition-opacity hover:opacity-80" style={{ color: 'var(--dim-text)' }}>About</a>
              <a href="#" className="transition-opacity hover:opacity-80" style={{ color: 'var(--dim-text)' }}>Support</a>
              <a href="#" className="transition-opacity hover:opacity-80" style={{ color: 'var(--dim-text)' }}>Privacy</a>
              <a href="#" className="transition-opacity hover:opacity-80" style={{ color: 'var(--dim-text)' }}>Terms</a>
            </div>
            <div style={{ color: 'var(--dim-text)' }}>
              © 2026 Tire Track
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 transition-all duration-200 hover:-translate-y-1" style={{
      background: 'var(--card-surface)',
      borderRadius: '14px',
      borderLeft: '3px solid var(--accent)',
      boxShadow: '0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px -16px rgba(0,0,0,0.8)'
    }}>
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2" style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        fontSize: '1.125rem',
        color: 'var(--primary-text)'
      }}>
        {title}
      </h3>
      <p style={{ color: 'var(--muted-text)', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}

function StepCard({ number, title, description, image, reverse }: {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="mb-4" style={{
          fontFamily: 'var(--font-chakra)',
          fontSize: '3rem',
          fontWeight: 700,
          color: 'var(--accent)',
          lineHeight: 1
        }}>
          {number}
        </div>
        <h3 className="mb-4" style={{
          fontFamily: 'var(--font-rajdhani)',
          fontWeight: 700,
          fontSize: '2rem',
          color: 'var(--primary-text)'
        }}>
          {title}
        </h3>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: 1.7,
          color: 'var(--muted-text)'
        }}>
          {description}
        </p>
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
          <img src={image} alt={title} className="w-full rounded-3xl shadow-2xl" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 transition-all duration-200 hover:-translate-y-1" style={{
      background: 'var(--card-surface)',
      borderRadius: '14px',
      boxShadow: '0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px -16px rgba(0,0,0,0.8)'
    }}>
      <div className="w-3 h-3 rounded-full mb-4" style={{ background: 'var(--accent)' }}></div>
      <h3 className="mb-2" style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 600,
        fontSize: '1.125rem',
        color: 'var(--primary-text)'
      }}>
        {title}
      </h3>
      <p style={{ color: 'var(--muted-text)', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}

function PricingCard({
  name,
  subtitle,
  price,
  period,
  badge,
  features,
  ctaText,
  ctaVariant,
  highlighted
}: {
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaVariant: 'outline' | 'filled';
  highlighted?: boolean;
}) {
  return (
    <div className="p-8 transition-all duration-200 hover:-translate-y-1" style={{
      background: highlighted ? 'var(--accent-soft)' : 'var(--card-surface)',
      borderRadius: '14px',
      border: highlighted ? '1px solid var(--accent)' : '1px solid var(--border)',
      boxShadow: '0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 24px -16px rgba(0,0,0,0.8)',
      position: 'relative'
    }}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1" style={{
          background: 'var(--accent)',
          color: 'var(--page-bg)',
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {badge}
        </div>
      )}
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <h3 style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '1.5rem',
            color: 'var(--primary-text)'
          }}>
            {name}
          </h3>
          {period && <span style={{ color: 'var(--muted-text)' }}>·</span>}
          <div style={{ fontFamily: 'var(--font-chakra)', color: 'var(--muted-text)' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-text)' }}>{price}</span>
            {period && <span>{period}</span>}
          </div>
        </div>
        <p style={{ color: 'var(--muted-text)' }}>{subtitle}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
            <span style={{ color: 'var(--primary-text)' }}>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full px-6 py-3 transition-all duration-200 active:scale-[0.97] hover:-translate-y-px" style={{
        background: ctaVariant === 'filled' ? 'var(--accent)' : 'transparent',
        color: ctaVariant === 'filled' ? 'var(--page-bg)' : 'var(--accent)',
        border: ctaVariant === 'outline' ? '1px solid var(--accent)' : 'none',
        borderRadius: '10px',
        fontWeight: 600,
        boxShadow: ctaVariant === 'filled' ? '0 1px 0 rgba(255,255,255,0.22) inset, 0 8px 24px -12px var(--accent-glow)' : 'none'
      }}>
        {ctaText}
      </button>
    </div>
  );
}
