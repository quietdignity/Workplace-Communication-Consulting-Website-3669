import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiX, FiSend, FiMail, FiSearch } = FiIcons;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allFAQs = [
    {
      text: "What is Workplace Mapping?",
      keywords: ["workplace mapping", "definition", "what is", "methodology", "approach", "communication", "distributed workforce"],
      response: "Workplace Mapping was developed by James A. Brown while working in local government. During that time James realized two things: \"no two workplaces operate the exact same way\" and \"the question isn't whether internal communications systems exist. The question is how much control, access and understanding you will have of how your employees communicate.\"\n\nWorkplace Mapping is our systematic approach to understanding how communication actually flows through your organization—not how it's supposed to work, but how it really works. We help organizations with distributed workforces build communication systems that reach everyone effectively. Our DISCOVER • ANALYZE • DESIGN • SUSTAIN methodology maps your communication reality and creates solutions that work with your actual workforce constraints."
    },
    {
      text: "Can we schedule a consultation?",
      keywords: ["consultation", "schedule", "meeting", "call", "appointment", "book", "calendar"],
      response: "Absolutely! Please schedule a consultation at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      isLink: true,
      linkUrl: "https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
    },
    {
      text: "What's the typical timeline?",
      keywords: ["timeline", "duration", "how long", "time", "schedule", "months", "weeks"],
      response: "Timelines vary based on service package and the size and complexity of your operations. We typically work with 8 to 12 businesses a year, allowing us to provide focused, high-quality engagement with each client.\n\nIndividual Phase Timelines:\n• DISCOVER Phase: 2-4 months\n• ANALYZE Phase: 2-4 months\n• DESIGN Phase: 3-5 months\n• SUSTAIN Phase: 4-6 months\n\nPackage Timelines:\n• Discovery + Analysis Package: 4-5 months\n• Design + Sustain Package: 8-12 months\n• Complete Workplace Mapping Transformation: 11-15 months\n\nWe can move faster or slower depending on your organization's needs and operational constraints."
    },
    {
      text: "How do you handle distributed workforces?",
      keywords: ["distributed", "remote", "field workers", "multiple locations", "sites", "virtual", "on-site"],
      response: "We prefer to make at least one site visit to a select number of your locations. This way we get a snapshot of what's really happening on the ground, but many parts of our service including employee interviews can be done virtually. This mix of on-site and virtual work depends on the size, scope, and operational limitations of your organization."
    },
    {
      text: "What makes this different from traditional consulting?",
      keywords: ["different", "traditional", "consulting", "unique", "approach", "survey", "investigation"],
      response: "Most consultants survey employees about communication preferences and assume everyone works the same way. We actually investigate how messages travel through your organization by following real communications and mapping both formal and informal networks. We recognize that office workers, hybrid employees, and field workers have fundamentally different communication needs and constraints."
    },
    {
      text: "What size organizations do you work with?",
      keywords: ["size", "employees", "organization", "company", "250", "3000", "team size"],
      response: "We typically work with organizations that have 250-3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments. This includes retail chains, manufacturing companies, logistics operations, field services, and government agencies."
    },
    {
      text: "What's included in a typical engagement?",
      keywords: ["engagement", "included", "deliverables", "what do we get", "services", "package"],
      response: "Depending on your package, we'll conduct employee interviews across your workforce segments, trace actual company messages through your organization, analyze your communication infrastructure, and develop tailored solutions. You'll receive concrete deliverables like communication trace analysis, employee persona profiles, channel effectiveness scorecards, and implementation roadmaps—not just reports."
    },
    {
      text: "How much does this cost?",
      keywords: ["cost", "price", "pricing", "budget", "investment", "fees", "expensive"],
      response: "Pricing starts at $25,000 and varies depending on your organization's size, how complex your workforce distribution is, and which parts of the process make sense for you. We can work with different budget cycles and organizational needs. The best way to get accurate pricing is to schedule a consultation where we can discuss your specific situation."
    },
    {
      text: "Do you work with remote/hybrid teams?",
      keywords: ["remote", "hybrid", "work from home", "virtual teams", "distributed teams"],
      response: "Yes, but our specialty is organizations with true workforce distribution challenges—not just remote office workers, but employees who work in warehouses, retail stores, manufacturing plants, field locations, or other environments where traditional digital communication doesn't work well."
    },
    {
      text: "What's the ROI on communication improvements?",
      keywords: ["roi", "return", "investment", "benefits", "results", "impact"],
      response: "Communication improvements typically impact productivity, safety compliance, employee retention, and operational efficiency. While specific ROI varies by organization, many clients see returns through reduced miscommunication costs, faster information flow, improved safety incident prevention, and decreased turnover in frontline positions."
    }
  ];

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery.trim()) {
      return allFAQs.slice(0, 4); // Show first 4 by default
    }

    const query = searchQuery.toLowerCase();
    return allFAQs.filter(faq => 
      faq.text.toLowerCase().includes(query) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
      faq.response.toLowerCase().includes(query)
    ).slice(0, 6); // Show up to 6 search results
  }, [searchQuery]);

  const handleQuickMessage = (msgObj) => {
    if (msgObj.isLink && msgObj.linkUrl) {
      window.open(msgObj.linkUrl, '_blank');
      setIsOpen(false);
    } else {
      setSelectedFAQ({
        question: msgObj.text,
        answer: msgObj.response
      });
    }
  };

  const handleCustomMessage = () => {
    if (message.trim()) {
      const subject = encodeURIComponent('Workplace Mapping Inquiry');
      const body = encodeURIComponent(message);
      window.open(`mailto:team@workplacemapping.com?subject=${subject}&body=${body}`);
      setMessage('');
      setIsOpen(false);
    }
  };

  const resetChat = () => {
    setSelectedFAQ(null);
    setSearchQuery('');
  };

  const handleEmailTeam = () => {
    window.open('mailto:team@workplacemapping.com?subject=Workplace Mapping Question');
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-4 bg-white rounded-xl shadow-2xl border border-neutral-200 w-80"
            >
              <div className="p-4 border-b border-neutral-200 bg-primary-600 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Hi, I'm Josie!</h3>
                      <p className="text-xs text-white/80">Workplace Mapping Assistant</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors p-1"
                  >
                    <SafeIcon icon={FiX} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-4 max-h-96 overflow-y-auto">
                {!selectedFAQ ? (
                  <>
                    <div className="mb-4">
                      <div className="bg-neutral-100 rounded-lg p-3 mb-3">
                        <p className="text-sm text-neutral-700">
                          👋 Hi! I'm Josie, here to help with your distributed workforce communication challenges. Search or browse below!
                        </p>
                      </div>
                    </div>

                    {/* Search Input */}
                    <div className="mb-4">
                      <div className="relative">
                        <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search FAQs..."
                          className="w-full pl-10 pr-4 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                        />
                      </div>
                    </div>

                    {/* FAQ Results */}
                    <div className="space-y-2 mb-4">
                      {filteredFAQs.length > 0 ? (
                        filteredFAQs.map((msg, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickMessage(msg)}
                            className="w-full text-left text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 p-3 rounded-lg transition-colors duration-200"
                          >
                            {msg.text}
                          </button>
                        ))
                      ) : (
                        <div className="text-xs text-neutral-500 text-center py-4">
                          No FAQs found. Try a different search term or contact our team directly.
                        </div>
                      )}
                    </div>

                    {/* Custom Message Input */}
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ask another question..."
                        className="flex-1 text-sm border border-neutral-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
                        onKeyPress={(e) => e.key === 'Enter' && handleCustomMessage()}
                      />
                      <button
                        onClick={handleCustomMessage}
                        className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors duration-200"
                      >
                        <SafeIcon icon={FiSend} className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleEmailTeam}
                      className="w-full text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <SafeIcon icon={FiMail} className="w-3 h-3" />
                      Contact our team directly
                    </button>
                  </>
                ) : (
                  <div>
                    <button
                      onClick={resetChat}
                      className="text-xs text-primary-600 hover:text-primary-700 mb-3 flex items-center gap-2 py-1"
                    >
                      ← Back to questions
                    </button>
                    <div className="bg-primary-50 rounded-lg p-3 mb-3">
                      <h4 className="font-semibold text-primary-900 text-sm mb-2">
                        {selectedFAQ.question}
                      </h4>
                      <div className="text-sm text-primary-800 leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
                        {selectedFAQ.answer}
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-neutral-600 mb-3">
                        Have more questions?
                      </p>
                      <button
                        onClick={handleEmailTeam}
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                      >
                        <SafeIcon icon={FiMail} className="w-3 h-3" />
                        Contact Our Team
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-2 bg-white rounded-lg shadow-xl border border-neutral-200 w-72"
            >
              <div className="p-3 border-b border-neutral-200 bg-primary-600 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiMessageCircle} className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Hi, I'm Josie!</h3>
                      <p className="text-xs text-white/80">Communication Assistant</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white p-1"
                  >
                    <SafeIcon icon={FiX} className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="p-3 max-h-80 overflow-y-auto">
                {!selectedFAQ ? (
                  <>
                    <div className="bg-neutral-100 rounded p-2 mb-3">
                      <p className="text-xs text-neutral-700">
                        👋 Hi! I'm Josie. Search or browse your questions below!
                      </p>
                    </div>

                    {/* Mobile Search */}
                    <div className="mb-3">
                      <div className="relative">
                        <SafeIcon icon={FiSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-neutral-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search..."
                          className="w-full pl-8 pr-3 py-2 text-xs border border-neutral-300 rounded focus:outline-none focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 mb-3">
                      {filteredFAQs.length > 0 ? (
                        filteredFAQs.slice(0, 3).map((msg, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickMessage(msg)}
                            className="w-full text-left text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 p-2 rounded transition-colors"
                          >
                            {msg.text}
                          </button>
                        ))
                      ) : (
                        <div className="text-xs text-neutral-500 text-center py-2">
                          No results found
                        </div>
                      )}
                    </div>

                    <a
                      href="mailto:team@workplacemapping.com"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white text-xs py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <SafeIcon icon={FiMail} className="w-3 h-3" />
                      Contact Our Team
                    </a>
                  </>
                ) : (
                  <div>
                    <button
                      onClick={resetChat}
                      className="text-xs text-primary-600 hover:text-primary-700 mb-2 flex items-center gap-1 py-1"
                    >
                      ← Back
                    </button>
                    <div className="bg-primary-50 rounded p-2 mb-3">
                      <h4 className="font-semibold text-primary-900 text-xs mb-1">
                        {selectedFAQ.question}
                      </h4>
                      <div className="text-xs text-primary-800 leading-relaxed max-h-40 overflow-y-auto whitespace-pre-line">
                        {selectedFAQ.answer}
                      </div>
                    </div>
                    <button
                      onClick={handleEmailTeam}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white text-xs py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors"
                    >
                      <SafeIcon icon={FiMail} className="w-3 h-3" />
                      Contact for more info
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 hover:bg-primary-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="w-5 h-5" />
        </motion.button>
      </div>
    </>
  );
};

export default ChatWidget;