import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiBarChart, FiSettings, FiRefreshCw, FiClock } = FiIcons;

const Process = () => {
  const phases = [
    {
      number: "1",
      title: "DISCOVER",
      subtitle: "Investigate Your Communication Reality",
      icon: FiSearch,
      color: "blue",
      description: "We map how communication actually works in your organization right now - both your designed systems and the informal networks that have developed naturally.",
      approach: "Survey + Investigation Method:",
      details: [
        "Employee surveys across all workforce segments to understand perceptions and preferences",
        "Communication trace analysis - we follow 3-5 recent company messages through your organization",
        "Employee interviews across office, hybrid, and field workers to understand real information flow",
        "Documentation of formal communication tools and how they're actually being used vs. intended use",
        "Identification of informal networks and how they supplement or compete with official channels"
      ]
    },
    {
      number: "2", 
      title: "ANALYZE",
      subtitle: "Make Sense of Your Communication Ecosystem",
      icon: FiBarChart,
      color: "green", 
      description: "We analyze all the survey and investigation data to understand what it means for your communication strategy and where your opportunities are.",
      approach: "Johari Window Analysis Framework:",
      details: [
        "Map communication patterns to show where formal strategy works and where informal networks fill gaps",
        "Identify blind spots where neither formal nor informal systems are addressing communication needs",
        "Assess which formal methods actually work for different employee groups and operational constraints",
        "Find integration opportunities where productive informal networks can be supported", 
        "Create priority framework for maximum impact improvements based on your reality and resources"
      ]
    },
    {
      number: "3",
      title: "DESIGN", 
      subtitle: "Build Systems That Work With Reality",
      icon: FiSettings,
      color: "purple",
      description: "We create an intentional communication strategy designed for your actual workforce distribution and communication culture, not some theoretical ideal.",
      approach: "Integrated Architecture Approach:",
      details: [
        "Design communication pathways that work for office workers, hybrid employees, and field teams",
        "Create primary formal channels with secondary backup methods for each employee segment",
        "Develop integration strategies that leverage productive informal networks",
        "Build two-way feedback systems so distributed workforce insights reach leadership",
        "Create detailed implementation roadmap that acknowledges both formal changes and cultural shifts"
      ]
    },
    {
      number: "4",
      title: "SUSTAIN",
      subtitle: "Make Your Strategy Stick and Evolve", 
      icon: FiRefreshCw,
      color: "orange",
      description: "We ensure your intentional communication approach becomes part of your organizational culture and can adapt as your organization grows and changes.",
      approach: "Internal Capability Building:",
      details: [
        "Identify and train internal champions who can maintain workplace mapping principles",
        "Develop communication culture training so your team works effectively with distributed workforce patterns",
        "Create ongoing optimization systems to regularly assess formal and informal network alignment",
        "Build adaptation framework so you can respond constructively when informal networks point to gaps",
        "Provide 90-day post-completion support during transition to internal management"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200", 
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            How We Work: The Four-Phase Method
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Our systematic approach to understanding and improving distributed workforce communication. Each phase is valuable on its own or as part of the complete process.
          </p>
          <div className="bg-white p-6 rounded-lg border border-primary-200 max-w-2xl mx-auto">
            <p className="text-primary-800 font-medium">
              <strong>Remember:</strong> You can start with any phase that makes sense for your situation. We meet you where you are, not where we think you should be.
            </p>
          </div>
        </motion.div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${getColorClasses(phase.color)}`}>
                      <SafeIcon icon={phase.icon} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        Phase {phase.number}: {phase.title}
                      </h3>
                      <p className="text-neutral-600 font-medium">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <h4 className="font-semibold text-primary-800 mb-2">
                      {phase.approach}
                    </h4>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <ul className="space-y-4">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-700 leading-relaxed text-sm">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-neutral-600">
                      <SafeIcon icon={FiClock} className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Typical timeline: 2-5 months depending on complexity
                      </span>
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      Standalone Product
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              The Key Difference: Survey + Investigation
            </h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              Most communication consultants rely only on surveys, which tell you what people <em>think</em> is happening. 
              We also investigate what's <em>actually</em> happening by following real messages through your organization. 
              The combination gives you both the subjective experience and objective reality of your communication ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;