import { useState, FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    timeline: '',
    previousListing: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      timeline: formData.timeline,
      previousListing: formData.previousListing,
      notes: formData.notes,
      formType: 'CTA Footer Form',
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('CTA form submitted successfully');
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          timeline: '',
          previousListing: '',
          notes: '',
        });
        setTimeout(() => {
          setIsSuccess(false);
          setIsSubmitting(false);
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting CTA form:', error);
      alert('There was an error submitting your information. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Messaging */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Sell Smarter?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get access to free, AI-powered reports designed to help you understand your home's value, buyer demand, and market position — with no pressure and no obligation.
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              These reports are the same tools I use to guide sellers through pricing, timing, and relaunch decisions — reviewed personally to ensure accuracy and context.
            </p>

            {/* What You'll Receive */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">What You'll Receive</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• AI Home Value & Pricing Insight</li>
                <li>• Buyer Magnet Score™ (buyer demand analysis)</li>
                <li>• Market timing & liquidity indicators</li>
              </ul>
              <p className="text-blue-100 mt-4">
                Clear information you can actually use — whether you're selling now or just exploring options.
              </p>
            </div>

            {/* Trust & Credentials */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold mb-4">✅ Trust & Credentials</h4>
              <div className="space-y-2 text-blue-50 text-sm">
                <div className="flex items-start gap-2">
                  <span>✔</span>
                  <span>California Licensed Realtor® (DRE #02249174)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✔</span>
                  <span>Certified Mortgage Strategist (NMLS #2676100)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>✔</span>
                  <span>AI-driven analysis, human-reviewed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                  We'll send your AI reports to your email within 5 minutes and follow up within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Get Your Free AI Reports
                  </h3>
                  <p className="text-gray-600">
                    Instant access to your home value, buyer demand signals, and market insights — generated by AI and reviewed by a licensed professional.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="john@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="(408) 813-0601"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <select
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select City</option>
                      <option value="Stockton">Stockton</option>
                      <option value="Modesto">Modesto</option>
                      <option value="Fresno">Fresno</option>
                      <option value="Tracy">Tracy</option>
                      <option value="Manteca">Manteca</option>
                      <option value="San Jose">San Jose</option>
                      <option value="Fremont">Fremont</option>
                      <option value="Hayward">Hayward</option>
                      <option value="Oakland">Oakland</option>
                      <option value="Pleasanton">Pleasanton</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      When are you looking to sell?
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select Timeline</option>
                      <option value="ASAP">ASAP (within 30 days)</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="previousListing" className="block text-sm font-medium text-gray-700 mb-2">
                      Did this home fail to sell before?
                    </label>
                    <select
                      id="previousListing"
                      name="previousListing"
                      value={formData.previousListing}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Select Status</option>
                      <option value="Never listed">Never listed before</option>
                      <option value="Expired">Yes - expired listing</option>
                      <option value="Cancelled">Yes - cancelled by me</option>
                      <option value="Withdrawn">Yes - withdrawn</option>
                      <option value="Currently listed">Currently listed with another agent</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      placeholder="Anything else we should know?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free AI Reports'}
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    🔒 By submitting, you agree to receive your requested reports and follow-up communication.<br />
                    Your information is kept private. No spam. No obligation.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}