import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiBarChart, FiSettings, FiRefreshCw, FiArrowRight, FiCheck, FiClock } = FiIcons;

const Services = () => {
  const services = [
    {
      name: "DISCOVER",
      subtitle: "Investigate Your Communication Reality",
      icon: FiSearch,
      color: "blue",
      description: "Perfect if you want to understand what's really happening with your communication before making any decisions. This standalone gives you complete clarity on both your formal systems and informal networks.",
      whatWeDoFeatures: [
        "Survey Component: We'll survey employees across your workforce to understand their perceptions of how communication works, what they think about current channels, and what they believe they need.",
        "Investigation Component: We'll follow 3-5 recent company communications through your organization to document exactly where they go, how they change, and who they actually reach. We'll also identify informal communication networks and understand how they supplement or compete with your formal channels.",
        "Employee Conversations: We'll interview people across your workforce—office staff, field workers, managers, frontline employees—to understand both how they officially receive information and how they really get and share information day-to-day.",
        "Reality Check: We'll catalog what communication tools and channels you have available and how they're actually being used, not just how they're supposed to be used."
      ],
      deliverables: [
        "Complete communication investigation and employee surveys",
        "Formal vs. informal network documentation",
        "Communication trace analysis of recent messages",
        "Johari Window analysis showing blind spots and gaps",
        "Strategic roadmap with prioritized improvement opportunities",
        "Standalone deliverable - no commitment to additional phases"
      ],
      timeline: "2-4 months",
      pricing: "Starting at $25,000",
      popular: false
    },
    {
      name: "ANALYZE",
      subtitle: "Make Sense of Your Communication Ecosystem",
      icon: FiBarChart,
      color: "green",
      description: "Great for organizations that have data about their communication challenges and want expert analysis to make sense of it all. We'll help you understand what your communication patterns mean and what to do about them.",
      whatWeDoFeatures: [
        "Johari Window Analysis: We'll map your communication patterns to show you exactly where your formal strategy is working, where informal networks have filled gaps, and where blind spots exist that neither system is addressing.",
        "Formal vs. Informal Network Assessment: We'll evaluate which formal communication methods actually work for different types of employees and how informal networks supplement or undermine those methods.",
        "Finding Integration Opportunities: We'll identify where your informal communication networks are actually working well and should be supported, versus where they're creating problems that need to be addressed.",
        "Priority Setting: We'll help you prioritize where to focus your efforts for maximum impact, considering both the formal systems you can design and the informal networks you need to work with."
      ],
      deliverables: [
        "Deep analysis of your existing communication data",
        "Employee segment communication profiles",
        "Integration opportunities between formal and informal networks",
        "Priority framework for maximum impact improvements",
        "Implementation readiness assessment",
        "Can use your data or our DISCOVER results"
      ],
      timeline: "2-4 months",
      pricing: "Starting at $25,000",
      popular: false
    },
    {
      name: "DESIGN",
      subtitle: "Build Systems That Work With Reality",
      icon: FiSettings,
      color: "purple",
      description: "For organizations ready to build intentional communication systems that work with their reality. We'll create a comprehensive strategy that leverages both formal channels and productive informal networks.",
      whatWeDoFeatures: [
        "Integrated Communication Architecture: We'll design an approach that leverages both formal channels and existing informal networks to reach your office workers, your hybrid employees, and your field teams effectively.",
        "Multiple Pathway Strategy: For each employee group, we'll create primary formal channels, secondary backup methods, and ways to integrate productive informal networks so nothing falls through the cracks.",
        "Feedback Loop Design: We'll build systems that help information flow both ways effectively, ensuring that insights from your distributed workforce make it back to leadership through reliable channels.",
        "Implementation Roadmap: You'll get a detailed plan that acknowledges both the formal changes you need to make and the informal communication culture you're working with."
      ],
      deliverables: [
        "Custom communication architecture for your workforce",
        "Multiple pathway strategies for different employee groups",
        "Integration plans for formal and informal networks",
        "Detailed implementation roadmap",
        "Change management framework",
        "Can build on previous phases or start with current assessment"
      ],
      timeline: "3-5 months",
      pricing: "Starting at $40,000",
      popular: true
    },
    {
      name: "SUSTAIN",
      subtitle: "Make Your Strategy Stick and Evolve",
      icon: FiRefreshCw,
      color: "orange",
      description: "Ensure your communication improvements stick and evolve with your organization. We'll train your team to maintain the balance between intentional design and productive informal networks.",
      whatWeDoFeatures: [
        "Internal Champion Development: We'll identify and train people in your organization who can keep workplace mapping going and help maintain the balance between formal and informal communication.",
        "Communication Culture Training: Your team will understand not just what to do, but how to work with the communication patterns that naturally develop in distributed workforces.",
        "Ongoing Optimization: We'll help you build systems to regularly assess whether your intentional communication strategy is staying aligned with the informal networks that will continue to evolve.",
        "Adaptation Framework: We'll teach your team how to recognize when informal networks are pointing to gaps in formal communication and how to respond constructively."
      ],
      deliverables: [
        "Internal champion development and training",
        "Communication culture transformation support",
        "Ongoing optimization systems and processes",
        "Adaptation framework for organizational changes",
        "90-day post-implementation support",
        "Works with any existing communication system or our DESIGN phase"
      ],
      timeline: "4-6 months",
      pricing: "Starting at $50,000",
      popular: false
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            How We Work: Individual Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            A systematic approach to understanding and improving your distributed workforce communication. Each delivers specific, substantial value on its own.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto">
            <p className="text-primary-700">
              Every phase is designed to deliver complete, actionable results whether used alone or combined with others. Best results come from starting with discover and working toward sustain.
            </p>
          </div>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column - Overview */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${getColorClasses(service.color)}`}>
                      <SafeIcon icon={service.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        Phase {index + 1}: {service.name}
                      </h3>
                      <p className="text-neutral-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {service.popular && (
                    <div className="mb-4">
                      <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <SafeIcon icon={FiClock} className="w-5 h-5" />
                      <span className="text-sm font-medium">Timeline: {service.timeline}</span>
                    </div>
                    <p className="text-green-600 font-semibold">
                      {service.pricing}
                    </p>
                  </div>

                  <a
                    href="mailto:team@workplacemapping.com"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                    }`}
                  >
                    Get Started
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3 space-y-8">
                  {/* What We Do */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">What We Do:</h4>
                    <ul className="space-y-3">
                      {service.whatWeDoFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-neutral-700 leading-relaxed text-sm">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What You Get */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start gap-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Not Sure Which to Start With?
            </h3>
            <p className="text-neutral-600 mb-6">
              We'll help you determine which makes the most sense for your situation, timeline, and budget. Every organization's communication challenges are different.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule a Conversation
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;