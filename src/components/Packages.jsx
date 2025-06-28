import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPackage, FiArrowRight, FiCheck } = FiIcons;

const Packages = () => {
  const packages = [
    {
      name: "Discovery + Analysis Package",
      description: "Complete understanding package - investigate what's happening and analyze what it means. Perfect for organizations that want comprehensive insights before making implementation decisions.",
      services: ["DISCOVER", "ANALYZE"],
      timeline: "4-5 months total",
      pricing: "Starting at $50,000",
      features: [
        "Complete communication investigation and employee surveys",
        "Communication trace analysis of recent messages",
        "Deep analysis of your communication ecosystem",
        "Employee segment communication profiles",
        "Strategic roadmap with prioritized opportunities",
        "Implementation readiness assessment"
      ],
      popular: false
    },
    {
      name: "Design + Sustain Package",
      description: "Implementation package - build the system and ensure it thrives. Ideal for organizations ready to create and maintain new communication strategies.",
      services: ["DESIGN", "SUSTAIN"],
      timeline: "8-12 months total",
      pricing: "Starting at $90,000",
      features: [
        "Custom communication architecture for your workforce",
        "Multiple pathway strategies for different employee groups",
        "Detailed implementation roadmap",
        "Internal champion development and training",
        "Communication culture transformation support",
        "90-day post-implementation support"
      ],
      popular: true
    },
    {
      name: "Complete Workplace Mapping Package",
      description: "Full transformation experience - all four phases integrated for comprehensive communication strategy development and implementation.",
      services: ["DISCOVER", "ANALYZE", "DESIGN", "SUSTAIN"],
      timeline: "11-15 months total",
      pricing: "Starting at $140,000",
      features: [
        "Complete communication investigation and analysis",
        "Custom system design for your distributed workforce",
        "Full implementation with change management",
        "Internal capability building and training",
        "Ongoing optimization systems",
        "Extended support during transition"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Packages: Bundled for Common Client Journeys
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Strategic combinations of our individual phases designed for typical client scenarios. Ensure seamless integration across multiple phases.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-700">
              Bundled phases ensure smooth transitions between phases and coordinated delivery for maximum impact.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular
                  ? 'border-primary-500 shadow-lg'
                  : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {pkg.popular && (
                <div className="text-center mb-4">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPackage} className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-4">
                  {pkg.name}
                </h4>
                <p className="text-neutral-600 leading-relaxed text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {pkg.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <p className="text-primary-600 font-semibold text-sm mb-2">
                  {pkg.timeline}
                </p>
                <p className="text-green-600 font-medium text-sm">
                  {pkg.pricing}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:team@workplacemapping.com"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.popular
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
          <div className="bg-white p-8 rounded-xl border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Need a Custom Combination?
            </h3>
            <p className="text-neutral-600 mb-6">
              While these packages cover the most common client scenarios, we can create custom combinations based on your specific needs, timeline, and budget constraints.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Discuss Custom Options
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;