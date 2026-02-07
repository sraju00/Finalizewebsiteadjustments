import { useState, FormEvent } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface AIReportsFormProps {
  onClose?: () => void;
}

export function AIReportsForm({ onClose }: AIReportsFormProps) {
  const [formData, setFormData] = useState({
    propertyAddress: '',
    city: '',
    sellingTimeline: '',
    additionalInfo: '',
    firstName: '',
    lastName: '',
    email: ''
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
      formType: 'AI Reports Request',
      propertyAddress: formData.propertyAddress,
      city: formData.city,
      sellingTimeline: formData.sellingTimeline,
      additionalInfo: formData.additionalInfo || 'Not provided',
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('AI Reports form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting AI reports form:', error);
      alert('There was an error submitting your request. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Request Sent Successfully!
        </h3>
        <p className="text-lg text-gray-600 mb-8">
          Your AI report request has been received!
        </p>
        <p className="text-gray-600 mb-8">
          I'll personally review your property and send you a detailed AI-powered 
          analysis within 24 hours.
        </p>
        {onClose && (
          <button 
            onClick={onClose}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Get Your Free AI Reports
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Access AI-powered market intelligence to understand your home's position in today's market.
        </p>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          These reports analyze buyer demand, pricing pressure, and competition at your price point — 
          giving you clarity before making any decisions.
        </p>
      </div>

      {/* Value Proposition */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <p className="text-gray-700 mb-4 font-medium">
          All reports are AI-powered and human-reviewed for accuracy.
        </p>
        <p className="text-gray-700 mb-4">
          You'll receive insights on:
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Current buyer demand and engagement patterns</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Pricing zones where buyer interest peaks</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Market timing and competitive positioning</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic">
          Your information is private. No obligation to list or move forward.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Address */}
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
          />
        </div>

        {/* City */}
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

        {/* Selling Timeline */}
        <div>
          <label htmlFor="sellingTimeline" className="block text-sm font-medium text-gray-900 mb-2">
            Selling Timeline *
          </label>
          <select
            id="sellingTimeline"
            name="sellingTimeline"
            value={formData.sellingTimeline}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white"
          >
            <option value="">Select timeline...</option>
            <option value="Selling now (0–30 days)">Selling now (0–30 days)</option>
            <option value="1–3 months">1–3 months</option>
            <option value="3–6 months">3–6 months</option>
            <option value="6+ months / exploring">6+ months / exploring</option>
          </select>
        </div>

        {/* Additional Information */}
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-900 mb-2">
            Anything important I should know?
          </label>
          <p className="text-sm text-gray-600 mb-2">
            Price reductions, repairs needed, urgency, etc.
          </p>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
            placeholder="Tell me about any challenges, previous price changes, or special circumstances..."
          />
        </div>

        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="First"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Last"
            />
          </div>
        </div>

        {/* Email */}
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

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center gap-2 shadow-lg"
          >
            Get My Free AI Report
            <CheckCircle2 className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            100% Free • No Obligation • Response within 24 hours
          </p>
        </div>
      </form>
    </div>
  );
}