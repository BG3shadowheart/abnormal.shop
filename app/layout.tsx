import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABNORMAL",
  description: "Automatic device redirect for ABNORMAL"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
