import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessagesSquare } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, FAQ_LIST } from '../data/websiteContent';

interface FAQProps {
  language: Language;
  darkMode: boolean;
}

export default function FAQ({ language, darkMode }: FAQProps) {
  const t = siteTranslations[language];
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#05140e] text-white' : 'bg-emerald-50/20 text-emerald-950'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.faqTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.faqTitle}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ Accordion container */}
        <div className="space-y-4">
          {FAQ_LIST.map((item) => {
            const isExpanded = expandedId === item.id;
            const questionTranslated = t[item.questionKey as keyof typeof t] || item.questionKey;
            const answerTranslated = t[item.answerKey as keyof typeof t] || item.answerKey;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  darkMode
                    ? 'bg-[#112b1f]/50 border-[#D4AF37]/10 hover:border-[#D4AF37]/35'
                    : 'bg-white border-emerald-950/10 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left pointer-events-auto cursor-pointer group focus:outline-none"
                  aria-expanded={isExpanded}
                  id={`btn-faq-${item.id}`}
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <span className="p-2 rounded-xl bg-[#D4AF37]/10 dark:bg-emerald-900/50 text-[#D4AF37] border border-[#D4AF37]/15">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <h3 className={`font-bold text-sm sm:text-base transition-colors group-hover:text-[#D4AF37] uppercase tracking-wide`}>
                      {questionTranslated}
                    </h3>
                  </div>

                  {/* Indicator Arrow */}
                  <span className={`p-1.5 rounded-full bg-emerald-950/30 text-gray-400 group-hover:text-[#D4AF37] border border-transparent group-hover:border-[#D4AF37]/20 transition-all ${
                    isExpanded ? 'rotate-180 text-white border-[#D4AF37]/25' : ''
                  }`}>
                    <ChevronDown className="w-4.5 h-4.5 transition-transform" />
                  </span>
                </button>

                {/* Smooth expandable body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-gray-150/10"
                    >
                      <div className={`p-6 text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-gray-300/90 bg-[#0e241a]/40' : 'text-gray-650 bg-gray-50/50'
                      }`}>
                        {answerTranslated}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Dynamic customer assistance banner */}
        <div className={`mt-16 p-6 rounded-2xl border text-center flex flex-col sm:flex-row sm:text-left sm:justify-between sm:items-center gap-4 ${
          darkMode ? 'bg-[#112b1f]/30 border-emerald-900/30' : 'bg-[#1B5E20]/5 border-emerald-950/5'
        }`}>
          <div className="flex items-center justify-center sm:justify-start space-x-3.5">
            <span className="p-3 bg-emerald-950/55 text-[#D4AF37] rounded-xl border border-[#D4AF37]/15 hidden sm:block">
              <MessagesSquare className="w-5 h-5" />
            </span>
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-wide">Still have queries or need customized help?</h4>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Contact Founder & CEO Saiful Islam's support desk immediately.</p>
            </div>
          </div>
          <a
            href="https://wa.me/966530803415"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-850 hover:bg-[#1B5E20] text-white border border-[#D4AF37]/40 text-xs font-bold uppercase tracking-wider block text-center shadow-md transition-all duration-300 hover:scale-[1.03]"
          >
            Direct Chat
          </a>
        </div>

      </div>
    </section>
  );
}
