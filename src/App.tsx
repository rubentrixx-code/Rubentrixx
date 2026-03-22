/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Gift, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Zap,
  BookOpen,
  Smartphone,
  Laptop
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0 }: { children: ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const CTAButton = ({ text, className = "" }: { text: string, className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-lg sm:text-xl py-4 px-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all ${className}`}
    onClick={() => {
      document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    {text}
  </motion.button>
);

// --- Sections ---

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <FadeIn>
        <div className="inline-block border border-gold-500/30 bg-gold-500/10 text-gold-400 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
          Updated for 2026
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
          How to Make Money Online in 2026 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 italic">
            (Even If You're Starting From $0)
          </span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Discover the exact beginner blueprint to build income online using simple digital products. No experience required.
        </p>
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <div className="flex flex-col items-center gap-6">
          <CTAButton text="👉 Get Instant Access Now" />
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>Secure Checkout • Instant Download</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="mt-16 relative mx-auto max-w-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" 
            alt="Digital Product Mockup" 
            className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-3xl sm:text-5xl font-display font-bold mb-12">
          Does this sound like you?
        </h2>
      </FadeIn>
      
      <div className="grid sm:grid-cols-3 gap-8 text-left">
        {[
          {
            icon: <TrendingUp className="w-8 h-8 text-red-400" />,
            title: "Tired of watching others",
            desc: "Seeing everyone else make money online while you're stuck at the same income level."
          },
          {
            icon: <Zap className="w-8 h-8 text-red-400" />,
            title: "Overwhelmed & Confused",
            desc: "Don't know where to start? Too much conflicting information from 'gurus'."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-red-400" />,
            title: "Scared of scams",
            desc: "Afraid of wasting money on courses that don't actually teach you anything actionable."
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-black p-8 rounded-2xl border border-white/10 h-full">
              <div className="mb-4 bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <FadeIn>
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop" 
            alt="Working on laptop" 
            className="rounded-2xl border border-gold-500/20 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>
      <div className="flex-1">
        <FadeIn>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-6">
            The <span className="text-gold-500">Simple Solution</span> You've Been Looking For.
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            This beginner-friendly eBook shows you step-by-step how to create and sell digital products using simple tools like Canva. No coding, no inventory, no complex setups.
          </p>
          <ul className="space-y-4">
            {[
              "Perfect for complete beginners",
              "Requires zero technical skills",
              "Start with $0 upfront cost",
              "Build passive income streams"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0" />
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  </section>
);

const WhatsInsideSection = () => (
  <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-4">What's Inside The Blueprint?</h2>
          <p className="text-xl text-gray-400">Everything you need, nothing you don't.</p>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          "Finding highly profitable, low-competition niches",
          "Creating stunning eBooks in Canva (step-by-step)",
          "Setting up automated sales systems for free",
          "Viral traffic strategies (TikTok, Instagram Reels)",
          "Writing copy that actually converts visitors to buyers",
          "Scaling your first product to $1K+/month"
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex items-start gap-4 bg-black p-6 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors">
              <div className="bg-gold-500/10 p-2 rounded-full mt-1">
                <CheckCircle2 className="w-5 h-5 text-gold-500" />
              </div>
              <p className="text-lg text-gray-200 leading-relaxed">{item}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const MockupsSection = () => (
  <section className="py-24 px-4 overflow-hidden">
    <div className="max-w-6xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-3xl sm:text-5xl font-display font-bold mb-16">Read Anywhere, Anytime.</h2>
      </FadeIn>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <FadeIn delay={0.1}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-6 w-72">
              <BookOpen className="w-16 h-16 text-gold-500" />
              <h3 className="text-2xl font-bold">PDF Format</h3>
              <p className="text-gray-400">Printable & High-Res</p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-6 w-72 md:-translate-y-8">
              <Smartphone className="w-16 h-16 text-gold-500" />
              <h3 className="text-2xl font-bold">Mobile Ready</h3>
              <p className="text-gray-400">Read on the go</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-zinc-900 border border-white/10 p-8 rounded-3xl flex flex-col items-center gap-6 w-72">
              <Laptop className="w-16 h-16 text-gold-500" />
              <h3 className="text-2xl font-bold">Desktop</h3>
              <p className="text-gray-400">Perfect for studying</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const SocialProofSection = () => (
  <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
    <div className="max-w-5xl mx-auto text-center">
      <FadeIn>
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-8 h-8 text-gold-500 fill-gold-500" />
          ))}
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold mb-16">Designed for Absolute Beginners</h2>
      </FadeIn>

      <div className="grid sm:grid-cols-3 gap-8">
        {[
          { title: "Beginner Friendly", desc: "No jargon, no complex theories. Just straight-to-the-point actionable steps." },
          { title: "No Experience Needed", desc: "You don't need a marketing degree or tech skills to make this work." },
          { title: "Simple System", desc: "Follow the step-by-step system and launch your first product in a weekend." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-black p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-gold-400">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const OfferStackSection = () => (
  <section id="offer" className="py-24 px-4 relative overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="max-w-3xl mx-auto relative z-10">
      <FadeIn>
        <div className="bg-zinc-900/80 backdrop-blur-xl border-2 border-gold-500/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-5xl font-display font-bold mb-4">Here's What You Get Today</h2>
            <p className="text-gold-400 font-medium tracking-wide uppercase text-sm">Limited Time Offer</p>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-gold-500" />
                <span className="text-xl font-medium">Main eBook Blueprint</span>
              </div>
              <span className="text-xl text-gray-400 line-through">$29.00</span>
            </div>
            
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <Gift className="w-8 h-8 text-gold-500" />
                <div>
                  <span className="text-xl font-medium block">Bonus: Canva Templates</span>
                  <span className="text-sm text-gold-400">Plug & Play</span>
                </div>
              </div>
              <span className="text-xl text-gray-400 line-through">$19.00</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <Gift className="w-8 h-8 text-gold-500" />
                <div>
                  <span className="text-xl font-medium block">Bonus: 50 Product Ideas</span>
                  <span className="text-sm text-gold-400">Profitable Niches</span>
                </div>
              </div>
              <span className="text-xl text-gray-400 line-through">$15.00</span>
            </div>
          </div>

          <div className="bg-black/50 rounded-2xl p-6 mb-8 border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg text-gray-400">Total Value:</span>
              <span className="text-xl text-gray-400 line-through">$63.00</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-2xl font-bold">Today Only:</span>
              <span className="text-5xl sm:text-6xl font-display font-bold text-gold-500">$9.99</span>
            </div>
          </div>

          <CTAButton text="👉 Get Everything For $9.99" className="w-full text-2xl py-5" />
          
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
            <Clock className="w-4 h-4 text-gold-500" />
            <span>Price increasing soon. Secure your copy now.</span>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need any prior experience?",
      a: "Absolutely not. This guide is written specifically for complete beginners. We walk you through every single step, from idea to your first sale."
    },
    {
      q: "Is this really beginner friendly?",
      a: "Yes! We avoid complex jargon and focus on simple, actionable steps using free tools like Canva."
    },
    {
      q: "How do I receive the eBook?",
      a: "You will get instant access to download the PDF immediately after your purchase is complete. You'll also receive an email with the download link."
    },
    {
      q: "Do I need to pay for software?",
      a: "No. The methods taught in this book utilize free tools (like the free version of Canva) to get you started with zero overhead."
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950 border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-5xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'bg-zinc-900 border-gold-500/30' : 'bg-black hover:bg-zinc-900/50'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg font-medium pr-8">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => (
  <section className="py-32 px-4 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold-500/10" />
    <div className="max-w-3xl mx-auto relative z-10">
      <FadeIn>
        <h2 className="text-4xl sm:text-6xl font-display font-bold mb-8">Your future starts today.</h2>
        <p className="text-xl text-gray-300 mb-12 font-light">
          Don't wait another year watching others succeed. Get the exact blueprint and start building your online income now.
        </p>
        <CTAButton text="👉 Start Making Money Today" className="text-xl py-5 px-10" />
      </FadeIn>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center border-t border-white/10 bg-black text-gray-500 text-sm">
    <p>© {new Date().getFullYear()} Rubentrix. All rights reserved.</p>
    <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-gold-400 transition-colors">Refund Policy</a>
    </div>
  </footer>
);

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden bg-zinc-950/90 backdrop-blur-lg border-t border-white/10"
        >
          <button
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-lg py-4 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Get Instant Access - $9.99
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500/30 selection:text-gold-200">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatsInsideSection />
      <MockupsSection />
      <SocialProofSection />
      <OfferStackSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
}
