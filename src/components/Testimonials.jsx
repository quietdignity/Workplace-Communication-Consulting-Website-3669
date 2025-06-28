import React from 'react';
import {motion} from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Built for Your Reality
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Workplace mapping works best for organizations managing communication across different work environments and employee segments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Retail Operations
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              Multi-location retailers where store teams develop informal networks to supplement corporate communication, and headquarters needs reliable ways to reach frontline staff.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Manufacturing & Logistics
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              Organizations where plant floor, warehouse, and field teams operate in different communication environments than office staff, requiring multiple pathway strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Field Services & Government
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              Organizations with field workers, technicians, or distributed teams who create their own information-sharing patterns out of operational necessity.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Sound Like Your Organization?
            </h3>
            <p className="text-neutral-600 mb-6">
              See how workplace mapping can help you reach every employee segment effectively, regardless of where or how they work.
            </p>
            <a
              href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule Your Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;