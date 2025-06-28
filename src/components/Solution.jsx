import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiBarChart, FiSettings, FiRefreshCw } = FiIcons;

const Solution = () => {
  const phases = [
    { name: "DISCOVER", icon: FiSearch },
    { name: "ANALYZE", icon: FiBarChart },
    { name: "DESIGN", icon: FiSettings },
    { name: "SUSTAIN", icon: FiRefreshCw }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
            How We Can Help: Workplace Mapping for Distributed Teams
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-primary-200 shadow-sm"
              >
                <SafeIcon icon={phase.icon} className="w-5 h-5 text-primary-600" />
                <span className="font-semibold text-primary-700">{phase.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              Here's our approach: we help you understand both your formal communication strategy and the informal networks that have already developed in your organization. Then we design intentional systems that work with your reality, not against it.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100">
              <h3 className="text-xl font-bold text-primary-700 mb-4">
                What makes our approach different:
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                We survey AND investigate. Most consultants ask people what they think about communication, which is valuable but incomplete. We also follow actual messages through your organization to see what really happens. Surveys reveal what people think is happening, while investigation shows what's actually happening. Together, they give us insights that neither approach provides alone.
              </p>
            </div>
            
            <p className="text-neutral-700 leading-relaxed">
              This combination is crucial for distributed workforces because there's often a significant gap between what leadership believes is happening with communication and what's actually occurring in field locations, retail stores, manufacturing plants, or other operational environments.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751076090963-IMG_8521.jpg" 
              alt="Team meeting in office environment"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;