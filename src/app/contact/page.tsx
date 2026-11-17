'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'General Inquiry',
    message: ''
  });

  const faqs = [
    {
      q: 'Where is Madras Leaf located inside Wave Mall?',
      a: 'We are situated on the 1st Floor of Wave Mall on Ferozepur Road, Ludhiana (easily accessible from Rajguru Nagar, BRS Nagar, and Sarabha Nagar). Escalators and elevators bring you right to our restaurant entrance.'
    },
    {
      q: 'Is there parking available at Wave Mall?',
      a: 'Yes, Wave Mall provides ample multi-level covered basement parking for both cars and two-wheelers with dedicated security personnel.'
    },
    {
      q: 'Is Madras Leaf 100% Pure Vegetarian?',
      a: 'Yes, absolutely. We are a strictly Shuddh Shakahari restaurant with zero non-vegetarian items in our premises. We also offer Jain preparations (without onion and garlic) across our South and North Indian menus upon request.'
    },
    {
      q: 'Can we book Madras Leaf for Kitty Parties or Birthday Celebrations?',
      a: 'Yes! We host Kitty parties, birthdays, anniversaries, and small pre-wedding/Roka functions with special customized group menus and celebration table decorations.'
    },
    {
      q: 'Do you deliver online through Swiggy / District?',
      a: 'Yes, you can order online for home delivery via Swiggy as well as dineout privileges on Swiggy Dineout and District.in.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-24">
      {/* Page Header */}
      <section className="bg-leaf-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-leaf-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Visit Us & Connect
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Find Us at Wave Mall, Ludhiana
          </h1>
          <p className="max-w-2xl mx-auto text-leaf-200 text-sm sm:text-base leading-relaxed">
            Have a question, feedback, or planning a group party? We are always delighted to assist you.
          </p>
        </div>
      </section>

      {/* Contact Cards & Map Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Card */}
          <div className="bg-white rounded-3xl p-8 border border-leaf-100 shadow-sm space-y-8 lg:col-span-1">
            <div>
              <h3 className="font-serif font-bold text-2xl text-leaf-950">Reach Out Directly</h3>
              <p className="text-leaf-700 text-xs mt-1">Direct lines for reservations & inquiries</p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-leaf-50 text-leaf-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-leaf-950">Restaurant Location</h4>
                  <p className="text-xs text-leaf-800/90 leading-relaxed mt-1">
                    1st Floor, Wave Mall, Ferozepur Road,<br />
                    near Rajguru Nagar & BRS Nagar,<br />
                    Ludhiana, Punjab — 141012
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-leaf-50 text-leaf-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-leaf-950">Phone Support</h4>
                  <p className="text-xs text-leaf-800/90 mt-1">
                    <a href={`tel:${restaurantInfo.phone}`} className="font-semibold text-leaf-950 hover:underline">
                      {restaurantInfo.phone}
                    </a>
                  </p>
                  <p className="text-[11px] text-leaf-600">Landline: {restaurantInfo.alternatePhone}</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-leaf-50 text-leaf-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-leaf-950">Opening Hours</h4>
                  <p className="text-xs text-leaf-800 mt-1">Monday – Sunday: 11:00 AM – 11:00 PM</p>
                  <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Kitchen remains open all afternoon</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-leaf-50 text-leaf-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-leaf-950">Email Us</h4>
                  <p className="text-xs text-leaf-800/90 mt-1">
                    <a href={`mailto:${restaurantInfo.email}`} className="hover:underline">
                      {restaurantInfo.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-leaf-100 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=Hello%20Madras%20Leaf%20Ludhiana`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={restaurantInfo.links.swiggyDineout}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all border border-orange-200"
              >
                <span>View on Swiggy Dineout</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form & Map View */}
          <div className="space-y-8 lg:col-span-2">
            {/* Interactive Location Showcase */}
            <div className="bg-white rounded-3xl p-6 border border-leaf-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-lg text-leaf-950">Interactive Location Map</h4>
                  <p className="text-xs text-leaf-700">Wave Mall, Ferozepur Road (near Rajguru Nagar, Ludhiana)</p>
                </div>
                <a
                  href={restaurantInfo.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-leaf-900 text-gold-300 text-xs font-semibold flex items-center gap-1.5 hover:bg-black transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled Mock Google Map Iframe / Visual */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-slate-100 border border-leaf-100 flex items-center justify-center">
                <iframe
                  title="Madras Leaf Wave Mall Ludhiana Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.3216893693836!2d75.79462797626966!3d30.877561874513687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8236bd14b223%3A0xe54ef5f6f4fa2ea6!2sWave%20Mall%20Ludhiana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Inquiries & Banquet Catering Form */}
            <div className="bg-white rounded-3xl p-8 border border-leaf-100 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-2xl text-leaf-950">Thank You for Getting in Touch!</h4>
                  <p className="text-xs text-leaf-700 max-w-md mx-auto">
                    We have received your message. Our restaurant manager at Wave Mall Ludhiana will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-leaf-800 text-gold-300 text-xs font-semibold hover:bg-leaf-900"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-leaf-950">Party Catering & Feedback Form</h4>
                    <p className="text-xs text-leaf-700 mt-0.5">Let us know if you want catering or have special requests.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-leaf-800 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Gurman Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-leaf-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-leaf-800 block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765-43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-leaf-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-leaf-800 block mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="gurman@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-leaf-700"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-leaf-800 block mb-1">Topic</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-leaf-700 bg-cream-50"
                      >
                        <option value="General Inquiry">General Dining Inquiry</option>
                        <option value="Kitty Party / Celebration">Kitty Party / Birthday Party Booking</option>
                        <option value="Outdoor Catering">Live Counter & Outdoor Catering</option>
                        <option value="Customer Feedback">Customer Experience Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1">Your Message / Requirements</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the number of guests, date, or your dining question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-leaf-700"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-leaf-950 hover:bg-black text-gold-300 font-semibold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-gold-700 text-xs uppercase tracking-widest font-bold">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h3 className="font-serif text-3xl font-bold text-leaf-950">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-leaf-700">Everything you need to know about dining at Madras Leaf Ludhiana.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-leaf-100 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-cream-100/40 transition-colors"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-leaf-950">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-leaf-600 transition-transform duration-200 ${isOpen ? 'rotate-180 text-leaf-950' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-leaf-800/90 leading-relaxed border-t border-leaf-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
