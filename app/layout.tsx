import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Micheal Obarewon - Full Stack & Blockchain Developer',
  description:
    'Full Stack Developer passionate about building scalable web applications, specializing in React, Next.js, Node.js, and Web3/blockchain technologies.',
  keywords: [
    'Micheal Obarewon',
    'full stack developer',
    'react',
    'nextjs',
    'typescript',
    'nodejs',
    'express',
    'mongodb',
    'web3',
    'blockchain',
    'software engineer',
  ],
  authors: [{ name: 'Micheal Obarewon' }],
  creator: 'Micheal Obarewon',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://michealobarewon.dev', // replace with your actual domain
    siteName: 'Micheal Obarewon - Developer Portfolio',
    title: 'Micheal Obarewon - Full Stack & Blockchain Developer',
    description:
      'Full Stack Developer skilled in React, Next.js, Node.js, and Web3/blockchain. Passionate about building impactful and scalable solutions.',
    images: [
      {
        url: 'https://michealobarewon.dev/og-image.png', // replace with your image
        width: 1200,
        height: 630,
        alt: 'Micheal Obarewon Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micheal Obarewon - Full Stack & Blockchain Developer',
    description:
      'Portfolio of Micheal Obarewon, a full stack developer skilled in React, Next.js, Node.js, and blockchain technologies.',
    creator: '@yourTwitterHandle', // replace with your actual Twitter/X handle
    images: ['https://michealobarewon.dev/og-image.png'], // same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
