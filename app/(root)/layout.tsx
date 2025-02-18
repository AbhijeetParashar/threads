import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
  description:
    "ConnectVerse, created by Abhijeet Kumar, is a next-generation social media platform designed to bring people closer through seamless communication and sharing. Join the community today!",
  keywords: [
    "ConnectVerse",
    "Abhijeet Kumar",
    "social media platform",
    "Threads alternative",
    "online community",
    "social networking",
  ],
  authors: [
    {
      name: "Abhijeet Kumar",
      url: "https://www.linkedin.com/in/abhijeetkumar29/details/recommendations/",
    },
  ],
  openGraph: {
    title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
    description:
      "Join ConnectVerse, a social media platform by Abhijeet Kumar, designed to connect people through seamless communication and sharing.",
    url: "https://www.linkedin.com/in/abhijeetkumar29/",
    siteName: "ConnectVerse",
    images: [
      {
        url: "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410921294-e22a692d-6e14-4fd4-b97c-3737a244b771.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T130600Z&X-Amz-Expires=300&X-Amz-Signature=6f9818bad63c7edfa80e239bf65f486893b3fbab8e65b4be86faed06ae95aa7d&X-Amz-SignedHeaders=host",
        width: 1200,
        height: 630,
        alt: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConnectVerse - A Social Media Platform by Abhijeet Kumar",
    description:
      "Discover ConnectVerse, a social media platform by Abhijeet Kumar, designed to bring people closer through seamless communication and sharing.",
    images: [
      "https://github-production-user-asset-6210df.s3.amazonaws.com/53019674/410921294-e22a692d-6e14-4fd4-b97c-3737a244b771.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250207T130600Z&X-Amz-Expires=300&X-Amz-Signature=6f9818bad63c7edfa80e239bf65f486893b3fbab8e65b4be86faed06ae95aa7d&X-Amz-SignedHeaders=host",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
