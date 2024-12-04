import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Car Rent Showcase",
  description: "The place where you will find the best cars in your need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`relative`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
