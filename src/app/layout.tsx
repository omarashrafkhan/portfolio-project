import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider, LenisProvider } from "@/providers";
import { FloatingCursor } from "@/components";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://omarashrafkhan.dev"),
  title: "Omar Ashraf Khan — Full-Stack Developer & UI/UX Designer",
  description:
    "I craft high-performance digital experiences — from pixel-perfect interfaces to robust full-stack applications. Based in Pakistan, working worldwide.",
  generator: "Omar Ashraf Khan",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Omar Ashraf Khan — Full-Stack Developer & UI/UX Designer",
    description:
      "I craft high-performance digital experiences — from pixel-perfect interfaces to robust full-stack applications.",
    url: "https://omarashrafkhan.dev",
    siteName: "OAK.",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Omar Ashraf Khan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Ashraf Khan — Full-Stack Developer & UI/UX Designer",
    description:
      "I craft high-performance digital experiences — from pixel-perfect interfaces to robust full-stack applications.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black mx-auto max-w-[1440px]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
        <FloatingCursor />
      </body>
    </html>
  );
}
