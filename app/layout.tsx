import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SamaWritten — The Most Powerful Cardiac Wearable Ever Built",
  description: "SamaWritten (formerly SamaBeat) is a 24/7 cardiac monitoring wearable that detects 20+ conditions and alerts nearby samaritans. $199 device, cellular built-in, Clinical grade AI.",
  keywords: ["cardiac wearable", "heart failure monitoring", "AFib detection", "medical ECG watch", "cuffless blood pressure", "remote patient monitoring", "RPM", "SamaWritten", "Samaritan heart monitor"],
  authors: [{ name: "SamaWritten Team" }],
  openGraph: {
    title: "SamaWritten — Advanced Cardiac Intelligence",
    description: "24/7 Guardian for your heart. Detects AFib, Heart Failure, and 20+ conditions with medical-grade precision.",
    url: "https://samawritten.com",
    siteName: "SamaWritten",
    images: [
      {
        url: "/SamaWritten-Logo.png",
        width: 1200,
        height: 630,
        alt: "SamaWritten Cardiac Wearable",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SamaWritten — Advanced Cardiac Intelligence",
    description: "The most powerful cardiac wearable ever built. Five sensors. Twenty conditions.",
    images: ["/SamaWritten-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { WaitlistProvider } from "./context/WaitlistContext";
import { WaitlistModal } from "./components/ui/WaitlistModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalWebPage",
              "name": "SamaWritten",
              "description": "24/7 cardiac monitoring wearable and AI platform.",
              "url": "https://samawritten.com",
              "mainEntity": {
                "@type": "MedicalDevice",
                "name": "SamaWritten Wearable",
                "manufacturer": "SamaWritten",
                "purpose": "Cardiac condition monitoring and emergency alerting"
              }
            }),
          }}
        />
        <WaitlistProvider>
          {children}
          <WaitlistModal />
        </WaitlistProvider>
      </body>
    </html>
  );
}
