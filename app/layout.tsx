// import './globals.css';
// import { Providers } from './providers';
// import { LenisProvider } from '@/components/LenisProvider';
// import Nav from '@/components/sections/Nav';
// import FloatingContactButtons from '@/components/sections/FloatingContactButtons';
// import { Toaster } from 'react-hot-toast';
// import { Footer } from '@/components/sections/footer-section';
// import { Parkinsans } from 'next/font/google';
// import Script from 'next/script';

// export const metadata = {
//   icon: '/assets/logo.png',
// };

// const bokorFont = Parkinsans({
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en' className={bokorFont.className}>
//       <link rel='icon' href='/favicon.ico' />

//       <body>
//         <Providers>
//           <Toaster />
//           <LenisProvider />
//           <Nav isLoading={false} />
//           <main>{children}</main>
//           <Footer />
//           <FloatingContactButtons />
//         </Providers>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import { Providers } from './providers';
import { LenisProvider } from '@/components/LenisProvider';
import Nav from '@/components/sections/Nav';
import FloatingContactButtons from '@/components/sections/FloatingContactButtons';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/sections/footer-section';
import { Parkinsans } from 'next/font/google';
import Script from 'next/script';

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

      {/* GTM Script */}
      <head>
        <Script id='gtm-script' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WKPZBCCS');`}
        </Script>
      </head>

      <body>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WKPZBCCS'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
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
