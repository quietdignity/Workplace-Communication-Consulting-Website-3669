import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiChevronDown, FiMail, FiMessageCircle} = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the 20-Day Diagnostic?",
      answer: "Our diagnostic is a rapid assessment that follows how information actually flows through your organization. In 20 business days, we survey employees across all workforce segments, follow important updates through the channels your teams actually use, map communication gaps, and provide clear recommendations.\n\nInvestment starts at $10,000 and varies based on organization size and complexity."
    },
    {
      question: "How does the Fractional Communications Strategist service work?",
      answer: "This gives you senior-level communication expertise without a full-time hire. You get monthly strategy sessions to address ongoing challenges, quarterly system health checks to ensure your communication infrastructure stays effective, crisis guidance when urgent situations arise, and team training to build internal capability. It's perfect for organizations that need ongoing expert support for their distributed workforce."
    },
    {
      question: "What makes your approach different?",
      answer: "Most consultants ask people what they think about communication. We also follow actual messages through your organization to see what really happens. We trace how safety alerts, policy changes, and urgent notices actually travel (or fail to travel) through your formal channels and informal networks. This combination gives us insights that surveys alone miss."
    },
    {
      question: "What types of workforces do you work with?",
      answer: "We specialize in distributed workforces where office communication methods don't reach everyone effectively. This includes manufacturing facilities, retail operations, field service teams, distribution centers, construction sites, healthcare systems, and any organization where frontline workers miss critical updates that reach office staff just fine."
    },
    {
      question: "How quickly can you start?",
      answer: "For the 20-Day Diagnostic, we can typically start within 1-2 weeks of our discovery call. The diagnostic itself takes exactly 20 business days from start to finish. For ongoing Fractional Strategist services, we can begin monthly sessions immediately after completing any initial assessment."
    },
    {
      question: "What size organizations do you work with?",
      answer: "We work with organizations that have distributed workforces where communication gaps create operational or safety risks. This typically means 100-3,000 employees across multiple locations, shifts, or work environments. The key factor isn't size—it's whether you have frontline workers who aren't effectively reached by your current communication methods."
    },
    {
      question: "Do you only work with large companies?",
      answer: "No. We work with any organization where communication gaps between office staff and frontline workers create real problems. Whether you're a 100-person manufacturing company or a 1,000-person retail chain, if your safety alerts, policy changes, or urgent notices aren't reaching everyone effectively, we can help."
    },
    {
      question: "What happens after the diagnostic?",
      answer: "After the 20-Day Diagnostic, you'll have clear recommendations and three options: implement the fixes yourself using our roadmap, work with us monthly as your Fractional Communications Strategist for ongoing support, or engage us for a complete Infrastructure Rebuild if the gaps require comprehensive transformation."
    },
    {
      question: "Can you help with crisis communication?",
      answer: "Yes. Our Fractional Strategist service includes crisis communication support when urgent situations arise. We also design communication systems that work for both routine and emergency messaging, ensuring your crisis communications actually reach frontline workers, not just office staff."
    },
    {
      question: "How do you measure success?",
      answer: "Success means critical information reaches the right people reliably and quickly. We measure this through reduced communication-related incidents, faster information flow to all workforce segments, decreased reliance on informal workarounds, and improved feedback loops between frontline workers and leadership."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Common questions about our approach to distributed workforce communication
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.05}}
              viewport={{once: true}}
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
                    initial={{height: 0, opacity: 0}}
                    animate={{height: 'auto', opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.3}}
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
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.3}}
          viewport={{once: true}}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-800 leading-relaxed mb-6">
              Email team@workplacemapping.com or book a discovery call to discuss your specific distributed workforce communication challenges.
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
                Book Discovery Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;