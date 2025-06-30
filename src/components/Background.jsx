import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiUser,FiUsers,FiMic} = FiIcons;

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
            About Our Founder
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
                alt="James A. Brown, Communications Professional and Fractional Internal Communications Strategist"
                className="w-80 h-80 object-cover rounded-xl shadow-lg mx-auto lg:mx-0 mb-6"
              />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                James A. Brown
              </h3>
              <p className="text-lg text-primary-600 font-medium">
                Communications Professional and Fractional Internal Communications Strategist
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
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUser} className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">
                  15+ Years Experience
                </h4>
              </div>
              <p className="text-neutral-700 leading-relaxed mb-4">
                James Brown is a communications professional with <strong>15+ years of experience figuring out how information really moves through complex, distributed organizations</strong> and how to work with that reality rather than fight it.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                His background includes award winning investigative reporting, where he learned to trace how information flows through organizations and communities, and managing internal communications for 1,800+ employees across 15 departments in government operations. Through these experiences, he developed a special set of skills that he used to develop Workplace Mapping, a new approach to understanding how organizations communicate.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
              <p className="text-primary-800 font-medium text-center">
                The philosophy behind this work is simple: every organization will have an internal communication strategy whether you design one or not. We help you make yours intentional and effective through fractional expertise and systematic workplace mapping.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;