import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MarketReality from '@/components/sections/MarketReality';
import CareModels from '@/components/sections/CareModels';
import Challenges from '@/components/sections/Challenges';
import PlatformOverview from '@/components/sections/PlatformOverview';
import EscalationEngine from '@/components/sections/EscalationEngine';
import OutcomeStories from '@/components/sections/OutcomeStories';
import VerifiedStandard from '@/components/sections/VerifiedStandard';
import FaqSection from '@/components/sections/FaqSection';
import FinalCTA from '@/components/sections/FinalCTA';

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
