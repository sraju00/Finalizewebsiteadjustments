import { useState, FormEvent } from 'react';
import { X, Calendar, CheckCircle2, Target } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface StrategyCallFormProps {
  onClose: () => void;
}

export function StrategyCallForm({ onClose }: StrategyCallFormProps) {
  const [formData, setFormData] = useState({
    // Section A
    workingOn: '',
    // Section B - Selling
    sellingCity: '',
    sellingStatus: '',
    sellingPriceRange: '',
    // Section B - Buying
    buyingCity: '',
    buyingBudget: '',
    buyingTimeline: '',
    // Section B - Loans
    loanType: '',
    loanAmount: '',
    // Section C
    strategyConfirm: false,
    // Section D
    name: '',
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
      formType: 'Strategy Call Request',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'strategy_call',
      call_type: 'seller_strategy',
      lead_temperature: 'hot',
      lead_source: 'website',
      page_source: 'sellwithrajnow.com',
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Strategy Call form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting strategy call form:', error);
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
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Strategy Call Booked!</h3>
          <p className="text-gray-600 mb-2">
            Your strategy call request has been received!
          </p>
          <p className="text-gray-600 mb-2">
            I'll review your situation and reach out within 24 hours to schedule our call.
          </p>
          <p className="text-sm text-gray-500">
            Check your email for confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Book Your Free Strategy Call</h2>
          </div>
          <p className="text-blue-100">
            This is not a generic call.<br />
            I review your situation before we speak.
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* SECTION A — WHAT ARE YOU WORKING ON? */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              What are you working on? <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="workingOn"
                  value="Selling a home"
                  checked={formData.workingOn === 'Selling a home'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-blue-600"
                />
                <span className="font-medium text-gray-900">Selling a home</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="workingOn"
                  value="Buying a home"
                  checked={formData.workingOn === 'Buying a home'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-blue-600"
                />
                <span className="font-medium text-gray-900">Buying a home</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="workingOn"
                  value="Home loans"
                  checked={formData.workingOn === 'Home loans'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-blue-600"
                />
                <span className="font-medium text-gray-900">Home loans</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors">
                <input
                  type="radio"
                  name="workingOn"
                  value="Combination"
                  checked={formData.workingOn === 'Combination'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-blue-600"
                />
                <span className="font-medium text-gray-900">Combination</span>
              </label>
            </div>
          </div>

          {/* SECTION B — CONDITIONAL FIELDS BASED ON SELECTION */}
          {(formData.workingOn === 'Selling a home' || formData.workingOn === 'Combination') && (
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Selling Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property City
                  </label>
                  <input
                    type="text"
                    name="sellingCity"
                    value={formData.sellingCity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Modesto, Stockton, San Jose"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Status
                  </label>
                  <select
                    name="sellingStatus"
                    value={formData.sellingStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select status</option>
                    <option value="Active">Active</option>
                    <option value="Expired">Expired</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Withdrawn">Withdrawn</option>
                    <option value="Planning">Planning to list</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Price Range
                  </label>
                  <input
                    type="text"
                    name="sellingPriceRange"
                    value={formData.sellingPriceRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $600K - $700K"
                  />
                </div>
              </div>
            </div>
          )}

          {(formData.workingOn === 'Buying a home' || formData.workingOn === 'Combination') && (
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Buying Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target City
                  </label>
                  <input
                    type="text"
                    name="buyingCity"
                    value={formData.buyingCity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., Modesto, Stockton, San Jose"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="buyingBudget"
                    value={formData.buyingBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="e.g., $500K - $650K"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    name="buyingTimeline"
                    value={formData.buyingTimeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="0-30 days">0-30 days</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6+ months">6+ months</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {(formData.workingOn === 'Home loans' || formData.workingOn === 'Combination') && (
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Loan Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Type
                  </label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Cash-out">Cash-out</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Loan Amount
                  </label>
                  <input
                    type="text"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="e.g., $500,000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SECTION C — STRATEGY FILTER */}
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-blue-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="strategyConfirm"
                checked={formData.strategyConfirm}
                onChange={handleChange}
                required
                className="w-5 h-5 text-blue-600 mt-1"
              />
              <div>
                <span className="font-semibold text-gray-900 block mb-1">
                  I want clear guidance before making my next move. <span className="text-red-500">*</span>
                </span>
                <span className="text-sm text-gray-600">
                  This confirms you're ready for a strategic conversation.
                </span>
              </div>
            </label>
          </div>

          {/* SECTION D — CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
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
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Processing...' : 'Book My Strategy Call'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              No obligation. No sales pressure.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}