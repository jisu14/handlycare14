'use client';
import { useEffect, useRef, useState } from 'react';
import Container from '../layout/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    title: "Accredited compliance verification",
    desc: "Every home care visit represents a critical check. Handly Care creates a tamper-proof audit trail at every visit location.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Optimized logistics dispatching",
    desc: "As client roster expands, manual dispatching degrades. Handly Care automatically coordinates shift schedules and routes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Clean billing & zero disputes",
    desc: "Billing errors damage client relations. Handly Care links verified care records directly with invoicing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-6 4h6m-6 4h6M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
      </svg>
    )
  },
  {
    title: "Real-time family coordination",
    desc: "Keep clients and family members aligned with transparent, real-time access to progress timelines and checklists.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Empowered clinical workforce",
    desc: "Provide caregiving staff with structured clinical companion tools to verify vitals and document visits.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

// Duplicate items for seamless loop
const extendedChallenges = [...challenges, ...challenges, ...challenges];

export default function Challenges() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.challenge-card');
    const totalCards = cards.length;
    const cardWidth = 304; // Perfect fit for 4 cards in 1216px usable width
    const loopWidth = challenges.length * cardWidth;

    // Initial positioning
    gsap.set(cards, {
      x: (i) => i * cardWidth,
    });

    // Main horizontal loop animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: 'none', duration: 40 },
    });

    tl.to(cards, {
      x: `-=${loopWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const val = parseFloat(x);
          return ((val + loopWidth) % (totalCards * cardWidth)) - loopWidth;
        })
      }
    });

    animationRef.current = tl;

    // Arch effect logic using GSAP ticker
    const updateArch = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const distanceFromCenter = cardCenterX - centerX;
        const normalizedDistance = distanceFromCenter / (rect.width / 1.1);
        
        const archHeight = 80;
        const yOffset = Math.pow(normalizedDistance, 2) * archHeight;
        const rotation = normalizedDistance * 20;
        const scale = 1 - Math.abs(normalizedDistance) * 0.15;
        const opacity = 1 - Math.abs(normalizedDistance) * 0.6;

        gsap.set(card, {
          y: yOffset,
          rotateZ: rotation,
          scale: scale,
          opacity: opacity,
          zIndex: Math.round((1 - Math.abs(normalizedDistance)) * 10),
        });
      });
    };

    gsap.ticker.add(updateArch);

    return () => {
      gsap.ticker.remove(updateArch);
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      animationRef.current?.pause();
    } else {
      animationRef.current?.play();
    }
  }, [isHovered]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-canvas overflow-hidden" id="features">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center mb-16 lg:mb-24">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Operational Realities</h2>
          <p className="mt-2 text-3xl font-display font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-tight">
            Scaling care services requires a <span className="text-primary italic">new foundation.</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-muted font-light">
            The organizations that scale successfully all share a common trait: they replace manual coordination workflows with structured operational systems.
          </p>
        </div>

        <div 
          className="relative h-[500px] w-full flex items-center justify-center select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={containerRef}
            className="absolute flex gap-8 py-10"
            style={{ width: '100%', height: '100%' }}
          >
            {extendedChallenges.map((item, i) => (
              <div 
                key={i} 
                className="challenge-card absolute top-0 left-0 w-[280px] h-[350px] flex-shrink-0 flex flex-col items-start gap-y-4 p-7 rounded-[2rem] bg-canvas border border-hairline shadow-card hover:shadow-hover transition-shadow duration-300 backdrop-blur-sm bg-canvas/80"
              >
                <div className="rounded-2xl bg-primary/10 p-3 ring-1 ring-inset ring-primary/20 shadow-inner">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-7 text-ink mb-2 font-display">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
