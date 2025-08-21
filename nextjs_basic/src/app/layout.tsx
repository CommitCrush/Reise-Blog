import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_componennts/Navbar";

export const metadata: Metadata = {
  title: "Reise Blog",
  description: "A travel blog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
