import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { siteTranslations } from '../data/websiteContent';

interface ContactProps {
  language: Language;
  darkMode: boolean;
}

export default function Contact({ language, darkMode }: ContactProps) {
  const t = siteTranslations[language];

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!name.trim()) errors.name = language === 'bn' ? 'নাম প্রয়োজন' : 'Name is required';
    if (!email.trim()) {
      errors.email = language === 'bn' ? 'ইমেল প্রয়োজন' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = language === 'bn' ? 'ইমেল সঠিক নয়' : 'Invalid email address';
    }
    if (!phone.trim()) errors.phone = language === 'bn' ? 'ফোন নম্বর প্রয়োজন' : 'Phone is required';
    if (!subject.trim()) errors.subject = language === 'bn' ? 'বিষয় প্রয়োজন' : 'Subject is required';
    if (!message.trim()) errors.message = language === 'bn' ? 'বার্তা প্রয়োজন' : 'Message is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate premium transmission to EmailJS / CEO inbox
    setTimeout(() => {
      setStatus('success');
      // Reset form variables upon successful submission
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      
      // Auto return status back to idle after 10 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 10000);
    }, 1800);
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-[#081c15] text-white' : 'bg-gray-50 text-emerald-950'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-mono font-bold text-[#D4AF37]">
            {t.contactTag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 uppercase">
            {t.contactTitle}
          </h2>
          <p className={`mt-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-650'}`}>
            {t.contactSubtitle}
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Info Side Area */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Location block */}
            <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${
              darkMode ? 'bg-[#112b1f]/50 border-emerald-900/30' : 'bg-white border-emerald-950/10 shadow-sm'
            }`}>
              <div className="p-3 bg-emerald-950 rounded-xl border border-[#D4AF37]/20 text-[#D4AF37]">
                <MapPin className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h4 className="font-extrabold tracking-wide uppercase text-xs text-[#D4AF37]">{t.officeLocation}</h4>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.locationValue}
                </p>
              </div>
            </div>

            {/* Helpline phone block */}
            <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${
              darkMode ? 'bg-[#112b1f]/50 border-emerald-900/30' : 'bg-white border-emerald-950/10 shadow-sm'
            }`}>
              <div className="p-3 bg-emerald-950 rounded-xl border border-[#D4AF37]/20 text-[#D4AF37]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold tracking-wide uppercase text-xs text-[#D4AF37]">{t.officePhone}</h4>
                <a
                  href="tel:0530803415"
                  className={`text-sm font-bold font-mono tracking-wide mt-1 block uppercase ${
                    darkMode ? 'text-white hover:text-[#D4AF37]' : 'text-emerald-900 hover:text-emerald-700'
                  }`}
                >
                  0530803415
                </a>
                <p className={`text-[10px] mt-0.5 font-mono uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>International Dial: +966 53 080 3415</p>
              </div>
            </div>

            {/* Email block */}
            <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${
              darkMode ? 'bg-[#112b1f]/50 border-emerald-900/30' : 'bg-white border-emerald-950/10 shadow-sm'
            }`}>
              <div className="p-3 bg-emerald-950 rounded-xl border border-[#D4AF37]/20 text-[#D4AF37]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold tracking-wide uppercase text-xs text-[#D4AF37]">{t.officeEmail}</h4>
                <a
                  href="mailto:sasoprime@gmail.com"
                  className={`text-sm font-bold font-mono tracking-wide mt-1 block lowercase ${
                    darkMode ? 'text-white hover:text-green-600' : 'text-emerald-900 hover:text-emerald-700'
                  }`}
                >
                  sasoprime@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Form Side Area */}
          <div className="lg:col-span-8">
            <div className={`p-8 sm:p-10 rounded-3xl border relative overflow-hidden ${
              darkMode ? 'bg-[#112b1f]/25 border-emerald-900/35' : 'bg-white border-emerald-950/10 shadow-md'
            }`}>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="p-4 bg-emerald-900/30 rounded-full border border-emerald-500/30 text-emerald-400 mb-6">
                      <CheckCircle2 className="w-16 h-16 animate-pulse" />
                    </div>
                    
                    <h3 className="text-xl font-extrabold tracking-wide uppercase text-emerald-500">
                      Transmission Confirmed
                    </h3>
                    
                    <p className={`mt-4 max-w-md text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-650'}`}>
                      {t.successMsg}
                    </p>

                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 bg-[#1B5E20] hover:bg-[#1B5E20]/90 text-white rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer"
                    >
                      Compose Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    {/* Double row for Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                          {t.formName} *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Saiful Islam"
                          className={`w-full p-3.5 rounded-xl text-sm border bg-transparent text-white focus:outline-none focus:border-[#D4AF37] ${
                            darkMode ? 'border-emerald-900/70 text-white' : 'border-emerald-950/15 text-emerald-950'
                          } ${formErrors.name ? 'border-red-500' : ''}`}
                        />
                        {formErrors.name && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                          {t.formEmail} *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@company.com"
                          className={`w-full p-3.5 rounded-xl text-sm border bg-transparent text-white focus:outline-none focus:border-[#D4AF37] ${
                            darkMode ? 'border-emerald-900/70 text-white' : 'border-emerald-950/15 text-emerald-950'
                          } ${formErrors.email ? 'border-red-500' : ''}`}
                        />
                        {formErrors.email && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {formErrors.email}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Double row for Phone and Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                          {t.formPhone} *
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+966 53 080 3415"
                          className={`w-full p-3.5 rounded-xl text-sm border bg-transparent text-white focus:outline-none focus:border-[#D4AF37] ${
                            darkMode ? 'border-emerald-900/70 text-white' : 'border-emerald-950/15 text-emerald-950'
                          } ${formErrors.phone ? 'border-red-500' : ''}`}
                        />
                        {formErrors.phone && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Subject dropdown input */}
                      <div>
                        <label className="block text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                          {t.formSubject} *
                        </label>
                        <select
                          id="contact-subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={`w-full p-3.5 rounded-xl text-sm border bg-transparent focus:outline-none focus:border-[#D4AF37] select-none ${
                            darkMode ? 'border-emerald-900/70 text-white bg-[#112b1f]' : 'border-emerald-950/15 text-emerald-950 bg-white'
                          } ${formErrors.subject ? 'border-red-500' : ''}`}
                        >
                          <option value="">-- Choose Segment --</option>
                          <option value="Agriculture Inquiry">1. Hydroponics & Agriculture Solutions</option>
                          <option value="Plumbing Services Contract">2. Pipeline & Infrastructure Plumbing</option>
                          <option value="Retails & Minimarket Supplies">3. Retails, Supermarket & Minimarket Supplies</option>
                          <option value="Meat, Fish & Seafood Wholesales">4. Raw Meat, Fish & Vegetable Wholesales</option>
                          <option value="Hajj, Umrah & Tourism Reservation">5. Elite Hajj, Umrah & Tourism Packages</option>
                          <option value="Enquiry about Services">6. General Corporate Enquiry</option>
                        </select>
                        {formErrors.subject && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                            <AlertCircle className="w-3 h-3" /> {formErrors.subject}
                          </p>
                        )}
                      </div>

                    </div>

                    {/* Message textarea input */}
                    <div>
                      <label className="block text-xs font-bold font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                        {t.formMessage} *
                      </label>
                      <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please write detail specifications about coordinates, volume, or contract periods..."
                        className={`w-full p-3.5 rounded-xl text-sm border bg-transparent text-white focus:outline-none focus:border-[#D4AF37] ${
                          darkMode ? 'border-emerald-900/70 text-white' : 'border-emerald-950/15 text-emerald-950'
                        } ${formErrors.message ? 'border-red-505' : ''}`}
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 mt-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full p-4 rounded-xl font-bold uppercase tracking-widest text-xs border border-[#D4AF37]/50 text-white hover:border-[#D4AF37] cursor-pointer shadow-lg transition-transform focus:outline-none hover:-translate-y-0.5 flex items-center justify-center space-x-2 ${
                        status === 'submitting'
                          ? 'bg-emerald-900 absolute'
                          : 'bg-gradient-to-r from-[#1B5E20] to-emerald-800 hover:from-emerald-800 hover:to-[#1B5E20]'
                      }`}
                      id="btn-submit-contact-form"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>{status === 'submitting' ? t.submitting : t.btnSend}</span>
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Embedded Google Map Section */}
        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-lg aspect-video max-h-[380px] w-full relative">
          <iframe
            title="SASO Prime Location in Al Khobar, Saudi Arabia"
            src="https://maps.google.com/maps?q=Al%20Khobar,%20Saudi%20Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale opacity-90 filter brightness-95"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
