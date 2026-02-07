import { ArrowRight, Home, Key, DollarSign } from 'lucide-react';

interface IntakeGatewayProps {
  onSelectSeller: () => void;
  onSelectBuyer: () => void;
  onSelectLoan: () => void;
}

export function IntakeGateway({ onSelectSeller, onSelectBuyer, onSelectLoan }: IntakeGatewayProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tell Me What You're Trying to Do —<br />
            <span className="text-blue-600">I'll Show You the Smartest Path</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No pressure. No sales pitch.<br />
            Just strategy built around your situation.
          </p>
        </div>

        {/* Three Primary CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CARD 1 — SELLING A HOME */}
          <div 
            onClick={onSelectSeller}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-blue-500"
          >
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <Home className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Selling My Home
            </h2>
            
            <p className="text-blue-600 font-semibold mb-4 flex items-center gap-2">
              See Seller Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
            
            <p className="text-gray-600 text-sm">
              Why your home would sell — or stall — before relisting.
            </p>
            
            <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              See Seller Strategy
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* CARD 2 — BUYING A HOME */}
          <div 
            onClick={onSelectBuyer}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-green-500"
          >
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
              <Key className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Buying a Home
            </h2>
            
            <p className="text-green-600 font-semibold mb-4 flex items-center gap-2">
              Explore Buyer Strategy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
            
            <p className="text-gray-600 text-sm">
              What price, payment, and competition really mean for you.
            </p>
            
            <button className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              Explore Buyer Strategy
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* CARD 3 — HOME LOANS */}
          <div 
            onClick={onSelectLoan}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-transparent hover:border-yellow-500"
          >
            <div className="bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
              <DollarSign className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Home Loans
            </h2>
            
            <p className="text-yellow-600 font-semibold mb-4 flex items-center gap-2">
              View Loan Scenarios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </p>
            
            <p className="text-gray-600 text-sm">
              See payment options before talking to anyone.
            </p>
            
            <button className="mt-6 w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2">
              View Loan Scenarios
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
