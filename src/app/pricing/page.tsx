import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTA from '@/components/sections/FinalCTA';
import FaqSection from '@/components/sections/FaqSection';

export const metadata = {
  title: 'Pricing — Handly Care',
  description: 'Flexible pricing designed to grow with your care operations.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-canvas">
      <Nav />
      <div className="pt-20">
        <PricingSection />
        <FaqSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
