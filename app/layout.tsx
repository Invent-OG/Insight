import './globals.css';
import { Providers } from './providers';
import { LenisProvider } from '@/components/LenisProvider';
import Nav from '@/components/sections/Nav';
import FloatingContactButtons from '@/components/sections/FloatingContactButtons';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/sections/footer-section';
import { Parkinsans } from 'next/font/google';

export const metadata = {
  icon: '/assets/logo.png',
};

const bokorFont = Parkinsans({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={bokorFont.className}>
      <body>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

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
