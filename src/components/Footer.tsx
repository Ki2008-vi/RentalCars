import React, { useState } from 'react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const [emailInput, setEmailInput] = useState('');
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !agreePolicy) return;

    setIsSubscribed(true);
    setTimeout(() => {
      // Complete state simulation
      setEmailInput('');
      setAgreePolicy(false);
    }, 4000);
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-zinc-400 py-16 scroll-mt-14 select-none">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Segment: Lead Capture CTA and Newsletter Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          {/* Booking Call-To-Action Box */}
          <div className="lg:col-span-6 text-left">
            <span className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white border border-zinc-800">
              Booking Centric Concierge
            </span>
            <h3 className="mt-6 font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
              Ready to Drive in Pure Style?
            </h3>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
              Secure your customized rental rate quote today. Our team can dispatch your detailed supercar directly to your driveway, residence, or private jet strip within 90 minutes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-white text-black hover:bg-zinc-200 font-display font-medium text-sm tracking-wider uppercase py-4 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Book Now &rarr;
              </button>
              <a
                href="tel:+13235557842"
                className="inline-flex bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800/80 hover:border-zinc-700 py-4 px-8 rounded-xl text-sm font-semibold transition-all cursor-pointer"
              >
                +1 (323) 555-7842
              </a>
            </div>
          </div>

          {/* Newsletter Subscription Card */}
          <div className="lg:col-span-6 bg-zinc-900/10 rounded-2xl border border-zinc-900 p-8 flex flex-col justify-between text-left">
            <div>
              <h4 className="font-display font-bold text-2xl text-white">Subscribe to Newsletters</h4>
              <p className="text-base text-zinc-400 mt-2">Get priority notification concerning fleet expansions, pricing specials, and custom track outings.</p>
            </div>

            {isSubscribed ? (
              <div className="mt-8 p-5 rounded-xl bg-white/10 border border-white/20 flex gap-3 text-white text-base">
                <div>
                  <p className="font-semibold text-white">Subscription Successful</p>
                  <p className="mt-1 text-zinc-300">Your address is verified. Welcome to Luxerra VIP announcements.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-zinc-900 border border-zinc-850 text-base rounded-xl px-5 py-4 text-white placeholder-zinc-650 focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    disabled={!agreePolicy}
                    className="bg-white hover:bg-zinc-200 text-black py-4 px-6 rounded-xl text-sm font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreePolicy}
                    onChange={(e) => setAgreePolicy(e.target.checked)}
                    required
                    className="h-5 w-5 mt-0.5 rounded border-zinc-800 bg-zinc-900 text-white focus:ring-white focus:ring-offset-zinc-950"
                  />
                  <span className="text-sm text-zinc-500 leading-normal">
                    I agree to the <span className="text-zinc-300 hover:underline">Privacy Policy</span> and consent to receiving marketing dispatches.
                  </span>
                </label>
              </form>
            )}
          </div>

        </div>

        {/* Lower Segment: Corporate details, contacts, links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-12 items-start text-left text-xs text-zinc-450 leading-relaxed">
          
          {/* Logo Brand Segment */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-bold text-xs">
                LX
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">Luxerra</span>
            </div>
            <p className="max-w-xs text-zinc-500 leading-relaxed">
              The premier luxury supercar renting and concierge platform in California. Curating pristine engineering for discerning travelers worldwide.
            </p>
            {/* Social icons row */}
            <div className="flex gap-3 text-zinc-500">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white px-3 py-2 bg-zinc-900/60 rounded border border-zinc-850 hover:border-zinc-800 transition-colors text-xs uppercase tracking-wider">
                Instagram
              </a>
              <a href="https://wa.me/13235557842" target="_blank" rel="noreferrer" className="hover:text-white px-3 py-2 bg-zinc-900/60 rounded border border-zinc-850 hover:border-zinc-800 transition-colors text-xs uppercase tracking-wider">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="font-display font-bold text-sm text-white tracking-tight">Navigation</h5>
            <ul className="space-y-2">
              <li><a href="#cars" className="hover:text-white transition-colors">Supercars Fleet</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Validation Rules</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#values" className="hover:text-white transition-colors">Core Conveniences</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="font-display font-bold text-sm text-white tracking-tight">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-white transition-colors">Policies & FAQ</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">News Feed</a></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h5 className="font-display font-bold text-sm text-white tracking-tight">Corporate Identification</h5>
            <ul className="space-y-3 font-sans">
              
              <li className="flex items-start gap-2.5">
                <span>
                  <strong className="text-zinc-300 block">Physical Suite Address:</strong>
                  8500 Sunset Blvd, Suite 210, Los Angeles, CA 90069, USA
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span>
                  <strong className="text-zinc-300 block">Direct Assistance Line:</strong>
                  <a href="tel:+13235557842" className="hover:underline text-zinc-100 font-medium">+1 (323) 555-7842</a>
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span>
                  <strong className="text-zinc-300 block">Email Desk:</strong>
                  <a href="mailto:info@luxerra.com" className="hover:underline text-zinc-100 font-medium">info@luxerra.com</a>
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Lower Copyright section */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row justify-center items-center text-[11px] text-zinc-650 font-mono">
          <p>© 2026 Luxerra Premium Car Rental. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
