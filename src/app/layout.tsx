import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const usbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Wealthup - your goals partner",
  description: "Wealthup plans your financial goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${usbanistSans.variable} ${usbanistSans.variable} h-full antialiased`}
      
    >
      <head>
      <link rel="icon" href="/wealthup-new-whitelogo 1.svg" sizes="any" />
      
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
