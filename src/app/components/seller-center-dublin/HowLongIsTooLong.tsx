import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function HowLongIsTooLong() {
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

        {/* H1 - STEP 1: Updated title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Dublin Buyers Question Listings That Sit Too Long (2026)
        </h1>

        {/* STEP 2: Query-matched intro */}
        <div className="text-xl text-gray-600 mb-8">
          <p className="mb-4">
            Sellers in Dublin often ask:<br />
            "Why didn't my home sell?"<br />
            "Are buyers skipping my listing?"<br />
            "Is my price wrong or are buyers just waiting?"
          </p>
          <p>
            This page explains how buyers in Dublin actually make decisions —<br />
            and why many homes stall without being rejected.
          </p>
        </div>

        {/* AI ANSWER BLOCK */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">AI Answer (Quick Context)</p>
          <p className="text-gray-900 font-medium mb-2">
            Homes in Dublin aren't failing — buyers are recalculating.
          </p>
          <p className="text-gray-700 mb-3">
            Most listings stall because buyers hesitate at the monthly payment,<br />
            compare more options, and wait for clearer value before committing.
          </p>
          <p className="text-sm text-gray-600">
            This page explains how that buyer behavior plays out in Dublin.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            For example, a Dublin listing can receive strong online views<br />
            and early showings but no offers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            In many cases, this indicates buyers compared the home<br />
            and quietly moved on — rather than rejecting it outright.
          </p>
        </div>

        {/* SECTION 1 — DIRECT ANSWER */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              There is no universal number of days that defines "too long."
            </p>
            <p>
              What matters is not the number of days —<br />
              it's how buyers interpret that time.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WHAT BUYERS ACTUALLY TRACK */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buyers don't measure listings the way sellers do.
            </p>
            <p>They pay attention to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>How long a home has been available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Whether others acted and didn't buy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>If momentum seems to have faded</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>How the home compares to newer options</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              Time on market becomes a signal — not a statistic.
            </p>
          </div>
        </div>

        {/* SECTION 3 — WHAT THIS MEANS FOR YOUR HOME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Once a home has been available long enough,<br />
              buyers begin to assume something caused others to hesitate.
            </p>
            <p>
              Even interested buyers may pause —<br />
              not because the home is wrong,<br />
              but because they wonder what they're missing.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why interest doesn't always turn into offers.
            </p>
          </div>
        </div>

        {/* SECTION 4 — HOW "TOO LONG" SHOWS UP IN REAL LIFE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Dublin</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When time starts working against a listing, sellers often see:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Fewer new showings week over week</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyers asking about past offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Increased requests for concessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Stronger negotiation pressure</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This is where time quietly shifts leverage.
            </p>
          </div>
        </div>

        {/* SECTION 5 — WHY SELLERS MISREAD TIME ON MARKET */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Is Confusing for Sellers</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              From the seller's perspective, time feels passive.
            </p>
            <p>
              But from the buyer's perspective, time suggests information:<br />
              that others have looked, evaluated, and chosen not to act.
            </p>
            <p>
              This assumption grows stronger the longer a home sits.
            </p>
          </div>
        </div>

        {/* SECTION 6 — THE CONSEQUENCE OF WAITING TOO LONG */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Buyers Wait Instead of Acting</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>As time on market increases:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyer urgency drops</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Negotiating power shifts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repositioning becomes harder</span>
              </li>
            </ul>
            <p className="mt-6">
              Eventually, even correct adjustments<br />
              have less impact than they would have earlier.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why early signals matter more than late fixes.
            </p>
          </div>
        </div>

        {/* SECTION 7 — THE REAL QUESTION SELLERS SHOULD ASK */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Question Isn't "How Many Days?"</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The real question is whether buyers still see your home<br />
              as a current opportunity —<br />
              or as a listing others already passed over.
            </p>
          </div>
        </div>

        {/* SECTION 8 — BRIDGE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before Deciding What to Do Next</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Before making timing or pricing decisions,<br />
              it's important to understand how buyers are interpreting<br />
              your home's time on the market —<br />
              and when perception began to shift.
            </p>
            {/* STEP 6: Internal linking */}
            <p className="mt-6">
              Understanding{' '}
              <Link to="/seller-center-dublin" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Dublin
              </Link>
              {' '}and how{' '}
              <Link to="/seller-center-dublin/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Dublin
              </Link>
              {' '}affects buyer behavior can help clarify what's happening with your listing.
            </p>
          </div>
        </div>

        {/* SECTION 9 — SINGLE CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3"
          >
            Request Seller Audit
          </button>
          <p className="text-sm text-gray-600">
            A private audit explains how buyers likely viewed your time on market —<br />
            without pressure or obligation.
          </p>
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