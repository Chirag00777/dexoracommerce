import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowUp,
  Layers,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, CORE_MARKETPLACES, DEXORA_PILLARS } from '../data/siteData';
import { DexoraLogo } from './DexoraLogo';
import { MarketplaceLogo } from './MarketplaceLogo';
import { SocialMediaBar } from './SocialMediaBar';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuditModal: (packageName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuditModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer inline-block" onClick={scrollToTop}>
              <DexoraLogo variant="light" />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Dexora Commerce is a dedicated e-commerce account management, cataloging, order support, and sales acceleration agency. We empower Indian manufacturers, D2C brands, and sellers to dominate Amazon, Flipkart, Myntra, Meesho, and Shopsy.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Core Managed Marketplaces:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {CORE_MARKETPLACES.map(m => (
                  <span key={m.id} className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-bold">
                    <MarketplaceLogo id={m.id} size="xs" />
                    <span>{m.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="pt-3 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Official Social Media Handles:
              </span>
              <SocialMediaBar variant="default" />
            </div>
          </div>

          {/* Quick Links: The 4 Core Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              The 4 Core Pillars
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {DEXORA_PILLARS.map((p) => (
                <li key={p.id}>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-amber-400 font-bold">{p.number}.</span>
                    <span>{p.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button 
                  onClick={() => onNavigate('tools')}
                  className="text-amber-300 hover:text-amber-200 transition-colors text-left font-semibold flex items-center gap-1.5"
                >
                  <span>Free 4x6 Shipping Label Cropper</span>
                  <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-bold">Free</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Growth Packages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Growth Packages
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button 
                  onClick={() => onOpenAuditModal('Starter Package')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Starter Package (₹2,999/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAuditModal('Silver Package')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Silver Package (₹4,999/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAuditModal('Gold Package')}
                  className="hover:text-amber-400 transition-colors text-left font-semibold text-amber-400"
                >
                  Gold Package ⭐ (₹7,999/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAuditModal('Platinum Export')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Platinum Export (Amazon USA / eBay)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAuditModal('Diamond Enterprise')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Diamond Enterprise Wing
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Need Direct Help?
            </h4>
            <p className="text-xs text-slate-400">
              Speak directly with an e-commerce growth specialist right now.
            </p>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors w-full justify-center shadow-md shadow-amber-400/20"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors pt-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Disclaimer as required for independent agency */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Legal Disclaimer:</strong> Dexora Commerce is an independent e-commerce account management, consulting, cataloging, and seller growth agency. We are not officially affiliated with, endorsed by, sponsored by, or partner-contracted with Amazon, Amazon.com, Inc., Flipkart Internet Private Limited, Myntra Designs Private Limited, or Fashnear Technologies Private Limited (Meesho). All platform names, product brand logos, and trademarks are the registered property of their respective owners and are referenced solely for comparative and descriptive identification of seller services.
            </span>
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Dexora Commerce. All rights reserved. Empowering Sellers. Growing Businesses.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 font-semibold">Follow Us:</span>
            <SocialMediaBar variant="compact" />
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Refund Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
