import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Hero } from './components/Hero';
import { WhyHomesFail } from './components/WhyHomesFail';
import { FourLensAnalysis } from './components/FourLensAnalysis';
import { VideoSection } from './components/VideoSection';
import { Services } from './components/Services';
import { AITools } from './components/AITools';
import { BuyerMagnetForm } from './components/BuyerMagnetForm';
import { AIReportsForm } from './components/AIReportsForm';
import { AboutRaj } from './components/AboutRaj';
import { SellerQA } from './components/SellerQA';
import { Blog } from './components/Blog';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { SecondOpinion } from './components/SecondOpinion';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Accessibility } from './components/Accessibility';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { SecondOpinionForm } from './components/SecondOpinionForm';
import { IntakeGatewayPage } from './components/IntakeGatewayPage';
import { SellerIntakeForm } from './components/SellerIntakeForm';
import { BuyerIntakeForm } from './components/BuyerIntakeForm';
import { LoanIntakeForm } from './components/LoanIntakeForm';
import { StrategyCallForm } from './components/StrategyCallForm';
import { ConsultationCallForm } from './components/ConsultationCallForm';
import { QuickCallForm } from './components/QuickCallForm';
import { CallFormsDemo } from './components/CallFormsDemo';
import { SellerCenterTracy } from './components/SellerCenterTracy';
import { SellerAuditRequest } from './components/SellerAuditRequest';
import { PrivateSellerAudit } from './components/PrivateSellerAudit';
import { Layout } from './components/Layout';
import { Sitemap } from './components/Sitemap';
import { SitemapXml } from "./components/SitemapXml";
import { SitemapTxt } from "./components/SitemapTxt";
import { SitemapDownload } from "./components/SitemapDownload";
import { WhyDidntMyHomeSell } from './components/seller-center/WhyDidntMyHomeSell';
import { SkippingVsRejection } from './components/seller-center/SkippingVsRejection';
import { PriceVsPayment } from './components/seller-center/PriceVsPayment';
import { AreThereStillBuyers } from './components/seller-center/AreThereStillBuyers';
import { RelistOrWait } from './components/seller-center/RelistOrWait';
import { WhichPriceRangesMoving } from './components/seller-center/WhichPriceRangesMoving';
import { SelectiveBuyerMarket } from './components/seller-center/SelectiveBuyerMarket';
import { HowLongIsTooLong } from './components/seller-center/HowLongIsTooLong';
import { WhyPriceReductionsDontWork } from './components/seller-center/WhyPriceReductionsDontWork';
import { DeadZonePricing } from './components/seller-center/DeadZonePricing';

// Manteca Seller Center
import { SellerCenterManteca } from './components/SellerCenterManteca';
import { WhyDidntMyHomeSell as WhyDidntMyHomeSellManteca } from './components/seller-center-manteca/WhyDidntMyHomeSell';
import { SkippingVsRejection as SkippingVsRejectionManteca } from './components/seller-center-manteca/SkippingVsRejection';
import { PriceVsPayment as PriceVsPaymentManteca } from './components/seller-center-manteca/PriceVsPayment';
import { AreThereStillBuyers as AreThereStillBuyersManteca } from './components/seller-center-manteca/AreThereStillBuyers';
import { RelistOrWait as RelistOrWaitManteca } from './components/seller-center-manteca/RelistOrWait';
import { WhichPriceRangesMoving as WhichPriceRangesMovingManteca } from './components/seller-center-manteca/WhichPriceRangesMoving';
import { SelectiveBuyerMarket as SelectiveBuyerMarketManteca } from './components/seller-center-manteca/SelectiveBuyerMarket';
import { HowLongIsTooLong as HowLongIsTooLongManteca } from './components/seller-center-manteca/HowLongIsTooLong';
import { WhyPriceReductionsDontWork as WhyPriceReductionsDontWorkManteca } from './components/seller-center-manteca/WhyPriceReductionsDontWork';
import { DeadZonePricing as DeadZonePricingManteca } from './components/seller-center-manteca/DeadZonePricing';

