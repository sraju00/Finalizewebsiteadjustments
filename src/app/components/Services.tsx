import { Home, Key, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';
import homeLoansImage from 'figma:asset/12e50cb11c3364e5906671b52ad6ee0d7ab3eda7.png';
import sellingHomeImage from 'figma:asset/c3d0aa23409e6cfc45cd36a31d4cb1c2e0de41f0.png';
import buyingHomeImage from 'figma:asset/410865d0b71a8b79c449c5f2a9982c5de5614352.png';

interface ServicesProps {
  onOpenSellerIntake?: () => void;
  onOpenBuyerIntake?: () => void;
  onOpenLoanIntake?: () => void;
  onOpenStrategyCall?: () => void;
}

export function Services({ onOpenSellerIntake, onOpenBuyerIntake, onOpenLoanIntake, onOpenStrategyCall }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: "Selling a Home",
      description: "Data-backed selling strategy designed to maximize value and relaunch homes that failed to sell the first time.",
      image: sellingHomeImage,
      features: [
        "AI Relist Audit™ for expired, cancelled, or withdrawn listings",
        "Buyer Magnet Score™ optimization to increase buyer interest",
        "Heat Map Pricing™ analysis to identify the true demand zone",
        "30-Day Relaunch Blueprint™ to reset momentum correctly",
        "Multi-channel buyer targeting aligned with active searches",
        "Professional staging consultation for final presentation polish"
      ],
      cta: "See Seller Strategy",
      onClick: onOpenSellerIntake
    },
    {
      icon: Key,
      title: "Buying a Home",
      description: "Find the right California home with insider market intelligence and negotiation strategy — not guesswork.",
      image: buyingHomeImage,
      features: [
        "Exclusive off-market and early-access opportunities",
        "Market Depth Wheel™ insights to avoid crowded segments",
        "Buyer Activity Bands™ tracking to target real demand",
        "Negotiation strategy planning based on market pressure",
        "Pre-approval coordination for stronger offers",
        "Investment and resale potential analysis"
      ],
      cta: "Explore Buyer Strategy",
      onClick: onOpenBuyerIntake
    },
    {
      icon: Calculator,
      title: "Home Loans",
      description: "Strategic mortgage planning integrated directly into your purchase or sale strategy.",
      image: homeLoansImage,
      features: [
        "Payment Grid™ analysis to align price with real affordability",
        "Liquidity Snapshot™ projections to evaluate timing and risk",
        "Multiple loan scenario modeling for smarter decisions",
        "Rate-lock and market-timing guidance",
        "Down-payment optimization strategies",
        "Refinance opportunity monitoring"
      ],
      cta: "View Loan Scenarios",
      onClick: onOpenLoanIntake
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Help You Win
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're selling, buying, or financing, we combine AI-driven insights with proven strategy to help you make smarter, more confident decisions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium" onClick={service.onClick}>
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Not sure where to start? Let's talk through your specific situation.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-lg font-medium" onClick={onOpenStrategyCall}>
            Book a Free Strategy Call →
          </button>
          <p className="text-sm text-gray-500 mt-3">
            No pressure • Personalized to your goals
          </p>
        </div>
      </div>
    </section>
  );
}