import { motion } from 'motion/react';
import { Sprout, Wrench, ShoppingBag, Store, ShoppingCart, Beef, Fish, Leaf, Truck, Plane, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, SERVICES_LIST } from '../data/websiteContent';

interface ServicesProps {
  language: Language;
  darkMode: boolean;
}

const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Sprout': return <Sprout className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Store': return <Store className={className} />;
    case 'ShoppingCart': return <ShoppingCart className={className} />;
    case 'Beef': return <Beef className={className} />;
    case 'Fish': return <Fish className={className} />;
    case 'Leaf': return <Leaf className={className} />;
    case 'Truck': return <Truck className={className} />;
    case 'Plane': return <Plane className={className} />;
    default: return <Sprout className={className} />;
  }
};

export default function Services({ language, darkMode }: ServicesProps) {
  const t = siteTranslations[language];

  // Manual scroll to contact form with predefined subject
  const selectService = (serviceTitle: string) => {
    const contactSubject = document.getElementById('contact-subject') as HTMLInputElement | HTMLSelectElement;
    if (contactSubject) {
      contactSubject.value = `Enquiry about ${serviceTitle}`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#05140e] text-white' : 'bg-emerald-50/50 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.servicesTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.servicesTitle}
          </h2>
          <p className={`mt-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
            {t.servicesSubtitle}
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => {
            const translatedTitle = t[service.titleKey as keyof typeof t] || service.titleKey;
            const translatedDesc = t[service.descriptionKey as keyof typeof t] || service.descriptionKey;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  darkMode
                    ? 'bg-[#112b1f]/75 border-[#D4AF37]/15 hover:border-[#D4AF37]/60 gold-glow-hover'
                    : 'bg-white border-emerald-900/10 hover:border-[#1B5E20] shadow-md hover:shadow-xl'
                }`}
              >
                <div>
                  {/* Icon Area */}
                  <div className={`p-4 rounded-2xl w-14 h-14 flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? 'bg-emerald-950 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-emerald-950'
                      : 'bg-emerald-50 text-[#1B5E20] group-hover:bg-[#1B5E20] group-hover:text-white'
                  }`}>
                    <ServiceIcon name={service.iconName} className="w-7 h-7" />
                  </div>

                  {/* Text Content */}
                  <h3 className={`text-lg font-bold mt-6 tracking-wide uppercase transition-colors ${
                    darkMode ? 'group-hover:text-[#D4AF37]' : 'group-hover:text-[#1B5E20]'
                  }`}>
                    {translatedTitle}
                  </h3>
                  
                  <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                    darkMode ? 'text-gray-300/85' : 'text-gray-650'
                  }`}>
                    {translatedDesc}
                  </p>
                </div>

                {/* Call To Action within card */}
                <div className="mt-8 pt-4 border-t border-gray-700/10 dark:border-gray-100/5">
                  <button
                    onClick={() => selectService(translatedTitle)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold font-mono tracking-widest uppercase transition-colors cursor-pointer text-[#D4AF37] hover:text-[#D4AF37]/80 dark:text-[#D4AF37]/90 dark:hover:text-white"
                  >
                    <span>Procure Quote</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
