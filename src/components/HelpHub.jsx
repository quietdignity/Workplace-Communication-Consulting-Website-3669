import React from 'react';
import { HelpHub } from '@questlabs/react-sdk';
import questConfig from '../config/questConfig';

const AppHelp = () => {
  const generateUserId = () => {
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
    <div style={{ zIndex: 9999 }}>
      <HelpHub
        uniqueUserId={generateUserId()}
        questId={questConfig.QUEST_HELP_QUESTID}
        accent={questConfig.PRIMARY_COLOR}
        botLogo={{
          logo: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1741000949338-Vector%20%282%29.png'
        }}
        styleConfig={{
          primaryColor: questConfig.PRIMARY_COLOR,
          borderRadius: '12px',
          fontFamily: 'Inter, system-ui, sans-serif',
          zIndex: 9999
        }}
      />
    </div>
  );
};

export default AppHelp;