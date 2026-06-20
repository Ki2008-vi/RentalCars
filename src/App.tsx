import { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetCatalog from './components/FleetCatalog';
import RentalTerms from './components/RentalTerms';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Values from './components/Values';
import FAQ from './components/FAQ';
import News from './components/News';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ConciergeChat from './components/ConciergeChat';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Lenis from 'lenis';

// Wrapper that fades + slides up each section when it enters the viewport
function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = (carId?: string) => {
    setSelectedCarId(carId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedCarId(undefined);
  };

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-white selection:text-black antialiased relative overflow-x-hidden">
      
      {/* Navbar — hides after scrolling past hero */}
      {isHomePage && <Navbar onOpenBooking={() => handleOpenBooking()} />}

      {/* Main Single Page Layout Content blocks */}
      <main>
        {/* Section 1: Hero Banner — no reveal (already visible on load) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section 2: Fleet Catalog Showcase */}
        <SectionReveal>
          <FleetCatalog onSelectCar={(carId) => handleOpenBooking(carId)} />
        </SectionReveal>

        {/* Section 3: Rental Terms & Assistant */}
        <SectionReveal delay={0.05}>
          <RentalTerms onOpenBooking={() => handleOpenBooking()} />
        </SectionReveal>

        {/* Section 4: Customer Testimonials */}
        <SectionReveal>
          <Testimonials />
        </SectionReveal>

        {/* Section 5: Step-by-Step Acquisition Flow */}
        <SectionReveal>
          <Process />
        </SectionReveal>

        {/* Section 6: Value Propositions & Services */}
        <SectionReveal>
          <Values />
        </SectionReveal>

        {/* Section 7: Geographic Policies FAQ Accordion */}
        <SectionReveal>
          <FAQ />
        </SectionReveal>

        {/* Section 8: Brand Updates News & Stories */}
        <SectionReveal>
          <News />
        </SectionReveal>
      </main>

      {/* Section 9: Lead Capture & Address Footer */}
      <SectionReveal>
        <Footer onOpenBooking={() => handleOpenBooking()} />
      </SectionReveal>

      {/* Interactive Checkout Quote Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        selectedCarId={selectedCarId}
        onSuccess={(msg) => triggerToast(msg)}
      />

      {/* Personal Concierge Chat Bubble */}
      <ConciergeChat />

      {/* Elegant Live Toast Notifications */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-6 left-6 z-50 max-w-sm sm:max-w-md overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/95 p-4 text-white shadow-2xl backdrop-blur-md"
          >
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Luxerra Dispatch
              </h4>
              <p className="mt-1 text-xs text-zinc-300 leading-normal font-sans">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
