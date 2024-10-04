import { Montserrat } from 'next/font/google';

import { Footer, Header } from '@common/index';

import '@styles/reset.scss';
import '@styles/globals.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-Montserrat',
  weight: 'variable',
  preload: true,
});

export async function generateMetadata() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    title: {
      template: '%s | Next.js template',
      default: 'Next.js template', // a default is required when creating a template
    },
    description: 'Next.js template for making awesome projects',
    openGraph: {
      title: 'Next.js template',
      description: 'Next.js template for making awesome projects',
      // url: 'https://',
      siteName: 'Next.js template',
      images: [
        {
          url: `${url}/nextjs-192x192.png`, // Must be an absolute URL
          width: 192,
          height: 192,
          alt: 'icon',
        },
        // {
        //   url: `${url}/nextjs-512x512.png`, // Must be an absolute URL
        //   width: 512,
        //   height: 512,
        //   alt: 'icon',
        // },
      ],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={montserrat.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
