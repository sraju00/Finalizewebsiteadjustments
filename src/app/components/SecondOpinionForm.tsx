import { useState, FormEvent } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, X } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface SecondOpinionFormProps {
  onClose: () => void;
}

export function SecondOpinionForm({ onClose }: SecondOpinionFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyAddress: '',
    city: '',
    currentPrice: '',
    listingStatus: '',
    daysOnMarket: '',
    showingsCount: '',
    whatHappened: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Second Opinion Form',
      ...formData,
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Second Opinion form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting second opinion form:', error);
      alert('There was an error submitting your request. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const totalSteps = 4;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-2xl w-full text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Request Sent Successfully!
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Your second opinion request has been received!
          </p>
          <p className="text-gray-600 mb-8">
            I'll personally review your property's situation and reach out 
            within 24-48 hours if I believe a second opinion would be helpful.
          </p>
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-2xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Request a Second Opinion
          </h2>
          <p className="text-gray-600">
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    s <= step
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <form onSubmit={handleSubmit}>
          {/* Step 1: Property Location */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Let's start with your property location
                </h3>
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-900 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="123 Main Street"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-900 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g., San Jose, Stockton, Fremont"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.propertyAddress || !formData.city}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Pricing & Status */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Tell me about your listing
                </h3>
              </div>

              <div>
                <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-900 mb-2">
                  Current or Last List Price *
                </label>
                <input
                  type="text"
                  id="currentPrice"
                  name="currentPrice"
                  value={formData.currentPrice}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="e.g., $850,000"
                  autoFocus
                />
              </div>

              <div>
                <label htmlFor="listingStatus" className="block text-sm font-medium text-gray-900 mb-2">
                  Current Status *
                </label>
                <select
                  id="listingStatus"
                  name="listingStatus"
                  value={formData.listingStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
                >
                  <option value="">Select status...</option>
                  <option value="Currently listed">Currently listed</option>
                  <option value="Expired">Expired</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Withdrawn">Withdrawn</option>
                  <option value="Thinking about relisting">Thinking about relisting</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="daysOnMarket" className="block text-sm font-medium text-gray-900 mb-2">
                    Days on Market
                  </label>
                  <input
                    type="text"
                    id="daysOnMarket"
                    name="daysOnMarket"
                    value={formData.daysOnMarket}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="e.g., 45"
                  />
                </div>
                <div>
                  <label htmlFor="showingsCount" className="block text-sm font-medium text-gray-900 mb-2">
                    # of Showings
                  </label>
                  <input
                    type="text"
                    id="showingsCount"
                    name="showingsCount"
                    value={formData.showingsCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="e.g., 12"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.currentPrice || !formData.listingStatus}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: What Happened */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  What happened with your listing?
                </h3>
              </div>

              <div>
                <label htmlFor="whatHappened" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell me your story
                </label>
                <p className="text-sm text-gray-600 mb-2">
                  Share details about showings, feedback, offers, or anything that might help me understand your situation.
                </p>
                <textarea
                  id="whatHappened"
                  name="whatHappened"
                  value={formData.whatHappened}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="e.g., Had 15 showings but no offers. Some feedback said price was too high. Reduced price once by $50k after 30 days, but still no interest..."
                  autoFocus
                />
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  How can I reach you?
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="First Last"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  ✓ 100% Free • No Obligation • Confidential Review
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  {!isSubmitting && <CheckCircle2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}