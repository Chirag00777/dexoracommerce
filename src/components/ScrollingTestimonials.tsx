import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  Pause, 
  ArrowRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

interface ScrollingTestimonialsProps {
  onOpenAuditModal: () => void;
}

export const ScrollingTestimonials: React.FC<ScrollingTestimonialsProps> = ({ onOpenAuditModal }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Split testimonials into two groups for two alternating scrolling rows
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      
      {/* Header & Trust Stats Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Verified Seller Ratings & Reviews</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
          What Indian Sellers Say About Dexora Commerce
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Real results from manufacturers and brand owners across Agra, Surat, Jaipur, Delhi, and Bengaluru.
        </p>

        {/* Aggregate Ratings Metric */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white border border-slate-200/90 rounded-2xl px-5 py-3 shadow-xs">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.95 / 5.0</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="text-xs text-slate-600 font-medium">
            Based on <strong className="text-slate-900 font-bold">250+ active client accounts</strong>
          </div>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Verified Seller Reviews</span>
          </div>
        </div>
      </div>

      {/* Scrolling Container with Left & Right Gradient Shadows */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Row 1: Scrolling Left */}
        <div 
          className={`animate-marquee gap-5 mb-5 ${isPaused ? 'marquee-paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {row1.map((t, idx) => (
            <div
              key={`row1-${t.id}-${idx}`}
              className="w-[310px] sm:w-[360px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between shrink-0 group cursor-default"
            >
              <div>
                {/* Header: Stars & Growth Metric */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>{t.growth}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Marketplace Info */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.sellerName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                      <span>{t.sellerName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {t.brandName} • {t.city}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                  {t.platform.split(',')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div 
          className={`animate-marquee-reverse gap-5 ${isPaused ? 'marquee-paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {row2.map((t, idx) => (
            <div
              key={`row2-${t.id}-${idx}`}
              className="w-[310px] sm:w-[360px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between shrink-0 group cursor-default"
            >
              <div>
                {/* Header: Stars & Growth Metric */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                    <span>{t.growth}</span>
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Marketplace Info */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.sellerName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1">
                      <span>{t.sellerName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {t.brandName} • {t.city}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                  {t.platform.split(',')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar: Pause/Play Control & Free Audit Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs transition-colors"
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                <span>Resume Auto-Scroll</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-slate-500 fill-slate-500" />
                <span>Pause Auto-Scroll</span>
              </>
            )}
          </button>
          <span className="text-xs text-slate-400">Hover over any review to pause reading</span>
        </div>

        <button
          onClick={onOpenAuditModal}
          className="text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
        >
          <span>Want results like these? Book Your Free Store Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
