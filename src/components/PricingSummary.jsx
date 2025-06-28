import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap, FiUsers, FiTarget, FiArrowRight, FiCheck} = FiIcons;

const PricingSummary = () => {
  const pricingOptions = [
    {
      name: "Communication Diagnostic",
      price: "$8,500",
      duration: "15 business days",
      description: "Quick assessment to identify gaps and get immediate clarity",
      features: [
        "Message flow analysis",
        "Quick wins action plan", 
        "Strategy session",
        "Credit toward full engagement"
      ],
      icon: FiZap,
      isNew: true,
      popular: false
    },
    {
      name: "Retainer & Workshops",
      price: "Starting at $8,500/month",
      duration: "3, 6, or 12 month engagements",
      description: "Ongoing support and team development for continuous improvement",
      features: [
        "Monthly strategic sessions",
        "Quarterly workshops",
        "Crisis communication support",
        "Priority access and tools"
      ],
      icon: FiUsers,
      isNew: false,
      popular: true
    },
    {
      name: "Complete Transformation",
      price: "Custom Quote",
      duration: "12-18 months total",
      description: "Full DISCOVER → ANALYZE → DESIGN → SUSTAIN experience",
      features: [
        "Complete methodology",
        "Custom system design",
        "Full implementation",
        "Internal capability building"
      ],
      icon: FiTarget,
      isNew: false,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Three clear options to match your organization's needs and timeline. No hidden fees, no confusing packages.
          </p>
          <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-700 font-medium">
              All pricing varies based on organization size, complexity, and specific needs
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                option.popular
                  ? 'border-primary-500 shadow-lg'
                  : option.isNew
                  ? 'border-yellow-500 shadow-lg'
                  : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {(option.popular || option.isNew) && (
                <div className="text-center mb-4">
                  <span
                    className={`${
                      option.popular
                        ? 'bg-primary-600 text-white'
                        : 'bg-yellow-500 text-white'
                    } px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    {option.popular ? 'Most Popular' : 'NEW'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={option.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {option.name}
                </h3>
                <div className="space-y-1 mb-4">
                  <div className={`text-2xl font-bold ${option.name === 'Complete Transformation' ? 'text-primary-600' : 'text-primary-600'}`}>
                    {option.price}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {option.duration}
                  </div>
                </div>
                <p className="text-neutral-600 text-sm">
                  {option.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:team@workplacemapping.com"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  option.popular || option.isNew
                    ? 'bg-primary-600 hover:bg-primary-700 text-white'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                }`}
              >
                {option.name === 'Complete Transformation' ? 'Get Custom Quote' : 'Get Started'}
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
          className="text-center"
        >
          <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-neutral-600 mb-6">
              Every organization's communication challenges are different. Let's discuss your specific situation and find the best approach for your timeline and budget.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule Free Consultation
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSummary;