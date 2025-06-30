import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiUsers,FiCalendar,FiBookOpen,FiTruck,FiAlertTriangle,FiTarget,FiArrowRight} = FiIcons;

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Multi-Department Government Agency Transformation",
      industry: "Government/Public Sector",
      challenge: "1,800+ employees across 15 departments experiencing critical communication failures that affected public services and safety compliance",
      result: "Eliminated information silos and established reliable emergency communication pathways. Created framework ensuring critical updates reach all departments within required timeframes",
      icon: FiUsers,
      color: "blue",
      metrics: "1,800+ employees, 15 departments",
      timeline: "18-month transformation"
    },
    {
      id: 2,
      title: "Wellness Fair Attendance Breakthrough",
      industry: "Municipal Operations",
      challenge: "Annual wellness events consistently drew only 12-18 attendees because communication methods only reached office staff, completely missing field crews",
      result: "Redesigned communication strategy using physical notices, supervisor briefings, and targeted digital outreach. Achieved 280+ attendees with sustained engagement",
      icon: FiCalendar,
      color: "green",
      metrics: "280+ attendees (from 12-18)",
      timeline: "Single event redesign"
    },
    {
      id: 3,
      title: "Manufacturing Safety Training Overhaul",
      industry: "Manufacturing/Safety",
      challenge: "Mandatory safety training had poor completion rates due to unclear messaging and competing priorities on the production floor",
      result: "Applied Purpose-Process-Payoff framework to training communications. Achieved full compliance with significantly fewer manager follow-ups required",
      icon: FiBookOpen,
      color: "purple",
      metrics: "100% completion achieved",
      timeline: "Single training cycle"
    },
    {
      id: 4,
      title: "Logistics Operations Communication Fix",
      industry: "Distribution/Logistics",
      challenge: "Warehouse and driver communications were inconsistent, causing delays, errors, and frustration among frontline staff",
      result: "Implemented channel-specific messaging protocols. Reduced operational errors, improved response times, and increased staff satisfaction with information flow",
      icon: FiTruck,
      color: "orange",
      metrics: "Measurable error reduction",
      timeline: "Multi-phase implementation"
    },
    {
      id: 5,
      title: "Executive Crisis Communication Recovery",
      industry: "Crisis Management",
      challenge: "Confidential internal memo leaked to press before reaching employees, creating confusion and speculation throughout the organization",
      result: "Developed four-stage crisis response protocol (Acknowledge, Inform, Resolve, Reinforce) with controlled messaging and clear response procedures",
      icon: FiAlertTriangle,
      color: "red",
      metrics: "Crisis narrative controlled",
      timeline: "Real-time response"
    },
    {
      id: 6,
      title: "Retail Chain Communication Architecture",
      industry: "Multi-Location Retail",
      challenge: "Corporate messages failed to reach store-level employees effectively, while field teams developed their own informal networks to share information",
      result: "Designed integrated approach leveraging both formal channels and productive informal networks. Ensured comprehensive reach across all employee segments",
      icon: FiTarget,
      color: "teal",
      metrics: "Complete segment coverage",
      timeline: "System-wide redesign"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      red: "bg-red-100 text-red-600 border-red-200",
      teal: "bg-teal-100 text-teal-600 border-teal-200"
    };
    return colors[color] || colors.blue;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Real Results from Workplace Mapping
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            From government agencies to manufacturing floors, see how our systematic approach transforms distributed workforce communication across industries
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-700 font-medium">
              These results demonstrate the power of understanding both formal and informal communication networks
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(study.color)}`}>
                  <SafeIcon icon={study.icon} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">
                    {study.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Challenge:</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Result */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Solution & Impact:</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {study.result}
                </p>
              </div>

              {/* Metrics */}
              <div className="bg-neutral-50 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-600">Impact:</span>
                  <span className="font-semibold text-neutral-900">{study.metrics}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 mx-auto transition-colors"
                >
                  Discuss Your Challenge
                  <SafeIcon icon={FiArrowRight} className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg"
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
            Key Insights from These Transformations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Segment-Specific Strategies</h4>
              <p className="text-sm text-neutral-600">
                Office workers, field staff, and hybrid employees require completely different communication approaches
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTarget} className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Channel Optimization</h4>
              <p className="text-sm text-neutral-600">
                Physical notices and supervisor briefings often outperform digital-only approaches for field workers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Message Structure</h4>
              <p className="text-sm text-neutral-600">
                Clear Purpose, Process, and Payoff messaging dramatically improves participation rates
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-600 p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">
              Ready to Transform Your Distributed Workforce Communication?
            </h3>
            <p className="mb-6 text-primary-100">
              Every organization has unique challenges. Let's discuss how workplace mapping can solve yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Strategy Call
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                View Service Options
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;