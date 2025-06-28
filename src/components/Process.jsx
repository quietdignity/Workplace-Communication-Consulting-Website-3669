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
      subtitle: "Let's See What's Really Happening (Both Formally and Informally)",
      icon: FiSearch,
      color: "blue",
      description: "We start by getting a complete picture of how communication actually works in your organization right now, including both your designed systems and the informal networks that have developed.",
      features: [
        "Survey Component: We'll survey employees across your workforce to understand their perceptions of how communication works, what they think about current channels, and what they believe they need.",
        "Investigation Component: We'll follow 3-5 recent company communications through your organization to document exactly where they go, how they change, and who they actually reach. We'll also identify informal communication networks and understand how they supplement or compete with your formal channels.",
        "Employee Conversations: We'll interview people across your workforce—office staff, field workers, managers, frontline employees—to understand both how they officially receive information and how they really get and share information day-to-day.",
        "Reality Check: We'll catalog what communication tools and channels you have available and how they're actually being used, not just how they're supposed to be used."
      ],
      timeline: "Timeline depends on how complex your organization is"
    },
    {
      number: "2",
      title: "ANALYZE",
      subtitle: "Making Sense of Your Communication Ecosystem",
      icon: FiBarChart,
      color: "green",
      description: "Now we take all that survey and investigation data and figure out what it means for your communication strategy.",
      features: [
        "Johari Window Analysis: We'll map your communication patterns to show you exactly where your formal strategy is working, where informal networks have filled gaps, and where blind spots exist that neither system is addressing.",
        "Formal vs. Informal Network Assessment: We'll evaluate which formal communication methods actually work for different types of employees and how informal networks supplement or undermine those methods.",
        "Finding Integration Opportunities: We'll identify where your informal communication networks are actually working well and should be supported, versus where they're creating problems that need to be addressed.",
        "Priority Setting: We'll help you prioritize where to focus your efforts for maximum impact, considering both the formal systems you can design and the informal networks you need to work with."
      ],
      timeline: "We'll customize the timeline to fit your needs"
    },
    {
      number: "3",
      title: "DESIGN",
      subtitle: "Building an Intentional Strategy That Works with Reality",
      icon: FiSettings,
      color: "purple",
      description: "This is where we create a communication system designed for your actual workforce and communication culture, not some theoretical ideal.",
      features: [
        "Integrated Communication Architecture: We'll design an approach that leverages both formal channels and existing informal networks to reach your office workers, your hybrid employees, and your field teams effectively.",
        "Multiple Pathway Strategy: For each employee group, we'll create primary formal channels, secondary backup methods, and ways to integrate productive informal networks so nothing falls through the cracks.",
        "Feedback Loop Design: We'll build systems that help information flow both ways effectively, ensuring that insights from your distributed workforce make it back to leadership through reliable channels.",
        "Implementation Roadmap: You'll get a detailed plan that acknowledges both the formal changes you need to make and the informal communication culture you're working with."
      ],
      timeline: "Timeline varies based on how complex the solution needs to be"
    },
    {
      number: "4",
      title: "SUSTAIN",
      subtitle: "Making Sure Your Intentional Strategy Thrives",
      icon: FiRefreshCw,
      color: "orange",
      description: "The best communication system in the world doesn't help if it reverts to purely informal networks after six months. We'll make sure your intentional approach becomes part of your organizational culture.",
      features: [
        "Internal Champion Development: We'll identify and train people in your organization who can keep workplace mapping going and help maintain the balance between formal and informal communication.",
        "Communication Culture Training: Your team will understand not just what to do, but how to work with the communication patterns that naturally develop in distributed workforces.",
        "Ongoing Optimization: We'll help you build systems to regularly assess whether your intentional communication strategy is staying aligned with the informal networks that will continue to evolve.",
        "Adaptation Framework: We'll teach your team how to recognize when informal networks are pointing to gaps in formal communication and how to respond constructively."
      ],
      timeline: "We'll work with you as long as you need"
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
            How We Work With You
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A systematic approach to understanding and improving your distributed workforce communication
          </p>
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
                  <div className="flex items-center gap-2 text-neutral-600">
                    <SafeIcon icon={FiClock} className="w-5 h-5" />
                    <span className="text-sm">{phase.timeline}</span>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <ul className="space-y-4">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-700 leading-relaxed text-sm">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;