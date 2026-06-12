'use client';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../ui/Button';

const tiers = [
  {
    name: 'Essentials',
    desc: 'For emerging organizations establishing their operational foundation.',
    features: [
      'GPS-verified visits',
      'Basic scheduling',
      'Caregiver mobile app',
      'Core visit records',
      'Standard support'
    ]
  },
  {
    name: 'Professional',
    desc: 'The complete system for teams scaling their care operations.',
    popular: true,
    features: [
      'Everything in Essentials',
      'Automated Escalation Engine',
      'Automated invoicing & billing engine',
      'Family Visibility Portal',
      'Vitals & clinical checklists',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    desc: 'Advanced infrastructure for multi-site, enterprise care organizations.',
    features: [
      'Everything in Professional',
      'Multi-branch management',
      'Custom API integrations',
      'White-label portal options',
      'Dedicated success manager',
      'Custom SLA'
    ]
  }
];

export default function PricingSection() {
  const handleCtaClick = () => {
    const el = document.getElementById('final-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section dark className="py-32 bg-canvas overflow-hidden" id="pricing">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-primary text-sm uppercase tracking-widest font-bold mb-6 block">Pricing</span>
          <h2 className="text-4xl md:text-6xl font-display text-ink font-light leading-tight mb-8">
            Pricing designed to grow with <br/> your operations — <span className="text-primary italic">not against it.</span>
          </h2>
          <p className="text-muted text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Pricing is configured for your organization&apos;s specific structure during your demo. 
            No public rate card — because the right pricing depends on how you operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative p-10 rounded-[3rem] border transition-all duration-500 flex flex-col justify-between ${
              tier.popular ? 'bg-[#0C1011] border-primary/50 shadow-[0_0_80px_-20px_rgba(79,209,212,0.2)] scale-105' : 'bg-surface border-hairline hover:border-primary/20'
            }`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest">
                  Most Chosen
                </div>
              )}
              
              <div>
                <h3 className={`text-2xl font-display font-medium mb-4 ${tier.popular ? 'text-white' : 'text-ink'}`}>
                  {tier.name}
                </h3>
                <p className={`text-lg font-light leading-relaxed mb-10 ${tier.popular ? 'text-white/60' : 'text-muted'}`}>
                  {tier.desc}
                </p>
                
                <div className="space-y-4 mb-12">
                  {tier.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 ${tier.popular ? 'text-primary' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-[15px] font-light ${tier.popular ? 'text-white/80' : 'text-ink/80'}`}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                variant={tier.popular ? 'primary' : 'outline'} 
                className="w-full justify-center h-14 rounded-full"
                onClick={handleCtaClick}
              >
                Book demo for pricing →
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-hairline flex flex-wrap justify-center gap-x-12 gap-y-6">
          {[
            '30-day free trial',
            'No setup fee',
            'No credit card required',
            'No lock-in contracts',
            'Personal onboarding'
          ].map(text => (
            <div key={text} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-muted text-sm font-medium uppercase tracking-wider">{text}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
