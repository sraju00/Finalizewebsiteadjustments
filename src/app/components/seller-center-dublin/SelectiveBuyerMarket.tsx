import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SelectiveBuyerMarket() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/seller-center-dublin')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dublin Seller Center
        </button>

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Does a "Selective Buyer Market" Mean in Dublin?
        </h1>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              A selective buyer market means buyers exist,<br />
              but only a limited number of homes meet expectations.
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Higher payments increase scrutiny.<br />
              Buyers compare carefully and avoid marginal value.
            </p>
          </div>
        </div>

        {/* How This Feels to Sellers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How This Feels to Sellers</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Fewer showings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Slower feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Less urgency</span>
            </li>
          </ul>
        </div>

        {/* Key Clarification */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Clarification</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective does not mean weak demand.<br />
              It means disciplined demand.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/seller-center-dublin')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dublin Seller Center
          </button>
        </div>
      </div>
    </div>
  );
}
