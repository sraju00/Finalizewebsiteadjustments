import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AISummarySectionProps {
  city: string;
  summary: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function AISummarySection({ city, summary, faqs }: AISummarySectionProps) {
  const navigate = useNavigate();

  const handleDiagnosis = () => {
    navigate('/private-seller-audit');
  };

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          AI Summary — Seller Center: {city}
        </h2>

        {/* Summary Paragraph */}
        <div className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Quick Seller FAQ */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Quick Seller FAQ
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-gray-200 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft CTA */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get a 60-Second Seller Diagnosis
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Quick analysis of why buyers may be hesitating on your specific property.
          </p>
          <button
            onClick={handleDiagnosis}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium inline-flex items-center gap-2"
          >
            Start Diagnosis
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
