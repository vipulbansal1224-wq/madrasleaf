'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarDays, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Heart,
  Share2
} from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export default function ReservationPage() {
  const [guests, setGuests] = useState('4');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('07:30 PM');
  const [seatingArea, setSeatingArea] = useState('Family Lounge');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    guests: string;
    date: string;
    time: string;
    seating: string;
    occasion: string;
    name: string;
    phone: string;
  } | null>(null);

  const lunchSlots = ['11:30 AM', '12:30 PM', '01:15 PM', '02:00 PM', '03:00 PM'];
  const dinnerSlots = ['06:30 PM', '07:15 PM', '07:45 PM', '08:30 PM', '09:15 PM', '10:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please provide your name and phone number to complete the booking demo.');
      return;
    }

    const bookingRef = `ML-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedBooking({
      id: bookingRef,
      guests,
      date,
      time: timeSlot,
      seating: seatingArea,
      occasion,
      name: fullName,
      phone,
    });
  };

  const handleWhatsAppBooking = () => {
    if (!submittedBooking) return;
    const msg = `*🎉 Table Reservation Request - Madras Leaf Ludhiana*\n` +
      `*Booking ID:* ${submittedBooking.id}\n` +
      `*Guest Name:* ${submittedBooking.name}\n` +
      `*Phone:* ${submittedBooking.phone}\n` +
      `*Guests:* ${submittedBooking.guests} Person(s)\n` +
      `*Date:* ${submittedBooking.date}\n` +
      `*Time Slot:* ${submittedBooking.time}\n` +
      `*Seating Area:* ${submittedBooking.seating}\n` +
      `*Occasion:* ${submittedBooking.occasion}\n` +
      (specialRequests ? `*Special Notes:* ${specialRequests}\n` : '') +
      `\n_Sent via Madras Leaf Website_`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=${encoded}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Page Header */}
      <section className="bg-leaf-950 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-leaf-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Table Reservation
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Reserve Your Pure Vegetarian Feast
          </h1>
          <p className="max-w-2xl mx-auto text-leaf-200 text-sm sm:text-base leading-relaxed">
            Guarantee your seating at Wave Mall Ludhiana. Enjoy instant confirmation, personalized table arrangements, and zero reservation charges.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {submittedBooking ? (
          /* Confirmation State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-leaf-100 text-center space-y-8 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Table Confirmed
              </span>
              <h2 className="font-serif text-3xl font-bold text-leaf-950">
                We Look Forward to Welcoming You, {submittedBooking.name}!
              </h2>
              <p className="text-leaf-800 text-sm max-w-lg mx-auto">
                Your reservation at Madras Leaf, Wave Mall Ludhiana has been successfully recorded. A confirmation message has been queued.
              </p>
            </div>

            {/* Booking Summary Ticket */}
            <div className="max-w-md mx-auto bg-cream-100 rounded-2xl p-6 border border-leaf-200 text-left space-y-4">
              <div className="flex justify-between items-center border-b border-leaf-200/60 pb-3">
                <span className="text-xs text-leaf-700 font-semibold uppercase tracking-wider">Booking ID</span>
                <span className="font-mono font-bold text-sm text-leaf-950">{submittedBooking.id}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-leaf-600 block">Date</span>
                  <span className="font-bold text-leaf-950 text-sm">{submittedBooking.date}</span>
                </div>
                <div>
                  <span className="text-leaf-600 block">Time</span>
                  <span className="font-bold text-leaf-950 text-sm">{submittedBooking.time}</span>
                </div>
                <div>
                  <span className="text-leaf-600 block">Party Size</span>
                  <span className="font-bold text-leaf-950 text-sm">{submittedBooking.guests} Guests</span>
                </div>
                <div>
                  <span className="text-leaf-600 block">Seating Area</span>
                  <span className="font-bold text-leaf-950 text-sm">{submittedBooking.seating}</span>
                </div>
              </div>
              <div className="pt-2 border-t border-leaf-200/60 text-xs">
                <span className="text-leaf-600 block">Occasion</span>
                <span className="font-medium text-leaf-950">{submittedBooking.occasion}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Notify Restaurant on WhatsApp</span>
              </button>
              <button
                onClick={() => setSubmittedBooking(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-leaf-100 hover:bg-leaf-200 text-leaf-900 font-semibold text-sm transition-all"
              >
                Make Another Reservation
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-leaf-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Party size & Date */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-leaf-950 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-leaf-800 text-gold-300 text-xs flex items-center justify-center">1</span>
                  Select Guests & Date
                </h3>

                {/* Guests count buttons */}
                <div>
                  <label className="text-xs font-semibold text-leaf-800 block mb-2">Number of Guests</label>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {['1', '2', '3', '4', '5', '6', '8', '10+'].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                          guests === num
                            ? 'bg-leaf-800 text-gold-300 shadow-md ring-2 ring-gold-400'
                            : 'bg-cream-100 text-leaf-900 hover:bg-leaf-100'
                        }`}
                      >
                        {num} {num === '10+' ? 'Party' : 'Pax'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="text-xs font-semibold text-leaf-800 block mb-2">Reservation Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700 bg-cream-50"
                  />
                </div>
              </div>

              {/* Step 2: Time Slot */}
              <div className="space-y-4 pt-4 border-t border-leaf-100">
                <h3 className="font-serif font-bold text-xl text-leaf-950 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-leaf-800 text-gold-300 text-xs flex items-center justify-center">2</span>
                  Select Preferred Dining Time
                </h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-leaf-700 block mb-1.5">Lunch Sessions</span>
                    <div className="flex flex-wrap gap-2">
                      {lunchSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                            timeSlot === slot
                              ? 'bg-leaf-800 text-gold-300 shadow-sm ring-1 ring-gold-400'
                              : 'bg-cream-100 text-leaf-900 hover:bg-leaf-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-leaf-700 block mb-1.5">Dinner Sessions</span>
                    <div className="flex flex-wrap gap-2">
                      {dinnerSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setTimeSlot(slot)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                            timeSlot === slot
                              ? 'bg-leaf-800 text-gold-300 shadow-sm ring-1 ring-gold-400'
                              : 'bg-cream-100 text-leaf-900 hover:bg-leaf-100'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Seating & Occasion */}
              <div className="space-y-4 pt-4 border-t border-leaf-100">
                <h3 className="font-serif font-bold text-xl text-leaf-950 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-leaf-800 text-gold-300 text-xs flex items-center justify-center">3</span>
                  Seating & Occasion
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Seating Preference</label>
                    <select
                      value={seatingArea}
                      onChange={(e) => setSeatingArea(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700 bg-cream-50"
                    >
                      <option value="Family Lounge">Family Lounge (Spacious & Ambient)</option>
                      <option value="Cozy Corner">Cozy Corner (Quiet & Intimate)</option>
                      <option value="Celebration Table">Celebration Table (Party Decor)</option>
                      <option value="Mall View Terrace">Mall View Table</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Occasion</label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700 bg-cream-50"
                    >
                      <option value="Casual Dining">Casual Dining / Family Lunch</option>
                      <option value="Birthday Celebration">Birthday Celebration</option>
                      <option value="Anniversary">Anniversary Dinner</option>
                      <option value="Kitty Party">Kitty Party / Ladies Catch-up</option>
                      <option value="Business Lunch">Business Dining</option>
                      <option value="Roka / Family Gathering">Roka / Pre-Wedding Gathering</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div className="space-y-4 pt-4 border-t border-leaf-100">
                <h3 className="font-serif font-bold text-xl text-leaf-950 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-leaf-800 text-gold-300 text-xs flex items-center justify-center">4</span>
                  Guest Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765-43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-leaf-800 block mb-1.5">Special Dietary or Seating Notes</label>
                  <textarea
                    rows={2}
                    placeholder="e.g., Please arrange high chairs for children / Jain food preference without onion & garlic / Cake cutting arrangement..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-leaf-200 text-xs sm:text-sm text-leaf-950 focus:outline-none focus:ring-2 focus:ring-leaf-700"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-leaf-800 to-leaf-950 hover:from-leaf-900 hover:to-black text-gold-300 font-bold text-base shadow-xl transition-all border border-gold-500/40 flex items-center justify-center gap-2"
                >
                  <CalendarDays className="w-5 h-5 text-gold-400" />
                  <span>Confirm Table Booking</span>
                </button>
                <p className="text-center text-xs text-leaf-600 mt-3">
                  No advance deposit required. We hold reserved tables for 15 minutes past your chosen time slot.
                </p>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
