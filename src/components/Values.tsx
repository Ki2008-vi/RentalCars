import { STEPS } from '../data';

const FEATURES = [
  {
    image: '/images/aston.jpg', // replace with your actual image paths
    title: 'Fully insured, no surprises',
    description: 'Your rental includes full coverage,\nso you can drive with complete peace of mind.',
  },
  {
    image: '/images/lambus.jpg',
    title: 'Clear pricing, no hidden fees',
    description: 'What you see is what you pay.\nNo unexpected charges after your trip.',
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-zinc-950 py-24 scroll-mt-14">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Heading */}
        <h2 className="text-center font-display font-semibold text-4xl sm:text-5xl text-white mb-16 tracking-tight">
          Premium service, zero hassle
        </h2>

        {/* Two image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              {/* Background image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text overlay — bottom left */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                <h3 className="font-display font-semibold text-white text-lg sm:text-xl mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}