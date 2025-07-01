import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap,FiUsers,FiTarget,FiArrowRight,FiCheck} = FiIcons;

const Services = () => {
  const services = [
    {
      name: "20-Day Diagnostic",
      icon: FiZap,
      color: "yellow",
      pricing: "Starts at $10,000",
      subtitle: "Contact us to discuss your specific needs",
      deliverables: [
        "Surveys across all workforce segments",
        "Following important updates through real channels",
        "Map of communication gaps",
        "Clear recommendations in 20 business days"
      ],
      popular: true,
      ctaText: "Get Your Diagnostic"
    },
    {
      name: "Fractional Communications Strategist",
      icon: FiUsers,
      color: "green",
      pricing: "Monthly engagement",
      subtitle: "Senior-level support without a full-time hire",
      deliverables: [
        "Monthly strategy sessions",
        "Quarterly system health checks",
        "Crisis guidance when you need it",
        "Team training and development"
      ],
      popular: false,
      ctaText: "Learn More"
    },
    {
      name: "Infrastructure Rebuild",
      icon: FiTarget,
      color: "blue",
      pricing: "Custom quote",
      subtitle: "Complete transformation for growing teams",
      deliverables: [
        "In-depth investigation",
        "Custom system design",
        "Hands-on implementation support",
        "Change management training"
      ],
      popular: false,
      ctaText: "Get Quote"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
      green: "bg-green-100 text-green-600 border-green-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Service Options
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? 'border-primary-500 relative'
                  : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(service.color)}`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <div className="mb-4">
                  <div className="text-lg font-bold text-primary-600 mb-1">
                    {service.pricing}
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.deliverables.map((deliverable, deliverableIndex) => (
                  <li key={deliverableIndex} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm leading-relaxed">{deliverable}</span>
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
                {service.ctaText}
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.6}}
            viewport={{once: true}}
          >
            <div className="bg-neutral-50 p-6 md:p-8 rounded-xl border border-neutral-200 max-w-4xl mx-auto">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-4 text-center">
                Questions About Which Option Is Right for You?
              </h3>
              <p className="text-neutral-600 mb-6 text-center px-2">
                Email us or book a discovery call to discuss your specific distributed workforce communication challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href="mailto:team@workplacemapping.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Email Us
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
                <a
                  href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 md:px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Book Discovery Call
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;