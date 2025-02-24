import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookContextProvider } from "@/context/BookContext";

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
      <BookContextProvider>
        <html lang="en">
          <body className={`relative`}>{children}</body>
        </html>
      </BookContextProvider>
    </ClerkProvider>
  );
}
