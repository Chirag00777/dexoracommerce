import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Twitter, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/siteData';
import { SocialLink } from '../types';

interface SocialMediaBarProps {
  variant?: 'default' | 'compact' | 'with-labels' | 'dark-pills';
  className?: string;
  showTitle?: boolean;
  titleText?: string;
}

export const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  variant = 'default',
  className = '',
  showTitle = false,
  titleText = 'Connect With Us'
}) => {
  const getIcon = (iconName: SocialLink['icon']) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'Youtube':
        return <Youtube className="w-4 h-4" />;
      case 'Twitter':
        return <Twitter className="w-4 h-4" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getHoverClasses = (id: string) => {
    switch (id) {
      case 'instagram':
        return 'hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:shadow-rose-500/25';
      case 'linkedin':
        return 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-blue-500/25';
      case 'facebook':
        return 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-blue-600/25';
      case 'youtube':
        return 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-red-500/25';
      case 'x':
        return 'hover:bg-slate-900 hover:text-white hover:border-slate-700 hover:shadow-slate-500/25';
      case 'whatsapp':
        return 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-emerald-500/25';
      default:
        return 'hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400';
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            id={`social-link-${item.id}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name} (${item.handle})`}
            aria-label={`Visit Dexora Commerce on ${item.name}`}
            className="w-7 h-7 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-xs"
          >
            {getIcon(item.icon)}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'with-labels') {
    return (
      <div className={`space-y-2 ${className}`}>
        {showTitle && (
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {titleText}
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              id={`social-label-${item.id}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 ${getHoverClasses(
                item.id
              )} transition-all group shadow-sm hover:shadow-md`}
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950/80 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                {getIcon(item.icon)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold truncate group-hover:text-white">{item.name}</div>
                <div className="text-[10px] text-slate-400 group-hover:text-white/80 truncate font-mono">
                  {item.handle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'dark-pills') {
    return (
      <div className={`space-y-2 ${className}`}>
        {showTitle && (
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            {titleText}
          </span>
        )}
        <div className="flex items-center gap-2 flex-wrap">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.id}
              id={`social-pill-${item.id}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Dexora Commerce on ${item.name}`}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold ${getHoverClasses(
                item.id
              )} transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95`}
            >
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Default: Icon buttons with tooltips and brand hover effects
  return (
    <div className={`space-y-2 ${className}`}>
      {showTitle && (
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
          {titleText}
        </span>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            id={`social-default-${item.id}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name} • ${item.handle}`}
            aria-label={`Visit Dexora Commerce on ${item.name}`}
            className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/90 flex items-center justify-center text-slate-300 ${getHoverClasses(
              item.id
            )} transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md`}
          >
            {getIcon(item.icon)}
          </a>
        ))}
      </div>
    </div>
  );
};
