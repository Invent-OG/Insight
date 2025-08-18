import './globals.css';
import { Providers } from './providers';
import { LenisProvider } from '@/components/LenisProvider';
import Nav from '@/components/sections/Nav';
import FloatingContactButtons from '@/components/sections/FloatingContactButtons';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/sections/footer-section';
import { Parkinsans } from 'next/font/google';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
  icon: '/assets/logo.png',
};

const bokorFont = Parkinsans({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={bokorFont.className}>
      <link rel='icon' href='/favicon.ico' />

      <GoogleTagManager gtmId='GTM-K2PCJ27X' />

      <body>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-K2PCJ27X'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Providers>
          <Toaster />
          <LenisProvider />
          <Nav isLoading={false} />
          <main>{children}</main>
          <Footer />
          <FloatingContactButtons />
        </Providers>
      </body>
    </html>
  );
}
