import type { Metadata } from "next";
import localFont from "next/font/local";
import "@repo/design-system/globals.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const display = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Northstar | Payload-powered publishing",
  description: "A simple landing page powered by Payload CMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
