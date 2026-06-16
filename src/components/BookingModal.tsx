import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car } from '../types';
import { FLEET } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
  onSuccess: (message: string) => void;
}

export default function BookingModal({ isOpen, onClose, selectedCarId, onSuccess }: BookingModalProps) {
  const [selectedCar, setSelectedCar] = useState<Car>(
    FLEET.find(c => c.id === selectedCarId) || FLEET[0]
  );
  
  const [startDate, setStartDate] = useState<string>('2026-06-15');
  const [endDate, setEndDate] = useState<string>('2026-06-17');
  const [chauffeurService, setChauffeurService] = useState<boolean>(false);
  const [premiumWaiver, setPremiumWaiver] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const [days, setDays] = useState<number>(2);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCarId) {
      const car = FLEET.find(c => c.id === selectedCarId);
      if (car) setSelectedCar(car);
    }
  }, [selectedCarId]);

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays > 0 ? diffDays : 1);
    } else {
      setDays(1);
    }
  }, [startDate, endDate]);

  const dailyRate = selectedCar.pricePerDay;
  const chauffeurRate = 150; // $150/day
  const waiverRate = 80; // $80/day

  const baseTotal = dailyRate * days;
  const chauffeurTotal = chauffeurService ? chauffeurRate * days : 0;
  const waiverTotal = premiumWaiver ? waiverRate * days : 0;
  const grandTotal = baseTotal + chauffeurTotal + waiverTotal;
  const securityDeposit = selectedCar.pricePerDay >= 1100 ? 1500 : 1000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        onSuccess(`Luxury Booking request successfully submitted for the ${selectedCar.name}! Michael Carter will contact you within 15 minutes.`);
        onClose();
        // Reset
        setIsDone(false);
        setName('');
        setEmail('');
        setPhone('');
        setNotes('');
      }, 3500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        />

        {/* Content Container */}
        <motion.div
          initial={{ scale: 0.96, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 30, opacity: 0 }}
          data-lenis-prevent
          className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950 text-white shadow-2xl md:grid md:grid-cols-12 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2.5 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all text-xs uppercase tracking-widest font-bold cursor-pointer"
          >
            Close
          </button>

          {isDone ? (
            <div className="col-span-12 flex flex-col items-center justify-center py-28 px-8 text-center">
              <motion.div 
                initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 shadow-xl"
              >
                {/* SVG Checkmark */}
                <svg className="w-10 h-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </motion.div>
              
              <h3 className="font-display font-bold text-3xl text-white tracking-tight uppercase tracking-widest">
                VIP Reservation Registered
              </h3>
              
              <p className="mt-4 max-w-md mx-auto text-zinc-400 text-base leading-relaxed">
                Thank you, <span className="font-semibold text-white">{name}</span>. Your request for the <span className="text-white underline font-semibold decoration-zinc-600 underline-offset-4">{selectedCar.name}</span> has been securely transmitted.
              </p>
              
              <div className="mt-8 flex flex-col space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 text-left max-w-md w-full mx-auto">
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Selected Supercar</span>
                  <span className="text-white font-medium">{selectedCar.name}</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Duration</span>
                  <span className="text-white font-medium">{days} Days ({startDate} to {endDate})</span>
                </div>
                <div className="flex justify-between text-sm text-zinc-400 border-t border-zinc-800/80 pt-3">
                  <span>Concierge Assistant</span>
                  <span className="text-white font-bold tracking-wide">Michael Carter</span>
                </div>
              </div>
              
              <p className="mt-8 text-xs text-zinc-500 uppercase tracking-widest animate-pulse">
                Direct priority terminal delivery requested within 90 mins after verification.
              </p>
            </div>
          ) : (
            <>
              {/* Left Column: Invoice & Spec Summary */}
              <div className="col-span-12 border-b border-zinc-800 bg-zinc-900/20 p-8 md:col-span-5 md:border-b-0 md:border-r md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-zinc-900 border border-zinc-800 px-4 py-1.5 text-xs font-semibold text-zinc-400 tracking-wider uppercase">
                    Premium Quote
                  </span>
                  
                  {/* Selected Car Details */}
                  <div className="mt-8">
                    <h3 className="font-display text-4xl font-bold tracking-tight text-white">{selectedCar.name}</h3>
                    <p className="text-xs text-zinc-400 mt-2 uppercase tracking-widest font-medium">{selectedCar.brand} &bull; {selectedCar.type}</p>
                    
                    <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/50 bg-black/30">
                      <img
                        src={selectedCar.image}
                        alt={selectedCar.name}
                        referrerPolicy="no-referrer"
                        className="h-56 md:h-64 w-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Pricing Calculation breakdown */}
                  <div className="mt-10 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Fee Summary</h4>
                    
                    <div className="flex justify-between text-base text-zinc-300">
                      <span>Daily Basis ({selectedCar.pricePerDay.toLocaleString()}/day)</span>
                      <span className="font-mono text-white font-medium">${baseTotal.toLocaleString()}</span>
                    </div>

                    {chauffeurService && (
                      <div className="flex justify-between text-base text-zinc-300">
                        <span>VIP Uniform Chauffeur ($150/day)</span>
                        <span className="font-mono text-white font-medium">${chauffeurTotal.toLocaleString()}</span>
                      </div>
                    )}

                    {premiumWaiver && (
                      <div className="flex justify-between text-base text-zinc-300">
                        <span>Collision Waiver ($80/day)</span>
                        <span className="font-mono text-white font-medium">${waiverTotal.toLocaleString()}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-base text-zinc-300 border-t border-zinc-850 pt-4">
                      <span>Ref. Security Deposit (Hold Only)</span>
                      <span className="font-mono text-white font-medium">${securityDeposit.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-lg font-bold text-white border-t border-zinc-800 pt-4">
                      <span>Estimated Total ({days} Days)</span>
                      <span className="font-mono text-white text-3xl font-bold">${grandTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-2xl bg-zinc-950 p-5 border border-zinc-800/80">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">SSL Encrypted Secure Booking</h4>
                    <p className="text-xs text-zinc-405 leading-relaxed mt-2 text-zinc-400">
                      Your identity and transactions are shielded by multi-layered institutional encryption safeguards. No direct payment is taken today.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Checkout Form */}
              <div className="col-span-12 p-8 md:col-span-7 md:p-12">
                <div className="mb-8">
                  <h3 className="font-display text-3xl font-bold text-white tracking-tight">Personal Information</h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">Please provide accurate validation data for your premium contract proposal.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Car Quick Swap */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Choose Car Model</label>
                    <select
                      value={selectedCar.id}
                      onChange={(e) => {
                        const targetCar = FLEET.find(c => c.id === e.target.value);
                        if (targetCar) setSelectedCar(targetCar);
                      }}
                      className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                    >
                      {FLEET.map(c => (
                        <option key={c.id} value={c.id} className="bg-zinc-950">{c.name} - ${c.pricePerDay}/day</option>
                      ))}
                    </select>
                  </div>

                  {/* Dates Pickers */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        min="2026-06-14"
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                        className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        min={startDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                        className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Add-on options */}
                  <div className="space-y-4 pt-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400">Exclusive Concierge Extras</label>
                    
                    <label className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:bg-zinc-900/55 cursor-pointer transition-all duration-300 hover:border-zinc-700/80">
                      <input
                        type="checkbox"
                        checked={chauffeurService}
                        onChange={(e) => setChauffeurService(e.target.checked)}
                        className="h-5 w-5 mt-1 rounded border-zinc-800 bg-zinc-900 text-white focus:ring-white focus:ring-offset-zinc-950 accent-white"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">Uniform Chauffeur Service</span>
                          <span className="text-xs bg-zinc-800 text-white border border-zinc-700 px-2 py-0.5 rounded-md font-mono">+$150/day</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">Let our professional certified multilingual driver handle traffic while you relax in supreme comfort.</p>
                      </div>
                    </label>

                    <label className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 hover:bg-zinc-900/55 cursor-pointer transition-all duration-300 hover:border-zinc-700/80">
                      <input
                        type="checkbox"
                        checked={premiumWaiver}
                        onChange={(e) => setPremiumWaiver(e.target.checked)}
                        className="h-5 w-5 mt-1 rounded border-zinc-800 bg-zinc-900 text-white focus:ring-white focus:ring-offset-zinc-950 accent-white"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">Zero-Liability Collision Shield</span>
                          <span className="text-xs bg-zinc-800 text-white border border-zinc-700 px-2 py-0.5 rounded-md font-mono">+$80/day</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">Waiver covers 100% of physical and cosmetic damage. Zero deductible, zero insurance report footprint.</p>
                      </div>
                    </label>
                  </div>

                  {/* Personal Contact Inputs */}
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Full Legal Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Johnathan Doe"
                        required
                        className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white placeholder-zinc-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="j.doe@example.com"
                          required
                          className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white placeholder-zinc-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Mobile Contact Phone</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (310) 555-0199"
                          required
                          className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white placeholder-zinc-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Specific Requests or Delivery Address (Optional)</label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="E.g., Delivery to terminal 4 at airport, or special instructions..."
                        className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl py-3.5 px-4 text-base text-white placeholder-zinc-700 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/20 transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-white text-black hover:bg-zinc-200 font-display font-bold text-xs uppercase tracking-widest py-4.5 px-6 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xl active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent inline-block"></span>
                    ) : (
                      'Complete Instant Reservation Check'
                    )}
                  </button>
                </form>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
