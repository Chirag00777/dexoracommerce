/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolsSuite } from './components/ToolsSuite';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GrowthAuditSection } from './components/GrowthAuditSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = (packageName?: string) => {
    setSelectedPackageForModal(packageName);
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
    setSelectedPackageForModal(undefined);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const mapping: Record<string, string> = {
      tools: 'free-tools-section',
      services: 'services-section',
      pricing: 'pricing-section',
      casestudies: 'casestudies-section',
      faq: 'faq-section',
      contact: 'contact-section',
    };

    const targetElementId = mapping[sectionId] || sectionId;
    const el = document.getElementById(targetElementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Navigation */}
      <Navbar 
        onOpenAuditModal={handleOpenAuditModal}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onOpenAuditModal={() => handleOpenAuditModal()}
          onScrollToTools={() => handleNavigate('tools')}
          onScrollToPricing={() => handleNavigate('pricing')}
          onScrollToServices={() => handleNavigate('services')}
        />

        <ToolsSuite />

        <ServicesSection 
          onOpenAuditModal={handleOpenAuditModal}
        />

        <PricingSection 
          onOpenAuditModal={handleOpenAuditModal}
        />

        <CaseStudiesSection 
          onOpenAuditModal={() => handleOpenAuditModal()}
        />

        <GrowthAuditSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenAuditModal={handleOpenAuditModal}
      />

      {/* Interactive Consultation / Audit Modal */}
      <AuditModal 
        isOpen={isAuditModalOpen}
        onClose={handleCloseAuditModal}
        defaultPackage={selectedPackageForModal}
      />

      {/* Quick WhatsApp Support Floating Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
