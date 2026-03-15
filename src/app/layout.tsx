import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanvi & Meet - Wedding Invitation",
  description: "You are cordially invited to the wedding celebration of Tanvi and Meet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
