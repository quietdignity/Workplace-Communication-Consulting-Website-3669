import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiAlertTriangle, FiUsers, FiMessageSquare, FiTarget} = FiIcons;

const CommunicationReality = () => {
  const challenges = [
    {
      icon: FiAlertTriangle,
      text: "Safety updates stall before reaching field teams"
    },
    {
      icon: FiUsers,
      text: "Crews rely on text chains while headquarters sends emails"
    },
    {
      icon: FiMessageSquare,
      text: "Policy changes spread through break room conversations"
    },
    {
      icon: FiTarget,
      text: "Systems that work for corporate fail on loading docks"
    }
  ];

  return (
    <section id="communication-reality" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 max-w-4xl mx-auto">
            The Hidden Communication Divide
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751076077600-IMG_2854.jpg"
              alt="Field workers in discussion"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              Every organization develops internal communication patterns. You either design them intentionally or they emerge through necessity.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              How much did communication gaps cost your organization last quarter? When critical information fails to reach frontline workers, informal networks fill gaps you cannot see. We map those networks and strengthen your communication infrastructure.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <p className="text-primary-800 font-medium text-center">
                The question isn't whether you have communication gaps. It's whether you'll address them systematically before they create the next crisis.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-neutral-900 mb-8">
            Common Communication Failures
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                <p className="text-neutral-700 leading-relaxed font-medium">
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
          className="mt-12 text-center max-w-4xl mx-auto"
        >
          <div className="bg-neutral-50 p-8 rounded-xl">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Don't let another safety update get lost. Don't let another policy change spread through break room rumors. Don't let informal networks become your primary communication system by default.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunicationReality;