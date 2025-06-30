import React from 'react';
import { useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMic } = FiIcons;

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're on FAQ page and trying to navigate to other sections, go to home first
    if (location.pathname === '/faq' && sectionId !== 'faq') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // Normal section scrolling
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

  // Method mapping - links each service to the most relevant section
  const handleMethodClick = (methodType) => {
    switch(methodType) {
      case 'investigation':
        // Links to DISCOVER section which covers investigation
        scrollToSection('methodology');
        break;
      case 'analysis':
        // Links to ANALYZE section
        scrollToSection('methodology');
        break;
      case 'design':
        // Links to DESIGN section
        scrollToSection('methodology');
        break;
      case 'implementation':
        // Links to services section which covers implementation
        scrollToSection('services');
        break;
      case 'capability':
        // Links to SUSTAIN section which covers internal capability building
        scrollToSection('methodology');
        break;
      default:
        scrollToSection('methodology');
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Workplace Mapping</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Fractional internal communications strategist and systematic communication solutions for distributed workforces. Helping organizations reach every employee segment effectively.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-left"
                >
                  Communication Diagnostic
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-left"
                >
                  Fractional Internal Communications Strategist
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-left"
                >
                  Complete Workplace Mapping
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleMethodClick('capability')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 text-left"
                >
                  Internal Capability Building
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('communication-reality')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  Communication Reality
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  Our Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('case-studies')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:team@workplacemapping.com"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                team@workplacemapping.com
              </a>
              <a
                href="mailto:team@workplacemapping.com?subject=Speaking and Workshop Inquiry"
                className="inline-flex items-center gap-2 text-neutral-300 hover:text-primary-300 transition-colors duration-200"
              >
                <SafeIcon icon={FiMic} className="w-4 h-4" />
                <span className="text-sm">Speaking and workshop inquiries welcome</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Workplace Mapping. Professional fractional internal communications strategy and consulting services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;