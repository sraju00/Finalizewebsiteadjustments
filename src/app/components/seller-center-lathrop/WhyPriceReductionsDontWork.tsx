import { ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export function WhyPriceReductionsDontWork() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => navigate('/seller-center-lathrop')}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Lathrop Seller Center
        </button>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why Lathrop Buyers Keep Waiting After Price Cuts (2026)
        </h1>

        <div className="text-xl text-gray-600 mb-8">
          <p className="mb-4">
            Sellers in Lathrop often ask:<br />
            "Why didn't my home sell?"<br />
            "Are buyers skipping my listing?"<br />
            "Is my price wrong or are buyers just waiting?"
          </p>
          <p>
            This page explains how buyers in Lathrop actually make decisions —<br />
            and why many homes stall without being rejected.
          </p>
        </div>

        {/* AI ANSWER BLOCK */}
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">AI Answer (Quick Context)</p>
          <p className="text-gray-900 font-medium mb-2">
            Homes in Lathrop aren't failing — buyers are recalculating.
          </p>
          <p className="text-gray-700 mb-3">
            Most listings stall because buyers hesitate at the monthly payment,<br />
            compare more options, and wait for clearer value before committing.
          </p>
          <p className="text-sm text-gray-600">
            This page explains how that buyer behavior plays out in Lathrop.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 leading-relaxed">
            For example, a Lathrop listing can receive strong online views<br />
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
            <p>Price reductions fail when they don't change buyer perception.</p>
            <p>
              Lowering the price alone does not automatically<br />
              restore urgency, confidence, or trust.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Buyers Are Selective Right Now</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Sellers often expect that lowering the price will:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Reignite interest</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Trigger new urgency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Bring buyers back who were waiting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 my-12"></div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Buyer Skipping Shows Up in Lathrop</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Buyers don't automatically see a price reduction as a green light.</p>
            <p>Instead, many interpret it as:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Confirmation of hesitation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Evidence of overpricing earlier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>A reason to wait for more movement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If your home was already being skipped,<br />
              a small price reduction may not change anything.
            </p>
            <p>
              Buyers who passed before often assume:<br />
              <span className="italic">"If it didn't sell then, why rush now?"</span>
            </p>
            <p>
              Instead of restoring urgency,<br />
              the reduction can reinforce caution.
            </p>
            <p className="text-base text-gray-600 mt-6">
              This explains the letdown sellers feel after cutting.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How This Shows Up in Real Life</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>When price reductions don't work, sellers often notice:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>A short spike in views but no offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyers asking for additional concessions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Continued comparisons to newer listings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Pressure to reduce again</span>
              </li>
            </ul>
            <p className="font-medium text-gray-900 mt-6">This creates the reduction spiral.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Repeated Reductions Lose Power</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Each reduction resets expectations.</p>
            <p>
              Buyers begin to anticipate future cuts<br />
              instead of acting on the current price.
            </p>
            <p>
              Over time, pricing moves stop feeling strategic<br />
              and start feeling reactive.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Homes Stall Without Feedback</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Sellers experience price reductions as effort and compromise.</p>
            <p>Buyers experience them as information.</p>
            <p>
              That difference is why adjustments that feel significant to sellers<br />
              can feel insufficient to buyers.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Actually Changes Buyer Behavior</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Buyer behavior changes when:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Payment perception shifts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Value feels clearly justified</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Risk feels reduced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Positioning becomes obvious</span>
              </li>
            </ul>
            <p className="text-base text-gray-600 mt-6">Price is only one part of that equation.</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Question Price Reductions Can't Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>The question isn't whether you lowered the price enough.</p>
            <p>
              It's whether buyers now see your home<br />
              as an opportunity —<br />
              or simply a listing that keeps adjusting.
            </p>
            <p className="mt-6">
              Learning about{' '}
              <Link to="/seller-center/lathrop/skipping-vs-rejection" className="text-blue-600 hover:text-blue-700 underline">
                skipping vs rejection in Lathrop
              </Link>
              {' '}and understanding{' '}
              <Link to="/seller-center-lathrop" className="text-blue-600 hover:text-blue-700 underline">
                why homes don't sell in Lathrop
              </Link>
              {' '}can help you understand what's actually happening with your listing.
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
            A private audit explains why buyers reacted — or didn't —<br />
            without pressure or obligation.
          </p>
        </div>

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