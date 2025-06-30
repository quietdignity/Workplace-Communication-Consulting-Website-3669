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
      challenge: "1,800+ employees across 15 departments with critical communication failures affecting public services and safety protocols",
      result: "Developed comprehensive communication framework that eliminated major information silos and created reliable emergency communication pathways across all departments",
      icon: FiUsers,
      color: "blue",
      metrics: "1,800+ employees, 15 departments",
      timeline: "18-month organizational transformation"
    },
    {
      id: 2,
      title: "Employee Wellness Event Communication Breakthrough",
      industry: "Public Sector",
      challenge: "Annual wellness fair consistently had poor attendance (12-18 people) due to communication reaching only office staff, missing field workers entirely",
      result: "Implemented multi-channel approach targeting all employee segments. Achieved 280+ attendees through strategic use of physical notices, supervisor briefings, and digital reminders",
      icon: FiCalendar,
      color: "green",
      metrics: "280+ attendees (from typical 12-18)",
      timeline: "Single event transformation with sustained results"
    },
    {
      id: 3,
      title: "Compliance Training Transformation",
      industry: "Corporate Training/Compliance",
      challenge: "Company compliance training had low participation due to unclear communication and ambiguous deadlines",
      result: "Dramatically improved participation rates using CTA Triad Framework (Purpose, Process, Payoff). Managers reported significantly fewer follow-up inquiries",
      icon: FiBookOpen,
      color: "purple",
      metrics: "Significant participation increase",
      timeline: "Training cycle implementation"
    },
    {
      id: 4,
      title: "Logistics Shop Floor Communication Overhaul",
      industry: "Manufacturing/Logistics",
      challenge: "Inconsistent communications leading to confusion on shop floor and delayed responses to critical updates",
      result: "Significant reduction in shop floor errors, markedly improved response times, increased employee satisfaction with predictable communication",
      icon: FiTruck,
      color: "orange",
      metrics: "Measurable error reduction",
      timeline: "Multi-channel system implementation"
    },
    {
      id: 5,
      title: "Crisis Communication Control System",
      industry: "Crisis Management/Executive Communications",
      challenge: "Internal leak crisis where confidential memo reached press before employees, causing panic and speculation",
      result: "Developed 4-stage crisis messaging system (Acknowledge, Inform, Resolve, Reinforce) with controlled access and response protocols",
      icon: FiAlertTriangle,
      color: "red",
      metrics: "Crisis narrative control",
      timeline: "High-stakes situation management"
    },
    {
      id: 6,
      title: "Multi-Channel Workforce Communication Strategy",
      industry: "Multi-Location Operations",
      challenge: "Different employee segments (office workers, hybrid employees, field workers) requiring different communication approaches",
      result: "Comprehensive reach ensuring every employee segment receives information through most effective channels with tailored delivery methods",
      icon: FiTarget,
      color: "teal",
      metrics: "100% segment coverage",
      timeline: "Complete communication architecture"
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
              These case studies demonstrate the power of understanding both formal and informal communication networks
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
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Result:</h4>
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

        {/* Detailed Insights */}
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
              <h4 className="font-semibold text-neutral-900 mb-2">Different Segments, Different Needs</h4>
              <p className="text-sm text-neutral-600">
                Office workers, field staff, and hybrid employees require completely different communication approaches
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTarget} className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Physical Still Matters</h4>
              <p className="text-sm text-neutral-600">
                Digital isn't always best - physical notices and supervisor briefings outperformed emails for field workers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiBookOpen} className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Clarity Drives Action</h4>
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