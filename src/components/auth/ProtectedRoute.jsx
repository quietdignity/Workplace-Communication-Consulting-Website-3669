import React from 'react';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import QuestLoginPage from './QuestLoginPage';
import QuestOnboardingPage from './QuestOnboardingPage';

const ProtectedRoute = ({ children }) => {
  const { isQuestAuthenticated, needsOnboarding } = useQuestAuth();

  if (!isQuestAuthenticated) {
    return <QuestLoginPage />;
  }

  if (needsOnboarding) {
    return <QuestOnboardingPage />;
  }

  return children;
};

export default ProtectedRoute;