import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, CORE_MARKETPLACES } from '../data/siteData';
import { MarketplaceLogo } from './MarketplaceLogo';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultPackage 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [marketplace, setMarketplace] = useState('Amazon & Flipkart');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  if (!isOpen) return null;

  const buildWhatsappUrl = () => {
    const lines = [
      `*New Store Audit Request - Dexora Commerce*`,
      `👤 *Name:* ${name.trim()}`,
      `📱 *Phone / WhatsApp:* ${phone.trim()}`,
      email.trim() ? `📧 *Email:* ${email.trim()}` : null,
      `🛒 *Marketplace:* ${marketplace}`,
      defaultPackage ? `📦 *Interested Plan:* ${defaultPackage}` : null,
      notes.trim() ? `📝 *Current Obstacle:* ${notes.trim()}` : null,
      `\n_Sent via Dexora Commerce Store Audit Form_`
    ].filter(Boolean);

    const message = lines.join('\n');
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsappUrl();
    setLastWhatsappUrl(url);
    setIsSuccess(true);

    // Immediate WhatsApp redirect
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setLastWhatsappUrl('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900">
              Connecting you to WhatsApp...
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>! Your audit details have been compiled. A WhatsApp conversation window is opening with your details prefilled.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={lastWhatsappUrl || COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/25 active:scale-98"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Open WhatsApp Chat Now</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3 h-3 text-emerald-600" />
                <span>Direct WhatsApp Consultation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                {defaultPackage ? `Book ${defaultPackage}` : 'Request Free Account Audit'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill this quick form to instantly connect with our senior marketplace specialist on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Singhal"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seller@example.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Marketplace
                </label>
                <select
                  value={marketplace}
                  onChange={(e) => setMarketplace(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  <option>Amazon & Flipkart</option>
                  <option>Amazon India Only</option>
                  <option>Flipkart Only</option>
                  <option>Myntra Fashion & Apparel</option>
                  <option>Meesho & Shopsy</option>
                  <option>All 5 Marketplaces (Amazon, Flipkart, Myntra, Meesho, Shopsy)</option>
                  <option>Export (Amazon USA / eBay / Etsy)</option>
                  <option>New Seller Onboarding</option>
                </select>

                {/* Quick Marketplace Logo Chips */}
                <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                  {CORE_MARKETPLACES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMarketplace(`${m.name} Only`)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-[10px] font-bold transition-all"
                    >
                      <MarketplaceLogo id={m.id} size="xs" />
                      <span>{m.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  What is your biggest obstacle right now? (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="e.g. Sales dropped after algorithm update, need PPC ad optimization, getting high returns..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all active:scale-98 mt-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Submit & Redirect to WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct 1-on-1 WhatsApp chat. 100% confidential.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
