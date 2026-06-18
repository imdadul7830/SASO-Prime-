export interface ServiceItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  iconName: string; // Used to dynamic-render lucide icons
}

export interface TeamMember {
  name: string;
  roleKey: string;
  email: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface StatItem {
  number: string;
  labelKey: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  titleKey: string;
  descriptionKey: string;
}

export interface GalleryItem {
  id: string;
  category: 'all' | 'agriculture' | 'market' | 'travel';
  titleKey: string;
  imageUrl: string;
}

export interface TestimonialItem {
  name: string;
  roleKey: string;
  companyKey: string;
  reviewKey: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  questionKey: string;
  answerKey: string;
}

export type Language = 'en' | 'bn';
