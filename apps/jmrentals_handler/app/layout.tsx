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
  title: "JMRentals-Handler",
  description:
    "JMRentals-Handler is a powerful platform for branch managers to manage car rental operations seamlessly. It enables handlers to confirm bookings, manage vehicle availability, generate agreements, extend rental durations, and process offline bookings efficiently. Integrated with the main JMRentals system, this tool ensures smooth and professional branch-level management, enhancing customer satisfaction and operational efficiency",
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
