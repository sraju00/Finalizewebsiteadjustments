import { useState, FormEvent } from 'react';
import { X, CheckCircle2, DollarSign, Briefcase, Home } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface LoanIntakeFormProps {
  onClose: () => void;
}

export function LoanIntakeForm({ onClose }: LoanIntakeFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    loanTypes: {
      purchase: false,
      refinance: false,
      cashOut: false,
      investment: false,
      firstTimeBuyer: false,
    },
    creditRange: '700-749',
    employment: 'W-2',
    downPayment: '10-20%',
    estimatedPrice: '',
    occupancy: 'Primary',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Loan Intake Form',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'loan',
      lead_source: 'website',
      page_source: 'sellwithrajnow.com',
      strategy_requested: 'Loan Scenarios',
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Loan Intake form submitted successfully');
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
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        loanTypes: {
          ...prev.loanTypes,
          [name]: checked,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
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
            Your loan request has been received!
          </p>
          <p className="text-gray-600">
            I'll prepare your loan scenarios and reach out within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Home Loan Intake</h2>
          </div>
          <p className="text-yellow-100">
            Let's understand your loan needs and financial situation
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* Contact Information First */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your Information</h3>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          </div>

          {/* SECTION A — LOAN TYPE */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              Loan Type (select all that apply)
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="purchase"
                  checked={formData.loanTypes.purchase}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600"
                />
                <span className="text-gray-700">Purchase</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="refinance"
                  checked={formData.loanTypes.refinance}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600"
                />
                <span className="text-gray-700">Refinance</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="cashOut"
                  checked={formData.loanTypes.cashOut}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600"
                />
                <span className="text-gray-700">Cash-out</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="investment"
                  checked={formData.loanTypes.investment}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600"
                />
                <span className="text-gray-700">Investment</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="firstTimeBuyer"
                  checked={formData.loanTypes.firstTimeBuyer}
                  onChange={handleChange}
                  className="w-4 h-4 text-yellow-600"
                />
                <span className="text-gray-700">First-time buyer</span>
              </label>
            </div>
          </div>

          {/* SECTION B — CREDIT & INCOME */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-yellow-600" />
              Credit & Income
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Credit Range</label>
                <select
                  name="creditRange"
                  value={formData.creditRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="750+">750+</option>
                  <option value="700-749">700-749</option>
                  <option value="650-699">650-699</option>
                  <option value="600-649">600-649</option>
                  <option value="Below 600">Below 600</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment</label>
                <select
                  name="employment"
                  value={formData.employment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="W-2">W-2</option>
                  <option value="Self-Employed">Self-Employed</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment Range</label>
                <select
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="0-5%">0-5%</option>
                  <option value="5-10%">5-10%</option>
                  <option value="10-20%">10-20%</option>
                  <option value="20-30%">20-30%</option>
                  <option value="30%+">30%+</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION C — PROPERTY INFO */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-yellow-600" />
              Property Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Price</label>
                <input
                  type="text"
                  name="estimatedPrice"
                  value={formData.estimatedPrice}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="$750,000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Occupancy</label>
                <select
                  name="occupancy"
                  value={formData.occupancy}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="Primary">Primary</option>
                  <option value="Second Home">Second Home</option>
                  <option value="Investment">Investment</option>
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
            className="w-full bg-yellow-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-yellow-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? 'Processing...' : 'View Loan Scenarios'}
          </button>
        </form>
      </div>
    </div>
  );
}