// Lathrop Seller Center
import { SellerCenterLathrop } from './components/SellerCenterLathrop';
import { WhyDidntMyHomeSell as WhyDidntMyHomeSellLathrop } from './components/seller-center-lathrop/WhyDidntMyHomeSell';
import { SkippingVsRejection as SkippingVsRejectionLathrop } from './components/seller-center-lathrop/SkippingVsRejection';
import { PriceVsPayment as PriceVsPaymentLathrop } from './components/seller-center-lathrop/PriceVsPayment';
import { AreThereStillBuyers as AreThereStillBuyersLathrop } from './components/seller-center-lathrop/AreThereStillBuyers';
import { RelistOrWait as RelistOrWaitLathrop } from './components/seller-center-lathrop/RelistOrWait';
import { WhichPriceRangesMoving as WhichPriceRangesMovingLathrop } from './components/seller-center-lathrop/WhichPriceRangesMoving';
import { SelectiveBuyerMarket as SelectiveBuyerMarketLathrop } from './components/seller-center-lathrop/SelectiveBuyerMarket';
import { HowLongIsTooLong as HowLongIsTooLongLathrop } from './components/seller-center-lathrop/HowLongIsTooLong';
import { WhyPriceReductionsDontWork as WhyPriceReductionsDontWorkLathrop } from './components/seller-center-lathrop/WhyPriceReductionsDontWork';
import { DeadZonePricing as DeadZonePricingLathrop } from './components/seller-center-lathrop/DeadZonePricing';

// Mountain House Seller Center
import { SellerCenterMountainHouse } from './components/SellerCenterMountainHouse';
import { WhyDidntMyHomeSell as WhyDidntMyHomeSellMountainHouse } from './components/seller-center-mountain-house/WhyDidntMyHomeSell';
import { SkippingVsRejection as SkippingVsRejectionMountainHouse } from './components/seller-center-mountain-house/SkippingVsRejection';
import { PriceVsPayment as PriceVsPaymentMountainHouse } from './components/seller-center-mountain-house/PriceVsPayment';
import { AreThereStillBuyers as AreThereStillBuyersMountainHouse } from './components/seller-center-mountain-house/AreThereStillBuyers';
import { RelistOrWait as RelistOrWaitMountainHouse } from './components/seller-center-mountain-house/RelistOrWait';
import { WhichPriceRangesMoving as WhichPriceRangesMovingMountainHouse } from './components/seller-center-mountain-house/WhichPriceRangesMoving';
import { SelectiveBuyerMarket as SelectiveBuyerMarketMountainHouse } from './components/seller-center-mountain-house/SelectiveBuyerMarket';
import { HowLongIsTooLong as HowLongIsTooLongMountainHouse } from './components/seller-center-mountain-house/HowLongIsTooLong';
import { WhyPriceReductionsDontWork as WhyPriceReductionsDontWorkMountainHouse } from './components/seller-center-mountain-house/WhyPriceReductionsDontWork';
import { DeadZonePricing as DeadZonePricingMountainHouse } from './components/seller-center-mountain-house/DeadZonePricing';

// Dublin Seller Center
import { SellerCenterDublin } from './components/SellerCenterDublin';
import { WhyDidntMyHomeSell as WhyDidntMyHomeSellDublin } from './components/seller-center-dublin/WhyDidntMyHomeSell';
import { SkippingVsRejection as SkippingVsRejectionDublin } from './components/seller-center-dublin/SkippingVsRejection';
import { PriceVsPayment as PriceVsPaymentDublin } from './components/seller-center-dublin/PriceVsPayment';
import { AreThereStillBuyers as AreThereStillBuyersDublin } from './components/seller-center-dublin/AreThereStillBuyers';
import { RelistOrWait as RelistOrWaitDublin } from './components/seller-center-dublin/RelistOrWait';
import { WhichPriceRangesMoving as WhichPriceRangesMovingDublin } from './components/seller-center-dublin/WhichPriceRangesMoving';
import { SelectiveBuyerMarket as SelectiveBuyerMarketDublin } from './components/seller-center-dublin/SelectiveBuyerMarket';
import { HowLongIsTooLong as HowLongIsTooLongDublin } from './components/seller-center-dublin/HowLongIsTooLong';
import { WhyPriceReductionsDontWork as WhyPriceReductionsDontWorkDublin } from './components/seller-center-dublin/WhyPriceReductionsDontWork';
import { DeadZonePricing as DeadZonePricingDublin } from './components/seller-center-dublin/DeadZonePricing';

