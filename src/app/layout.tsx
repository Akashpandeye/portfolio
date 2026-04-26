import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akash-works.vercel.app"),
  title: {
    default: "Akash Works | Full-Stack Developer Portfolio",
    template: "%s | Akash Works",
  },
  description:
    "Portfolio of Akash, a full-stack developer building modern web experiences with Next.js, React, and backend services.",
  keywords: [
    "Akash",
    "Akash portfolio",
    "full-stack developer",
    "Next.js developer",
    "React portfolio",
    "web developer",
  ],
  openGraph: {
    title: "Akash Works | Full-Stack Developer Portfolio",
    description:
      "Explore Akash's projects, skills, and experience building modern full-stack web applications.",
    url: "https://akash-works.vercel.app",
    siteName: "Akash Works",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Works | Full-Stack Developer Portfolio",
    description:
      "Explore Akash's projects, skills, and experience building modern full-stack web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-stone-50 text-stone-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
