import React from 'react';
import { TERMS } from '../data';

interface RentalTermsProps {
  onOpenBooking: () => void;
}

// Icon map for term cards
const TERM_ICONS: Record<string, React.ReactElement> = {
  age: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  docs: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 12h6M9 16h6M13 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-6-5z" />
    </svg>
  ),
  experience: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="11" width="18" height="10" rx="1" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  deposit: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
};

// Short labels for the reference photo style cards
const TERM_SHORT_VALUES: Record<string, string> = {
  age: '21 years',
  docs: '2 documents',
  experience: '1 year',
  deposit: 'From 1000$',
};

const TERM_SHORT_LABELS: Record<string, string> = {
  age: 'Minimum age',
  docs: "Passport and Driver's License",
  experience: 'Of driving experience',
  deposit: 'Security deposit',
};

export default function RentalTerms({ onOpenBooking }: RentalTermsProps) {
  return (
    <section id="terms" className="bg-zinc-950 py-20 border-t border-zinc-900 scroll-mt-14">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Title + tagline + assistant + CTA */}
          <div className="text-left">
            <h2 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-tight">
              Rental Terms
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-md">
              We're here for you — ready to help find the perfect car that matches your needs.
            </p>

            {/* Assistant row */}
            <div className="mt-10 flex items-center gap-4">
              <img
                src="/images/michael_carter_1781459236670.jpg"
                alt="Michael Carter"
                referrerPolicy="no-referrer"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-zinc-800"
              />
              <div>
                <p className="text-lg sm:text-xl font-semibold text-white">Michael Carter</p>
                <p className="text-sm sm:text-base text-zinc-500">Your Personal Rental Assistant</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="tel:+13235557842"
                onClick={(e) => { e.preventDefault(); onOpenBooking(); }}
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-colors py-4 px-10 rounded-full text-lg font-semibold cursor-pointer"
              >
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right Column: responsive grid of minimal dark term cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {TERMS.map((term) => (
              <div
                key={term.id}
                className="bg-zinc-900/50 rounded-2xl border border-zinc-800/50 p-5 sm:p-8 flex flex-col gap-4 hover:border-zinc-700/60 transition-colors text-left"
              >
                {/* Icon */}
                <div className="text-zinc-400">
                  {TERM_ICONS[term.id]}
                </div>

                {/* Value */}
                <div>
                  <p className="text-white font-semibold text-2xl leading-tight">
                    {TERM_SHORT_VALUES[term.id] ?? term.value}
                  </p>
                  <p className="text-zinc-500 text-sm sm:text-base mt-2 leading-snug">
                    {TERM_SHORT_LABELS[term.id] ?? term.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
