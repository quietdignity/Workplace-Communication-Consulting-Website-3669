import React, {useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiSave, FiEdit, FiImage, FiType, FiDollarSign} = FiIcons;

const ContentEditor = () => {
  const [activeSection, setActiveSection] = useState('pricing');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [content, setContent] = useState({
    pricing: {
      diagnosticPrice: '$8,500',
      fractionalStartPrice: '$8,500/month',
      note: 'Pricing varies depending on your organization\'s size, complexity, and needs'
    },
    hero: {
      title: 'Your Corporate Communication Works for Office Staff.',
      subtitle: 'What About Everyone Else?',
      description: 'When you have employees across different locations, shifts, and work environments, reaching everyone effectively becomes a real challenge. Get expert fractional internal communications strategy without the full-time hire.'
    },
    contact: {
      email: 'team@workplacemapping.com',
      calendarLink: 'https://tidycal.com/jamesbrowntv/workplace-mapping-consultation'
    },
    bio: {
      name: 'James A. Brown',
      title: 'Communications Professional & Fractional Internal Communications Strategist',
      experience: '15+ years',
      description: 'James Brown is a communications professional with 15+ years of experience figuring out how information really moves through complex, distributed organizations—and how to work with that reality rather than fight it. He provides fractional internal communications strategy expertise to organizations that need senior-level guidance without the full-time hire.'
    }
  });

  const sections = [
    {id: 'pricing', name: 'Pricing', icon: FiDollarSign},
    {id: 'hero', name: 'Hero Section', icon: FiType},
    {id: 'contact', name: 'Contact Info', icon: FiEdit},
    {id: 'bio', name: 'Biography', icon: FiImage}
  ];

  const handleContentChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const saveChanges = () => {
    console.log('Saving content changes:', content);
    setUnsavedChanges(false);
    alert('Changes saved successfully! In a real application, this would update your website content.');
  };

  const renderEditor = () => {
    switch (activeSection) {
      case 'pricing':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900">Pricing Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Communication Diagnostic Price
                </label>
                <input
                  type="text"
                  value={content.pricing.diagnosticPrice}
                  onChange={(e) => handleContentChange('pricing', 'diagnosticPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Fractional Strategist Starting Price
                </label>
                <input
                  type="text"
                  value={content.pricing.fractionalStartPrice}
                  onChange={(e) => handleContentChange('pricing', 'fractionalStartPrice', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Pricing Note
              </label>
              <textarea
                value={content.pricing.note}
                onChange={(e) => handleContentChange('pricing', 'note', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        );

      case 'hero':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900">Hero Section</h3>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Main Title
              </label>
              <input
                type="text"
                value={content.hero.title}
                onChange={(e) => handleContentChange('hero', 'title', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                value={content.hero.subtitle}
                onChange={(e) => handleContentChange('hero', 'subtitle', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Description
              </label>
              <textarea
                value={content.hero.description}
                onChange={(e) => handleContentChange('hero', 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900">Contact Information</h3>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) => handleContentChange('contact', 'email', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Calendar Link
              </label>
              <input
                type="url"
                value={content.contact.calendarLink}
                onChange={(e) => handleContentChange('contact', 'calendarLink', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        );

      case 'bio':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-neutral-900">Biography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={content.bio.name}
                  onChange={(e) => handleContentChange('bio', 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  value={content.bio.experience}
                  onChange={(e) => handleContentChange('bio', 'experience', e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={content.bio.title}
                onChange={(e) => handleContentChange('bio', 'title', e.target.value)}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Description
              </label>
              <textarea
                value={content.bio.description}
                onChange={(e) => handleContentChange('bio', 'description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-neutral-900">Content Editor</h2>
        <button
          onClick={saveChanges}
          disabled={!unsavedChanges}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
            unsavedChanges
              ? 'bg-primary-600 hover:bg-primary-700 text-white'
              : 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
          }`}
        >
          <SafeIcon icon={FiSave} className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <nav className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Sections</h3>
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 border border-primary-200'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <SafeIcon icon={section.icon} className="w-5 h-5" />
                  {section.name}
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {renderEditor()}
          </div>
        </div>
      </div>

      {unsavedChanges && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg"
        >
          <p className="text-yellow-800 text-sm font-medium">
            You have unsaved changes
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ContentEditor;