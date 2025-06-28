import React, { useState } from 'react';
import { FeedbackWorkflow } from '@questlabs/react-sdk';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import questConfig from '../config/questConfig';

const { FiMessageSquare } = FiIcons;

const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const EventTracking = () => {
    // Track feedback button click
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'feedback_button_click', {
        event_category: 'engagement',
        event_label: 'floating_feedback_button'
      });
    }
  };

  const generateUserId = () => {
    // Generate or retrieve user ID from localStorage
    if (typeof window !== 'undefined') {
      let userId = localStorage.getItem('userId');
      if (!userId) {
        userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('userId', userId);
      }
      return userId;
    }
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => {
          EventTracking();
          setIsOpen((prev) => !prev);
        }}
        style={{ background: questConfig.PRIMARY_COLOR }}
        className="flex gap-1 rounded-t-md rounded-b-none justify-end items-center px-3 text-14 leading-5 font-semibold py-2 text-white z-50 fixed top-[calc(50%-20px)] -right-10 rotate-[270deg] transition-all h-9 hover:bg-primary-700 shadow-lg"
        aria-label="Open Feedback"
      >
        <div className="w-fit h-fit rotate-90 transition-all duration-300">
          <SafeIcon icon={FiMessageSquare} className="w-4 h-4" />
        </div>
        <p className="text-white text-sm font-medium leading-none">Feedback</p>
      </button>

      {/* Feedback Workflow Component */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative z-50 w-full max-w-md">
            <FeedbackWorkflow
              uniqueUserId={generateUserId()}
              questId={questConfig.QUEST_FEEDBACK_QUESTID}
              isOpen={isOpen}
              accent={questConfig.PRIMARY_COLOR}
              onClose={() => setIsOpen(false)}
              styleConfig={{
                primaryColor: questConfig.PRIMARY_COLOR,
                borderRadius: '12px',
                fontFamily: 'Inter, system-ui, sans-serif'
              }}
            >
              <FeedbackWorkflow.ThankYou />
            </FeedbackWorkflow>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton;