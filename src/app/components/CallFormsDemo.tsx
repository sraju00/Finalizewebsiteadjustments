import { Target, MessageCircle, Phone } from 'lucide-react';

interface CallFormsDemoProps {
  onOpenStrategyCall: () => void;
  onOpenConsultationCall: () => void;
  onOpenQuickCall: () => void;
}

export function CallFormsDemo({ onOpenStrategyCall, onOpenConsultationCall, onOpenQuickCall }: CallFormsDemoProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📞 Three Ways to Connect
          </h1>
          <p className="text-lg text-gray-600">
            Choose the conversation style that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Strategy Call */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Strategy Call
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm">
              <strong>HIGH-INTENT</strong> • Most comprehensive
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-600">
              <li>✓ Detailed situation review</li>
              <li>✓ Conditional fields by topic</li>
              <li>✓ Strategy confirmation required</li>
              <li>✓ Lead temp: 🔥 HOT</li>
            </ul>
            <button
              onClick={onOpenStrategyCall}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Consultation Call */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Consultation
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm">
              <strong>MID-INTENT</strong> • Balanced depth
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-600">
              <li>✓ Topic selection dropdown</li>
              <li>✓ Timeline questions</li>
              <li>✓ Standard contact fields</li>
              <li>✓ Lead temp: 🟡 WARM</li>
            </ul>
            <button
              onClick={onOpenConsultationCall}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Book Consultation
            </button>
          </div>

          {/* Quick Call */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Phone className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
              Quick Call
            </h3>
            <p className="text-gray-600 mb-4 text-center text-sm">
              <strong>LOW FRICTION</strong> • Ultra-short
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-600">
              <li>✓ Name + phone only</li>
              <li>✓ Optional email</li>
              <li>✓ One simple checkbox</li>
              <li>✓ Lead temp: 🟢 COOL</li>
            </ul>
            <button
              onClick={onOpenQuickCall}
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Schedule Quick Call
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-bold text-gray-900 mb-3">📊 Current Button Locations:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong className="text-blue-600">Strategy Call:</strong> Services section (bottom CTA)</li>
            <li><strong className="text-indigo-600">Consultation:</strong> About Raj section (CTA button)</li>
            <li><strong className="text-emerald-600">Quick Call:</strong> Seller Q&A section (bottom CTA)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
