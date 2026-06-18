import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ArrowDownCircle, X, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const [showVideo, setShowVideo] = useState(false);
  const t = siteTranslations[language];

  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05140e] text-white"
    >
      {/* Background Loop Fallback & Visual Effects */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-50"
          src="https://videos.pexels.com/video-files/4253457/4253457-hd_1920_1080_30fps.mp4" // Beautiful cinematic corporate farming or enterprise high-quality clip
        >
          {/* If video fails, visual CSS backgrounds are intact */}
        </video>
        
        {/* Deep Green & Gold Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081c15]/80 via-[#05140e]/90 to-[#081c15] z-0"></div>
        
        {/* Premium Gold Accent Lighting */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#D4AF37]/8 rounded-full blur-[120px] animated-bg-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-emerald-700/10 rounded-full blur-[100px] animated-bg-glow" style={{ animationDelay: '3s' }}></div>

        {/* Abstract Gold Grid Accent lines */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.015) 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Floating abstract decorative badge */}
      <div className="absolute top-32 left-8 hidden lg:block z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="glass-effect-dark px-4 py-2 rounded-xl text-xs tracking-widest text-[#D4AF37] uppercase font-mono border border-[#D4AF37]/20 flex items-center space-x-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>SAUDI ARABIA • EASTERN PROVINCE</span>
        </motion.div>
      </div>

      <div className="absolute top-44 right-12 hidden lg:block z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="glass-effect-dark p-4 rounded-xl text-center border border-emerald-800/20 w-44"
        >
          <p className="text-[#D4AF37] text-2xl font-bold tracking-tight">2026</p>
          <p className="text-[10px] tracking-widest text-emerald-400 font-mono uppercase mt-0.5">Corporate Standard</p>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 flex flex-col items-center">
        
        {/* Animated Corporate Gold Slogan Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/60 border border-[#D4AF37]/50 shadow-md"
        >
          <span className="text-xs font-bold font-mono tracking-widest text-[#D4AF37] uppercase flex items-center">
            ✦ {t.heroSlogan} ✦
          </span>
        </motion.div>

        {/* Big Premium Corporate Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans uppercase leading-tight"
        >
          SASO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-yellow-200 to-[#D4AF37]">PRIME</span>
        </motion.h1>

        {/* Dynamic subtitle text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-emerald-200/85 max-w-3xl leading-relaxed"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Action Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Explore services */}
          <button
            onClick={() => handleScrollToSection('#services')}
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 border border-[#D4AF37]/55 hover:border-[#D4AF37] text-white font-semibold tracking-wider text-xs uppercase px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2 pointer-events-auto cursor-pointer"
            id="hero-btn-explore"
          >
            <span>{t.btnExplore}</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </button>

          {/* Contact */}
          <button
            onClick={() => handleScrollToSection('#contact')}
            className="w-full sm:w-auto bg-[#0a2318]/90 hover:bg-emerald-950 text-white border border-gray-650 font-semibold tracking-wider text-xs uppercase px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:border-emerald-600 hover:-translate-y-1 flex items-center justify-center cursor-pointer"
            id="hero-btn-contact"
          >
            {t.btnContact}
          </button>

          {/* Video profile trigger */}
          <button
            onClick={() => setShowVideo(true)}
            className="w-full sm:w-auto px-6 py-4 flex items-center justify-center space-x-2 text-xs tracking-widest text-[#D4AF37] hover:text-white uppercase font-bold font-mono transition-transform duration-305 hover:scale-105 group"
            id="hero-btn-watch"
          >
            <span className="p-2.5 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/25 transition-all duration-200 border border-[#D4AF37]/20 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
            </span>
            <span>{t.btnWatchVideo}</span>
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('#about');
          }}
          className="flex flex-col items-center space-y-2 group"
          id="hero_btn_scroll"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono text-emerald-400 group-hover:text-white transition-colors">
            {t.scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDownCircle className="w-5 h-5 text-[#D4AF37] opacity-80 group-hover:opacity-100" />
          </motion.div>
        </a>
      </div>

      {/* Interactive Video Modal Dialog */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#112b1f] border border-[#D4AF37]/45 rounded-2xl w-full max-w-4xl p-1 overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37]/30 text-white transition-colors border border-white/20"
                id="modal-video-close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Placeholder high-quality corporate video frame
                  title="SASO Prime Profile Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-4 bg-emerald-950 flex justify-between items-center text-xs">
                <div>
                  <h4 className="font-bold tracking-wide uppercase text-[#D4AF37]">SASO Prime Corporate Showcase</h4>
                  <p className="text-gray-400 mt-1 font-mono">Al Khobar, Dammam • Kingdom of Saudi Arabia</p>
                </div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-white flex items-center space-x-1 font-mono hover:underline"
                >
                  <span>Open YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
