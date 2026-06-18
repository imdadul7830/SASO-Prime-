import { motion } from 'motion/react';
import { Award, ShieldAlert, Heart, Trophy, Users, Headphones } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface WhyChooseUsProps {
  language: Language;
  darkMode: boolean;
}

export default function WhyChooseUs({ language, darkMode }: WhyChooseUsProps) {
  const t = siteTranslations[language];

  const features = [
    { icon: Trophy, title: t.feature1Title, text: t.feature1Text },
    { icon: Award, title: t.feature2Title, text: t.feature2Text },
    { icon: ShieldAlert, title: t.feature3Title, text: t.feature3Text },
    { icon: Users, title: t.feature4Title, text: t.feature4Text },
    { icon: Heart, title: t.feature5Title, text: t.feature5Text },
    { icon: Headphones, title: t.feature6Title, text: t.feature6Text },
  ];

  return (
    <section id="why-us" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#081c15] text-white' : 'bg-gray-50 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.whyUsTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.whyUsTitle}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  darkMode
                    ? 'bg-[#112b1f]/40 border-[#D4AF37]/10 hover:border-[#D4AF37]/30'
                    : 'bg-white border-emerald-900/10 hover:border-emerald-700 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Visual Accent Layer */}
                <span className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-gradient-to-b from-[#D4AF37] to-emerald-600 transition-all duration-300"></span>

                {/* Icon Unit */}
                <div className="mb-4 text-[#D4AF37]">
                  <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Text Block */}
                <h3 className="text-lg font-bold tracking-wide uppercase mb-2">
                  {feat.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-300/85' : 'text-gray-600'}`}>
                  {feat.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
