import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "human.md",
  description: "Statements for humans. Made by humans. Supported by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased">
      <body className="flex min-h-full flex-col font-mono">{children}</body>
    </html>
  );
}
