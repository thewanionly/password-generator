import type { Metadata } from 'next';

import { jetBrainsMono } from '@/lib/fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'Password Generator',
  description: `This application let's you generate a password you can use for your accounts.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetBrainsMono.className}>
      <body className="bg-grey-darkest text-grey">{children}</body>
    </html>
  );
}
