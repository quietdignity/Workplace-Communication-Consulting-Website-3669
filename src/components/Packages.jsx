import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPackage, FiArrowRight, FiCheck } = FiIcons;

const Packages = () => {
  const packages = [
    {
      name: "Discovery + Analysis Package",
      price: "Starting at $55,000",
      description: "Perfect if you want to understand both your formal communication effectiveness and your informal network reality before making any big decisions. You'll get the complete picture of your communication ecosystem and a clear roadmap of opportunities.",
      features: [
        "Complete Discovery phase with surveys and investigation",
        "Comprehensive Analysis using Johari Window framework",
        "Communication trace documentation",
        "Formal vs. informal network assessment",
        "Strategic roadmap with prioritized opportunities"
      ],
      popular: false
    },
    {
      name: "Design + Sustain Package",
      price: "Starting at $110,000",
      description: "Great for organizations that already understand they need a more intentional approach and want to build both the formal system and the cultural capability to maintain the balance between designed and emergent communication.",
      features: [
        "Integrated communication architecture design",
        "Multiple pathway strategy for different employee groups",
        "Internal champion development and training",
        "Communication culture training",
        "Ongoing optimization framework"
      ],
      popular: true
    },
    {
      name: "Complete Workplace Mapping Process",
      price: "Starting at $165,000",
      description: "The full experience—we'll work with you from initial assessment of your communication ecosystem all the way through to having your team running an effective, intentional distributed workforce communication strategy that works productively with informal networks.",
      features: [
        "All four phases included",
        "Complete assessment and analysis",
        "Custom system design that works with reality",
        "Internal capability building",
        "Long-term implementation support",
        "Adaptation framework for ongoing evolution"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Ways to Work Together
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose the engagement level that fits your organization's needs and communication reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-primary-500 shadow-lg' 
                  : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPackage} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">
                  {pkg.price}
                </p>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {pkg.description}
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
                href="mailto:james@themodernfire.com"
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
          <p className="text-neutral-600 italic">
            Pricing varies depending on your organization's size, how complex your workforce distribution is, and which parts of the process make sense for you. We can work with different budget cycles and organizational needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;