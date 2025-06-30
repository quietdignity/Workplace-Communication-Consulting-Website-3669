import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiChevronDown, FiMail, FiMessageCircle} = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the 20-Day Communication Diagnostic?",
      answer: "Our Communication Diagnostic is a rapid assessment that traces how information actually flows through your organization. In 20 business days, we conduct employee surveys, follow recent communications end-to-end, and map where your messages succeed and fail across office, hybrid, and frontline workers.\n\nYou get a clear report showing your biggest communication gaps, priority areas for improvement, and actionable next steps. Investment is $6,000 with immediate insights you can implement."
    },
    {
      question: "How does Fractional Strategist service work?", 
      answer: "Our Fractional Strategist service gives you senior-level communication expertise without a full-time hire. Starting at $4,000/month with a minimum 6-month engagement, you get:\n\n• Monthly strategic consultation sessions\n• Quarterly system health checks\n• Crisis communication support when needed\n• Internal champion training\n• Proven tools and methodologies\n\nPerfect for organizations that need ongoing expert guidance for their distributed workforce communication challenges."
    },
    {
      question: "What workforce types do you work with?",
      answer: "We specialize in organizations with distributed workforces including:\n\n• Manufacturing and production facilities\n• Retail operations with multiple locations\n• Field service and technician teams\n• Distribution and logistics operations\n• Municipal and government agencies\n• Healthcare systems with multiple sites\n• Any organization where office communication methods don't reach frontline workers effectively"
    },
    {
      question: "How is this different from traditional communication consulting?",
      answer: "Most consultants survey employees about communication preferences. We also trace actual messages through your organization to see what really happens.\n\nWe follow recent communications end-to-end, document where they succeed and fail, and map both formal channels and informal networks. This investigative approach reveals gaps that surveys alone miss, especially for distributed workforces where communication reality often differs from leadership assumptions."
    },
    {
      question: "What size organizations do you work with?",
      answer: "We typically work with organizations that have 100-3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments.\n\nThis includes companies where different workforce segments (office, hybrid, field, retail, manufacturing) have developed different communication patterns and need systematic coordination."
    },
    {
      question: "Can you help with crisis or emergency communication?",
      answer: "Yes. Our Fractional Strategist service includes crisis communication support when needed. We also design communication systems that work for both routine and urgent messaging.\n\nWe help create emergency protocols that actually reach field workers, off-shift employees, and distributed teams when it matters most, not just headquarters staff."
    },
    {
      question: "Do you work with remote/virtual teams?",
      answer: "Yes, but our specialty is organizations with true workforce distribution challenges—not just remote office workers, but employees who work in warehouses, retail stores, manufacturing plants, field locations, or other environments where traditional digital communication doesn't work well.\n\nWe help organizations reach frontline workers and operational staff who often get left out of standard communication strategies."
    },
    {
      question: "What's the typical timeline and investment?",
      answer: "Service options:\n\n• Communication Diagnostic: $6,000, 20 business days\n• Fractional Strategist: Starting at $4,000/month, minimum 6 months\n• Infrastructure Rebuild: Starts at $35,000, 8-16 months\n\nEnterprise-wide projects are quoted after initial assessment. We can move faster or slower depending on your organization's operational constraints."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Communication improvements typically impact safety compliance, operational efficiency, and employee engagement. Results include:\n\n• Faster information flow to all workforce segments\n• Reduced miscommunication costs and delays\n• Improved safety incident prevention\n• Better alignment between leadership and operational teams\n• Decreased turnover in frontline positions\n\nSpecific outcomes depend on your current gaps and implementation commitment."
    },
    {
      question: "How do you handle multiple locations?",
      answer: "We design communication systems that account for location-specific needs while maintaining organizational consistency. This includes both on-site visits to key locations and virtual coordination.\n\nWe're experienced working with teams across multiple locations, shifts, and work environments, understanding that each site may have developed different communication cultures that need systematic coordination."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Common questions about our evidence-based approach to distributed workforce communication
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon
                  icon={FiChevronDown}
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <div className="text-neutral-700 leading-relaxed whitespace-pre-line max-h-60 md:max-h-none overflow-y-auto">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-800 leading-relaxed mb-6">
              Email team@workplacemapping.com or schedule a call to discuss your specific distributed workforce communication challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:team@workplacemapping.com"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                team@workplacemapping.com
              </a>
              <a
                href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                Schedule Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;