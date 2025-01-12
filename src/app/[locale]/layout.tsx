import type { Metadata } from 'next';
import { Lora, Roboto } from 'next/font/google';
import './globals.css';
import ProvidersWrapper from '../provider';
import { WebVitals } from '../../../reportWebVitals';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Arunabh | personal Website',
  description: 'My personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${lora.variable}`}>
      <body suppressHydrationWarning className={`${lora.variable} antialiased`}>
        <WebVitals />
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
