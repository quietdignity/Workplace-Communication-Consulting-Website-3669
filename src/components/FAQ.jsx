import React,{useState} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiChevronDown,FiMail,FiMessageCircle}=FiIcons;

const FAQ=()=> {
  const [openIndex,setOpenIndex]=useState(null);

  const faqs=[
    {
      question: "What is Workplace Mapping?",
      answer: "Workplace Mapping is our systematic approach to understanding how communication actually flows through your organization—not how it's supposed to work, but how it really works.\n\nWe help organizations with distributed workforces build communication systems that reach everyone effectively. Our methodology maps your communication reality and creates solutions that work with your actual workforce constraints, whether you have office workers, field staff, retail locations, manufacturing plants, or other distributed teams."
    },
    {
      question: "What's included in the Communication Diagnostic?",
      answer: "The Communication Diagnostic is our rapid assessment service designed to give you immediate clarity on your communication gaps without the full investigation process.\n\nFor $8,500, you get:\n• Analysis of 1 to 2 recent communications to see where they succeed and fail\n• Profile of how your office/hybrid/field segments currently communicate\n• 3 to 5 quick wins you can implement immediately\n• Diagnostic report with prioritized recommendations\n• 90 minute strategy session\n• Full credit toward fractional advisory if you proceed within 60 days\n\nIt's the fastest way to get concrete evidence about your distributed workforce communication challenges."
    },
    {
      question: "How does the Fractional Internal Communications Strategist service work?",
      answer: "Our Fractional Internal Communications Strategist service gives you senior level expertise without the full time hire. Investment varies by organizational size, complexity, and scope.\n\nYou get:\n• Monthly 2 hour strategic consultations with communication expertise\n• Crisis communication support with rapid response (within 4 hours)\n• Quarterly team workshops for internal capability building\n• Communication effectiveness tracking and optimization\n• Priority access for urgent distributed workforce decisions\n• Proven tools, templates, and methodologies\n\nPerfect for organizations that need ongoing expert guidance but don't want to hire a full time internal communications director."
    },
    {
      question: "Can we schedule a consultation?",
      answer: "Absolutely! Please schedule a consultation at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      hasLink: true,
      linkUrl: "https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      linkText: "Schedule Now"
    },
    {
      question: "What size organizations do you work with?",
      answer: "We typically work with organizations that have 250 to 3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments.\n\nThis includes retail chains, manufacturing companies, logistics operations, field services, government agencies, and any multi-location operation where different sites have developed different communication cultures."
    },
    {
      question: "How do you handle distributed workforces?",
      answer: "We prefer to make at least one site visit to select locations to get a snapshot of what's really happening on the ground. However, many parts of our service including employee interviews can be done virtually.\n\nThis mix of on-site and virtual work depends on the size, scope, and operational limitations of your organization. We're experienced in working with teams across multiple locations, shifts, and work environments."
    },
    {
      question: "What makes this different from traditional consulting?",
      answer: "Most consultants survey employees about communication preferences and assume everyone works the same way. We actually investigate how messages travel through your organization by following real communications and mapping both formal and informal networks.\n\nWe recognize that office workers, hybrid employees, and field workers have fundamentally different communication needs and constraints. Our approach combines surveys (what people think is happening) with investigation (what's actually happening)."
    },
    {
      question: "What's the typical timeline and investment?",
      answer: "Timelines and investment vary based on service and your organization's needs:\n\n• Communication Diagnostic: $8,500, rapid turnaround\n• Fractional Internal Communications Strategist: 3, 6, or 12 month engagements (contact for pricing)\n• Internal Communications Rebuild: 12 to 18 months total (investment varies by size and complexity)\n\nWe can move faster or slower depending on your organization's needs and operational constraints. We typically work with 8 to 12 businesses a year, allowing us to provide focused, high quality engagement."
    },
    {
      question: "Do you work with remote/hybrid teams?",
      answer: "Yes, but our specialty is organizations with true workforce distribution challenges—not just remote office workers, but employees who work in warehouses, retail stores, manufacturing plants, field locations, or other environments where traditional digital communication doesn't work well.\n\nWe help organizations reach frontline workers, field teams, and operational staff who often get left out of standard communication strategies."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Communication improvements typically impact productivity, safety compliance, employee retention, and operational efficiency. While specific results vary by organization, many see improvements through:\n\n• Reduced miscommunication costs and delays\n• Faster information flow to all employee segments\n• Improved safety incident prevention\n• Decreased turnover in frontline positions\n• Better alignment between leadership and operational teams"
    },
    {
      question: "What if we're not sure which service is right for us?",
      answer: "That's exactly what our consultation is for. We'll discuss your specific distributed workforce communication challenges and help you determine which approach makes the most sense for your situation and budget.\n\nMost organizations start with the Communication Diagnostic ($8,500) to get concrete evidence of their communication gaps before committing to a larger engagement."
    },
    {
      question: "Can you help with crisis or emergency communication?",
      answer: "Yes, our Workplace Mapping methodology includes designing communication systems that work for both routine and urgent messaging. We can help you create emergency communication protocols that actually reach field workers, off-shift employees, and distributed teams when it matters most.\n\nOur Fractional Internal Communications Strategist service includes crisis response support with rapid guidance within 4 hours."
    }
  ];

  const toggleFAQ=(index)=> {
    setOpenIndex(openIndex===index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
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
          {faqs.map((faq,index)=> (
            <motion.article
              key={index}
              initial={{opacity: 0,y: 20}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.5,delay: index * 0.05}}
              viewport={{once: true}}
              className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={()=> toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors duration-200"
                aria-expanded={openIndex===index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <SafeIcon
                  icon={FiChevronDown}
                  className={`w-5 h-5 text-neutral-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex===index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex===index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{height: 0,opacity: 0}}
                    animate={{height: 'auto',opacity: 1}}
                    exit={{height: 0,opacity: 0}}
                    transition={{duration: 0.3}}
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
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8,delay: 0.3}}
          viewport={{once: true}}
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