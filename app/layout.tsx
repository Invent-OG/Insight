import './globals.css';
import { Providers } from './providers';
import { LenisProvider } from '@/components/LenisProvider';
import Nav from '@/components/sections/Nav';
import FloatingContactButtons from '@/components/sections/FloatingContactButtons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/sections/footer-section';

export const metadata = {
  icon: '/assets/logo.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='font-sans '>
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
