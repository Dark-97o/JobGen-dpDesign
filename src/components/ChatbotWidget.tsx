import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, Mail, ArrowUpRight } from 'lucide-react';
import './ChatbotWidget.css';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
  ctaLink?: { label: string; href: string; external?: boolean };
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: "Welcome to DP Design Studio. I am your architectural concierge. Whether you are planning a bespoke residence, DA/CDC drafting, or a luxury kitchen & bathroom transformation in Sydney, I'm here to assist.",
    time: 'Just now',
    options: [
      'Book a Consultation',
      'Architectural Design & DA',
      'Kitchen & Bathroom Renovation',
      'Studio Location & Contact'
    ]
  }
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const generateBotReply = (userQuery: string): Message => {
    const q = userQuery.toLowerCase();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (q.includes('consult') || q.includes('book') || q.includes('appointment')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "We provide comprehensive on-site and studio architectural consultations throughout Sydney. Our nominated architect Prasad Perera (NSW ARB #12156) will review your site contours, zoning, and design brief.",
        time,
        ctaLink: {
          label: 'Call Studio: 1300 373 374',
          href: 'tel:1300373374'
        },
        options: ['Studio Location & Contact', 'Architectural Design & DA']
      };
    }

    if (q.includes('kitchen') || q.includes('bathroom') || q.includes('renovat')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "Our interior & renovation team handles turnkey kitchen and bathroom transformations—from 3D spatial planning, custom joinery, stone selection, to fully licensed waterproof construction complying with BCA standards.",
        time,
        ctaLink: {
          label: 'Explore Renovation Services',
          href: '#kitchen-design'
        },
        options: ['Book a Consultation', 'Studio Location & Contact']
      };
    }

    if (q.includes('architect') || q.includes('da') || q.includes('cdc') || q.includes('council') || q.includes('plan')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "DP Design Studio specializes in council-approved DA (Development Application) and CDC (Complying Development Certificate) architectural plans for bespoke luxury homes, duplexes, alterations, and NDIS/SDA residences across Greater Sydney.",
        time,
        ctaLink: {
          label: 'View Architectural Services',
          href: '#architectural-design'
        },
        options: ['Book a Consultation', 'Kitchen & Bathroom Renovation']
      };
    }

    if (q.includes('location') || q.includes('address') || q.includes('contact') || q.includes('phone') || q.includes('hours') || q.includes('email')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: "Our studio is located in Parramatta, NSW. Studio hours are Monday to Friday, 8:30 AM — 5:30 PM AEST. You can reach us directly at 1300 373 374 or admin@dpdesignstudio.com.au.",
        time,
        ctaLink: {
          label: 'Open Studio on Google Maps',
          href: 'https://maps.google.com/?cid=10743240316523014348&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy',
          external: true
        },
        options: ['Book a Consultation', 'Architectural Design & DA']
      };
    }

    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: "Thank you for reaching out. DP Design Studio delivers registered architectural drafting and luxury renovations across Sydney. Feel free to call us at 1300 373 374 or let me know what specific questions you have regarding your project.",
      time,
      ctaLink: {
        label: 'Email: admin@dpdesignstudio.com.au',
        href: 'mailto:admin@dpdesignstudio.com.au'
      },
      options: ['Book a Consultation', 'Architectural Design & DA', 'Kitchen & Bathroom Renovation']
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotReply(query);
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="dp-chatbot-wrapper">
      {/* Floating Circular Trigger Button */}
      <button
        type="button"
        className={`dp-chatbot-fab ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Chatbot' : 'Open DP Design Studio Chatbot'}
        title="Chat with DP Studio Concierge"
      >
        <span className="fab-pulse-ring" />
        <span className="fab-icon-container">
          {isOpen ? (
            <X size={24} className="fab-icon icon-close" />
          ) : (
            <>
              <MessageSquare size={22} className="fab-icon icon-chat" />
              {unreadCount > 0 && <span className="fab-unread-dot" />}
            </>
          )}
        </span>
      </button>

      {/* Flyout Chat Window */}
      {isOpen && (
        <div className="dp-chat-window animate-chat-in" role="dialog" aria-modal="true">
          {/* Header */}
          <div className="dp-chat-header">
            <div className="chat-header-identity">
              <div className="chat-avatar-frame">
                <img src="/dplogo.png" alt="DP Studio Logo" className="chat-avatar-img" />
                <span className="chat-online-indicator" />
              </div>
              <div className="chat-header-titles">
                <div className="chat-title-row">
                  <span className="chat-brand-name">DP Studio Concierge</span>
                  <Sparkles size={13} className="chat-sparkle-icon" />
                </div>
                <span className="chat-brand-subtitle">Architectural & Renovation Advisory</span>
              </div>
            </div>

            <button
              type="button"
              className="chat-header-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat Window"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Studio Bar */}
          <div className="chat-quick-contact-bar">
            <a href="tel:1300373374" className="quick-bar-link">
              <Phone size={11} />
              <span>1300 373 374</span>
            </a>
            <span className="quick-bar-sep">·</span>
            <a href="mailto:admin@dpdesignstudio.com.au" className="quick-bar-link">
              <Mail size={11} />
              <span>Email Studio</span>
            </a>
          </div>

          {/* Messages Body */}
          <div className="dp-chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble-row ${msg.sender === 'user' ? 'is-user' : 'is-bot'}`}>
                {msg.sender === 'bot' && (
                  <div className="bot-micro-avatar">
                    <img src="/dplogo.png" alt="DP" />
                  </div>
                )}
                <div className="chat-bubble-stack">
                  <div className="chat-bubble-content">
                    <p>{msg.text}</p>
                    {msg.ctaLink && (
                      <a
                        href={msg.ctaLink.href}
                        target={msg.ctaLink.external ? '_blank' : '_self'}
                        rel={msg.ctaLink.external ? 'noopener noreferrer' : undefined}
                        className="chat-cta-action"
                      >
                        <span>{msg.ctaLink.label}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                  <span className="chat-bubble-time">{msg.time}</span>

                  {/* Suggestion Chips */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="chat-suggestions-container">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className="chat-pill-btn"
                          onClick={() => handleSendMessage(opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-row is-bot">
                <div className="bot-micro-avatar">
                  <img src="/dplogo.png" alt="DP" />
                </div>
                <div className="chat-typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            className="dp-chat-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input
              type="text"
              placeholder="Ask about DA plans, kitchens, build costs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="chat-input-field"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="chat-send-btn"
              aria-label="Send Message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatbotWidget;
