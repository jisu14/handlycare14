'use client';
import CardNav, { CardNavItem } from '../ui/CardNav';
import { useAuth } from '@/context/AuthContext';

export default function Nav() {
  const navItems: CardNavItem[] = [
    {
      label: 'Features',
      bgColor: '#E6F4F1', // Light Teal
      textColor: '#083A3C', // Dark Teal
      links: [
        { label: 'AI Operations Center', href: '#platform', ariaLabel: 'Go to AI Operations Center' },
        { label: 'Escalation Engine', href: '#escalation-engine', ariaLabel: 'Go to Escalation Engine' },
        { label: 'Performance Analytics', href: '#features', ariaLabel: 'Go to Performance Analytics' }
      ]
    },
    {
      label: 'About Us',
      bgColor: '#F0EBF8', // Light Purple
      textColor: '#2D1B4E', // Dark Purple
      links: [
        { label: 'Our Mission & Vision', href: '#market-reality', ariaLabel: 'Go to Our Mission' },
        { label: 'Operational Standards', href: '#verified-standard', ariaLabel: 'Go to Standards' },
        { label: 'Care Outcomes', href: '#outcomes', ariaLabel: 'Go to Outcomes' }
      ]
    },
    {
      label: 'Contact',
      bgColor: '#FFF3E6', // Light Amber
      textColor: '#4D2D00', // Dark Amber
      links: [
        { label: 'Book a Demo', href: '#final-cta', ariaLabel: 'Book a Demo' },
        { label: 'General FAQ', href: '#faq', ariaLabel: 'Go to FAQ' },
        { label: 'Contact Sales', href: '#final-cta', ariaLabel: 'Contact Sales' }
      ]
    }
  ];

  const { openAuthModal } = useAuth();

  const handleCtaClick = () => {
    const el = document.getElementById('final-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthClick = () => {
    openAuthModal();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="w-full relative pointer-events-auto">
        <CardNav
          logoText="Handly Care"
          items={navItems}
          baseColor="transparent"
          menuColor="#ffffff"
          buttonBgColor="#ffffff"
          buttonTextColor="#000000"
          onCtaClick={handleCtaClick}
          onAuthClick={handleAuthClick}
        />
      </div>
    </header>
  );
}