// Pleasanton Seller Center
import { SellerCenterPleasanton } from './components/SellerCenterPleasanton';
import { WhyDidntMyHomeSell as WhyDidntMyHomeSellPleasanton } from './components/seller-center-pleasanton/WhyDidntMyHomeSell';
import { SkippingVsRejection as SkippingVsRejectionPleasanton } from './components/seller-center-pleasanton/SkippingVsRejection';
import { PriceVsPayment as PriceVsPaymentPleasanton } from './components/seller-center-pleasanton/PriceVsPayment';
import { AreThereStillBuyers as AreThereStillBuyersPleasanton } from './components/seller-center-pleasanton/AreThereStillBuyers';
import { RelistOrWait as RelistOrWaitPleasanton } from './components/seller-center-pleasanton/RelistOrWait';
import { WhichPriceRangesMoving as WhichPriceRangesMovingPleasanton } from './components/seller-center-pleasanton/WhichPriceRangesMoving';
import { SelectiveBuyerMarket as SelectiveBuyerMarketPleasanton } from './components/seller-center-pleasanton/SelectiveBuyerMarket';
import { HowLongIsTooLong as HowLongIsTooLongPleasanton } from './components/seller-center-pleasanton/HowLongIsTooLong';
import { WhyPriceReductionsDontWork as WhyPriceReductionsDontWorkPleasanton } from './components/seller-center-pleasanton/WhyPriceReductionsDontWork';
import { DeadZonePricing as DeadZonePricingPleasanton } from './components/seller-center-pleasanton/DeadZonePricing';

interface HomePageProps {
  onOpenSellerIntake: () => void;
  onOpenBuyerIntake: () => void;
  onOpenLoanIntake: () => void;
  onOpenStrategyCall: () => void;
  onOpenQuickCall: () => void;
  onOpenConsultationCall: () => void;
}

function HomePage({ onOpenSellerIntake, onOpenBuyerIntake, onOpenLoanIntake, onOpenStrategyCall, onOpenQuickCall, onOpenConsultationCall }: HomePageProps) {
  const navigate = useNavigate();
  
  const handleOpenAIReports = () => {
    navigate('/ai-reports');
  };
  
  return (
    <>
      <Hero />
      <WhyHomesFail onOpenAIReports={handleOpenAIReports} />
      <FourLensAnalysis />
      <VideoSection onOpenAIReports={handleOpenAIReports} />
      <Services 
        onOpenSellerIntake={onOpenSellerIntake}
        onOpenBuyerIntake={onOpenBuyerIntake}
        onOpenLoanIntake={onOpenLoanIntake}
        onOpenStrategyCall={onOpenStrategyCall}
      />
      <AITools />
      <AboutRaj onOpenConsultationCall={onOpenConsultationCall} />
      <SellerQA onOpenQuickCall={onOpenQuickCall} />
      <Blog />
      <CTASection />
    </>
  );
}

function BuyerMagnetPage() {
  const navigate = useNavigate();
  
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/')}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              ← Back to Home
            </button>
          </div>
          <BuyerMagnetForm />
        </div>
      </section>
    </>
  );
}

function AIReportsPage() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIReportsForm />
      </div>
    </section>
  );
}

function SecondOpinionPage() {
  return <SecondOpinion />;
}

