import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiMail } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Communication Reality', href: 'communication-reality' },
    { name: 'Solution', href: 'solution' },
    { name: 'Process', href: 'process' },
    { name: 'Packages', href: 'packages' },
    { name: 'Background', href: 'background' },
    { name: 'Contact', href: 'contact' }
  ];

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
    setIsOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Handle hash changes (for direct URL access)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    // Check for hash on initial load
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-neutral-900 hover:text-primary-600 transition-colors"
            >
              Workplace Mapping
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                Schedule Call
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-neutral-900 p-2"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-neutral-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-md text-base font-medium mt-4 flex items-center gap-2"
            >
              <SafeIcon icon={FiMail} className="w-4 h-4" />
              Schedule Call
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;