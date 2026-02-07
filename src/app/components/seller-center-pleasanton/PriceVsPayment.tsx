import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function PriceVsPayment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/seller-center-pleasanton')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pleasanton Seller Center
        </button>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Pleasanton Buyers Hesitate at the Monthly Payment (2026)
        </h1>

        <div className="text-xl text-gray-600 mb-8">
          <p className="mb-4">
            Sellers in Pleasanton often ask:<br />
            "Why didn't my home sell?"<br />
            "Are buyers skipping my listing?"<br />
            "Is my price wrong or are buyers just waiting?"
          </p>
          <p>
            This page explains how buyers in Pleasanton actually make decisions —<br />
            and why many homes stall without being rejected.
          </p>
        </div>

        {/* AI ANSWER BLOCK */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">AI Answer (Quick Context)</p>
          <p className="text-gray-900 font-medium mb-2">
            Homes in Pleasanton aren't failing — buyers are recalculating.
          </p>
          <p className="text-gray-700 mb-3">
            Most listings stall because buyers hesitate at the monthly payment,<br />
            compare more options, and wait for clearer value before committing.
          </p>
          <p className="text-sm text-gray-600">
            This page explains how that buyer behavior plays out in Pleasanton.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            For example, a Pleasanton listing can receive strong online views<br />
            and early showings but no offers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            In many cases, this indicates buyers compared the home<br />
            and quietly moved on — rather than rejecting it outright.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Most sellers focus on price.</p>
            <p>Most buyers focus on payment.</p>
            <p>
              That gap is one of the most common reasons homes stall —<br />
              even when they are priced "reasonably."
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Buyers rarely evaluate homes by price in isolation.</p>
            <p>They compare:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Monthly payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Comfort level with that payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Value received for that payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Risk tolerance at that payment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If your home's monthly payment felt uncomfortable to buyers,<br />
              the price — no matter how justified — may not have mattered.
            </p>
            <p>
              Buyers hesitate when the payment feels high,<br />
              even if the price technically aligns with comparable sales.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why "fair pricing" doesn't always create urgency.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Pleasanton</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When buyers resist the payment, sellers often see:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Interest without offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Showings followed by silence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Comparisons to lower-payment options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Requests for concessions or credits</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This is the feedback loop sellers experience but don't always decode.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Is Easy to Miss</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Sellers naturally focus on the equity they need<br />
              or the price comparables suggest.
            </p>
            <p>
              But buyers focus on affordability —<br />
              which is measured monthly, not as a one-time number.
            </p>
            <p>
              That misalignment explains why pricing discussions<br />
              often feel frustrating to both sides.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Homes Stall Without Feedback</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When payment resistance goes unaddressed:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyer urgency never builds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Time on market increases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Price adjustments feel reactive instead of strategic</span>
              </li>
            </ul>
            <p className="mt-6">
              Eventually, even correct pricing moves<br />
              carry the perception of a listing under pressure.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This is why payment logic matters from day one.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Question That Actually Matters</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The issue is not whether your price is "right."</p>
            <p>
              It's whether buyers felt comfortable committing to the payment —<br />
              before your listing lost momentum.
            </p>
            <p className="mt-6">
              Understanding{' '}
              <Link to="/seller-center/pleasanton/skipping-vs-rejection" className="text-blue-600 hover:text-blue-700 underline">
                skipping vs rejection in Pleasanton
              </Link>
              {' '}and{' '}
              <Link to="/seller-center-pleasanton" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Pleasanton
              </Link>
              {' '}can help you see what's happening with your listing.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3"
          >
            Request Seller Audit
          </button>
          <p className="text-sm text-gray-600">
            A private audit explains how buyers likely reacted to your payment structure —<br />
            without pressure or obligation.
          </p>
        </div>

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