import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });

export const metadata: Metadata = {
  title: "HandsOff App",
  description: "HandsOff Care Passport System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport" />
      </head>
      <body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">HandsOff</span><div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-low"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active</span></div></div><div className="flex items-center gap-space-sm"><Link className="h-9 px-3.5 rounded-full bg-error text-on-error flex items-center gap-1.5 shadow-[0_2px_8px_rgba(186,26,26,0.28)] hover:opacity-95 transition-opacity active:scale-95" data-path="emergency-countdown" href="/sos-countdown"><span className="material-symbols-outlined text-[16px]">e911_emergency</span><span className="font-label-md text-label-md uppercase tracking-wider font-semibold">SOS</span></Link><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary"><span className="material-symbols-outlined text-[18px]">person</span></div></div></div></header>
          {children}
          <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary"><div className="flex justify-around items-center h-16 px-margin"><Link className="flex flex-col items-center justify-center gap-0.5 min-w-[54px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="home" href="/"><span className="material-symbols-outlined text-[22px]">shield_with_heart</span><span className="font-label-sm text-label-sm">Home</span></Link><Link className="flex flex-col items-center justify-center gap-0.5 min-w-[54px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="care" href="/schedule"><span className="material-symbols-outlined text-[22px]">medical_services</span><span className="font-label-sm text-label-sm">Care</span></Link><Link className="flex flex-col items-center justify-center gap-0.5 min-w-[54px] min-h-[44px] text-on-surface-variant hover:text-on-surface transition-colors" data-path="passport" href="/passport"><span className="material-symbols-outlined text-[22px]">badge</span><span className="font-label-sm text-label-sm">Passport</span></Link><Link aria-current="page" className="flex flex-col items-center justify-center gap-0.5 min-w-[54px] min-h-[44px] transition-colors text-primary" data-path="activity" href="/activity"><span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>ecg_heart</span><span className="font-label-sm text-label-sm font-semibold">Activity</span></Link></div></nav>
        </ThemeProvider>
      </body>
    </html>
  );
}
