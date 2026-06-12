'use client';
import { useEffect, useRef } from 'react';
import Container from '../layout/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    label: 'Missed visits go undetected for hours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    label: 'Billing disputes from paper-based logs',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    label: 'Families left without real-time updates',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    label: 'No single view across schedules & staff',
  },
];

// SVG market growth chart data points (normalized 0–100)
const chartPoints = [18, 22, 28, 24, 35, 42, 50, 47, 60, 68, 75, 88, 100];
const chartWidth = 420;
const chartHeight = 120;
const pts = chartPoints.map((v, i) => {
  const x = (i / (chartPoints.length - 1)) * chartWidth;
  const y = chartHeight - (v / 100) * chartHeight;
  return `${x},${y}`;
});
const polyline = pts.join(' ');
const areaPath = `M0,${chartHeight} L${pts.join(' L')} L${chartWidth},${chartHeight} Z`;

export default function MarketReality() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card reveal
      gsap.fromTo('.mr-card',
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Problem row items
      gsap.fromTo('.mr-problem',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0,
          stagger: 0.08,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.mr-problems',
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Count-up animation
      const counters = [
        { el: '#mr-val-market', from: 0, to: 666.9, suffix: 'B', prefix: '$', decimals: 1 },
        { el: '#mr-val-demo', from: 0, to: 1, suffix: ' in 6', prefix: '', decimals: 0 },
        { el: '#mr-val-gap', from: 0, to: 10, suffix: 'M', prefix: '', decimals: 0 },
        { el: '#mr-val-save', from: 0, to: 30, suffix: '%', prefix: '', decimals: 0 },
      ];
      counters.forEach(({ el, from, to, suffix, prefix, decimals }) => {
        const node = document.querySelector(el);
        if (!node) return;
        gsap.fromTo({ val: from }, { val: to }, {
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: function () {
            node.textContent = prefix + (this.targets()[0].val as number).toFixed(decimals) + suffix;
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
      });

      // Chart line draw
      gsap.fromTo('.mr-chart-line',
        { strokeDashoffset: 800 },
        {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );

    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#080C0C]"
      id="market-reality"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-semibold tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Market Context
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300">
              $666B market
            </span>{' '}
            running on<br className="hidden sm:block" /> spreadsheets and phone calls.
          </h2>
          <p className="mt-6 text-lg text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
            The global home care sector is exploding — but the operations powering it are still painfully manual. Handly Care exists to close that gap.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-6">

          {/* Card 1 — Market Size (large, spans 5 cols) */}
          <div className="mr-card lg:col-span-5 relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-8 flex flex-col justify-between min-h-[260px] group hover:border-teal-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Chart */}
            <div className="absolute bottom-0 right-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d={areaPath} fill="url(#areaGrad)" />
                <polyline
                  className="mr-chart-line"
                  points={polyline}
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="800"
                  strokeDashoffset="800"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-3">Global Market Scale</p>
              <p id="mr-val-market" className="text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-none mb-3">$0B</p>
              <p className="text-sm text-white/40 font-light leading-relaxed max-w-xs">
                Projected global home healthcare market size by 2030
                <span className="block mt-1 text-white/25 text-xs">Grand View Research, 2023</span>
              </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs text-teal-400/70 font-medium">Fastest-growing healthcare segment</span>
            </div>
          </div>

          {/* Card 2 — Demographics (spans 3 cols) */}
          <div className="mr-card lg:col-span-3 relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-8 flex flex-col justify-between min-h-[260px] group hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-blue-400/10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-blue-400/10" />
            <div className="absolute top-0 right-0 w-10 h-10 rounded-full border border-blue-400/15" />

            <div className="relative z-10">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Care Demographics</p>
              <p id="mr-val-demo" className="text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-none mb-3">0</p>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Of the world population will be 60+ by 2030
                <span className="block mt-1 text-white/25 text-xs">World Health Organization, 2022</span>
              </p>
            </div>

            <div className="relative z-10 mt-4 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full ${i < 1 ? 'bg-blue-400' : 'bg-white/10'}`} />
              ))}
            </div>
          </div>

          {/* Card 3 — Workforce Gap (spans 4 cols) */}
          <div className="mr-card lg:col-span-4 relative rounded-3xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden p-8 flex flex-col justify-between min-h-[260px] group hover:border-rose-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-3">Workforce Gap</p>
              <p id="mr-val-gap" className="text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-none mb-3">0M</p>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Projected shortage of health & care workers by 2030
                <span className="block mt-1 text-white/25 text-xs">World Health Organization, 2020</span>
              </p>
            </div>

            {/* Bar chart visual */}
            <div className="relative z-10 mt-4 flex items-end gap-1.5 h-10">
              {[30, 45, 38, 60, 55, 72, 68, 85, 78, 100].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 9 ? 'bg-rose-400' : 'bg-rose-400/20'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Card 4 — Savings stat (spans 3) */}
          <div className="mr-card lg:col-span-3 relative rounded-3xl border border-white/8 bg-gradient-to-br from-teal-500/15 to-teal-600/5 backdrop-blur-sm overflow-hidden p-8 flex flex-col justify-between min-h-[200px] group hover:border-teal-400/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mb-3">Operational Savings</p>
              <p id="mr-val-save" className="text-6xl lg:text-7xl font-display font-bold text-teal-300 tracking-tight leading-none mb-3">0%</p>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Cost reduction via automation
                <span className="block mt-1 text-white/25 text-xs">McKinsey & Company, 2021</span>
              </p>
            </div>
          </div>

          {/* Card 5 — Narrative card (spans 9) */}
          <div className="mr-card lg:col-span-9 relative rounded-3xl border border-white/8 bg-white/[0.02] backdrop-blur-sm overflow-hidden p-8 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            {/* <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/30 to-blue-500/20 border border-teal-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
            </div> */}
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">The window for digital transformation is now.</h3>
              <p className="text-white/45 font-light leading-relaxed text-sm max-w-2xl">
                Agencies that automate scheduling, compliance logging, and family communication today will command market share for the next decade. Those that don&apos;t will face mounting regulatory pressure, staff burnout, and shrinking margins.
              </p>
            </div>
            <div className="shrink-0 ml-auto hidden lg:block">
              <div className="text-right">
                <div className="text-4xl font-display font-bold text-white/20 leading-none">2030</div>
                <div className="text-xs text-white/20 mt-1">The tipping point</div>
              </div>
            </div>
          </div>
        </div>

        {/* Problems strip */}
        <div className="mr-problems grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="mr-problem flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/8 bg-white/[0.025] hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 group cursor-default"
            >
              <div className="shrink-0 w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/15 flex items-center justify-center text-rose-400 group-hover:bg-rose-500/20 transition-colors">
                {p.icon}
              </div>
              <p className="text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors leading-snug">{p.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
