import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout } from 'lucide-react';

interface LoadingScreenProps {
  key?: string;
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081c15] text-white"
    >
      <div className="relative flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Background Glow */}
        <div className="absolute w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -bottom-10 -right-10 animate-pulse delay-75"></div>

        {/* Logo Icon with Gold Border Pulse */}
        <div className="relative mb-6 p-4 rounded-full bg-emerald-950/80 border border-[#D4AF37]/30 shadow-inner">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/60"
          ></motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sprout className="w-12 h-12 text-[#D4AF37]" />
          </motion.div>
        </div>

        {/* Corporate Branding */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold tracking-widest text-white font-sans uppercase"
        >
          SASO <span className="text-[#D4AF37]">Prime</span>
        </motion.h1>

        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs tracking-wider uppercase text-emerald-400 mt-2 font-mono"
        >
          Professional Service, Premium Results
        </motion.p>

        {/* Status indicator and Progress bar */}
        <div className="w-64 mt-8">
          <div className="flex justify-between items-center text-xs text-gray-400 font-mono mb-2">
            <span>SECURE SYSTEM LOAD...</span>
            <span className="text-[#D4AF37] font-bold">{Math.min(progress, 100)}%</span>
          </div>
          
          <div className="h-[3px] w-full bg-emerald-950 rounded-full overflow-hidden border border-emerald-900/30">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 via-[#D4AF37] to-yellow-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            ></motion.div>
          </div>
        </div>

        {/* Professional Footer lines */}
        <div className="mt-16 text-[9px] text-gray-500 font-mono tracking-widest uppercase">
          AL KHOBAR, DAMMAM • EASTERN PROVINCE, KSA
        </div>
      </div>
    </motion.div>
  );
}
