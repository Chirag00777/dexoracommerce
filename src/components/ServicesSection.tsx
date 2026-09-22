import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Package, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ChevronRight,
  UserCheck,
  UserPlus,
  Activity,
  BarChart3,
  Layers,
  Tag,
  Image as ImageIcon,
  UploadCloud,
  PackageCheck,
  RefreshCw,
  Headphones,
  AlertCircle,
  Rocket,
  Megaphone,
  LineChart,
  Target
} from 'lucide-react';
import { DEXORA_PILLARS, CORE_MARKETPLACES, COMPANY_INFO } from '../data/siteData';
import { MarketplaceLogo } from './MarketplaceLogo';

interface ServicesSectionProps {
  onOpenAuditModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAuditModal }) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const currentPillar = DEXORA_PILLARS[activePillarIndex];

  const getPillarIcon = (name: string, size = "w-6 h-6") => {
    switch (name) {
      case 'UserCheck':
      case 'ShieldCheck':
        return <ShieldCheck className={`${size} text-amber-500`} />;
      case 'Layers':
      case 'Search':
        return <Search className={`${size} text-amber-500`} />;
      case 'Package':
        return <Package className={`${size} text-amber-500`} />;
      case 'TrendingUp':
      case 'Rocket':
        return <TrendingUp className={`${size} text-amber-500`} />;
      default:
        return <Sparkles className={`${size} text-amber-500`} />;
    }
  };

  const getPointIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserPlus':
        return <UserPlus className="w-5 h-5 text-amber-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-indigo-500" />;
      case 'Search':
        return <Search className="w-5 h-5 text-amber-500" />;
      case 'Tag':
        return <Tag className="w-5 h-5 text-rose-500" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5 text-purple-500" />;
      case 'UploadCloud':
        return <UploadCloud className="w-5 h-5 text-blue-500" />;
      case 'PackageCheck':
        return <PackageCheck className="w-5 h-5 text-amber-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-500" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-indigo-500" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-amber-500" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-pink-500" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-emerald-500" />;
      case 'Target':
        return <Target className="w-5 h-5 text-blue-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Dexora Commerce Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Complete E-Commerce Management Solutions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our specialized 4-pillar service model covers every stage of marketplace selling across Amazon, Flipkart, Myntra, Meesho, and Shopsy.
          </p>
        </div>

        {/* 4 Pillars Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-10 max-w-5xl mx-auto">
          {DEXORA_PILLARS.map((pillar, idx) => {
            const isSelected = activePillarIndex === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`flex flex-col text-left p-3.5 sm:p-4 rounded-2xl transition-all border ${
                  isSelected
                    ? 'bg-slate-950 text-white border-amber-400 shadow-lg shadow-slate-950/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Pillar {pillar.number}
                  </span>
                  {getPillarIcon(pillar.icon, "w-5 h-5")}
                </div>
                <div className={`font-display font-extrabold text-xs sm:text-sm tracking-tight ${
                  isSelected ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title}
                </div>
                <div className={`text-[11px] truncate mt-0.5 font-medium ${
                  isSelected ? 'text-amber-300' : 'text-slate-500'
                }`}>
                  {pillar.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Slide Card (High Fidelity Representation of Brochure Slides) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Content & 4 Key Bullet Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    DEXORA COMMERCE • PILLAR {currentPillar.number}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {currentPillar.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-950">
                  {currentPillar.number}. {currentPillar.title}
                </h3>
                
                <p className="text-base sm:text-lg font-bold text-amber-600 mt-1 italic">
                  "{currentPillar.subtitle}"
                </p>
              </div>

              {/* 4 Core Features from the Slide */}
              <div className="space-y-3.5 pt-1">
                {currentPillar.keyPoints.map((point, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 hover:border-amber-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
                      {getPointIcon(point.icon)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-950">
                        {point.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenAuditModal(currentPillar.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started with {currentPillar.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Dexora%20Commerce,%20I%20need%20help%20with%20${encodeURIComponent(currentPillar.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-emerald-700 px-3 py-2 text-center"
                >
                  Consult via WhatsApp →
                </a>
              </div>
            </div>

            {/* Right: Interactive Slide Mockup Visual */}
            <div className="lg:col-span-6">
              
              {/* Account Management Mockup (Slide 1) */}
              {currentPillar.mockupType === 'account_health' && (
                <div className="bg-slate-950 rounded-2xl p-5 sm:p-6 border-2 border-slate-800 shadow-2xl text-white relative">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-xs font-semibold text-slate-400 ml-2">Marketplace Health Portal</span>
                    </div>
                    <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      Health Status: Good
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400">Order Defect Rate</div>
                      <div className="text-base sm:text-lg font-black text-emerald-400 mt-1">0.35%</div>
                      <div className="text-[9px] text-slate-500">Target: &lt; 1%</div>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400">Late Dispatch Rate</div>
                      <div className="text-base sm:text-lg font-black text-emerald-400 mt-1">0.00%</div>
                      <div className="text-[9px] text-slate-500">Target: &lt; 4%</div>
                    </div>

                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <div className="text-[10px] text-slate-400">Cancellation Rate</div>
                      <div className="text-base sm:text-lg font-black text-emerald-400 mt-1">0.25%</div>
                      <div className="text-[9px] text-slate-500">Target: &lt; 2.5%</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 mb-3">
                    <div className="flex justify-between items-center text-xs mb-2">
                      <span className="text-slate-300 font-semibold">Weekly Sales & Orders Velocity</span>
                      <span className="text-emerald-400 font-bold">+184% Growth</span>
                    </div>
                    <div className="h-16 flex items-end gap-2 pt-2">
                      <div className="flex-1 bg-amber-500/30 rounded-t h-[30%]"></div>
                      <div className="flex-1 bg-amber-500/40 rounded-t h-[45%]"></div>
                      <div className="flex-1 bg-amber-500/50 rounded-t h-[55%]"></div>
                      <div className="flex-1 bg-amber-500/70 rounded-t h-[70%]"></div>
                      <div className="flex-1 bg-amber-500/80 rounded-t h-[82%]"></div>
                      <div className="flex-1 bg-amber-400 rounded-t h-[100%]"></div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Dexora Risk Protection Active</span>
                    <span className="text-amber-400 font-bold">100% Policy Compliant</span>
                  </div>
                </div>
              )}

              {/* Listing & Cataloging Mockup (Slide 2) */}
              {currentPillar.mockupType === 'listing_catalog' && (
                <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 shadow-2xl text-slate-900">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      Listing SEO & Visual Architecture
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Best Seller Rank: #1
                    </span>
                  </div>

                  <div className="flex gap-4 items-start mb-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                      <ImageIcon className="w-8 h-8 text-slate-400" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-xs font-bold text-slate-950 leading-tight">
                        Wireless Over-Ear Studio Headphones with Active Noise Cancellation
                      </div>
                      <div className="flex items-center gap-1 text-xs text-amber-500">
                        <span>★★★★★</span>
                        <span className="text-slate-500 font-semibold">(2,410 Reviews)</span>
                      </div>
                      <div className="text-lg font-black text-slate-950">
                        ₹1,499 <span className="text-xs text-slate-400 line-through">₹3,999</span>
                      </div>
                      <div className="text-[10px] text-emerald-600 font-bold">
                        In Stock • Optimized Buy-Box Win
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5 text-xs text-slate-700 mb-3">
                    <div className="font-bold text-slate-900">High-Converting Keyword Bullet Points:</div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Deep 40mm Dynamic Bass Drivers</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>60 Hours Ultra Playtime & Fast Type-C Charge</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Zero Latency Gaming & Clear Voice Calling Mic</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>A+ Content Ready</span>
                    <span className="text-amber-600 font-bold">SEO Score: 98/100</span>
                  </div>
                </div>
              )}

              {/* Order Support Mockup (Slide 3) */}
              {currentPillar.mockupType === 'order_support' && (
                <div className="bg-slate-950 rounded-2xl p-5 sm:p-6 border-2 border-slate-800 shadow-2xl text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="text-xs font-bold text-amber-300">
                      Dispatch & Returns Reconciliation Hub
                    </span>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      On-Time Dispatch: 99.8%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Today's Processed Orders</div>
                      <div className="text-2xl font-black text-white mt-1">428</div>
                      <div className="text-[10px] text-emerald-400">All Labels 4x6 Cropped</div>
                    </div>

                    <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Customer SLA Response</div>
                      <div className="text-2xl font-black text-amber-400 mt-1">&lt; 15m</div>
                      <div className="text-[10px] text-slate-400">Zero Pending Inquiries</div>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 space-y-2 mb-3 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-300">
                      <span>Safe-T Claim Recovery Audit</span>
                      <span className="text-emerald-400 font-extrabold">₹34,800 Reclaimed</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[88%]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Wrong Returns Disputed</span>
                      <span>88% Success Rate</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Courier Pickup Verification: Complete</span>
                    <span className="text-amber-400 font-bold">Protected Account Metrics</span>
                  </div>
                </div>
              )}

              {/* Growth Solutions Mockup (Slide 4) */}
              {currentPillar.mockupType === 'growth_chart' && (
                <div className="bg-slate-950 rounded-2xl p-5 sm:p-6 border-2 border-slate-800 shadow-2xl text-white">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="text-xs font-bold text-amber-400">
                      PPC Advertising & Scale Velocity
                    </span>
                    <span className="text-xs text-amber-400 font-bold bg-amber-500/20 px-2 py-0.5 rounded">
                      Average ROAS: 6.8x
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">Monthly GMV Scaled</div>
                      <div className="text-xl sm:text-2xl font-black text-amber-300 mt-1">₹31.2 Lakhs</div>
                      <div className="text-[10px] text-emerald-400">↑ 5.6x Expansion</div>
                    </div>

                    <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                      <div className="text-[11px] text-slate-400">TACoS Reduced</div>
                      <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">8.4%</div>
                      <div className="text-[10px] text-slate-400">Was 24% Previously</div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-800 space-y-2 mb-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-bold">Festive Mega Promotion Scaling</span>
                      <span className="text-amber-300 font-bold">+340% Spike</span>
                    </div>
                    <div className="h-16 flex items-end gap-2 pt-2">
                      <div className="flex-1 bg-amber-500/20 rounded-t h-[20%]"></div>
                      <div className="flex-1 bg-amber-500/30 rounded-t h-[35%]"></div>
                      <div className="flex-1 bg-amber-500/50 rounded-t h-[50%]"></div>
                      <div className="flex-1 bg-amber-500/70 rounded-t h-[75%]"></div>
                      <div className="flex-1 bg-amber-400 rounded-t h-[100%]"></div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Negative Keyword Filtering Active</span>
                    <span className="text-amber-400 font-bold">Zero Ad Spend Waste</span>
                  </div>
                </div>
              )}

              {/* 5 Core Marketplaces Strip at bottom of Slide Card */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-2 text-xs">
                <span className="text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                  Supported On:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {CORE_MARKETPLACES.map((m) => (
                    <span 
                      key={m.id}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-bold text-[11px]"
                    >
                      <MarketplaceLogo id={m.id} size="xs" />
                      <span>{m.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
