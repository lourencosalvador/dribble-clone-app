import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts";



export const metadata: Metadata = {
  title: "NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.work_sans.className} antialiased`}>{children}</body>
    </html>
  );
}