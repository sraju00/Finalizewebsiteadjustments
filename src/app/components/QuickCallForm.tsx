import { useState, FormEvent } from 'react';
import { X, CheckCircle2, Phone } from 'lucide-react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

interface QuickCallFormProps {
  onClose: () => void;
}

export function QuickCallForm({ onClose }: QuickCallFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    quickCall: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Quick Call Request',
      ...formData,
      // Automation mapping for CRM/Follow Up Boss
      intent_type: 'quick_call',
      lead_temperature: 'cool',
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
        console.log('Quick Call form submitted successfully');
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting quick call form:', error);
      alert('There was an error submitting your form. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Scheduled!</h3>
          <p className="text-gray-600 mb-2">
            Your call request has been received!
          </p>
          <p className="text-gray-600">
            I'll reach out shortly to connect.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-t-2xl relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Schedule a Free Call</h2>
          </div>
          <p className="text-emerald-100">
            Quick conversation. No prep required.
          </p>
        </div>

        {/* Form - Scrollable */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1">
          {/* Contact Fields */}
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Optional Checkbox */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="quickCall"
                checked={formData.quickCall}
                onChange={handleChange}
                className="w-4 h-4 text-emerald-600 mt-1"
              />
              <span className="text-sm text-gray-700">
                I want a quick call to ask questions.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Processing...' : 'Schedule My Call'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">
              Super fast. Zero commitment.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}