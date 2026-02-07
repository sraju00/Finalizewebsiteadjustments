import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function DeadZonePricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/seller-center-mountain-house')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Mountain House Seller Center
        </button>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Mountain House Buyers Pause Instead of Making an Offer (2026)
        </h1>

        <div className="text-xl text-gray-600 mb-8">
          <p className="mb-4">
            Sellers in Mountain House often ask:<br />
            "Why didn't my home sell?"<br />
            "Are buyers skipping my listing?"<br />
            "Is my price wrong or are buyers just waiting?"
          </p>
          <p>
            This page explains how buyers in Mountain House actually make decisions —<br />
            and why many homes stall without being rejected.
          </p>
        </div>

        {/* AI ANSWER BLOCK */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">AI Answer (Quick Context)</p>
          <p className="text-gray-900 font-medium mb-2">
            Homes in Mountain House aren't failing — buyers are recalculating.
          </p>
          <p className="text-gray-700 mb-3">
            Most listings stall because buyers hesitate at the monthly payment,<br />
            compare more options, and wait for clearer value before committing.
          </p>
          <p className="text-sm text-gray-600">
            This page explains how that buyer behavior plays out in Mountain House.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            For example, a Mountain House listing can receive strong online views<br />
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
            <p>
              Dead Zone Pricing happens when a home is priced<br />
              just high enough to trigger hesitation —<br />
              but not low enough to trigger action.
            </p>
            <p>
              Buyers don't reject these homes.<br />
              They pause on them.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>In every market, buyers have natural comfort ranges.</p>
            <p>
              Below that range, homes feel attractive.<br />
              Above it, homes feel risky.
            </p>
            <p>
              The dead zone sits in between —<br />
              where buyers look, compare, and then wait.
            </p>
            <p className="font-medium text-gray-900 mt-6">
              Homes in the dead zone get attention —<br />
              but not commitment.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If your home was priced just above buyer comfort,<br />
              it likely received showings without urgency.
            </p>
            <p>
              Buyers noticed it.<br />
              They considered it.<br />
              But they waited — expecting something better,<br />
              cheaper, or clearer to come along.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why activity didn't convert.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Mountain House</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Homes in the dead zone often experience:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Early showings with no offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>"We like it, but…" feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Price reductions that don't restart momentum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyers circling but not committing</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This is the lived pattern sellers recognize immediately.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Price vs Payment in Mountain House</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Small reductions often keep a home inside the dead zone.</p>
            <p>
              From a buyer's perspective, the payment still feels high,<br />
              and the risk still feels unresolved.
            </p>
            <p>
              As a result, buyers continue to wait —<br />
              even after multiple adjustments.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains the frustration loop sellers feel.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Is Easy to Miss</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Sellers often interpret early activity as proof<br />
              that pricing is close enough.
            </p>
            <p>
              But buyers don't act on "close enough."<br />
              They act on clarity.
            </p>
            <p>
              Dead zone pricing creates uncertainty —<br />
              and uncertainty delays decisions.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Homes Stall Without Feedback</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The longer a home remains in the dead zone,<br />
              the more buyer perception shifts.
            </p>
            <p>
              Urgency fades.<br />
              Comparison fatigue sets in.<br />
              And future price moves lose impact.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why timing matters with pricing.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Pricing Question</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The issue isn't whether your price was "reasonable."</p>
            <p>
              It's whether your home landed<br />
              inside a buyer's action zone —<br />
              or stayed stuck in their hesitation zone.
            </p>
            <p className="mt-6">
              Understanding{' '}
              <Link to="/seller-center/mountain-house/skipping-vs-rejection" className="text-blue-600 hover:text-blue-700 underline">
                skipping vs rejection in Mountain House
              </Link>
              {' '}and{' '}
              <Link to="/seller-center/mountain-house/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Mountain House
              </Link>
              {' '}can help you see where your pricing landed.
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
            A private audit explains whether your price landed in the buyer action zone —<br />
            not a pricing pitch.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/seller-center-mountain-house')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Mountain House Seller Center
          </button>
        </div>
      </div>
    </div>
  );
}