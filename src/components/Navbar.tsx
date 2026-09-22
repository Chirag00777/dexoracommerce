import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  TrendingUp, 
  Layers, 
  HelpCircle,
  Package
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';
import { DexoraLogo } from './DexoraLogo';
import { SocialMediaBar } from './SocialMediaBar';

interface NavbarProps {
  onOpenAuditModal: (packageName?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal, activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div id="top-announcement-bar" className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-300 px-2.5 py-0.5 rounded-full font-bold border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Dexora Commerce
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="truncate font-medium text-slate-300">
              Empowering Sellers on Amazon • Flipkart • Myntra • Meesho • Shopsy
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
            <a 
              id="top-call-link"
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:inline text-slate-400 text-[11px]">{COMPANY_INFO.workingHours}</span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Follow:</span>
              <SocialMediaBar variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              id="brand-logo" 
              className="cursor-pointer group"
              onClick={() => handleNavClick('hero')}
            >
              <DexoraLogo variant="full" />
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                id="nav-link-services"
                onClick={() => handleNavClick('services')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  activeSection === 'services' 
                    ? 'text-slate-950 bg-amber-50 font-bold border border-amber-200' 
                    : 'text-slate-700 hover:text-amber-700 hover:bg-slate-50'
                }`}
              >
                <Layers className="w-4 h-4 text-amber-500" />
                <span>4 Core Pillars</span>
              </button>

              <button
                id="nav-link-tools"
                onClick={() => handleNavClick('tools')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  activeSection === 'tools' 
                    ? 'text-indigo-600 bg-indigo-50 font-semibold' 
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <Wrench className="w-4 h-4 text-indigo-500" />
                <span>Seller Tools</span>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">Free</span>
              </button>

              <button
                id="nav-link-pricing"
                onClick={() => handleNavClick('pricing')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'pricing' 
                    ? 'text-slate-950 bg-slate-100 font-semibold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Plans & Pricing
              </button>

              <button
                id="nav-link-casestudies"
                onClick={() => handleNavClick('casestudies')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'casestudies' 
                    ? 'text-slate-950 bg-slate-100 font-semibold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Success Stories
              </button>

              <button
                id="nav-link-faq"
                onClick={() => handleNavClick('faq')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'faq' 
                    ? 'text-slate-950 bg-slate-100 font-semibold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                FAQ
              </button>

              <button
                id="nav-link-contact"
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-slate-950 bg-slate-100 font-semibold' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                id="header-whatsapp-btn"
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>

              <button
                id="header-audit-btn"
                onClick={() => onOpenAuditModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 active:scale-95 shadow-md shadow-amber-500/20 border border-amber-300 transition-all"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Get Free Account Audit</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-dropdown" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-1 gap-1">
              <button
                onClick={() => handleNavClick('services')}
                className="flex items-center gap-2.5 p-3 rounded-xl text-left text-slate-900 font-bold bg-amber-50/80 border border-amber-200/80"
              >
                <Layers className="w-4 h-4 text-amber-600" />
                <span>4 Core Pillars of Dexora Commerce</span>
              </button>

              <button
                onClick={() => handleNavClick('tools')}
                className="flex items-center justify-between p-3 rounded-xl text-left text-slate-800 font-semibold bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-indigo-600" />
                  <span>Free Seller Tools (Cropper & Calculator)</span>
                </div>
                <span className="bg-indigo-100 text-indigo-900 text-xs px-2 py-0.5 rounded-full font-bold">Free</span>
              </button>

              <button
                onClick={() => handleNavClick('pricing')}
                className="flex items-center gap-2.5 p-3 rounded-xl text-left text-slate-700 hover:bg-slate-50 font-medium"
              >
                <TrendingUp className="w-4 h-4 text-slate-700" />
                <span>Growth Plans & Pricing</span>
              </button>

              <button
                onClick={() => handleNavClick('casestudies')}
                className="flex items-center gap-2.5 p-3 rounded-xl text-left text-slate-700 hover:bg-slate-50 font-medium"
              >
                <ShieldCheck className="w-4 h-4 text-slate-700" />
                <span>Seller Results & Case Studies</span>
              </button>

              <button
                onClick={() => handleNavClick('faq')}
                className="flex items-center gap-2.5 p-3 rounded-xl text-left text-slate-700 hover:bg-slate-50 font-medium"
              >
                <HelpCircle className="w-4 h-4 text-slate-700" />
                <span>Frequently Asked Questions</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2.5 p-3 rounded-xl text-left text-slate-700 hover:bg-slate-50 font-medium"
              >
                <Phone className="w-4 h-4 text-slate-700" />
                <span>Contact & Direct Support</span>
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp ({COMPANY_INFO.phoneDisplay})</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Free Account Audit</span>
              </button>

              <div className="pt-2 border-t border-slate-100 flex flex-col items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Follow Us On Social Media:
                </span>
                <SocialMediaBar variant="compact" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
