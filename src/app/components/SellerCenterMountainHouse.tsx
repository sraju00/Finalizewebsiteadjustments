import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AISummarySection } from './seller-center/AISummarySection';

export function SellerCenterMountainHouse() {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState('SFR');
  const [priceRange, setPriceRange] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');

  const handleAnalyze = () => {
    // For now, scroll to the aisles section
    document.getElementById('core-aisles')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestAudit = () => {
    navigate('/private-seller-audit');
  };

  return (
    <>
      <Helmet>
        {/* SEO Meta Tags for AI Summary */}
        <meta name="description" content="Mountain House Seller Center: Why homes fail to sell when HOA costs, total monthly payments, and newer construction comparisons affect buyer decisions. Central Valley master-planned community insights." />
        
        {/* FAQ Schema for Mountain House Seller Center */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why didn't my home sell in Mountain House?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homes in Mountain House don't fail outright. Buyers often hesitate at the monthly payment (including HOA), compare alternatives, and wait for clearer value before committing."
                }
              },
              {
                "@type": "Question",
                "name": "Why does my home sit when similar homes sell?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mountain House buyers compare total monthly costs (mortgage + HOA + taxes). If your total payment is higher than similar homes without a clear value justification, buyers skip your listing for better payment-to-value options."
                }
              },
              {
                "@type": "Question",
                "name": "How do HOA fees affect buyer decisions in Mountain House?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HOA fees directly impact monthly affordability calculations. Buyers factor these into their payment threshold, so a $700k home with $300/month HOA competes differently than a $720k home with $150/month HOA."
                }
              },
              {
                "@type": "Question",
                "name": "Why didn't my price reduction generate interest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Small reductions that don't shift the total monthly payment into a more competitive tier rarely change buyer behavior. Buyers need to see meaningful payment improvement relative to alternatives."
                }
              },
              {
                "@type": "Question",
                "name": "Should I wait for more buyers or relist now?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Waiting works only if your pricing is already competitive. If current buyers are passing on your home due to payment friction, more buyers won't solve the underlying issue."
                }
              }
            ]
          })}
        </script>
        
        {/* WebPage Schema with Summary */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Summary — Seller Center: Mountain House",
            "description": "Mountain House presents a master-planned community with distinct selling dynamics driven by HOA costs, newer construction comparisons, and commute-sensitive buyer pools. Homes in this market face buyer hesitation when monthly payment totals (including HOA dues) approach psychological thresholds or compete unfavorably with nearby alternatives. Because most inventory is relatively new and similar in age, buyers focus on value-per-dollar and payment affordability rather than unique features. Extended time on market signals pricing friction, especially in higher price bands where buyers are more selective and payment-conscious. Successfully selling in Mountain House requires positioning that accounts for total monthly costs, not just list price.",
            "about": {
              "@type": "Thing",
              "name": "Mountain House Real Estate Market Analysis"
            }
          })}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        {/* FRAME 1 — HERO / ENTRANCE */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* LEFT COLUMN — 60% — TEXT BLOCK */}
              <div className="lg:col-span-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Why Homes Don't Sell in Mountain House — Explained Clearly
                </h1>
                <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                  A neutral seller decision center explaining buyer behavior, pricing friction, 
                  and timing — without sales pressure.
                </p>
                <p className="text-sm text-gray-500">
                  No signup required. No listing pitch. Just explanations.
                </p>
              </div>

              {/* RIGHT COLUMN — 40% — SELECTOR CARD */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
                  {/* City (Locked) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value="Mountain House"
                        disabled
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                      />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Property Type
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value="SFR"
                          checked={propertyType === 'SFR'}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-4 h-4 text-gray-800"
                        />
                        <span className="text-gray-700">SFR</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value="Townhome"
                          checked={propertyType === 'Townhome'}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-4 h-4 text-gray-800"
                        />
                        <span className="text-gray-700">Townhome</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="propertyType"
                          value="Condo"
                          checked={propertyType === 'Condo'}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-4 h-4 text-gray-800"
                        />
                        <span className="text-gray-700">Condo</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    >
                      <option value="">Select price range...</option>
                      <option value="600-700">$600k – $700k</option>
                      <option value="700-800">$700k – $800k</option>
                      <option value="800-900">$800k – $900k</option>
                      <option value="900+">$900k+</option>
                    </select>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={handleAnalyze}
                    className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    See What's Actually Happening
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FRAME 2 — WHAT THIS IS / ISN'T CLARIFIER */}
        <section className="py-16 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 — THIS IS */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">THIS IS</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Buyer behavior explanations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Pricing pattern breakdowns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Timing context for sellers</span>
                  </li>
                </ul>
              </div>

              {/* Column 2 — THIS IS NOT */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">THIS IS NOT</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>A listing pitch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>A signup funnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Sales pressure</span>
                  </li>
                </ul>
              </div>

              {/* Column 3 — WHY THIS EXISTS */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">WHY THIS EXISTS</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most homes don't fail.<br />
                  They stall.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This center explains why.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FRAME 3 — CORE AISLES */}
        <section id="core-aisles" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Aisle Card 1 */}
              <button 
                onClick={() => navigate('/seller-center/mountain-house/why-didnt-my-home-sell')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Why Homes Don't Sell
                    </h3>
                    <p className="text-gray-600">
                      Buyer skipping vs rejection explained
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>

              {/* Aisle Card 2 */}
              <button 
                onClick={() => navigate('/seller-center/mountain-house/price-vs-payment')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Price vs Payment
                    </h3>
                    <p className="text-gray-600">
                      Why buyers pause even after price cuts
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>

              {/* Aisle Card 3 */}
              <button 
                onClick={() => navigate('/seller-center/mountain-house/are-there-still-buyers')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Market Liquidity
                    </h3>
                    <p className="text-gray-600">
                      Are there still buyers right now?
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>

              {/* Aisle Card 4 */}
              <button 
                onClick={() => navigate('/seller-center/mountain-house/relist-or-wait')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Relist vs Wait
                    </h3>
                    <p className="text-gray-600">
                      What usually happens in both scenarios
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* FRAME 4 — OPTIONAL REQUEST AUDIT CTA */}
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want a Private Seller Audit?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you'd like buyer behavior data applied to your specific address and price point,<br />
              request a private seller audit.
            </p>
            <button
              onClick={handleRequestAudit}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium inline-flex items-center gap-2"
            >
              Request Private Seller Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* AI SUMMARY SECTION */}
        <AISummarySection
          city="Mountain House"
          summary="Mountain House presents a master-planned community with distinct selling dynamics driven by HOA costs, newer construction comparisons, and commute-sensitive buyer pools. Homes in this market face buyer hesitation when monthly payment totals (including HOA dues) approach psychological thresholds or compete unfavorably with nearby alternatives. Because most inventory is relatively new and similar in age, buyers focus on value-per-dollar and payment affordability rather than unique features. Extended time on market signals pricing friction, especially in higher price bands where buyers are more selective and payment-conscious. Successfully selling in Mountain House requires positioning that accounts for total monthly costs, not just list price."
          faqs={[
            {
              question: "Why does my home sit when similar homes sell?",
              answer: "Mountain House buyers compare total monthly costs (mortgage + HOA + taxes). If your total payment is higher than similar homes without a clear value justification, buyers skip your listing for better payment-to-value options."
            },
            {
              question: "How do HOA fees affect buyer decisions in Mountain House?",
              answer: "HOA fees directly impact monthly affordability calculations. Buyers factor these into their payment threshold, so a $700k home with $300/month HOA competes differently than a $720k home with $150/month HOA."
            },
            {
              question: "Why didn't my price reduction generate interest?",
              answer: "Small reductions that don't shift the total monthly payment into a more competitive tier rarely change buyer behavior. Buyers need to see meaningful payment improvement relative to alternatives."
            },
            {
              question: "Should I wait for more buyers or relist now?",
              answer: "Waiting works only if your pricing is already competitive. If current buyers are passing on your home due to payment friction, more buyers won't solve the underlying issue."
            }
          ]}
        />
      </div>
    </>
  );
}