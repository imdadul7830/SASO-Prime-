import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUp, Sprout } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = siteTranslations[language];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#081c15] border-t border-white/5 text-white py-16 relative overflow-hidden">
      {/* Visual Ambient Gold background ball */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main top grid of Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Brief Description Block */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-emerald-900 border border-[#D4AF37]/40 rounded-lg">
                <Sprout className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="text-lg font-extrabold tracking-widest font-sans uppercase">
                SASO <span className="text-[#D4AF37]">PRIME</span>
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              {t.footerSlogan}
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-emerald-950/70 text-gray-400 hover:text-[#D4AF37] border border-gray-100/5 hover:border-[#D4AF37]/25 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-emerald-950/70 text-gray-400 hover:text-[#D4AF37] border border-gray-100/5 hover:border-[#D4AF37]/25 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-emerald-950/70 text-gray-400 hover:text-[#D4AF37] border border-gray-100/5 hover:border-[#D4AF37]/25 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links navigation */}
          <div>
            <h4 className="font-bold font-mono tracking-widest text-xs text-[#D4AF37] uppercase border-l-2 border-[#D4AF37] pl-2 mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">• {t.navHome}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">• {t.navAbout}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.navServices}</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">• {t.navWhyUs}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">• {t.navGallery}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">• {t.navContact}</a></li>
            </ul>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="font-bold font-mono tracking-widest text-xs text-[#D4AF37] uppercase border-l-2 border-[#D4AF37] pl-2 mb-4">
              {t.servicesLinks}
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.serviceAgriTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.servicePlumbTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.serviceSuperTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.serviceMeatTitle}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">• {t.serviceTravelTitle}</a></li>
            </ul>
          </div>

          {/* Quick corporate contact details */}
          <div className="space-y-3 font-mono text-xs text-gray-400">
            <h4 className="font-bold tracking-widest text-[#D4AF37] uppercase border-l-2 border-[#D4AF37] pl-2 mb-4">
              Head Office Contact
            </h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>Al Khobar, Dammam, Kingdom of Saudi Arabia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
              <a href="tel:0530803415" className="hover:underline">0530803415</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
              <a href="mailto:sasoprime@gmail.com" className="hover:underline lowercase">sasoprime@gmail.com</a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line in Footer */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 font-mono gap-4">
          <div>
            &copy; {currentYear} SASO Prime. {t.allRightsReserved}
            <span className="block text-[10px] text-gray-600 mt-1 uppercase">CEO Representative: {siteTranslations[language].ceoName}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:underline hover:text-white">{t.privacyPolicy}</a>
            <span className="text-gray-700">|</span>
            <a href="#about" className="hover:underline hover:text-white">{t.termsConditions}</a>
            <span className="text-gray-700">|</span>
            
            {/* Scroll back to top speed arrow button */}
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-full bg-emerald-950 border border-emerald-800 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081c15] hover:scale-105 transition-all cursor-pointer inline-flex items-center"
              title="Return to top limit"
              id="btn-footer-back-to-top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
