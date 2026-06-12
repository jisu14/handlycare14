'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  {
    title: 'Billing cycle closes instantly.',
    desc: 'Every invoice is built from checked operational check-in logs. No more disputes, just clean documentation.'
  },
  {
    title: 'High staff retention.',
    desc: 'Provide transparent performance logs and digital tools that help caregiving teams feel respected and supported.'
  },
  {
    title: 'Families turn into advocates.',
    desc: 'Real-time visibility turns anxious families into referral channels, significantly reducing inbound inquiry calls.'
  },
  {
    title: 'Scale without coordination bloat.',
    desc: 'Automate shift matching and route logic. Double your active patient load without increasing logistics headcount.'
  },
  {
    title: 'Command premium rates.',
    desc: 'Documented, audit-proof care quality establishes a high operational standard that premium clients value.'
  }
];

export default function OutcomeStories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.outcome-item', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );
    }, sectionRef);
    
    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 500);
    
    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-canvas overflow-hidden" id="outcomes">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 lg:mb-24">
          <div className="outcome-header">
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Operational Outcomes</h2>
            <p className="mt-2 text-3xl font-display font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              What changes when your operations run on <span className="text-primary italic">Handly Care.</span>
            </p>
            <p className="mt-6 text-lg leading-8 text-muted font-light">
              Replace manual coordination with automated workflows that deliver verifiable results for your staff, your client families, and your bottom line.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-hairline aspect-video">
            <iframe
              src="/media/dashboards/dashboard_overview.html"
              title="Operational Customer Metrics Dashboard"
              sandbox="allow-scripts"
              className="absolute inset-0 w-full h-full border-0"
              style={{ pointerEvents: 'none' }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {outcomes.map((outcome, i) => (
              <div key={i} className="outcome-item relative flex flex-col gap-4 p-6 lg:p-5 rounded-[2rem] bg-canvas border border-hairline shadow-card hover:shadow-hover transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary font-display text-lg font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold leading-7 text-ink mb-2 font-display">{outcome.title}</h3>
                  <p className="text-xs leading-6 text-muted font-light">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
