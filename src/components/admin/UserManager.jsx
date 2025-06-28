import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';

const { FiUsers, FiPlus, FiEdit, FiTrash2, FiShield, FiMail } = FiIcons;

const UserManager = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([
    {
      id: 'james',
      name: 'James A. Brown',
      email: 'james@workplacemapping.com',
      role: 'owner',
      status: 'active',
      lastLogin: '2024-01-15T10:30:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 'admin',
      name: 'Admin User',
      email: 'admin@workplacemapping.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-14T15:20:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    }
  ]);

  const [showAddUser, setShowAddUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'admin'
  });

  const roleOptions = [
    { value: 'owner', label: 'Owner', description: 'Full access to all features' },
    { value: 'admin', label: 'Admin', description: 'Access to analytics, content, and leads' },
    { value: 'editor', label: 'Editor', description: 'Content editing only' }
  ];

  const getRoleColor = (role) => {
    const colors = {
      owner: 'bg-purple-100 text-purple-800 border-purple-200',
      admin: 'bg-blue-100 text-blue-800 border-blue-200',
      editor: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[role] || colors.admin;
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800 border-green-200',
      inactive: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || colors.active;
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (user?.role !== 'owner') {
      alert('Only owners can add users');
      return;
    }

    const userId = Date.now().toString();
    const userToAdd = {
      id: userId,
      ...newUser,
      status: 'active',
      lastLogin: null,
      createdAt: new Date().toISOString()
    };

    setUsers(prev => [...prev, userToAdd]);
    setNewUser({ name: '', email: '', role: 'admin' });
    setShowAddUser(false);

    // In a real app, this would make an API call
    alert('User added successfully! In a real application, this would send an invitation email.');
  };

  const handleDeleteUser = (userId) => {
    if (user?.role !== 'owner') {
      alert('Only owners can delete users');
      return;
    }

    if (userId === user?.id) {
      alert('You cannot delete your own account');
      return;
    }

    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(u => u.id !== userId));
      // In a real app, this would make an API call
      alert('User deleted successfully!');
    }
  };

  const canManageUsers = user?.role === 'owner';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">User Management</h2>
        {canManageUsers && (
          <button
            onClick={() => setShowAddUser(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            Add User
          </button>
        )}
      </div>

      {!canManageUsers && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">
            You don't have permission to manage users. Contact the owner for access.
          </p>
        </div>
      )}

      {/* Add User Modal */}
      {showAddUser && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl p-8 w-full max-w-md"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Add New User</h3>
            
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Role
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {roleOptions.filter(role => role.value !== 'owner').map(role => (
                    <option key={role.value} value={role.value}>
                      {role.label} - {role.description}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Add User
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddUser(false)}
                  className="flex-1 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Users List */}
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200">
        <div className="p-6 border-b border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900">
            Users ({users.length})
          </h3>
        </div>
        <div className="divide-y divide-neutral-200">
          {users.map((userData) => (
            <div key={userData.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-lg font-semibold text-neutral-900">
                        {userData.name}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getRoleColor(userData.role)}`}>
                        {roleOptions.find(r => r.value === userData.role)?.label}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(userData.status)}`}>
                        {userData.status}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-600">
                      <p className="flex items-center gap-2">
                        <SafeIcon icon={FiMail} className="w-4 h-4" />
                        {userData.email}
                      </p>
                      <p className="mt-1">
                        <strong>Last Login:</strong> {
                          userData.lastLogin 
                            ? new Date(userData.lastLogin).toLocaleDateString()
                            : 'Never'
                        }
                      </p>
                      <p>
                        <strong>Created:</strong> {new Date(userData.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {canManageUsers && userData.id !== user?.id && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert('Edit user functionality would be implemented here')}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(userData.id)}
                      className="flex items-center gap-1 px-3 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions Info */}
      <div className="bg-neutral-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <SafeIcon icon={FiShield} className="w-5 h-5" />
          Role Permissions
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {roleOptions.map(role => (
            <div key={role.value} className="bg-white p-4 rounded-lg border border-neutral-200">
              <h4 className={`font-semibold mb-2 px-3 py-1 rounded-full text-sm ${getRoleColor(role.value)}`}>
                {role.label}
              </h4>
              <p className="text-sm text-neutral-600 mb-2">{role.description}</p>
              <ul className="text-xs text-neutral-500 space-y-1">
                {role.value === 'owner' && (
                  <>
                    <li>• Full system access</li>
                    <li>• User management</li>
                    <li>• All analytics & content</li>
                    <li>• Lead management</li>
                  </>
                )}
                {role.value === 'admin' && (
                  <>
                    <li>• Analytics dashboard</li>
                    <li>• Content editing</li>
                    <li>• Lead management</li>
                    <li>• No user management</li>
                  </>
                )}
                {role.value === 'editor' && (
                  <>
                    <li>• Content editing only</li>
                    <li>• No analytics access</li>
                    <li>• No user management</li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManager;