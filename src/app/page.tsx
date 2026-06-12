import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import dynamic from 'next/dynamic';

const MarketReality = dynamic(() => import('@/components/sections/MarketReality'));
const CareModels = dynamic(() => import('@/components/sections/CareModels'));
const Challenges = dynamic(() => import('@/components/sections/Challenges'));
const PlatformOverview = dynamic(() => import('@/components/sections/PlatformOverview'));
const EscalationEngine = dynamic(() => import('@/components/sections/EscalationEngine'));
const OutcomeStories = dynamic(() => import('@/components/sections/OutcomeStories'));
const VerifiedStandard = dynamic(() => import('@/components/sections/VerifiedStandard'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'));

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-canvas">
      <Nav />
      <HeroSection />
      <MarketReality />
      <PlatformOverview />
      <CareModels />
      <Challenges />
      <EscalationEngine />
      <OutcomeStories />
      <VerifiedStandard />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
