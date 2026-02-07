import { Award, TrendingUp, Users, MapPin, CheckCircle2, Phone } from 'lucide-react';
import rajPhoto from 'figma:asset/eb9d16c8421dbe6c22fa7c637aedaec48c059f59.png';

interface AboutRajProps {
  onOpenConsultationCall?: () => void;
}

export function AboutRaj({ onOpenConsultationCall }: AboutRajProps) {
  const credentials = [
    "California Licensed Realtor® (DRE #02249174)",
    "Certified Mortgage Strategist (NMLS #2676100)",
    "Member, National Association of Realtors®",
    "California Association of Realtors®",
    "Intero Real Estate • Cal Coast Financial"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <img 
              src={rajPhoto}
              alt="Raj - California Realtor and Mortgage Strategist"
              className="w-full h-auto"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-xl font-bold">Serving Central Valley & Bay Area</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Meet Your Strategist
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Sellers Choose to Work With Raj
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              I'm a California Licensed Realtor® and Certified Mortgage Strategist who helps homeowners sell smarter by combining deep market intelligence with AI-supported analysis — always reviewed and guided by human judgment.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              After seeing too many sellers overpay for outdated marketing or accept avoidable low offers, I built a data-backed selling system designed to diagnose exactly why homes fail to sell — and how to fix it efficiently.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Whether your listing expired, was canceled, or you're simply evaluating your options, I specialize in strategic relaunches that attract serious buyers, improve leverage, and create competitive outcomes — often within 30 days.
            </p>

            {/* Credentials */}
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Credentials & Certifications</h3>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="flex items-center gap-2 text-gray-700 mb-8">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm">
                <strong>📍 Serving:</strong> Central Valley & Bay Area
              </span>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <button 
                onClick={onOpenConsultationCall}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block text-center"
              >
                Book a Free Consultation →
              </button>
              <div className="text-sm text-gray-600">
                No pressure • Strategy-focused • Confidential<br />
                📞 (408) 813-0601
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}