import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap, FiUsers, FiTarget, FiArrowRight, FiCheck, FiClock} = FiIcons;

const Services = () => {
  const services = [
    {
      name: "COMMUNICATION DIAGNOSTIC",
      subtitle: "Get Immediate Clarity on Your Communication Gaps",
      icon: FiZap,
      color: "yellow",
      description: "Perfect if you suspect communication problems but need concrete evidence before investing in transformation. This rapid diagnostic shows exactly where your messages succeed and fail across your distributed workforce.",
      whatWeDoFeatures: [
        "Message Flow Analysis: We'll trace 1 to 2 of your recent communications through your organization to document exactly where they go, how they change, and who they actually reach.",
        "Workforce Communication Profile: Quick assessment of how your office, hybrid, and field segments currently access and process information.",
        "Quick Wins Identification: We'll identify 3 to 5 immediate improvements you can implement right away to improve communication effectiveness.",
        "Rapid Assessment: Focused analysis designed to give you concrete evidence of communication gaps without the full investigation process."
      ],
      deliverables: [
        "Message flow analysis of 1 to 2 recent communications",
        "Workforce communication profile (office/hybrid/field segments)",
        "Quick wins action plan with 3 to 5 immediate improvements",
        "Communication diagnostic report with prioritized recommendations",
        "30 minute strategy session and implementation guidance",
        "Credit toward full engagement if you proceed within 60 days"
      ],
      timeline: "15 business days",
      pricing: "$8,500",
      popular: false,
      isNew: true
    },
    {
      name: "RETAINER & WORKSHOPS",
      subtitle: "Ongoing Support and Team Development",
      icon: FiUsers,
      color: "green",
      description: "Ideal for organizations that want continuous improvement and team development. Monthly retainer includes strategic guidance, team workshops, and ongoing optimization of your communication systems.",
      whatWeDoFeatures: [
        "Monthly Strategic Sessions: Regular check ins to assess communication effectiveness and address emerging challenges across your distributed workforce.",
        "Team Workshops: Quarterly workshops for your leadership team on workplace mapping principles and distributed workforce communication best practices.",
        "Communication Audits: Periodic reviews of new communications to ensure they're reaching all employee segments effectively.",
        "Crisis Communication Support: Rapid response support for urgent communication challenges or organizational changes.",
        "Internal Champion Development: Training your team to maintain and evolve communication strategies independently."
      ],
      deliverables: [
        "Monthly 2 hour strategic consultation sessions",
        "Quarterly team workshops (virtual or on site)",
        "Communication effectiveness reviews and recommendations",
        "Crisis communication support and rapid response",
        "Access to workplace mapping tools and templates",
        "Priority email and phone support"
      ],
      timeline: "3, 6, or 12 month engagements",
      pricing: "Starting at $8,500/month",
      popular: true,
      isNew: false
    },
    {
      name: "WORKPLACE MAPPING PROCESS",
      subtitle: "Complete Communication Transformation",
      icon: FiTarget,
      color: "blue",
      description: "Our signature comprehensive transformation experience. The complete DISCOVER → ANALYZE → DESIGN → SUSTAIN methodology for organizations ready to completely transform their distributed workforce communication.",
      whatWeDoFeatures: [
        "Complete Investigation: Full communication investigation including employee surveys, message tracing, and informal network mapping across all workforce segments.",
        "Deep Analysis: Comprehensive analysis using our Johari Window framework to identify blind spots, hidden areas, and optimization opportunities.",
        "Custom System Design: Design of integrated communication architecture that works with your formal channels and productive informal networks.",
        "Implementation Support: Full implementation support including change management, internal champion training, and organizational culture transformation.",
        "Sustainability Planning: Systems and processes to ensure your intentional communication strategy evolves with your organization."
      ],
      deliverables: [
        "Complete communication ecosystem investigation and analysis",
        "Custom communication architecture for your distributed workforce",
        "Multiple pathway strategies for different employee groups",
        "Detailed implementation roadmap with change management support",
        "Internal capability building and champion training",
        "6 month post implementation optimization support"
      ],
      timeline: "12 to 18 months total",
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
            Three Ways We Help Distributed Workforces
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Choose the level of support that matches your organization's needs and timeline. Every option delivers specific, substantial value.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto">
            <p className="text-primary-700">
              Start with the Diagnostic to understand your challenges, then choose ongoing support or full transformation based on your needs.
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
                        {service.name}
                      </h3>
                      <p className="text-neutral-600 font-medium">
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

                  <div className="space-y-2 mb-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-neutral-600">
                      <SafeIcon icon={FiClock} className="w-5 h-5" />
                      <span className="text-sm font-medium">{service.timeline}</span>
                    </div>
                    <p className={`font-semibold text-lg ${service.name === 'WORKPLACE MAPPING PROCESS' ? 'text-primary-600' : 'text-green-600'}`}>
                      {service.pricing}
                    </p>
                  </div>

                  <a
                    href="mailto:team@workplacemapping.com"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${service.popular || service.isNew ? 'bg-primary-600 hover:bg-primary-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'}`}
                  >
                    {service.name === 'WORKPLACE MAPPING PROCESS' ? 'Get Custom Quote' : 'Get Started'}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Services;