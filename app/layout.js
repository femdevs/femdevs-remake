import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/** @type {import('next').Metadata} */
export const metadata = {
  metadataBase: new URL('https://thefemdevs.com'),
  title: {
    template: "%s | The FemDevs",
    default: 'Home page',
  },
  keywords: [],
  authors: [
    { name: 'Benjamin', url: '' },
    { name: 'Alex', url: '' },
    { name: 'Oblong', url: '' },
  ],
  creator: 'The FemDevs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The FemDevs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The FemDevs',
    site: '@OfficialFemDevs',
    creator: '@OfficialFemDevs',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** @type {import('next').Viewport} */
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
