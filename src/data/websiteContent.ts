import {
  ServiceItem,
  TeamMember,
  StatItem,
  ProcessStep,
  GalleryItem,
  TestimonialItem,
  FAQItem
} from '../types';

export const siteTranslations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Our Services",
    navWhyUs: "Why Choose Us",
    navStats: "Achievements",
    navTeam: "Our Leadership",
    navProcess: "Business Process",
    navGallery: "Portfolio",
    navTestimonials: "Testimonials",
    navFAQs: "FAQs",
    navContact: "Contact",
    toggleLanguage: "বাংলা",

    // Hero Section
    heroSlogan: "Professional Service, Premium Results",
    heroTitle: "SOCIALLY ACCOUNTABLE & SYSTEMATIC OPERATIONS",
    heroSubtitle: "SASO Prime stands as a premiere enterprise in Saudi Arabia, building sustainable growth and setting standard benchmarks of excellence across agriculture, infrastructure plumbing, commercial retail, food supplies, and global tourism management.",
    btnExplore: "Explore Services",
    btnContact: "Contact Us",
    btnWatchVideo: "Watch Company Profile",
    scrollText: "Scroll to Discover",

    // About Us
    aboutTag: "Pioneering Excellence",
    aboutTitle: "The SASO Prime Legacy",
    aboutStoryTitle: "Our Corporate Journey",
    aboutStoryText: "Headquartered in the vibrant metropolis of Al Khobar, Dammam, Eastern Province of Saudi Arabia, SASO Prime is a diversified enterprise that fuses traditional corporate values with future-centric innovations. Over the years, we have positioned ourselves as a cornerstone of growth across various business sectors. Our journey is paved with high ethical standards, unwavering dedication, and a commitment to producing premium results for all stakeholders.",
    
    ceoMessageTitle: "Message from the Desk of CEO",
    ceoName: "Saiful Islam",
    ceoRole: "Founder & Chief Executive Officer",
    ceoMessageText: "At SASO Prime, we believe that true leadership is founded on accountability, continuous evolution, and professional precision. From our origins as a single focused venture in Al Khobar, we have expanded into a multi-sector powerhouse, serving communities throughout Saudi Arabia. We ensure that every branch of our operations—whether agriculture, premium food markets, technical services, or international travel—reflects our core promise: Professional Service, Premium Results.",
    
    visionTitle: "Our Vision",
    visionText: "To be recognized as the absolute standard of enterprise excellence in the Kingdom of Saudi Arabia, setting national benchmarks for quality, sustainability, and service-delivery across diverse commercial domains.",
    
    missionTitle: "Our Mission",
    missionText: "To systematically deliver premium-grade services and products through highly disciplined workforce solutions, environmental responsibility, and optimized retail distribution, driving sustained value for our community and partners.",
    
    coreValuesTitle: "Core Values",
    value1Title: "Absolute Integrity",
    value1Text: "Upholding complete transparency and ethical business practices in every interaction.",
    value2Title: "Corporate Accountability",
    value2Text: "Taking absolute ownership of our results and our impact on local communities.",
    value3Title: "Premium Excellence",
    value3Text: "Striving constantly to surpass international standards in output quality and customer satisfaction.",
    value4Title: "Unwavering Innovation",
    value4Text: "Implementing smart technology and ecological techniques in all vertical sectors.",

    // Services
    servicesTag: "Pillars of Growth",
    servicesTitle: "Our Diversified Business Portfolio",
    servicesSubtitle: "Discover the multi-disciplinary sectors where SASO Prime applies rigor, technical expertise, and top-tier customer focus.",
    serviceAgriTitle: "Sustainable Agriculture",
    serviceAgriDesc: "Sustaining Saudi communities with advanced drip-irrigation farming, high-quality greenhouse crops, and environmentally resilient agricultural protocols.",
    servicePlumbTitle: "Premium Plumbing Services",
    servicePlumbDesc: "Industrial and residential piping design, advanced fluid dynamics installation, leakage detection, and high-specification sanitary maintenance.",
    serviceMiniTitle: "SASO Mini Market",
    serviceMiniDesc: "Your neighborhood destination for convenient grocery picks, personal care, and gourmet local snacks under strict quality control standards.",
    serviceGrocTitle: "Premium Grocery Store",
    serviceGrocDesc: "Carefully curated organic products, daily essentials, local spices, and international culinary ingredients for professional kitchens and households.",
    serviceSuperTitle: "SASO Supermarket",
    serviceSuperDesc: "A masterfully structured spacious retail floor containing high-end global shelf brands, personal tech items, and pristine home utilities.",
    serviceMeatTitle: "Certified Halal Meat Products",
    serviceMeatDesc: "Premium cuts of mutton, beef, and poultry sourced from organic pastures and certified standard slaughterhouses under top-grade hygienic preservation.",
    serviceFishTitle: "Pristine Fish & Seafood",
    serviceFishDesc: "The freshest haul of Persian Gulf and Red Sea ocean treasures, preserved using advanced chilling techniques to lock in nutrition and delicious flavor.",
    serviceFruitTitle: "Vibrant Fruit & Vegetable Retail",
    serviceFruitDesc: "Crispy greens, locally grown premium dates, and hand-selected seasonal imported fruits, washed and displayed under supreme climate control.",
    serviceWholesaleTitle: "High-Volume Vegetable Wholesale",
    serviceWholesaleDesc: "Bulk cold-chain distribution powering regional hotel conglomerates, leading restaurant chains, food retailers, and administrative bases.",
    serviceTravelTitle: "Elite Travel & Tourism",
    serviceTravelDesc: "Tailored luxury tour coordination, reliable business travel, Hajj and Umrah package management, visa services, and worldwide ticketing options.",

    // Why Choose Us
    whyUsTag: "The SASO Edge",
    whyUsTitle: "Why Global and Local Clients Choose Us",
    feature1Title: "Premium Quality",
    feature1Text: "Only top-tier materials and organic produce reach our customers, ensuring safety and luxury.",
    feature2Title: "Professional Service",
    feature2Text: "Our workflow is structured, transparent, and completely optimized for timely execution.",
    feature3Title: "Trusted Saudi Brand",
    feature3Text: "Operating fully within Al Khobar and Eastern Province under official Saudi guidelines.",
    feature4Title: "Experienced Team",
    feature4Text: "Led by industry leaders and specialists with deep regional and technical experience.",
    feature5Title: "Client Satisfaction",
    feature5Text: "A near-perfect customer retention rate, testament to our uncompromising focus on service.",
    feature6Title: "24/7 Premium Support",
    feature6Text: "Dedicated personal service desks monitoring and answering logistics and on-site demands.",

    // Stats
    statServices: "Services",
    statCustomers: "Satisfied Customers",
    statPartners: "Global Partners",
    statSatisfaction: "Satisfaction",

    // Team
    teamTag: "Our Executives",
    teamTitle: "Steering Corporate Excellence",
    teamSubtitle: "Under the strategic foresight of CEO Saiful Islam, our executive team steers SASO Prime to unprecedented heights.",
    roleCEO: "Founder & Chief Executive Officer",
    roleGM: "General Manager",
    roleMarketing: "Director of Marketing & Branding",
    roleFinance: "Chief Financial Officer",
    roleOperations: "Heads of Global Logistics & Operations",

    // Business Process
    processTag: "Operational Framework",
    processTitle: "How We Execute Masterfully",
    step1Title: "Expert Consultation",
    step1Desc: "We meet with corporate clients and partners to map out requirements, analyze parameters, and align targets.",
    step2Title: "Precision Planning",
    step2Desc: "Our technical architects design customized execution schemas, supply schedules, and risk-management criteria.",
    step3Title: "Flawless Execution",
    step3Desc: "Using state-of-the-art equipments and strict quality controls, our field specialists transform plans into assets.",
    step4Title: "Seamless Delivery",
    step4Desc: "We transfer the finalized outputs with exhaustive validation logs, guaranteeing 100% operational readiness.",

    // Gallery
    galleryTag: "Media Showcase",
    galleryTitle: "Our Fields of Operation",
    gallerySubtitle: "Take a visual tour across our high-tech farms, modern retail stores, and elite travel ventures.",
    filterAll: "All Media",
    filterAgri: "Agriculture",
    filterMarket: "Retail & Markets",
    filterTravel: "Travel & Tours",
    galleryAgri1: "Modern Hydroponic Greenhouse",
    galleryAgri2: "Organic Dates Plantation",
    galleryMarket1: "SASO Supermarket Grand Aisle",
    galleryMarket2: "Premium Meat & Cold Storage",
    galleryTravel1: "Umrah Pilgrims Guide Team",
    galleryTravel2: "Luxury Tour Management Suite",

    // Testimonials
    testimonialsTag: "Client Voice",
    testimonialsTitle: "What Our Partners & Patrons Say",
    roleProjectManager: "Infrastructure Project Director",
    roleProcurement: "Procurement Manager",
    rolePilgrim: "Umrah Flight Coordinator",
    roleChef: "Executive Head Chef",
    reviewPlumbing: "The technical depth displaying in SASO Prime plumbing is unmatched. They handled the complex plumbing networks of our Al Khobar residential towers with incredible speed and structural perfection.",
    reviewAgri: "Premium organic supplies in bulk are difficult to source consistently. SASO Prime's wholesale vegetable service revolutionized our supply line with daily crisp shipments straight from their farms.",
    reviewTravel: "Our Hajj and Umrah corporate group arrangements were handled beautifully. Exceptional attention to lodging details, smooth transport, and round-the-clock coordinator assistance.",
    reviewSuper: "The SASO Supermarket offers incredible variety. High hygienic standards, beautifully laid out fresh sections, and extremely polite staff. Easily the best premium store in Khobar.",

    // FAQs
    faqTag: "FAQ Desk",
    faqTitle: "Frequently Asked Questions",
    faqQ1: "Where is SASO Prime headquartered, and which regional zones do you cover?",
    faqA1: "We are proudly headquartered in Al Khobar, Dammam, Eastern Province of Saudi Arabia. We serve clients across the Eastern Province and have established supply lines leading out nationwide.",
    faqQ2: "How does SASO Prime maintain organic certified standards in its agriculture range?",
    faqA2: "Our agriculture team operates high-tech green farms utilizing automated drip-irrigation, natural organic manures, and biologically sound pest control. No harmful chemicals are ever introduced.",
    faqQ3: "Do you supply bulk ingredients to hotels and restaurants in Khobar and Dammam?",
    faqA3: "Yes, our high-volume Vegetable Wholesale and certified Meat cold-chains cater extensively to major commercial kitchens, luxury hotels, and smaller food stores under full transport refrigeration.",
    faqQ4: "Can we book tailored group travel, visa assistance, and Hajj & Umrah services with SASO?",
    faqA4: "Absolutely! Our specialized Travel & Tourism division handles premium custom vacation schedules, business travel itineraries, reliable visa processing support, and deeply supportive Hajj/Umrah packages.",
    faqQ5: "How are SASO Prime's plumbing services structured for emergencies?",
    faqA5: "We have dedicated engineering repair squads standing by 24/7. When corporate partners encounter system leaks or pressure failure, our specialists dispatch swiftly to fix issues.",

    // Contact
    contactTag: "Reach Us Now",
    contactTitle: "Initiate Your Corporate Consultation",
    contactSubtitle: "Get in touch directly with our Al Khobar business office. We are happy to coordinate premium solutions.",
    formName: "Full Name",
    formEmail: "Corporate Email Address",
    formPhone: "Mobile / WhatsApp Number",
    formSubject: "Subject of Consultation",
    formMessage: "Consultation Request Message",
    btnSend: "Send Message Now",
    submitting: "Procuring Transmission...",
    successMsg: "Thank you for reaching out! Your message has been directly submitted to the desk of CEO Saiful Islam. We will contact you back within 12 working hours.",
    errorMsg: "There was a problem sending the email. Please try again or reach out directly via WhatsApp.",
    officeLocation: "Corporate Headquarters",
    locationValue: "Al Khobar, Dammam, Eastern Province, Kingdom of Saudi Arabia",
    officePhone: "Business Hotline",
    officeEmail: "Executive Registry",

    // Footer
    footerSlogan: "Fusing classic corporate responsibility with advanced service delivery. SASO Prime leads with premium standards.",
    quickLinks: "Corporate Navigation",
    servicesLinks: "Sectors of Trade",
    allRightsReserved: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions"
  },
  bn: {
    // Navigation
    navHome: "হোম",
    navAbout: "আমাদের সম্পর্কে",
    navServices: "আমাদের সেবাসমূহ",
    navWhyUs: "আমাদের কেন বেছে নেবেন",
    navStats: "অর্জনসমূহ",
    navTeam: "আমাদের নেতৃত্ব",
    navProcess: "কার্যপ্রণালী",
    navGallery: "পোর্টফোলিও",
    navTestimonials: "মতামত",
    navFAQs: "প্রশ্নোত্তর",
    navContact: "যোগাযোগ",
    toggleLanguage: "English",

    // Hero Section
    heroSlogan: "পেশাদার সেবা, সর্বোচ্চ ফলাফল",
    heroTitle: "সোশ্যালি অ্যাকাউন্টএবল এন্ড সিস্টেমেটিক অপারেশনস",
    heroSubtitle: "সাসো প্রাইম (SASO Prime) সৌদি আরবে একটি অন্যতম প্রধান বহুমুখী প্রতিষ্ঠান। আমরা কৃষি, পাইপলাইন ইঞ্জিনিয়ারিং, রিটেইল সুপার মার্কেট, খাদ্য সরবরাহ এবং গ্লোবাল ট্যুরিজম পরিচালনায় আস্থার সাথে কাজ করছি।",
    btnExplore: "আমাদের সেবাসমূহ",
    btnContact: "যোগাযোগ করুন",
    btnWatchVideo: "কোম্পানি প্রোফাইল দেখুন",
    scrollText: "বিস্তারিত দেখতে স্ক্রোল করুন",

    // About Us
    aboutTag: "অগ্রগামী শ্রেষ্ঠত্ব",
    aboutTitle: "সাসো প্রাইম ঐতিহ্য ও সমৃদ্ধি",
    aboutStoryTitle: "আমাদের প্রাতিষ্ঠানিক পথচলা",
    aboutStoryText: "সৌদি আরবের দাম্মাম-খobar কেন্দ্রিক প্রতিষ্ঠিত সাসো প্রাইম একটি স্বনামধন্য বহুমুখী গ্রুপ অব কোম্পানি। আমরা বছরের পর বছর ধরে সততা, উচ্চ নৈতিকতা এবং আমাদের গ্রাহকদের সর্বোত্তম মানের সেবা নিশ্চিত করার লক্ষ্যে কাজ করছি। আমাদের লক্ষ্য কেবল ব্যবসা সম্প্রসারণ নয়, বরং সৌদি আরব এবং বিশ্বের বিভিন্ন প্রান্তে প্রবাসীদের জন্য নির্ভরযোগ্য কর্মসংস্থান এবং গুণগত মানসম্মত পণ্য নিশ্চিত করা।",
    
    ceoMessageTitle: "চেয়ারম্যানের বার্তা",
    ceoName: "সাইফুল ইসলাম",
    ceoRole: "প্রতিষ্ঠাতা এবং প্রধান নির্বাহী কর্মকর্তা (CEO)",
    ceoMessageText: "সাসো প্রাইম-এ আমরা বিশ্বাস করি যে, সততা, নিয়মানুবর্তিতা এবং পেশাদারি সেবাই হচ্ছে আমাদের সাফল্যের মূল চাবিকাঠি। আল খোবারে আমাদের সাধারণ যাত্রা শুরু হলেও আজ আমরা সৌদি আরবে একটি সমাদৃত ও নির্ভরযোগ্য কর্পোরেট পরিবারে পরিণত হয়েছি। এটি সম্ভব হয়েছে আমাদের সকল গ্রাহকদের প্রগাঢ় ভালোবাসা এবং সেবা প্রদানের কঠোর প্রতিজ্ঞার মাধ্যমে। আমরা সর্বদা আপনাদের পেশাদার এবং প্রিমিয়াম কোয়ালিটি সেবা দিতে অঙ্গীকারবদ্ধ।",
    
    visionTitle: "আমাদের দূরদর্শী লক্ষ্য (Vision)",
    visionText: "সৌদি আরবে আধুনিক প্রযুক্তি ও টেকসই কর্মপদ্ধতি ব্যবহারের মাধ্যমে ব্যবসায়িক অঙ্গনে আদর্শ মানের ব্র্যান্ড হিসেবে প্রতিষ্ঠিত হওয়া যা বিশ্বজুড়ে সকলের কাছে উদাহরণ স্বরূপ হবে।",
    
    missionTitle: "আমাদের মিশন (Mission)",
    missionText: "সুশৃঙ্খল কার্যপদ্ধতি অবলম্বন করে আমাদের প্রতিটি সেবা এবং পণ্যের সর্বোচ্চ মান ও বিশুদ্ধতা বজায় রাখা, যাতে অংশীদার ও সমাজের দীর্ঘমেয়াদী উন্নতি অর্জিত হয়।",
    
    coreValuesTitle: "মূল চালিকাশক্তি (Values)",
    value1Title: "সীমাহীন সততা",
    value1Text: "প্রতিটি কার্যক্রমে শতভাগ স্বচ্ছতা ও নৈতিক ব্যবসায়িক নিয়ম কঠোরভাবে পালন করা।",
    value2Title: "কর্পোরেট দায়বদ্ধতা",
    value2Text: "আমাদের কাজের ফলাফল এবং স্থানীয় সমাজের কল্যাণে পূর্ণ দায়িত্ব নেওয়া।",
    value3Title: "প্রিমিয়াম উৎকর্ষতা",
    value3Text: "আন্তর্জাতিক মানদণ্ড এবং গ্রাহকের প্রত্যাশাকে প্রতিনিয়ত ছাড়িয়ে যাওয়ার চেষ্টা করা।",
    value4Title: "যুগোপযোগী উদ্ভাবন",
    value4Text: "কৃষি ও খুচরা ব্যবসায়িক কার্যক্রমে পরিবেশ-বান্ধব এবং আধুনিক প্রযুক্তির ব্যবহার করা।",

    // Services
    servicesTag: "আমাদের সেবাসমূহ",
    servicesTitle: "সাসো প্রাইম-এর প্রধান বাণিজ্যিক ক্ষেত্রসমূহ",
    servicesSubtitle: "কৃষি থেকে শুরু করে রিটেইল মার্ট, অবকাঠামোগত নির্মাণ এবং বিশ্ব পর্যটন—আমরা সর্বোচ্চ পেশাদারিত্বের সেবা প্রদান করছি।",
    serviceAgriTitle: "উন্নত ও আধুনিক কৃষি ব্যবস্থা",
    serviceAgriDesc: "অত্যাধুনিক ড্রিপ-সেচ পদ্ধতি, উন্নত গ্রিনহাউজ চাষাবাদ এবং সম্পূর্ণ স্বাস্থ্যকরভাবে ফলানো শাকসবজির নির্ভরযোগ্য খামার উৎপাদন ও পরিচর্যা।",
    servicePlumbTitle: "প্রিমিয়াম প্লাম্বিং ইঞ্জিনিয়ারিং",
    servicePlumbDesc: "আবাসিক ও বাণিজ্যিক ভবনের জন্য অত্যাধুনিক পাইপলাইন ডিজাইন, দ্রুত ফুটো সনাক্তকরণ এবং আন্তর্জাতিক মানের স্যানিটারি ফিটিংসের কাজ।",
    serviceMiniTitle: "সাসো মিনি মার্কেট",
    serviceMiniDesc: "দৈনন্দিন জরুরি প্রয়োজনীয় মুদি সামগ্রী, সুস্বাদু রিফ্রেশমেন্ট ও তাজা সবজির চটজলদি বিশ্বস্ত দোকান।",
    serviceGrocTitle: "উন্নত কোয়ালিটি গ্রোসারি স্টোর",
    serviceGrocDesc: "সম্পূর্ণ তাজা রান্নার উপাদান, চমৎকার খাঁটি মশলা এবং নিত্যপ্রয়োজনীয় সকল সামগ্রীর আস্থার ঠিকানা।",
    serviceSuperTitle: "সাসো সুপারমার্কেট",
    serviceSuperDesc: "একটি বিশদ ও আধুনিক সাজানো বিশাল ডিপার্টমেন্টাল রিটেইল চেইন, যেখানে রয়েছে দেশি ও বিদেশি সেরা ব্র্যান্ডের পণ্যের সমাহার।",
    serviceMeatTitle: "সার্টিফাইড হালাল মিট ও মাংস",
    serviceMeatDesc: "ভেড়া, গরু এবং মুরগির শতভাগ হালাল, স্বাস্থ্যসম্মত উপায়ে প্রসেস করা তাজা মাংসের প্রিমিয়াম কাটস সরবরাহ।",
    serviceFishTitle: "তাজা সামুদ্রিক মাছ ও সি-ফুড",
    serviceFishDesc: "পারস্য উপসাগর ও লোহিত সাগর থেকে সরাসরি সংগৃহীত তাজা সামুদ্রিক মাছের কোল্ড চেইন ফ্রোজেন প্রিমিয়াম সাপ্লাই।",
    serviceFruitTitle: "তাজা ফলমূল ও সবজি রিটেইল",
    serviceFruitDesc: "ভিটামিন ও পুষ্টিগুণে ভরপুর তাজা সবুজ শাকসবজি এবং সুস্বাদু মৌসুমি ফলের বৈচিত্র্যময় প্রিমিয়াম রিটেইল ডেয়ারি।",
    serviceWholesaleTitle: "সবজির পাইকারি সরবরাহ",
    serviceWholesaleDesc: "বিভিন্ন বড় কর্পোরেট প্রতিষ্ঠান, ক্যাটারিং কোম্পানি এবং ফাইভ স্টার হোটেলের কিচেনে তাজা সবজির পাইকারি দৈনিক কার্গো লোড।",
    serviceTravelTitle: "এলিট ট্রাভেল অ্যান্ড ট্যুরিজম",
    serviceTravelDesc: "পবিত্র হজ ও ওমরাহ পালন, আন্তর্জাতিক এয়ার টিকিট বুকিং, নির্ভরযোগ্য ভিসা প্রসেসিং এবং ট্যুর প্যাকেট ডিজাইন।",

    // Why Choose Us
    whyUsTag: "সাসো প্রাইম সুবিধা",
    whyUsTitle: "কেন আমাদের বেছে নেবেন?",
    feature1Title: "প্রিমিয়াম কোয়ালিটি",
    feature1Text: "আমরা শুধুমাত্র সেরা মানের কাঁচামাল এবং সম্পূর্ণ ফ্রেশ উপাদান পরিবেশন করি।",
    feature2Title: "পেশাদার সেবা",
    feature2Text: "আমাদের কাজের ধাপগুলো সুশৃঙ্খল এবং সম্পূর্ণ স্বচ্ছ, যা সঠিক সময়ে কাজ শেষ করা নিশ্চিত করে।",
    feature3Title: "সৌদি আরবে বিশ্বস্ত ব্র্যান্ড",
    feature3Text: "আল খোবার এবং দাম্মাম অঞ্চলে সৌদি আরবের সকল নিয়ম-কানুন মেনে পরিচালিত সেবা।",
    feature4Title: "অভিজ্ঞ বিশেষজ্ঞ স্কোয়াড",
    feature4Text: "আমরা দক্ষ কৃষিবিদ, প্লাম্বিং প্রকৌশলী এবং দক্ষ কাস্টমার রিলেশন কর্তাদের মাধ্যমে কাজ করে থাকি।",
    feature5Title: "গ্রাহকদের সর্বোচ্চ সন্তুষ্টি",
    feature5Text: "আমাদের গ্রাহকদের সন্তুষ্টির ওপর আমাদের টিকে থাকা ও সফল পথচলা দীর্ঘায়িত হয়েছে।",
    feature6Title: "২৪/৭ প্রিমিয়াম সাপোর্ট",
    feature6Text: "লজিস্টিকস ও টেকনিক্যাল প্রয়োজনে আমরা সার্বক্ষণিক ডেডিকেটেড সাপোর্ট সার্ভিস প্রদান করি।",

    // Stats
    statServices: "প্রিমিয়াম সেবাসমূহ",
    statCustomers: "সন্তুষ্ট গ্রাহক",
    statPartners: "বৈশ্বিক অংশীদার",
    statSatisfaction: "শতভাগ সন্তুষ্টি",

    // Team
    teamTag: "আমাদের নেতৃত্ব",
    teamTitle: "কর্পোরেট সফলতার কারিগর",
    teamSubtitle: "প্রতিষ্ঠাতা সাইফুল ইসলামের সুদূরপ্রসারী বিচক্ষণতায় এবং অভিজ্ঞ ম্যানেজারদের পরিশ্রমে এগিয়ে চলেছে সাসো প্রাইম।",
    roleCEO: "প্রতিষ্ঠাতা এবং প্রধান নির্বাহী কর্মকর্তা (CEO)",
    roleGM: "জেনারেল ম্যানেজার",
    roleMarketing: "মার্কেটিং ও ব্র্যান্ডিং ডিরেক্টর",
    roleFinance: "প্রধান অর্থ কর্মকর্তা (CFO)",
    roleOperations: "গ্লোবাল লজিস্টিকস ও অপারেশনস টিম",

    // Business Process
    processTag: "আমাদের কার্যপ্রণালী",
    processTitle: "যেভাবে আমরা বাস্তবায়ন করি",
    step1Title: "১. নিবিড় পরামর্শ",
    step1Desc: "আমরা আমাদের পার্টনারদের সাথে সরাসরি মিটিংয়ের মাধ্যমে তাদের প্রত্যাশা ও প্রজেক্টের সঠিক প্রয়োজনীয়তা বিশ্লেষণ করি।",
    step2Title: "২. পরিকল্পিত নকশা",
    step2Desc: "আমাদের টেকনিক্যাল আর্কিটেক্টরা বাজেট ফ্রেন্ডলি এবং সময়ানুযায়ী কাজ শেষ করার কার্যকরী রোডম্যাপ তৈরি করে।",
    step3Title: "৩. নিখুঁত বাস্তবায়ন",
    step3Desc: "অভিজ্ঞ বিশেষজ্ঞ কারিগর ও আধুনিক প্রযুক্তির সমন্বয়ে আমরা পরিকল্পিত কাজের ধাপগুলো বাস্তবে রূপ দিই।",
    step4Title: "৪. নিশ্চিন্তে ডেলিভারি",
    step4Desc: "আমরা প্রজেক্ট শেষ হওয়ার পর পূর্ণাঙ্গ কোয়ালিটি নিরীক্ষণ সাপেক্ষে শতভাগ সফলতার সাথে ডেলিভারি দিয়ে থাকি।",

    // Gallery
    galleryTag: "ফটো গ্যালারি",
    galleryTitle: "আমাদের কার্যক্রমের কিছু চিত্র",
    gallerySubtitle: "আমাদের খামার, আধুনিক সুসজ্জিত মার্কেট এবং চমৎকার ট্রাভেল ও পবিত্র ট্যুর প্যাকেজ সমূহের কিছু ঝলক।",
    filterAll: "সবগুলো ফটো",
    filterAgri: "কৃষি প্রকল্প",
    filterMarket: "মার্কেট ও কোয়ালিটি ফুড",
    filterTravel: "ট্যুর অ্যান্ড ভিসা",
    galleryAgri1: "আধুনিক হাইড্রোপনিক গ্রিনহাউজ প্রকল্প",
    galleryAgri2: "খাঁটি খেজুর বাগান উৎপাদন",
    galleryMarket1: "সাসো সুপারমার্কেট ইনডোর ভিউ",
    galleryMarket2: "শীতল তাজা মাংস সংরক্ষনাগার",
    galleryTravel1: "পবিত্র ওমরাহ হাজীদের সেবায় নিয়োজিত দল",
    galleryTravel2: "লাক্সারি ট্যুর গাইড ও টিকিট ডেস্ক",

    // Testimonials
    testimonialsTag: "শ্রদ্ধেয় গ্রাহকদের কণ্ঠস্বর",
    testimonialsTitle: "আমাদের সম্মানিত পার্টনারদের মূল্যায়ন",
    roleProjectManager: "ইনফ্রাস্ট্রাকচার প্রজেক্ট ডিরেক্টর",
    roleProcurement: "প্রধান খাদ্য সংগ্রহ কর্মকর্তা",
    rolePilgrim: "ওমরাহ কাফেলা সমন্বয়কারী",
    roleChef: "এক্সিকিউটিভ হেড শেফ",
    reviewPlumbing: "সাসো প্রাইম-এর প্লাম্বিং টিমের কাজের দক্ষতা অবিশ্বাস্য। আমাদের খোবারের আবাসিক ভবনে প্লাম্বিং ও ওয়াটার লাইন সিস্টেমের নকশা তারা অত্যন্ত দ্রুত ও সুন্দরভাবে সম্পন্ন করেছে।",
    reviewAgri: "প্রতিদিন একদম খামার-তাজা শাকসবজি পাওয়া আমাদের রেস্টুরেন্টের জন্য একটি বড় বিষয় ছিল। ধন্যবাদ সাসো প্রাইম-কে, তাদের নিয়মিত সরবরাহের জন্য আমাদের খাবারের স্বাদ বহুগুণ বৃদ্ধি পেয়েছে।",
    reviewTravel: "আমাদের কোম্পানির ওমরাহ ও হজ যাতায়াতের সকল ব্যবস্থা চমৎকারভাবে সামলে নিয়েছে তাদের ট্রাভেল স্কোয়াড। বিমান টিকিট থেকে শুরু করে মক্কা ও মদিনায় হোটেলের গুণগত মান ছিলো অতুলনীয়।",
    reviewSuper: "সাসো সুপারমার্কেটে সব ধরণের প্রয়োজনীয় পণ্য পাওয়া যায় এবং তাদের প্রতিটি সেকশন অত্যন্ত পরিচ্ছন্ন। কর্মচারীদের ব্যবহার ও আন্তরিকতাও চোখে পড়ার মতো।",

    // FAQs
    faqTag: "সাধারণ প্রশ্নোত্তর",
    faqTitle: "আপনার জিজ্ঞাসা এবং আমাদের উত্তর",
    faqQ1: "সাসো প্রাইম-এর প্রধান কার্যালয় কোথায় এবং কোন কোন অঞ্চলে আপনারা সার্ভিস দেন?",
    faqA1: "আমাদের প্রধান কার্যালয় সৌদি আরবের আল খোবার, দাম্মামে অবস্থিত। আমরা পুরো ইস্টার্ন প্রদেশ এবং ক্রমান্বয়ে পুরো সৌদি আরবের বড় শহরগুলোতে লজিস্টিকস ও পণ্য সরবরাহ করে থাকি।",
    faqQ2: "আপনাদের শাকসবজি ও ফলমূল কতটা নিরাপদ ও খাঁটি?",
    faqA2: "আমাদের খামারে আমরা ড্রিপ-সেচ এবং পুরোপুরি প্রাকৃতিক জৈব সার ব্যবহার করে সবজি ফলাই। ক্ষতিকারক রাসায়নিক সম্পূর্ণ বর্জন করা হয়ে থাকে, তাই এগুলো শতভাগ নিরাপদ ও পুষ্টিকর।",
    faqQ3: "হোটেল ও রেস্টুরেন্টে কি পাইকারি মাংস ও সবজি সরবরাহ নেওয়া যাবে?",
    faqA3: "হ্যাঁ, নিশ্চয়ই! আমাদের বিশেষ কার্গো চেইনের মাধ্যমে দাম্মাম ও খোবারের যেকোনো বড় বাণিজ্যিক কিচেন ও সুপারমার্কেটে পাইকারি সবজি ও হালাল মাংস প্রতিদিন সরাসরি ডেলিভারি করা হয়।",
    faqQ4: "আপনারা কি ফ্যামিলি ট্যুর এবং ওমরাহ ট্রাভেল গাইড প্রদান করে থাকেন?",
    faqA4: "হ্যাঁ, আমাদের ট্রাভেল বিভাগের মাধ্যমে আমরা প্রিমিয়াম ওমরাহ প্যাকেজ, লাক্সারি ফ্যামিলি ট্যুর গাইডেন্স, দেশি-বিদেশি ট্রাভেল এয়ার টিকিট এবং নিরাপদ ভিসা প্রসেসিং সার্ভিস দিয়ে আসছি।",
    faqQ5: "প্লাম্বিং লাইনে যেকোনো সময় জরুরি সমস্যা হলে সমাধান পাওয়া যাবে কি?",
    faqA5: "হ্যাঁ, আবাসিক ও বাণিজ্যিক প্লাম্বিং সমস্যার তাৎক্ষণিক সমাধানের জন্য আমাদের কাছে রয়েছে ডেডিকেটেড ইমার্জেন্সি প্রকৌশলী দল। আমাদের হোয়াটসঅ্যাপ বা মোবাইলে কল দিলেই আমরা দ্রুত উপস্থিত হই।",

    // Contact
    contactTag: "যোগাযোগের ঠিকানা",
    contactTitle: "আপনার প্রজেক্ট বা ব্যবসায়িক কনসালটেশন শুরু করুন",
    contactSubtitle: "যেকোনো বাণিজ্যিক পার্টনারশিপ বা সেবার বুকিংয়ের জন্য আমাদের আল খোবার অফিসে আজই যোগাযোগ করুন। যেকোনো প্রয়োজনে আমরা আপনার পাশে আছি।",
    formName: "আপনার নাম",
    formEmail: "আপনার ইমেল",
    formPhone: "মোবাইল / হোয়াটসঅ্যাপ নম্বর",
    formSubject: "কনসালটেশনের বিষয়",
    formMessage: "আপনার লিখিত বার্তা...",
    btnSend: "বার্তা পাঠান",
    submitting: "বার্তা প্রেরণ হচ্ছে...",
    successMsg: "যোগাযোগ করার জন্য ধন্যবাদ! আপনার বার্তাটি সরাসরি প্রধান নির্বাহী সাইফুল ইসলাম-এর অফিসে প্রেরিত হয়েছে। আগামী ১২ ঘণ্টার মধ্যে আমাদের কাস্টমার রিলেশন টিম আপনার সাথে যোগাযোগ করবে।",
    errorMsg: "ইমেইল পাঠাতে সাময়িক সমস্যা হচ্ছে। অনুগ্রহ করে আমাদের দেওয়া হোয়াটসঅ্যাপ নম্বরে সরাসরি বার্তা পাঠান বা কল করুন।",
    officeLocation: "প্রধান কর্পোরেট কার্যালয়",
    locationValue: "আল খোবার, দাম্মাম, ইস্টার্ন প্রভিন্স, সৌদি আরব সাম্রাজ্য",
    officePhone: "হটলাইন নম্বর",
    officeEmail: "অফিসিয়াল ইমেইল",

    // Footer
    footerSlogan: "উচ্চ পেশাদারিত্ব এবং মানবিক কর্পোরেট গুণাবলী বজায় রেখে এগিয়ে চলেছে সাসো প্রাইম। প্রিমিয়াম কোয়ালিটি এবং নিখুঁত সেবা আমাদের মূল লক্ষ্য।",
    quickLinks: "গুরুত্বপূর্ণ লিংকসমূহ",
    servicesLinks: "আমাদের প্রধান সেবাসমূহ",
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত।",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsConditions: "শর্তাবলী ও নিয়মাবলী"
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  { id: 'agriculture', titleKey: 'serviceAgriTitle', descriptionKey: 'serviceAgriDesc', iconName: 'Sprout' },
  { id: 'plumbing', titleKey: 'servicePlumbTitle', descriptionKey: 'servicePlumbDesc', iconName: 'Wrench' },
  { id: 'mini-market', titleKey: 'serviceMiniTitle', descriptionKey: 'serviceMiniDesc', iconName: 'ShoppingBag' },
  { id: 'grocery', titleKey: 'serviceGrocTitle', descriptionKey: 'serviceGrocDesc', iconName: 'Store' },
  { id: 'supermarket', titleKey: 'serviceSuperTitle', descriptionKey: 'serviceSuperDesc', iconName: 'ShoppingCart' },
  { id: 'meat', titleKey: 'serviceMeatTitle', descriptionKey: 'serviceMeatDesc', iconName: 'Beef' },
  { id: 'fish', titleKey: 'serviceFishTitle', descriptionKey: 'serviceFishDesc', iconName: 'Fish' },
  { id: 'fruit-veg', titleKey: 'serviceFruitTitle', descriptionKey: 'serviceFruitDesc', iconName: 'Leaf' },
  { id: 'veg-wholesale', titleKey: 'serviceWholesaleTitle', descriptionKey: 'serviceWholesaleDesc', iconName: 'Truck' },
  { id: 'travel', titleKey: 'serviceTravelTitle', descriptionKey: 'serviceTravelDesc', iconName: 'Plane' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gal-agri-1', category: 'agriculture', titleKey: 'galleryAgri1', imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-agri-2', category: 'agriculture', titleKey: 'galleryAgri2', imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-market-1', category: 'market', titleKey: 'galleryMarket1', imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-market-2', category: 'market', titleKey: 'galleryMarket2', imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-travel-1', category: 'travel', titleKey: 'galleryTravel1', imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
  { id: 'gal-travel-2', category: 'travel', titleKey: 'galleryTravel2', imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80' },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    name: "Ahmed Al-Mansoori",
    roleKey: "roleProjectManager",
    companyKey: "Al Khobar Real Estate Dev.",
    reviewKey: "reviewPlumbing",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Mohammad Rahman",
    roleKey: "roleProcurement",
    companyKey: "Eastern Caterers Corp.",
    reviewKey: "reviewAgri",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Jenkins",
    roleKey: "rolePilgrim",
    companyKey: "Global Umrah Direct Ltd.",
    reviewKey: "reviewTravel",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Faisal Al-Otaibi",
    roleKey: "roleChef",
    companyKey: "Bait Al Khobar Fine Dining",
    reviewKey: "reviewSuper",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  }
];

export const FAQ_LIST: FAQItem[] = [
  { id: 'faq-1', questionKey: 'faqQ1', answerKey: 'faqA1' },
  { id: 'faq-2', questionKey: 'faqQ2', answerKey: 'faqA2' },
  { id: 'faq-3', questionKey: 'faqQ3', answerKey: 'faqA3' },
  { id: 'faq-4', questionKey: 'faqQ4', answerKey: 'faqA4' },
  { id: 'faq-5', questionKey: 'faqQ5', answerKey: 'faqA5' }
];

export const BUSINESS_STEPS: ProcessStep[] = [
  { stepNumber: 1, titleKey: 'step1Title', descriptionKey: 'step1Desc' },
  { stepNumber: 2, titleKey: 'step2Title', descriptionKey: 'step2Desc' },
  { stepNumber: 3, titleKey: 'step3Title', descriptionKey: 'step3Desc' },
  { stepNumber: 4, titleKey: 'step4Title', descriptionKey: 'step4Desc' }
];

export const TEAM_LIST: TeamMember[] = [
  {
    name: "Saiful Islam",
    roleKey: "roleCEO",
    email: "sasoprime@gmail.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/966530803415"
    }
  },
  {
    name: "Engr. Tariq Al-Amoudi",
    roleKey: "roleGM",
    email: "tariq.saso@gmail.com",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Faruq Hossain",
    roleKey: "roleOperations",
    email: "faruq.saso@gmail.com",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&q=80",
    socials: {
      whatsapp: "https://wa.me/966530803415"
    }
  },
  {
    name: "Zamil Al-Subaie",
    roleKey: "roleFinance",
    email: "zamil.f@gmail.com",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com"
    }
  }
];

export const STATS_LIST: StatItem[] = [
  { number: "10+", labelKey: "statServices", iconName: "Layers" },
  { number: "500+", labelKey: "statCustomers", iconName: "Users" },
  { number: "50+", labelKey: "statPartners", iconName: "Building" },
  { number: "100%", labelKey: "statSatisfaction", iconName: "CheckCircle" }
];
