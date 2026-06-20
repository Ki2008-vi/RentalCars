import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 py-24 border-t border-zinc-900">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white border border-zinc-800">
            Client Experiences
          </span>
          <h2 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="mt-6 text-lg text-zinc-400 font-sans leading-relaxed">
            Discover how Luxerra transforms driving across Los Angeles, serving elite celebrities, executive travelers, and car enthusiasts.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group relative bg-zinc-900/10 hover:bg-zinc-900/35 rounded-2xl border border-zinc-900 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                {/* Stars Row */}
                <div className="mb-5 text-sm uppercase tracking-wider text-white font-semibold">
                  Rating: {t.rating}/5
                </div>

                <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed italic text-left">
                  “{t.text}”
                </p>
              </div>

              {/* User Identity Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-zinc-300 font-mono font-medium mt-0.5">{t.role}</p>
                  <span className="block text-xs text-zinc-500 mt-0.5 whitespace-nowrap">{t.useCase}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
