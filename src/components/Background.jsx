import React from 'react';
import {motion} from 'framer-motion';

const Background = () => {
  return (
    <section id="background" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            About This Approach
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center lg:text-left">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751077031511-james-brown-profile.JPG"
                alt="James A. Brown, Communications Professional"
                className="w-80 h-80 object-cover rounded-xl shadow-lg mx-auto lg:mx-0 mb-6"
              />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                James A. Brown
              </h3>
              <p className="text-lg text-primary-600 font-medium">
                Founder, Workplace Mapping
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              James A. Brown founded Workplace Mapping after discovering a fundamental communication divide while managing internal communications for 3,000+ municipal employees across 100+ sites. The methodology emerged from real-world experience with complex distributed workforce communication in high-stakes environments.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Our approach acknowledges that every organization develops both formal and informal communication networks. The question is whether these networks support or undermine your operational goals.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              We help organizations build intentional communication infrastructure that works with workforce reality, not against it.
            </p>

            <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
              <h4 className="font-semibold text-primary-900 mb-3">Multi-Workforce Expertise</h4>
              <p className="text-primary-800">
                Whether your challenge involves office workers, hybrid teams, field crews, or all three, we design infrastructure that reaches everyone effectively.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;