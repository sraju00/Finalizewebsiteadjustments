import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function AreThereStillBuyers() {
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
          Are There Still Buyers in Lathrop?
        </h1>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yes — buyers are active in Lathrop.<br />
              But they are selective.
            </p>
          </div>
        </div>

        {/* What Selective Means */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Selective Means</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p className="font-medium">Selective buyers:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Compare more homes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Wait for clear value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Avoid uncertainty</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Context */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Context</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective markets feel slower,<br />
              even though buyers are still present.
            </p>
            <p>
              Understanding{' '}
              <Link 
                to="/seller-center/lathrop/which-price-ranges-moving" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                which price ranges are actually moving
              </Link>
              {' '}and what defines a{' '}
              <Link 
                to="/seller-center/lathrop/selective-buyer-market" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                selective buyer market
              </Link>
              {' '}helps clarify what's happening.
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
