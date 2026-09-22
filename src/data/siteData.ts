import { PlanPackage, ServiceItem, TestimonialItem, CaseStudyItem, FaqItem, SocialLink } from '../types';

export const COMPANY_INFO = {
  name: 'Dexora Commerce',
  legalName: 'Dexora Commerce Solutions',
  tagline: 'Empowering Sellers. Growing Businesses.',
  subtagline: 'Dedicated Marketplace Management for Amazon, Flipkart, Myntra, Meesho & Shopsy',
  phone: '+91 6306522710',
  phoneDisplay: '+91 63065 22710',
  email: 'dexoracommerceofficial@gmail.com',
  address: 'India - Serving Pan-India Sellers & Exporters',
  whatsappNumber: '916306522710',
  workingHours: 'Mon - Sat: 9:30 AM - 7:30 PM IST',
  whatsappUrl: 'https://wa.me/916306522710?text=Hello%20Dexora%20Commerce%20team,%20I%20want%20to%20scale%20my%20marketplace%20store.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/dexoracommerce',
    handle: '@dexoracommerce',
    icon: 'Instagram',
    brandColor: '#E1306C',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/dexoracommerce',
    handle: 'dexoracommerce',
    icon: 'Linkedin',
    brandColor: '#0A66C2',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/dexoracommerce',
    handle: 'dexoracommerce',
    icon: 'Facebook',
    brandColor: '#1877F2',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/@dexoracommerce',
    handle: '@dexoracommerce',
    icon: 'Youtube',
    brandColor: '#FF0000',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/dexoracommerce',
    handle: '@dexoracommerce',
    icon: 'Twitter',
    brandColor: '#0F1419',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Community',
    url: 'https://wa.me/916306522710?text=Hello%20Dexora%20Commerce%20team,%20I%20want%20to%20connect%20with%20you.',
    handle: '+91 63065 22710',
    icon: 'MessageCircle',
    brandColor: '#25D366',
  },
];

