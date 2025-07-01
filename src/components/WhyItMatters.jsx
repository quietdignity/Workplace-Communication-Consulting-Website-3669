import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiAlertTriangle, FiMessageSquare, FiClock, FiUsers} = FiIcons;

const WhyItMatters = () => {
  const challenges = [
    {
      icon: FiAlertTriangle,
      text: "Safety alerts stall before reaching frontline workers"
    },
    {
      icon: FiMessageSquare,
      text: "Virtual teams rely on informal channels while headquarters sends emails"
    },
    {
      icon: FiClock,
      text: "Critical updates reach distributed workers hours or days late"
    },
    {
      icon: FiUsers,
      text: "Communication gaps create operational confusion across locations"
    }
  ];

  return (
    <section id="why-it-matters" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Why It Matters for Frontline, Virtual & Distributed Workers
          </h2>
          
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Organizations across every industry struggle with the same challenge: reaching every employee segment effectively.
          </p>
          
          <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Safety alerts, policy changes, or urgent notices can stall or stray off course. When that happens, your frontline workers, virtual teams, and distributed employees create workarounds using group chats and word of mouth. The result? Critical updates reach some workers hours or days late, creating unnecessary risk and operational confusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              viewport={{once: true}}
              className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={challenge.icon} className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-neutral-700 leading-relaxed font-medium">
                  {challenge.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.5}}
          viewport={{once: true}}
          className="bg-primary-50 p-8 rounded-xl border border-primary-200 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-primary-900 mb-4 text-center">
            Common Across Organizations Everywhere
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-sm text-primary-800">
            <div>
              <h4 className="font-semibold mb-2">Manufacturing & Production:</h4>
              <p>Plant floor crews miss safety updates while office staff receives every memo</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Retail Operations:</h4>
              <p>Store associates rely on informal networks while corporate communication fails to reach frontlines</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Virtual & Distributed Teams:</h4>
              <p>Remote workers develop their own information-sharing patterns</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Field Services:</h4>
              <p>Technicians and delivery drivers create workarounds when official channels don't reach them</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;