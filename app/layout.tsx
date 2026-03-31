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
  metadataBase: new URL("https://samawritten.com"),
  title: "SamaWritten — The Most Powerful Cardiac Wearable Ever Built",
  description: "SamaWritten (formerly SamaBeat) is a 24/7 cardiac monitoring wearable that detects 20+ conditions and alerts nearby samaritans. $199 device, cellular built-in, Clinical grade AI.",
  keywords: ["cardiac wearable", "heart failure monitoring", "AFib detection", "medical ECG watch", "cuffless blood pressure", "remote patient monitoring", "RPM", "SamaWritten", "Samaritan heart monitor", "Mumbai clinical trials", "India cardiac care"],
  authors: [{ name: "SamaWritten Team" }],
  icons: {
    icon: "/SamaWritten-Logo.png",
    apple: "/SamaWritten-Logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SamaWritten — Advanced Cardiac Intelligence",
    description: "24/7 Guardian for your heart. Detects AFib, Heart Failure, and 20+ conditions with medical-grade precision.",
    url: "https://samawritten.com",
    siteName: "SamaWritten",
    images: [
      {
        url: "/samawritten.png",
        width: 1200,
        height: 630,
        alt: "SamaWritten Cardiac Wearable — Advanced Monitoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SamaWritten — Advanced Cardiac Intelligence",
    description: "The most powerful cardiac wearable ever built. Five sensors. Twenty conditions.",
    images: ["/samawritten.png"],
  },
  verification: {
    google: "google-site-verification-placeholder",
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
import { CookieBanner } from "./components/ui/CookieBanner";

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
              "name": "SamaWritten — Advanced Cardiac Intelligence",
              "description": "24/7 cardiac monitoring wearable that detects 20+ conditions and predicts heart failure events with AI.",
              "url": "https://samawritten.com",
              "lastReviewed": new Date().toISOString(),
              "reviewedBy": {
                "@type": "Organization",
                "name": "SamaWritten Clinical Team"
              },
              "mainEntity": {
                "@type": "MedicalDevice",
                "name": "SamaWritten Wearable",
                "manufacturer": "SamaWritten",
                "purpose": "24/7 Cardiac condition monitoring and preventative alerting",
                "relevantSpecialty": "Cardiology",
                "brand": {
                  "@type": "Brand",
                  "name": "SamaWritten",
                  "logo": "https://samawritten.com/SamaWritten-Logo.png"
                }
              },
              "about": {
                "@type": "MedicalCondition",
                "name": ["Atrial Fibrillation", "Heart Failure", "Tachycardia", "Bradycardia"],
                "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Heart" }
              }
            }),
          }}
        />
        <WaitlistProvider>
          {children}
          <WaitlistModal />
          <CookieBanner />
        </WaitlistProvider>
      </body>
    </html>
  );
}
