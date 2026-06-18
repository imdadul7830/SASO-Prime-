import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Interactive breathing pulse visual wave rings */}
      <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 animate-ping"></div>
      <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-15 animate-pulse" style={{ animationDuration: '2s' }}></div>

      <motion.a
        href="https://wa.me/966530803415"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 border border-white text-white rounded-full shadow-2xl transition-colors duration-200 cursor-pointer"
        title="Chat on WhatsApp: +966530803415"
        id="btn-whatsapp-floating"
      >
        <MessageSquare className="w-6 h-6 fill-white text-white" />
      </motion.a>
    </div>
  );
}
