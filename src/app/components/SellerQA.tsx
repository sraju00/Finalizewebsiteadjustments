import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface SellerQAProps {
  onOpenQuickCall?: () => void;
}

export function SellerQA({ onOpenQuickCall }: SellerQAProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why didn't my home sell the first time?",
      answer: "In most cases, unsold listings follow a predictable pattern. The home was either positioned above where buyers were actively searching, failed to make a strong first impression online, or launched during a weak timing window in a saturated micro-market.\n\nSometimes it's one factor — often it's a combination.\nMy AI Relist Audit™ looks at real buyer behavior, pricing resistance, competition, and timing to pinpoint exactly what broke down and what needs to change."
    },
    {
      question: "How is your approach different from other agents?",
      answer: "Most agents focus on comps and marketing tactics.\nI focus on buyer behavior, liquidity, and payment reality — using data to understand why buyers didn't act, not just what similar homes sold for.\n\nEvery recommendation is supported by AI-driven analysis and reviewed by me personally, so decisions are strategic — not guesswork."
    },
    {
      question: "What if I already tried to sell and it didn't work?",
      answer: "That's actually when my system works best.\n\nExpired or canceled listings already contain valuable data — buyer reactions, pricing resistance, and timing signals. I use that information to relaunch strategically, instead of repeating the same approach and hoping for a different result."
    },
    {
      question: "How do you price my home?",
      answer: "I don't rely on comps alone.\n\nPricing is guided by:\n\n• Where buyers are actively searching\n• Where payment resistance begins\n• How competitive your price band is\n• How quickly similar homes are moving\n\nThis helps identify a pricing range that attracts buyers, instead of one that simply looks good on paper."
    },
    {
      question: "Do you charge extra for AI tools and reports?",
      answer: "No.\n\nThe AI tools and reports are free and informational. They're designed to help you understand your options clearly — whether or not you decide to move forward.\n\nIf you choose to list with me, those insights are simply built into the strategy."
    },
    {
      question: "How long does it typically take to sell?",
      answer: "That depends on price positioning, competition, and market timing.\n\nSome homes move quickly once they're aligned with buyer demand. Others require a more deliberate relaunch strategy. My goal is always to shorten unnecessary time on market by correcting the issues that slow buyers down — not rushing decisions."
    },
    {
      question: "What areas do you serve?",
      answer: "I serve the Central Valley and the Bay Area, focusing on data-driven strategies that adapt to local micro-markets rather than a one-size-fits-all approach."
    },
    {
      question: "Can you help me buy my next home too?",
      answer: "Yes.\n\nI help buyers use the same market intelligence — buyer activity, competition depth, and timing — to avoid overpaying and make stronger offers, especially in competitive markets."
    },
    {
      question: "What if I'm not ready to sell yet?",
      answer: "That's completely fine.\n\nMany homeowners start with a report simply to understand where they stand. There's no pressure to move forward. My role is to give you clarity so you can make decisions on your timeline."
    },
    {
      question: "Do I have to commit to anything to get a report?",
      answer: "No.\n\nThere's no obligation to list, no pressure, and no commitment required.\nThe reports are meant to inform — not lock you into anything."
    }
  ];

  return (
    <section id="seller-qa" className="py-20 bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img 
          src="https://images.unsplash.com/photo-1592222376988-92af20d4d06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwYnJpZ2h0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3NzM2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Home Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Common Seller Questions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Honest Answers to Real Questions
          </h2>
          <p className="text-xl text-gray-600">
            No fluff, no sales pitch—just straight talk about selling your home in today's market.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's talk about your specific situation—no commitment required.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 font-medium" onClick={onOpenQuickCall}>
            Schedule a Free Call
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}