import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AISummarySection } from './seller-center/AISummarySection';

export function SellerCenterTracy() {
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
        <meta name="description" content="Tracy Seller Center: Understand why homes in Tracy fail to sell due to buyer hesitation, time on market, pricing friction, competition within the same price range, and monthly payment sensitivity. Data-backed insights for expired, cancelled, and withdrawn listings." />
        
        {/* FAQ Schema for Tracy Seller Center */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why didn't my home sell in Tracy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homes in Tracy don't fail outright. Buyers often hesitate at the monthly payment, compare alternatives, and wait for clearer value before committing."
                }
              },
              {
                "@type": "Question",
                "name": "Why are buyers skipping homes in Tracy?",
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
              },
              {
                "@type": "Question",
                "name": "Why do buyers skip my home instead of making an offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Buyers often skip homes when they sense pricing friction, see better alternatives in the same price band, or calculate that the monthly payment doesn't align with perceived value. Skipping is a comparison decision, not outright rejection."
                }
              },
              {
                "@type": "Question",
                "name": "How long is too long on the market in Tracy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Tracy's current market, homes that sit beyond 45–60 days without price adjustments typically trigger increased buyer caution. Extended time signals either pricing misalignment or buyer hesitation about the value proposition."
                }
              },
              {
                "@type": "Question",
                "name": "Why didn't my price reduction bring offers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Price reductions work when they move a home into a different competitive tier or monthly payment range. Small reductions within the same price band often don't change buyer perception enough to trigger action."
                }
              },
              {
                "@type": "Question",
                "name": "Are there still buyers in my price range?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but buyers in higher price ranges ($700k+) are more selective and payment-sensitive. They compare options carefully and wait for clear value signals before committing."
                }
              },
              {
                "@type": "Question",
                "name": "Should I relist now or wait for spring?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Waiting for seasonal improvement works only if your home is already well-positioned. If pricing friction exists now, it will likely persist into spring when more inventory competes for the same buyers."
                }
              }
            ]
          })}
        </script>
        
        {/* Article/WebPage Schema with Summary */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AI Summary — Seller Center: Tracy",
            "description": "Homes in Tracy typically fail to sell due to a combination of buyer hesitation, extended time on market, pricing friction within competitive price bands, and monthly payment sensitivity. When buyers view a property, they often compare it against similar homes in the same price range and calculate whether the monthly payment justifies the purchase. If multiple properties compete in the $700k–$800k range, buyers will wait for the clearest value signal before acting. Extended days on market can amplify buyer caution, as they interpret longer listing periods as either overpricing or hidden issues. Understanding these behavioral patterns helps sellers reposition effectively.",
            "about": {
              "@type": "Thing",
              "name": "Tracy Real Estate Market Analysis"
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
                  Why Homes Don't Sell in Tracy — Explained Clearly
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
                        value="Tracy"
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

                  {/* Property Selector */}
                  <div className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Your Property Address (Optional)
                    </label>
                    <input
                      type="text"
                      value={selectedProperty}
                      onChange={(e) => setSelectedProperty(e.target.value)}
                      placeholder="e.g., 123 Main St, Tracy"
                      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Used only if you request a private seller audit.
                    </p>
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
                    <span>Price-band reality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Payment pressure logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Timing trade-offs</span>
                  </li>
                </ul>
              </div>

              {/* Column 2 — THIS IS NOT */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">THIS IS NOT</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Home valuation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>CMA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Listing presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>Sales funnel</span>
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
                onClick={() => navigate('/seller-center/tracy/why-didnt-my-home-sell')}
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
                onClick={() => navigate('/seller-center/tracy/price-vs-payment')}
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
                onClick={() => navigate('/seller-center/tracy/are-there-buyers')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Market Liquidity
                    </h3>
                    <p className="text-gray-600">
                      Which price ranges are actually moving in Tracy
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>

              {/* Aisle Card 4 */}
              <button 
                onClick={() => navigate('/seller-center/tracy/relist-or-wait')}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors text-left group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Relist vs Wait
                    </h3>
                    <p className="text-gray-600">
                      What usually happens when sellers delay
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* FRAME 4 — HOW SELLERS USE THIS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-3">
                    <div className="text-3xl font-bold text-gray-400 mb-2">1</div>
                    <p className="text-gray-700 font-medium">Read anonymously</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-3">
                    <div className="text-3xl font-bold text-gray-400 mb-2">2</div>
                    <p className="text-gray-700 font-medium">Compare explanations</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-3">
                    <div className="text-3xl font-bold text-gray-400 mb-2">3</div>
                    <p className="text-gray-700 font-medium">Decide if clarity is enough</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="bg-gray-100 rounded-lg p-6 mb-3">
                    <div className="text-3xl font-bold text-gray-400 mb-2">4</div>
                    <p className="text-gray-700 font-medium">Optional private audit</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                Many sellers read this for weeks before reaching out.
              </p>
            </div>
          </div>
        </section>

        {/* FRAME 5 — EXIT DOOR (ONLY CTA AREA) */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want This Applied to Your Exact Home?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              A private audit shows how buyer behavior applies to your address — not averages.
            </p>
            <button
              onClick={handleRequestAudit}
              className="bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg inline-flex items-center gap-2"
            >
              Request Private Seller Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* AI SUMMARY SECTION */}
        <AISummarySection
          city="Tracy"
          summary="Homes in Tracy typically fail to sell due to a combination of buyer hesitation, extended time on market, pricing friction within competitive price bands, and monthly payment sensitivity. When buyers view a property, they often compare it against similar homes in the same price range and calculate whether the monthly payment justifies the purchase. If multiple properties compete in the $700k–$800k range, buyers will wait for the clearest value signal before acting. Extended days on market can amplify buyer caution, as they interpret longer listing periods as either overpricing or hidden issues. Understanding these behavioral patterns helps sellers reposition effectively."
          faqs={[
            {
              question: "Why do buyers skip my home instead of making an offer?",
              answer: "Buyers often skip homes when they sense pricing friction, see better alternatives in the same price band, or calculate that the monthly payment doesn't align with perceived value. Skipping is a comparison decision, not outright rejection."
            },
            {
              question: "How long is too long on the market in Tracy?",
              answer: "In Tracy's current market, homes that sit beyond 45–60 days without price adjustments typically trigger increased buyer caution. Extended time signals either pricing misalignment or buyer hesitation about the value proposition."
            },
            {
              question: "Why didn't my price reduction bring offers?",
              answer: "Price reductions work when they move a home into a different competitive tier or monthly payment range. Small reductions within the same price band often don't change buyer perception enough to trigger action."
            },
            {
              question: "Are there still buyers in my price range?",
              answer: "Yes, but buyers in higher price ranges ($700k+) are more selective and payment-sensitive. They compare options carefully and wait for clear value signals before committing."
            },
            {
              question: "Should I relist now or wait for spring?",
              answer: "Waiting for seasonal improvement works only if your home is already well-positioned. If pricing friction exists now, it will likely persist into spring when more inventory competes for the same buyers."
            }
          ]}
        />
      </div>
    </>
  );
}