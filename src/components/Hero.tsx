import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Star, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Award,
  Package,
  Headphones,
  Layers,
  Search,
  RefreshCw,
  Rocket,
  Activity,
  Check
} from 'lucide-react';
import { COMPANY_INFO, CORE_MARKETPLACES, DEXORA_PILLARS } from '../data/siteData';
import { DexoraLogo } from './DexoraLogo';
import { ThreeDTiltCard } from './ThreeDTiltCard';
import { MarketplaceLogo } from './MarketplaceLogo';

interface HeroProps {
  onOpenAuditModal: () => void;
  onScrollToTools: () => void;
  onScrollToPricing: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenAuditModal, 
  onScrollToTools, 
  onScrollToPricing,
  onScrollToServices,
}) => {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-14 lg:pb-24">
      {/* Background Amber & Navy Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm text-amber-200 font-semibold shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-white font-bold">DEXORA COMMERCE</span>
            <span className="text-amber-500">•</span>
            <span className="text-amber-300">Empowering Sellers. Growing Businesses.</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center sm:text-left space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] text-white">
              End-to-End E-Commerce Account Management & Handling on{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                Amazon, Flipkart, Myntra & Meesho
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Dexora Commerce is India&apos;s premier e-commerce handling agency. We manage daily marketplace operations, cataloging & SEO listings, dispatch & returns support, account health, and high-ROAS PPC advertising so your brand dominates search rankings.
            </p>

            {/* 4 Pillars Quick Highlights with 3D Depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <ThreeDTiltCard maxTilt={10} depth={15}>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors h-full">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">1. Account Management</div>
                    <div className="text-[11px] text-slate-400">Your Account. Our Responsibility.</div>
                  </div>
                </div>
              </ThreeDTiltCard>

              <ThreeDTiltCard maxTilt={10} depth={15}>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors h-full">
                  <Search className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">2. Listing & Cataloging</div>
                    <div className="text-[11px] text-slate-400">Great Listings. Better Visibility.</div>
                  </div>
                </div>
              </ThreeDTiltCard>

              <ThreeDTiltCard maxTilt={10} depth={15}>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors h-full">
                  <Package className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">3. Order Support</div>
                    <div className="text-[11px] text-slate-400">On-Time Support. Happy Customers.</div>
                  </div>
                </div>
              </ThreeDTiltCard>

              <ThreeDTiltCard maxTilt={10} depth={15}>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors h-full">
                  <Rocket className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-xs sm:text-sm">4. Growth Solutions</div>
                    <div className="text-[11px] text-slate-400">Scale Business. Maximize Profits.</div>
                  </div>
                </div>
              </ThreeDTiltCard>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                id="hero-audit-cta"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 text-slate-950" />
                <span>Get Free Account Audit</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                id="hero-services-cta"
                onClick={onScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 backdrop-blur-sm transition-all"
              >
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Explore 4 Pillars</span>
              </button>

              <button
                id="hero-tools-cta"
                onClick={onScrollToTools}
                className="w-full sm:w-auto text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-300 px-3 py-2 transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Free Label Cropper & Tools →</span>
              </button>
            </div>

            {/* Micro Social Proof */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-200">4.9/5 Rating</span>
                <span>by 500+ Active Sellers</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Sales Cut / Flat Monthly Fee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dexora Certified Partner Badge & Optimized Listing Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            
            {/* Floating Pill 1: Top Right */}
            <div className="hidden sm:flex absolute -top-5 -right-4 z-30 animate-float-slow pointer-events-none">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xl backdrop-blur-md">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>+380% Avg ROAS Surge</span>
              </div>
            </div>

            {/* Floating Pill 2: Bottom Left */}
            <div className="hidden sm:flex absolute top-1/3 -left-6 z-30 animate-float-reverse pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-xl backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Safe-T Claims Approved</span>
              </div>
            </div>

            {/* Main Partner Badge & Product Showcase Card */}
            <ThreeDTiltCard maxTilt={6} depth={15} className="w-full">
              <div className="w-full bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 rounded-3xl border border-amber-500/30 p-5 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                
                {/* Top Accent Ribbon */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"></div>

                {/* Dexora Commerce Official Partner Badge Header */}
                <div className="flex items-center justify-between gap-3 mb-4 pb-3.5 border-b border-slate-800/90">
                  <div className="flex items-center gap-3">
                    <div className="relative p-0.5 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-md shrink-0">
                      <div className="bg-slate-950 rounded-lg p-2 flex items-center justify-center">
                        <DexoraLogo variant="icon" size="sm" className="border-0 shadow-none bg-transparent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-black text-white text-sm tracking-wider">
                          DEXORA COMMERCE
                        </span>
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-400 text-[10px] font-bold border border-amber-500/30">
                          Verified
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">
                        Official Multi-Marketplace Growth Partner
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold shrink-0">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Partner Badge</span>
                  </div>
                </div>

                {/* Official Dexora Certified Partner Emblem */}
                <div className="flex flex-col items-center text-center my-3 py-4 px-3 bg-slate-950/60 rounded-2xl border border-slate-800/80">
                  <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-2xl mb-3">
                    <div className="bg-slate-950 rounded-full p-4 flex flex-col items-center justify-center w-32 h-32 sm:w-36 sm:h-36 border-2 border-amber-400/40">
                      <DexoraLogo variant="icon" size="lg" className="border-0 shadow-none bg-transparent" />
                      <span className="font-display font-black text-white text-base tracking-[0.18em] mt-1 block">
                        DEXORA
                      </span>
                      <span className="text-[9px] font-bold tracking-[0.25em] text-amber-400 uppercase">
                        COMMERCE
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold mb-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Official Certified Scale Partner</span>
                  </div>

                  <div className="text-sm font-extrabold text-white">
                    Empowering Sellers. Growing Businesses.
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Official Multi-Marketplace Account Management & Growth Partner
                  </div>

                  {/* 5 Core Managed Marketplaces with Icons and Names */}
                  <div className="w-full bg-slate-900/90 rounded-xl p-3 border border-slate-800 mt-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center mb-2.5">
                      5 Core Managed Marketplaces
                    </div>
                    <div className="grid grid-cols-5 gap-1.5 text-center">
                      
                      {/* Amazon */}
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-amber-500/40 transition-colors group">
                        <div className="w-7 h-7 rounded-md bg-white p-0.5 flex items-center justify-center mb-1 shadow-sm">
                          <MarketplaceLogo id="amazon" size="xs" />
                        </div>
                        <span className="text-[11px] font-extrabold text-white group-hover:text-amber-300 transition-colors">
                          Amazon
                        </span>
                      </div>

                      {/* Flipkart */}
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-blue-500/40 transition-colors group">
                        <div className="w-7 h-7 rounded-md bg-white/5 p-0.5 flex items-center justify-center mb-1">
                          <MarketplaceLogo id="flipkart" size="xs" />
                        </div>
                        <span className="text-[11px] font-extrabold text-white group-hover:text-blue-300 transition-colors">
                          Flipkart
                        </span>
                      </div>

                      {/* Myntra */}
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-rose-500/40 transition-colors group">
                        <div className="w-7 h-7 rounded-md bg-white p-0.5 flex items-center justify-center mb-1 shadow-sm">
                          <MarketplaceLogo id="myntra" size="xs" />
                        </div>
                        <span className="text-[11px] font-extrabold text-white group-hover:text-rose-300 transition-colors">
                          Myntra
                        </span>
                      </div>

                      {/* Meesho */}
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-pink-500/40 transition-colors group">
                        <div className="w-7 h-7 rounded-md bg-white/5 p-0.5 flex items-center justify-center mb-1">
                          <MarketplaceLogo id="meesho" size="xs" />
                        </div>
                        <span className="text-[11px] font-extrabold text-white group-hover:text-pink-300 transition-colors">
                          Meesho
                        </span>
                      </div>

                      {/* Shopsy */}
                      <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-purple-500/40 transition-colors group">
                        <div className="w-7 h-7 rounded-md bg-white/5 p-0.5 flex items-center justify-center mb-1">
                          <MarketplaceLogo id="shopsy" size="xs" />
                        </div>
                        <span className="text-[11px] font-extrabold text-white group-hover:text-purple-300 transition-colors">
                          Shopsy
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Aggregated Performance Counters */}
                <div className="grid grid-cols-3 gap-2 mb-3.5 text-center">
                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-lg sm:text-xl font-display font-extrabold text-amber-300">500+</div>
                    <div className="text-[10px] text-slate-400 font-medium">Sellers Grown</div>
                  </div>

                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-lg sm:text-xl font-display font-extrabold text-emerald-400">99.6%</div>
                    <div className="text-[10px] text-slate-400 font-medium">Account Health</div>
                  </div>

                  <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-lg sm:text-xl font-display font-extrabold text-white">₹30 Cr+</div>
                    <div className="text-[10px] text-slate-400 font-medium">GMV Generated</div>
                  </div>
                </div>

                {/* Direct Seller Desk WhatsApp helpline */}
                <div className="flex items-center justify-between gap-3 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Direct Seller Desk</div>
                      <div className="text-[11px] text-amber-300 font-semibold">{COMPANY_INFO.phoneDisplay}</div>
                    </div>
                  </div>

                  <a 
                    id="hero-chat-partner-cta"
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Chat Now
                  </a>
                </div>

              </div>
            </ThreeDTiltCard>

          </div>

        </div>

      </div>

      {/* 5 Core Marketplaces Bar */}
      <div className="mt-14 pt-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
            Official E-Commerce Seller Management Ecosystem
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {CORE_MARKETPLACES.map((m) => (
              <div
                key={m.id}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                  <MarketplaceLogo id={m.id} size="sm" />
                </div>
                <span className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors">{m.name}</span>
                <span className="text-[10px] font-medium text-slate-400 mt-0.5">{m.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
