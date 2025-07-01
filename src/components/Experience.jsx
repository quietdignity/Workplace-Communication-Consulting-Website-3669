import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiUsers, FiBuilding, FiAward} = FiIcons;

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Experience That Counts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            viewport={{once: true}}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiUsers} className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">3,000+</h3>
            <p className="text-neutral-600">Distributed employees managed</p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiBuilding} className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">15+ Years</h3>
            <p className="text-neutral-600">Communication strategy experience</p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            viewport={{once: true}}
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiAward} className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Proven</h3>
            <p className="text-neutral-600">Workplace mapping methodology</p>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.6}}
          viewport={{once: true}}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200 max-w-3xl mx-auto">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Developed through managing communications for 3,000+ distributed employees across government and private sector organizations. Our approach combines investigative techniques with practical communication strategy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;