import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Handly Care — AI Operations Platform for Home Care",
  description: "Scale your care agency with our intelligent AI Care Platform. Automate scheduling, optimize operations, verify visits, and ensure patient safety with real-time clinical escalations.",
  keywords: ["Home Care", "AI Platform", "Care Agency", "Clinical Operations", "Home Health Software"],
  authors: [{ name: "Handly Care" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Handly Care — AI Operations Platform',
    description: "The intelligent operating platform for home care agencies.",
    siteName: 'Handly Care',
    url: 'https://handlycare.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  metadataBase: new URL('https://handlycare.com'),
  twitter: { card: 'summary_large_image', title: 'Handly Care — AI Operations Platform' },
};

import SmoothScroll from '@/components/layout/SmoothScroll';
import { AuthProvider } from '@/context/AuthContext';
import dynamic from 'next/dynamic';

const AuthModal = dynamic(() => import('@/components/auth/AuthModal'), { ssr: false });
const DemoModal = dynamic(() => import('@/components/modals/DemoModal'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-body bg-canvas text-ink">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <CustomCursor />
        <AuthProvider>
          <SmoothScroll>
            {children}
            <AuthModal />
            <DemoModal />
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
