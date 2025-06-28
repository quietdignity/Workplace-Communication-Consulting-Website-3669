import React, { useState } from 'react';
import { OnBoarding } from '@questlabs/react-sdk';
import { motion } from 'framer-motion';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import questConfig from '../../config/questConfig';

const QuestOnboardingPage = () => {
  const { completeOnboarding } = useQuestAuth();
  const [answers, setAnswers] = useState({});
  
  const userId = localStorage.getItem('quest_userId');
  const token = localStorage.getItem('quest_token');

  const handleOnboardingComplete = () => {
    console.log('Onboarding completed with answers:', answers);
    completeOnboarding();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-neutral-100 flex">
      {/* Left Section - Visual/Branding */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-600 to-green-800 p-12 items-center justify-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-20 w-28 h-28 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Get Started!
            </h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              We're setting up your personalized communication insights experience. 
              This will help us tailor the platform to your specific needs.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <p className="text-green-100 mb-4">
                ✨ Personalized dashboard setup
              </p>
              <p className="text-green-100 mb-4">
                📊 Communication preference mapping
              </p>
              <p className="text-green-100">
                🎯 Custom insights configuration
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Onboarding Component */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                Welcome Setup
              </h2>
              <p className="text-neutral-600">
                Help us customize your experience
              </p>
            </div>

            <div style={{ width: '400px', margin: '0 auto' }}>
              {userId && token ? (
                <OnBoarding
                  userId={userId}
                  token={token}
                  questId={questConfig.QUEST_ONBOARDING_QUESTID}
                  answer={answers}
                  setAnswer={setAnswers}
                  getAnswers={handleOnboardingComplete}
                  accent={questConfig.PRIMARY_COLOR}
                  singleChoose="modal1"
                  multiChoice="modal2"
                  borderRadius="12px"
                  fontFamily="Inter, system-ui, sans-serif"
                >
                  <OnBoarding.Header />
                  <OnBoarding.Content />
                  <OnBoarding.Footer />
                </OnBoarding>
              ) : (
                <div className="text-center py-8">
                  <p className="text-red-600 mb-4">
                    Authentication data missing. Please log in again.
                  </p>
                  <button
                    onClick={() => window.location.href = '/quest-login'}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Back to Login
                  </button>
                </div>
              )}
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
              Almost Ready!
            </h3>
            <p className="text-neutral-600">
              Complete setup to access your personalized dashboard
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestOnboardingPage;