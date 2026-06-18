import { motion } from 'motion/react';
import { HelpCircle, FileText, Settings, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, BUSINESS_STEPS } from '../data/websiteContent';

interface ProcessProps {
  language: Language;
  darkMode: boolean;
}

const StepIcon = ({ num, className }: { num: number; className?: string }) => {
  switch (num) {
    case 1: return <HelpCircle className={className} />;
    case 2: return <FileText className={className} />;
    case 3: return <Settings className={className} />;
    case 4: return <Sparkles className={className} />;
    default: return <HelpCircle className={className} />;
  }
};

export default function Process({ language, darkMode }: ProcessProps) {
  const t = siteTranslations[language];

  return (
    <section id="process" className={`py-24 transition-colors duration-300 overflow-hidden ${darkMode ? 'bg-[#081c15] text-white' : 'bg-gray-50 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.processTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.processTitle}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Central spine line (Desktop-only) */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-dashed bg-emerald-900/30 dark:bg-[#D4AF37]/15 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {BUSINESS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const titleTrans = t[step.titleKey as keyof typeof t] || step.titleKey;
              const descTrans = t[step.descriptionKey as keyof typeof t] || step.descriptionKey;

              return (
                <div key={idx} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  
                  {/* Central Timeline Point Circle */}
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-[#081c15] border-2 border-[#D4AF37] gold-glow">
                    <span className="text-xs font-bold font-mono text-[#D4AF37]">{step.stepNumber}</span>
                  </div>

                  {/* Left Column (Visual Card on isEven, empty or visual otherwise) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right order-1' : 'lg:col-start-2 order-2 lg:pl-16'}`}
                  >
                    <div className={`p-8 rounded-2xl border max-w-lg w-full ${
                      darkMode
                        ? 'bg-[#112b1f]/65 border-emerald-900/30 hover:border-[#D4AF37]/30'
                        : 'bg-white border-emerald-900/10 hover:border-emerald-700 shadow-sm hover:shadow-md'
                    } transition-colors group`}>
                      
                      {/* Step Number Tag and Icon for responsive support */}
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="p-2.5 rounded-xl bg-emerald-950/70 text-[#D4AF37] border border-[#D4AF37]/25">
                          <StepIcon num={step.stepNumber} className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider">
                          Step 0{step.stepNumber}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold uppercase tracking-wide group-hover:text-[#D4AF37] transition-colors">
                        {titleTrans}
                      </h3>
                      <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {descTrans}
                      </p>
                    </div>
                  </motion.div>

                  {/* Decorative timeline graphic box in corresponding columns */}
                  <div className={`hidden lg:block ${isEven ? 'lg:col-start-2 lg:pl-16 order-2' : 'order-1 lg:text-right lg:pr-16'}`}>
                    <span className="text-8xl font-black font-mono text-[#D4AF37]/5 dark:text-emerald-950/50 block select-none uppercase">
                      Process {step.stepNumber}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
