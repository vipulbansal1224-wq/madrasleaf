'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  CalendarDays, 
  UtensilsCrossed, 
  Star, 
  MapPin, 
  ShieldCheck, 
  Coffee, 
  HeartHandshake, 
  Flame,
  Award,
  ExternalLink
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';
import { menuItems } from '@/data/menuData';
import DishCard from '@/components/DishCard';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'south-indian' | 'north-indian' | 'sizzlers'>('all');

  const filteredDishes = menuItems.filter((dish) => {
    if (activeCategory === 'all') return dish.isBestseller || dish.isChefSpecial;
    return dish.category === activeCategory;
  }).slice(0, 6);

  const stats = [
    { number: '4.8★', label: 'Average Customer Rating', sub: 'Across 1,450+ Diners' },
    { number: '100%', label: 'Pure Vegetarian', sub: 'Shuddh Shakahari Kitchen' },
    { number: '120+', label: 'Multi-Cuisine Delicacies', sub: 'South, North & Sizzlers' },
    { number: 'Wave Mall', label: '1st Floor, Ferozepur Rd', sub: 'Ample Parking & Space' },
  ];

  const testimonials = [
    {
      name: 'Simranjeet Kaur',
      area: 'BRS Nagar, Ludhiana',
      comment: 'Best South Indian food in Ludhiana without question! Their Ghee Podi Masala Dosa is super crisp, and the Filter Kaapi in traditional brass davara is heavenly. Love the clean family ambiance!',
      rating: 5,
      date: '2 weeks ago',
    },
    {
      name: 'Rajesh Grewal',
      area: 'Rajguru Nagar, Ludhiana',
      comment: 'We celebrated our family get-together here. The Paneer Butter Masala and Dal Makhani were rich yet not overly heavy. Plus, kids loved the Sizzlers and Hakka Noodles.',
      rating: 5,
      date: '1 month ago',
    },
    {
      name: 'Dr. Ananya Sharma',
      area: 'Sarabha Nagar, Ludhiana',
      comment: 'Pure vegetarian bliss at Wave Mall! Beautiful decor, prompt service, and the thatte idli dipped in authentic sambar reminds me of Bangalore. Highly recommended.',
      rating: 5,
      date: '3 weeks ago',
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Food Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=2000&q=85"
            alt="Madras Leaf South Indian & Multi Cuisine Feast"
            fill
            priority
            className="object-cover scale-105 animate-pulse duration-1000"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Wave Mall, Ludhiana • 100% Pure Vegetarian</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-cream-50">
              Where Southern Heritage Meets{' '}
              <span className="gold-gradient-text block mt-1">
                Multi-Cuisine Grandeur
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-leaf-100/90 font-light leading-relaxed">
              Experience the aroma of roasted curry leaves, ghee-soaked crispy dosas, bubbling handi curries, and smoking sizzlers. Ludhiana&apos;s most cherished family destination for pure vegetarian gastronomy.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-leaf-950 font-bold text-base shadow-xl hover:shadow-gold-500/20 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>Explore Menu</span>
            </Link>

            <Link
              href="/reservation"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-leaf-900/80 hover:bg-leaf-800 text-white font-semibold text-base border border-leaf-700/80 backdrop-blur-md shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <CalendarDays className="w-5 h-5 text-gold-400" />
              <span>Book a Table</span>
            </Link>

            <a
              href={restaurantInfo.links.swiggyDineout}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-orange-600/90 hover:bg-orange-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow"
            >
              <span>Swiggy Dineout ↗</span>
            </a>
          </div>

          {/* Location & Rating quick info */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-leaf-200">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="font-semibold text-white">4.8 / 5 Rating</span> (1,450+ Happy Reviews)
            </div>
            <div className="hidden sm:block text-leaf-600">•</div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>1st Floor, Wave Mall, Ferozepur Road</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-leaf-100 p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`space-y-1 ${idx !== stats.length - 1 ? 'lg:border-r border-leaf-100' : ''}`}
            >
              <div className="font-serif text-3xl sm:text-4xl font-extrabold text-leaf-950">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-leaf-800">{stat.label}</div>
              <div className="text-xs text-leaf-600">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-gold-700 text-xs uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4 text-gold-600" /> Handcrafted Culinary Wonders
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-950">
              Chef&apos;s Signature Recommendations
            </h2>
            <p className="text-leaf-800/80 text-sm max-w-xl">
              From stone-ground dosas drenched in pure ghee to royal North Indian curries and smoking sizzlers, every plate tells a story of authenticity.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-leaf-50 rounded-2xl border border-leaf-100 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-leaf-800 text-white shadow-sm'
                  : 'text-leaf-800 hover:bg-leaf-200/60'
              }`}
            >
              All Signatures
            </button>
            <button
              onClick={() => setActiveCategory('south-indian')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'south-indian'
                  ? 'bg-leaf-800 text-white shadow-sm'
                  : 'text-leaf-800 hover:bg-leaf-200/60'
              }`}
            >
              South Indian
            </button>
            <button
              onClick={() => setActiveCategory('north-indian')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'north-indian'
                  ? 'bg-leaf-800 text-white shadow-sm'
                  : 'text-leaf-800 hover:bg-leaf-200/60'
              }`}
            >
              North Indian
            </button>
            <button
              onClick={() => setActiveCategory('sizzlers')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'sizzlers'
                  ? 'bg-leaf-800 text-white shadow-sm'
                  : 'text-leaf-800 hover:bg-leaf-200/60'
              }`}
            >
              Sizzlers
            </button>
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center pt-4">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-leaf-950 hover:bg-leaf-900 text-gold-300 font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
          >
            <span>View Complete 120+ Dish Menu</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </section>

      {/* THE MADRAS LEAF EXPERIENCE (WHY DINE WITH US) */}
      <section className="bg-gradient-to-b from-leaf-950 to-leaf-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-bold">
              The Madras Leaf Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Why Ludhiana Loves Dining With Us
            </h2>
            <p className="text-leaf-300 text-sm leading-relaxed">
              We take pride in serving pure vegetarian indulgence where uncompromised culinary authenticity meets refined Punjabi hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-leaf-900/60 border border-leaf-800 rounded-2xl p-6 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">100% Pure Veg Sanctuary</h3>
              <p className="text-leaf-300 text-xs leading-relaxed">
                Dedicated Shuddh Shakahari kitchen following the highest standards of cleanliness and sattvic integrity.
              </p>
            </div>

            <div className="bg-leaf-900/60 border border-leaf-800 rounded-2xl p-6 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Authentic South Recipes</h3>
              <p className="text-leaf-300 text-xs leading-relaxed">
                Traditional batter fermented to perfection, pure Desi Ghee roasts, and secret gunpowder podi recipes from Chennai.
              </p>
            </div>

            <div className="bg-leaf-900/60 border border-leaf-800 rounded-2xl p-6 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Davara Filter Kaapi</h3>
              <p className="text-leaf-300 text-xs leading-relaxed">
                Single-origin coffee decoctions served frothing hot in traditional brass tumblers for that authentic morning aroma.
              </p>
            </div>

            <div className="bg-leaf-900/60 border border-leaf-800 rounded-2xl p-6 space-y-4 hover:border-gold-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-white">Celebrations & Parties</h3>
              <p className="text-leaf-300 text-xs leading-relaxed">
                Spacious restaurant capacity at Wave Mall, ideal for family lunches, Kitty parties, birthdays, and Roka functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER HIGHLIGHT: SWIGGY DINEOUT & DISTRICT.IN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cream-200 via-cream-100 to-amber-50 rounded-3xl p-8 sm:p-12 border border-gold-300 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
                Special Dining Privileges
              </div>
              <h3 className="font-serif text-3xl font-bold text-leaf-950">
                Book Through Swiggy Dineout & District.in
              </h3>
              <p className="text-leaf-800 text-sm leading-relaxed">
                Enjoy hassle-free table reservations, exclusive dining bills discounts, and cashback deals when you dine at Madras Leaf Wave Mall.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={restaurantInfo.links.swiggyDineout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book on Swiggy Dineout</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={restaurantInfo.links.district}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-leaf-900 hover:bg-leaf-950 text-gold-300 font-semibold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>View on District.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual Badge Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-leaf-100 max-w-sm w-full text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center font-bold text-xl">
                4.8★
              </div>
              <h4 className="font-serif font-bold text-lg text-leaf-950">Top Rated at Wave Mall</h4>
              <p className="text-xs text-leaf-700">
                Recognized by food lovers across Rajguru Nagar, BRS Nagar, and Ferozepur Road for authentic flavors.
              </p>
              <div className="pt-2">
                <Link
                  href="/reservation"
                  className="block w-full py-2.5 rounded-xl bg-leaf-800 hover:bg-leaf-900 text-gold-300 font-semibold text-xs transition-colors"
                >
                  Direct Website Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-gold-700 text-xs uppercase tracking-widest font-bold">
            Real Words From Food Lovers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-950">
            What Ludhiana Says About Us
          </h2>
          <p className="text-leaf-800/80 text-sm max-w-xl mx-auto">
            Honest feedback from our wonderful patrons dining at Wave Mall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-leaf-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-leaf-900 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-leaf-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-leaf-950">{item.name}</h4>
                  <p className="text-[11px] text-leaf-600">{item.area}</p>
                </div>
                <span className="text-[10px] text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK TABLE RESERVATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-leaf-950 text-white p-8 sm:p-14 text-center space-y-6">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-gold-400 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Seamless Dining Guaranteed
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
              Planning a Lunch or Dinner in Ludhiana?
            </h2>
            <p className="text-leaf-200 text-sm">
              Reserve your table ahead of time to avoid peak weekend waiting times at Wave Mall. Instant confirmation with zero booking fees!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/reservation"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-leaf-950 font-bold text-sm shadow-lg transition-all"
              >
                Reserve Your Table Now
              </Link>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-leaf-800 hover:bg-leaf-700 text-white font-semibold text-sm transition-all border border-leaf-700"
              >
                Call for Group Booking: {restaurantInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
