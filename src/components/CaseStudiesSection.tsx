import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  MapPin, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { CASE_STUDIES } from '../data/siteData';
import { ScrollingTestimonials } from './ScrollingTestimonials';

interface CaseStudiesProps {
  onOpenAuditModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({ onOpenAuditModal }) => {
  return (
    <section id="casestudies-section" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Real Indian Sellers. Explosive GMV Growth.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            See how manufacturers and brand owners across Agra, Jaipur, Surat, and Delhi scaled their online marketplace stores with Dexora Commerce.
          </p>
        </div>

        {/* Case Studies Deep Dive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              id={study.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-indigo-200">
                      {study.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {study.location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    Duration: {study.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4">
                  {study.title}
                </h3>

                {/* Growth Metric Box */}
                <div className="grid grid-cols-3 gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200/80 mb-5">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Starting GMV</span>
                    <span className="text-base font-bold text-slate-700">{study.beforeGmv}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Current GMV</span>
                    <span className="text-base font-extrabold text-indigo-600">{study.afterGmv}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-700 block font-semibold">Multiple</span>
                    <span className="text-base font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                      {study.growthMultiple}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Execution Highlights:
                  </span>
                  {study.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Marketplace Seller Audit
                </span>
                <button
                  onClick={onOpenAuditModal}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Replicate this growth</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Scrolling Testimonials in Ratings Section */}
        <ScrollingTestimonials onOpenAuditModal={onOpenAuditModal} />

      </div>
    </section>
  );
};
