import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';

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
    <html lang='ko'>
      <body className={SpoqaHanSansNeo.className}>
        <Header />
        {children}
        <Footer />
        <div id='register' />
        <div id='toast' />
        <div id='loader' />
        <div id='dialog' />
      </body>
    </html>
  );
}
