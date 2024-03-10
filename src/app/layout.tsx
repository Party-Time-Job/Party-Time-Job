import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Party Time Job',
  description: 'This service for everyone who wants to join the party!',
};

const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: './fonts/SpoqaHanSansNeo-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={SpoqaHanSansNeo.className}>{children}</body>
    </html>
  );
}
