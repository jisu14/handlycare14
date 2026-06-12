'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: 'AI Operations Center',
    description: 'A powerful central command station to orchestrate care schedules, monitor alerts, and audit administrative workflows.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    name: 'Clinician Companion App',
    description: 'Empower your home health staff with predictive routing, digital care charting, and offline-first visit logs.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Intelligent Family Portal',
    description: 'Build absolute trust with client families through live timeline tracking, status reports, and care transparency.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function PlatformOverview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-item', {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        }
      });

      gsap.from('.screenshot-container', {
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        }
      });

      // Removed sub-gallery-card animation to prevent invisibility gap
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-canvas pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden" id="platform">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Platform Overview</h2>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A unified operating system for <span className="text-primary italic">home care logistics</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-muted font-light">
            An integrated software ecosystem connecting clinical coordinators, caregiver staff, and family members in real-time.
          </p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 items-center">
            <div className="screenshot-container relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-hairline aspect-[3/2]">
                <iframe
                  src="/media/dashboards/dashboard_overview.html"
                  title="Handly Care Operations Console"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-10 lg:pl-8">
              {features.map((feature) => (
                <div key={feature.name} className="feature-item relative pl-16">
                  <dt className="text-base font-bold leading-7 text-ink font-display">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary shadow-glow">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-muted font-light">{feature.description}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-gallery of screenshots (Alerts and Messages) */}
          <div className="sub-gallery-row mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="sub-gallery-card flex flex-col bg-canvas border border-hairline shadow-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-60 overflow-hidden border-b border-hairline">
                <iframe
                  src="/media/dashboards/dashboard_alerts.html"
                  title="Safety Escalation Logs"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-ink">Real-time Safety Alerting</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted font-light">
                  Continuous status updates are audited by our alert engine. Critical vital sign alerts route instantly to clinicians.
                </p>
              </div>
            </div>

            <div className="sub-gallery-card flex flex-col bg-canvas border border-hairline shadow-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-60 overflow-hidden border-b border-hairline">
                <iframe
                  src="/media/dashboards/dashboard_messages.html"
                  title="Clinical Care Chat"
                  sandbox="allow-scripts"
                  className="absolute inset-0 w-full h-full border-0"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold font-display text-ink">Integrated Communication Hub</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted font-light">
                  Direct coordination chat routes between managers, field caregivers, and family members for absolute transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
