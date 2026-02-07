import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function AreThereStillBuyers() {
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
          Are There Still Buyers in Tracy?
        </h1>

        {/* Direct Answer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yes — buyers are active in Tracy.<br />
              But they are selective.
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explanation</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective buyers compare more homes,<br />
              wait for clear value,<br />
              and avoid uncertainty.
            </p>
          </div>
        </div>

        {/* Context */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Context</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective markets feel slow because fewer homes fit buyer expectations.<br />
              That does not mean buyers disappeared.
            </p>
            <p>
              Understanding{' '}
              <Link 
                to="/seller-center/tracy/which-price-ranges-moving" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                which price ranges are actually moving
              </Link>
              {' '}and what defines a{' '}
              <Link 
                to="/seller-center/tracy/selective-buyer-market" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                selective buyer market
              </Link>
              {' '}helps clarify what's happening.
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