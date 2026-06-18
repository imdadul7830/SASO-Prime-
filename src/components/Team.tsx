import { motion } from 'motion/react';
import { Mail, Facebook, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations, TEAM_LIST } from '../data/websiteContent';

interface TeamProps {
  language: Language;
  darkMode: boolean;
}

export default function Team({ language, darkMode }: TeamProps) {
  const t = siteTranslations[language];

  return (
    <section id="team" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#05140e] text-white' : 'bg-emerald-50/20 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.teamTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.teamTitle}
          </h2>
          <p className={`mt-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
            {t.teamSubtitle}
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_LIST.map((member, idx) => {
            const roleTranslated = t[member.roleKey as keyof typeof t] || member.roleKey;
            const isCEO = member.roleKey === 'roleCEO';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  darkMode
                    ? isCEO
                      ? 'bg-[#112b1f] border-[#D4AF37]/50 gold-glow'
                      : 'bg-[#112b1f]/70 border-emerald-900/30'
                    : 'bg-white border-emerald-900/10 shadow-md hover:shadow-xl'
                } group`}
              >
                <div>
                  {/* Portrait Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-emerald-950">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Gold tint overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>

                    {/* Quick WhatsApp Action Floating Badge */}
                    {member.socials.whatsapp && (
                      <a
                        href={member.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 bg-emerald-500 hover:bg-emerald-600 border border-white text-white p-2.5 rounded-full shadow-lg transition-transform hover:scale-110"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                      </a>
                    )}
                  </div>

                  {/* Profile descriptors */}
                  <div className="p-6">
                    <h3 className="font-extrabold text-base tracking-wide uppercase">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#D4AF37] font-mono tracking-wide uppercase mt-1">
                      {roleTranslated}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className={`text-xs mt-3 flex items-center space-x-1.5 font-mono ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-emerald-800'}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>

                {/* Social media footer */}
                <div className={`px-6 py-4 border-t flex justify-center items-center gap-4 ${darkMode ? 'border-gray-100/5 bg-[#0e241b]' : 'border-gray-100 bg-gray-50'}`}>
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-sky-400 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
