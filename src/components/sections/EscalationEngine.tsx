'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    time: '0:00',
    label: 'Visit scheduled',
    desc: 'Every caregiver receives their assignment, care plan, and patient details in advance.'
  },
  {
    time: '+10m',
    label: 'Caregiver notified',
    desc: 'If clock-in is not confirmed by the scheduled time, the caregiver receives an automatic notification.'
  },
  {
    time: '+15m',
    label: 'Operations team alerted',
    desc: 'Your team receives a structured alert with full patient and caregiver context. The resolution timeline begins.'
  },
  {
    time: '+20m',
    label: 'Family informed',
    desc: 'If unresolved, family members receive a proactive notification with context, before they have reason to contact you.'
  },
  {
    time: 'Alert',
    label: 'Clinical escalation',
    desc: 'Vitals recorded outside thresholds trigger a physician consultation workflow automatically.',
    highlight: true
  }
];

export default function EscalationEngine() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-step', 
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );
      
      gsap.fromTo('.timeline-line', 
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: true
          }
        }
      );
    }, containerRef);
    
    const refresh = () => ScrollTrigger.refresh();
    const timer = setTimeout(refresh, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="bg-canvas py-24 sm:py-32 overflow-hidden" id="escalation-engine">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest mb-6">Signature Capability</h2>
            <p className="text-4xl font-display font-bold tracking-tight text-ink sm:text-5xl leading-tight mb-8">
              The industry&apos;s first <span className="text-primary italic">automated</span> escalation engine.
            </p>
            <p className="text-lg leading-8 text-muted mb-10 font-light">
              Detailed oversight of every care professional&apos;s visit to ensure compliance and quality. When a visit falls behind schedule or a care task goes unaddressed, Handly Care does not wait for your team to notice. It acts — automatically, in documented sequence.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-hairline mb-8 aspect-video">
              <iframe
                src="/media/dashboards/dashboard_alerts.html"
                title="Automated Alerts Console"
                sandbox="allow-scripts"
                className="absolute inset-0 w-full h-full border-0"
                style={{ pointerEvents: 'none' }}
              />
            </div>

            <div className="rounded-2xl bg-primary/5 p-8 border border-primary/10 ring-1 ring-inset ring-primary/20">
              <p className="text-ink font-medium leading-relaxed font-light">
                Every stage is logged. Every timestamp is permanent. When a family or insurer asks what happened — your operations team has a complete, verified answer.
              </p>
            </div>
          </div>

          <div ref={containerRef} className="relative">
            <div className="timeline-line absolute left-6 top-0 bottom-0 w-px bg-hairline" />
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="timeline-step relative pl-16 group">
                  <div className={`absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 z-10 ${
                    step.highlight 
                      ? 'bg-primary border-primary text-white shadow-glow' 
                      : 'bg-canvas border-hairline group-hover:border-primary text-primary'
                  }`}>
                    <span className="font-mono text-[10px] font-bold">{step.time}</span>
                  </div>
                  
                  <div>
                    <h3 className={`text-xl font-display font-bold mb-2 ${step.highlight ? 'text-primary' : 'text-ink'}`}>
                      {step.label}
                    </h3>
                    <p className="text-sm leading-6 text-muted font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
