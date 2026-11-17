'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  CalendarDays, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  MapPin,
  Clock,
  UtensilsCrossed,
  BookOpen,
  Info,
  ChevronRight
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsDrawerOpen } = useCart();

  const navLinks = [
    { name: 'Home', href: '/', icon: Sparkles },
    { name: 'Our Menu', href: '/menu', icon: UtensilsCrossed },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Reserve Table', href: '/reservation', icon: CalendarDays },
    { name: 'Visit & Contact', href: '/contact', icon: MapPin },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-leaf-950 text-leaf-100 text-xs py-2 px-4 border-b border-leaf-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-semibold text-gold-400">
              <Sparkles className="w-3.5 h-3.5" /> 100% Pure Veg (Shuddh Shakahari)
            </span>
            <span className="hidden md:flex items-center gap-1 text-leaf-300">
              <MapPin className="w-3 h-3 text-gold-400" /> Wave Mall, Ferozepur Rd, Ludhiana
            </span>
            <span className="hidden lg:flex items-center gap-1 text-leaf-300">
              <Clock className="w-3 h-3 text-gold-400" /> Open Everyday: 11 AM – 11 PM
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${restaurantInfo.phone}`} 
              className="hover:text-gold-300 flex items-center gap-1 transition-colors text-white font-medium"
            >
              <Phone className="w-3 h-3 text-gold-400" /> {restaurantInfo.phone}
            </a>
            <span className="text-leaf-700">|</span>
            <a 
              href={restaurantInfo.links.swiggyDineout}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
            >
              Swiggy Dineout ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-leaf-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-leaf-800 to-leaf-950 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition-transform border border-gold-500/30">
                <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-leaf-950 flex items-center gap-1.5">
                  Madras Leaf
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 ring-2 ring-emerald-200" title="100% Pure Vegetarian"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-leaf-700 font-semibold">
                  Multi-Cuisine • Wave Mall Ludhiana
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible on md 768px and up) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 lg:px-4 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-leaf-800 text-gold-300 shadow-sm ring-1 ring-gold-400/40'
                        : 'text-leaf-900 hover:text-leaf-950 hover:bg-leaf-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons (Right) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="relative p-2.5 rounded-full text-leaf-900 hover:bg-leaf-100 transition-colors border border-leaf-200 bg-cream-50"
                title="View Dining Plate"
                aria-label="View Dining Plate"
              >
                <ShoppingBag className="w-5 h-5 text-leaf-800" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce">
                    {totalCount}
                  </span>
                )}
              </button>

              {/* Table Booking CTA (Desktop) */}
              <Link
                href="/reservation"
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-leaf-800 to-leaf-950 hover:from-leaf-900 hover:to-black text-gold-300 px-4 lg:px-5 py-2.5 rounded-full text-xs lg:text-sm font-bold shadow-md hover:shadow-lg transition-all border border-gold-500/30"
              >
                <CalendarDays className="w-4 h-4 text-gold-400" />
                <span>Book Table</span>
              </Link>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl bg-leaf-50 hover:bg-leaf-100 text-leaf-900 border border-leaf-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-leaf-900" /> : <MenuIcon className="w-5 h-5 text-leaf-900" />}
                <span className="text-xs font-bold text-leaf-900">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Full Screen Backdrop */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-leaf-200 bg-white shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="px-4 py-4 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-leaf-500 px-3 pb-1">
                Website Navigation
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-leaf-800 text-gold-300 shadow-sm'
                        : 'text-leaf-950 hover:bg-cream-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-leaf-600'}`} />
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-leaf-100 flex flex-col gap-2">
                <Link
                  href="/reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-gradient-to-r from-leaf-800 to-leaf-950 text-gold-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow"
                >
                  <CalendarDays className="w-4 h-4 text-gold-400" />
                  Book a Table at Wave Mall
                </Link>
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="w-full text-center py-2.5 border border-leaf-300 text-leaf-900 font-semibold text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-leaf-50"
                >
                  <Phone className="w-4 h-4 text-leaf-700" />
                  Call: {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
