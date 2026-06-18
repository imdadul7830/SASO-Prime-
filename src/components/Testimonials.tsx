import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, TESTIMONIALS_LIST } from '../data/websiteContent';

interface TestimonialsProps {
  language: Language;
  darkMode: boolean;
}

export default function Testimonials({ language, darkMode }: TestimonialsProps) {
  const t = siteTranslations[language];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_LIST.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_LIST.length - 1 : prev - 1));
  }, []);

  // Set up auto sliding
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // changes slides every 6 seconds

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-300 relative overflow-hidden ${darkMode ? 'bg-[#081c15] text-white' : 'bg-gray-50 text-emerald-950'}`}>
      
      {/* Absolute decorative glow balls */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.testimonialsTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.testimonialsTitle}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Sliding Card Frame */}
        <div className="relative min-h-[360px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            {TESTIMONIALS_LIST.map((item, idx) => {
              if (idx !== activeIndex) return null;

              const clientRoleTranslated = t[item.roleKey as keyof typeof t] || item.roleKey;
              const reviewTextTranslated = t[item.reviewKey as keyof typeof t] || item.reviewKey;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full max-w-3xl p-8 sm:p-12 rounded-3xl border ${
                    darkMode
                      ? 'bg-[#112b1f]/60 border-[#D4AF37]/20 shadow-xl'
                      : 'bg-white border-emerald-900/10 shadow-lg'
                  }`}
                >
                  {/* Big Quotes icon overlay */}
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-emerald-950/40 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] relative">
                      <Quote className="w-8 h-8 rotate-180" />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Feedback Message */}
                  <blockquote className={`text-base sm:text-lg md:text-xl italic font-serif leading-relaxed ${
                    darkMode ? 'text-gray-200' : 'text-gray-850'
                  }`}>
                    "{reviewTextTranslated}"
                  </blockquote>

                  {/* Client Bio Container */}
                  <div className="mt-8 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md bg-emerald-950">
                      <img
                        src={item.avatarUrl}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="mt-3 font-extrabold text-[#D4AF37] tracking-wide uppercase text-sm">
                      {item.name}
                    </h4>
                    
                    <p className={`text-xs mt-0.5 tracking-wider uppercase font-mono ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {clientRoleTranslated} • <span className="text-emerald-500">{item.companyKey}</span>
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Left/Right controls (Desktop navigation arrows) */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex p-3.5 rounded-full bg-emerald-950 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/25 transition-all cursor-pointer shadow-lg"
            title="Previous feedback"
            id="testimonial-prev-arrow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex p-3.5 rounded-full bg-emerald-950 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/25 transition-all cursor-pointer shadow-lg"
            title="Next feedback"
            id="testimonial-next-arrow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Manual Index Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3.5 h-3.5 rounded-full border transition-all pointer-events-auto cursor-pointer ${
                idx === activeIndex
                  ? 'bg-[#D4AF37] border-[#D4AF37] w-8'
                  : 'bg-transparent border-gray-400 hover:border-[#D4AF37]'
              }`}
              id={`testimonial-bullet-${idx}`}
              title={`Slide to ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
