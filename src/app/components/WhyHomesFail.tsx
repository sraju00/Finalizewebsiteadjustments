import { AlertCircle, TrendingDown, Eye, Users, DollarSign, Calendar, BarChart3, RefreshCw } from 'lucide-react';

interface WhyHomesFailProps {
  onOpenAIReports?: () => void;
}

export function WhyHomesFail({ onOpenAIReports }: WhyHomesFailProps) {
  const problems = [
    {
      icon: DollarSign,
      title: "Overpriced from Day 1",
      description: "In our local market analysis, 84% of expired listings launched above the buyer activity zone. Heat Map Pricing™ identifies where real buyer demand actually concentrates — before momentum is lost.",
      framework: "See Heat Map Pricing™"
    },
    {
      icon: Eye,
      title: "Invisible to Active Buyers",
      description: "No traction means no showings — not because buyers disappeared, but because the listing missed their search bands. Buyer Activity Bands™ reveal where buyers are actively clicking, saving, and touring.",
      framework: "See Buyer Activity Bands™"
    },
    {
      icon: TrendingDown,
      title: "Wrong Market Timing",
      description: "Many homes launch into saturated micro-markets or low-liquidity windows. Market Depth Wheel™ measures competition pressure and identifies safer timing lanes.",
      framework: "See Market Depth Wheel™"
    },
    {
      icon: Calendar,
      title: "Stale Listing Syndrome",
      description: "After ~45 days, buyer perception shifts from interest to skepticism. Relaunch Blueprint™ (30 Days) strategically resets positioning, pricing psychology, and buyer attention.",
      framework: "See Relaunch Blueprint™ (30 Days)"
    }
  ];

  const frameworks = [
    {
      name: "Buyer Magnet Score™",
      description: "Measures how attractive a listing is to active buyers right now by analyzing real buyer behavior and engagement signals.",
      color: "blue"
    },
    {
      name: "Liquidity Snapshot™",
      description: "Evaluates how quickly homes in your price range are actually selling — and where momentum exists or breaks down.",
      color: "green"
    },
    {
      name: "Payment Grid™",
      description: "Connects pricing decisions to real monthly payment thresholds where buyer resistance begins.",
      color: "purple"
    },
    {
      name: "AI Relist Audit™",
      description: "Diagnoses exactly why a listing failed and outlines the highest-impact fix — pricing, timing, or positioning.",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1592222376988-92af20d4d06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwYnJpZ2h0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3NzM2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Home Interior Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            The Real Reasons Homes Don't Sell
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Most Agents Guess.<br />
            <span className="ml-12 md:ml-20">We Use Data.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your home isn't broken — the strategy missed key market signals.<br />
            Below is what the data consistently reveals about homes that fail to sell across the Central Valley and Bay Area.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 p-3 rounded-lg flex-shrink-0">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {problem.framework}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks Showcase */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Intelligence Behind Every Decision
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Every strategy on this site is powered by a set of proprietary AI-driven frameworks — built to analyze buyer behavior, pricing pressure, competition, and timing in today's market.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto mb-6">
              These are not generic tools. They are decision frameworks I use professionally to diagnose why a home did or didn't sell — and what to change next.
            </p>
          </div>

          {/* Framework Characteristics */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-base font-semibold text-gray-900 mb-3 text-center">Each framework is:</p>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>AI-powered</strong> for scale and pattern recognition</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Human-reviewed</strong> for context, accuracy, and judgment</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Designed specifically</strong> for homes that didn't sell the first time</span>
              </div>
            </div>
          </div>

          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Frameworks Used in Every Strategy
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => {
              const colors = {
                blue: 'bg-blue-600',
                green: 'bg-green-600',
                purple: 'bg-purple-600',
                orange: 'bg-orange-600'
              };

              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                  <div className={`${colors[framework.color as keyof typeof colors]} w-12 h-1 rounded-full mb-4`}></div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{framework.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{framework.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={onOpenAIReports}
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-lg font-medium"
            >
              See My AI Seller Reports →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}