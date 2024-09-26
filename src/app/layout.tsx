import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quizmoji",
  description: "Quiz de emojis para você testar seus conhecimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