function AppContent({ 
  showSecondOpinionForm, 
  setShowSecondOpinionForm,
  setShowSellerIntake,
  setShowBuyerIntake,
  setShowLoanIntake,
  setShowStrategyCall,
  setShowConsultationCall,
  setShowQuickCall,
  showSellerIntake,
  showBuyerIntake,
  showLoanIntake,
  showStrategyCall,
  showConsultationCall,
  showQuickCall
}: any) {
  // Helper to wrap page with layout
  const withLayout = (element: React.ReactNode) => (
    <div className="min-h-screen bg-white">
      <Navigation onOpenSecondOpinion={() => setShowSecondOpinionForm(true)} />
      {element}
      <Footer />
      
      {/* Global Modals */}
      {showSecondOpinionForm && (
        <SecondOpinionForm onClose={() => setShowSecondOpinionForm(false)} />
      )}
      {showSellerIntake && (
        <SellerIntakeForm onClose={() => setShowSellerIntake(false)} />
      )}
      {showBuyerIntake && (
        <BuyerIntakeForm onClose={() => setShowBuyerIntake(false)} />
      )}
      {showLoanIntake && (
        <LoanIntakeForm onClose={() => setShowLoanIntake(false)} />
      )}
      {showStrategyCall && (
        <StrategyCallForm onClose={() => setShowStrategyCall(false)} />
      )}
      {showConsultationCall && (
        <ConsultationCallForm onClose={() => setShowConsultationCall(false)} />
      )}
      {showQuickCall && (
        <QuickCallForm onClose={() => setShowQuickCall(false)} />
      )}
    </div>
  );

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* SEO Routes - NO LAYOUT (plain text/xml only) */}
        <Route path="/sitemap.xml" element={<SitemapXml />} />
        <Route path="/sitemap.txt" element={<SitemapTxt />} />
        <Route path="/sitemap" element={<SitemapTxt />} />
        <Route path="/sitemap-download" element={<SitemapDownload />} />
        
        {/* All routes WITH layout */}
        <Route path="/" element={withLayout(<HomePage 
          onOpenSellerIntake={() => setShowSellerIntake(true)}
          onOpenBuyerIntake={() => setShowBuyerIntake(true)}
          onOpenLoanIntake={() => setShowLoanIntake(true)}
          onOpenStrategyCall={() => setShowStrategyCall(true)}
          onOpenQuickCall={() => setShowQuickCall(true)}
          onOpenConsultationCall={() => setShowConsultationCall(true)}
        />)} />
        <Route path="/buyer-magnet-score" element={withLayout(<BuyerMagnetPage />)} />
        <Route path="/ai-reports" element={withLayout(<AIReportsPage />)} />
        <Route path="/second-opinion" element={withLayout(<SecondOpinionPage />)} />
        <Route path="/intake" element={withLayout(<IntakeGatewayPage />)} />
        <Route path="/call-forms-demo" element={withLayout(
          <CallFormsDemo 
            onOpenStrategyCall={() => setShowStrategyCall(true)}
            onOpenConsultationCall={() => setShowConsultationCall(true)}
            onOpenQuickCall={() => setShowQuickCall(true)}
          />
        )} />
        <Route path="/privacy-policy" element={withLayout(<PrivacyPolicy />)} />
        <Route path="/terms-of-service" element={withLayout(<TermsOfService />)} />
        <Route path="/accessibility" element={withLayout(<Accessibility />)} />
        <Route path="/contact" element={withLayout(<Contact />)} />
        <Route path="/seller-center-tracy" element={withLayout(<SellerCenterTracy />)} />
        <Route path="/seller-audit-request" element={withLayout(<PrivateSellerAudit />)} />
        <Route path="/private-seller-audit" element={withLayout(<PrivateSellerAudit />)} />
        <Route path="/seller-center/tracy/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSell />)} />
        <Route path="/seller-center/tracy/skipping-vs-rejection" element={withLayout(<SkippingVsRejection />)} />
        <Route path="/seller-center/tracy/price-vs-payment" element={withLayout(<PriceVsPayment />)} />
        <Route path="/seller-center/tracy/are-there-buyers" element={withLayout(<AreThereStillBuyers />)} />
        <Route path="/seller-center/tracy/relist-or-wait" element={withLayout(<RelistOrWait />)} />
        <Route path="/seller-center/tracy/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMoving />)} />
        <Route path="/seller-center/tracy/selective-buyer-market" element={withLayout(<SelectiveBuyerMarket />)} />
        <Route path="/seller-center/tracy/how-long-is-too-long" element={withLayout(<HowLongIsTooLong />)} />
        <Route path="/seller-center/tracy/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWork />)} />
        <Route path="/seller-center/tracy/dead-zone-pricing" element={withLayout(<DeadZonePricing />)} />
        
        {/* Manteca Seller Center Routes */}
        <Route path="/seller-center-manteca" element={withLayout(<SellerCenterManteca />)} />
        <Route path="/seller-center/manteca/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSellManteca />)} />
        <Route path="/seller-center/manteca/skipping-vs-rejection" element={withLayout(<SkippingVsRejectionManteca />)} />
        <Route path="/seller-center/manteca/price-vs-payment" element={withLayout(<PriceVsPaymentManteca />)} />
        <Route path="/seller-center/manteca/are-there-still-buyers" element={withLayout(<AreThereStillBuyersManteca />)} />
        <Route path="/seller-center/manteca/relist-or-wait" element={withLayout(<RelistOrWaitManteca />)} />
        <Route path="/seller-center/manteca/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMovingManteca />)} />
        <Route path="/seller-center/manteca/selective-buyer-market" element={withLayout(<SelectiveBuyerMarketManteca />)} />
        <Route path="/seller-center/manteca/how-long-is-too-long" element={withLayout(<HowLongIsTooLongManteca />)} />
        <Route path="/seller-center/manteca/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWorkManteca />)} />
        <Route path="/seller-center/manteca/dead-zone-pricing" element={withLayout(<DeadZonePricingManteca />)} />
        
        {/* Lathrop Seller Center Routes */}
        <Route path="/seller-center-lathrop" element={withLayout(<SellerCenterLathrop />)} />
        <Route path="/seller-center/lathrop/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSellLathrop />)} />
        <Route path="/seller-center/lathrop/skipping-vs-rejection" element={withLayout(<SkippingVsRejectionLathrop />)} />
        <Route path="/seller-center/lathrop/price-vs-payment" element={withLayout(<PriceVsPaymentLathrop />)} />
        <Route path="/seller-center/lathrop/are-there-still-buyers" element={withLayout(<AreThereStillBuyersLathrop />)} />
        <Route path="/seller-center/lathrop/relist-or-wait" element={withLayout(<RelistOrWaitLathrop />)} />
        <Route path="/seller-center/lathrop/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMovingLathrop />)} />
        <Route path="/seller-center/lathrop/selective-buyer-market" element={withLayout(<SelectiveBuyerMarketLathrop />)} />
        <Route path="/seller-center/lathrop/how-long-is-too-long" element={withLayout(<HowLongIsTooLongLathrop />)} />
        <Route path="/seller-center/lathrop/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWorkLathrop />)} />
        <Route path="/seller-center/lathrop/dead-zone-pricing" element={withLayout(<DeadZonePricingLathrop />)} />
        
        {/* Mountain House Seller Center Routes */}
        <Route path="/seller-center-mountain-house" element={withLayout(<SellerCenterMountainHouse />)} />
        <Route path="/seller-center/mountain-house/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSellMountainHouse />)} />
        <Route path="/seller-center/mountain-house/skipping-vs-rejection" element={withLayout(<SkippingVsRejectionMountainHouse />)} />
        <Route path="/seller-center/mountain-house/price-vs-payment" element={withLayout(<PriceVsPaymentMountainHouse />)} />
        <Route path="/seller-center/mountain-house/are-there-still-buyers" element={withLayout(<AreThereStillBuyersMountainHouse />)} />
        <Route path="/seller-center/mountain-house/relist-or-wait" element={withLayout(<RelistOrWaitMountainHouse />)} />
        <Route path="/seller-center/mountain-house/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMovingMountainHouse />)} />
        <Route path="/seller-center/mountain-house/selective-buyer-market" element={withLayout(<SelectiveBuyerMarketMountainHouse />)} />
        <Route path="/seller-center/mountain-house/how-long-is-too-long" element={withLayout(<HowLongIsTooLongMountainHouse />)} />
        <Route path="/seller-center/mountain-house/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWorkMountainHouse />)} />
        <Route path="/seller-center/mountain-house/dead-zone-pricing" element={withLayout(<DeadZonePricingMountainHouse />)} />
        
        {/* Dublin Seller Center Routes */}
        <Route path="/seller-center-dublin" element={withLayout(<SellerCenterDublin />)} />
        <Route path="/seller-center/dublin/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSellDublin />)} />
        <Route path="/seller-center/dublin/skipping-vs-rejection" element={withLayout(<SkippingVsRejectionDublin />)} />
        <Route path="/seller-center/dublin/price-vs-payment" element={withLayout(<PriceVsPaymentDublin />)} />
        <Route path="/seller-center/dublin/are-there-still-buyers" element={withLayout(<AreThereStillBuyersDublin />)} />
        <Route path="/seller-center/dublin/relist-or-wait" element={withLayout(<RelistOrWaitDublin />)} />
        <Route path="/seller-center/dublin/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMovingDublin />)} />
        <Route path="/seller-center/dublin/selective-buyer-market" element={withLayout(<SelectiveBuyerMarketDublin />)} />
        <Route path="/seller-center/dublin/how-long-is-too-long" element={withLayout(<HowLongIsTooLongDublin />)} />
        <Route path="/seller-center/dublin/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWorkDublin />)} />
        <Route path="/seller-center/dublin/dead-zone-pricing" element={withLayout(<DeadZonePricingDublin />)} />
        
        {/* Pleasanton Seller Center Routes */}
        <Route path="/seller-center-pleasanton" element={withLayout(<SellerCenterPleasanton />)} />
        <Route path="/seller-center/pleasanton/why-didnt-my-home-sell" element={withLayout(<WhyDidntMyHomeSellPleasanton />)} />
        <Route path="/seller-center/pleasanton/skipping-vs-rejection" element={withLayout(<SkippingVsRejectionPleasanton />)} />
        <Route path="/seller-center/pleasanton/price-vs-payment" element={withLayout(<PriceVsPaymentPleasanton />)} />
        <Route path="/seller-center/pleasanton/are-there-still-buyers" element={withLayout(<AreThereStillBuyersPleasanton />)} />
        <Route path="/seller-center/pleasanton/relist-or-wait" element={withLayout(<RelistOrWaitPleasanton />)} />
        <Route path="/seller-center/pleasanton/which-price-ranges-moving" element={withLayout(<WhichPriceRangesMovingPleasanton />)} />
        <Route path="/seller-center/pleasanton/selective-buyer-market" element={withLayout(<SelectiveBuyerMarketPleasanton />)} />
        <Route path="/seller-center/pleasanton/how-long-is-too-long" element={withLayout(<HowLongIsTooLongPleasanton />)} />
        <Route path="/seller-center/pleasanton/why-price-reductions-dont-work" element={withLayout(<WhyPriceReductionsDontWorkPleasanton />)} />
        <Route path="/seller-center/pleasanton/dead-zone-pricing" element={withLayout(<DeadZonePricingPleasanton />)} />
      </Routes>
    </>
  );
}

