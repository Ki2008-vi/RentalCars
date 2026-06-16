import { Car, Testimonial, ProcessStep, ValueProposition, FAQItem, NewsStory } from './types';

export const FLEET: Car[] = [
  {
    id: 'porsche-911',
    name: 'Porsche 911 GT3 RS',
    brand: 'Porsche',
    type: 'Coupe',
    transmission: 'PDK Dual-Clutch',
    pricePerDay: 1100,
    topSpeed: '320 km/h',
    acceleration: '3.2s',
    power: '520 hp',
    image: '/src/assets/images/porsche_911_1781459165050.jpg',
    specs: {
      engine: '4.0 N/A Flat-6',
      drivetrain: 'RWD',
      weight: '1,435 kg'
    }
  },
  {
    id: 'audi-r8',
    name: 'Audi R8 Coupe V10',
    brand: 'Audi',
    type: 'Coupe',
    transmission: 'F1-Dual Clutch',
    pricePerDay: 1100,
    topSpeed: '330 km/h',
    acceleration: '3.4s',
    power: '562 hp',
    image: '/src/assets/images/audi_r8_1781459183160.jpg',
    specs: {
      engine: '5.2L Naturally Aspirated V10',
      drivetrain: 'AWD',
      weight: '1,595 kg'
    }
  },
  {
    id: 'mercedes-amg-gt',
    name: 'Mercedes-AMG GT Black',
    brand: 'Mercedes-AMG',
    type: 'Coupe',
    transmission: 'Automatic',
    pricePerDay: 800,
    topSpeed: '318 km/h',
    acceleration: '3.5s',
    power: '577 hp',
    image: '/src/assets/images/mercedes_amg_1781459199408.jpg',
    specs: {
      engine: '4.0L twin-turbocharged V8',
      drivetrain: 'RWD',
      weight: '1,650 kg'
    }
  },
  {
    id: 'aston-martin-vantage',
    name: 'Aston Martin Vantage S',
    brand: 'Aston Martin',
    type: 'Coupe',
    transmission: 'Automatic',
    pricePerDay: 800,
    topSpeed: '314 km/h',
    acceleration: '3.6s',
    power: '503 hp',
    image: '/src/assets/images/aston_martin_1781459217509.jpg',
    specs: {
      engine: '4.0L Twin-Turbo V8',
      drivetrain: 'RWD',
      weight: '1,530 kg'
    }
  }
];

