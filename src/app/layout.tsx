import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Winter Arc Myanmar",
  description: "Software Solutions",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}