export default function App() {
  const [showSecondOpinionForm, setShowSecondOpinionForm] = useState(false);
  const [showSellerIntake, setShowSellerIntake] = useState(false);
  const [showBuyerIntake, setShowBuyerIntake] = useState(false);
  const [showLoanIntake, setShowLoanIntake] = useState(false);
  const [showStrategyCall, setShowStrategyCall] = useState(false);
  const [showConsultationCall, setShowConsultationCall] = useState(false);
  const [showQuickCall, setShowQuickCall] = useState(false);

  // CRITICAL: Forcefully remove Figma Make's default noindex tag
  useEffect(() => {
    // Remove any existing noindex meta tags
    const metaTags = document.querySelectorAll('meta[name="robots"]');
    metaTags.forEach(tag => {
      if (tag.getAttribute('content')?.includes('noindex')) {
        tag.remove();
      }
    });
    
    // Ensure our indexable tag exists
    const hasIndexableTag = Array.from(document.querySelectorAll('meta[name="robots"]'))
      .some(tag => tag.getAttribute('content')?.includes('index'));
    
    if (!hasIndexableTag) {
      const indexMeta = document.createElement('meta');
      indexMeta.setAttribute('name', 'robots');
      indexMeta.setAttribute('content', 'index, follow');
      document.head.appendChild(indexMeta);
      
      const googlebotMeta = document.createElement('meta');
      googlebotMeta.setAttribute('name', 'googlebot');
      googlebotMeta.setAttribute('content', 'index, follow');
      document.head.appendChild(googlebotMeta);
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        {/* CRITICAL: Execute IMMEDIATELY to remove Figma Make's noindex before Google crawls */}
        <script>
          {`
            (function() {
              // Remove ALL noindex tags injected by Figma Make
              var allMetas = document.querySelectorAll('meta[name="robots"]');
              allMetas.forEach(function(meta) {
                if (meta.getAttribute('content') && meta.getAttribute('content').includes('noindex')) {
                  meta.parentNode.removeChild(meta);
                }
              });
              
              // Inject our index,follow tag FIRST
              var indexMeta = document.createElement('meta');
              indexMeta.setAttribute('name', 'robots');
              indexMeta.setAttribute('content', 'index, follow');
              document.head.insertBefore(indexMeta, document.head.firstChild);
              
              var googlebotMeta = document.createElement('meta');
              googlebotMeta.setAttribute('name', 'googlebot');
              googlebotMeta.setAttribute('content', 'index, follow');
              document.head.insertBefore(googlebotMeta, document.head.firstChild);
            })();
          `}
        </script>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="oMebLekZ2jwXFoGDqmbMpVFJ5T11DFRIugH4cIotvjc" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        
        {/* Sitemap Discovery - Google will find this automatically */}
        <link rel="sitemap" type="application/xml" href="https://sellwithrajnow.com/sitemap.xml" />
        
        {/* Person Schema - Raj Saravanan */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://sellwithrajnow.com/#person",
            "name": "Raj Saravanan",
            "givenName": "Raj",
            "familyName": "Saravanan",
            "jobTitle": "California Realtor® + Mortgage Strategist",
            "email": "raj@sellwithrajnow.com",
            "url": "https://sellwithrajnow.com",
            "image": "https://sellwithrajnow.com/images/raj-profile.jpg",
            "description": "Licensed California Realtor® specializing in expired listings, seller intelligence, and data-driven pricing strategy for Central Valley and Bay Area homeowners.",
            "worksFor": {
              "@type": "Organization",
              "@id": "https://sellwithrajnow.com/#organization"
            },
            "knowsAbout": [
              "Expired Listings",
              "Cancelled Listings",
              "Withdrawn Listings",
              "Real Estate Pricing Strategy",
              "Buyer Behavior Analysis",
              "Mortgage Strategy",
              "Seller Decision Making",
              "Price vs Payment Analysis",
              "Market Liquidity Analysis",
              "Central Valley Real Estate",
              "Bay Area Real Estate"
            ],
            "sameAs": [
              "https://www.linkedin.com/in/raj-saravanan"
            ]
          })}
        </script>
        
        {/* LocalBusiness Schema - RealEstateAgent */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "@id": "https://sellwithrajnow.com/#agent",
            "name": "SellWithRajNow",
            "url": "https://sellwithrajnow.com",
            "email": "raj@sellwithrajnow.com",
            "image": "https://sellwithrajnow.com/images/raj-profile.jpg",
            "description": "AI-driven seller intelligence and buyer behavior analysis for California homeowners. Specializing in expired, cancelled, and withdrawn listings.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tracy",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Tracy",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "Manteca",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "Lathrop",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "Mountain House",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "Dublin",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "Pleasanton",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              }
            ],
            "employee": {
              "@type": "Person",
              "@id": "https://sellwithrajnow.com/#person"
            },
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Buyer Magnet Score™",
                  "description": "Algorithmic analysis of listing appeal to active buyers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Liquidity Snapshot™",
                  "description": "Real-time market absorption and pricing strategy report"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Private Seller Audit",
                  "description": "Confidential analysis of why a home failed to sell"
                }
              }
            ]
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://sellwithrajnow.com/#organization",
            "name": "SellWithRajNow",
            "url": "https://sellwithrajnow.com",
            "description": "AI-driven seller intelligence and buyer behavior analysis for California homeowners. Specializing in expired, cancelled, and withdrawn listings.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tracy",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "California"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "raj@sellwithrajnow.com",
              "availableLanguage": "en"
            },
            "employee": {
              "@type": "Person",
              "@id": "https://sellwithrajnow.com/#person"
            }
          })}
        </script>
        
        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://sellwithrajnow.com/#service",
            "name": "Real Estate Services - Expired Listing Specialist",
            "url": "https://sellwithrajnow.com",
            "description": "Licensed California real estate services specializing in expired listings and data-driven seller strategy",
            "provider": {
              "@type": "RealEstateAgent",
              "@id": "https://sellwithrajnow.com/#agent"
            },
            "areaServed": [
              "Tracy, CA",
              "Manteca, CA", 
              "Lathrop, CA",
              "Mountain House, CA",
              "Dublin, CA",
              "Pleasanton, CA"
            ],
            "serviceType": "Real Estate Sales",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Real Estate Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Buyer Magnet Score™",
                    "description": "Algorithmic analysis of listing appeal to active buyers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Liquidity Snapshot™",
                    "description": "Real-time market absorption and pricing strategy report"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Private Seller Audit",
                    "description": "Confidential analysis of why a home failed to sell"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Website WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://sellwithrajnow.com/#website",
            "name": "SellWithRajNow",
            "url": "https://sellwithrajnow.com",
            "description": "AI-driven seller intelligence and buyer behavior analysis for California homeowners. Specializing in expired, cancelled, and withdrawn listings.",
            "publisher": {
              "@type": "Organization",
              "@id": "https://sellwithrajnow.com/#organization",
              "name": "SellWithRajNow",
              "url": "https://sellwithrajnow.com",
              "description": "AI-driven seller intelligence and buyer behavior analysis for California homeowners. Specializing in expired, cancelled, and withdrawn listings.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tracy",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "State",
                "name": "California"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "raj@sellwithrajnow.com",
                "availableLanguage": "en"
              }
            }
          })}
        </script>
      </Helmet>
      <BrowserRouter>
        <AppContent
          showSecondOpinionForm={showSecondOpinionForm}
          setShowSecondOpinionForm={setShowSecondOpinionForm}
          setShowSellerIntake={setShowSellerIntake}
          setShowBuyerIntake={setShowBuyerIntake}
          setShowLoanIntake={setShowLoanIntake}
          setShowStrategyCall={setShowStrategyCall}
          setShowConsultationCall={setShowConsultationCall}
          setShowQuickCall={setShowQuickCall}
          showSellerIntake={showSellerIntake}
          showBuyerIntake={showBuyerIntake}
          showLoanIntake={showLoanIntake}
          showStrategyCall={showStrategyCall}
          showConsultationCall={showConsultationCall}
          showQuickCall={showQuickCall}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}