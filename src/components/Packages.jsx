import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap,FiUsers,FiTarget,FiArrowRight,FiCheck} = FiIcons;

const Packages = () => {
  const packages = [
    {
      name: "Communication Diagnostic",
      description: "Rapid 15-day assessment to identify your biggest communication gaps and get immediate strategic direction.",
      icon: FiZap,
      timeline: "15 business days",
      pricing: "$8,500",
      features: [
        "Strategic stakeholder interviews and communication flow analysis",
        "Infrastructure audit of channels, tools, and informal networks", 
        "Communication Reality Report with critical gap identification",
        "Quick wins action plan with immediate improvements",
        "90-minute strategy session and implementation roadmap",
        "Full credit toward monthly advisory if you proceed within 60 days"
      ],
      popular: false,
      isNew: true,
      color: "yellow"
    },
    {
      name: "Monthly Strategic Advisory", 
      description: "Ongoing senior-level expertise for continuous optimization and expert guidance on distributed workforce challenges.",
      icon: FiUsers,
      timeline: "3, 6, or 12 month engagements",
      pricing: "Starting at $8,500/month",
      features: [
        "Monthly 2-hour strategic consultations with communication expertise",
        "Crisis response support with rapid guidance (within 4 hours)", 
        "Quarterly team workshops for internal capability building",
        "Implementation support and effectiveness tracking",
        "Priority access for urgent distributed workforce decisions",
        "Proven tools, templates, and methodologies for ongoing use"
      ],
      popular: true,
      isNew: false,
      color: "green"
    },
    {
      name: "Complete Workplace Mapping",
      description: "Full transformation experience with employee investigation, custom system design, and comprehensive implementation support.",
      icon: FiTarget,
      timeline: "12-18 months total",
      pricing: "Investment varies by organizational size and complexity",
      features: [
        "Complete communication investigation including employee surveys and interviews",
        "Custom communication architecture designed for your distributed workforce",
        "Multiple pathway strategies validated through employee feedback", 
        "Full implementation with change management and culture transformation",
        "Internal champion certification and capability building",
        "6-month post-implementation optimization and support"
      ],
      popular: false,
      isNew: false,
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200'
    };
    return colors[color] || colors.blue;
  };

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
            Three Clear Options for Your Communication Challenges
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Whether you need rapid clarity, ongoing guidance, or complete transformation - each pathway delivers distinct value for your distributed workforce.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-700">
              Most organizations start with the Diagnostic to understand their specific gaps, then choose their optimal path forward.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular ? 'border-primary-500 shadow-lg' : 
                pkg.isNew ? 'border-yellow-500 shadow-lg' : 
                'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {(pkg.popular || pkg.isNew) && (
                <div className="text-center mb-6">
                  <span className={`${
                    pkg.popular ? 'bg-primary-600 text-white' : 'bg-yellow-500 text-white'
                  } px-4 py-1 rounded-full text-sm font-semibold`}>
                    {pkg.popular ? 'Most Popular' : 'NEW'}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(pkg.color)}`}>
                  <SafeIcon icon={pkg.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="space-y-1 mb-4">
                  <div className={`text-2xl font-bold ${
                    pkg.name === 'Complete Workplace Mapping' ? 'text-primary-600' : 'text-green-600'
                  }`}>
                    {pkg.pricing}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {pkg.timeline}
                  </div>
                </div>
                <p className="text-neutral-600 text-sm">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:team@workplacemapping.com"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.popular || pkg.isNew ? 
                    'bg-primary-600 hover:bg-primary-700 text-white' : 
                    'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                }`}
              >
                {pkg.name === 'Complete Workplace Mapping' ? 'Get Custom Quote' : 'Get Started'}
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
          className="mt-12"
        >
          <div className="bg-white p-8 rounded-xl border border-neutral-200 max-w-3xl mx-auto">
            <div className="text-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;