export const CORE_MARKETPLACES = [
  { id: 'amazon', name: 'Amazon', color: '#FF9900', bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/30', tag: 'Fast Prime Delivery' },
  { id: 'flipkart', name: 'Flipkart', color: '#2874F0', bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/30', tag: 'Mega Festive Events' },
  { id: 'myntra', name: 'Myntra', color: '#FF3F6C', bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-500/30', tag: 'Top Fashion & Apparel' },
  { id: 'meesho', name: 'Meesho', color: '#E42575', bg: 'bg-pink-500/10', text: 'text-pink-600', border: 'border-pink-500/30', tag: '0% Commission Market' },
  { id: 'shopsy', name: 'Shopsy', color: '#9333EA', bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/30', tag: 'Tier 2/3 Hyper-Growth' },
];

export const ALL_MARKETPLACES = [
  ...CORE_MARKETPLACES,
  { id: 'jiomart', name: 'JioMart', color: '#0F73EE', tag: 'FMCG & Grocery' },
  { id: 'glowroad', name: 'GlowRoad', color: '#128C7E', tag: 'Reseller Network' },
  { id: 'shopify', name: 'Shopify D2C', color: '#95BF47', tag: 'Own Brand Store' },
  { id: 'amazon_com', name: 'Amazon USA', color: '#146EB4', tag: 'Global Export' },
];

export interface DexoraPillar {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  keyPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  platforms: string[];
  mockupType: 'account_health' | 'listing_catalog' | 'order_support' | 'growth_chart';
}

export const DEXORA_PILLARS: DexoraPillar[] = [
  {
    number: '1',
    id: 'account_management',
    title: 'ACCOUNT MANAGEMENT',
    subtitle: 'Your Account. Our Responsibility.',
    badge: 'Foundational Operations',
    icon: 'UserCheck',
    keyPoints: [
      {
        title: 'Account Setup and Registration',
        description: 'Smooth GST verification, brand approval, category un-gating, and secure seller central configuration.',
        icon: 'UserPlus'
      },
      {
        title: 'Account Health Monitoring',
        description: 'Proactive tracking of Order Defect Rate (<1%), Late Dispatch Rate (<4%), and Cancellation Rate (<2.5%).',
        icon: 'Activity'
      },
      {
        title: 'Policy Compliance and Risk Management',
        description: 'Shield against sudden suspensions, IP warnings, listing suppressions, and trademark infringements.',
        icon: 'ShieldCheck'
      },
      {
        title: 'Performance Reports and Insights',
        description: 'Transparent weekly sales, buy-box percentage, conversion rates, and profit margin analysis.',
        icon: 'BarChart3'
      },
    ],
    platforms: ['Amazon', 'Meesho', 'Myntra', 'Flipkart', 'Shopsy'],
    mockupType: 'account_health',
  },
  {
    number: '2',
    id: 'listing_cataloging',
    title: 'LISTING & CATALOGING',
    subtitle: 'Great Listings. Better Visibility. More Sales.',
    badge: 'Search Rank & Conversion',
    icon: 'Layers',
    keyPoints: [
      {
        title: 'Product Research & Keyword Optimization',
        description: 'High-intent search volume discovery, competitor keyword gaps, and high-conversion indexing.',
        icon: 'Search'
      },
      {
        title: 'SEO Friendly Listing Creation',
        description: 'Algorithmic titles, benefit-rich bullet points, backend search terms, and precise category browsing nodes.',
        icon: 'Tag'
      },
      {
        title: 'High Quality Images & Content',
        description: 'Infographic callouts, lifestyle staging, dimension diagrams, and A+ Enhanced Brand Content.',
        icon: 'Image'
      },
      {
        title: 'Catalog Upload & Optimization',
        description: 'Bulk catalog CSV feeds, parent-child variation mapping, size charts, and instant glitch resolution.',
        icon: 'UploadCloud'
      },
    ],
    platforms: ['Amazon', 'Meesho', 'Myntra', 'Flipkart', 'Shopsy'],
    mockupType: 'listing_catalog',
  },
  {
    number: '3',
    id: 'order_support',
    title: 'ORDER SUPPORT',
    subtitle: 'On-Time Support. Happy Customers.',
    badge: 'Fulfillment & Returns',
    icon: 'Package',
    keyPoints: [
      {
        title: 'Order Processing & Tracking',
        description: 'Daily order verification, thermal shipping label generation, dispatch scheduling, and courier tracking.',
        icon: 'PackageCheck'
      },
      {
        title: 'Return & Refund Management',
        description: 'RTO tracking, customer return auditing, Safe-T & SPF claims filing for damaged or wrong product swaps.',
        icon: 'RefreshCw'
      },
      {
        title: 'Customer Query Handling',
        description: 'Fast response times for buyer messages, questions, and product sizing inquiries to protect seller metrics.',
        icon: 'Headphones'
      },
      {
        title: 'Escalation & Issue Resolution',
        description: 'Direct seller support ticket management, pickup dispute reconciliations, and weight discrepancy disputes.',
        icon: 'AlertCircle'
      },
    ],
    platforms: ['Amazon', 'Meesho', 'Myntra', 'Flipkart', 'Shopsy'],
    mockupType: 'order_support',
  },
  {
    number: '4',
    id: 'growth_solutions',
    title: 'GROWTH SOLUTIONS',
    subtitle: 'Scale Your Business. Maximize Your Profits.',
    badge: 'Revenue Velocity',
    icon: 'TrendingUp',
    keyPoints: [
      {
        title: 'Sales Boosting Strategies',
        description: 'Lightning deals, mega festival participation (BBD, Great Indian Festival, Maha Indian Sale), and coupons.',
        icon: 'Rocket'
      },
      {
        title: 'Advertising & Promotions Management',
        description: 'High-ROAS Sponsored Products & Brands PPC campaigns with strict TACoS guardrails and negative keyword pruning.',
        icon: 'Megaphone'
      },
      {
        title: 'Competitor Analysis & Market Insights',
        description: 'Price tracking, stock availability benchmarking, and market trend forecasts to capture Buy-Box share.',
        icon: 'LineChart'
      },
      {
        title: 'Performance Monitoring & Growth Planning',
        description: 'Data-driven monthly milestone roadmap to consistently scale from 50 orders/day to 500+ orders/day.',
        icon: 'Target'
      },
    ],
    platforms: ['Amazon', 'Meesho', 'Myntra', 'Flipkart', 'Shopsy'],
    mockupType: 'growth_chart',
  },
];

export const PACKAGES: PlanPackage[] = [
  {
    id: 'starter',
    name: 'Starter Package',
    badge: 'Launch Fast',
    price: 2999,
    originalPrice: 5999,
    period: 'per month',
    description: 'Perfect for new sellers taking their first leap into online marketplaces with Dexora Commerce.',
    colorTheme: 'slate',
    platforms: ['Single Platform (Flipkart, Amazon, Meesho, or Myntra)'],
    features: [
      'Account Setup & Document Verification',
      'Up to 25 Single Product Listings & Variations',
      'Basic Keyword & Title Optimization',
      'Inventory & Dispatch Monitoring',
      'Order Status & Tracking Assistance',
      'Safe-T & SPF Claims Filing Support',
      'Free 4x6 Thermal Label Cropper Access',
      'Dedicated WhatsApp Manager Support',
    ],
    recommendedFor: 'New manufacturers and retailers launching their first online marketplace storefront.',
  },
  {
    id: 'silver',
    name: 'Silver Package',
    badge: 'Best for Growing Sellers',
    price: 4999,
    originalPrice: 8999,
    period: 'per month',
    description: 'Comprehensive multi-platform handling across Meesho, Shopsy, Flipkart & Amazon.',
    colorTheme: 'indigo',
    platforms: ['Flipkart', 'Shopsy', 'Meesho', 'Amazon'],
    features: [
      'Multi-Platform Account Setup & Health Audits',
      'Up to 75 Catalog Listings & Variation Mapping',
      'Product Detail Page & Title SEO Optimization',
      'Daily Order, Inventory & Return Tracking',
      'Price Competitiveness & BuyBox Strategy',
      'Customer Queries & Messaging Support within SLA',
      'Label Cropper & Order SKU Count Software Included',
      'Monthly Sales & Return Analytics Report',
      'Direct WhatsApp & Call Support',
    ],
    recommendedFor: 'Active sellers and wholesalers wanting steady multi-channel GMV expansion.',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    badge: '⭐ Most Popular',
    price: 7999,
    originalPrice: 17999,
    period: 'per month',
    description: 'Dexora Commerce flagship accelerator: High-ROAS PPC Advertising, Deep SEO & Account Protection.',
    isPopular: true,
    colorTheme: 'amber',
    platforms: ['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopsy'],
    features: [
      'All 4 Dexora Pillars Fully Covered',
      'Up to 200 Optimized Catalog Listings with Rich Bullet Points',
      'Deep Keyword Mining & Backend Search Terms Optimization',
      'End-to-End Sponsored Ads (PPC) Management & TACoS Reduction',
      'Festive Event Promotions & Lightning Deals Strategy',
      'Account Health Safeguarding (VTR, LDR, ODR management)',
      'Wrong Return & Customer Fraud Dispute Management',
      'Label Cropper & Advanced SKU Packing Assistant',
      'Bi-Weekly Strategic Growth Video Call',
      'Priority 1-on-1 Senior Account Lead',
    ],
    recommendedFor: 'Established brands targeting 2x–5x sales scale, low ad spend waste & category rank 1.',
  },
  {
    id: 'platinum_export',
    name: 'Platinum Export',
    badge: 'Cross-Border Selling',
    price: 9999,
    originalPrice: 19999,
    period: 'per month',
    description: 'Sell internationally on Amazon.com USA, eBay & Etsy to earn revenue in US Dollars.',
    colorTheme: 'purple',
    platforms: ['Amazon.com USA', 'eBay Global', 'Etsy', 'Amazon UK/UAE'],
    features: [
      'International Seller Central Account Registration',
      'Cross-Border Customs & Export Compliance Guidance',
      'Global Product Listing & Multi-Currency Pricing',
      'International Search Intent & Native English Copywriting',
      'Amazon Global Selling (AGS) & FBA Inbound Shipment Plans',
      'Competitor Global Pricing & Margin Simulation',
      'International Returns & Warehousing Guidance',
      'Direct WhatsApp & Overseas Support Desk',
    ],
    recommendedFor: 'Indian exporters, handicraft makers, leather & apparel brands entering global markets.',
  },
  {
    id: 'diamond',
    name: 'Diamond Enterprise',
    badge: 'Custom Corporate',
    price: 14999,
    originalPrice: 29999,
    period: 'per month',
    description: 'Turnkey e-commerce division for enterprise manufacturers, D2C brands & Quick-Commerce.',
    colorTheme: 'emerald',
    platforms: ['Amazon + Flipkart + Myntra + Quick Commerce (Blinkit/Zepto) + Shopify'],
    features: [
      'Dedicated 3-Person Team: Account Lead, PPC Specialist & Graphic Designer',
      'Unlimited Product Listings & Catalog Maintenance',
      'Custom A+ Content & Brand Storefront Architecture',
      'Omnichannel Stock & Warehouse Inventory Sync',
      'Quick Commerce Portals (Zepto, Blinkit, Instamart) Onboarding',
      'Influencer & External Ad Campaign Strategy',
      'Weekly In-Depth P&L, Ad Spend & Return Reconciliation Call',
      'Direct Escalation Line to Dexora Leadership',
    ],
    recommendedFor: 'Large manufacturers and D2C brands requiring a dedicated outsourced e-commerce division.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'account_management',
    title: '1. Account Management',
    subtitle: 'Your Account. Our Responsibility.',
    iconName: 'ShieldCheck',
    tag: 'Pillar 1',
    description: 'We handle the complete day-to-day operations so you can focus on production. From initial registration and category un-gating to health monitoring and risk management.',
    features: [
      'Account Setup and Registration across Amazon, Flipkart, Myntra, Meesho, Shopsy',
      'Account Health Monitoring (ODR < 1%, LDR < 4%, Cancellation < 2.5%)',
      'Policy Compliance, IP warning resolutions, and Risk Management',
      'Transparent weekly performance reports, session analysis, and insights',
    ],
    deliverables: ['Weekly Health Audit Report', 'Daily Operational Checklists', 'Policy Shield Guarantee'],
    supportedMarketplaces: ['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopsy'],
  },
  {
    id: 'listing_cataloging',
    title: '2. Listing & Cataloging',
    subtitle: 'Great Listings. Better Visibility. More Sales.',
    iconName: 'SearchCheck',
    tag: 'Pillar 2',
    description: 'Turn casual browsers into high-intent buyers with keyword-optimized titles, persuasive bullet points, high-quality images, and systematic catalog uploads.',
    features: [
      'Product Research & In-depth Keyword Optimization',
      'SEO Friendly Listing Creation conforming to marketplace algorithms',
      'High Quality Product Images, Infographics & A+ Content',
      'Catalog Upload, parent-child variation mapping & attribute optimization',
    ],
    deliverables: ['Optimized Listing Master File', 'High-Res A+ Visual Mockups', 'Keyword Indexing Tracker'],
    supportedMarketplaces: ['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopsy'],
  },
  {
    id: 'order_support',
    title: '3. Order Support',
    subtitle: 'On-Time Support. Happy Customers.',
    iconName: 'HeartHandshake',
    tag: 'Pillar 3',
    description: 'Ensure prompt dispatch, streamlined returns, and rapid dispute handling to protect your seller scores and recover cash from damaged/wrong returns.',
    features: [
      'Order Processing & Courier Dispatch Tracking',
      'Return & Refund Management with strict RTO monitoring',
      'Customer Query Handling within SLA limits',
      'Escalation & Safe-T / SPF Claim Issue Resolution',
    ],
    deliverables: ['Daily Dispatch Status Logs', 'Return Claim Recovery Receipts', 'Customer Care SLA Report'],
    supportedMarketplaces: ['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopsy'],
  },
  {
    id: 'growth_solutions',
    title: '4. Growth Solutions',
    subtitle: 'Scale Your Business. Maximize Your Profits.',
    iconName: 'TrendingUp',
    tag: 'Pillar 4',
    description: 'Propel your store into top seller rankings with aggressive sales-boosting roadmaps, data-driven PPC advertising, and competitor pricing dominance.',
    features: [
      'Sales Boosting Strategies for Festive & Seasonal Events (BBD, GIF)',
      'Advertising & Sponsored Promotions Management with low TACoS',
      'Competitor Analysis, Buy-Box Win Models & Market Insights',
      'Performance Monitoring, Forecasts & Strategic Growth Planning',
    ],
    deliverables: ['PPC Performance Dashboard', 'Competitor Benchmark Report', 'Monthly Revenue Roadmap'],
    supportedMarketplaces: ['Amazon', 'Flipkart', 'Myntra', 'Meesho', 'Shopsy'],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    sellerName: 'Rajeev Sharma',
    brandName: 'Khadim Footwear Hub',
    city: 'Agra, UP',
    category: 'Footwear & Leather',
    platform: 'Amazon & Flipkart',
    rating: 5,
    growth: '₹1.8L to ₹16.4L / month',
    quote: 'Dexora Commerce transformed our manufacturing setup into a thriving marketplace business. Their Account Management and Listing SEO increased our organic orders by 9x in 4 months.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    sellerName: 'Priya Mehra',
    brandName: 'Vedic Loom Textiles',
    city: 'Jaipur, Rajasthan',
    category: 'Ethnic Wear & Sarees',
    platform: 'Myntra, Meesho & Shopsy',
    rating: 5,
    growth: '420 daily orders achieved',
    quote: 'Managing orders across Meesho and Myntra was overwhelming before Dexora Commerce. Their Order Support team resolved all our return discrepancies and improved our seller score to 4.8.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    sellerName: 'Mohit Agarwal',
    brandName: 'Urban Craft Decor',
    city: 'Moradabad, UP',
    category: 'Home & Brass Crafts',
    platform: 'Amazon.com (US Export)',
    rating: 5,
    growth: '$14,200 monthly export sales',
    quote: 'Dexora Commerce guided our US Amazon Global Selling journey. From international cataloging to FBA inbound logistics, their execution was flawless.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    sellerName: 'Ankit Jain',
    brandName: 'GizmoVolt Electronics',
    city: 'Delhi NCR',
    category: 'Consumer Electronics',
    platform: 'Amazon & Flipkart',
    rating: 5,
    growth: 'TACoS dropped from 25% to 8.8%',
    quote: 'Dexora Commerce Growth Solutions revamped our entire PPC advertising structure. We won the #1 Best Seller badge in 3 high-competition categories.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    sellerName: 'Suresh Patel',
    brandName: 'Surat Silk Creations',
    city: 'Surat, Gujarat',
    category: 'Textiles & Sarees',
    platform: 'Flipkart, Meesho & Shopsy',
    rating: 5,
    growth: 'Monthly dispatch crossed 18,000 units',
    quote: 'Before Dexora Commerce, catalogue upload errors and poor quality score were holding our warehouse back. Their team fixed all variation errors and got our catalog live in 48 hours.',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    sellerName: 'Neha Singhal',
    brandName: 'TanCraft Leatherware',
    city: 'Kanpur, UP',
    category: 'Bags & Accessories',
    platform: 'Amazon & Myntra',
    rating: 5,
    growth: 'Safe-T claim recovery: ₹3.8 Lakhs',
    quote: 'Their Order Support recovered ₹3.8 Lakhs in damaged customer returns and missing inventory SPF claims within 90 days. Their account managers treat our store as their own.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '7',
    sellerName: 'Harshvardhan Rao',
    brandName: 'PureRoots Home & Kitchen',
    city: 'Bengaluru, Karnataka',
    category: 'Cookware & Kitchen Utensils',
    platform: 'Amazon India & Blinkit',
    rating: 5,
    growth: 'Revenue up from ₹4.5L to ₹28.2L / mo',
    quote: 'Dexora Commerce revamped our Amazon Brand Store and A+ EBC content with 3D lifestyle visuals. Our listing conversion rate jumped from 6.8% to 14.2% in weeks.',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '8',
    sellerName: 'Vikram Sethi',
    brandName: 'AuraGlitz Jewels',
    city: 'Mumbai, Maharashtra',
    category: 'Fashion Jewellery',
    platform: 'Myntra, Flipkart & Amazon',
    rating: 5,
    growth: 'Festive BBD & GIF: ₹42 Lakhs GMV',
    quote: 'Their festive sale event planning for Big Billion Days and Great Indian Festival delivered unprecedented inventory velocity without stockout penalties.',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case_1',
    title: 'Footwear Manufacturer scales to Pan-India Top 10 with Dexora Commerce',
    category: 'Footwear & Men Casuals',
    location: 'Agra, UP',
    duration: '4 Months',
    beforeGmv: '₹2.1 Lakhs/mo',
    afterGmv: '₹23.8 Lakhs/mo',
    growthMultiple: '11.3x Growth',
    highlights: [
      'Revamped 100% of listings with high-conversion keywords and rich images',
      'Introduced combo packs and size variation matrices',
      'Maintained 99.8% on-time dispatch rating and zero late dispatch penalties',
      'Reduced return claim losses through daily Safe-T claim management',
    ],
  },
  {
    id: 'case_2',
    title: 'Surat Apparel Brand achieves 5.6x ROI during Festive Marketplace Events',
    category: 'Women Ethnic Wear',
    location: 'Surat, Gujarat',
    duration: '60 Days',
    beforeGmv: '₹5.5 Lakhs/mo',
    afterGmv: '₹31.2 Lakhs/mo',
    growthMultiple: '5.6x Growth',
    highlights: [
      'Secured Gold promotion tier placement across Flipkart, Myntra & Meesho',
      'Executed dynamic hourly PPC bid pacing during peak festival traffic hours',
      'Zero stockouts and 0% cancellation rate through daily inventory synchronization',
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'What marketplaces does Dexora Commerce manage?',
    answer: 'Dexora Commerce specializes in the top Indian and global e-commerce platforms: Amazon, Flipkart, Myntra, Meesho, and Shopsy, as well as Quick Commerce platforms (Blinkit/Zepto) and international export portals (Amazon USA, eBay, Etsy).',
    category: 'general',
  },
  {
    question: 'What are the 4 Core Pillars of Dexora Commerce?',
    answer: 'Our entire ecosystem is anchored in 4 dedicated pillars: 1. Account Management (Setup, health monitoring & risk compliance), 2. Listing & Cataloging (Keyword research, SEO & high-quality imagery), 3. Order Support (Daily processing, return tracking & dispute resolution), and 4. Growth Solutions (PPC advertising, festive campaigns & sales acceleration).',
    category: 'services',
  },
  {
    question: 'Do I need to share my master account passwords or OTPs with Dexora Commerce?',
    answer: 'No. Both Amazon, Flipkart and other major platforms support secure Child Accounts (sub-user permissions). You invite our team as account managers with tailored access rights, ensuring your master login, banking credentials, and OTPs remain 100% private and protected.',
    category: 'general',
  },
  {
    question: 'How do your free tools like the 4x6 Label Cropper work?',
    answer: 'Our seller tools run 100% locally in your web browser. You can crop Flipkart, Amazon, and Meesho shipping labels to standard 4x6 thermal format, calculate net profit margins after commission & RTO deductions, and generate SKU packing pick-lists. None of your data or order PDFs are ever uploaded to any server.',
    category: 'tools',
  },
  {
    question: 'Do you take any percentage or commission cut from our sales?',
    answer: 'No! Dexora Commerce operates on a flat, transparent monthly package fee. You retain 100% of your sales revenue and profits without any surprise commission cuts.',
    category: 'pricing',
  },
  {
    question: 'How do we get started with Dexora Commerce?',
    answer: 'You can request a Free Account Audit through our website form or reach out directly on WhatsApp at +91 63065 22710. An expert account lead will review your store metrics and share a tailored 90-day growth roadmap within 24 hours.',
    category: 'general',
  },
];
