import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/context/CartContext';
import { restaurantInfo } from '@/data/restaurantInfo';

export const metadata: Metadata = {
  title: `${restaurantInfo.name} - Pure Vegetarian Multi-Cuisine Restaurant | Wave Mall Ludhiana`,
  description: `${restaurantInfo.subTagline}. Indulge in authentic South Indian Dosas, Filter Kaapi, rich North Indian curries, and sizzlers in Ludhiana.`,
  keywords: [
    'Madras Leaf Ludhiana',
    'Madras Cafe Ludhiana',
    'South Indian restaurant Ludhiana',
    'Pure Veg Multi-cuisine Wave Mall',
    'Best Dosa Ludhiana',
    'Ferozepur Road restaurants',
    'Rajguru Nagar Ludhiana food'
  ],
  openGraph: {
    title: `${restaurantInfo.name} | Ludhiana's Premier Pure Veg Restaurant`,
    description: restaurantInfo.subTagline,
    images: ['https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col justify-between selection:bg-leaf-800 selection:text-gold-300">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
