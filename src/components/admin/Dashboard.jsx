import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useQuestAuth } from '../../contexts/QuestAuthContext';
import Analytics from './Analytics';
import ContentEditor from './ContentEditor';
import LeadManager from './LeadManager';
import UserManager from './UserManager';
import FeedbackButton from '../FeedbackButton';
import HelpHub from '../HelpHub';

const { FiBarChart, FiEdit, FiUsers, FiMail, FiLogOut, FiSettings } = FiIcons;

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const { user, logout, hasPermission } = useAuth();
  const { questLogout } = useQuestAuth();

  const tabs = [
    { id: 'analytics', name: 'Analytics', icon: FiBarChart, permission: 'view_analytics' },
    { id: 'content', name: 'Content', icon: FiEdit, permission: 'edit_content' },
    { id: 'leads', name: 'Leads', icon: FiMail, permission: 'view_leads' },
    { id: 'users', name: 'Users', icon: FiUsers, permission: 'manage_users' }
  ];

  const availableTabs = tabs.filter(tab => hasPermission(tab.permission));

  const handleLogout = () => {
    logout();
    questLogout();
    window.location.href = '/';
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <Analytics />;
      case 'content':
        return <ContentEditor />;
      case 'leads':
        return <LeadManager />;
      case 'users':
        return <UserManager />;
      default:
        return <Analytics />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-neutral-200" style={{ zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-neutral-900">
                Workplace Mapping Admin
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-neutral-600">
                Welcome, {user?.name}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0" style={{ zIndex: 30 }}>
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {availableTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border border-primary-200'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    {tab.name}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feedback Button for Admin */}
      <FeedbackButton />
      
      {/* Help Hub for Admin */}
      <HelpHub />
    </div>
  );
};

export default Dashboard;