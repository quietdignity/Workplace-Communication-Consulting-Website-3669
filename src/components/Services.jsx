import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap, FiUsers, FiTarget, FiArrowRight, FiCheck, FiClock} = FiIcons;

const Services = () => {
  const services = [
    {
      name: "COMMUNICATION DIAGNOSTIC",
      subtitle: "Rapid Assessment to Identify Critical Gaps",
      icon: FiZap,
      color: "yellow",
      description: "Get immediate clarity on your distributed workforce communication gaps in just 15 business days. Perfect for leadership teams that need concrete evidence and strategic direction before committing to larger investments.",
      whatWeDoFeatures: [
        "Leadership Strategy Deep Dive: 90-minute session with key stakeholders to understand current communication approach and suspected problem areas.",
        "Communication Flow Analysis: Trace 2-3 recent company messages to see where they succeed, fail, or get lost between office, hybrid, and field workers.",
        "Infrastructure Audit: Review existing channels, tools, and informal networks to identify gaps, redundancies, and missed opportunities.",
        "Strategic Gap Mapping: Use our proven framework to pinpoint exactly where your communication breaks down and why."
      ],
      deliverables: [
        "Communication Reality Report (8 pages) showing exactly where messages fail and succeed",
        "Risk Assessment Matrix identifying your highest-impact communication vulnerabilities",
        "Quick Wins Action Plan with 3-5 immediate improvements you can implement",
        "Strategic Roadmap with clear options for next steps based on your findings",
        "90-minute strategy session to review findings and discuss implementation",
        "Full credit toward fractional advisory if you proceed within 60 days"
      ],
      timeline: "15 business days",
      pricing: "$8,500",
      popular: false,
      isNew: true
    },
    {
      name: "FRACTIONAL INTERNAL COMMUNICATIONS STRATEGIST",
      subtitle: "Expert Guidance Without the Full-Time Hire",
      icon: FiUsers,
      color: "green",
      description: "Get senior-level internal communications expertise without the full-time hire. Perfect for organizations that want continuous optimization and expert support for their distributed workforce challenges.",
      whatWeDoFeatures: [
        "Monthly Strategic Sessions: 2-hour deep-dive consultations to assess communication effectiveness and guide major decisions affecting your distributed workforce.",
        "Crisis Response Support: Immediate expert guidance when urgent communication challenges arise across your locations or workforce segments.",
        "Implementation Support: Hands-on help executing communication improvements and measuring their effectiveness across different employee groups.",
        "Team Development: Quarterly workshops to build your internal team's capability in distributed workforce communication best practices."
      ],
      deliverables: [
        "Monthly 2-hour strategic consultation with senior-level communication expertise",
        "Quarterly capability-building workshops for your internal team",
        "Crisis communication support with rapid response (within 4 hours)",
        "Communication effectiveness tracking and optimization recommendations",
        "Priority access for urgent decisions affecting distributed workforce",
        "Proven tools, templates, and methodologies for your ongoing use"
      ],
      timeline: "3, 6, or 12 month engagements",
      pricing: "Starting at $8,500/month",
      popular: true,
      isNew: false
    },
    {
      name: "COMPLETE WORKPLACE MAPPING",
      subtitle: "Full Transformation: Investigation + Implementation + Sustainability",
      icon: FiTarget,
      color: "blue",
      description: "Our signature comprehensive transformation. The complete DISCOVER → ANALYZE → DESIGN → SUSTAIN methodology including employee investigation, custom system design, and full implementation support.",
      whatWeDoFeatures: [
        "Complete Investigation Phase: Employee surveys, interviews, message tracing, and informal network mapping across all workforce segments to understand the complete communication reality.",
        "Deep Analysis and Design: Comprehensive Johari Window analysis leading to custom communication architecture that works with both formal channels and productive informal networks.",
        "Full Implementation Support: Change management, leadership alignment, internal champion training, and organizational culture transformation over 12-18 months.",
        "Sustainability Systems: Training, tools, and processes to ensure your intentional communication strategy continues evolving effectively as your organization grows."
      ],
      deliverables: [
        "Complete communication ecosystem investigation including extensive employee input",
        "Custom communication architecture designed specifically for your distributed workforce",
        "Multiple pathway strategies validated through actual employee feedback and testing",
        "Full implementation roadmap with change management and cultural transformation support",
        "Internal champion certification and capability building for long-term success",
        "6-month post-implementation optimization and troubleshooting support"
      ],
      timeline: "12-18 months total",
      pricing: "Investment varies by organizational size, complexity, and scope",
      popular: false,
      isNew: false
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
            Whether you need rapid clarity, fractional strategic expertise, or complete transformation, each option delivers distinct, substantial value for your organization.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto">
            <p className="text-primary-700">
              Most organizations start with the Diagnostic to understand their specific challenges, then choose their optimal path forward.
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
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${getColorClasses(service.color)} flex-shrink-0 mt-1`}>
                      <SafeIcon icon={service.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-neutral-600 font-medium leading-tight">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {service.isNew && (
                    <div className="mb-4">
                      <span className="bg-yellow-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        NEW
                      </span>
                    </div>
                  )}

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

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <SafeIcon icon={FiClock} className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{service.timeline}</span>
                    </div>
                    <p className={`font-semibold text-lg ${service.name === 'COMPLETE WORKPLACE MAPPING' ? 'text-primary-600' : 'text-green-600'}`}>
                      {service.pricing}
                    </p>
                  </div>

                  <a
                    href="mailto:team@workplacemapping.com"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${service.popular || service.isNew ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'}`}
                  >
                    {service.name === 'COMPLETE WORKPLACE MAPPING' ? 'Get Custom Quote' : 'Get Started'}
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3 space-y-8">
                  {/* What We Do */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">What We Do:</h4>
                    <ul className="space-y-4">
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
                    <ul className="space-y-4">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start gap-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm leading-relaxed">{deliverable}</span>
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
          className="mt-16"
        >
          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-neutral-600 mb-6">
                We'll help you determine the best approach for your situation, timeline, and budget. Every organization's communication challenges are different.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;