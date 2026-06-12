'use client';
import Container from './Container';
const footerLinks = {
  platform: [
    { name: 'AI Operations Center', href: '#platform' },
    { name: 'Clinician Companion App', href: '#' },
    { name: 'Intelligent Family Portal', href: '#' },
    { name: 'Escalation Engine', href: '#escalation-engine' },
  ],
  resources: [
    { name: 'How It Works', href: '#' },
    { name: 'Outcome Stories', href: '#outcomes' },
    { name: 'Help Centre', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#final-cta' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: 'Instagram', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.012 3.807.058 1.02.045 1.727.207 2.334.442.626.243 1.157.568 1.688 1.099.53.531.856 1.062 1.099 1.688.234.606.397 1.312.442 2.334.046 1.022.058 1.377.058 3.807 0 2.43-.012 2.784-.058 3.807-.045 1.02-.207 1.727-.442 2.334-.243.626-.568 1.157-1.099 1.688-.531.53-.106.856-1.688 1.099-.606.234-1.312.397-2.334.442-1.022.046-1.377.058-3.807.058-2.43 0-2.784-.012-3.807-.058-1.02-.045-1.727-.207-2.334-.442-.626-.243-1.157-.568-1.688-1.099-.53-.531-.856-1.062-1.099-1.688-.234-.606-.397-1.312-.442-2.334-.046-1.022-.058-1.377-.058-3.807 0-2.43.012-2.784.058-3.807.045-1.02.207-1.727.442-2.334.243-.626.568-1.157 1.099-1.688.531-.53.856-1.062 1.688-1.099.606-.234 1.312-.397 2.334-.442 1.022-.046 1.377-.058 3.807-.058zM12 6.865A5.135 5.135 0 1012 17.135 5.135 5.135 0 0012 6.865zm0 1.488a3.647 3.647 0 110 7.294 3.647 3.647 0 010-7.294zm6.137-1.105a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" /></svg> },
    { name: 'X', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31398 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg> },
    { name: 'LinkedIn', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg> },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container className="py-12 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold">H</div>
              <span className="font-display text-xl font-bold tracking-tight text-ink">Handly Care</span>
            </div>
            <p className="text-xs leading-6 text-muted max-w-sm font-light">
              The complete operating platform for home care organizations. Empowering caregivers and providing peace of mind for families globally.
            </p>
            <div className="flex space-x-6">
              {footerLinks.social.map((item) => (
                <a key={item.name} href={item.href} className="text-muted hover:text-primary transition-colors">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-ink font-display">Platform</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.platform.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted hover:text-primary transition-colors font-light">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-ink font-display">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted hover:text-primary transition-colors font-light">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-ink font-display">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted hover:text-primary transition-colors font-light">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-hairline pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-xs leading-5 text-muted font-light">
              &copy; 2026 Handly Care. All rights reserved
            </p>


          </div>
          <div className="flex space-x-6 text-xs text-muted">
            <a href="#" className="hover:text-ink font-light">Terms of Service</a>
            <a href="#" className="hover:text-ink font-light">Privacy Policy</a>
            <a href="#" className="hover:text-ink font-light">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
