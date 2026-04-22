import { Download, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image';
import { useRef, useState } from 'react';
import logoImg from '../../imports/logo.png';
import appScreen1 from '../../imports/IMG_1411.PNG';
import appScreen2 from '../../imports/IMG_1409.PNG';
import appScreen3 from '../../imports/IMG_1418.jpg';

export function SocialMediaCards() {
  return (
    <div className="min-h-screen py-12" style={{ background: 'var(--page-bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2" style={{
            fontFamily: 'var(--font-rajdhani)',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: 'var(--primary-text)'
          }}>
            Social Media Marketing Assets
          </h1>
          <p style={{ color: 'var(--muted-text)' }}>
            Ready-to-share graphics for Instagram, Twitter, Facebook, and LinkedIn
          </p>
        </div>

        <div className="grid gap-8">
          {/* Hero Quote Card - Square (1080x1080) */}
          <CardWrapper title="Hero Quote - Instagram Square (1080x1080)">
            <HeroQuoteCard />
          </CardWrapper>

          {/* Feature Highlight Card */}
          <CardWrapper title="Feature Highlight - Instagram Square (1080x1080)">
            <FeatureCard />
          </CardWrapper>

          {/* Stat Card */}
          <CardWrapper title="Problem Statement - Instagram Square (1080x1080)">
            <StatCard />
          </CardWrapper>

          {/* Story/Reel Format - Vertical (1080x1920) */}
          <CardWrapper title="Instagram Story / Reel - Vertical (1080x1920)">
            <StoryCard />
          </CardWrapper>

          {/* Twitter/X Card - Landscape (1200x675) */}
          <CardWrapper title="Twitter/X - Landscape (1200x675)">
            <TwitterCard />
          </CardWrapper>

          {/* Testimonial Style Card */}
          <CardWrapper title="Testimonial / Quote - Instagram Square (1080x1080)">
            <TestimonialCard />
          </CardWrapper>

          {/* iPhone Mockup - Garage */}
          <CardWrapper title="iPhone Mockup - Garage View - Instagram Square (1080x1080)">
            <IPhoneMockup1 />
          </CardWrapper>

          {/* iPhone Mockup - Tire Details */}
          <CardWrapper title="iPhone Mockup - Session History - Instagram Square (1080x1080)">
            <IPhoneMockup2 />
          </CardWrapper>

          {/* iPhone Mockup - Scan */}
          <CardWrapper title="iPhone Mockup - Scan Feature - Instagram Square (1080x1080)">
            <IPhoneMockup3 />
          </CardWrapper>

          {/* Stats Grid */}
          <CardWrapper title="By The Numbers - Instagram Square (1080x1080)">
            <StatsGridCard />
          </CardWrapper>

          {/* Pain Point */}
          <CardWrapper title="Pain Point - Instagram Square (1080x1080)">
            <PainPointCard />
          </CardWrapper>

          {/* Team Feature */}
          <CardWrapper title="Team Feature - Instagram Square (1080x1080)">
            <TeamFeatureCard />
          </CardWrapper>

          {/* Use Case */}
          <CardWrapper title="Race Day Use Case - Instagram Square (1080x1080)">
            <UseCaseCard />
          </CardWrapper>

          {/* Value Prop */}
          <CardWrapper title="ROI Message - Instagram Square (1080x1080)">
            <ROICard />
          </CardWrapper>

          {/* Side by Side iPhone */}
          <CardWrapper title="Dual iPhone Mockup - Instagram Square (1080x1080)">
            <DualIPhoneCard />
          </CardWrapper>

          {/* Feature List with Screenshot */}
          <CardWrapper title="Feature List with App - Instagram Square (1080x1080)">
            <FeatureListCard />
          </CardWrapper>

          {/* Testimonial Style with App */}
          <CardWrapper title="User Quote with App - Instagram Square (1080x1080)">
            <UserQuoteCard />
          </CardWrapper>

          {/* 3 Screenshots Showcase */}
          <CardWrapper title="Triple Screenshot - Instagram Square (1080x1080)">
            <TripleScreenCard />
          </CardWrapper>

          {/* Minimalist iPhone Hero */}
          <CardWrapper title="Minimalist Hero - Instagram Square (1080x1080)">
            <MinimalHeroCard />
          </CardWrapper>

          {/* Problem Agitation */}
          <CardWrapper title="Problem Agitation - Instagram Square (1080x1080)">
            <ProblemAgitationCard />
          </CardWrapper>

          {/* Tech Comparison */}
          <CardWrapper title="Tech Inspection Comparison - Instagram Square (1080x1080)">
            <TechComparisonCard />
          </CardWrapper>

          {/* ROI Math Breakdown */}
          <CardWrapper title="ROI Math Explained - Instagram Square (1080x1080)">
            <ROIMathCard />
          </CardWrapper>

          {/* Maximize Tire Life */}
          <CardWrapper title="Maximize Tire Investment - Instagram Square (1080x1080)">
            <MaximizeTireLifeCard />
          </CardWrapper>

          {/* Session Counter */}
          <CardWrapper title="Know Your Heat Cycles - Instagram Square (1080x1080)">
            <HeatCycleCard />
          </CardWrapper>

          {/* Weekend Warrior */}
          <CardWrapper title="Weekend Racer - Instagram Square (1080x1080)">
            <WeekendWarriorCard />
          </CardWrapper>

          {/* Data Driven */}
          <CardWrapper title="Data Driven Racing - Instagram Square (1080x1080)">
            <DataDrivenCard />
          </CardWrapper>

          {/* Track Specific */}
          <CardWrapper title="Track Memory - Instagram Square (1080x1080)">
            <TrackMemoryCard />
          </CardWrapper>

          {/* Parent Mechanic */}
          <CardWrapper title="For Parents & Mechanics - Instagram Square (1080x1080)">
            <ParentMechanicCard />
          </CardWrapper>

          {/* Stop Buying Early */}
          <CardWrapper title="Stop Early Replacement - Instagram Square (1080x1080)">
            <StopEarlyReplacementCard />
          </CardWrapper>

          {/* App + Quote Combo */}
          <CardWrapper title="Real Racer Quote - Instagram Square (1080x1080)">
            <RealRacerQuoteCard />
          </CardWrapper>

          {/* Compound Tracking */}
          <CardWrapper title="Track Multiple Compounds - Instagram Square (1080x1080)">
            <CompoundTrackingCard />
          </CardWrapper>

          {/* Simple Truth */}
          <CardWrapper title="Simple Truth - Instagram Square (1080x1080)">
            <SimpleTruthCard />
          </CardWrapper>

          {/* Paddock Scene */}
          <CardWrapper title="Paddock Chaos - Instagram Square (1080x1080)">
            <PaddockSceneCard />
          </CardWrapper>

          {/* First Race Day */}
          <CardWrapper title="First Race Day - Instagram Square (1080x1080)">
            <FirstRaceDayCard />
          </CardWrapper>

          {/* Money on Track */}
          <CardWrapper title="Money Left on Track - Instagram Square (1080x1080)">
            <MoneyOnTrackCard />
          </CardWrapper>

          {/* Pressure Log */}
          <CardWrapper title="Tire Pressure Tracking - Instagram Square (1080x1080)">
            <PressureLogCard />
          </CardWrapper>

          {/* Championship Run */}
          <CardWrapper title="Championship Season - Instagram Square (1080x1080)">
            <ChampionshipCard />
          </CardWrapper>

          {/* App Interface Detail */}
          <CardWrapper title="Session Rating UI - Instagram Square (1080x1080)">
            <SessionRatingCard />
          </CardWrapper>

          {/* Mechanic Perspective */}
          <CardWrapper title="Mechanic's Tool - Instagram Square (1080x1080)">
            <MechanicPerspectiveCard />
          </CardWrapper>

          {/* Series Traveler */}
          <CardWrapper title="Multi-Track Racing - Instagram Square (1080x1080)">
            <SeriesTravelerCard />
          </CardWrapper>

          {/* Competitive Edge */}
          <CardWrapper title="Competitive Advantage - Instagram Square (1080x1080)">
            <CompetitiveEdgeCard />
          </CardWrapper>

          {/* App Animation Tease */}
          <CardWrapper title="Scan Demo - Instagram Square (1080x1080)">
            <ScanDemoCard />
          </CardWrapper>

          {/* Budget Racer */}
          <CardWrapper title="Racing on a Budget - Instagram Square (1080x1080)">
            <BudgetRacerCard />
          </CardWrapper>

          {/* Track Day Prep */}
          <CardWrapper title="Pre-Race Prep - Instagram Square (1080x1080)">
            <TrackDayPrepCard />
          </CardWrapper>

          {/* Multi-Kart Family */}
          <CardWrapper title="Multi-Kart Teams - Instagram Square (1080x1080)">
            <MultiKartFamilyCard />
          </CardWrapper>

          {/* Rental vs Own */}
          <CardWrapper title="Own Your Data - Instagram Square (1080x1080)">
            <OwnYourDataCard />
          </CardWrapper>

          {/* Launch Story */}
          <CardWrapper title="Why We Built This - Instagram Square (1080x1080)">
            <WhyWeBuiltCard />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
}

function HeroQuoteCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full overflow-hidden relative" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0" style={{
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
      <div className="w-full h-full overflow-hidden" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px'
      }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
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
      <div className="w-full h-full relative overflow-hidden" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0 opacity-40">
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
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--card-surface) 0%, var(--page-bg) 50%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '2rem'
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
              transform: 'rotate(-8deg)'
            }}>
              <img src={appScreen1} alt="App" className="w-44 rounded-xl" />
            </div>
            <div className="p-1.5 rounded-2xl" style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
              transform: 'rotate(8deg)',
              zIndex: 2
            }}>
              <img src={appScreen2} alt="App" className="w-44 rounded-xl" />
            </div>
          </div>
          <div className="flex items-center justify-center pt-4">
            <img src={logoImg} alt="Tire Track" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureListCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--card-surface)',
        borderRadius: '14px',
        padding: '2.5rem'
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
              <img src={appScreen1} alt="App" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserQuoteCard() {
  return (
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '3rem'
      }}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="p-2 rounded-2xl" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
              }}>
                <img src={appScreen2} alt="App" className="w-full rounded-xl" />
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
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'linear-gradient(135deg, var(--page-bg) 0%, var(--card-surface) 100%)',
        borderRadius: '14px',
        padding: '2.5rem'
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
    <div className="w-full" style={{ aspectRatio: '1/1', maxWidth: '540px' }}>
      <div className="w-full h-full" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px',
        padding: '2.5rem'
      }}>
        <div className="h-full grid grid-cols-2 gap-6 items-center">
          <div className="p-2 rounded-2xl" style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
            boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
          }}>
            <img src={appScreen1} alt="App" className="w-full rounded-xl" />
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
      <div className="w-full h-full relative overflow-hidden" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0 opacity-30">
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
          <img src={logoImg} alt="Tire Track" className="h-10" />
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
      <div className="w-full h-full relative overflow-hidden" style={{
        background: 'var(--page-bg)',
        borderRadius: '14px'
      }}>
        <div className="absolute inset-0" style={{
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
            You can't manage<br />
            what you<br />
            <span style={{ color: 'var(--accent)' }}>don't track</span>
          </h3>
          <p className="mb-8" style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--muted-text)',
            maxWidth: '360px'
          }}>
            Simple truth for serious racers.
          </p>
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

function CardWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!cardRef.current || exporting) return;
    setExporting(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 2, cacheBust: true });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `${title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`;
      a.click();
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="p-6" style={{
      background: 'var(--card-surface)',
      borderRadius: '14px',
      border: '1px solid var(--border)'
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
      <div className="flex justify-center" ref={cardRef}>
        {children}
      </div>
    </div>
  );
}
