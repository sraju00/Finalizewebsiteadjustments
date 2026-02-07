import { useState, FormEvent } from 'react';
import { X, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface ConsultationCallFormProps {
  onClose: () => void;
}

export function ConsultationCallForm({ onClose }: ConsultationCallFormProps) {
  const [formData, setFormData] = useState({
    discussTopic: '',
    timing: '',
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
      formType: 'Consultation Call Request',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'consultation_call',
      lead_temperature: 'warm',
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
        console.log('Consultation Call form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting consultation form:', error);
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
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Booked!</h3>
          <p className="text-gray-600 mb-2">
            Your consultation request has been received!
          </p>
          <p className="text-gray-600">
            I'll reach out within 24 hours to schedule our conversation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Book a Free Consultation Call</h2>
          </div>
          <p className="text-indigo-100">
            Let's talk through your options and next steps.
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1">
          {/* SECTION A — WHAT DO YOU WANT TO DISCUSS? */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              What do you want to discuss? <span className="text-red-500">*</span>
            </h3>
            <select
              name="discussTopic"
              required
              value={formData.discussTopic}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base"
            >
              <option value="">Select a topic</option>
              <option value="Selling options">Selling options</option>
              <option value="Buying options">Buying options</option>
              <option value="Loan questions">Loan questions</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          {/* SECTION B — TIMING */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Timing <span className="text-red-500">*</span>
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-colors">
                <input
                  type="radio"
                  name="timing"
                  value="Soon (0-30 days)"
                  checked={formData.timing === 'Soon (0-30 days)'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-indigo-600"
                />
                <span className="font-medium text-gray-900">Soon (0–30 days)</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-colors">
                <input
                  type="radio"
                  name="timing"
                  value="1-3 months"
                  checked={formData.timing === '1-3 months'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-indigo-600"
                />
                <span className="font-medium text-gray-900">1–3 months</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-400 transition-colors">
                <input
                  type="radio"
                  name="timing"
                  value="Just researching"
                  checked={formData.timing === 'Just researching'}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 text-indigo-600"
                />
                <span className="font-medium text-gray-900">Just researching</span>
              </label>
            </div>
          </div>

          {/* SECTION C — CONTACT */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Processing...' : 'Book Free Consultation'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Casual conversation. No pressure.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}