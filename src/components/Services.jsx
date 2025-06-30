import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap, FiUsers, FiTarget, FiArrowRight, FiCheck, FiClock} = FiIcons;

const Services = () => {
  const services = [
    {
      name: "COMMUNICATION DIAGNOSTIC",
      subtitle: "Leaders who need evidence before action",
      icon: FiZap,
      color: "yellow",
      description: "Get immediate clarity on your distributed workforce communication gaps. Perfect for leadership teams that need concrete evidence and strategic direction before committing to larger investments.",
      deliverables: [
        "Employee surveys across all workforce segments",
        "Message tracing through your organization",
        "Clear map of where communications succeed and fail",
        "Gap analysis comparing formal channels with informal networks",
        "Priority improvement areas identified",
        "20-day turnaround with actionable insights"
      ],
      timeline: "20 business days",
      pricing: "$6,000",
      popular: false,
      isNew: true,
      ctaText: "Start Your Diagnostic"
    },
    {
      name: "FRACTIONAL STRATEGIST",
      subtitle: "Ongoing expert guidance without full-time hire",
      icon: FiUsers,
      color: "green",
      description: "Get senior level internal communications expertise without the full time hire. Perfect for organizations that want continuous optimization and expert support for their distributed workforce challenges.",
      deliverables: [
        "Monthly strategic consultation sessions",
        "Quarterly system health checks",
        "Crisis communication support when needed",
        "Internal champion training",
        "Communication effectiveness tracking",
        "Proven tools and methodologies for ongoing use"
      ],
      timeline: "Minimum 6 months",
      pricing: "Starting at $4,000/month",
      popular: true,
      isNew: false,
      ctaText: "Get Custom Quote"
    },
    {
      name: "INFRASTRUCTURE REBUILD",
      subtitle: "Complete communication transformation",
      icon: FiTarget,
      color: "blue",
      description: "Our comprehensive transformation experience including complete investigation, custom system design, and full implementation support for organizations ready for systematic change.",
      deliverables: [
        "Complete communication ecosystem investigation",
        "Multi-channel blueprint for all workforce segments", 
        "Communication architecture built for your workforce",
        "Full implementation with change management",
        "Internal capability building for long-term success",
        "Self-improving system that adapts as you grow"
      ],
      timeline: "8-16 months",
      pricing: "Starts at $35,000",
      popular: false,
      isNew: false,
      ctaText: "Get Custom Quote"
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
    <section id="services" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Service Options
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Whether you need evidence-based assessment, ongoing strategic guidance, or complete infrastructure transformation, each option delivers systematic solutions for your distributed workforce.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto">
            <p className="text-primary-700">
              <em>Enterprise-wide projects quoted after initial assessment</em>
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular 
                  ? 'border-primary-500 relative' 
                  : service.isNew 
                    ? 'border-yellow-500 relative' 
                    : 'border-neutral-200 hover:border-primary-300'
              }`}
            >
              {/* Badge */}
              {(service.popular || service.isNew) && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className={`${
                    service.popular 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-yellow-500 text-white'
                  } px-4 py-1 rounded-full text-sm font-semibold shadow-md`}>
                    {service.popular ? 'Most Popular' : 'NEW'}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${getColorClasses(service.color)}`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 font-medium text-sm mb-4">
                  Best for: {service.subtitle}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className={`font-bold mb-1 ${
                    service.name === 'COMMUNICATION DIAGNOSTIC' 
                      ? 'text-2xl text-green-600' 
                      : 'text-lg text-primary-600'
                  }`}>
                    {service.pricing}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-neutral-500">
                    <SafeIcon icon={FiClock} className="w-4 h-4" />
                    <span className="text-sm">{service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-700 text-sm leading-relaxed mb-6 text-center">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neutral-900 mb-3 text-center">What You Get:</h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start gap-2">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-xs leading-relaxed">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a
                href="mailto:team@workplacemapping.com?subject=Inquiry About Workplace Mapping Services"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  service.popular || service.isNew 
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

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Questions? Need Help Choosing?
              </h3>
              <p className="text-neutral-600 mb-6">
                Email team@workplacemapping.com or call to discuss your specific communication challenges. Every day of delay is another day of communication failure.
              </p>
              <a
                href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Discovery Call
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;