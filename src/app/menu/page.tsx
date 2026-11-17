'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  Filter, 
  ShoppingBag, 
  Download, 
  X,
  Flame,
  CheckCircle2,
  UtensilsCrossed,
  Info
} from 'lucide-react';
import { menuCategories, menuItems } from '@/data/menuData';
import DishCard from '@/components/DishCard';
import { useCart } from '@/context/CartContext';

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [bestsellerOnly, setBestsellerOnly] = useState<boolean>(false);
  const [activeSpice, setActiveSpice] = useState<string>('all');
  const [showDownloadNotice, setShowDownloadNotice] = useState<boolean>(false);
  const { totalCount, total, setIsDrawerOpen } = useCart();

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = 
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      // Bestseller filter
      const matchesBestseller = !bestsellerOnly || item.isBestseller;

      // Spice filter
      const matchesSpice = activeSpice === 'all' || item.spiceLevel === activeSpice;

      return matchesCategory && matchesSearch && matchesBestseller && matchesSpice;
    });
  }, [selectedCategory, searchQuery, bestsellerOnly, activeSpice]);

  return (
    <div className="space-y-12 pb-24">
      {/* Menu Header Banner */}
      <section className="bg-leaf-950 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-leaf-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" /> 100% Shuddh Shakahari Menu
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Our Handcrafted Dining Menu
          </h1>
          <p className="max-w-2xl mx-auto text-leaf-200 text-xs sm:text-sm leading-relaxed">
            Click on any dish below to view details or add to your dining plate. All dishes are prepared pure-vegetarian with authentic whole spices and Desi Ghee at Wave Mall Ludhiana.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-leaf-100 space-y-6">
          {/* Top row: Search input & quick toggles */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Box */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-leaf-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Masala Dosa, Paneer, Kaapi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-full bg-cream-50 border border-leaf-200 text-xs sm:text-sm text-leaf-950 placeholder-leaf-400 focus:outline-none focus:ring-2 focus:ring-leaf-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-leaf-400 hover:text-leaf-800"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Badges */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setBestsellerOnly(!bestsellerOnly)}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  bestsellerOnly
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300'
                    : 'bg-leaf-50 text-leaf-800 hover:bg-leaf-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Bestsellers
              </button>

              <button
                type="button"
                onClick={() => setActiveSpice(activeSpice === 'Spicy' ? 'all' : 'Spicy')}
                className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeSpice === 'Spicy'
                    ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
                    : 'bg-leaf-50 text-leaf-800 hover:bg-leaf-100'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                Spicy
              </button>

              <button
                type="button"
                onClick={() => setShowDownloadNotice(true)}
                className="px-4 py-2 rounded-full text-xs font-bold bg-leaf-950 text-gold-300 hover:bg-black transition-colors flex items-center gap-1.5 ml-auto cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-gold-400" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Download Notification Banner */}
          {showDownloadNotice && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  <strong>Demo Notice:</strong> In customer production, this downloads the official high-resolution printable PDF menu card with Ludhiana prices!
                </span>
              </div>
              <button 
                onClick={() => setShowDownloadNotice(false)}
                className="text-amber-800 hover:text-black font-bold p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Category Tabs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-leaf-700 mb-2">Select Cuisine Category:</div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
              {menuCategories.map((category) => {
                const isSelected = selectedCategory === category.id;
                const count = category.id === 'all' 
                  ? menuItems.length 
                  : menuItems.filter(i => i.category === category.id).length;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-leaf-800 text-gold-300 shadow-lg scale-105 ring-2 ring-gold-400'
                        : 'bg-cream-100 text-leaf-900 hover:bg-leaf-100'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      isSelected ? 'bg-leaf-950 text-gold-400' : 'bg-leaf-200/60 text-leaf-800'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif font-bold text-2xl text-leaf-950 flex items-center gap-2">
            <span>Showing Dishes</span>
            <span className="text-xs font-sans font-bold bg-leaf-100 text-leaf-800 px-3 py-1 rounded-full">
              {filteredItems.length} Available
            </span>
          </h2>
          {(selectedCategory !== 'all' || searchQuery || bestsellerOnly || activeSpice !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setBestsellerOnly(false);
                setActiveSpice('all');
              }}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" /> Clear Filters
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-leaf-100 space-y-4">
            <div className="w-16 h-16 rounded-full bg-cream-100 mx-auto flex items-center justify-center text-leaf-600">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-leaf-950">No dishes found matching your criteria</h3>
            <p className="text-xs text-leaf-700 max-w-sm mx-auto">
              Try adjusting your search terms, removing filters, or browsing all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setBestsellerOnly(false);
                setActiveSpice('all');
              }}
              className="px-6 py-2.5 rounded-full bg-leaf-800 text-gold-300 text-xs font-semibold hover:bg-leaf-900 shadow cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        )}
      </section>

      {/* Floating Bottom Bar when items added */}
      {totalCount > 0 && (
        <div className="fixed bottom-6 inset-x-4 max-w-md mx-auto z-40 animate-in slide-in-from-bottom duration-300">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-full bg-leaf-950 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between border-2 border-gold-500 hover:bg-leaf-900 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-500 text-leaf-950 flex items-center justify-center font-bold text-sm">
                {totalCount}
              </div>
              <div className="text-left">
                <p className="text-xs text-leaf-300">Dishes in Plate</p>
                <p className="font-serif font-bold text-base text-gold-300">₹{total} (est.)</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gold-400 group-hover:translate-x-1 transition-transform">
              <span>Review Plate</span>
              <ShoppingBag className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
