import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center justify-start overflow-hidden pt-20">

      {/* Background Image with Dark Fades */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Meerci.jpg"
          alt="Luxerra Premium Showcase background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow brightness-90 saturate-[1.1]"
        />
        {/* Gradients to fade out the image and overlay luxurious deep rich shades */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8 w-full py-12 md:py-24">
        <div className="max-w-2xl text-left">


          {/* Core Value Proposition Header */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-90 font-display font-semibold text-4xl sm:text-6xl text-white tracking-tight leading-[1.1]"
          >
            Premium Car Rental <br />
            <span className="">in Indonesia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-sm sm:text-base text-zinc-350 leading-relaxed font-sans max-w-lg"
          >
            Experience unmatched comfort, style — wherever the road leads you.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="bg-white text-black hover:bg-zinc-200 font-display text-xs tracking-wider uppercase py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:scale-[1.03] cursor-pointera"
            >
              Choose Your Car
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
