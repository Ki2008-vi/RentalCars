export interface Car {
  id: string;
  name: string;
  brand: string;
  type: 'Coupe' | 'Convertible';
  transmission: 'Automatic' | 'F1-Dual Clutch' | 'PDK Dual-Clutch';
  pricePerDay: number;
  topSpeed: string; // e.g. "320 km/h"
  acceleration: string; // e.g. "3.2s (0-100 km/h)"
  power: string; // e.g. "520 hp"
  image: string;
  specs: {
    engine: string;
    drivetrain: string;
    weight: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  useCase: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ValueProposition {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon name matching
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NewsStory {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string; // color or gradient block
}
