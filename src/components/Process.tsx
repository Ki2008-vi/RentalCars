import { STEPS } from '../data';

export default function Process() {

  return (
    <section id="process" className="bg-zinc-950 py-24 border-t border-zinc-900 scroll-mt-141">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left - Car Image */}
          <div className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[600px]">
            <img 
              src="../src/assets/images/amg.jpg" 
              alt="Luxury Sports Car" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
          </div>

          {/* Right - Steps Content */}
          <div>
            <span className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white border border-zinc-800">
              Instant Acquisition
            </span>
            <h2 className="mt-6 font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
              Get Rolling in 4 Steps
            </h2>
            <p className="mt-6 text-lg text-zinc-400 font-sans leading-relaxed">
              Our luxury checkout process bypasses all conventional rental counter paperwork constraints, getting you behind the wheel instantly.
            </p>

            {/* Steps List */}
            <div className="mt-12 space-y-0">
              {STEPS.map((step, idx) => (
                <div 
                  key={step.id}
                  className="flex gap-6 items-start py-6 border-b border-zinc-800/60 last:border-b-0"
                >
                  <span className="text-4xl font-display font-black text-zinc-700 tracking-tight font-mono shrink-0 leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {step.title}
                    </h3>
                    <p className="text-base text-zinc-400 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}