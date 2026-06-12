'use client';
import Container from '../layout/Container';
import Button from '../ui/Button';
import MagneticButton from '../ui/MagneticButton';
import { useAuth } from '@/context/AuthContext';

export default function FinalCTA() {
  const { openDemoModal, openAuthModal } = useAuth();

  const handleDemoClick = () => {
    openDemoModal();
  };
  
  const handleSalesClick = () => {
    openAuthModal();
  };

  return (
    <section className="bg-canvas py-24 sm:py-32" id="final-cta">
      <Container>
        <div className="relative isolate overflow-hidden bg-[#0C1011] px-6 py-24 shadow-2xl rounded-[3rem] sm:px-24 xl:py-32 border border-white/5">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            Ready to scale? Build your operations on a <span className="text-primary italic">verifiable standard.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-white/60 font-light">
            Join the leading home healthcare organizations globally who orchestrate care logistics on Handly Care. Book a platform demo with our operations team today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton strength={25}>
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-full px-10 h-14 w-full sm:w-auto font-semibold bg-teal-500 hover:bg-teal-400 border-none"
                onClick={handleDemoClick}
              >
                Book a Free Demo
              </Button>
            </MagneticButton>
            <MagneticButton strength={15}>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-10 h-14 w-full sm:w-auto text-white border-white/20 hover:bg-white/10 dark:hover:bg-white/20"
                onClick={handleSalesClick}
              >
                Contact Sales
              </Button>
            </MagneticButton>
          </div>
          
          {/* Background Decorative Elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.15" />
            <defs>
              <radialGradient id="gradient">
                <stop stopColor="var(--primary)" />
                <stop offset={1} stopColor="var(--accent)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  );
}
