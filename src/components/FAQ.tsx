import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-zinc-950 py-24 border-t border-zinc-900 scroll-mt-14">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Heading */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white border border-zinc-800">
              FAQ
            </span>
            <h2 className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg text-zinc-400 font-sans leading-relaxed">
              Get quick clarifications on vehicle bounds, logistics, fuel states, decoration terms, and extension rules.
            </p>
          </div>

          {/* Right Column - Accordion List */}
          <div className="divide-y divide-zinc-800/80">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="py-6 first:pt-0 last:pb-0">
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  >
                    <span className="font-display font-semibold text-lg sm:text-xl text-zinc-300 group-hover:text-white transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className="text-3xl font-light text-zinc-500 group-hover:text-white transition-colors shrink-0 leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="pt-6 text-lg text-zinc-400 leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}