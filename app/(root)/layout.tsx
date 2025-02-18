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
        url: "https://i.pinimg.com/736x/74/f9/56/74f9569e940a6155371ee950544e4f38.jpg",
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
      "https://i.pinimg.com/736x/74/f9/56/74f9569e940a6155371ee950544e4f38.jpg",
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
