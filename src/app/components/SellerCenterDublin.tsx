import { ArrowLeft, Home, TrendingUp, DollarSign, Users, Clock, BarChart3, Target, AlertCircle, RefreshCw, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function SellerCenterDublin() {
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] = useState('');

  const handleRequestAudit = () => {
    navigate('/private-seller-audit');
  };

  return (
    <>
      <Helmet>
        {/* FAQ Schema for Dublin Seller Center */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why didn't my home sell in Dublin?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most homes in Dublin don't fail outright. Buyers often hesitate at the monthly payment, compare alternatives, and wait for clearer value before committing."
                }
              },
              {
                "@type": "Question",
                "name": "Why are buyers skipping homes in Dublin?",
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
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Main Site
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dublin Seller Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Market analysis tools and insights for Dublin homeowners
            </p>
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
              placeholder="e.g., 555 Dublin Blvd, Dublin"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-2">
              Used only if you request a private seller audit.
            </p>
          </div>

          {/* CTA */}
          <div className="mb-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Request Your Dublin Seller Audit
            </h2>
            <p className="text-gray-700 mb-6">
              Get a data-backed analysis of why your home hasn't sold and what actually changes buyer behavior in Dublin.
            </p>
            <button
              onClick={handleRequestAudit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Request Seller Audit
            </button>
          </div>

          {/* Core Aisles - 10 Content Pages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Analysis</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Page 1 */}
              <button
                onClick={() => navigate('/seller-center/dublin/why-didnt-my-home-sell')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <Home className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Why Didn't My Home Sell?</h3>
                <p className="text-sm text-gray-600">
                  Most homes stall, not fail. Here's why.
                </p>
              </button>

              {/* Page 2 */}
              <button
                onClick={() => navigate('/seller-center/dublin/skipping-vs-rejection')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <Target className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Skipping vs Rejection</h3>
                <p className="text-sm text-gray-600">
                  Are buyers avoiding you or just hesitating?
                </p>
              </button>

              {/* Page 3 */}
              <button
                onClick={() => navigate('/seller-center/dublin/price-vs-payment')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <DollarSign className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Price vs Payment</h3>
                <p className="text-sm text-gray-600">
                  What Dublin buyers actually react to.
                </p>
              </button>

              {/* Page 4 */}
              <button
                onClick={() => navigate('/seller-center/dublin/are-there-buyers')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <Users className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Are There Buyers?</h3>
                <p className="text-sm text-gray-600">
                  Yes — but they're selective.
                </p>
              </button>

              {/* Page 5 */}
              <button
                onClick={() => navigate('/seller-center/dublin/relist-or-wait')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <RefreshCw className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Relist or Wait?</h3>
                <p className="text-sm text-gray-600">
                  What usually happens in Dublin.
                </p>
              </button>

              {/* Page 6 */}
              <button
                onClick={() => navigate('/seller-center/dublin/which-price-ranges-moving')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <TrendingUp className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Which Ranges Are Moving?</h3>
                <p className="text-sm text-gray-600">
                  Buyer activity is concentrated.
                </p>
              </button>

              {/* Page 7 */}
              <button
                onClick={() => navigate('/seller-center/dublin/selective-buyer-market')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <BarChart3 className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Selective Buyer Market</h3>
                <p className="text-sm text-gray-600">
                  Disciplined demand, not weak demand.
                </p>
              </button>

              {/* Page 8 */}
              <button
                onClick={() => navigate('/seller-center/dublin/how-long-is-too-long')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <Clock className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">How Long Is Too Long?</h3>
                <p className="text-sm text-gray-600">
                  Time changes buyer perception.
                </p>
              </button>

              {/* Page 9 */}
              <button
                onClick={() => navigate('/seller-center/dublin/why-price-reductions-dont-work')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <AlertCircle className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Price Reductions Don't Work</h3>
                <p className="text-sm text-gray-600">
                  When cuts don't change perception.
                </p>
              </button>

              {/* Page 10 */}
              <button
                onClick={() => navigate('/seller-center/dublin/dead-zone-pricing')}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all text-left"
              >
                <Layers className="w-8 h-8 text-gray-700 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Dead Zone Pricing</h3>
                <p className="text-sm text-gray-600">
                  Where buyer attention drops sharply.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}