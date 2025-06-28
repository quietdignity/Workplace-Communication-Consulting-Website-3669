import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMic } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Workplace Mapping</h3>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Systematic communication solutions for distributed workforces. Helping organizations reach every employee segment effectively.
            </p>
            <p className="text-neutral-400 text-sm">
              Founded by James A. Brown
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-neutral-300">
              <li>Communication Investigation</li>
              <li>Workforce Analysis</li>
              <li>System Design</li>
              <li>Implementation Support</li>
              <li>Internal Capability Building</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:james@themodernfire.com"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
              >
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                james@themodernfire.com
              </a>
              <a 
                href="mailto:james@themodernfire.com?subject=Speaking and Workshop Inquiry"
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