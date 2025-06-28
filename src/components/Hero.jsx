import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown } = FiIcons;

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-neutral-50 to-primary-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751076059906-IMG_8527.jpg" 
          alt="Office workers collaborating" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/90 to-primary-50/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-neutral-900 mb-6 md:mb-8 leading-tight max-w-5xl mx-auto">
            Your Corporate Communication Works for Office Staff.
            <span className="text-primary-600 block mt-2 md:mt-4">
              What About Everyone Else?
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-700 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            When you have employees across different locations, shifts, and work environments, reaching everyone effectively becomes a real challenge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center max-w-2xl mx-auto">
            <button
              onClick={() => scrollToSection('communication-reality')}
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Discover the Solution
            </button>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg font-semibold transition-all duration-200 text-center"
            >
              Schedule a Conversation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 md:mt-24"
        >
          <button
            onClick={() => scrollToSection('communication-reality')}
            className="cursor-pointer hover:text-primary-600 transition-colors"
          >
            <SafeIcon icon={FiArrowDown} className="w-6 h-6 text-neutral-500 mx-auto animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;