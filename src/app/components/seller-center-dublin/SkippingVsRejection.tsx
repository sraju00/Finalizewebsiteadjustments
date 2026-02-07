import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function SkippingVsRejection() {
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
          Why Dublin Buyers Skip Your Home Before They Reject It (2026)
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

        {/* STEP 3: Define terms (ONLY on Skipping vs Rejection) */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
          <p className="text-gray-900 font-medium mb-3">In this guide:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>"Skipping"</strong> means buyers never seriously consider the home.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>"Rejection"</strong> means buyers evaluate the home and decide no.</span>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            These two behaviors have different causes and different consequences.
          </p>
        </div>

        {/* STEP 4: Micro example */}
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
              Most homes that don't sell are not rejected by buyers.
            </p>
            <p>
              They are skipped.
            </p>
            <p>
              That distinction matters — because rejection and skipping<br />
              lead to very different outcomes.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WHAT REJECTION LOOKS LIKE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Rejection happens when buyers actively decide a home is wrong.
            </p>
            <p>This usually involves:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Serious consideration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Clear deal-breakers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>A deliberate "no"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="border-t-2 border-gray-200 my-12"></div>

        {/* SECTION 2B — WHAT SKIPPING LOOKS LIKE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Dublin</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Skipping happens when buyers never reach a decision point.
            </p>
            <p>
              They view the home.<br />
              They compare it to others.<br />
              And then they move on — quietly.
            </p>
          </div>
        </div>

        {/* SECTION 3 — WHAT THIS MEANS FOR YOUR HOME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In markets like Dublin, buyers review many similar homes.
            </p>
            <p>
              They do not deeply analyze every option.<br />
              They filter quickly.
            </p>
            <p>Homes that feel:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>slightly overpriced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>unclear in value</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>or less compelling than alternatives</span>
              </li>
            </ul>
            <p className="mt-6">
              are skipped — not rejected.
            </p>
            <p>
              And skipped homes rarely generate feedback,<br />
              even though buyers were interested.
            </p>
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 italic text-gray-700">
              This is where sellers think:<br />
              "We never got negative feedback… now I understand why."
            </div>
          </div>
        </div>

        {/* SECTION 4 — HOW SKIPPING SHOWS UP IN REAL LIFE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Price vs Payment in Dublin</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>If your home is being skipped, you'll often see:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Showings without offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Minimal or vague feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyers saying "we're still looking"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Other homes selling while yours sits</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This matches lived experience — not theory.
            </p>
          </div>
        </div>

        {/* SECTION 5 — WHY SELLERS MISREAD SKIPPING AS FAILURE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Skipping Feels Like Rejection</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              From the seller's perspective, no offer feels like a clear "no."
            </p>
            <p>
              But buyers rarely communicate skipping decisions.<br />
              They simply move forward with another option.
            </p>
            <p>
              This silence is what makes skipping feel confusing —<br />
              and emotionally similar to rejection.
            </p>
          </div>
        </div>

        {/* SECTION 6 — THE CONSEQUENCE OF BEING SKIPPED */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Buyers Wait Instead of Acting</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When a home is repeatedly skipped:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Momentum fades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Time on market increases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyer perception changes</span>
              </li>
            </ul>
            <p className="mt-6">
              At that point, even interested buyers may hesitate —<br />
              not because the home is bad,<br />
              but because others already passed.
            </p>
            <p className="font-medium text-gray-900 mt-6">
              This explains stigma without using the word.
            </p>
          </div>
        </div>

        {/* SECTION 7 — THE REAL QUESTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Question Isn't \"Why Didn't We Get an Offer?\"</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The real question is whether buyers ever reached<br />
              a serious decision point with your home —<br />
              or filtered it out before that moment.
            </p>
            {/* STEP 6: Internal linking */}
            <p className="mt-6">
              Understanding{' '}
              <Link to="/seller-center-dublin/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Dublin
              </Link>
              {' '}and{' '}
              <Link to="/seller-center-dublin" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Dublin
              </Link>
              {' '}can help clarify what's really happening with your listing.
            </p>
          </div>
        </div>

        {/* SECTION 8 — SINGLE CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3"
          >
            Request Seller Audit
          </button>
          <p className="text-sm text-gray-600">
            A private audit explains whether buyers likely skipped or rejected your home —<br />
            no sales pressure.
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