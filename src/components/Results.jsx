import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiTarget, FiTrendingUp } = FiIcons;

const Results = () => {
  const deliverables = [
    {
      category: "Complete Picture of Your Communication Ecosystem",
      icon: FiFileText,
      items: [
        "Documentation showing where your formal messages actually go and how informal networks supplement or compete with them",
        "Survey data revealing what employees think about communication alongside investigation data showing what actually happens",
        "Profiles of how different employee groups really get and share information through both official and unofficial channels",
        "Johari Window analysis showing your communication blind spots and hidden areas"
      ]
    },
    {
      category: "Strategic Plan That Works with Reality",
      icon: FiTarget,
      items: [
        "Communication system designed for your actual workforce and communication culture, not some ideal scenario",
        "Integration strategy that leverages productive informal networks while addressing problematic communication gaps",
        "Step-by-step implementation plan that acknowledges both formal changes and cultural shifts",
        "Ways to measure whether both your intentional strategy and informal networks are supporting organizational goals"
      ]
    },
    {
      category: "Your Team Can Keep It Evolving",
      icon: FiTrendingUp,
      items: [
        "Internal champions trained in workplace mapping principles and how to work with distributed workforce communication culture",
        "Framework for recognizing when informal networks are pointing to gaps in formal communication",
        "Tools and processes your team needs to maintain the balance between designed and emergent communication",
        "Support during the transition so your intentional strategy becomes part of your organizational culture"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            What You'll Actually Get
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={deliverable.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {deliverable.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {deliverable.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;