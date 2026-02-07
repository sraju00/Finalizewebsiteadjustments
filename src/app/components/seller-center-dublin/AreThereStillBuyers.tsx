import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AreThereStillBuyers() {
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

        {/* H1 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Are There Still Buyers in Dublin?
        </h1>

        {/* Intro Subtext */}
        <p className="text-xl text-gray-600 mb-12">
          Yes — buyers are active in Dublin.<br />
          But they are no longer forgiving.
        </p>

        {/* SECTION 1 — DIRECT ANSWER */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct Answer</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Yes. Buyers are still active in Dublin.
            </p>
            <p>
              However, they are highly selective — meaning they compare more homes,<br />
              hesitate longer, and move only when something clearly stands out.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WHAT "SELECTIVE" ACTUALLY MEANS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What "Selective" Really Means</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective buyers do not rush.<br />
              They shortlist multiple similar homes and evaluate them side by side.
            </p>
            <p>They look for:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Clear value at the monthly payment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Low perceived risk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>A reason to act now instead of waiting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 3 — WHAT THIS MEANS FOR YOUR HOME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Your Home</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              In selective buyer markets like Dublin, most listings are not rejected.
            </p>
            <p className="font-medium">
              They are compared — and then quietly skipped.
            </p>
            <p>
              Buyers often view several homes that look "close enough."<br />
              They proceed with the one that feels clearly justified at the payment level.
            </p>
            <p>Homes that feel:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>slightly overpriced</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>unclear in positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>or risky to commit to</span>
              </li>
            </ul>
            <p>
              do not receive offers — even though buyers are active.
            </p>
            <p className="text-lg font-medium text-gray-900 mt-6">
              🔑 This is the "oh sh*t" moment for sellers.
            </p>
          </div>
        </div>

        {/* SECTION 4 — HOW SKIPPING SHOWS UP */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Skipping Actually Shows Up</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>If your home is being skipped, you'll usually notice:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Showings without meaningful follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Online views or saves but no offers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Buyers saying "we're still looking"</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Price reductions that don't change activity</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 italic text-gray-700">
              This is where sellers think:<br />
              "This isn't theory. This is my listing."
            </div>
          </div>
        </div>

        {/* SECTION 5 — WHY THIS FEELS LIKE A "BAD MARKET" */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Feels Like a "Bad Market"</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Selective markets feel slow — even when buyers exist.
            </p>
            <p>
              That's why many sellers assume demand disappeared,<br />
              when in reality, buyers simply became more disciplined.
            </p>
          </div>
        </div>

        {/* SECTION 6 — THE IMPORTANT QUESTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Important Question</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The real question is not whether buyers exist.
            </p>
            <p>
              It's whether your home landed in the group buyers seriously considered —<br />
              or the group they quietly passed over.
            </p>
          </div>
        </div>

        {/* SECTION 7 — SINGLE CTA */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
          <button
            onClick={() => navigate('/private-seller-audit')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-3"
          >
            Request Seller Audit
          </button>
          <p className="text-sm text-gray-600">
            A private audit explains how buyers likely viewed your home — not a sales pitch.
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