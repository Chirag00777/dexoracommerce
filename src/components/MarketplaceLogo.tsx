import React from 'react';

export type MarketplaceId = 'amazon' | 'flipkart' | 'meesho' | 'shopsy' | 'myntra' | string;

interface MarketplaceLogoProps {
  id: MarketplaceId;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showName?: boolean;
  nameClassName?: string;
}

const base = (import.meta.env.BASE_URL || './').endsWith('/')
  ? (import.meta.env.BASE_URL || './')
  : `${import.meta.env.BASE_URL || './'}/`;

const logoPaths: Record<string, string> = {
  amazon: `${base}assets/marketplaces/amazon.svg`,
  flipkart: `${base}assets/marketplaces/flipkart.svg`,
  meesho: `${base}assets/marketplaces/meesho.svg`,
  shopsy: `${base}assets/marketplaces/shopsy.svg`,
  myntra: `${base}assets/marketplaces/myntra.svg`,
};

const defaultNames: Record<string, string> = {
  amazon: 'Amazon',
  flipkart: 'Flipkart',
  meesho: 'Meesho',
  shopsy: 'Shopsy',
  myntra: 'Myntra',
};

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-14 h-14',
};

export const MarketplaceLogo: React.FC<MarketplaceLogoProps> = ({
  id,
  size = 'md',
  className = '',
  showName = false,
  nameClassName = '',
}) => {
  const normalizedId = id.toLowerCase().trim();
  const src = logoPaths[normalizedId] || logoPaths.amazon;
  const displayName = defaultNames[normalizedId] || id;

  const imgElement = (
    <img
      src={src}
      alt={`${displayName} official logo`}
      className={`${sizeClasses[size]} object-contain shrink-0 ${className}`}
      loading="lazy"
    />
  );

  if (!showName) {
    return imgElement;
  }

  return (
    <div className="inline-flex items-center gap-1.5 shrink-0">
      {imgElement}
      <span className={nameClassName || 'font-extrabold text-sm'}>
        {displayName}
      </span>
    </div>
  );
};
