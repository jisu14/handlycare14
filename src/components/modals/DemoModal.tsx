'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function DemoModal() {
  const { isDemoModalOpen, closeDemoModal } = useAuth();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isDemoModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        closeDemoModal();
        setStatus('idle');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-md p-8 overflow-hidden bg-surface-100 border border-white/10 shadow-2xl rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeDemoModal}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Request Sent!</h2>
            <p className="text-white/60">Our team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white mb-2">Book a Demo</h2>
              <p className="text-white/60">See how Handly Care can transform your operations.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Work Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-1">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Care Services Inc."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-4 py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all font-medium shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
