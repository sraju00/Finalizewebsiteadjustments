import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function WhyDidntMyHomeSell() {
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
          Why Didn't My Home Sell in Tracy?
        </h1>

        {/* Subhead */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Most homes don't fail. They stall. Here's why that happens in Tracy.
        </p>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In Tracy, homes usually do not fail because there are no buyers.<br />
              They stall because buyers hesitate at certain price and payment levels.
            </p>
            <p>
              When that happens, buyers stop acting without formally rejecting the home.
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Most buyers in Tracy search by monthly payment, not just price.
            </p>
            <p>
              When a listing crosses a payment comfort threshold, buyers pause.<br />
              They do not make offers.<br />
              They do not give strong feedback.<br />
              They simply move on to other options.
            </p>
            
            {/* Tracy City Context Block */}
            <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg my-6">
              <p className="text-gray-700 leading-relaxed italic">
                In Tracy, this most often affects move-up buyers and dual-income households who are sensitive to monthly payment changes as they balance affordability with space and location.
              </p>
            </div>
            
            <p>
              This is closely related to whether buyers are{' '}
              <Link 
                to="/seller-center/tracy/skipping-vs-rejection" 
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
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Compare similar homes just below the price band</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Wait for a new listing that feels safer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Choose homes that reset urgency</span>
            </li>
          </ul>
        </div>

        {/* What Usually Happens Next */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Usually Happens Next</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If nothing changes, buyer attention continues to fade.<br />
              Later price cuts often have less impact than earlier adjustments.
            </p>
            <p>
              Understanding{' '}
              <Link 
                to="/seller-center/tracy/how-long-is-too-long" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                how long is too long
              </Link>
              {' '}on the market can help sellers avoid this pattern.
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