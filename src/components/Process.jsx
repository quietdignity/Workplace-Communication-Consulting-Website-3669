import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiSearch, FiBarChart, FiSettings, FiRefreshCw} = FiIcons;

const Process = () => {
  const phases = [
    {
      number: "1",
      title: "DISCOVER",
      icon: FiSearch,
      color: "blue",
      description: "We survey and interview members of your team and follow how messages are shared through the channels your teams actually use."
    },
    {
      number: "2",
      title: "ANALYZE",
      icon: FiBarChart,
      color: "green",
      description: "We compare your official channels to the informal networks that spring up on the ground. We map where information flows, where it gets stuck and where it disappears."
    },
    {
      number: "3",
      title: "DESIGN",
      icon: FiSettings,
      color: "purple",
      description: "Together, we build a communication plan that fits your reality, setting up main channels with backup options and ways to get feedback so nothing important gets missed."
    },
    {
      number: "4",
      title: "SUSTAIN",
      icon: FiRefreshCw,
      color: "orange",
      description: "We train your team and set up simple processes so your new system works long-term. You will learn to spot new problems and adjust as your organization changes."
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
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Four-Step Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: index * 0.2}}
              viewport={{once: true}}
              className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${getColorClasses(phase.color)}`}>
                  <SafeIcon icon={phase.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {phase.number}. {phase.title}
                </h3>
              </div>
              <p className="text-neutral-700 leading-relaxed text-center">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;