import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiUser, FiUsers, FiTool } = FiIcons;

const Approach = () => {
  const approaches = [
    {
      title: "Communication Trace Analysis",
      description: "Rather than surveys alone, we follow actual messages through your organization to document where they succeed, fail, or transform as they reach different employee segments.",
      icon: FiActivity
    },
    {
      title: "Investigative Background",
      description: "Developed by a former investigative journalist with experience managing communications for 3,000+ government employees across 20+ locations. Background includes award-winning reporting and crisis communication.",
      icon: FiUser
    },
    {
      title: "Employee Segment Focus",
      description: "We analyze how Office, Hybrid, and Field workers actually access and process information, then design communication strategies specific to each segment's operational reality.",
      icon: FiUsers
    },
    {
      title: "Internal Capability Building",
      description: "Train-the-trainer approach ensures your organization can maintain and evolve communication practices after our engagement concludes.",
      icon: FiTool
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            This Approach
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our methodology combines investigative techniques with practical communication strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={approach.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;