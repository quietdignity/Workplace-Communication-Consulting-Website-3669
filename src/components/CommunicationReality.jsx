import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiAlertTriangle, FiUsers, FiMessageSquare, FiTarget, FiTrendingDown} = FiIcons;

const CommunicationReality = () => {
  const challenges = [
    {
      icon: FiAlertTriangle,
      text: "Safety updates that should reach field workers immediately... but don't, so they learn about changes through informal networks"
    },
    {
      icon: FiUsers,
      text: "Frontline employees who feel out of the loop on company direction, so they form their own interpretations of what's happening"
    },
    {
      icon: FiTarget,
      text: "You're honestly not sure if your important messages are getting to everyone who needs them"
    },
    {
      icon: FiMessageSquare,
      text: "Some communication channels work great for certain teams, not so much for others"
    },
    {
      icon: FiTrendingDown,
      text: "Different groups of employees seem to need completely different approaches, but you're not sure what those are"
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
            Here's What We Know About Internal Communication
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
              Every organization has an internal communication strategy whether they've designed one intentionally or not.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              If you don't create and manage how information flows through your organization, your team will develop informal networks and communication patterns anyway. They'll figure out how to get the information they need through break room conversations, text message chains, informal supervisor updates, or workplace gossip. You just won't know what those patterns are, whether they're accurate, or if they're helping or hurting your goals.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <p className="text-primary-800 font-medium text-center">
                The question is: do you want to design your communication strategy intentionally, or let it happen by accident?
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
            Does this sound familiar?
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                <p className="text-neutral-700 leading-relaxed text-sm">
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
              If you're nodding along, you're not alone. This is the reality of managing communication across a distributed workforce, and why we believe in both designing intentional communication strategies and understanding the informal ones that already exist.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunicationReality;