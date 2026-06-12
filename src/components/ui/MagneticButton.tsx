'use client';
import { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // How far it pulls (pixels)
}

export default function MagneticButton({ children, className = '', strength = 20 }: MagneticButtonProps) {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = magneticRef.current;
    if (!el) return;

    // Only apply on fine pointers (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      // Calculate pull distance
      const x = ((clientX - centerX) / (width / 2)) * strength;
      const y = ((clientY - centerY) / (height / 2)) * strength;

      gsap.to(el, {
        x: x,
        y: y,
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={magneticRef} className={`magnetic-wrap inline-block cursor-pointer ${className}`}>
      {children}
    </div>
  );
}
