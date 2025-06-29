import React, { useState, useEffect } from 'react';
import { verifyInternalNavigation, testEmailLinks, verifyAnalytics } from '../utils/linkVerification';

const LinkHealthMonitor = () => {
  const [healthStatus, setHealthStatus] = useState(null);
  const [lastCheck, setLastCheck] = useState(null);

  const runHealthCheck = () => {
    const results = {
      internal: verifyInternalNavigation(),
      email: testEmailLinks(),
      analytics: verifyAnalytics(),
      timestamp: new Date().toISOString()
    };
    
    setHealthStatus(results);
    setLastCheck(new Date().toLocaleString());
    
    // Log results for debugging
    console.log('Link Health Check Results:', results);
  };

  useEffect(() => {
    // Run initial health check
    runHealthCheck();
    
    // Set up periodic health checks (every 5 minutes)
    const interval = setInterval(runHealthCheck, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (!healthStatus) {
    return null; // Don't render anything while loading
  }

  const hasIssues = healthStatus.internal.some(item => !item.exists) ||
                   healthStatus.email.some(item => !item.valid) ||
                   !healthStatus.analytics.functional;

  // Only show the monitor in development or if there are issues
  const shouldShow = process.env.NODE_ENV === 'development' || hasIssues;

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-neutral-300 rounded-lg p-3 shadow-lg text-xs max-w-xs z-40">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${hasIssues ? 'bg-red-500' : 'bg-green-500'}`}></div>
        <span className="font-semibold">Link Health</span>
      </div>
      
      <div className="space-y-1">
        <div>
          Internal: {healthStatus.internal.filter(item => item.exists).length}/{healthStatus.internal.length}
        </div>
        <div>
          Email: {healthStatus.email.filter(item => item.valid).length}/{healthStatus.email.length}
        </div>
        <div>
          Analytics: {healthStatus.analytics.functional ? 'OK' : 'Issues'}
        </div>
      </div>
      
      <div className="text-neutral-500 mt-2">
        Last check: {lastCheck}
      </div>
      
      <button 
        onClick={runHealthCheck}
        className="mt-2 text-primary-600 hover:text-primary-700"
      >
        Refresh
      </button>
    </div>
  );
};

export default LinkHealthMonitor;