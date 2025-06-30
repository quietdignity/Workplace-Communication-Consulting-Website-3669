import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {trackEmailClick,trackCalendarBooking} from '../utils/analytics';

const {FiMail,FiCalendar,FiArrowRight}=FiIcons;

const CTA=()=> {
  const handleEmailClick=()=> {
    trackEmailClick('team@workplacemapping.com');
  };

  const handleCalendarClick=()=> {
    trackCalendarBooking('cta_section');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{opacity: 0,y: 20}}
          whileInView={{opacity: 1,y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Losing Critical Information in the Communication Gap
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Frontline Workers Deserve Communication Clarity Too
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Right now,critical information isn't reaching everyone in your organization. Every day you wait means more safety risks,operational confusion,and employee disconnection.
            </p>
            <p className="text-white/80 leading-relaxed">
              Your safety updates should reach field crews as reliably as they reach headquarters. Your policy changes should inform everyone who needs to implement them. Don't let another safety update get lost. Don't let another policy change spread through break room rumors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-3xl mx-auto">
            <button
              onClick={()=> {
                handleCalendarClick();
                document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});
              }}
              className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              Start Your 20-Day Diagnostic Now
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </button>

            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCalendarClick}
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center gap-3 justify-center"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              Schedule Free Strategy Call
            </a>
          </div>

          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.5,duration: 0.5}}
            viewport={{once: true}}
            className="mt-8"
          >
            <p className="text-white/70 text-sm italic mb-4">
              Questions? Email team@workplacemapping.com or call to discuss your specific communication challenges.
            </p>
            <p className="text-white/80 font-medium">
              Every day of delay is another day of communication failure.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;