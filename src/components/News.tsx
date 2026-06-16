import { NEWS } from '../data';

// Map each news story id to a unique local image
const NEWS_IMAGES: Record<string, string> = {
  'news-1': '/src/assets/images/porschedesign.jpg',
  'news-2': '/src/assets/images/amg.jpg',
  'news-3': '/src/assets/images/aston.jpg',
};

export default function News() {
  return (
    <section id="news" className="bg-zinc-950 py-24 border-t border-zinc-900 scroll-mt-14">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* Top — Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white border border-zinc-800">
            Company Chronicle
          </span>
          <h2 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
            Our Latest News and Stories
          </h2>
          <p className="mt-6 text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Stay updated with chronological Luxerra fleet arrivals, logistical highlights, and luxury lifestyle events in Southern California.
          </p>
        </div>

        {/* Bottom — 3-Column News Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {NEWS.map((story) => (
            <div
              key={story.id}
              className="group bg-zinc-900/10 hover:bg-zinc-900/25 rounded-2xl border border-zinc-900 hover:border-zinc-800 overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Unique Photo per card */}
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src={NEWS_IMAGES[story.id] ?? '/src/assets/images/dodge.jpg'}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Meta row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-semibold uppercase tracking-wider text-white">
                    {story.category}
                  </span>
                  <span className="text-sm text-zinc-500 font-mono">{story.date}</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                  {story.title}
                </h3>

                <p className="text-base text-zinc-400 leading-relaxed font-sans flex-1">
                  {story.description}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-widest border-b border-zinc-700 pb-0.5 hover:border-white transition-colors w-fit"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}