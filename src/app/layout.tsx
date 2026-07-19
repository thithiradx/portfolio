import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thithira Dilmith | Full Stack Developer Portfolio",
  description:
    "Portfolio of Thithira Dilmith (P.A.T.D Bandara) — a passionate Full Stack Developer from Sri Lanka specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Thithira Dilmith",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Sri Lanka",
  ],
  authors: [{ name: "Thithira Dilmith" }],
  openGraph: {
    title: "Thithira Dilmith | Full Stack Developer",
    description:
      "Passionate Full Stack Developer building modern, scalable web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thithira Dilmith | Full Stack Developer",
    description:
      "Passionate Full Stack Developer building modern, scalable web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
