import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { submitToFormspree } from '@/app/utils/formspree-submit';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    const payload = {
      formType: 'Contact Form',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toLocaleString('en-US', { 
        timeZone: 'America/Los_Angeles',
        dateStyle: 'full',
        timeStyle: 'short'
      })
    };

    try {
      const success = await submitToFormspree(payload);
      
      if (success) {
        console.log('Contact form submitted successfully');
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => {
          setIsSuccess(false);
          setIsSubmitting(false);
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('There was an error submitting your message. Please try again or call (408) 813-0601 for assistance.');
      setIsSubmitting(false);
    }
    
    return false;
  };

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12">
          Get in touch with us for any questions, concerns, or assistance. We're here to help!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">
                      Use the contact form to send us a message
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+14088130601" 
                      className="text-blue-600 hover:underline"
                    >
                      (408) 813-0601
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Mon-Fri 9am-6pm PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      860 Hillview Ct #300<br />
                      Milpitas, CA 95035<br />
                      United States of America
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Raj (Raju) Saravanan</h3>
              <p className="text-blue-600 font-medium mb-3">Realtor® + Mortgage Strategist</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Intero Real Estate • Cal Coast Financial</p>
                <p>DRE #02249174 • NMLS #2676100</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">✓ Message sent successfully!</p>
                <p className="text-green-700 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our{' '}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="bg-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Serving Central Valley & Bay Area</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide AI-powered real estate insights and services throughout California's Central Valley and Bay Area. 
            Schedule a consultation to see how our data-driven approach can help you sell smarter.
          </p>
        </div>
      </div>
    </div>
  );
}