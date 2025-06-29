import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import supabase from '../../lib/supabase';

const {FiUsers, FiMail, FiCalendar, FiTrendingUp, FiRefreshCw, FiDownload} = FiIcons;

const AnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({
    contacts: { total: 0, thisWeek: 0 },
    events: { total: 0, thisWeek: 0 },
    faqInteractions: { total: 0, thisWeek: 0 },
    topFAQs: []
  });
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      // Fetch contact submissions
      const { data: contacts } = await supabase
        .from('contact_submissions_wm2024')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch recent analytics events
      const { data: events } = await supabase
        .from('analytics_events_wm2024')
        .select('*')
        .order('created_at', { ascending: false });

      // Fetch FAQ interactions
      const { data: faqInteractions } = await supabase
        .from('faq_interactions_wm2024')
        .select('*')
        .order('created_at', { ascending: false });

      // Process data
      const contactsThisWeek = contacts?.filter(c => new Date(c.created_at) > weekAgo).length || 0;
      const eventsThisWeek = events?.filter(e => new Date(e.created_at) > weekAgo).length || 0;
      const faqThisWeek = faqInteractions?.filter(f => new Date(f.created_at) > weekAgo).length || 0;

      // Get top FAQs
      const faqCounts = {};
      faqInteractions?.forEach(interaction => {
        faqCounts[interaction.question] = (faqCounts[interaction.question] || 0) + 1;
      });
      const topFAQs = Object.entries(faqCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([question, count]) => ({ question, count }));

      setAnalytics({
        contacts: { total: contacts?.length || 0, thisWeek: contactsThisWeek },
        events: { total: events?.length || 0, thisWeek: eventsThisWeek },
        faqInteractions: { total: faqInteractions?.length || 0, thisWeek: faqThisWeek },
        topFAQs
      });

      setRecentContacts(contacts?.slice(0, 10) || []);

    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const exportData = async () => {
    try {
      const { data: contacts } = await supabase
        .from('contact_submissions_wm2024')
        .select('*')
        .order('created_at', { ascending: false });

      const { data: events } = await supabase
        .from('analytics_events_wm2024')
        .select('*')
        .order('created_at', { ascending: false });

      const exportData = {
        contacts,
        events,
        analytics,
        exportDate: new Date().toISOString()
      };

      const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `workplace-mapping-analytics-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const statCards = [
    {
      title: 'Contact Submissions',
      total: analytics.contacts.total,
      thisWeek: analytics.contacts.thisWeek,
      icon: FiMail,
      color: 'blue'
    },
    {
      title: 'Website Events',
      total: analytics.events.total,
      thisWeek: analytics.events.thisWeek,
      icon: FiTrendingUp,
      color: 'green'
    },
    {
      title: 'FAQ Interactions',
      total: analytics.faqInteractions.total,
      thisWeek: analytics.faqInteractions.thisWeek,
      icon: FiUsers,
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600'
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
            onClick={fetchAnalytics}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-2xl font-bold text-neutral-900">{stat.total}</p>
                <p className="text-sm text-neutral-600 mt-1">
                  +{stat.thisWeek} this week
                </p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(stat.color)}`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Contacts */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-6 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">Recent Contact Submissions</h3>
        </div>
        <div className="p-6">
          {recentContacts.length > 0 ? (
            <div className="space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact.id} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-medium text-neutral-900">{contact.name}</p>
                      <span className="text-xs text-neutral-500">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">{contact.email}</p>
                    {contact.company && (
                      <p className="text-xs text-neutral-500">{contact.company}</p>
                    )}
                    <p className="text-sm text-neutral-700 mt-2 line-clamp-2">{contact.message}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200 transition-colors"
                    >
                      Reply
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 text-center py-8">No contact submissions yet.</p>
          )}
        </div>
      </div>

      {/* Top FAQs */}
      {analytics.topFAQs.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
          <div className="p-6 border-b border-neutral-200">
            <h3 className="text-lg font-semibold text-neutral-900">Most Popular FAQs</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {analytics.topFAQs.map((faq, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <p className="text-sm text-neutral-700 flex-1">{faq.question}</p>
                  <span className="text-sm font-medium text-neutral-900 bg-neutral-200 px-2 py-1 rounded">
                    {faq.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Integration Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Real-Time Analytics Active</h3>
        <p className="text-blue-800 mb-4">
          Your Supabase backend is now tracking real visitor interactions including:
        </p>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>• Contact form submissions (with lead details)</li>
          <li>• FAQ interactions and search queries</li>
          <li>• Chat widget usage patterns</li>
          <li>• Google Analytics events (GA4: G-LX0W4B0RSH)</li>
          <li>• Email clicks and calendar booking attempts</li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;