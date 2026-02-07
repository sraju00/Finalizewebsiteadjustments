import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SelectiveBuyerMarket() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/seller-center-tracy')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tracy Seller Center
        </button>

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
          What Does a "Selective Buyer Market" Mean in Tracy?
        </h1>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A selective buyer market means buyers are present,<br />
              but only a small number of homes meet their expectations.
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why this happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Higher payments make buyers cautious.<br />
              They slow down, compare more options, and avoid uncertainty.
            </p>
          </div>
        </div>

        {/* How This Feels to Sellers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How this feels to sellers</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective markets feel quiet.<br />
              Showings slow.<br />
              Feedback becomes vague.
            </p>
          </div>
        </div>

        {/* What Buyers Are Actually Doing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What buyers are actually doing</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Tracking new listings closely</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Acting only on homes that feel clearly priced</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Ignoring homes that require justification</span>
            </li>
          </ul>
        </div>

        {/* Key Clarification */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key clarification</h2>
          <div className="bg-blue-50 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed">
              Selective does not mean dead.<br />
              It means disciplined.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-700 mb-6">
            Want to understand how this applies to your specific address?
          </p>
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
          >
            Request Private Seller Audit
          </button>
        </div>
      </div>
    </div>
  );
}