import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-whatsapp-btn"
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp with Dexora Commerce"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-pulse" />
          </span>
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] font-medium text-emerald-100 uppercase tracking-wider leading-none">
            Online Now
          </span>
          <span className="text-xs font-bold leading-tight">
            Chat on WhatsApp
          </span>
        </div>
      </a>
    </aside>
  );
};
