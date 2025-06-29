import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap,FiUsers,FiTarget,FiArrowRight,FiCheck,FiClock,FiBookOpen} = FiIcons;

const Services = () => {
  const services = [
    {
      name: "COMMUNICATION ASSESSMENT",
      subtitle: "Leadership Communication Diagnostic in 14 Days",
      icon: FiZap,
      color: "yellow",
      description: "Rapid assessment of your distributed workforce communication gaps from the leadership perspective. Perfect for leadership teams that suspect communication problems but need expert analysis before investing in solutions.",
      whatWeDoFeatures: [
        "Leadership Stakeholder Interviews: 90-minute session with leadership plus 45-minute operations and frontline management follow-ups to understand current communication strategy and perceived challenges.",
        "Communication Architecture Audit: Review 2-3 recent major communications to analyze intended vs actual message flow and identify obvious failure points.",
        "Channel & Tool Assessment: Audit existing communication infrastructure to identify gaps, redundancies, and informal patterns leadership is aware of.",
        "Strategic Gap Analysis: Map communication blind spots from leadership perspective using our proven diagnostic framework."
      ],
      deliverables: [
        "Communication Leadership Diagnostic Report (6 pages) showing your communication reality from management perspective",
        "Communication Effectiveness Scorecard with leadership confidence ratings and risk assessment",
        "Strategic Recommendations Roadmap separating quick wins from areas needing employee investigation",
        "Clear pathway options for next steps (DIY implementation, monthly advisory, or full workplace mapping)",
        "60-minute strategy session to review findings and discuss implementation approach",
        "Full credit toward larger engagement if you proceed within 90 days"
      ],
      timeline: "14 business days",
      pricing: "Starting at $2,500",
      popular: false,
      isNew: true
    },
    {
      name: "FRACTIONAL INTERNAL COMMUNICATIONS STRATEGY",
      subtitle: "Senior-Level Expertise for Your Distributed Workforce",
      icon: FiUsers,
      color: "green",
      description: "Get experienced internal communications leadership at 50-65% the cost of full-time hiring, with specialized expertise in reaching your office workers, hybrid employees, and field teams effectively.",
      whatWeDoFeatures: [
        "Strategic Communication Leadership: Monthly strategic sessions to assess your distributed workforce communication effectiveness and guide major communication decisions.",
        "Crisis Communication Response: Immediate expert support when urgent communication challenges arise across your multiple locations or workforce segments.",
        "Team Development: Quarterly workshops developing your leadership team's capability in distributed workforce communication best practices.",
        "Ongoing Optimization: Regular reviews of your communications to ensure messages reach office workers, hybrid employees, and field teams effectively.",
        "Change Management Communication: Strategic guidance for organizational changes, mergers, growth phases, or operational shifts affecting your distributed workforce."
      ],
      deliverables: [
        "Monthly 2-hour strategic consultation sessions with senior-level expertise",
        "Crisis communication support and rapid response capability",
        "Quarterly team workshops building internal communication capability",
        "Communication effectiveness reviews and strategic recommendations",
        "Access to proven workplace mapping tools and methodologies",
        "Priority email and phone support for urgent communication decisions"
      ],
      timeline: "3, 6, or 12 month engagements",
      pricing: "Starting at $8,500/month",
      popular: true,
      isNew: false
    },
    {
      name: "WORKSHOPS & TRAINING",
      subtitle: "Build Internal Communication Excellence Through Your Team Development",
      icon: FiBookOpen,
      color: "purple",
      description: "Comprehensive training programs develop your team's capability in distributed workforce communication, creating internal expertise for long-term success.",
      whatWeDoFeatures: [
        "Distributed Workforce Communication Fundamentals: Half-day workshops teaching your team to understand office, hybrid, and field worker communication needs and channel effectiveness.",
        "Workplace Mapping Methodology Training: Full-day programs teaching your organization the complete DISCOVER → ANALYZE → DESIGN → SUSTAIN framework with hands-on practice.",
        "Crisis Communication for Distributed Teams: Half-day training on rapid communication deployment across all your workforce segments and backup systems when primary communication fails.",
        "Internal Champion Certification: Multi-day certification program for your key personnel who will lead communication initiatives and train others in your organization."
      ],
      deliverables: [
        "Customized workshops designed for your organizational context and challenges",
        "Hands-on training using your actual communication challenges",
        "Practical tools and templates for immediate application in your organization",
        "Follow-up support to ensure successful implementation of your learnings",
        "Certification options for your internal champions",
        "Materials and resources tailored to your specific workforce needs"
      ],
      timeline: "Virtual or on-site delivery",
      pricing: "Starting at $8,500",
      popular: false,
      isNew: false
    },
    {
      name: "COMPLETE WORKPLACE MAPPING PROCESS",
      subtitle: "Full Communication Transformation Including Employee Investigation",
      icon: FiTarget,
      color: "blue",
      description: "Our signature comprehensive transformation experience. The complete DISCOVER → ANALYZE → DESIGN → SUSTAIN methodology including extensive employee investigation across all workforce segments.",
      whatWeDoFeatures: [
        "Complete Investigation: Full communication investigation including employee surveys, interviews, message tracing, and informal network mapping across all your workforce segments.",
        "Deep Analysis: Comprehensive analysis using our Johari Window framework to identify blind spots, hidden areas, and optimization opportunities from both leadership and employee perspectives.",
        "Custom System Design: Design of integrated communication architecture that works with your formal channels and productive informal networks.",
        "Implementation Support: Full implementation support including change management, internal champion training, and organizational culture transformation.",
        "Sustainability Planning: Systems and processes to ensure your intentional communication strategy evolves with your organization."
      ],
      deliverables: [
        "Complete communication ecosystem investigation and analysis including extensive employee input",
        "Custom communication architecture designed for your distributed workforce based on actual employee behavior",
        "Multiple pathway strategies for your different employee groups validated through employee feedback",
        "Detailed implementation roadmap with change management support for your culture",
        "Internal capability building and champion training for your team",
        "6-month post-implementation optimization support for your continued success"
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
      purple: "bg-purple-100 text-purple-600 border-purple-200",
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
            Four Ways We Help Distributed Workforces
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Choose the level of support that matches your organization's needs and timeline. Every option delivers specific, substantial value.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-3xl mx-auto">
            <p className="text-primary-700">
              Start with the Assessment to understand your communication blind spots from the leadership perspective, then choose your path forward.
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
                    <p className={`font-semibold text-lg ${
                      service.name === 'COMPLETE WORKPLACE MAPPING PROCESS' 
                        ? 'text-primary-600' 
                        : 'text-green-600'
                    }`}>
                      {service.pricing}
                    </p>
                  </div>

                  <a
                    href="mailto:team@workplacemapping.com"
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      service.popular || service.isNew 
                        ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                    }`}
                  >
                    {service.name === 'COMPLETE WORKPLACE MAPPING PROCESS' ? 'Get Custom Quote' : 'Get Started'}
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