import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function SellerCenterManteca() {
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
        {/* FAQ Schema for Manteca Seller Center */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why didn't my home sell in Manteca?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homes in Manteca don't fail outright. Buyers often hesitate at the monthly payment, compare alternatives, and wait for clearer value before committing."
                }
              },
              {
                "@type": "Question",
                "name": "Why are buyers skipping homes in Manteca?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Skipping happens when buyers compare a home early and decide not to seriously consider it, often due to pricing position, payment sensitivity, or perceived risk."
                }
              },
              {
                "@type": "Question",
                "name": "Is my home overpriced or are buyers just waiting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In many cases, buyers are not rejecting the home outright. They are waiting to see if better value appears before acting."
                }
              }
            ]
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
                  Why Homes Don't Sell in Manteca — Explained Clearly
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
                        value="Manteca"
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
                      <option value="500-600">$500k – $600k</option>
                      <option value="600-700">$600k – $700k</option>
                      <option value="700-800">$700k – $800k</option>
                      <option value="800+">$800k+</option>
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
                onClick={() => navigate('/seller-center/manteca/why-didnt-my-home-sell')}
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
                onClick={() => navigate('/seller-center/manteca/price-vs-payment')}
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
                onClick={() => navigate('/seller-center/manteca/are-there-buyers')}
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
                onClick={() => navigate('/seller-center/manteca/relist-or-wait')}
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
      </div>
    </>
  );
}