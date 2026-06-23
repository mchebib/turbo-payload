import "@repo/design-system/globals.css";
import "./globals.css";

import { ClerkProvider } from "@repo/auth/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Northstar Workspace",
  description: "The product workspace for Turbo Payload.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
