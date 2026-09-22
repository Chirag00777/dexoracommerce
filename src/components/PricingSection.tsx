import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  HelpCircle,
  Zap,
  Globe,
  Award,
  Clock
} from 'lucide-react';
import { PACKAGES, COMPANY_INFO } from '../data/siteData';
import { ThreeDTiltCard } from './ThreeDTiltCard';

interface PricingSectionProps {
  onOpenAuditModal: (packageName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenAuditModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-indigo-500/15 text-indigo-300 border border-indigo-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Transparent, Flat Monthly Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Plans Built for Every Stage of Seller Growth
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            Zero revenue cuts or hidden commissions. You keep 100% of your sales GMV. All plans include full access to our proprietary Label Cropper & SKU Counter software.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-7 inline-flex items-center bg-slate-800/90 border border-slate-700 p-1 rounded-xl">
            <button
              id="billing-toggle-monthly"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              id="billing-toggle-quarterly"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Quarterly (3 Months)</span>
              <span className="bg-emerald-400 text-slate-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const calculatedPrice = billingCycle === 'quarterly' 
              ? Math.round(pkg.price * 0.85) 
              : pkg.price;

            const isGold = pkg.id === 'gold';
            const isExport = pkg.id === 'platinum_export';

            return (
              <ThreeDTiltCard
                key={pkg.id}
                maxTilt={8}
                depth={15}
                className="h-full flex flex-col"
              >
                <div
                  id={`package-card-${pkg.id}`}
                  className={`rounded-2xl transition-all duration-300 flex flex-col justify-between relative h-full ${
                    isGold
                      ? 'bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900 border-2 border-amber-400 shadow-2xl shadow-indigo-500/20'
                      : 'bg-slate-800/80 hover:bg-slate-800 border border-slate-700 shadow-lg'
                  } p-6 sm:p-7`}
                >
                {/* Top Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold shadow-md uppercase tracking-wider ${
                      isGold 
                        ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950' 
                        : isExport 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-indigo-600 text-white'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Title & Platforms */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-xl text-white">
                      {pkg.name}
                    </h3>
                    {isExport && <Globe className="w-5 h-5 text-purple-400" />}
                    {isGold && <Award className="w-5 h-5 text-amber-400" />}
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-4">
                    {pkg.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="border-y border-slate-700/80 py-4 my-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                        ₹{calculatedPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        / {billingCycle === 'monthly' ? 'month' : 'mo (billed quarterly)'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500 line-through">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}/mo
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                        Limited Festive Offer
                      </span>
                    </div>
                  </div>

                  {/* Platforms Covered */}
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Platforms Covered:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pkg.platforms.map((plat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-900/90 text-slate-200 px-2 py-0.5 rounded border border-slate-700 font-medium"
                        >
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      What's Included:
                    </span>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Buttons */}
                <div className="pt-4 border-t border-slate-700/80 space-y-2">
                  <button
                    id={`btn-choose-package-${pkg.id}`}
                    onClick={() => onOpenAuditModal(pkg.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isGold
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-400/20 hover:scale-[1.02]'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Dexora%20Commerce,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20for%20my%20store.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-emerald-400 hover:bg-slate-900 flex items-center justify-center gap-1.5 transition-colors border border-transparent hover:border-emerald-500/30"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-slate-400 text-center pt-1">
                    {pkg.recommendedFor}
                  </p>
                </div>

              </div>
            </ThreeDTiltCard>
            );
          })}
        </div>

        {/* Custom Corporate Note */}
        <div className="mt-12 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                Have 500+ SKUs or Multi-Warehouse Requirements?
              </h4>
              <p className="text-xs text-slate-400">
                We craft tailored enterprise solutions including Quick-Commerce (Blinkit/Zepto), customized warehouse fulfillment, and dedicated brand managers.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenAuditModal('Custom Enterprise Solution')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Request Custom Enterprise Quote
          </button>
        </div>

      </div>
    </section>
  );
};
