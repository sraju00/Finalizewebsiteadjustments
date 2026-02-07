import { Mail, Phone, MapPin } from 'lucide-react';
import interoLogo from 'figma:asset/873cfa9afb9f35b2a14375f55ed7c80fb28d0b18.png';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              SellWithRaj<span className="text-blue-500">Now</span>.com
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered real estate insights for Central Valley and Bay Area homeowners. 
              Licensed Realtor® + Mortgage Strategist.
            </p>
            <img 
              src={interoLogo} 
              alt="Intero Real Estate Services" 
              className="h-14 w-auto mb-6"
            />
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Selling a Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Buying a Home</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Home Loans</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">AI Tools & Reports</a></li>
              <li><a href="#seller-qa" className="hover:text-blue-500 transition-colors">Seller Q&A</a></li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h4 className="text-white font-bold mb-4">Free AI Tools</h4>
            <ul className="space-y-3">
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">AI Home Value</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">Buyer Magnet Score™</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">AI Relist Audit™</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">Heat Map Pricing™</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-500 transition-colors">Payment Grid™</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="hover:text-blue-500 transition-colors">
                  rsaravanan@intero.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+14088130601" className="hover:text-blue-500 transition-colors">
                  (408) 813-0601
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p>860 Hillview Ct #300</p>
                  <p>Milpitas, CA 95035</p>
                  <p>United States of America</p>
                  <p className="mt-2 text-gray-400 text-sm">
                    Serving Central Valley<br />& Bay Area, California
                  </p>
                </div>
              </li>
            </ul>
            
            {/* Find Me On Zillow */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h5 className="text-white font-medium mb-3 text-sm">Find Me Online</h5>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://www.zillow.com/profile/Raj%20Saravanan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                  </svg>
                  Zillow →
                </a>
                <a 
                  href="https://dashboard.realtor.com/agent-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
                  </svg>
                  Realtor.com →
                </a>
                <a 
                  href="https://biz.yelp.com/biz_info/1hQfKmJF6WFGTr7mkDyaIw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  Yelp →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          {/* Professional Signature */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-2">Raj (Raju) Saravanan</h4>
              <p className="text-blue-400 font-medium mb-3">Realtor® + Mortgage Strategist</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-400 mb-3">
                <span className="hover:text-blue-400 transition-colors">
                  rsaravanan@intero.com
                </span>
                <span className="hidden sm:inline">•</span>
                <span>Intero Real Estate • Cal Coast Financial</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-300">
                <span>DRE #02249174</span>
                <span className="hidden sm:inline">•</span>
                <span>NMLS #2676100</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p className="mb-2">
                © 2026 SellWithRajNow.com. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-blue-500 transition-colors">Accessibility</Link>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-600 leading-relaxed">
            <p>
              <strong>Legal Disclaimers:</strong> All AI tools and reports are provided for informational purposes only and do not constitute a 
              formal appraisal, CMA, or guarantee of sale price or timeline. Market conditions change daily. Licensed under California 
              Bureau of Real Estate. Equal Housing Opportunity. This is not an offer to lend or extend credit. Mortgage products subject 
              to credit approval and property appraisal. Buyer Magnet Score™, Heat Map Pricing™, Liquidity Snapshot™, Buyer Activity Bands™, 
              Payment Grid™, AI Relist Audit™, Market Depth Wheel™, and Relaunch Blueprint™ are proprietary frameworks of SellWithRajNow.com. 
              AI-generated reports are reviewed by licensed professionals before delivery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}