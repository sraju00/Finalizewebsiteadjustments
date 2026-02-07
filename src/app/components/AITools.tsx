import { Sparkles, Target, TrendingUp, Users, DollarSign, BarChart3, RefreshCw, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AITools() {
  const tools = [
    {
      icon: Target,
      name: "Buyer Magnet Score™",
      description: "See how attractive your home is to active buyers based on real engagement patterns.",
      color: "blue",
      cta: "Calculate My Score",
      link: "/ai-reports"
    },
    {
      icon: TrendingUp,
      name: "Liquidity Snapshot™",
      description: "Understand market speed, demand strength, and sale probability in your price range.",
      color: "green",
      cta: "Get My Snapshot",
      link: "/ai-reports"
    },
    {
      icon: Users,
      name: "Buyer Activity Bands™",
      description: "Identify where buyers are actively searching — and where listings get ignored.",
      color: "purple",
      cta: "View Buyer Activity",
      link: "/ai-reports"
    },
    {
      icon: DollarSign,
      name: "Payment Grid™",
      description: "Visualize how pricing impacts buyer affordability at different down payments and rates.",
      color: "indigo",
      cta: "View Payment Grid",
      link: "/ai-reports"
    },
    {
      icon: RefreshCw,
      name: "AI Relist Audit™",
      description: "If your home expired or was withdrawn, get a clear diagnosis of what went wrong.",
      color: "orange",
      cta: "Get Relist Audit",
      link: "/ai-reports"
    },
    {
      icon: MapPin,
      name: "Heat Map Pricing™",
      description: "Identify pricing zones where buyer interest peaks — and where resistance begins.",
      color: "yellow",
      cta: "Find My Price",
      link: "/ai-reports"
    },
    {
      icon: Sparkles,
      name: "Relaunch Blueprint™",
      description: "A 30-day strategic reset plan for listings that lost momentum.",
      color: "pink",
      cta: "Get My Blueprint",
      link: "/ai-reports"
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600', hover: 'hover:bg-purple-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-600', hover: 'hover:bg-indigo-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-600', hover: 'hover:bg-yellow-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-600', hover: 'hover:bg-pink-600' }
  };

  return (
    <section id="ai-tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered, Human-Reviewed
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Free AI Tools & Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            You can explore parts of the same intelligence system I use with clients — at no cost and with no obligation.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These free reports are designed to give you clarity, not pressure.<br />
            They help you understand where your home sits in today's buyer landscape — whether you're selling now or just evaluating options.
          </p>
        </div>

        {/* Available Free Reports Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Available Free Reports
          </h3>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool, index) => {
            const colors = colorClasses[tool.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={index} 
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:border-gray-300 group"
              >
                <div className={`${colors.bg} ${colors.text} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{tool.description}</p>

                {tool.link ? (
                  <Link 
                    to={tool.link} 
                    className={`w-full border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-white py-3 rounded-lg transition-colors text-sm font-medium block text-center`}
                  >
                    {tool.cta}
                  </Link>
                ) : (
                  <button className={`w-full border-2 ${colors.border} ${colors.text} ${colors.hover} hover:text-white py-3 rounded-lg transition-colors text-sm font-medium`}>
                    {tool.cta}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Transparency Note */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12 text-center max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-gray-900 mb-3">Transparency Note</h4>
          <p className="text-gray-700 mb-4">
            All reports are generated using AI and reviewed by a licensed professional.<br />
            There is no requirement to list, no pressure to move forward, and no obligation.
          </p>
          <Link 
            to="/ai-reports"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 text-lg font-medium shadow-lg"
          >
            Get My Free AI Reports →
          </Link>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Reports are informational and do not replace professional advice. All insights are reviewed before recommendations are made.
          </p>
        </div>
      </div>
    </section>
  );
}