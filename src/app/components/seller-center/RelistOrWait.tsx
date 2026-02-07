import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function RelistOrWait() {
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

        {/* H1 - STEP 1: Updated title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Tracy Buyers Wait Instead of Acting (2026)
        </h1>

        {/* STEP 2: Query-matched intro */}
        <div className="text-xl text-gray-600 mb-8">
          <p className="mb-4">
            Sellers in Tracy often ask:<br />
            "Why didn't my home sell?"<br />
            "Are buyers skipping my listing?"<br />
            "Is my price wrong or are buyers just waiting?"
          </p>
          <p>
            This page explains how buyers in Tracy actually make decisions —<br />
            and why many homes stall without being rejected.
          </p>
        </div>

        {/* AI ANSWER BLOCK */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">AI Answer (Quick Context)</p>
          <p className="text-gray-900 font-medium mb-2">
            Homes in Tracy aren't failing — buyers are recalculating.
          </p>
          <p className="text-gray-700 mb-3">
            Most listings stall because buyers hesitate at the monthly payment,<br />
            compare more options, and wait for clearer value before committing.
          </p>
          <p className="text-sm text-gray-600">
            This page explains how that buyer behavior plays out in Tracy.
          </p>
        </div>

        {/* STEP 4: Micro example */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            For example, a Tracy listing can receive strong online views<br />
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
                <span>Why it came off the market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>What changed when it came back</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Whether the story makes sense</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 — WHAT THIS MEANS FOR YOUR HOME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If buyers skipped your home the first time,<br />
              relisting without meaningful change<br />
              often reinforces their original hesitation.
            </p>
            <p>
              Waiting too long, on the other hand,<br />
              can make buyers assume you're not serious —<br />
              or that market conditions shifted against you.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why neither choice feels straightforward.
            </p>
          </div>
        </div>

        {/* SECTION 4 — HOW WAITING ACTUALLY BACKFIRES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Tracy</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When timing decisions misfire, sellers often see:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Reduced urgency upon relisting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Questions about why the home didn't sell before</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Lower negotiating power than originally expected</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Comparisons to newer listings with no history</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This is the momentum loss sellers feel but can't always prevent.
            </p>
          </div>
        </div>

        {/* SECTION 5 — WHY SELLERS MISREAD TIMING */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Decision Feels Impossible</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Sellers naturally focus on logistics:<br />
              timing, seasonality, personal schedules.
            </p>
            <p>
              But buyers focus on story:<br />
              whether the home's trajectory suggests opportunity or risk.
            </p>
            <p>
              That gap is why timing decisions<br />
              feel more emotional than strategic.
            </p>
          </div>
        </div>

        {/* SECTION 6 — WHAT WORKS BETTER THAN WAITING */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Changes Perception More Than Time</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buyers respond to clarity, not calendar gaps.
            </p>
            <p>
              A relist with clear repositioning<br />
              creates more urgency than waiting for memory to fade.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why strategy matters more than delay.
            </p>
          </div>
        </div>

        {/* SECTION 7 — CONSEQUENCE OF GETTING TIMING WRONG */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Buyers Wait Instead of Acting</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              When sellers mistime a relist or wait too long:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyer perception solidifies negatively</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Market position weakens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repositioning options narrow</span>
              </li>
            </ul>
            <p className="mt-6">
              Eventually, even strong execution<br />
              carries the weight of a difficult listing history.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This is why early clarity beats late pivots.
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
              <Link to="/seller-center/tracy/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Tracy
              </Link>
              {' '}and understanding{' '}
              <Link to="/seller-center-tracy" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Tracy
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
            A private audit explains what buyers actually noticed —<br />
            and whether timing or positioning matters more.
          </p>
        </div>

        {/* Footer Link */}
        <div className="pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/seller-center-tracy')}
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tracy Seller Center
          </button>
        </div>
      </div>
    </div>
  );
}