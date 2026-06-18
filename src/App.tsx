import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Team from './components/Team';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

import { Language } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(true); // Default to dark green & gold luxury mode (highly premium!)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor page scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Show back to top button after 400px scroll
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen font-sans antialiased selection:bg-[#D4AF37] selection:text-[#081c15] ${
              darkMode ? 'bg-immersive text-white dark' : 'bg-white text-emerald-950'
            }`}
          >
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[3.5px] z-50 bg-[#081c15]/20">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-[#D4AF37] to-yellow-500 rounded-r-full transition-all duration-75"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>

            {/* Header / Sticky Navigation */}
            <Header
              language={language}
              setLanguage={setLanguage}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />

            {/* Main Sections */}
            <main id="main-content">
              {/* Hero Section */}
              <Hero language={language} />

              {/* About Company */}
              <About language={language} darkMode={darkMode} />

              {/* Services Section */}
              <Services language={language} darkMode={darkMode} />

              {/* Why Choose Us */}
              <WhyChooseUs language={language} darkMode={darkMode} />

              {/* Statistics Section */}
              <Stats language={language} darkMode={darkMode} />

              {/* Team Section */}
              <Team language={language} darkMode={darkMode} />

              {/* Business Process (Methodology Timeline) */}
              <Process language={language} darkMode={darkMode} />

              {/* Gallery Section */}
              <Gallery language={language} darkMode={darkMode} />

              {/* Testimonials */}
              <Testimonials language={language} darkMode={darkMode} />

              {/* FAQ Section */}
              <FAQ language={language} darkMode={darkMode} />

              {/* Contact Section */}
              <Contact language={language} darkMode={darkMode} />
            </main>

            {/* Sticky/Floating Widgets */}
            <WhatsappButton />

            {/* Float Back To Top */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  key="scroll-top"
                  initial={{ opacity: 0, y: 15, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.8 }}
                  onClick={handleScrollToTop}
                  className="fixed bottom-[92px] right-6 z-40 p-3.5 rounded-full bg-emerald-950/90 border border-[#D4AF37]/45 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081c15] shadow-2xl transition-all cursor-pointer hover:scale-110 active:scale-95"
                  title="Scroll to Top"
                  id="float-back-to-top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Footer */}
            <Footer language={language} />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
