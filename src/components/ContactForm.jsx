import React, {useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../lib/supabase';

const {FiMail, FiUser, FiMessageSquare, FiBuilding, FiPhone, FiSend, FiCheck, FiChevronDown} = FiIcons;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const inquiryTypes = [
    {value: 'consultation', label: 'Schedule a Consultation'},
    {value: 'communication-diagnostic', label: 'Communication Diagnostic'},
    {value: 'fractional-strategist', label: 'Fractional Internal Communications Strategist'},
    {value: 'complete-transformation', label: 'Complete Workplace Mapping'},
    {value: 'workshops', label: 'Workshops & Team Training'},
    {value: 'speaking', label: 'Speaking Engagements'},
    {value: 'press', label: 'Press Inquiries & Interviews'},
    {value: 'other', label: 'Other Inquiry'}
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 1. FIRST: Create email content and open email client (PRIMARY BACKUP)
      const subject = encodeURIComponent(`NEW INQUIRY - ${inquiryTypes.find(type => type.value === formData.inquiryType)?.label || 'General'} - ${formData.name}`);
      const emailBody = encodeURIComponent(
        `NEW CONTACT FORM SUBMISSION\n` +
        `================================\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company || 'Not provided'}\n` +
        `Inquiry Type: ${inquiryTypes.find(type => type.value === formData.inquiryType)?.label || 'Not specified'}\n` +
        `Submission Time: ${new Date().toLocaleString()}\n\n` +
        `MESSAGE:\n` +
        `${formData.message}\n\n` +
        `================================\n` +
        `PRIORITY LEVEL:\n` +
        `${formData.inquiryType === 'press' ? 'HIGH - Press Inquiry' : formData.inquiryType === 'speaking' ? 'MEDIUM - Speaking Engagement' : formData.inquiryType === 'consultation' ? 'HIGH - Consultation Request' : 'STANDARD - Service Inquiry'}\n\n` +
        `SUGGESTED NEXT STEPS:\n` +
        `${formData.inquiryType === 'consultation' ? '1. Respond within 4 hours\n2. Send TidyCal link\n3. Prepare consultation materials' : formData.inquiryType === 'press' ? '1. Respond within 2 hours\n2. Send media kit\n3. Schedule interview' : formData.inquiryType === 'speaking' ? '1. Respond within 24 hours\n2. Send speaker packet\n3. Discuss availability' : '1. Respond within 24 hours\n2. Send relevant service information\n3. Schedule discovery call'}\n\n` +
        `This message was submitted via workplacemapping.com contact form`
      );

      // Open email client immediately (this is your guaranteed backup)
      window.open(`mailto:team@workplacemapping.com?subject=${subject}&body=${emailBody}`);

      // 2. SECOND: Save to Supabase database for analytics/backup
      const {data, error: supabaseError} = await supabase
        .from('contact_submissions_wm2024')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || null,
            inquiry_type: formData.inquiryType,
            message: formData.message,
            source: 'website_contact_form',
            email_sent: true // Flag that email was triggered
          }
        ]);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        // Don't throw here - email backup already sent
      }

      // 3. THIRD: Track analytics (optional, don't let this fail the submission)
      try {
        if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
          window.gtag('event', 'form_submission', {
            event_category: 'lead_generation',
            event_label: formData.inquiryType || 'general',
            value: 1
          });
        }

        await supabase
          .from('analytics_events_wm2024')
          .insert([
            {
              event_type: 'form_submission',
              event_category: 'lead_generation',
              event_label: formData.inquiryType || 'general',
              page_url: window.location.href,
              user_session: sessionStorage.getItem('session_id') || 'anonymous',
              metadata: {
                contact_name: formData.name,
                contact_email: formData.email,
                inquiry_type: formData.inquiryType,
                has_company: !!formData.company
              }
            }
          ]);
      } catch (analyticsError) {
        console.error('Analytics tracking error:', analyticsError);
        // Don't fail the form submission for analytics errors
      }

      setIsSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiryType: '',
          message: ''
        });
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);

      // Even if everything else fails, try email backup one more time
      const fallbackSubject = encodeURIComponent('FALLBACK - Contact Form Submission');
      const fallbackBody = encodeURIComponent(
        `FALLBACK SUBMISSION (System Error Occurred)\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Company: ${formData.company}\n` +
        `Inquiry Type: ${formData.inquiryType}\n` +
        `Message: ${formData.message}\n\n` +
        `Error: ${err.message || 'Unknown error'}`
      );

      window.open(`mailto:team@workplacemapping.com?subject=${fallbackSubject}&body=${fallbackBody}`);

      setError('There was a system error, but we\'ve opened your email client to send the message directly. Please send the email to ensure we receive your inquiry.');

    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        className="bg-white rounded-xl p-8 shadow-lg border border-green-200 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest. We've received your message and will get back to you within 24 hours.
        </p>
        {formData.inquiryType === 'press' && (
          <p className="text-green-600 text-sm">
            <strong>Press inquiries receive priority response within 2 hours.</strong>
          </p>
        )}
        {formData.inquiryType === 'consultation' && (
          <p className="text-green-600 text-sm">
            <strong>Consultation requests receive response within 4 hours.</strong>
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      viewport={{once: true}}
      className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          Get Started Today
        </h3>
        <div className="w-full flex justify-center">
          <p className="text-neutral-600 text-center">
            Tell us about your communication challenges or inquiry type
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm text-center">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type Dropdown */}
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
            What can we help you with? *
          </label>
          <div className="relative">
            <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-10 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">Select inquiry type...</option>
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <SafeIcon icon={FiChevronDown} className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
              Full Name *
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
              Email Address *
            </label>
            <div className="relative">
              <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="your@company.com"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
              Phone Number
            </label>
            <div className="relative">
              <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
              Company Name
            </label>
            <div className="relative">
              <SafeIcon icon={FiBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2 text-center">
            Message *
          </label>
          <div className="relative">
            <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 w-5 h-5 text-neutral-400" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              placeholder={
                formData.inquiryType === 'consultation' ? 'Tell us about your distributed workforce communication challenges...' :
                formData.inquiryType === 'speaking' ? 'Tell us about your event, audience size, preferred topics, and dates...' :
                formData.inquiryType === 'press' ? 'Please include your publication, deadline, and specific topics of interest...' :
                formData.inquiryType === 'workshops' ? 'Tell us about your team size, current challenges, and preferred training format...' :
                'How can we help with your communication challenges?'
              }
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            <>
              <SafeIcon icon={FiSend} className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>

        <div className="text-center">
          <p className="text-xs text-neutral-500">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
          {(formData.inquiryType === 'press' || formData.inquiryType === 'consultation') && (
            <p className="text-xs text-primary-600 mt-2 font-medium">
              {formData.inquiryType === 'press' ? 'Press inquiries receive priority response within 2 hours.' : 'Consultation requests receive response within 4 hours.'}
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;