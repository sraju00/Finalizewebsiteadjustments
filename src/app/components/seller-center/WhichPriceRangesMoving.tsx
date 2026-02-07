import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WhichPriceRangesMoving() {
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
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Which Price Ranges Are Actually Moving in Tracy?
        </h1>

        {/* Subhead */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Buyer activity is uneven. Some ranges move quickly. Others stall.
        </p>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In Tracy, buyers are active, but only in specific price ranges.<br />
              Movement is concentrated, not spread evenly across the market.
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buyers operate within strict payment limits.<br />
              Once a price range feels stretched, activity drops quickly.
            </p>
            
            {/* Tracy City Context Block */}
            <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg my-6">
              <p className="text-gray-700 leading-relaxed italic">
                In Tracy, this most often affects move-up buyers and dual-income households who are sensitive to monthly payment changes as they balance affordability with space and location.
              </p>
            </div>
          </div>
        </div>

        {/* What Buyers Do Instead */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What buyers do instead</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Focus on the most affordable options in their target area</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Skip homes that feel stretched, even if similar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Wait for listings that re-enter at safer levels</span>
            </li>
          </ul>
        </div>

        {/* What Usually Happens Next */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What usually happens next</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Homes in active bands sell faster.<br />
              Homes just above them often sit without clear feedback.
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