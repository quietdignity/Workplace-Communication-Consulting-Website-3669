import React,{useState,useEffect} from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {trackCalendarBooking} from '../utils/analytics';

const {FiCalendar,FiX,FiArrowRight}=FiIcons;

const StickyCTABar=()=> {
  const [isVisible,setIsVisible]=useState(false);
  const [isDismissed,setIsDismissed]=useState(false);

  useEffect(()=> {
    // Check if user has already dismissed the bar in this session
    const dismissed=sessionStorage.getItem('sticky-cta-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll=()=> {
      const scrollPosition=window.scrollY;
      const windowHeight=window.innerHeight;
      // Show after scrolling 50% of viewport height (user is engaged)
      if (scrollPosition > windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);

  const handleDismiss=()=> {
    setIsDismissed(true);
    setIsVisible(false);
    // Remember dismissal for this session
    sessionStorage.setItem('sticky-cta-dismissed','true');
  };

  const handleCTAClick=()=> {
    trackCalendarBooking('sticky_cta_bar');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{y: -100,opacity: 0}}
          animate={{y: 0,opacity: 1}}
          exit={{y: -100,opacity: 0}}
          transition={{duration: 0.3,ease: "easeOut"}}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg border-b border-primary-500"
          style={{height: '60px'}}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex items-center justify-between h-full py-3">
              {/* Desktop - Message + Button */}
              <div className="hidden md:flex items-center justify-between w-full">
                {/* Left side - Message */}
                <div className="flex items-center gap-4 flex-1">
                  <div>
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="text-base font-semibold">
                      Stop tolerating internal communication failures.
                    </p>
                  </div>
                </div>

                {/* Right side - CTA Button */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCTAClick}
                    className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg font-semibold text-base transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    Schedule Free Strategy Call
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </a>

                  {/* Dismiss Button */}
                  <button
                    onClick={handleDismiss}
                    className="text-white hover:text-primary-200 p-1 rounded transition-colors duration-200"
                    aria-label="Dismiss notification"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile - Button Only (Centered) */}
              <div className="md:hidden flex items-center justify-center w-full">
                <div className="flex items-center gap-3">
                  <a
                    href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCTAClick}
                    className="bg-white text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                  >
                    Schedule Free Strategy Call
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </a>

                  {/* Dismiss Button */}
                  <button
                    onClick={handleDismiss}
                    className="text-white hover:text-primary-200 p-1 rounded transition-colors duration-200"
                    aria-label="Dismiss notification"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle animation indicator */}
          <motion.div
            initial={{scaleX: 0}}
            animate={{scaleX: 1}}
            transition={{duration: 2,ease: "easeOut"}}
            className="h-0.5 bg-white/30 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTABar;