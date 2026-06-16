import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  sender: 'user' | 'carter';
  text: string;
  time: string;
}

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'carter',
      text: "Hello! I am Michael Carter, your Personal Rental Assistant at Luxerra. Are you looking to secure a particular supercar for your stay in Los Angeles? Feel free to ask about our 90-minute delivery, age requirements, or custom rental packages.",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const rawText = textToSend || inputText;
    if (!rawText.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text: rawText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Trigger typing simulation
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "That’s an excellent choice. Our fleet operates at absolute track standards and is highly sought after. I can expedite your rental contract immediately. Would you like me to reserve a vehicle or provide specific documentation guidelines?";
      const msgLower = rawText.toLowerCase();

      if (msgLower.includes('age') || msgLower.includes('21') || msgLower.includes('requirement') || msgLower.includes('qualify')) {
        replyText = "To rent any Luxerra supercar, the driver must be at least 21 years old, provide a valid Passport and Driver License, have at least 1 year of driving experience, and secure a refundable deposit starting from $1,000.";
      } else if (msgLower.includes('delivery') || msgLower.includes('90') || msgLower.includes('fast') || msgLower.includes('lax') || msgLower.includes('airport')) {
        replyText = "Our premium Express Logistics guarantees direct vehicle hand-off at your hotel, residence, or private jet terminal corridor within 90 minutes of final approval, completely bypassing standard rental offices.";
      } else if (msgLower.includes('price') || msgLower.includes('cost') || msgLower.includes('rate') || msgLower.includes('how much')) {
        replyText = "Our daily rates start from $800/day for state-of-the-art supercars like the Mercedes-AMG GT and Aston Martin Vantage, and $1,100/day for the elite Porsche 911 GT3 RS and Audi R8 V10. Pricing is fully transparent with zero hidden fees.";
      } else if (msgLower.includes('insurance') || msgLower.includes('covered') || msgLower.includes('accident')) {
        replyText = "Rest assured, comprehensive premium collision insurance is active and fully included in your baseline rental package agreement. We also offer an optional Zero-Liability Collision Shield for total coverage.";
      } else if (msgLower.includes('fuel') || msgLower.includes('gas')) {
        replyText = "We maintain a simple full-to-full fuel configuration. Your supercar is delivered detailed with a 100% full tank of 91+ premium octane. You can return it fully refueled, or we can fuel it on your behalf at company standard rates.";
      } else if (msgLower.includes('porsche') || msgLower.includes('911') || msgLower.includes('gt3')) {
        replyText = "The Porsche 911 GT3 RS is the crown jewel of our fleet—offering a N/A Flat-6 engine delivering 520 hp and a blistering 0-100 km/h of only 3.2 seconds. It rents from $1,100/day and is currently detailed and ready for immediate delivery.";
      } else if (msgLower.includes('audi') || msgLower.includes('r8')) {
        replyText = "Our Audi R8 Coupe V10 offers full Quattro AWD confidence alongside 562 horsepower. It sounds phenomenal and accelerates to 100 km/h in 3.4 seconds. Daily rate is $1,100 with immediate VIP delivery.";
      } else if (msgLower.includes('book') || msgLower.includes('reserve') || msgLower.includes('rent')) {
        replyText = "Excellent. You can click any 'Choose Your Car' or 'Book Now' button across the page to activate our Interactive Quote Calculator and complete your digital application immediately!";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, {
        sender: 'carter',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  const suggestions = [
    "What are the age requirements?",
    "How fast is delivery?",
    "What is the insurance policy?",
    "Tell me about the Porsche 911 GT3 RS"
  ];

  return (
    <>
      {/* Floating activator bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black shadow-xl hover:bg-emerald-400 focus:outline-none transition-all cursor-pointer border border-emerald-400/40 text-xs uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? 'Close' : 'Chat'}
          {!isOpen && (
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white animate-bounce">
              1
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-white shadow-2xl flex flex-col h-[500px]"
          >
            {/* Chat header */}
            <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/src/assets/images/michael_carter_1781459236670.jpg"
                    alt="Michael Carter"
                    className="h-9 w-9 rounded-full object-cover border border-emerald-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-zinc-900" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Michael Carter
                  </h4>
                  <p className="text-[10px] text-zinc-400">Personal Concierge Advisor</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white px-3 py-1 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Close
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-zinc-800 text-white rounded-tr-none'
                        : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block mt-1 text-[9px] text-zinc-500 text-right">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-3.5 py-3 text-xs bg-zinc-900 text-zinc-400 border border-zinc-800 rounded-tl-none flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:0.4s]" />
                    <span className="ml-1 text-[10px] text-zinc-500">Carter is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested quick tags */}
            {messages.length < 3 && (
              <div className="px-3 py-2 bg-zinc-900/40 border-t border-zinc-900 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
                {suggestions.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(sug)}
                    className="inline-block bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full px-3 py-1 text-[10px] hover:bg-zinc-800 hover:border-zinc-700 hover:text-white transition-all whitespace-normal text-left"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input field */}
            <div className="p-3 border-t border-zinc-900 bg-zinc-950 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Michael Carter..."
                className="flex-1 bg-zinc-900 border border-zinc-850 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleSend()}
                className="px-4 py-2 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-colors text-xs uppercase tracking-wider"
              >
                Send
              </button>
            </div>

            {/* Contact hotlinks */}
            <div className="px-4 py-1.5 bg-zinc-900 text-center text-[10px] border-t border-zinc-850 text-zinc-400">
              Need immediate phone help? <a href="tel:+13235557842" className="text-white hover:underline font-medium">+1 (323) 555-7842</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
