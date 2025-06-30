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
      text: "What is the 20-Day Communication Diagnostic?",
      keywords: ["diagnostic", "20 day", "assessment", "rapid", "6000", "communication gaps"],
      response: "Our Communication Diagnostic is a rapid assessment that traces how information actually flows through your organization. In 20 business days, we conduct employee surveys, follow recent communications end-to-end, and map where your messages succeed and fail across office, hybrid, and frontline workers.\n\nYou get a clear report showing your biggest communication gaps, priority areas for improvement, and actionable next steps. Investment is $6,000 with immediate insights you can implement."
    },
    {
      text: "How does Fractional Strategist service work?",
      keywords: ["fractional", "strategist", "monthly", "4000", "ongoing", "expert guidance"],
      response: "Our Fractional Strategist service gives you senior-level communication expertise without a full-time hire. Starting at $4,000/month with a minimum 6-month engagement, you get:\n\n• Monthly strategic consultation sessions\n• Quarterly system health checks\n• Crisis communication support when needed\n• Internal champion training\n• Proven tools and methodologies\n\nPerfect for organizations that need ongoing expert guidance for their distributed workforce communication challenges."
    },
    {
      text: "Can we schedule a consultation?",
      keywords: ["consultation", "schedule", "meeting", "call", "appointment", "book", "calendar"],
      response: "Absolutely! Please schedule a consultation at: https://tidycal.com/jamesbrowntv/workplace-mapping-consultation",
      isLink: true,
      linkUrl: "https://tidycal.com/jamesbrowntv/workplace-mapping-consultation"
    },
    {
      text: "What workforce types do you work with?",
      keywords: ["workforce", "manufacturing", "retail", "field", "distributed", "frontline"],
      response: "We specialize in organizations with distributed workforces including:\n\n• Manufacturing and production facilities\n• Retail operations with multiple locations\n• Field service and technician teams\n• Distribution and logistics operations\n• Municipal and government agencies\n• Healthcare systems with multiple sites\n• Any organization where office communication methods don't reach frontline workers effectively"
    },
    {
      text: "What's the investment for your services?",
      keywords: ["cost", "price", "pricing", "budget", "investment", "fees"],
      response: "Service options:\n\n• Communication Diagnostic: $6,000, 20 business days\n• Fractional Strategist: Starting at $4,000/month, minimum 6 months\n• Infrastructure Rebuild: Starts at $35,000, 8-16 months\n\nEnterprise-wide projects are quoted after initial assessment. We can move faster or slower depending on your organization's operational constraints."
    },
    {
      text: "How is this different from traditional consulting?",
      keywords: ["different", "traditional", "consulting", "unique", "approach", "investigation"],
      response: "Most consultants survey employees about communication preferences. We also trace actual messages through your organization to see what really happens.\n\nWe follow recent communications end-to-end, document where they succeed and fail, and map both formal channels and informal networks. This investigative approach reveals gaps that surveys alone miss."
    },
    {
      text: "What size organizations do you work with?",
      keywords: ["size", "employees", "organization", "100", "3000", "team size"],
      response: "We typically work with organizations that have 100-3,000 employees, especially those with distributed workforces across multiple locations, shifts, or work environments.\n\nThis includes companies where different workforce segments (office, hybrid, field, retail, manufacturing) have developed different communication patterns and need systematic coordination."
    },
    {
      text: "Can you help with crisis communication?",
      keywords: ["crisis", "emergency", "urgent", "rapid response", "support"],
      response: "Yes. Our Fractional Strategist service includes crisis communication support when needed. We also design communication systems that work for both routine and urgent messaging.\n\nWe help create emergency protocols that actually reach field workers, off-shift employees, and distributed teams when it matters most, not just headquarters staff."
    },
    {
      text: "What kind of results can we expect?",
      keywords: ["results", "roi", "outcomes", "impact", "benefits"],
      response: "Communication improvements typically impact safety compliance, operational efficiency, and employee engagement. Results include:\n\n• Faster information flow to all workforce segments\n• Reduced miscommunication costs and delays\n• Improved safety incident prevention\n• Better alignment between leadership and operational teams\n• Decreased turnover in frontline positions"
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
                        placeholder="Ask Josie another question..."
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
                        Have more questions for Josie?
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
                        👋 Hi! I'm Josie - search or browse your questions below!
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
                          placeholder="Ask Josie..."
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