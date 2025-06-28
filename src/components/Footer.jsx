import React from 'react';
import { useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMic, FiHelpCircle } = FiIcons;

const Footer = () => {
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're on FAQ page and trying to navigate to other sections, go to home first
    if (location.pathname === '/faq' && sectionId !== 'faq') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're trying to go to FAQ
    if (sectionId === 'faq') {
      // If already on FAQ page, scroll to top
      if (location.pathname === '/faq') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // If on homepage, try to find FAQ section, otherwise go to FAQ page
      if (location.pathname === '/') {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          const navHeight = 80;
          const elementPosition = faqElement.offsetTop - navHeight;
          window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        } else {
          window.location.href = '/faq';
        }
        return;
      }

      // From other pages, go to FAQ page
      window.location.href = '/faq';
      return;
    }

    // Normal section scrolling
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const handleFAQClick = () => {
    if (location.pathname === '/faq') {
      // Already on FAQ page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to FAQ page
      window.location.href = '/faq';
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Workplace Mapping</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Systematic communication solutions for distributed workforces. 
              Helping organizations reach every employee segment effectively.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Method</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>Communication Investigation</li>
              <li>Workforce Analysis</li>
              <li>System Design</li>
              <li>Implementation Support</li>
              <li>Internal Capability Building</li>
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
                  onClick={() => scrollToSection('process')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  How We Work
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
                  onClick={() => scrollToSection('packages')}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={handleFAQClick}
                  className="text-neutral-300 hover:text-primary-300 transition-colors duration-200 flex items-center gap-2"
                >
                  <SafeIcon icon={FiHelpCircle} className="w-4 h-4" />
                  FAQ
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
            <p className="text-neutral-300 text-sm mt-4">
              James A. Brown<br />
              Communications Professional<br />
              Workplace Mapping Specialist
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Workplace Mapping by James A. Brown. Professional communication consulting and speaking services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;