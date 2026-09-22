import React from 'react';
import { MarketplaceLogo } from './MarketplaceLogo';

interface DexoraLogoProps {
  variant?: 'full' | 'icon' | 'badge' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const DexoraLogo: React.FC<DexoraLogoProps> = ({ 
  variant = 'full', 
  size = 'md',
  className = '' 
}) => {
  // SVG Monogram representing the interlocking Navy 'D' and Gold 'X' from the official Dexora Commerce logo
  const MonogramIcon = ({ dimension = 40 }: { dimension?: number }) => (
    <svg 
      width={dimension} 
      height={dimension} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="dexoraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id="dexoraNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B132B" />
        </linearGradient>
      </defs>

      {/* Gold 'X' back/interlocking arm */}
      <path 
        d="M38 48L62 76L48 95H34L54 68L38 48Z" 
        fill="url(#dexoraGoldGrad)" 
      />
      <path 
        d="M48 24L78 62L64 80L34 42H48Z" 
        fill="url(#dexoraGoldGrad)" 
      />

      {/* Deep Navy 'D' shape */}
      <path 
        d="M40 16H66C82 16 95 28 95 44C95 56 87 67 75 71L90 73C99 74 105 76 102 78C88 84 72 82 56 82H40V16ZM54 28V70H66C76 70 83 62 83 48C83 34 76 28 66 28H54Z" 
        fill="url(#dexoraNavyGrad)" 
      />

      {/* Gold accent sweeping streak */}
      <path 
        d="M58 48C74 44 92 46 104 38C96 44 80 50 64 52L58 48Z" 
        fill="url(#dexoraGoldGrad)" 
      />
    </svg>
  );

  if (variant === 'icon') {
    const dim = size === 'sm' ? 28 : size === 'md' ? 36 : size === 'lg' ? 48 : 64;
    return (
      <div className={`relative inline-flex items-center justify-center rounded-xl bg-white shadow-xs p-1 border border-amber-200/80 ${className}`}>
        <MonogramIcon dimension={dim} />
      </div>
    );
  }

  if (variant === 'badge') {
    // Official Circular Badge identical to Image 1
    return (
      <div className={`relative inline-flex flex-col items-center justify-center bg-white rounded-full p-4 sm:p-6 border-4 border-amber-400 shadow-xl max-w-[280px] sm:max-w-[320px] aspect-square text-center ${className}`}>
        <MonogramIcon dimension={size === 'lg' ? 72 : 60} />
        
        <div className="mt-2 text-center">
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.2em] text-slate-950 block">
            DEXORA
          </span>
          <div className="flex items-center justify-center gap-2 my-0.5">
            <span className="h-[1px] w-5 bg-amber-500"></span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-amber-700 uppercase">
              COMMERCE
            </span>
            <span className="h-[1px] w-5 bg-amber-500"></span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-wider block mt-1">
            Empowering Sellers. Growing Businesses.
          </span>
        </div>

        {/* 5 Marketplace Icons inside circular badge */}
        <div className="flex items-center justify-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <MarketplaceLogo id="amazon" size="xs" />
          <MarketplaceLogo id="flipkart" size="xs" />
          <MarketplaceLogo id="myntra" size="xs" />
          <MarketplaceLogo id="meesho" size="xs" />
          <MarketplaceLogo id="shopsy" size="xs" />
        </div>
      </div>
    );
  }

  // Full horizontal layout for Navbar and headers
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Icon frame */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-amber-300 shadow-xs flex items-center justify-center shrink-0 p-1">
        <MonogramIcon dimension={32} />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none ${isLight ? 'text-white' : 'text-slate-900'}`}>
            DEXORA
          </span>
          <span className="text-[10px] font-extrabold tracking-widest text-amber-500 uppercase px-1 py-0.2 rounded bg-amber-500/10 border border-amber-500/20">
            COMMERCE
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mt-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
          Empowering Sellers. Growing Businesses.
        </span>
      </div>
    </div>
  );
};
