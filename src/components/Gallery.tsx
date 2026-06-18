import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { siteTranslations, GALLERY_ITEMS } from '../data/websiteContent';

interface GalleryProps {
  language: Language;
  darkMode: boolean;
}

export default function Gallery({ language, darkMode }: GalleryProps) {
  const t = siteTranslations[language];
  const [activeFilter, setActiveFilter] = useState<'all' | 'agriculture' | 'market' | 'travel'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter products cleanly
  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const filters: { key: 'all' | 'agriculture' | 'market' | 'travel'; labelKey: string }[] = [
    { key: 'all', labelKey: 'filterAll' },
    { key: 'agriculture', labelKey: 'filterAgri' },
    { key: 'market', labelKey: 'filterMarket' },
    { key: 'travel', labelKey: 'filterTravel' },
  ];

  const handleOpenLightbox = (itemId: string) => {
    const originalIndex = GALLERY_ITEMS.findIndex(item => item.id === itemId);
    if (originalIndex !== -1) {
      setLightboxIndex(originalIndex);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#05140e] text-white' : 'bg-emerald-50/10 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.galleryTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.galleryTitle}
          </h2>
          <p className={`mt-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
            {t.gallerySubtitle}
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => {
            const filterLabel = t[f.labelKey as keyof typeof t] || f.labelKey;
            const isActive = activeFilter === f.key;

            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 pointer-events-auto cursor-pointer border ${
                  isActive
                    ? 'bg-[#1B5E20] text-white border-[#D4AF37] gold-glow'
                    : darkMode
                      ? 'bg-emerald-950/40 border-emerald-900/30 text-gray-400 hover:text-white hover:border-[#D4AF37]/45'
                      : 'bg-white border-emerald-900/10 text-gray-600 hover:text-emerald-900 hover:border-emerald-700 shadow-sm'
                }`}
                id={`btn-filter-${f.key}`}
              >
                {filterLabel}
              </button>
            );
          })}
        </div>

        {/* Masonry-style Grid Portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const itemTitle = t[item.titleKey as keyof typeof t] || item.titleKey;

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-950 border border-emerald-900/10 cursor-pointer shadow-md hover:shadow-xl"
                  onClick={() => handleOpenLightbox(item.id)}
                >
                  <img
                    src={item.imageUrl}
                    alt={itemTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Glass-effect Info Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#D4AF37] font-extrabold">
                      {item.category}
                    </span>
                    <h4 className="text-white font-extrabold tracking-wide text-base mt-1 uppercase">
                      {itemTitle}
                    </h4>
                    
                    <div className="mt-4 flex items-center space-x-1.5 text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider">
                      <Eye className="w-4 h-4" />
                      <span>Maximize Frame</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal Dialog with AnimatePresence */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md">
            
            {/* Close Button hit area */}
            <div className="absolute inset-0 z-0 cursor-default" onClick={() => setLightboxIndex(null)}></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative bg-emerald-950 border border-[#D4AF37]/35 rounded-2xl max-w-4xl w-full text-white overflow-hidden shadow-2xl z-10"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] bg-[#05140e] flex items-center justify-center">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                  alt="SASO Prime Showcase Gallery"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />

                {/* Left/Right click triggers */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevLightbox(); }}
                  className="absolute left-4 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-[#D4AF37]/30 transition-colors cursor-pointer"
                  title="Previous image"
                  id="lightbox-prev"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); handleNextLightbox(); }}
                  className="absolute right-4 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-[#D4AF37]/30 transition-colors cursor-pointer"
                  title="Next image"
                  id="lightbox-next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Informational footer of Lightbox card */}
              <div className="p-5 bg-[#081c15] border-t border-emerald-900/30 flex justify-between items-center">
                <div>
                  <span className="text-[10.5px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
                    {GALLERY_ITEMS[lightboxIndex].category} Division Showcase
                  </span>
                  <p className="font-extrabold tracking-wide uppercase text-sm mt-0.5">
                    {t[GALLERY_ITEMS[lightboxIndex].titleKey as keyof typeof t] || GALLERY_ITEMS[lightboxIndex].titleKey}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-gray-500 font-bold">
                    {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                  </span>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="p-2.5 rounded-full bg-[#112b1f] hover:bg-[#D4AF37]/30 border border-emerald-900/20 text-white transition-all cursor-pointer"
                    title="Close Frame"
                    id="btn-close-lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
