export type MarketplaceId = 
  | 'flipkart'
  | 'amazon'
  | 'meesho'
  | 'shopsy'
  | 'glowroad'
  | 'jiomart'
  | 'myntra'
  | 'shopify'
  | 'ebay'
  | 'etsy'
  | 'amazon_com';

export interface PlanPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  originalPrice: number;
  period: string;
  description: string;
  isPopular?: boolean;
  colorTheme: 'slate' | 'indigo' | 'amber' | 'emerald' | 'purple';
  platforms: string[];
  features: string[];
  recommendedFor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  tag: string;
  description: string;
  features: string[];
  deliverables: string[];
  supportedMarketplaces: string[];
}

export interface TestimonialItem {
  id: string;
  sellerName: string;
  brandName: string;
  city: string;
  category: string;
  platform: string;
  rating: number;
  growth: string;
  quote: string;
  avatarUrl: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeGmv: string;
  afterGmv: string;
  growthMultiple: string;
  highlights: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'tools' | 'pricing';
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: 'Instagram' | 'Linkedin' | 'Facebook' | 'Youtube' | 'Twitter' | 'MessageCircle';
  brandColor: string;
}
