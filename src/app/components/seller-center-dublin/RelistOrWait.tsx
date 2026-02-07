import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function RelistOrWait() {
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
          Why Dublin Buyers Wait Instead of Acting (2026)
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
              Relisting or waiting is not a timing decision by itself.
            </p>
            <p>
              It's a perception decision.
            </p>
            <p>
              What matters is not the calendar —<br />
              it's how buyers will interpret your next move.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WHAT BUYERS NOTICE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buyers track patterns, not intentions.
            </p>
            <p>They notice:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>How long a home was listed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Whether it failed to sell</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>How it re-enters the market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>What changed — or didn't</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              Buyers don't reset their perception just because a listing resets.
            </p>
          </div>
        </div>

        {/* SECTION 3 — WHAT THIS MEANS FOR YOUR HOME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Waiting without a clear repositioning strategy<br />
              often reinforces the same buyer hesitation that caused the stall.
            </p>
            <p>
              Relisting without meaningful change<br />
              can signal unresolved issues to buyers who already passed.
            </p>
            <p>
              In both cases, buyers ask the same silent question:
            </p>
            <p className="font-medium text-gray-900 italic text-lg">
              "What's different this time?"
            </p>
            <p className="text-base text-gray-600 mt-6">
              This reframes time as a signal, not a solution.
            </p>
          </div>
        </div>

        {/* SECTION 4 — HOW WAITING ACTUALLY BACKFIRES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Dublin</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When sellers wait without changing position, buyers often:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Assume the home is overpriced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Expect future price cuts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Delay action further</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Focus on fresher alternatives</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              Waiting can reduce urgency, not restore it.
            </p>
          </div>
        </div>

        {/* SECTION 5 — WHY RELISTING ALONE DOESN'T FIX IT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Relisting Alone Rarely Works</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Relisting resets visibility — not buyer memory.
            </p>
            <p>Buyers who saw the home before will notice:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Similar pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Similar positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Similar risk signals</span>
              </li>
            </ul>
            <p className="mt-6">
              Without a clear change, relisting can confirm hesitation<br />
              instead of correcting it.
            </p>
          </div>
        </div>

        {/* SECTION 6 — THE REAL DECISION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Decision Isn't Relist or Wait</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The real decision is whether your next move<br />
              changes how buyers evaluate your home.
            </p>
            <p>Timing only works when it's paired with:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Clear repositioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Payment justification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Stronger value signaling</span>
              </li>
            </ul>
            <p className="text-base text-gray-600 mt-6">
              This removes false binaries.
            </p>
          </div>
        </div>

        {/* SECTION 7 — CONSEQUENCE OF GETTING TIMING WRONG */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Buyers Wait Instead of Acting</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              When timing decisions are made without buyer context,<br />
              homes often re-enter the market weaker than before.
            </p>
            <p>
              Buyer trust erodes.<br />
              Negotiating power drops.<br />
              And future adjustments become harder to execute.
            </p>
          </div>
        </div>

        {/* SECTION 8 — BRIDGE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Question Worth Answering First</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Before deciding whether to relist or wait,<br />
              it's critical to understand why buyers hesitated in the first place —<br />
              and what would actually change that behavior.
            </p>
            {/* STEP 6: Internal linking */}
            <p className="mt-6">
              Learning about{' '}
              <Link to="/seller-center-dublin/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Dublin
              </Link>
              {' '}and understanding{' '}
              <Link to="/seller-center-dublin" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Dublin
              </Link>
              {' '}can help you make better timing decisions.
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
            A private audit explains how buyers likely interpreted your timing —<br />
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