'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Check, Flame, Sparkles, Eye, X, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '@/data/menuData';
import { useCart } from '@/context/CartContext';

interface DishCardProps {
  dish: MenuItem;
}

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart, items } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const currentInCart = items.find((i) => i.dish.id === dish.id);

  const fallbackImage = 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80';
  const [imgSrc, setImgSrc] = useState(dish.image);

  return (
    <>
      <div 
        onClick={() => setModalOpen(true)}
        className="group bg-white rounded-2xl overflow-hidden border border-leaf-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
      >
        <div>
          {/* Image Container with Badges */}
          <div className="relative h-52 w-full overflow-hidden bg-leaf-50">
            <Image
              src={imgSrc}
              alt={dish.name}
              fill
              onError={() => setImgSrc(fallbackImage)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            {/* Quick View Hover Tag */}
            <div className="absolute inset-0 bg-leaf-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-leaf-950 text-xs font-bold shadow-md flex items-center gap-1.5 backdrop-blur-xs">
                <Eye className="w-3.5 h-3.5" /> Click for Details
              </span>
            </div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
              {/* Pure Veg Indicator Box */}
              <div className="bg-white/95 backdrop-blur-sm p-1 rounded border border-emerald-600 flex items-center justify-center shadow-sm" title="Pure Veg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              </div>

              {dish.isBestseller && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow">
                  Bestseller
                </span>
              )}
              {dish.isChefSpecial && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-600 text-white uppercase tracking-wider flex items-center gap-1 shadow">
                  <Sparkles className="w-3 h-3" /> Chef Pick
                </span>
              )}
            </div>

            {/* Spice Level indicator */}
            {dish.spiceLevel && (
              <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-black/60 text-white backdrop-blur-sm">
                <Flame className={`w-3.5 h-3.5 ${dish.spiceLevel === 'Spicy' ? 'text-rose-500' : 'text-amber-400'}`} />
                <span>{dish.spiceLevel}</span>
              </div>
            )}

            {/* Price Tag */}
            <div className="absolute bottom-3 right-3 bg-leaf-950/90 text-gold-400 backdrop-blur-sm px-3 py-1 rounded-full font-serif font-bold text-base shadow border border-gold-500/30">
              ₹{dish.price}
            </div>
          </div>

          {/* Content Details */}
          <div className="p-5">
            <h3 className="font-serif font-bold text-lg text-leaf-950 group-hover:text-leaf-700 transition-colors line-clamp-1 mb-2">
              {dish.name}
            </h3>
            <p className="text-leaf-800/80 text-xs leading-relaxed line-clamp-2 mb-3">
              {dish.description}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-1 mb-4">
              {dish.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-cream-200 text-leaf-900 px-2 py-0.5 rounded-md font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-5 pb-5 pt-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // prevent modal toggle
              addToCart(dish);
            }}
            className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
              currentInCart
                ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                : 'bg-leaf-800 hover:bg-leaf-900 text-gold-300 hover:shadow-md'
            }`}
          >
            {currentInCart ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>In Plate ({currentInCart.quantity}) • Add More</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-gold-400" />
                <span>Add to Plate (₹{dish.price})</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-leaf-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 w-full">
              <Image
                src={imgSrc}
                alt={dish.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-leaf-950/90 text-gold-400 font-serif font-bold text-lg px-4 py-1.5 rounded-full border border-gold-500/40">
                ₹{dish.price}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block"></span>
                  <span className="text-xs font-bold text-emerald-700 uppercase">100% Pure Vegetarian</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-leaf-950">{dish.name}</h3>
              </div>

              <p className="text-xs sm:text-sm text-leaf-800 leading-relaxed">
                {dish.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {dish.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-leaf-100 text-leaf-900 px-2.5 py-1 rounded-lg font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-leaf-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(dish);
                    setModalOpen(false);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-leaf-800 hover:bg-leaf-900 text-gold-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow"
                >
                  <Plus className="w-4 h-4 text-gold-400" />
                  Add to Plate (₹{dish.price})
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
