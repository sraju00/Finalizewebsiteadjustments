import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface SellerAuditRequestProps {
  city?: string;
}

export function SellerAuditRequest({ city: propCity }: SellerAuditRequestProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get city from props, location state, or default to Tracy
  const city = propCity || (location.state as { city?: string })?.city || 'Tracy';
  
  const [formData, setFormData] = useState({
    propertyAddress: '',
    city: city,
    firstName: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Private Seller Audit Request',
      ...formData,
      // Automation mapping
      intent_type: 'seller_audit',
      lead_temperature: 'warm',
      lead_source: 'seller_center',
      page_source: `seller-center/${city.toLowerCase()}`,
      submittedAt: new Date().toLocaleString('en-US', {
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short',
      }),
    };

    try {
      const success = await submitToFormspree(payload);

      if (success) {
        console.log('Seller audit request submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          // Navigate back to the correct seller center
          const cityLower = city.toLowerCase();
          let backUrl = '/seller-center-tracy'; // default
          
          if (cityLower === 'manteca') {
            backUrl = '/seller-center-manteca';
          } else if (cityLower === 'lathrop') {
            backUrl = '/seller-center-lathrop';
          } else if (cityLower === 'mountain house') {
            backUrl = '/seller-center-mountain-house';
          } else if (cityLower === 'dublin') {
            backUrl = '/seller-center-dublin';
          } else if (cityLower === 'pleasanton') {
            backUrl = '/seller-center-pleasanton';
          }
          
          navigate(backUrl);
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting seller audit request:', error);
      alert('There was an error submitting your request. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }

    return false;
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12 max-w-2xl w-full text-center">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-gray-700" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received</h3>
          <p className="text-lg text-gray-700 mb-4">
            Your private seller audit request has been received.
          </p>
          <p className="text-gray-700">
            I'll review your property and contact you within 24 hours with next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => {
            const cityLower = city.toLowerCase();
            let backUrl = '/seller-center-tracy'; // default
            
            if (cityLower === 'manteca') {
              backUrl = '/seller-center-manteca';
            } else if (cityLower === 'lathrop') {
              backUrl = '/seller-center-lathrop';
            } else if (cityLower === 'mountain house') {
              backUrl = '/seller-center-mountain-house';
            } else if (cityLower === 'dublin') {
              backUrl = '/seller-center-dublin';
            } else if (cityLower === 'pleasanton') {
              backUrl = '/seller-center-pleasanton';
            }
            
            navigate(backUrl);
          }}
          className="text-gray-600 hover:text-gray-800 mb-8 flex items-center gap-2"
        >
          ← Back to Seller Center
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Private Seller Audit
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              This audit applies buyer behavior data to your specific address and price point.
            </p>
            <p className="text-gray-700 mt-3">
              Contact information is optional — address is required for analysis.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Property Address */}
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-900 mb-2">
                Property Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="123 Main Street"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Tracy"
              />
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-600 mb-6">
                <strong>Optional:</strong> Provide contact info if you'd like to discuss the audit.
              </p>

              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors font-medium text-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Request Audit'}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                No obligation • Response within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}