import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Lock, 
  Building2, 
  Users, 
  MessageSquare, 
  BadgeCheck, 
  ArrowRight,
  Zap,
  ShoppingBag,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO, ABOUT_VALUES, CORE_MARKETPLACES } from '../data/siteData';
import { MarketplaceLogo } from './MarketplaceLogo';

interface AboutSectionProps {
  onOpenAuditModal: (packageName?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="about-section" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            <span>About Dexora Commerce</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Led by Marketplace Insiders Who Built Systems from Within
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dexora Commerce is not an ordinary digital agency. We are an e-commerce operations powerhouse founded by former platform leaders who understand marketplace algorithms, seller portal mechanics, and brand growth from the inside out.
          </p>
        </div>

        {/* Founder Spotlight: Disha Singh (Ex-Flipkart Manager) */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-5 sm:p-10 lg:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Subtle background glow & watermark */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Founder Profile & Credentials */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                
                {/* Visual Founder Card */}
                <div className="relative">
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 sm:p-7 backdrop-blur-sm shadow-xl">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                      {/* Avatar representation */}
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-0.5 shadow-lg shadow-amber-500/20">
                          <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center text-center p-2">
                            <span className="font-display font-extrabold text-2xl sm:text-3xl text-amber-400">DS</span>
                            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Founder</span>
                          </div>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full border-2 border-slate-950 shadow-xs" title="Verified Flipkart Pedigree">
                          <BadgeCheck className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                          Ex-Flipkart Manager
                        </div>
                        <h3 className="font-display text-2xl font-black text-white tracking-tight">
                          {FOUNDER_INFO.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-amber-400">
                          {FOUNDER_INFO.role}
                        </p>
                        <p className="text-xs text-slate-400">
                          Dexora Commerce Solutions
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 sm:mt-6 pt-5 border-t border-slate-700/80 grid grid-cols-2 gap-2.5 sm:gap-3 text-center">
                      <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800">
                        <span className="block font-display font-black text-lg sm:text-xl text-amber-400">6+ Yrs</span>
                        <span className="text-[11px] text-slate-400">Marketplace Ops</span>
                      </div>
                      <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-800">
                        <span className="block font-display font-black text-lg sm:text-xl text-emerald-400">150+</span>
                        <span className="text-[11px] text-slate-400">Portals Managed</span>
                      </div>
                    </div>

                    <div className="mt-3.5 flex items-center justify-center sm:justify-between flex-wrap gap-2 text-[11px] text-slate-400 bg-slate-900/50 px-3 py-2 rounded-lg border border-slate-800">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Child Account Protected
                      </span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span>Pan-India Clients</span>
                    </div>
                  </div>
                </div>

                {/* Direct CTA */}
                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onOpenAuditModal('Founder Strategy Session')}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-400/20 active:scale-95 min-h-[46px]"
                  >
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Get Free Account Audit</span>
                  </button>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-700/60 transition-colors min-h-[46px]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Founder's Story & Inside Perspective */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                
                {/* Personal quote block */}
                <div className="relative pl-4 sm:pl-6 border-l-2 border-amber-400/80">
                  <p className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed italic font-light">
                    "{FOUNDER_INFO.quote}"
                  </p>
                  <p className="mt-3 text-xs sm:text-sm font-bold text-amber-300 not-italic">
                    — Disha Singh, <span className="text-slate-400 font-normal">Founder & Former Flipkart Operations Manager</span>
                  </p>
                </div>

                {/* Founder Background Story */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <p>
                    Having served inside <strong>Flipkart as an Operations & Account Manager</strong>, Disha worked directly at the nexus where marketplace algorithms meet seller business realities. She oversaw seller onboarding, catalog indexing, dispatch SLA compliance, brand gating, and account health interventions for high-volume merchant portfolios.
                  </p>
                  <p>
                    She observed that thousands of genuine Indian manufacturers and brand owners were losing lakhs of rupees each month—not due to poor product quality, but because of improper browse-node mapping, flawed keyword architecture, unaddressed return Safe-T claims, and mismanaged advertising budgets.
                  </p>
                  <p>
                    <strong>Dexora Commerce</strong> was established to bridge this critical gap: offering sellers the exact insider operational rigor, automated metric tracking, and high-velocity growth roadmaps usually reserved for enterprise brands.
                  </p>
                </div>

                {/* Specialties Grid */}
                <div className="pt-1 sm:pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 sm:mb-3">
                    Disha's Core Marketplace Specializations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {FOUNDER_INFO.specialties.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/90 border border-slate-800 p-2.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Impact Milestones Bar */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
              {FOUNDER_INFO.milestones.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-display font-black text-2xl sm:text-3xl text-amber-400 block tracking-tight">
                    {m.metric}
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-white block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-slate-400 block leading-tight">
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Why Dexora vs Generic Agencies */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
              The Dexora Insider Advantage vs. Traditional Agencies
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Why 150+ sellers trust Dexora Commerce over generic social media or marketing agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Generic Agencies (The Pain Point) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-black">
                  ✕
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900">
                    Generic Digital Marketing Agencies
                  </h4>
                  <span className="text-xs text-rose-600 font-semibold">Surface-level & Commission-heavy</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Accounts assigned to junior interns who have never logged into a Flipkart Seller Hub or Amazon Seller Central.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Demand 5% to 15% revenue cuts on top of hefty marketplace commission fees.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>No understanding of return reconciliations, Safe-T claims, or SLA breach penalties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>Treat PPC ads like generic Google/Facebook ads, causing bleeding ACOS and zero listing organic rank.</span>
                </li>
              </ul>
            </div>

            {/* Dexora Commerce (The Solution) */}
            <div className="bg-amber-500/5 border-2 border-amber-500/40 rounded-2xl p-6 sm:p-8 space-y-4 relative shadow-md">
              <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                Marketplace Insiders
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-black">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-950">
                    Dexora Commerce (Led by Disha Singh)
                  </h4>
                  <span className="text-xs text-amber-700 font-bold">Ex-Flipkart Leadership & Proven Playbooks</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Insider Operating Protocols:</strong> Listing architectures built precisely for Flipkart and Amazon algorithmic search crawlers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>0% Commission Cuts:</strong> Transparent, flat monthly packages. You keep 100% of your business revenues and profits.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Daily Claim & Dispute Recovery:</strong> Rigorous tracking of returned packages and prompt filing of Safe-T/courier dispute claims.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Performance-First PPC:</strong> Negative keyword sculpting, hourly dayparting, and target ACOS reduction for sustainable profitability.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-2xl font-bold text-slate-950">
              Our Core Operating Commitments
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              The four foundational principles guiding every store managed at Dexora Commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_VALUES.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-400/60 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-400 transition-colors flex items-center justify-center text-amber-700 group-hover:text-slate-950">
                  {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 1 && <TrendingUp className="w-6 h-6" />}
                  {idx === 2 && <Clock className="w-6 h-6" />}
                  {idx === 3 && <Lock className="w-6 h-6" />}
                </div>

                <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                  {val.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-3xl p-8 sm:p-10 text-slate-950 shadow-xl border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-slate-900/80 block">
              Direct Access to Marketplace Leaders
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to have Disha Singh's team scale your store?
            </h3>
            <p className="text-xs sm:text-sm text-slate-900 font-medium max-w-xl">
              Get an in-depth 25-point audit of your Amazon, Flipkart, or Meesho account with zero obligation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => onOpenAuditModal('Founder Audit Request')}
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm transition-all shadow-lg active:scale-95 inline-flex items-center gap-2"
            >
              <span>Book Founder Audit</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm transition-all border border-slate-300 shadow-xs"
            >
              Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
