import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem('wm_user');
    const savedToken = localStorage.getItem('wm_token');
    const savedUserId = localStorage.getItem('userId');
    
    if (savedUser && savedToken && savedUserId) {
      try {
        const userData = JSON.parse(savedUser);
        if (userData.sessionExpiry > Date.now()) {
          setUser(userData);
        } else {
          localStorage.removeItem('wm_user');
          localStorage.removeItem('wm_token');
          localStorage.removeItem('userId');
        }
      } catch (error) {
        localStorage.removeItem('wm_user');
        localStorage.removeItem('wm_token');
        localStorage.removeItem('userId');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call - replace with actual authentication
    const adminCredentials = {
      email: 'admin@workplacemapping.com',
      password: 'WM2024Admin!',
      role: 'admin'
    };

    const jamesCredentials = {
      email: 'james@workplacemapping.com',
      password: 'James2024!',
      role: 'owner'
    };

    if (
      (email === adminCredentials.email && password === adminCredentials.password) ||
      (email === jamesCredentials.email && password === jamesCredentials.password)
    ) {
      const userData = {
        id: email === jamesCredentials.email ? 'james' : 'admin',
        email,
        role: email === jamesCredentials.email ? 'owner' : 'admin',
        name: email === jamesCredentials.email ? 'James A. Brown' : 'Admin User',
        sessionExpiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      };

      setUser(userData);
      localStorage.setItem('wm_user', JSON.stringify(userData));
      localStorage.setItem('wm_token', 'mock-token-' + Date.now());
      localStorage.setItem('userId', userData.id);
      
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('wm_user');
    localStorage.removeItem('wm_token');
    localStorage.removeItem('userId');
  };

  const hasPermission = (permission) => {
    if (!user) return false;

    const permissions = {
      owner: ['view_analytics', 'edit_content', 'manage_users', 'view_leads', 'export_data'],
      admin: ['view_analytics', 'edit_content', 'view_leads'],
      editor: ['edit_content']
    };

    return permissions[user.role]?.includes(permission) || false;
  };

  const value = {
    user,
    login,
    logout,
    hasPermission,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};