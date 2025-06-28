import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiMail, FiCalendar, FiTrendingUp, FiDownload, FiRefreshCw } = FiIcons;

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    visitors: {
      total: 2847,
      thisMonth: 421,
      change: 12.5
    },
    leads: {
      total: 89,
      thisMonth: 15,
      change: 8.2
    },
    consultations: {
      total: 23,
      thisMonth: 4,
      change: -5.1
    },
    conversions: {
      rate: 3.1,
      thisMonth: 3.6,
      change: 16.1
    }
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'consultation',
      description: 'New consultation scheduled',
      email: 'sarah.johnson@retailchain.com',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      id: 2,
      type: 'email',
      description: 'Contact form submission',
      email: 'mike.torres@logistics.com',
      timestamp: '2024-01-15T09:15:00Z'
    },
    {
      id: 3,
      type: 'visit',
      description: 'FAQ page visited',
      email: 'anonymous',
      timestamp: '2024-01-15T08:45:00Z'
    }
  ]);

  const [loading, setLoading] = useState(false);

  const refreshData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const exportData = () => {
    // Simulate export functionality
    const data = {
      analytics,
      recentActivity,
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workplace-mapping-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const statCards = [
    {
      title: 'Total Visitors',
      value: analytics.visitors.total.toLocaleString(),
      change: analytics.visitors.change,
      icon: FiUsers,
      color: 'blue'
    },
    {
      title: 'Email Leads',
      value: analytics.leads.total.toLocaleString(),
      change: analytics.leads.change,
      icon: FiMail,
      color: 'green'
    },
    {
      title: 'Consultations',
      value: analytics.consultations.total.toLocaleString(),
      change: analytics.consultations.change,
      icon: FiCalendar,
      color: 'purple'
    },
    {
      title: 'Conversion Rate',
      value: `${analytics.conversions.rate}%`,
      change: analytics.conversions.change,
      icon: FiTrendingUp,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Analytics Dashboard</h2>
        <div className="flex gap-3">
          <button
            onClick={refreshData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50"
          >
            <SafeIcon icon={FiRefreshCw} className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={exportData}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change >= 0 ? '+' : ''}{stat.change}% this month
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-6 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <SafeIcon 
                    icon={activity.type === 'consultation' ? FiCalendar : activity.type === 'email' ? FiMail : FiUsers} 
                    className="w-5 h-5 text-primary-600" 
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">{activity.description}</p>
                  <p className="text-xs text-neutral-600">{activity.email}</p>
                </div>
                <div className="text-xs text-neutral-500">
                  {new Date(activity.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Integration Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Analytics Integration</h3>
        <p className="text-blue-800 mb-4">
          This dashboard shows simulated data. To see real analytics, integrate with:
        </p>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>• Google Analytics 4 (already configured in index.html)</li>
          <li>• Hotjar for user behavior tracking</li>
          <li>• Email service provider APIs (Mailchimp, ConvertKit, etc.)</li>
          <li>• Calendar booking system (TidyCal API)</li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;