import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car } from '../types';
import { FLEET } from '../data';

interface FleetCatalogProps {
  onSelectCar: (carId: string) => void;
}

export default function FleetCatalog({ onSelectCar }: FleetCatalogProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);

  const brands = ['All', 'Porsche', 'Audi', 'Mercedes-AMG', 'Aston Martin'];

  const filteredFleet = selectedBrand === 'All'
    ? FLEET
    : FLEET.filter(car => car.brand === selectedBrand);

  return (
    <section id="cars" className="bg-black py-24 scroll-mt-14">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">Choose Your Ride</h1>
        </div>

        {/* Luxury Brand Filter Pills */}
        <div className="mb-12 flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center scrollbar-none">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer shrink-0 ${
                selectedBrand === brand
                  ? 'bg-white text-black'
                  : 'bg-zinc-900/40 text-zinc-500 hover:text-zinc-200 border border-zinc-800/40 hover:bg-zinc-900/80'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col justify-between bg-transparent"
                onMouseEnter={() => setHoveredCar(car.id)}
                onMouseLeave={() => setHoveredCar(null)}
              >
                
                {/* Image Showcase Box */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 rounded-[24px]">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    animate={{
                      scale: hoveredCar === car.id ? 1.04 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Top-left spec pills (Top Speed / 0-100 / Power) */}
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 flex gap-1.5 sm:gap-2">
                    <span className="bg-black text-white text-[9px] sm:text-[11px] font-medium tracking-wide px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">{car.topSpeed}</span>
                    <span className="bg-black text-white text-[9px] sm:text-[11px] font-medium tracking-wide px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
                      {car.acceleration.endsWith('s') ? car.acceleration.replace('s', ' sec') : car.acceleration}
                    </span>
                    <span className="bg-black text-white text-[9px] sm:text-[11px] font-medium tracking-wide px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">{car.power}</span>
                  </div>
                </div>

                {/* Footer: name, price and Learn More */}
                <div className="mt-5 px-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-white">{car.name}</h3>
                    <a
                      href={`#${car.id}`}
                      onClick={() => onSelectCar(car.id)}
                      className="text-white hover:text-zinc-300 text-sm font-medium flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Learn More <span className="text-zinc-400 text-xs">›</span>
                    </a>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1">
                    from ${car.pricePerDay.toLocaleString()}/day
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
