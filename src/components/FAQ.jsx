import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiMail, FiMessageCircle } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Workplace Mapping?",
      answer: "Workplace Mapping was developed by James A. Brown while working in local government. During that time James realized two things: \"no two workplaces operate the exact same way\" and \"the question isn't whether internal communications systems exist. The question is how much control, access and understanding you will have of how your employees communicate.\"\n\nWorkplace Mapping is our systematic approach to understanding how communication actually flows through your organization—not how it's supposed to work, but how it really works. We help organizations with distributed workforces (office workers, field staff, retail locations, etc.) build communication systems that reach everyone effectively. Our DISCOVER • ANALYZE • DESIGN • SUSTAIN methodology maps your communication reality and creates solutions that work with your actual workforce constraints."
    },
    {
      question: "What makes Workplace Mapping different from traditional communication consulting?",
      answer: "Most consultants survey employees about communication preferences and assume everyone works the same way. We actually investigate how messages travel through your organization by following real communications and mapping both formal and informal networks. We recognize that office workers, hybrid employees, and field workers have fundamentally different communication needs and constraints."
    },
    {
      question: "Can we schedule a consultation?",
      answer: "Absolutely! Please schedule a consultation at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
    },
    {
      question: "What's the typical timeline for implementation?",
      answer: "Timelines vary based on service package and the size and complexity of your operations. We typically work with 8 to 12 businesses a year, allowing us to provide focused, high-quality engagement with each client.\n\nIndividual Phase Timelines:\n• DISCOVER Phase: 2-4 months\n• ANALYZE Phase: 2-4 months\n• DESIGN Phase: 3-5 months\n• SUSTAIN Phase: 4-6 months\n\nPackage Timelines:\n• Discovery + Analysis Package: 4-5 months\n• Design + Sustain Package: 8-12 months\n• Complete Workplace Mapping Transformation: 11-15 months\n\nWe can move faster or slower depending on your organization's needs and operational constraints."
    },
    {
      question: "How do you handle distributed workforces?",
      answer: "We prefer to make at least one site visit to a select number of your locations. This way we get a snapshot of what's really happening on the ground, but many parts of our service including employee interviews can be done virtually. This mix of on-site and virtual work depends on the size, scope, and operational limitations of your organization."
    },
    {
      question: "What size organizations do you work with?",
      answer: "We typically work with organizations that have 250-3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments. This includes retail chains, manufacturing companies, logistics operations, field services, and government agencies."
    },
    {
      question: "Do you work with remote/hybrid organizations?",
      answer: "Yes, but our specialty is organizations with true workforce distribution challenges—not just remote office workers, but employees who work in warehouses, retail stores, manufacturing plants, field locations, or other environments where traditional digital communication doesn't work well."
    },
    {
      question: "What does a typical engagement include?",
      answer: "Depending on your package, we'll conduct employee interviews across your workforce segments, trace actual company messages through your organization, analyze your communication infrastructure, and develop tailored solutions. You'll receive concrete deliverables like communication trace analysis, employee persona profiles, channel effectiveness scorecards, and implementation roadmaps—not just reports."
    },
    {
      question: "How do you protect employee confidentiality?",
      answer: "All employee interviews are completely confidential. We only share general themes and patterns in our analysis, never specific quotes tied to individuals. Our goal is to understand communication patterns, not evaluate individual performance."
    },
    {
      question: "What if our organization changes during the engagement?",
      answer: "We build flexibility into our process to adapt as we learn more about your organization. If significant changes occur, we'll work with you to adjust our approach while staying focused on your core communication challenges. Our extended timelines (11-15 months for complete transformation) allow for organizational changes and ensure thorough implementation."
    },
    {
      question: "Do we have to implement all your recommendations?",
      answer: "Absolutely not. This is your organization, and you know your constraints best. Our job is to give you clear options and help you prioritize based on your reality, resources, and timeline. We'll help you identify quick wins alongside longer-term strategic improvements."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Communication improvements typically impact productivity, safety compliance, employee retention, and operational efficiency. While specific ROI varies by organization, many clients see returns through reduced miscommunication costs, faster information flow, improved safety incident prevention, and decreased turnover in frontline positions."
    },
    {
      question: "Do you provide ongoing support after the engagement?",
      answer: "Our SUSTAIN phase (4-6 months) includes training internal champions and building your organizational capability to maintain and evolve the communication systems we design together. We also provide 90-day post-completion support for questions, and many clients engage us for periodic check-ins or additional phases."
    },
    {
      question: "What if we're not sure which package is right for us?",
      answer: "That's exactly what our consultation is for. We'll discuss your specific distributed workforce communication challenges and help you determine which approach makes the most sense for your situation and budget. Sometimes a Discovery + Analysis package (4-5 months) provides the insights you need before committing to full transformation."
    },
    {
      question: "Can you help with crisis or emergency communication?",
      answer: "Yes, our methodology includes designing communication systems that work for both routine and urgent messaging. We can help you create emergency communication protocols that actually reach field workers, off-shift employees, and distributed teams when it matters most."
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
            Workplace Mapping FAQs
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Common questions about our systematic approach to distributed workforce communication
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
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
                      {faq.question === "Can we schedule a consultation?" && (
                        <div className="mt-4">
                          <a
                            href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                            Schedule Now
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
              Need More Information?
            </h3>
            <p className="text-primary-800 leading-relaxed mb-6">
              If you have questions not covered here, please feel free to reach out to our team. We'll be happy to discuss your specific situation and how Workplace Mapping might help your organization.
            </p>
            <a
              href="mailto:team@workplacemapping.com"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              team@workplacemapping.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;