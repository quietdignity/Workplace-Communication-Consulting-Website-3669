import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiUsers, FiMessageSquare, FiTarget, FiTrendingDown } = FiIcons;

const Challenge = () => {
  const challenges = [
    {
      icon: FiAlertTriangle,
      text: "Safety updates taking too long to reach field workers"
    },
    {
      icon: FiUsers,
      text: "Frontline employees feeling disconnected from company direction"
    },
    {
      icon: FiTarget,
      text: "Uncertainty about whether critical information reaches all employee segments"
    },
    {
      icon: FiMessageSquare,
      text: "Communication channels that work for some teams but not others"
    },
    {
      icon: FiTrendingDown,
      text: "Different employee groups requiring different communication methods"
    }
  ];

  return (
    <section id="challenge" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            The Challenge You're Facing
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            You have employees working in fundamentally different environments—retail floors, manufacturing plants, field locations, warehouses, construction sites. Your office-based communication works well for headquarters, but reaching distributed workforce segments requires a different approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={challenge.icon} className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  {challenge.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-neutral-600 font-medium">
            <strong>You may recognize these challenges:</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenge;