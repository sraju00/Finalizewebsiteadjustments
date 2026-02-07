import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function WhyDidntMyHomeSell() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/seller-center-lathrop')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Lathrop Seller Center
        </button>

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Didn't My Home Sell in Lathrop?
        </h1>

        {/* Subhead */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          Most homes don't fail. They stall. Here's why that happens in Lathrop.
        </p>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In Lathrop, most homes do not fail because buyers are gone.<br />
              They stall when buyers hesitate due to price and monthly payment pressure.
            </p>
          </div>
        </div>

        {/* Why This Happens */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Happens</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Many Lathrop buyers are move-up or first-time buyers focused on affordability.<br />
              When payments feel stretched, buyers pause instead of acting.
            </p>
            
            {/* Lathrop City Context Block */}
            <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg my-6">
              <p className="text-gray-700 leading-relaxed italic">
                In Lathrop, this often affects buyers comparing newer inventory, where payment comfort and perceived value play a larger role than features alone.
              </p>
            </div>
            
            <p>
              This is closely related to whether buyers are{' '}
              <Link 
                to="/seller-center/lathrop/skipping-vs-rejection" 
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
              <span>Compare newer or better-positioned homes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Wait for listings that feel safer financially</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span>Act quickly only when value is obvious</span>
            </li>
          </ul>
        </div>

        {/* What Usually Happens Next */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Usually Happens Next</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Without a clear shift, buyer attention fades.<br />
              Later adjustments often carry less impact.
            </p>
            <p>
              Understanding{' '}
              <Link 
                to="/seller-center/lathrop/how-long-is-too-long" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                how long is too long
              </Link>
              {' '}on the market can help sellers avoid this pattern.
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/seller-center-lathrop')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lathrop Seller Center
          </button>
        </div>
      </div>
    </div>
  );
}