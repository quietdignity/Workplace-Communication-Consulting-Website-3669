import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiBarChart, FiSettings, FiRefreshCw, FiArrowRight, FiCheck } = FiIcons;

const Services = () => {
  const services = [
    {
      name: "DISCOVER Service",
      subtitle: "Investigate Your Communication Reality",
      icon: FiSearch,
      color: "blue",
      description: "Perfect if you want to understand what's really happening with your communication before making any decisions. This standalone service gives you complete clarity on both your formal systems and informal networks.",
      features: [
        "Complete communication investigation and employee surveys",
        "Formal vs. informal network documentation",
        "Communication trace analysis of recent messages",
        "Johari Window analysis showing blind spots and gaps",
        "Strategic roadmap with prioritized improvement opportunities",
        "Standalone deliverable - no commitment to additional services"
      ],
      timeline: "Timeline: 2-4 months",
      pricing: "Starting at $25,000",
      popular: false
    },
    {
      name: "ANALYZE Service",
      subtitle: "Make Sense of Your Communication Ecosystem",
      icon: FiBarChart,
      color: "green",
      description: "Great for organizations that have data about their communication challenges and want expert analysis to make sense of it all. We'll help you understand what your communication patterns mean and what to do about them.",
      features: [
        "Deep analysis of your existing communication data",
        "Employee segment communication profiles",
        "Integration opportunities between formal and informal networks",
        "Priority framework for maximum impact improvements",
        "Implementation readiness assessment",
        "Can use your data or our DISCOVER Service results"
      ],
      timeline: "Timeline: 2-4 months",
      pricing: "Starting at $25,000",
      popular: false
    },
    {
      name: "DESIGN Service",
      subtitle: "Build Systems That Work With Reality",
      icon: FiSettings,
      color: "purple",
      description: "For organizations ready to build intentional communication systems that work with their reality. We'll create a comprehensive strategy that leverages both formal channels and productive informal networks.",
      features: [
        "Custom communication architecture for your workforce",
        "Multiple pathway strategies for different employee groups",
        "Integration plans for formal and informal networks",
        "Detailed implementation roadmap",
        "Change management framework",
        "Can build on previous services or start with current assessment"
      ],
      timeline: "Timeline: 3-5 months",
      pricing: "Starting at $25,000",
      popular: true
    },
    {
      name: "SUSTAIN Service",
      subtitle: "Make Your Strategy Stick and Evolve",
      icon: FiRefreshCw,
      color: "orange",
      description: "Ensure your communication improvements stick and evolve with your organization. We'll train your team to maintain the balance between intentional design and productive informal networks.",
      features: [
        "Internal champion development and training",
        "Communication culture transformation support",
        "Ongoing optimization systems and processes",
        "Adaptation framework for organizational changes",
        "90-day post-implementation support",
        "Works with any existing communication system or our DESIGN Service"
      ],
      timeline: "Timeline: 4-6 months",
      pricing: "Starting at $25,000",
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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Individual Services: Meet You Where You Are
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Each service delivers specific, substantial value on its own. Start with the service that addresses your most pressing need.
          </p>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-lg text-primary-800 font-semibold mb-2">
              Individual services start at $25,000
            </p>
            <p className="text-primary-700">
              Every service is designed to deliver complete, actionable results whether used alone or combined with others.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? 'border-primary-500 shadow-lg'
                  : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {service.popular && (
                <div className="text-center mb-4">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${getColorClasses(service.color)}`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-2">
                  {service.name}
                </h4>
                <p className="text-neutral-600 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-primary-600 font-semibold text-sm mb-2">
                  {service.timeline}
                </p>
                <p className="text-green-600 font-medium text-sm">
                  {service.pricing}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-neutral-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Not Sure Which Service to Start With?
            </h3>
            <p className="text-neutral-600 mb-6">
              We'll help you determine which service makes the most sense for your situation, timeline, and budget. Every organization's communication challenges are different.
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