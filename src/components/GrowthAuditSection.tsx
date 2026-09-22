import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Clock,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, CORE_MARKETPLACES } from '../data/siteData';
import { MarketplaceLogo } from './MarketplaceLogo';
import { SocialMediaBar } from './SocialMediaBar';

export const GrowthAuditSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [brandName, setBrandName] = useState('');
  const [marketplace, setMarketplace] = useState('Amazon & Flipkart');
  const [monthlySales, setMonthlySales] = useState('₹50,000 - ₹2 Lakhs');
  const [mainGoal, setMainGoal] = useState('Boost Organic Search & Sales');
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsappUrl, setLastWhatsappUrl] = useState('');

  const buildWhatsappUrl = () => {
    const lines = [
      `*New Account Audit Request - Dexora Commerce*`,
      `👤 *Name:* ${name.trim()}`,
      `📱 *Phone / WhatsApp:* ${phone.trim()}`,
      brandName.trim() ? `🏢 *Brand / Store:* ${brandName.trim()}` : null,
      `🛒 *Marketplace:* ${marketplace}`,
      `📊 *Current Sales:* ${monthlySales}`,
      `🎯 *Primary Goal:* ${mainGoal}`,
      `\n_Sent via Dexora Commerce Website Audit Form_`
    ].filter(Boolean);

    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsappUrl();
    setLastWhatsappUrl(url);
    setSubmitted(true);

    // Immediate WhatsApp redirect
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  };

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact & Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Get in Touch with Dexora Commerce</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Ready to Accelerate Your Online Sales?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Book a 1-on-1 strategic growth audit with an experienced e-commerce account lead. We analyze your listings, advertising waste, and buy-box share within 24 hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Call Our Helpline</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Direct WhatsApp Chat</div>
                  <div className="text-base font-bold text-emerald-950">
                    {COMPANY_INFO.phoneDisplay} (Instant Reply)
                  </div>
                </div>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100/90 border border-slate-200 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-800 group-hover:bg-amber-600 text-white flex items-center justify-center shrink-0 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Inquiries</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {COMPANY_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-11 h-11 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Working Hours: {COMPANY_INFO.workingHours}</span>
            </div>

            {/* Official Social Media Handles */}
            <div className="pt-3 border-t border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Follow Us For Daily E-Commerce Growth Tips:
              </span>
              <SocialMediaBar variant="default" />
            </div>
          </div>

          {/* Right Column: Free Audit Request Form with Direct WhatsApp Redirect */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-800 relative overflow-hidden">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Instant WhatsApp Connect</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                  Request Free Account Audit & Growth Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your store details. You will be instantly redirected to WhatsApp with your personalized audit request.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-2xl p-6 sm:p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">
                    Connecting to WhatsApp, {name}!
                  </h4>
                  <p className="text-sm text-emerald-200 max-w-md mx-auto leading-relaxed">
                    Your details for <strong>{brandName || 'your store'}</strong> on <strong>{marketplace}</strong> are ready. If WhatsApp did not open automatically, tap the button below.
                  </p>
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={lastWhatsappUrl || COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 w-full sm:w-auto"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Open WhatsApp Chat Now</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 rounded-xl text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      Edit details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Brand / Business Name
                      </label>
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="e.g. Apex Footwear Hub"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Target Marketplace
                      </label>
                      <select
                        value={marketplace}
                        onChange={(e) => setMarketplace(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option>Amazon & Flipkart</option>
                        <option>Amazon India Only</option>
                        <option>Flipkart Only</option>
                        <option>Myntra Fashion & Apparel</option>
                        <option>Meesho & Shopsy</option>
                        <option>All 5 Domestic (Amazon + Flipkart + Myntra + Meesho + Shopsy)</option>
                        <option>Export (Amazon.com USA / eBay / Etsy)</option>
                        <option>New Seller (Not registered yet)</option>
                      </select>

                      {/* Quick Marketplace Logo Chips */}
                      <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                        {CORE_MARKETPLACES.map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMarketplace(`${m.name} Only`)}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-300 text-[10px] font-bold transition-all"
                          >
                            <MarketplaceLogo id={m.id} size="xs" />
                            <span>{m.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Current Monthly Sales
                      </label>
                      <select
                        value={monthlySales}
                        onChange={(e) => setMonthlySales(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option>Below ₹50,000 / month</option>
                        <option>₹50,000 - ₹2 Lakhs / month</option>
                        <option>₹2 Lakhs - ₹10 Lakhs / month</option>
                        <option>₹10 Lakhs - ₹50 Lakhs / month</option>
                        <option>₹50 Lakhs+ / month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Primary Growth Goal
                      </label>
                      <select
                        value={mainGoal}
                        onChange={(e) => setMainGoal(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-800/90 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option>Boost Organic Search & Sales</option>
                        <option>Lower PPC / Ad Spend (Reduce TACoS)</option>
                        <option>Resolve Return & Safe-T Claim Losses</option>
                        <option>Improve Account Health / Remove Warnings</option>
                        <option>Complete End-to-End Account Outsourcing</option>
                        <option>Launch Global Export Selling</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <MessageSquare className="w-4 h-4 fill-slate-950" />
                      <span>Submit & Redirect to WhatsApp</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant WhatsApp direct connection. No spam guaranteed.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
