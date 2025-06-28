import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiArrowDown} = FiIcons;

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
          alt="Office workers collaborating on workplace communication strategy" 
          className="w-full h-full object-cover opacity-10" 
          loading="eager"
          width="1200" 
          height="800"
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
              aria-label="Learn about workplace mapping solutions"
            >
              Discover the Solution
            </button>
            
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 md:px-10 py-4 md:py-5 rounded-lg text-lg font-semibold transition-all duration-200 text-center"
              aria-label="Schedule a consultation for workplace mapping"
            >
              Schedule a Conversation
            </a>
          </div>

          {/* Quick Access to DADS */}
          <div className="mt-12 md:mt-16 w-full">
            <div className="w-full text-center">
              <p className="text-xl md:text-2xl font-semibold text-neutral-700 mb-6 mx-auto">
                Or explore our methodology:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "DISCOVER", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
                { name: "ANALYZE", color: "bg-green-100 text-green-700 hover:bg-green-200" },
                { name: "DESIGN", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
                { name: "SUSTAIN", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" }
              ].map((phase) => (
                <button
                  key={phase.name}
                  onClick={() => scrollToSection('services')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${phase.color}`}
                >
                  {phase.name}
                </button>
              ))}
            </div>
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
            aria-label="Scroll to learn more about communication challenges"
          >
            <SafeIcon icon={FiArrowDown} className="w-6 h-6 text-neutral-500 mx-auto animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;