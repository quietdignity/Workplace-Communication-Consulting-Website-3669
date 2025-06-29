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
      answer: "Workplace Mapping is our systematic approach to understanding how communication actually flows through your organization, not how it's supposed to work, but how it really works. We help organizations with distributed workforces build communication systems that reach everyone effectively.\n\nOur Workplace Mapping methodology maps your communication reality and creates solutions that work with your actual workforce constraints, whether you have office workers, field staff, retail locations, manufacturing plants, or other distributed teams."
    },
    {
      question: "What's the difference between the Fractional Internal Communications Strategist and traditional consulting?",
      answer: "Our Fractional Internal Communications Strategist service gives you senior level expertise without the full time hire. Unlike traditional consultants who come in for short projects, we provide ongoing strategic guidance for 3, 6, or 12 month engagements.\n\nYou get monthly strategic sessions, crisis communication support, quarterly team workshops, and priority access for urgent decisions. Most importantly, we understand distributed workforce communication challenges, not just office workers, but field teams, retail staff, manufacturing employees, and other segments that traditional consultants often overlook."
    },
    {
      question: "Can we schedule a consultation?",
      answer: "Absolutely! Please schedule a consultation at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      hasLink: true,
      linkUrl: "https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      linkText: "Schedule Now"
    },
    {
      question: "What's the investment for each service?",
      answer: "We offer three clear options:\n\n• Communication Diagnostic: $8,500 (15 business days) - Perfect for getting immediate clarity on your communication gaps\n\n• Fractional Internal Communications Strategist: Investment varies by organizational size, complexity, and scope. Limited spots available. - Ongoing expert guidance and team development\n\n• Internal Communications Rebuild: Investment varies by organizational size, complexity, and scope (12 to 18 months total) - Full transformation experience\n\nMost organizations start with the Diagnostic to understand their specific challenges, then choose the best path forward based on their needs and budget."
    },
    {
      question: "What's the typical timeline for implementation?",
      answer: "Timelines vary based on service and your organization's size and complexity:\n\n• Communication Diagnostic: 15 business days\n• Fractional Internal Communications Strategist: 3, 6, or 12 month engagements\n• Internal Communications Rebuild: 12 to 18 months total\n\nWe can move faster or slower depending on your organization's needs and operational constraints. We typically work with 8 to 12 businesses a year, allowing us to provide focused, high quality engagement with each organization."
    },
    {
      question: "How do you handle distributed workforces?",
      answer: "We prefer to make at least one site visit to select locations to get a snapshot of what's really happening on the ground. However, many parts of our service including employee interviews can be done virtually.\n\nThis mix of on site and virtual work depends on the size, scope, and operational limitations of your organization. We're experienced in working with teams across multiple locations, shifts, and work environments."
    },
    {
      question: "What size organizations do you work with?",
      answer: "We typically work with organizations that have 250 to 3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments.\n\nThis includes retail chains, manufacturing companies, logistics operations, field services, government agencies, and any multi location operation where different sites have developed different communication cultures."
    },
    {
      question: "Do you work with remote/hybrid organizations?",
      answer: "Yes, but our specialty is organizations with true workforce distribution challenges, not just remote office workers, but employees who work in warehouses, retail stores, manufacturing plants, field locations, or other environments where traditional digital communication doesn't work well.\n\nWe help organizations reach frontline workers, field teams, and operational staff who often get left out of standard communication strategies."
    },
    {
      question: "What does the Fractional Internal Communications Strategist service include?",
      answer: "Our fractional service includes monthly 2 hour strategic consultations, quarterly capability building workshops for your team, crisis communication support with rapid response (within 4 hours), communication effectiveness tracking, priority access for urgent decisions, and proven tools and templates.\n\nIt's perfect for organizations that need ongoing expert guidance but don't want to hire a full time internal communications director. You get senior level expertise at a fraction of the cost of a full time hire."
    },
    {
      question: "How do you protect employee confidentiality?",
      answer: "All employee interviews are completely confidential. We only share general themes and patterns in our analysis, never specific quotes tied to individuals.\n\nOur goal is to understand communication patterns and workflows, not evaluate individual performance. This confidentiality is essential for getting honest feedback about how communication really works in your organization."
    },
    {
      question: "What if our organization changes during the engagement?",
      answer: "We build flexibility into our Workplace Mapping methodology to adapt as we learn more about your organization. If significant changes occur, we'll work with you to adjust our approach while staying focused on your core communication challenges.\n\nOur extended timelines and fractional approach allow for organizational changes and ensure thorough implementation that sticks."
    },
    {
      question: "Do we have to implement all your recommendations?",
      answer: "Absolutely not. This is your organization, and you know your constraints best. Our job is to give you clear options and help you prioritize based on your reality, resources, and timeline.\n\nWe'll help you identify quick wins alongside longer term strategic improvements, so you can choose what makes sense for your situation."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Communication improvements typically impact productivity, safety compliance, employee retention, and operational efficiency. While specific results vary by organization, many see improvements through:\n\n• Reduced miscommunication costs and delays\n• Faster information flow to all employee segments\n• Improved safety incident prevention\n• Decreased turnover in frontline positions\n• Better alignment between leadership and operational teams"
    },
    {
      question: "Do you provide ongoing support after the engagement?",
      answer: "Our Workplace Mapping methodology includes training internal champions and building your organizational capability to maintain and evolve the communication systems we design together.\n\nWe also provide post completion support for questions, and many organizations engage us for our Fractional Internal Communications Strategist service for ongoing guidance as they grow and change."
    },
    {
      question: "What if we're not sure which service is right for us?",
      answer: "That's exactly what our consultation is for. We'll discuss your specific distributed workforce communication challenges and help you determine which approach makes the most sense for your situation and budget.\n\nMany organizations start with the Communication Diagnostic ($8,500, 15 business days) to get concrete evidence of their communication gaps before committing to a larger engagement."
    },
    {
      question: "Can you help with crisis or emergency communication?",
      answer: "Yes, our Workplace Mapping methodology includes designing communication systems that work for both routine and urgent messaging. We can help you create emergency communication protocols that actually reach field workers, off shift employees, and distributed teams when it matters most.\n\nThis is especially important for organizations with safety critical operations or those that need to reach employees quickly across multiple locations and shifts. Our Fractional Internal Communications Strategist service includes crisis response support with rapid guidance within 4 hours."
    },
    {
      question: "What makes this different from traditional consulting?",
      answer: "Most consultants survey employees about communication preferences and assume everyone works the same way. We actually investigate how messages travel through your organization by following real communications and mapping both formal and informal networks through our Workplace Mapping methodology.\n\nWe recognize that office workers, hybrid employees, and field workers have fundamentally different communication needs and constraints. Our approach combines surveys (what people think is happening) with investigation (what's actually happening).\n\nOur Fractional Internal Communications Strategist service also gives you ongoing expert guidance rather than one time consulting projects."
    },
    {
      question: "What's included in a typical engagement?",
      answer: "Depending on your service level, we'll conduct employee interviews across your workforce segments, trace actual company messages through your organization, analyze your communication infrastructure, and develop tailored solutions using our Workplace Mapping methodology.\n\nYou'll receive concrete deliverables like communication trace analysis, employee persona profiles, channel effectiveness scorecards, and implementation roadmaps, not just reports. Everything is designed to help you take action and see real results."
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
            Common questions about our Workplace Mapping methodology and fractional internal communications strategy
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
                      {faq.hasLink && faq.linkUrl && (
                        <div className="mt-4">
                          <a
                            href={faq.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                            {faq.linkText || 'Learn More'}
                          </a>
                        </div>
                      )}
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