import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChatIcon, 
  CHATBOT_QA_DATA, 
  CHATBOT_WELCOME_MESSAGE, 
  CHATBOT_DEFAULT_RESPONSE,
  CHATBOT_TYPING_TEXT,
  DEVELOPER_NAME
} from '../constants';
import type { ChatMessage, ChatbotQA } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Add initial welcome message if chat is empty
      if (messages.length === 0) {
        setMessages([{
          id: 'welcome-' + Date.now(),
          text: CHATBOT_WELCOME_MESSAGE,
          sender: 'bot',
          timestamp: Date.now(),
        }]);
      }
      // Focus input when chat opens
      setTimeout(() => inputRef.current?.focus(), 300); // Delay for animation
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: ChatMessage = {
      id: sender + '-' + Date.now(),
      text,
      sender,
      timestamp: Date.now(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };
  
  const getBotResponse = useCallback((userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim();
    if (!lowerInput) return CHATBOT_DEFAULT_RESPONSE;

    const matchedQA = CHATBOT_QA_DATA.find(qa => 
      qa.questionKeywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))
    );

    return matchedQA ? matchedQA.answer : CHATBOT_DEFAULT_RESPONSE;
  }, []);


  const handleSendMessage = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput) return;

    addMessage(trimmedInput, 'user');
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(trimmedInput);
      addMessage(botResponse, 'bot');
      setIsTyping(false);
    }, 1000); // Simulate typing delay
  };

  const handleSampleQuestionClick = (question: string) => {
    setInputValue(question);
    inputRef.current?.focus();
  };

  const sampleQuestions = CHATBOT_QA_DATA.filter(qa => qa.sampleQuestion).slice(0, 3);

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
        aria-label="Toggle Chatbot"
      >
        <ChatIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Chatbox Modal */}
      <div
        className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-40 w-full h-full sm:w-[360px] sm:h-[520px] bg-slate-800/80 backdrop-blur-md text-slate-100 rounded-none sm:rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-full sm:translate-y-4 sm:scale-95 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 sm:rounded-t-xl">
          <h2 id="chatbot-title" className="text-lg font-semibold text-emerald-400">Web Dev Helper</h2>
          <button
            onClick={toggleChat}
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            aria-label="Close Chatbot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow p-4 space-y-3 overflow-y-auto chatbot-messages-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-xl shadow ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-slate-700 text-slate-200 rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[75%] px-4 py-2 rounded-xl shadow bg-slate-700 text-slate-200 rounded-bl-none">
                <p className="text-sm italic animate-pulse">{CHATBOT_TYPING_TEXT}</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Sample Questions */}
        {messages.length <= 1 && sampleQuestions.length > 0 && (
          <div className="p-2 pt-0 border-t border-slate-700">
            <p className="text-xs text-slate-400 mb-1 px-2">Try asking:</p>
            <div className="flex flex-wrap gap-2 px-2">
              {sampleQuestions.map(sq => (
                <button 
                  key={sq.id}
                  onClick={() => handleSampleQuestionClick(sq.sampleQuestion || sq.questionKeywords[0])}
                  className="bg-slate-700 hover:bg-slate-600 text-emerald-300 text-xs px-2 py-1 rounded-full transition-colors"
                >
                  {sq.sampleQuestion || sq.questionKeywords[0]}
                </button>
              ))}
            </div>
          </div>
        )}


        {/* Input Area */}
        <div className="p-4 border-t border-slate-700 bg-slate-800 sm:rounded-b-xl">
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-grow p-2.5 bg-slate-700 border border-slate-600 text-slate-100 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none placeholder-slate-400 text-sm"
              aria-label="Type your message"
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !inputValue.trim()}
              className="p-2.5 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
               {/* Glowing effect (pseudo-element or extra div might be complex here, simple hover for now) */}
              <span className="absolute inset-0 rounded-lg bg-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
