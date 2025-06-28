import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiShoppingBag, FiSettings, FiCoffee, FiTruck, FiTool, FiMapPin } = FiIcons;

const Experience = () => {
  const experiences = [
    {
      icon: FiShoppingBag,
      title: "Retail operations",
      description: "where store-level informal networks often supplement corporate communication"
    },
    {
      icon: FiSettings,
      title: "Manufacturing companies",
      description: "where plant floor communication culture may differ significantly from office environments"
    },
    {
      icon: FiCoffee,
      title: "Hospitality businesses",
      description: "where location-level teams develop their own information-sharing patterns"
    },
    {
      icon: FiTruck,
      title: "Logistics companies",
      description: "where drivers and warehouse workers create informal networks out of operational necessity"
    },
    {
      icon: FiTool,
      title: "Field service organizations",
      description: "where technicians develop informal communication systems to share knowledge and solve problems"
    },
    {
      icon: FiMapPin,
      title: "Municipalities and government agencies",
      description: "where field crews, public-facing staff, and administrative teams operate in completely different communication environments"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            This Works Well for Organizations With:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <SafeIcon icon={exp.icon} className="w-5 h-5 text-primary-600" />
                    <h3 className="font-bold text-neutral-900">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
            <p className="text-primary-800 font-medium">
              Any multi-location operation where different sites have developed different communication cultures that need to be understood and worked with
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;