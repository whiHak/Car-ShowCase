import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import '../globals.css';

export const metadata = {
  title: 'CarHub - Your Premium Car Rental Service',
  description: 'Discover the best car rental service in town with competitive prices and excellent customer service.',
};

export default function FooterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 