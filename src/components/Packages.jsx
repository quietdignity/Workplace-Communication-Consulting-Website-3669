import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap,FiUsers,FiTarget,FiArrowRight,FiCheck,FiBookOpen} = FiIcons;

const Packages = () => {
  const packages = [
    {
      name: "Communication Assessment",
      description: "Rapid diagnostic to identify your biggest communication gaps in just 14 days. Perfect for organizations that need concrete evidence and quick wins before committing to larger transformation.",
      icon: FiZap,
      timeline: "14 business days",
      pricing: "Starting at $2,500",
      features: [
        "Strategic stakeholder interview session with leadership and operations",
        "Rapid communication audit of recent company messages",
        "Communication Reality Report with critical gap analysis",
        "Quick wins action plan with 3 immediate improvements",
        "60-minute strategy session to review findings",
        "Full credit toward larger engagement if you proceed within 60 days"
      ],
      popular: false,
      isNew: true,
      color: "yellow"
    },
    {
      name: "Fractional Internal Communications Strategy", 
      description: "Ongoing support and senior-level expertise for organizations that want continuous improvement and strategic guidance for their distributed workforce communication.",
      icon: FiUsers,
      timeline: "3, 6, or 12 month engagements",
      pricing: "Starting at $8,500/month",
      features: [
        "Monthly 2-hour strategic consultation sessions with senior-level expertise",
        "Crisis communication support and rapid response capability", 
        "Quarterly team workshops building internal communication capability",
        "Communication effectiveness reviews and strategic recommendations",
        "Access to proven workplace mapping tools and methodologies",
        "Priority email and phone support for urgent communication decisions"
      ],
      popular: true,
      isNew: false,
      color: "green"
    },
    {
      name: "Workshops & Training",
      description: "Comprehensive training programs that develop your team's capability in distributed workforce communication, creating internal expertise for long-term success.",
      icon: FiBookOpen,
      timeline: "Virtual or on-site delivery",
      pricing: "Starting at $8,500",
      features: [
        "Customized workshops designed for your organizational context",
        "Hands-on training using your actual communication challenges",
        "Practical tools and templates for immediate application",
        "Follow-up support to ensure successful implementation",
        "Certification options for your internal champions",
        "Materials and resources tailored to your specific workforce needs"
      ],
      popular: false,
      isNew: false,
      color: "purple"
    },
    {
      name: "Complete Workplace Mapping Process",
      description: "Full transformation experience - the complete DISCOVER → ANALYZE → DESIGN → SUSTAIN methodology for comprehensive communication strategy development and implementation.",
      icon: FiTarget,
      timeline: "12-18 months total",
      pricing: "Investment varies by organizational size, complexity, and scope",
      features: [
        "Complete communication ecosystem investigation and analysis",
        "Custom communication architecture for your distributed workforce",
        "Multiple pathway strategies for different employee groups",
        "Detailed implementation roadmap with change management support", 
        "Internal capability building and champion training",
        "6-month post-implementation optimization support"
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
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
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
            Four Clear Options for Distributed Workforce Communication
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Whether you need rapid clarity, ongoing support, training development, or complete transformation - we have the right solution for your organization's needs.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-700">
              Most organizations start with the Assessment to identify their critical gaps, then choose the best path forward.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
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
                <div className="mb-6">
                  <span className={`${
                    pkg.popular ? 'bg-primary-600 text-white' : 'bg-yellow-500 text-white'
                  } px-4 py-1 rounded-full text-sm font-semibold`}>
                    {pkg.popular ? 'Most Popular' : 'NEW'}
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(pkg.color)} flex-shrink-0`}>
                  <SafeIcon icon={pkg.icon} className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-neutral-900 mb-3">
                    {pkg.name}
                  </h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-primary-600 font-semibold text-sm">
                      {pkg.timeline}
                    </p>
                    <p className={`font-medium text-lg ${
                      pkg.name === 'Complete Workplace Mapping Process' ? 'text-primary-600' : 'text-green-600'
                    }`}>
                      {pkg.pricing}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-neutral-600 leading-relaxed text-sm mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700 text-sm leading-relaxed">{feature}</span>
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
                {pkg.name === 'Complete Workplace Mapping Process' ? 'Get Custom Quote' : 'Get Started'}
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