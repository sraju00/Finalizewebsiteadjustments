import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Key, MapPin, DollarSign } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface BuyerIntakeFormProps {
  onClose: () => void;
}

export function BuyerIntakeForm({ onClose }: BuyerIntakeFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    buyingStage: 'Just browsing',
    preferredCity: '',
    propertyType: 'SFR',
    beds: '',
    baths: '',
    priceRange: '$500K - $750K',
    paymentComfort: 'Conservative',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Buyer Intake Form',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'buyer',
      lead_source: 'website',
      page_source: 'sellwithrajnow.com',
      strategy_requested: 'Buyer Strategy',
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Buyer Intake form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
          <p className="text-gray-600 mb-2">
            Your buyer strategy request has been received!
          </p>
          <p className="text-gray-600">
            I'll analyze your buyer strategy and reach out within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Key className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Buyer Intake</h2>
          </div>
          <p className="text-green-100">
            Let's understand what you're looking for and your buying situation
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* SECTION A — BUYER PROFILE */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Key className="w-5 h-5 text-green-600" />
              Your Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* SECTION B — BUYING STAGE */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Buying Stage</h3>
            <div className="space-y-3">
              {['Just browsing', 'Actively looking', 'Under contract', 'Lost offers before'].map((stage) => (
                <label key={stage} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="buyingStage"
                    value={stage}
                    checked={formData.buyingStage === stage}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="text-gray-700">{stage}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SECTION C — TARGET AREA */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Target Property
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred City / ZIP
                </label>
                <input
                  type="text"
                  name="preferredCity"
                  value={formData.preferredCity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="San Jose or 95110"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="SFR">Single Family Residence</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhome">Townhome</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Beds</label>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                <input
                  type="number"
                  step="0.5"
                  name="baths"
                  value={formData.baths}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="2"
                />
              </div>
            </div>
          </div>

          {/* SECTION D — PAYMENT COMFORT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Payment Comfort
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Price Range
                </label>
                <select
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Under $500K">Under $500K</option>
                  <option value="$500K - $750K">$500K - $750K</option>
                  <option value="$750K - $1M">$750K - $1M</option>
                  <option value="$1M - $1.5M">$1M - $1.5M</option>
                  <option value="$1.5M - $2M">$1.5M - $2M</option>
                  <option value="$2M+">$2M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Payment Comfort
                </label>
                <select
                  name="paymentComfort"
                  value={formData.paymentComfort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Conservative">Conservative</option>
                  <option value="Stretch">Stretch</option>
                  <option value="Max">Max</option>
                </select>
              </div>
            </div>
          </div>

          {/* Consent */}
          <p className="text-xs text-gray-500">
            By submitting, you agree to receive messages related to your request. Reply STOP to opt out.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? 'Analyzing...' : 'Show Me Buyer Strategy'}
          </button>
        </form>
      </div>
    </div>
  );
}