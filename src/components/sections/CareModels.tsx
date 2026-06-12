'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    title: 'Autonomous Scheduling',
    description: 'Dynamic calendar optimization and caregiver matching. Minimizes schedule gaps and coordinates logistics automatically.',
    features: [
      'Proactive calendar matching',
      'Dynamic routing & travel estimate',
      'Automatic backup dispatching',
      'Caregiver preference alignment'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Intelligent Monitoring',
    description: 'Autonomous health status oversight and visit verification. Vitals tracking and secure documentation handled seamlessly.',
    features: [
      'Automated check-in logs',
      'Real-time task completion audits',
      'Biometric visit verification',
      'Instant family notifications'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Compliance & Analytics',
    description: 'Legally compliant audit logs and secure billing metrics. Zero-dispute invoicing built on top-tier security standards.',
    features: [
      'Audit-ready operations logging',
      'Secure, verified invoice sync',
      'HIPAA-compliant patient data',
      'Unified admin command metrics'
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function CareModels() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.care-card', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom-=50',
            toggleActions: 'play none none none',
            once: true,
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
    <section className="bg-canvas pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden" id="care-models">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Platform Capabilities</h2>
          <p className="mt-2 text-4xl font-display font-bold tracking-tight text-ink sm:text-5xl">
            Intelligent Care Operations
          </p>
          <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto font-light">
            Coordinate matching, log care validation, and secure operational workflow automation on a single, accredited healthcare platform.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div key={idx} className="care-card flex flex-col bg-canvas border border-hairline shadow-card rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={
                    idx === 0 ? "/media/caregiver2.png" : 
                    idx === 1 ? "/media/caregiver.png" : 
                    "/media/caregiver_image_1.jpg"
                  } 
                  alt={model.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">{model.title}</h3>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <p className="text-muted text-[15px] leading-relaxed mb-8 font-light">{model.description}</p>
                
                <ul className="mt-auto space-y-4">
                  {model.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-ink/80 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <button className="text-sm font-bold text-primary hover:text-primary-dark transition-colors flex items-center gap-2 group">
                    Explore capabilities <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
