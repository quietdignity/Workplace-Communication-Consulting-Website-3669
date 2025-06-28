import React from 'react';
import { QuestLogin } from '@questlabs/react-sdk';
import { motion } from 'framer-motion';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import questConfig from '../../config/questConfig';

const QuestLoginPage = () => {
  const { handleQuestLogin } = useQuestAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-neutral-100 flex">
      {/* Left Section - Branding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-12 items-center justify-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-16 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Workplace Mapping
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Systematic communication solutions for distributed workforces. 
              Join our platform to access exclusive insights and tools.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <p className="text-primary-100">
                "Understanding how information really moves through complex, distributed organizations—and how to work with that reality rather than fight it."
              </p>
              <p className="text-sm text-primary-200 mt-2">- James A. Brown</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Authentication */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">
                Sign In
              </h2>
              <p className="text-neutral-600">
                Access your communication insights dashboard
              </p>
            </div>

            <div style={{ width: '400px', margin: '0 auto' }}>
              <QuestLogin
                onSubmit={handleQuestLogin}
                email={true}
                google={false}
                accent={questConfig.PRIMARY_COLOR}
                borderRadius="12px"
                fontFamily="Inter, system-ui, sans-serif"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-500">
                New to Workplace Mapping? Create an account above to get started.
              </p>
            </div>
          </div>

          {/* Mobile Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:hidden mt-8 text-center"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Workplace Mapping Platform
            </h3>
            <p className="text-neutral-600">
              Systematic communication solutions for distributed workforces
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestLoginPage;