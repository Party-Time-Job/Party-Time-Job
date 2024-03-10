import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Party Time Job',
  description: 'This servie for everyone who wants to join the party!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
