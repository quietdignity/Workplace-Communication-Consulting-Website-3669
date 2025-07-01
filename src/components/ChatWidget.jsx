import React, {useState, useMemo} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {trackChatInteraction, trackFAQInteraction} from '../utils/analytics';

const {FiMessageCircle, FiX, FiSend, FiMail, FiSearch} = FiIcons;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allFAQs = [
    {
      text: "What is the 20-Day Diagnostic?",
      keywords: ["diagnostic", "20 day", "assessment", "rapid", "10000", "communication gaps"],
      response: "Our diagnostic is a rapid assessment that follows how information actually flows through your organization. In 20 business days, we survey employees across all workforce segments, follow important updates through the channels your teams actually use, map communication gaps, and provide clear recommendations.\n\nInvestment starts at $10,000 and varies based on organization size and complexity."
    },
    {
      text: "How does Fractional Communications Strategist work?",
      keywords: ["fractional", "strategist", "monthly", "ongoing", "expert guidance"],
      response: "This gives you senior-level communication expertise without a full-time hire. You get:\n\n• Monthly strategy sessions to address ongoing challenges\n• Quarterly system health checks\n• Crisis guidance when urgent situations arise\n• Team training to build internal capability\n\nPerfect for organizations that need ongoing expert support for their distributed workforce."
    },
    {
      text: "Can we book a discovery call?",
      keywords: ["discovery", "call", "meeting", "consultation", "appointment", "book", "calendar"],
      response: "Absolutely! Please book a discovery call at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      isLink: true,
      linkUrl: "https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
    },
    {
      text: "What workforce types do you work with?",
      keywords: ["workforce", "manufacturing", "retail", "field", "distributed", "frontline"],
      response: "We specialize in distributed workforces where office communication methods don't reach everyone effectively:\n\n• Manufacturing facilities\n• Retail operations\n• Field service teams\n• Distribution centers\n• Construction sites\n• Healthcare systems\n• Any organization where frontline workers miss critical updates that reach office staff just fine"
    },
    {
      text: "What's the investment for your services?",
      keywords: ["cost", "price", "pricing", "budget", "investment", "fees"],
      response: "Service options:\n\n• 20-Day Diagnostic: Starts at $10,000\n• Fractional Communications Strategist: Monthly engagement\n• Infrastructure Rebuild: Custom quote\n\nPricing varies based on organization size, complexity, and specific needs."
    },
    {
      text: "How is this different from other consultants?",
      keywords: ["different", "unique", "approach", "investigation"],
      response: "Most consultants ask people what they think about communication. We also follow actual messages through your organization to see what really happens.\n\nWe trace how safety alerts, policy changes, and urgent notices actually travel (or fail to travel) through your formal channels and informal networks. This combination gives us insights that surveys alone miss."
    },
    {
      text: "What size organizations do you work with?",
      keywords: ["size", "employees", "organization", "100", "3000", "team size"],
      response: "We work with organizations that have distributed workforces where communication gaps create operational or safety risks. This typically means 100-3,000 employees across multiple locations, shifts, or work environments.\n\nThe key factor isn't size—it's whether you have frontline workers who aren't effectively reached by your current communication methods."
    },
    {
      text: "Can you help with crisis communication?",
      keywords: ["crisis", "emergency", "urgent", "rapid response", "support"],
      response: "Yes. Our Fractional Strategist service includes crisis communication support when urgent situations arise. We also design communication systems that work for both routine and emergency messaging.\n\nWe ensure your crisis communications actually reach frontline workers, not just office staff."
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

  const handleQuickMessage = async (msgObj) => {
    // Track chat interaction
    await trackChatInteraction('faq_click', msgObj.text);
    await trackFAQInteraction(msgObj.text);

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
      
      // Track custom message
      trackChatInteraction('custom_message', message);
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
    trackChatInteraction('email_team');
    setIsOpen(false);
  };

  const handleChatOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      trackChatInteraction('chat_opened');
    }
  };

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, y: 20, scale: 0.9}}
              animate={{opacity: 1, y: 0, scale: 1}}
              exit={{opacity: 0, y: 20, scale: 0.9}}
              transition={{duration: 0.2}}
              className="mb-4 bg-white rounded-xl shadow-2xl border border-neutral-200 w-80"
            >
              <div className="p-4 border-b border-neutral-200 bg-primary-600 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiMessageCircle} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Hi, I'm here to help!</h3>
                      <p className="text-xs text-white/80">Communication Assistant</p>
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
                          👋 Hi! I'm here to help with your distributed workforce communication challenges. Search or browse below!
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
          onClick={handleChatOpen}
          className="bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 20}}
              className="mb-2 bg-white rounded-lg shadow-xl border border-neutral-200 w-72"
            >
              <div className="p-3 border-b border-neutral-200 bg-primary-600 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiMessageCircle} className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">Hi, I'm here to help!</h3>
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
                        👋 Hi! Search or browse your questions below!
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
                          placeholder="Ask me..."
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
          onClick={handleChatOpen}
          className="bg-primary-600 hover:bg-primary-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
        >
          <SafeIcon icon={isOpen ? FiX : FiMessageCircle} className="w-5 h-5" />
        </motion.button>
      </div>
    </>
  );
};

export default ChatWidget;