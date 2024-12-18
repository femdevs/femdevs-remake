import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs';
import { GoogleAnalytics } from '@next/third-parties/google';

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://thefemdevs.com'),
  title: {
    template: "%s | The FemDevs",
    default: 'Home page',
  },
  keywords: [
    'thefemdevs',
    'femdevs',
    'development',
    'lgbtq',
    'discord',
    'open-sourced',
  ],
  authors: [
    { name: 'Alex', url: 'https://thefemdevs.com/profile/alex' },
    { name: 'Benjamin', url: 'https://thefemdevs.com/profile/ben' },
    { name: 'Oblong', url: 'https://thefemdevs.com/profile/oblong' },
  ],
  creator: 'The FemDevs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The FemDevs',
    images: {
      href: '/opengraph-image.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The FemDevs',
    site: '@OfficialFemDevs',
    creator: '@OfficialFemDevs',
    images: {
      href: '/twitter-image.png',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <script async src="https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js"></script>
        </head>
        <GoogleAnalytics gaId='G-X9E281G0P3' />
        <SpeedInsights />
        <Analytics />
        {children}
      </html>
    </ClerkProvider>
  );
}
