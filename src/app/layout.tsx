import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/provider/theme-provider';
import Header from '@/shared/ui/header';

const geistSans = Geist({
 variable: '--font-geist-sans',
 subsets: ['latin'],
});

const geistMono = Geist_Mono({
 variable: '--font-geist-mono',
 subsets: ['latin'],
});

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="ko" suppressHydrationWarning className="h-full">
   <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full antialiased`}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
     <Header />
     {children}
    </ThemeProvider>
   </body>
  </html>
 );
}
