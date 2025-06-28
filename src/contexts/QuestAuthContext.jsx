import React, { createContext, useContext, useState } from 'react';

const QuestAuthContext = createContext();

export const useQuestAuth = () => {
  const context = useContext(QuestAuthContext);
  if (!context) {
    throw new Error('useQuestAuth must be used within a QuestAuthProvider');
  }
  return context;
};

export const QuestAuthProvider = ({ children }) => {
  const [questUser, setQuestUser] = useState(null);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  const handleQuestLogin = ({ userId, token, newUser }) => {
    // Store Quest authentication data
    localStorage.setItem('quest_userId', userId);
    localStorage.setItem('quest_token', token);
    
    setQuestUser({ userId, token });
    
    if (newUser) {
      setNeedsOnboarding(true);
    } else {
      // Navigate to main app or dashboard
      window.location.href = '/admin';
    }
  };

  const completeOnboarding = () => {
    setNeedsOnboarding(false);
    // Navigate to main app
    window.location.href = '/admin';
  };

  const questLogout = () => {
    setQuestUser(null);
    setNeedsOnboarding(false);
    localStorage.removeItem('quest_userId');
    localStorage.removeItem('quest_token');
  };

  const value = {
    questUser,
    needsOnboarding,
    handleQuestLogin,
    completeOnboarding,
    questLogout,
    isQuestAuthenticated: !!questUser
  };

  return (
    <QuestAuthContext.Provider value={value}>
      {children}
    </QuestAuthContext.Provider>
  );
};