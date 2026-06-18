import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Layers, Users, Building, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, STATS_LIST } from '../data/websiteContent';

interface StatsProps {
  language: Language;
  darkMode: boolean;
}

const StatIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Layers': return <Layers className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Building': return <Building className={className} />;
    case 'CheckCircle': return <CheckCircle className={className} />;
    default: return <Layers className={className} />;
  }
};

export default function Stats({ language, darkMode }: StatsProps) {
  const t = siteTranslations[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Separate states for numbers to animate them nicely
  const [services, setServices] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [partners, setPartners] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Services Counter (Target: 10)
      let currentServices = 0;
      const servicesTimer = setInterval(() => {
        currentServices += 1;
        if (currentServices >= 10) {
          setServices(10);
          clearInterval(servicesTimer);
        } else {
          setServices(currentServices);
        }
      }, 80);

      // Customers Counter (Target: 500)
      let currentCustomers = 0;
      const customersTimer = setInterval(() => {
        currentCustomers += 20;
        if (currentCustomers >= 500) {
          setCustomers(500);
          clearInterval(customersTimer);
        } else {
          setCustomers(currentCustomers);
        }
      }, 40);

      // Partners Counter (Target: 50)
      let currentPartners = 0;
      const partnersTimer = setInterval(() => {
        currentPartners += 2;
        if (currentPartners >= 50) {
          setPartners(50);
          clearInterval(partnersTimer);
        } else {
          setPartners(currentPartners);
        }
      }, 50);

      // Satisfaction Counter (Target: 100)
      let currentSatisfaction = 0;
      const satTimer = setInterval(() => {
        currentSatisfaction += 4;
        if (currentSatisfaction >= 100) {
          setSatisfaction(100);
          clearInterval(satTimer);
        } else {
          setSatisfaction(currentSatisfaction);
        }
      }, 40);

      return () => {
        clearInterval(servicesTimer);
        clearInterval(customersTimer);
        clearInterval(partnersTimer);
        clearInterval(satTimer);
      };
    }
  }, [isInView]);

  const getAnimatedValue = (labelKey: string) => {
    if (labelKey === 'statServices') return `${services}+`;
    if (labelKey === 'statCustomers') return `${customers}+`;
    if (labelKey === 'statPartners') return `${partners}+`;
    if (labelKey === 'statSatisfaction') return `${satisfaction}%`;
    return '0';
  };

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative py-20 bg-gradient-to-r from-[#081c15] to-[#123825] text-white overflow-hidden"
    >
      {/* Absolute decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-emerald-500 to-[#D4AF37]"></div>
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS_LIST.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-emerald-950/45 border border-[#D4AF37]/10"
            >
              {/* Stat Icon */}
              <div className="p-3 bg-emerald-900/50 rounded-xl text-[#D4AF37] border border-[#D4AF37]/15 mb-4">
                <StatIcon name={stat.iconName} className="w-6 h-6" />
              </div>

              {/* Animated value text */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono tracking-tight text-[#D4AF37]">
                {getAnimatedValue(stat.labelKey)}
              </div>

              {/* Stat tag */}
              <div className="mt-2 text-xs uppercase tracking-widest font-mono text-emerald-300 font-bold">
                {t[stat.labelKey as keyof typeof t] || stat.labelKey}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
