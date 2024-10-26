import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarsBackground";
import Navbar from "@/components/Navbar";

import { siteMeta } from "@/constants/metadata";

const {baseurl, title, description, keywords } = siteMeta
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseurl),
  title,
  description,
  keywords,
  openGraph: {
    title,
    description
  },
  alternates: {
    canonical: baseurl,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
       
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
