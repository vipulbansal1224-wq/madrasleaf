import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  Heart,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function Footer() {
  return (
    <footer className="bg-leaf-950 text-leaf-100 border-t border-leaf-800">
      {/* Top Highlight strip */}
      <div className="border-b border-leaf-800/80 bg-leaf-900/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-lg text-white">Experience Authentic Flavors at Wave Mall</h4>
              <p className="text-leaf-300 text-sm">Pure vegetarian South Indian delicacies, North Indian curries & sizzling delights in Ludhiana.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/reservation"
              className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-400 text-leaf-950 font-semibold text-sm transition-all shadow-md"
            >
              Book Table
            </Link>
            <a
              href={restaurantInfo.links.swiggyDineout}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-600/90 hover:bg-orange-600 text-white font-medium text-sm transition-all flex items-center gap-1.5"
            >
              <span>Swiggy Dineout</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={restaurantInfo.links.district}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-leaf-800 hover:bg-leaf-700 text-leaf-100 font-medium text-sm transition-all flex items-center gap-1.5 border border-leaf-700"
            >
              <span>District.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-leaf-800 flex items-center justify-center text-gold-400 border border-gold-500/30">
                <span className="font-serif font-bold text-xl">M</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Madras Leaf
              </span>
            </div>
            <p className="text-leaf-300 text-sm leading-relaxed">
              Ludhiana&apos;s premier multi-cuisine pure vegetarian dining sanctuary. We unite the time-honored spice craft of Tamil Nadu & Karnataka with beloved North Indian curries and sizzling continental platters.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              100% Shuddh Shakahari (Pure Veg)
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-leaf-300">
              <li>
                <Link href="/" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" /> Home Overview
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" /> Full Dining Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" /> Our Heritage & Kitchen
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" /> Table Reservation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" /> Directions & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Cuisines */}
          <div>
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wider uppercase mb-4">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-sm text-leaf-300">
              <li className="flex items-center justify-between border-b border-leaf-800/60 pb-1.5">
                <span>Ghee Podi Dosas</span>
                <span className="text-gold-400 text-xs">Signature</span>
              </li>
              <li className="flex items-center justify-between border-b border-leaf-800/60 pb-1.5">
                <span>Madras Filter Kaapi</span>
                <span className="text-gold-400 text-xs">Arabica</span>
              </li>
              <li className="flex items-center justify-between border-b border-leaf-800/60 pb-1.5">
                <span>Paneer Butter Masala Handi</span>
                <span className="text-gold-400 text-xs">Rich</span>
              </li>
              <li className="flex items-center justify-between border-b border-leaf-800/60 pb-1.5">
                <span>Overnight Dal Makhani</span>
                <span className="text-gold-400 text-xs">Bukhara</span>
              </li>
              <li className="flex items-center justify-between pb-1.5">
                <span>Sizzling Hot Platters</span>
                <span className="text-gold-400 text-xs">Fusion</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Timings */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-gold-300 tracking-wider uppercase mb-4">
              Visit Us in Ludhiana
            </h4>
            <div className="flex items-start gap-3 text-sm text-leaf-300">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
              <span>{restaurantInfo.address}, Ludhiana, Punjab — {restaurantInfo.pincode}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-leaf-300">
              <Clock className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Open Daily: {restaurantInfo.timing.weekdays}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-leaf-300">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`tel:${restaurantInfo.phone}`} className="hover:text-gold-300">
                {restaurantInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-leaf-300">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href={`mailto:${restaurantInfo.email}`} className="hover:text-gold-300">
                {restaurantInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-12 pt-8 border-t border-leaf-800 text-center text-xs text-leaf-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Madras Leaf (Madras Cafe) Ludhiana. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Authentic Indian Dining Lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
