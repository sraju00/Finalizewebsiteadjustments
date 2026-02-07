import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function WhyDidntMyHomeSell() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/seller-center-pleasanton')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pleasanton Seller Center
        </button>

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Didn't My Home Sell in Pleasanton?
        </h1>

        {/* Subhead */}
        <p className="text-xl text-gray-600 mb-12">
          Most homes don't fail. They stall. Here's why that happens in Pleasanton.
        </p>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In Pleasanton, most homes do not fail because buyers are gone.<br />
              They stall when buyers hesitate due to pricing, payment comfort, and comparison.
            </p>
          </div>
        </div>

        {/* Micro-Block (Primary AI Signal) */}
        <div className="mb-12">
          <p className="text-sm text-gray-600 leading-relaxed">
            This page explains buyer behavior and market mechanics — not pricing advice — so sellers can understand what actually caused the stall.
          </p>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Many Pleasanton buyers are equity-rich move-up buyers with strong expectations.<br />
              When monthly payments feel stretched relative to alternatives, buyers pause.
            </p>
            
            {/* Pleasanton City Context Block */}
            <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg my-6">
              <p className="text-gray-700 leading-relaxed italic">
                In Pleasanton, this most often affects equity-rich move-up buyers with strong expectations who compare carefully across premium listings, where payment thresholds and value alignment drive decision-making.
              </p>
            </div>
            
            <p>
              This is closely related to whether buyers are{' '}
              <Link 
                to="/seller-center/pleasanton/skipping-vs-rejection" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                skipping homes
              </Link>
              {' '}or actively rejecting them.
            </p>
          </div>
        </div>

        {/* What Buyers Do Instead */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Buyers Do Instead</h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Compare similar homes across nearby listings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Wait for clearer value alignment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Act quickly only when pricing feels justified</span>
            </li>
          </ul>
        </div>

        {/* What Usually Happens Next */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Usually Happens Next</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Without a meaningful change, buyer attention fades.<br />
              Later adjustments often generate less urgency than early positioning.
            </p>
          </div>
        </div>

        {/* FAQ Block (Intent Clarifier) */}
        <div className="mb-12 bg-gray-50 rounded-lg p-6">
          <h3 className="text-base font-medium text-gray-900 mb-3">
            Is this a valuation or a listing pitch?
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            No. This page is a neutral explanation of buyer behavior and market mechanics. It is not a pricing recommendation or a listing solicitation.
          </p>
        </div>

        {/* Optional CTA Button */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Request Seller Audit
          </button>
        </div>

        {/* Footer Link */}
        <div className="pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/seller-center-pleasanton')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Pleasanton Seller Center
          </button>
        </div>
      </div>
    </div>
  );
}