import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['200', '400', '600', '800'] });

export const metadata: Metadata = {
  title: "Animax | Home",
  description: "This is a simple movie application powered by Next JS which helps you to find details about the movies and tv series you like",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ backgroundColor: 'black' }}>
        {children}
      </body>
    </html>
  );
}
