import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { SecondOpinionForm } from './SecondOpinionForm';

export function Hero() {
  const [showSecondOpinionForm, setShowSecondOpinionForm] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                California Realtor® + Mortgage Strategist
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Home Didn't Sell.<br />
                <span className="text-blue-600">The Market Already Told Us Why.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expired. Cancelled. Withdrawn.<br />
                Homes don't fail randomly — they fail when pricing, buyer demand, or payment reality is misread.<br />
                I diagnose exactly where your listing broke down — using real market data, not opinions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowSecondOpinionForm(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg font-medium shadow-lg"
                >
                  Request a Second Opinion
                  <ArrowRight className="w-5 h-5" />
                </button>
                <Link 
                  to="/buyer-magnet-score"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-lg font-medium"
                >
                  Run Buyer Magnet Score™
                  <Zap className="w-5 h-5" />
                </Link>
              </div>

              <p className="text-sm text-gray-600 mt-4 text-center sm:text-left">
                ✔ No obligation • ✔ No sales pressure • ✔ Built for serious sellers
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBzdHJhdGVneSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY3NzU3MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern California Home - Professional Real Estate"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Opinion Form Modal */}
      {showSecondOpinionForm && (
        <SecondOpinionForm onClose={() => setShowSecondOpinionForm(false)} />
      )}
    </>
  );
}