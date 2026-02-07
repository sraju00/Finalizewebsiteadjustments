import { useState } from 'react';
import { SecondOpinionForm } from './SecondOpinionForm';

export function SecondOpinion() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Show form modal when requested */}
      {showForm && <SecondOpinionForm onClose={() => setShowForm(false)} />}

      {/* Frame 1 - Hero (Above the Fold) */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Second Opinion for Sellers Who Are Unsure What to Do Next
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            If your home didn't sell — or interest slowed — this is a quiet review to help you understand why before making another move.
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            This is not a listing pitch and not an automated report.<br />
            Every review is prepared and explained personally.
          </p>
          
          <button className="bg-blue-600 text-white px-10 py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors mb-4 shadow-lg" onClick={() => setShowForm(true)}>
            Request a Second Opinion
          </button>
          
          <p className="text-sm text-gray-600">
            No obligation • No pressure
          </p>
        </div>
      </section>

      {/* Frame 2 - Empathy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Most sellers come here because something feels off.
          </h2>
          
          <div className="bg-gray-50 rounded-xl p-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>Your home may have received showings but no offers.</p>
            
            <p>Or interest slowed after the first few weeks.</p>
            
            <p>Or you reduced the price and nothing changed.</p>
            
            <p>In many cases, the problem isn't the home — it's how buyers interpreted the listing once it appeared online.</p>
            
            <p className="font-medium text-gray-900">That part of the process is usually invisible to sellers.</p>
          </div>
        </div>
      </section>

      {/* Frame 3 - What This Is / What This Is Not */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - What this is */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
                What this is
              </h3>
              
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A second set of eyes on buyer behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A neutral explanation of where urgency broke down</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A private review before you relist, reduce, or wait</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>A way to make a clearer decision</span>
                </li>
              </ul>
            </div>
            
            {/* Right Column - What this is not */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-gray-300">
                What this is not
              </h3>
              
              <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>Not a listing presentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>Not a pricing opinion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>Not a sales pitch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>Not automated</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>Not a promise of results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 4 - How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            How the second opinion works
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="text-xl font-bold text-gray-900">
                  Request a review
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Provide your address, price, and current status.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="text-xl font-bold text-gray-900">
                  I review buyer behavior around your listing
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                How buyers likely compared, filtered, and eliminated homes.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="text-xl font-bold text-gray-900">
                  We walk through it together
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                So you understand why things stalled — and what that means.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 5 - About (Minimal, Trust-Only) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Who prepares the review
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6 mb-8">
              <p>
                My role is to help sellers understand what buyers actually responded to — and what they didn't — before another decision is made.
              </p>
              
              <p>
                This work is analytical, quiet, and explanation-focused.<br />
                It's meant to reduce confusion, not add pressure.
              </p>
            </div>
            
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-lg font-bold text-gray-900">
                Raj (Raju) Saravanan
              </p>
              <p className="text-blue-600 font-medium mt-2">Real Estate Advisor + Mortgage Strategist</p>
              <p className="text-sm text-gray-600 mt-3">DRE #02249174 • NMLS #2676100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frame 6 - Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            If clarity would be helpful
          </h2>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            You can request a second opinion below.<br />
            I'll review it personally and follow up if I believe it would be useful.
          </p>
          
          <button className="bg-blue-600 text-white px-10 py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors mb-6 shadow-lg" onClick={() => setShowForm(true)}>
            Request a Second Opinion
          </button>
          
          <p className="text-sm text-gray-600">
            This review does not obligate you to list or move forward.
          </p>
        </div>
      </section>
    </div>
  );
}