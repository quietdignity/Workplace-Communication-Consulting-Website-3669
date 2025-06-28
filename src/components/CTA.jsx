import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiCalendar, FiArrowRight } = FiIcons;

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to See Your Complete Communication Picture?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Start with DISCOVER
            </h3>
            <p className="text-xl text-white/90 mb-6">
              We'll map both your formal communication systems and your informal networks to show you the complete picture
            </p>
            <p className="text-white/80 leading-relaxed">
              Want to talk through your distributed workforce communication challenges and understand what's really happening in your organization? Let's schedule a conversation about whether workplace mapping makes sense for your situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:team@workplacemapping.com"
              className="bg-white hover:bg-neutral-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              team@workplacemapping.com
            </a>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-3"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              Schedule a Conversation
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <p className="text-white/70 text-sm italic">
              Pricing varies depending on your organization's size, complexity, and needs. Individual services start at $25,000, packages start at $50,000. We can work with different budget cycles and organizational needs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;