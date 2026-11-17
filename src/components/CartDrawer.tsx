'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Utensils
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function CartDrawer() {
  const { 
    items, 
    isDrawerOpen, 
    setIsDrawerOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    subtotal, 
    gst, 
    total,
    totalCount 
  } = useCart();

  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  if (!isDrawerOpen) return null;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = `*🍽️ New Order Request - Madras Leaf Ludhiana*\n`;
    if (tableNumber) message += `*Table / Dine-In:* ${tableNumber}\n`;
    if (customerName) message += `*Guest Name:* ${customerName}\n`;
    message += `-------------------------\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.dish.name} x ${item.quantity} = ₹${item.dish.price * item.quantity}\n`;
    });
    message += `-------------------------\n`;
    message += `*Subtotal:* ₹${subtotal}\n`;
    message += `*GST (5%):* ₹${gst}\n`;
    message += `*Grand Total:* ₹${total}\n\n`;
    message += `_Sent via Madras Leaf Website Demo_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=${encoded}`, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-5 border-b border-leaf-100 flex items-center justify-between bg-leaf-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-leaf-800 flex items-center justify-center text-gold-400 border border-gold-500/30">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">Your Dining Plate</h3>
              <p className="text-leaf-300 text-xs">{totalCount} item{totalCount !== 1 ? 's' : ''} selected</p>
            </div>
          </div>
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 text-leaf-300 hover:text-white rounded-lg hover:bg-leaf-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Items list) */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-leaf-50 mx-auto flex items-center justify-center text-leaf-400">
                <Utensils className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-semibold text-lg text-leaf-950">Your plate is empty</h4>
              <p className="text-xs text-leaf-700 max-w-xs mx-auto">
                Explore our South Indian specialties, tandoori treats & sizzling platters to add them here!
              </p>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-leaf-800 text-gold-300 text-xs font-semibold hover:bg-leaf-900 shadow"
              >
                Explore Menu <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-xs font-semibold text-leaf-900 uppercase tracking-wider">Selected Dishes</span>
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
              </div>

              {items.map(({ dish, quantity }) => (
                <div 
                  key={dish.id} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-cream-100/60 border border-leaf-100"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-semibold text-sm text-leaf-950 truncate">
                      {dish.name}
                    </h5>
                    <p className="text-xs text-leaf-700 font-medium">₹{dish.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="inline-flex items-center border border-leaf-300 rounded-lg bg-white overflow-hidden shadow-xs">
                        <button
                          onClick={() => updateQuantity(dish.id, quantity - 1)}
                          className="px-2 py-0.5 text-leaf-700 hover:bg-leaf-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-leaf-950">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(dish.id, quantity + 1)}
                          className="px-2 py-0.5 text-leaf-700 hover:bg-leaf-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-bold text-sm text-leaf-950">
                      ₹{dish.price * quantity}
                    </div>
                    <button
                      onClick={() => removeFromCart(dish.id)}
                      className="text-xs text-gray-400 hover:text-rose-600 mt-2 p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Table / Customer Details for Demo */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <span className="text-xs font-semibold text-leaf-900 block">Dine-in / Demo Order Details</span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="px-3 py-2 text-xs rounded-lg border border-leaf-200 focus:outline-none focus:border-leaf-700"
                  />
                  <input
                    type="text"
                    placeholder="Table No. (e.g. T-4)"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="px-3 py-2 text-xs rounded-lg border border-leaf-200 focus:outline-none focus:border-leaf-700"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer (Summary & CTAs) */}
        {items.length > 0 && (
          <div className="p-5 border-t border-leaf-100 bg-cream-100/40 space-y-3">
            <div className="space-y-1.5 text-xs text-leaf-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Restaurant GST (5%)</span>
                <span className="font-medium">₹{gst}</span>
              </div>
              <div className="flex justify-between text-base font-serif font-bold text-leaf-950 pt-2 border-t border-leaf-200">
                <span>Estimated Total</span>
                <span className="text-gold-700">₹{total}</span>
              </div>
            </div>

            {/* WhatsApp Checkout demo button */}
            <button
              onClick={handleWhatsAppOrder}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Order to WhatsApp (Demo)</span>
            </button>

            {/* Book Table Link */}
            <Link
              href="/reservation"
              onClick={() => setIsDrawerOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-leaf-900 hover:bg-leaf-950 text-gold-300 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Reserve Table for this Feast</span>
            </Link>

            {orderSent && (
              <p className="text-[11px] text-center text-emerald-700 font-medium">
                Demo order generated! You can also check table reservation for instant booking.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