export const TERMS = [
  {
    id: 'age',
    title: 'Minimum Age Requirement',
    value: '21 Years Old',
    description: 'Renters must be at least 21 years of age with a clean driving record.'
  },
  {
    id: 'docs',
    title: 'Required Documentation',
    value: 'Passport & License',
    description: 'Provide a valid passport and driver\'s license (international licenses accepted).'
  },
  {
    id: 'experience',
    title: 'Driving Experience',
    value: '1+ Year Experience',
    description: 'A minimum of one year of active driving experience under a valid state or foreign license.'
  },
  {
    id: 'deposit',
    title: 'Security Deposit',
    value: 'From $1,000',
    description: 'Fully refundable security deposit pre-authorized prior to key hand-off.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sophia Nguyen',
    role: 'Special Occasions',
    useCase: 'Brother\'s Wedding Gala',
    text: 'The Porsche 911 GT3 RS was absolutely pristine. Renting it for my brother\'s wedding gala was a dream—every eye was on us. Booking was flawless and professional.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Thompson',
    role: 'Enthusiast Rental',
    useCase: 'Weekend Track & Safety Check',
    text: 'An impeccable and incredibly smooth booking experience with zero friction. Knowing the fleet is maintained meticulously at racetrack-level standards gave me complete peace of mind.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Roberts',
    role: 'Corporate Jet Renters',
    useCase: 'Executive Roadshow',
    text: 'Unbelievably polished service. The Mercedes-AMG GT was detailing-fresh and waiting for me right at the FBO tarmac curb. Absolutely frictionless transaction with zero paperwork upon my arrival.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  },
  {
    id: '4',
    name: 'Andrew Collins',
    role: 'Premium Vacationer',
    useCase: 'Scenic Highway Weekend Getaway',
    text: 'Michael Carter was extremely helpful in setting things up. He facilitated a tailored weekend package that exceeded all our expectations. Definitely the premier concierge service in Los Angeles.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5
  }
];

export const STEPS: ProcessStep[] = [
  {
    id: 'step',
    number: '01',
    title: 'Choose Your Car',
    description: 'Select your preferred ultra-premium model from our curated, pristine supercar and luxury fleet.'
  },
  {
    id: 'step',
    number: '02',
    title: 'Contact Us Now',
    description: 'Verify instant real-time vehicle availability via our dedicated concierge assistant and receive a custom quote.'
  },
  {
    id: 'step',
    number: '03',
    title: 'Confirm & Secure',
    description: 'Securely submit your legal identification documents and proceed with the deposit authorization process.'
  },
  {
    id: 'step',
    number: '04',
    title: 'Drive in Pure Style',
    description: 'Receive your supercar detailed and driven directly to your preferred LA location or airport within 90 minutes.'
  }
];

export const VALUE_PROPS: ValueProposition[] = [
  {
    id: 'vp-1',
    title: 'Comprehensive Insurance',
    description: 'Comprehensive coverage and premium liability protections are fully included in your baseline rental rate.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'vp-2',
    title: 'Transparent Pricing',
    description: 'All taxes, cleaning, and delivery pricing is completely up-front. Absolutely no hidden fees or post-trip surcharges.',
    iconName: 'Sparkles'
  },
  {
    id: 'vp-3',
    title: 'Express Logistics',
    description: 'Skip the standard airport offices. Enjoy free personal delivery directly to your door, villa, or private jet within 90 minutes.',
    iconName: 'Navigation'
  },
  {
    id: 'vp-4',
    title: 'Support Availability',
    description: 'Enjoy 24/7 client care, VIP roadside concierge, and rapid vehicle support anywhere in California.',
    iconName: 'PhoneCall'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are there speed or usage restrictions on the supercars?',
    answer: 'Yes. All active rentals must strictly adhere to California traffic laws. Racing, competitive track driving, stunt maneuvers, off-roading, and driving by unauthorized individuals are strictly prohibited by our insurance terms and will void your coverage.'
  },
  {
    id: 'faq-2',
    question: 'What are the geographic boundaries for driving Luxerra vehicles?',
    answer: 'Cross-city or long-distance driving is fully permitted across Southern California, provided it is pre-arranged, documented, and approved within the initial rental agreement contract.'
  },
  {
    id: 'faq-3',
    question: 'What is the fuel policy during vehicle returns?',
    answer: 'We utilize a classic full-to-full refueling policy. Your vehicle will be delivered with a 100% full tank of 91+ premium octane fuel. Please hand it back fully refueled, or we can fuel it for you and charge the industry standard refueling fee.'
  },
  {
    id: 'faq-4',
    question: 'Are cosmetic alterations or wedding accessories allowed?',
    answer: 'Simple decorations for weddings or special photo-shoots are allowed, provided they use pre-approved non-destructive adhesive materials and cause absolutely no mechanical, structural, or surface clear-coat damage.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer professional chauffeur or driver services?',
    answer: 'Absolutely. Perfect for executive events and secure weddings, we have certified, professional, multilingual uniform chauffeurs available upon client request during the booking stage.'
  },
  {
    id: 'faq-6',
    question: 'What happens if I return the vehicle past the scheduled time?',
    answer: 'We offer a grace period of 30 minutes. Returns exceeding this timeframe are subject to pro-rated hourly late fees. If you anticipate a delay, please contact our concierge assistant immediately to avoid penalty rates.'
  }
];

export const NEWS: NewsStory[] = [
  {
    id: 'news-1',
    date: 'August 1, 2025',
    category: 'Fleet Addition',
    title: 'The Porsche 911 GT3 RS Joins Luxerra’s Supercar Fleet',
    description: 'Witness high-performance engineering. Our newest lizard green track monster is officially available for private individual booking starting today in Southern California.',
    imagePlaceholder: 'from-emerald-950 to-emerald-900'
  },
  {
    id: 'news-2',
    date: 'July 20, 2025',
    category: 'Express Service',
    title: 'Luxerra Launches 90-Minute Delivery Service in Los Angeles',
    description: 'Skip the standard paper counters. We are introducing priority instant hand-off directly on the VIP private jet strip or hotel entrance within 90 minutes of your booking confirmation.',
    imagePlaceholder: 'from-zinc-950 to-zinc-900'
  },
  {
    id: 'news-3',
    date: 'June 10, 2025',
    category: 'Lifestyle',
    title: 'Luxerra Partners with Exclusive Malibu Estate for Weekend Retreats',
    description: 'Our latest collaboration brings together the ultimate luxury driving experience and premium oceanfront villa access — a weekend package unlike anything in the industry.',
    imagePlaceholder: 'from-blue-950 to-blue-900'
  }
];
