'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Heart, 
  Award, 
  ShieldCheck, 
  Coffee, 
  Flame, 
  MapPin, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function AboutPage() {
  const values = [
    {
      title: 'The Sacred Banana Leaf',
      desc: 'In ancient Indian traditions, dining on a fresh plantain leaf represents purity, wellness, and heartfelt hospitality. Madras Leaf was born from this exact philosophy.',
      icon: Heart,
    },
    {
      title: '100% Shuddh Shakahari',
      desc: 'A sacred promise to our guests: we operate a strictly pure-vegetarian facility with zero compromise on kitchen cleanliness, raw material freshness, and sattvic care.',
      icon: ShieldCheck,
    },
    {
      title: 'Real Southern Craftsmanship',
      desc: 'Our batters undergo overnight natural fermentation using traditional urad dal & parboiled rice. No artificial leavening agents or shortcuts.',
      icon: Award,
    },
    {
      title: 'North Indian Royal Touch',
      desc: 'To satisfy Ludhiana’s legendary love for rich curries, our master tandoor chefs craft creamy Paneer Butter Masala, overnight Dal Bukhara, and Amritsari Kulchas.',
      icon: Flame,
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      title: 'Crispy Desi Ghee Dosas',
      caption: 'Served hot with fresh coconut, tomato & coriander chutneys'
    },
    {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      title: 'Traditional Filter Kaapi',
      caption: 'Brewed with Chikmagalur roasted beans in brass davara'
    },
    {
      url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      title: 'Royal Dal Bukhara',
      caption: 'Simmered for 14 hours with country butter & kasoori methi'
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      title: 'Signature Sizzlers',
      caption: 'Sizzling hot multi-cuisine platters loved by youth & families'
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Header Banner */}
      <section className="bg-leaf-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-leaf-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Our Story & Heritage
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-cream-50">
            A Journey of Authentic Flavors & Pure Vegetarian Bliss
          </h1>
          <p className="max-w-2xl mx-auto text-leaf-200 text-sm sm:text-base leading-relaxed">
            How Madras Leaf brought the soul of South Indian coffee homes and the grandeur of North Indian dining to Wave Mall, Ludhiana.
          </p>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text narrative */}
          <div className="space-y-6">
            <span className="text-gold-700 text-xs uppercase tracking-widest font-bold">
              Born from a Passion for Purity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-950 leading-tight">
              Honoring India&apos;s Rich Culinary Traditions under One Roof
            </h2>
            <p className="text-leaf-800/90 text-sm sm:text-base leading-relaxed">
              When we opened our doors at <strong>Wave Mall on Ferozepur Road</strong>, our vision was crystal clear: create an ambient pure vegetarian sanctuary where food lovers in Ludhiana wouldn&apos;t have to travel to Delhi or Bangalore to taste an authentic, ghee-roasted Podi Masala Dosa or a velvety hot Filter Kaapi.
            </p>
            <p className="text-leaf-800/90 text-sm sm:text-base leading-relaxed">
              Understanding Punjab&apos;s celebratory food culture, we expanded our culinary canvas into a refined <strong>Multi-Cuisine experience</strong>. Today, families can relish authentic South Indian thatte idlis while simultaneously indulging in rich North Indian handi curries, tandoori soya chaap, and sizzling Indo-Chinese platters.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-leaf-950">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Stone ground daily batters</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-leaf-950">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Pure Desi Ghee roasts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-leaf-950">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Chikmagalur filter coffee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-leaf-950">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>100% Shuddh Shakahari</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85"
              alt="Madras Leaf Dosa Preparation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
              <div className="font-serif font-bold text-lg text-gold-300">The Madras Leaf Kitchen</div>
              <p className="text-xs text-leaf-200 mt-1">Open kitchen hygiene standards and passionate chefs dedicated to authentic craft.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY / PILLARS */}
      <section className="bg-cream-100 py-20 border-y border-leaf-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-gold-700 text-xs uppercase tracking-widest font-bold">
              Our Guiding Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-950">
              Purity, Authenticity & Warmth
            </h2>
            <p className="text-leaf-800 text-sm">
              Every detail at Madras Leaf is curated to give you an unforgettable casual and family fine dining experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-3xl border border-leaf-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-leaf-50 flex items-center justify-center text-leaf-800">
                    <Icon className="w-6 h-6 text-leaf-700" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-leaf-950">{v.title}</h3>
                  <p className="text-xs text-leaf-800/80 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AMBIANCE & DISH GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-gold-700 text-xs uppercase tracking-widest font-bold">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-leaf-950">
            A Feast for Your Senses
          </h2>
          <p className="text-leaf-800 text-sm max-w-xl mx-auto">
            Take a look at some of our most celebrated dishes and dining moments at Wave Mall Ludhiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group relative h-72 rounded-2xl overflow-hidden shadow-md bg-leaf-50 border border-leaf-100">
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="font-serif font-bold text-base text-gold-300">{img.title}</h4>
                <p className="text-[11px] text-leaf-200 mt-0.5 line-clamp-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-leaf-950 rounded-3xl p-10 sm:p-14 text-white text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50">
            Join Us at Wave Mall Ludhiana
          </h2>
          <p className="max-w-xl mx-auto text-leaf-200 text-sm">
            Whether it&apos;s a Sunday morning South Indian breakfast or an evening family celebration, our doors are open everyday from 11:00 AM to 11:00 PM.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/reservation"
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-leaf-950 font-bold text-sm shadow-lg transition-all"
            >
              Book Your Table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 rounded-full bg-leaf-800 hover:bg-leaf-700 text-white font-semibold text-sm transition-all border border-leaf-700 flex items-center gap-2"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
