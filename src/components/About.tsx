import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Lightbulb } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface AboutProps {
  language: Language;
  darkMode: boolean;
}

export default function About({ language, darkMode }: AboutProps) {
  const t = siteTranslations[language];

  const values = [
    { icon: ShieldCheck, title: t.value1Title, text: t.value1Text },
    { icon: Award, title: t.value2Title, text: t.value2Text },
    { icon: HeartHandshake, title: t.value3Title, text: t.value3Text },
    { icon: Lightbulb, title: t.value4Title, text: t.value4Text },
  ];

  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#081c15] text-white' : 'bg-gray-50 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.aboutTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.aboutTitle}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Corporate Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#D4AF37] tracking-wide uppercase">
              {t.aboutStoryTitle}
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.aboutStoryText}
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-emerald-400/80' : 'text-emerald-850/80'} font-mono`}>
              • Headquartered in Al Khobar, KSA <br />
              • Spanning over 10 industrial vertical sectors <br />
              • Rigorous commitment to standard regulations and social contributions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className={`p-8 rounded-3xl border ${darkMode ? 'bg-[#112b1f]/50 border-[#D4AF37]/25' : 'bg-white border-emerald-900/10'} shadow-xl`}>
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37] rounded-tl-2xl"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37] rounded-br-2xl"></div>
              
              <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-4">Commercial Scope</h4>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  <span>AGRICULTURE SOLUTIONS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  <span>TECHNICAL INFRASTRUCTURE & PLUMBING</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  <span>SUPERMARKETS & COLD CHAIN SUPPLIES</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  <span>INTERNATIONAL TRAVEL & HAJJ/UMRAH BOOKINGS</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* CEO Desk Section */}
        <div id="ceo-section" className={`p-8 sm:p-12 rounded-3xl border mb-24 ${darkMode ? 'bg-[#112b1f]/20 border-[#D4AF37]/20' : 'bg-emerald-950/5 border-emerald-900/10'} grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              {/* Gold border layout */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-emerald-700 rounded-full blur opacity-15 group-hover:opacity-45 transition duration-500"></div>
              
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" // Premium corporate gentleman representation
                  alt="CEO Saiful Islam"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* CEO Badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-emerald-950 text-[10px] font-extrabold tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap shadow-md uppercase">
                {t.ceoName}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#D4AF37] to-yellow-500">
              {t.ceoMessageTitle}
            </h3>
            <p className="text-xs font-mono text-emerald-500 dark:text-[#D4AF37] tracking-widest uppercase">
              {t.ceoName} — {t.roleCEO}
            </p>
            <div className="w-12 h-0.5 bg-emerald-800"></div>
            <p className={`text-sm sm:text-base italic leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{t.ceoMessageText}"
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-3xl border flex flex-col items-start gap-4 transition-transform hover:scale-[1.01] ${darkMode ? 'bg-[#112b1f]/40 border-emerald-900/30' : 'bg-white border-emerald-900/10'}`}
          >
            <div className="p-3.5 bg-emerald-950 rounded-2xl border border-[#D4AF37]/30 text-[#D4AF37]">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold tracking-wide uppercase text-emerald-600 dark:text-white">
              {t.visionTitle}
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.visionText}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-8 rounded-3xl border flex flex-col items-start gap-4 transition-transform hover:scale-[1.01] ${darkMode ? 'bg-[#112b1f]/40 border-emerald-900/30' : 'bg-white border-emerald-900/10'}`}
          >
            <div className="p-3.5 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/35 text-[#D4AF37]">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-extrabold tracking-wide uppercase text-emerald-600 dark:text-white">
              {t.missionTitle}
            </h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.missionText}
            </p>
          </motion.div>
        </div>

        {/* Core Values grid */}
        <div className="border-t border-emerald-900/15 pt-16">
          <h3 className="text-center text-xl font-extrabold tracking-widest uppercase mb-12 text-[#D4AF37]">
            {t.coreValuesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#112b1f]/35 border-[#D4AF37]/10' : 'bg-emerald-950/5 border-emerald-900/10'}`}
                >
                  <div className="text-[#D4AF37] mb-3">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm tracking-wide uppercase mb-2">
                    {v.title}
                  </h4>
                  <p className={`text-xs leading-normal ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
