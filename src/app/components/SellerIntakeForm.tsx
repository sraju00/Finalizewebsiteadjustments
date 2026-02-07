import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Home, TrendingDown, DollarSign } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface SellerIntakeFormProps {
  onClose: () => void;
}

export function SellerIntakeForm({ onClose }: SellerIntakeFormProps) {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    zip: '',
    propertyType: 'SFR',
    beds: '',
    baths: '',
    sqft: '',
    listingStatus: 'Planning to Sell',
    lastListPrice: '',
    desiredPrice: '',
    timeline: '1–3 months',
    intentConfirm: false,
    firstName: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Seller Intake Form',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'seller',
      lead_source: 'website',
      page_source: 'sellwithrajnow.com',
      strategy_requested: 'Seller Strategy',
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Seller Intake form submitted successfully');
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
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
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
          <p className="text-gray-600 mb-4">
            Your seller strategy request has been received!
          </p>
          <p className="text-gray-600">
            I'll analyze your seller strategy and reach out within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Home className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Seller Intake</h2>
          </div>
          <p className="text-blue-100">
            Let's understand your property and selling situation
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* SECTION A — PROPERTY BASICS */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-blue-600" />
              Property Basics
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="San Jose"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="95110"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Approx Sq Ft</label>
                <input
                  type="number"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="1500"
                />
              </div>
            </div>
          </div>

          {/* SECTION B — LISTING STATUS */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-blue-600" />
              Listing Status
            </h3>
            <div className="space-y-3">
              {['Active', 'Expired', 'Withdrawn', 'Cancelled', 'Planning to Sell'].map((status) => (
                <label key={status} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="listingStatus"
                    value={status}
                    checked={formData.listingStatus === status}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="text-gray-700">{status}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SECTION C — PRICE & TIMING */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-blue-600" />
              Price & Timing
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last List Price (if applicable)
                </label>
                <input
                  type="text"
                  name="lastListPrice"
                  value={formData.lastListPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$750,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Price (optional)
                </label>
                <input
                  type="text"
                  name="desiredPrice"
                  value={formData.desiredPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$725,000"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="ASAP (0–30 days)">ASAP (0–30 days)</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION D — SELLER INTENT SIGNAL */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="intentConfirm"
                checked={formData.intentConfirm}
                onChange={handleChange}
                required
                className="w-5 h-5 text-blue-600 mt-1"
              />
              <span className="text-gray-700">
                <span className="font-semibold">I want to understand why my home would or wouldn't attract buyers.</span>
                <span className="text-red-500"> *</span>
              </span>
            </label>
          </div>

          {/* SECTION E — CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By submitting, you agree to receive messages related to your request. Reply STOP to opt out.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? 'Analyzing...' : 'Analyze My Seller Strategy'}
          </button>
        </form>
      </div>
    </div>
  );
}