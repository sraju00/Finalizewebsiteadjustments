import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function SkippingVsRejection() {
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
          Why Mountain House Buyers Skip Your Home Before They Reject It (2026)
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
            <p>Most homes that don't sell are not rejected by buyers.</p>
            <p>They are skipped.</p>
            <p>
              That distinction matters — because rejection and skipping<br />
              lead to very different outcomes.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Rejection happens when buyers actively decide a home is wrong.</p>
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

        <div className="border-t-2 border-gray-200 my-12"></div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Mountain House</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Skipping happens when buyers never reach a decision point.</p>
            <p>This usually involves:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Surface-level interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Passive filtering</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Silent movement to other options</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If your home was skipped rather than rejected,<br />
              buyers never engaged deeply enough to say "no."
            </p>
            <p>
              They simply moved on —<br />
              often without feedback, without urgency,<br />
              and without a clear reason why.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains why silence feels worse than rejection.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Price vs Payment in Mountain House</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When buyers skip a home, sellers typically see:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Online views without showings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Showings without follow-up questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Interest that fades quickly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Comparisons that end in silence</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">
              This is the pattern sellers recognize but can't always name.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Skipping Is Harder to Reverse</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Rejection gives you information.<br />
              Skipping gives you silence.
            </p>
            <p>
              When a home is rejected, the seller knows what went wrong.<br />
              When a home is skipped, the seller only knows something didn't click.
            </p>
            <p>
              That lack of clarity makes it harder to adjust<br />
              and harder to know what would actually change buyer behavior.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When Buyers Wait Instead of Acting</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When a home is consistently skipped:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Time on market increases</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repositioning becomes harder</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Price adjustments lose effectiveness</span>
              </li>
            </ul>
            <p className="mt-6">
              Eventually, even strategic changes<br />
              carry the weight of a stalled listing history.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This is why early signals matter more than late corrections.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Question Isn't "Why Didn't We Get an Offer?"</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The real question is whether buyers ever reached<br />
              a serious decision point with your home —<br />
              or filtered it out before that moment.
            </p>
            <p className="mt-6">
              Understanding{' '}
              <Link to="/seller-center/mountain-house/price-vs-payment" className="text-blue-600 hover:text-blue-700 underline">
                price vs payment in Mountain House
              </Link>
              {' '}and{' '}
              <Link to="/seller-center-mountain-house" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Mountain House
              </Link>
              {' '}can help clarify what's really happening with your listing.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Before Making Your Next Move</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Before adjusting price, timing, or presentation,<br />
              it's important to know whether your home was skipped or rejected —<br />
              because the fix is different for each.
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
            A private audit explains whether your home was skipped or rejected —<br />
            without pressure or obligation.
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
