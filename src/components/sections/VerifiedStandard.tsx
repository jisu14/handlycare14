'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VerifiedStandard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.verified-content > *', {
        opacity: 0,
        x: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      });
      
      gsap.from('.verified-badge', {
        scale: 0.8,
        opacity: 0,
        rotate: -10,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      });
    }, containerRef);
    
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0C1011] pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden relative" id="verified-standard">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--primary),transparent_70%)] opacity-5 pointer-events-none" />
      
      <Container>
        <div ref={containerRef} className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="verified-content lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest mb-6">Compliance Standard</h2>
                <p className="mt-2 text-3xl font-display font-bold tracking-tight text-white sm:text-4xl leading-tight mb-8">
                  The <span className="text-primary italic">Handly Certified</span> mark.
                </p>
                <div className="space-y-6 text-base leading-8 text-white/60 font-light">
                  <p>
                    Every healthcare organization on Handly Care operates to the Handly Certified standard — a signal to client families, insurers, and hospital discharge managers that your team operates to an accredited, audit-proof operational benchmark.
                  </p>
                  <p>
                    This is an operational standard backed by cryptographically signed check-in logs, clinical task documentation, and automated escalation history.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="verified-badge relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 shadow-glow">
                <div className="text-center p-8">
                  <span className="text-primary font-mono text-[9px] tracking-[0.3em] uppercase block mb-2">HIPAA / SOC 2 Ready</span>
                  <span className="text-white font-display text-4xl lg:text-5xl font-black tracking-tighter uppercase block leading-none">Handly</span>
                  <span className="text-primary font-display text-4xl lg:text-5xl font-black tracking-tighter uppercase block leading-none">Certified</span>
                  <span className="text-white/40 font-mono text-[8px] tracking-[0.4em] uppercase block mt-4">Compliance Standard</span>
                </div>
                {/* Decorative rings */}
                <div className="absolute -inset-4 border border-primary/10 rounded-full animate-pulse" />
                <div className="absolute -inset-8 border border-primary/5 rounded-full animate-pulse delay-75" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
