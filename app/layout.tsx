import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/themeprovider";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  weight: ["600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["Inter", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Hung",
  openGraph: {
    images: [""],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${interSans.variable} antialiased`}
        >
          <div className="i see you stalker"
            dangerouslySetInnerHTML={{
              __html: `<!-- hi -->`,
            }}
          />
          <Analytics />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}


