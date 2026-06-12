'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import ColorBends from '../three/ColorBends';
import DashboardCarousel from '../ui/DashboardCarousel';
import MagneticButton from '../ui/MagneticButton';
import { useAuth } from '@/context/AuthContext';

export default function HeroSection() {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-content > *:not(.hero-image)', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      })
        .from('.hero-image', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.4');
    }, container);

    return () => ctx.revert();
  }, []);

  const { openDemoModal } = useAuth();

  const handleDemoClick = () => {
    openDemoModal();
  };
  
  const handleExploreClick = () => {
    // This could scroll down to features or open a video
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const providerTypes = [
    { 
      name: 'Hospitals', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    },
    { 
      name: 'Agencies', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    },
    { 
      name: 'Nursing\nProviders', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    { 
      name: 'Rehab &\nTherapy', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    { 
      name: 'Palliative\nCare', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    },
    { 
      name: 'Community\nCare', 
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    },
  ];

  return (
    <section ref={container} className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden" id="hero">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#080C0C] z-0" />

      {/* ReactBits Color Bends Background */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen">
        <ColorBends
          colors={["#0E7A80", "#3B82F6", "#00ffd1"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
        />
      </div>

      {/* Dark background radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,transparent_30%,#080C0C_90%)] z-10 pointer-events-none" />

      <Container className="relative z-20">
        <div className="hero-content flex flex-col items-start text-left max-w-[1200px] mx-auto mt-12 md:mt-20">
          
          <div className="w-full lg:w-[60%] pr-0 lg:pr-10">
            <div className="inline-flex items-center gap-2 pr-4 pl-3 py-1.5 rounded-full bg-teal-900/30 border border-teal-500/20 text-teal-50 text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="text-teal-400">✨</span>
              <span className="tracking-wide">The #1 AI Operations Platform for Home Care</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.08] tracking-tight text-white mb-6 drop-shadow-sm">
              Everything You Need <br className="hidden md:block"/> to Deliver Exceptional <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Care at Home.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              Handly Care brings assessments, care plans, caregiver coordination, scheduling, documentation, family updates, and operations into one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-16 w-full sm:w-auto">
              <MagneticButton strength={25}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="rounded-xl px-8 h-14 w-full sm:w-auto font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:opacity-90 border-none shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                  onClick={handleDemoClick}
                >
                  Book a Demo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Button>
              </MagneticButton>
              <MagneticButton strength={15}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-xl px-8 h-14 w-full sm:w-auto font-semibold text-white border border-white/20 hover:bg-white/5 transition-all hover:-translate-y-1 backdrop-blur-sm flex items-center justify-center gap-2"
                  onClick={handleExploreClick}
                >
                  Explore Platform
                  <svg className="w-5 h-5 ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </MagneticButton>
            </div>

            <div className="w-full mt-4 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 font-medium mb-6">Built for every type of home care provider</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-2 items-start text-center">
                {providerTypes.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/70 border border-white/5 transition-colors hover:text-white hover:bg-white/10 cursor-default">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-[12px] text-gray-400 font-medium leading-[1.2] whitespace-pre-line">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hero-image w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%] mt-16 lg:mt-0 z-0 pointer-events-none">
            <div className="absolute -inset-4 bg-teal-500/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            {/* Dashboard Carousel */}
            <div className="scale-100 lg:scale-[1.1] transform origin-left">
              <DashboardCarousel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
