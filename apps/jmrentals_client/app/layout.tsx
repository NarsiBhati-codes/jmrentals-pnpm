import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "JMRentals",
  description:
    "JMRentals offers a diverse range of self-driving cars for rent, providing customers with flexible and convenient rental options. With branches in multiple locations, JMRentals delivers a hassle-free car rental experience, whether you’re renting for a day, a week, or longer. Explore a wide variety of vehicles, from compact cars to SUVs, and enjoy the freedom of self-drive with reliable and well-maintained vehicles. Discover affordable rates, easy car selection, and the freedom to travel at your own pace with JMRentals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
