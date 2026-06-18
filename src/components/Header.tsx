import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Sun, Moon, Sprout } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({
  language,
  setLanguage,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = siteTranslations[language];

  // Detect scroll to handle transparency/sticky behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.navHome },
    { href: "#about", label: t.navAbout },
    { href: "#services", label: t.navServices },
    { href: "#why-us", label: t.navWhyUs },
    { href: "#stats", label: t.navStats },
    { href: "#process", label: t.navProcess },
    { href: "#gallery", label: t.navGallery },
    { href: "#testimonials", label: t.navTestimonials },
    { href: "#faqs", label: t.navFAQs },
    { href: "#contact", label: t.navContact },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80; // height of Header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? 'glass-nav-dark shadow-md shadow-black/30'
              : 'glass-nav-light shadow-md shadow-emerald-950/5'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo area */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-2 group focus:outline-none"
              id="header_logo"
            >
              <div className="w-10 h-10 bg-[#1B5E20] rounded-lg border border-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sprout className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none text-emerald-600 dark:text-white uppercase">
                  SASO <span className="text-[#D4AF37]">PRIME</span>
                </span>
                <span className="text-[8px] tracking-[0.2em] uppercase text-white/50 mt-1">
                  Saudi Arabia Enterprises
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 relative group overflow-hidden ${
                    isScrolled
                      ? darkMode
                        ? 'text-gray-300 hover:text-[#D4AF37]'
                        : 'text-gray-700 hover:text-emerald-800'
                      : 'text-white hover:text-[#D4AF37]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </nav>

            {/* Actions (Language Toggle, Mode Toggle, WhatsApp Call Quick Link) */}
            <div className="hidden xl:flex items-center space-x-3">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 pointer-events-auto border ${
                  isScrolled
                    ? darkMode
                      ? 'border-[#D4AF37]/30 text-gray-200 hover:bg-[#D4AF37]/10'
                      : 'border-emerald-800/20 text-emerald-800 hover:bg-emerald-800/5'
                    : 'border-white/35 text-white hover:bg-white/10'
                }`}
                title="Change Language"
                id="btn-lang-toggle"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-transform hover:scale-110 border ${
                  isScrolled
                    ? darkMode
                      ? 'border-emerald-800/20 text-orange-400 hover:bg-orange-400/10'
                      : 'border-emerald-800/15 text-emerald-800 hover:bg-emerald-800/5'
                    : 'border-white/20 text-orange-300 hover:bg-white/10'
                }`}
                title="Toggle View Mode"
                id="btn-theme-toggle"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Fast Contact */}
              <a
                href="https://wa.me/966530803415"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#D4AF37] text-[#081c15] text-xs font-bold rounded-full hover:bg-[#c4a030] transition-all duration-300 shadow-lg shadow-[#D4AF37]/10"
                id="header_quick_contact_wa"
              >
                GET QUOTE
              </a>
            </div>

            {/* Hamburger (Mobile) */}
            <div className="xl:hidden flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 rounded-full border ${
                  isScrolled
                    ? darkMode
                      ? 'border-emerald-800/20 text-orange-400'
                      : 'border-emerald-800/10 text-emerald-800'
                    : 'border-white/15 text-orange-300'
                }`}
                id="mobile-theme-toggle"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={toggleLanguage}
                className={`text-xs px-2.5 py-1 rounded border uppercase ${
                  isScrolled
                    ? darkMode
                      ? 'border-[#D4AF37]/30 text-gray-200'
                      : 'border-emerald-800/20 text-emerald-800'
                    : 'border-white/20 text-white'
                }`}
                id="mobile-lang-toggle"
              >
                {language === 'en' ? 'বাংলা' : 'EN'}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md ${
                  isScrolled
                    ? darkMode
                      ? 'text-white'
                      : 'text-emerald-950'
                    : 'text-white'
                }`}
                aria-label="Toggle Menu"
                id="btn-mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed top-20 left-0 w-full z-30 xl:hidden overflow-hidden border-b ${
              darkMode
                ? 'bg-[#081c15] border-[#D4AF37]/20 text-white'
                : 'bg-white border-emerald-950/10 text-emerald-950'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium tracking-wide border-l-2 transition-all duration-150 ${
                    darkMode
                      ? 'border-transparent text-gray-300 hover:text-[#D4AF37] hover:bg-emerald-950/40 hover:border-[#D4AF37]'
                      : 'border-transparent text-gray-700 hover:text-emerald-800 hover:bg-emerald-50 hover:border-emerald-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700/20 flex flex-col space-y-2">
                <a
                  href="https://wa.me/966530803415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-850 hover:bg-emerald-800 text-white text-sm font-semibold uppercase tracking-wider py-2.5 px-4 rounded-xl border border-[#D4AF37]/30 shadow-sm"
                  id="mobile_quick_contact_wa"
                >
                  WhatsApp Assistance: 0530803415
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
