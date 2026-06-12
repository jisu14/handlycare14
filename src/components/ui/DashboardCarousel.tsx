'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    src: '/media/dashboards/dashboard_overview.html',
    title: 'Operations Overview',
    description: 'Real-time performance metrics and active care visits overview.'
  },
  {
    src: '/media/dashboards/dashboard_schedules.html',
    title: 'Smart Schedule Coordinator',
    description: 'AI-assisted routing and schedule matching for caregivers.'
  },
  {
    src: '/media/dashboards/dashboard_caretakers.html',
    title: 'Caregiver Operations',
    description: 'Verify status, location tracking, and care validation logs.'
  },
  {
    src: '/media/dashboards/dashboard_alerts.html',
    title: 'Real-time Alerts Engine',
    description: 'Instant compliance monitoring and clinically backed critical alerts.'
  },
  {
    src: '/media/dashboards/dashboard_messages.html',
    title: 'Smart Messaging Hub',
    description: 'Secure, real-time coordination chat between clinicians and family.'
  }
];

export default function DashboardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div className="w-full select-none flex flex-col gap-4">
      {/* Browser Mockup Wrapper */}
      <div
        className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Browser Top Bar */}
        <div className="h-11 bg-slate-900/90 border-b border-white/5 px-4 flex items-center justify-between">
          {/* Traffic-light controls */}
          <div className="flex gap-1.5 items-center w-20">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {/* Mock URL bar */}
          <div className="flex-1 max-w-sm bg-white/5 border border-white/5 rounded-md text-[11px] py-1 text-center text-white/45 tracking-wide overflow-hidden whitespace-nowrap">
            https://app.handlycare.com/dashboard
          </div>
          {/* Live indicator */}
          <div className="w-20 flex justify-end">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          </div>
        </div>

        {/* Carousel Content — iframes */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={activeIndex}
              src={slides[activeIndex].src}
              title={slides[activeIndex].title}
              sandbox="allow-scripts"
              className="absolute inset-0 w-full h-full border-0"
              style={{ pointerEvents: paused ? 'auto' : 'none' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators / Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
        <div className="flex flex-col gap-1 max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
            >
              <h4 className="text-white text-base font-bold font-display leading-tight">
                {slides[activeIndex].title}
              </h4>
              <p className="text-white/60 text-xs leading-normal">
                {slides[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex gap-2 items-center self-end md:self-auto">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6 bg-teal-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
