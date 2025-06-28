import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMail, FiCalendar, FiDownload, FiSearch, FiFilter } = FiIcons;

const LeadManager = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@retailchain.com',
      company: 'RetailChain Corp',
      source: 'Contact Form',
      status: 'New',
      date: '2024-01-15T10:30:00Z',
      notes: 'Interested in DISCOVER service for 500+ employee retail operation'
    },
    {
      id: 2,
      name: 'Mike Torres',
      email: 'mike.torres@logistics.com',
      company: 'Global Logistics Inc',
      source: 'Calendar Booking',
      status: 'Contacted',
      date: '2024-01-14T15:20:00Z',
      notes: 'Consultation scheduled for next week - field worker communication challenges'
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      email: 'j.chen@manufacturing.com',
      company: 'Advanced Manufacturing',
      source: 'Email',
      status: 'Qualified',
      date: '2024-01-13T09:45:00Z',
      notes: 'Multiple plant locations, looking for complete transformation package'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const statusOptions = ['All', 'New', 'Contacted', 'Qualified', 'Proposal Sent', 'Closed'];
  const sourceOptions = ['Contact Form', 'Calendar Booking', 'Email', 'Referral', 'Website'];

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportLeads = () => {
    const data = {
      leads: filteredLeads,
      exportDate: new Date().toISOString(),
      totalLeads: filteredLeads.length
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workplace-mapping-leads-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800 border-blue-200',
      'Contacted': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Qualified': 'bg-green-100 text-green-800 border-green-200',
      'Proposal Sent': 'bg-purple-100 text-purple-800 border-purple-200',
      'Closed': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    return colors[status] || colors['New'];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Lead Management</h2>
        <button
          onClick={exportLeads}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <SafeIcon icon={FiDownload} className="w-4 h-4" />
          Export Leads
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Search Leads
            </label>
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Search by name, email, or company..."
              />
            </div>
          </div>
          <div className="md:w-48">
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Filter by Status
            </label>
            <div className="relative">
              <SafeIcon icon={FiFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-6 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">
            Leads ({filteredLeads.length})
          </h3>
        </div>
        <div className="divide-y divide-neutral-200">
          {filteredLeads.map((lead) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-neutral-900">
                      {lead.name}
                    </h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="text-sm text-neutral-600 space-y-1">
                    <p className="flex items-center gap-2">
                      <SafeIcon icon={FiMail} className="w-4 h-4" />
                      {lead.email}
                    </p>
                    <p><strong>Company:</strong> {lead.company}</p>
                    <p><strong>Source:</strong> {lead.source}</p>
                    <p><strong>Date:</strong> {new Date(lead.date).toLocaleDateString()}</p>
                  </div>
                  {lead.notes && (
                    <div className="mt-3 p-3 bg-neutral-50 rounded-lg">
                      <p className="text-sm text-neutral-700">{lead.notes}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2 ml-4">
                  <a
                    href={`mailto:${lead.email}`}
                    className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <SafeIcon icon={FiMail} className="w-4 h-4" />
                    Email
                  </a>
                  <a
                    href="https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                    Schedule
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {filteredLeads.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 text-center">
          <p className="text-neutral-500">No leads match your current filters.</p>
        </div>
      )}

      {/* Lead Sources Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Lead Tracking Integration</h3>
        <p className="text-blue-800 mb-4">
          This shows simulated lead data. To track real leads, integrate with:
        </p>
        <ul className="text-sm text-blue-700 space-y-2">
          <li>• Contact form submissions (already configured)</li>
          <li>• TidyCal calendar bookings API</li>
          <li>• Email tracking systems</li>
          <li>• Google Analytics conversion tracking</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadManager;