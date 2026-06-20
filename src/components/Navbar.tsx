import { useState, useEffect } from 'react';
import whatsappIcon from '../assets/icons/whatsaapp.svg';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight; // hide after 1 full viewport (hero)

      if (currentY > heroHeight) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setIsScrolled(currentY > 20);
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Cars', href: '#cars' },
    { label: 'Rental Terms', href: '#terms' },
    { label: 'News Feed', href: '#news' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-900 py-3' : 'bg-transparent py-5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-14 gap-6">
          {/* Logo */}
          <a href="#" className="flex gap-2 items-center">
            <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center text-black font-semibold tracking-wider text-sm transition-transform group-hover:rotate-12 duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
              LX
            </div>
            <div className="text-left">
              <span className="font-display font-bold text-lg tracking-wider text-white">Luxer</span>
              <span className="block text-[8px] uppercase tracking-widest text-zinc-400 font-mono -mt-1 font-semibold">Supercars LA</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex justify-center items-center justify-self-center">
            <div className="flex items-center gap-7">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative text-white text-sm tracking-wider uppercase transition-colors font-display"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-white text-black hover:bg-zinc-200 font-display font-semibold text-[11px] py-1.5 px-3.5 rounded-full uppercase tracking-wider cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white px-4 py-2 border border-zinc-800 rounded-xl text-xs uppercase tracking-wider"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-900"
          >
            <div className="px-5 py-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white font-medium text-xs tracking-wider uppercase bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-850 py-3 px-4 rounded-xl transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-zinc-900 pt-5 flex items-center justify-between text-zinc-400 text-xs">
                <span>Contact Personal Desk:</span>
                <div className="flex items-center gap-3">
                  <a href="https://wa.me/13235557842" className="text-white font-semibold hover:underline">WhatsApp</a>
                  <span>&bull;</span>
                  <a href="tel:+13235557842" className="text-white font-semibold hover:underline">Call Us</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </motion.header>

      {/* Floating action (desktop) - social icons + Book Now — also hides when navbar hides */}
      <motion.div
        animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="hidden md:flex fixed top-6 right-6 z-50 items-center gap-3"
      >
        <div className="flex items-center gap-3 bg-zinc-950/60 border border-zinc-900 py-2 px-3 rounded-full backdrop-blur-sm">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>

          <a href="https://wa.me/13235557842" className="text-zinc-300 hover:opacity-90">
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          </a>

          <a href="tel:+13235557842" className="text-white hover:opacity-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M22 16.92V21a1 1 0 01-1.11 1A19 19 0 013 5.11 1 1 0 014 4h4.09a1 1 0 01.91.62l1.2 3.01a1 1 0 01-.24 1.02L8.91 11.91a11 11 0 005.1 5.1l1.16-1.16a1 1 0 011.02-.24l3.01 1.2c.38.15.64.52.62.91z" />
            </svg>
          </a>
        </div>

        <button
          onClick={onOpenBooking}
          className="bg-white text-black font-display font-semibold text-[13px] py-2 px-5 rounded-full uppercase tracking-wider shadow-lg cursor-pointer"
        >
          Book Now
        </button>
      </motion.div>
    </>
  );
}
