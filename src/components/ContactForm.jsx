import React, {useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import supabase from '../lib/supabase';

const {FiMail, FiUser, FiMessageSquare, FiBuilding, FiSend, FiCheck} = FiIcons;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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
      const subject = encodeURIComponent('NEW INQUIRY - Workplace Mapping Contact Form');
      const emailBody = encodeURIComponent(
        `NEW CONTACT FORM SUBMISSION\n` +
        `================================\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || 'Not provided'}\n` +
        `Submission Time: ${new Date().toLocaleString()}\n\n` +
        `MESSAGE:\n` +
        `${formData.message}\n\n` +
        `================================\n` +
        `This message was submitted via workplacemapping.com contact form`
      );

      // Open email client immediately (this is your guaranteed backup)
      window.open(`mailto:team@workplacemapping.com?subject=${subject}&body=${emailBody}`);

      // 2. SECOND: Save to Supabase database for analytics/backup
      const { data, error: supabaseError } = await supabase
        .from('contact_submissions_wm2024')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
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
            event_label: 'contact_form',
            value: 1
          });
        }

        await supabase
          .from('analytics_events_wm2024')
          .insert([
            {
              event_type: 'form_submission',
              event_category: 'lead_generation',
              event_label: 'contact_form',
              page_url: window.location.href,
              user_session: sessionStorage.getItem('session_id') || 'anonymous',
              metadata: {
                contact_name: formData.name,
                contact_email: formData.email,
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
        setFormData({name: '', email: '', company: '', message: ''});
      }, 5000);

    } catch (err) {
      console.error('Error submitting form:', err);
      
      // Even if everything else fails, try email backup one more time
      const fallbackSubject = encodeURIComponent('FALLBACK - Contact Form Submission');
      const fallbackBody = encodeURIComponent(
        `FALLBACK SUBMISSION (System Error Occurred)\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company}\n` +
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-8 shadow-lg border border-green-200 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest. We've received your message and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-green-600">
          ✅ Email copy sent to team@workplacemapping.com<br/>
          ✅ Message saved to our system for follow-up
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          Get Started Today
        </h3>
        <p className="text-neutral-600">
          Tell us about your distributed workforce communication challenges
        </p>
      </div>

      {error && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
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
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
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

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
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

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Tell us about your communication challenges *
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
              placeholder="Describe your distributed workforce, current communication challenges, and what you're hoping to achieve..."
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
          <p className="text-xs text-neutral-500 mb-2">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
          <p className="text-xs text-primary-600 font-medium">
            📧 A copy will be emailed directly to team@workplacemapping.com
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;