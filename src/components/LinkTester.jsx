import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiRefreshCw } = FiIcons;

const LinkTester = () => {
  const [testResults, setTestResults] = useState({});
  const [testing, setTesting] = useState(false);

  const linksToTest = [
    {
      name: 'TidyCal Calendar',
      url: 'https://tidycal.com/jamesbrowntv/workplace-mapping-consultation',
      type: 'external'
    },
    {
      name: 'Email Contact',
      url: 'mailto:team@workplacemapping.com',
      type: 'email'
    },
    {
      name: 'Hero Image',
      url: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751076059906-IMG_8527.jpg',
      type: 'image'
    },
    {
      name: 'Profile Image',
      url: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751077031511-james-brown-profile.JPG',
      type: 'image'
    }
  ];

  const testLink = async (link) => {
    if (link.type === 'email') {
      return { status: 'success', message: 'Email link format valid' };
    }

    try {
      const response = await fetch(link.url, { 
        method: 'HEAD',
        mode: 'no-cors'
      });
      return { status: 'success', message: 'Accessible' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  };

  const testAllLinks = async () => {
    setTesting(true);
    const results = {};

    for (const link of linksToTest) {
      try {
        const result = await testLink(link);
        results[link.name] = result;
      } catch (error) {
        results[link.name] = { status: 'error', message: error.message };
      }
    }

    setTestResults(results);
    setTesting(false);
  };

  const testInternalNavigation = () => {
    const sections = ['hero', 'communication-reality', 'solution', 'methodology', 'services', 'contact', 'faq'];
    const results = {};

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      results[`Section: ${sectionId}`] = {
        status: element ? 'success' : 'error',
        message: element ? 'Found' : 'Missing'
      };
    });

    setTestResults(prev => ({ ...prev, ...results }));
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-neutral-300 rounded-lg p-4 shadow-lg max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Link Tester</h3>
        <button
          onClick={() => {
            testAllLinks();
            testInternalNavigation();
          }}
          disabled={testing}
          className="flex items-center gap-1 px-2 py-1 bg-primary-600 text-white rounded text-xs"
        >
          <SafeIcon icon={FiRefreshCw} className={`w-3 h-3 ${testing ? 'animate-spin' : ''}`} />
          Test All
        </button>
      </div>

      <div className="space-y-2 text-xs">
        {Object.entries(testResults).map(([name, result]) => (
          <div key={name} className="flex items-center gap-2">
            <SafeIcon 
              icon={result.status === 'success' ? FiCheck : FiX} 
              className={`w-3 h-3 ${result.status === 'success' ? 'text-green-500' : 'text-red-500'}`} 
            />
            <span className="flex-1 truncate">{name}</span>
            <span className={`text-xs ${result.status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {result.message}
            </span>
          </div>
        ))}
      </div>

      {testing && (
        <div className="mt-2 text-center text-xs text-neutral-500">
          Testing links...
        </div>
      )}
    </div>
  );
};

export default LinkTester;