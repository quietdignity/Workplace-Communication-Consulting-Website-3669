import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiUsers, FiShield, FiTruck, FiArrowRight} = FiIcons;

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Safety Success",
      industry: "Manufacturing/Safety",
      challenge: "A production facility struggled with safety training participation, achieving only two-thirds attendance rate despite mandatory requirements.",
      result: "We redesigned how shift schedules and communication timing aligned, replacing fragmented messaging with systematic coordination. The facility achieved full safety training participation and eliminated recurring compliance violations.",
      icon: FiShield,
      color: "green",
      impact: "Achieved 100% safety training compliance and eliminated recurring violations",
      timeline: "Single training cycle redesign"
    },
    {
      id: 2,
      title: "Government Coordination Breakthrough",
      industry: "Municipal Government",
      challenge: "A municipal agency experienced compliance delays across fifteen departments due to inconsistent information flow and coordination gaps.",
      result: "We helped departments adopt unified communication protocols, streamlining information flow across all operational areas. The agency eliminated persistent compliance delays and resolved chronic interdepartmental coordination issues.",
      icon: FiUsers,
      color: "blue",
      impact: "Eliminated persistent compliance delays across all fifteen departments",
      timeline: "System-wide protocol implementation"
    },
    {
      id: 3,
      title: "Logistics Error Resolution",
      industry: "Distribution/Logistics",
      challenge: "A distribution company struggled with routing mistakes caused by inconsistent information processing between drivers, warehouse crews, and office staff.",
      result: "We implemented channel-specific protocols that matched how each team actually processes information. The company eliminated recurring routing errors and resolved persistent driver-warehouse coordination breakdowns.",
      icon: FiTruck,
      color: "orange",
      impact: "Eliminated recurring routing errors and resolved persistent coordination breakdowns",
      timeline: "Multi-phase protocol implementation"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color] || colors.blue;
  };

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
    <section id="case-studies" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            These outcomes result from tracing actual message pathways, identifying failure points, and building systematic solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(study.color)}`}>
                  <SafeIcon icon={study.icon} className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium">
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Challenge:</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Result */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neutral-700 mb-2">Solution & Impact:</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {study.result}
                </p>
              </div>

              {/* Impact & Timeline */}
              <div className="space-y-3 mb-6">
                <div className="bg-neutral-50 p-3 rounded-lg">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-neutral-500 font-medium">Specific Outcome:</span>
                    <span className="text-xs font-semibold text-neutral-900 text-right leading-tight max-w-[70%]">
                      {study.impact}
                    </span>
                  </div>
                </div>
                <div className="bg-neutral-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-500 font-medium">Implementation:</span>
                    <span className="text-xs font-semibold text-neutral-900">
                      {study.timeline}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 mx-auto transition-colors"
                >
                  Resolve Your Persistent Issues
                  <SafeIcon icon={FiArrowRight} className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg"
        >
          <h3 className="text-xl font-bold text-neutral-900 mb-6 text-center">
            The Workplace Mapping Difference
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Evidence-Based Investigation</h4>
              <p className="text-sm text-neutral-600">
                We follow your recent communications end-to-end before recommending any changes, using investigative methodology to understand what really happens.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Field-Tested Experience</h4>
              <p className="text-sm text-neutral-600">
                Our approach developed through managing communications for 3,000+ municipal employees across 100+ sites during organizational transformation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTruck} className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Sustainable Resolution</h4>
              <p className="text-sm text-neutral-600">
                We don't just fix immediate problems—we eliminate the root causes that create recurring issues and train your team to maintain lasting solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-primary-600 p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">
              Stop Tolerating Recurring Communication Failures
            </h3>
            <p className="mb-6 text-primary-100">
              Right now, persistent communication gaps are creating the same problems over and over. Every day you wait means more recurring safety risks, repeated operational confusion, and ongoing employee disconnection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Eliminate Your Persistent Issues Now
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
              <a
                href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Schedule Your Resolution Strategy Call
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;