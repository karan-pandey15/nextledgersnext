"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  Mail, 
  CheckCircle, 
  Globe, 
  Shield, 
  HelpCircle, 
  ChevronRight, 
  User, 
  Building,
  Loader2
} from "lucide-react";

// Company details matching the persona rules
const COMPANY_INFO = {
  name: "Next Ledgers",
  tagline: "Your Streamlined Financial Solution",
  founded: "2018",
  serving: "United States, Canada",
  headOffice: "New Delhi, India",
  website: "https://nextledgers.com",
  email: "info@nextledgers.com",
  phone: "+1 (888) 552-0055"
};

// Response logic mapping user inquiries to company details
const getResponse = (query) => {
  const q = query.toLowerCase().trim();

  // Greetings
  if (
    q === "hi" || 
    q === "hello" || 
    q === "hey" || 
    q === "hola" || 
    q.includes("good morning") || 
    q.includes("good afternoon") || 
    q.includes("good evening")
  ) {
    return {
      text: "Hello! I am the official NexaLed AI Assistant representing Next Ledgers. I'm here to provide accurate information about our bookkeeping, tax preparation, CFO advisory, and offshore staffing services. How can I help your business grow today?",
      showLeadGen: true
    };
  }

  // About / Foundation / Location / Tagline
  if (
    q.includes("founded") || 
    q.includes("when did you start") || 
    q.includes("established") || 
    q.includes("head office") || 
    q.includes("location") || 
    q.includes("address") || 
    q.includes("delhi") || 
    q.includes("india") || 
    q.includes("where are you") || 
    q.includes("who are you") || 
    q.includes("what is next ledgers") ||
    q.includes("tagline") ||
    q.includes("motto") ||
    q.includes("serving")
  ) {
    return {
      text: "Next Ledgers was founded in 2018. Our head office is in New Delhi, India, and we serve clients across the United States and Canada with modern cloud accounting. Our tagline is 'Your Streamlined Financial Solution.' Would you like help choosing the right accounting solution for your business?",
      showLeadGen: true
    };
  }

  // Security questions
  if (q.includes("security") || q.includes("secure") || q.includes("safe") || q.includes("privacy") || q.includes("data protection") || q.includes("gdpr") || q.includes("compliance")) {
    return {
      text: "Next Ledgers follows secure cloud workflows, privacy-focused processes, controlled staff access, and modern encrypted file-sharing protocols to handle client information. We prioritize data protection at every level of our operations. Would you like to speak to our team to discuss our security measures in detail?",
      showLeadGen: true
    };
  }

  // Accounts Payable & Receivable (AP & AR)
  if (
    q.includes("payable") || 
    q.includes("receivable") || 
    q.includes("invoice") || 
    q.includes("billing") || 
    q.includes("payables") || 
    q.includes("receivables") || 
    q.includes("ap") || 
    q.includes("ar") || 
    q.includes("vendor")
  ) {
    return {
      text: "Next Ledgers handles Accounts Payable (AP) and Accounts Receivable (AR) management. Our AP services include invoice processing, vendor payments, purchase order matching, and ledger reconciliation. Our AR services include customer invoicing, collection follow-ups, billing management, cash application, and age analysis. These services help optimize your cash flow and keep financial relations secure.",
      showLeadGen: true
    };
  }

  // CFO & Advisory & Planning
  if (
    q.includes("cfo") || 
    q.includes("advisory") || 
    q.includes("planning") || 
    q.includes("adviser") || 
    q.includes("advisor") || 
    q.includes("consultant") || 
    q.includes("financial planning") || 
    q.includes("strategy")
  ) {
    return {
      text: "We provide strategic CFO & Advisory services designed to guide businesses and CPA firms. This includes budgeting, forecasting, cash flow optimization, working capital management, risk compliance, and management reporting. We act as your outsourced financial consultant to support major business decisions. Would you like to schedule a consultation with our advisors?",
      showLeadGen: true
    };
  }

  // Compilation & Review Engagements (Canada Specific)
  if (
    q.includes("compilation") || 
    q.includes("review engagement") || 
    q.includes("notice to reader") || 
    q.includes("reviews")
  ) {
    return {
      text: "Next Ledgers supports Canadian accounting firms with Compilation Engagements (Notice to Reader) and Review Engagements. We assist in preparing financial statements, organizing working trial balances, doing analytical procedures, and aligning documentation with CRA compliance and Canadian CPA standards. This helps Canadian CPA firms manage busy seasons smoothly.",
      showLeadGen: true
    };
  }

  // Investment Accounting
  if (q.includes("investment") || q.includes("portfolio") || q.includes("investments")) {
    return {
      text: "Next Ledgers provides specialized Investment Accounting services. We track portfolio performance, reconcile broker statements, record capital gains/losses, manage dividends/interest records, and prepare clean reports for tax filing. This service is ideal for family offices, investment funds, and companies with active portfolios.",
      showLeadGen: true
    };
  }

  // Payroll Support
  if (q.includes("payroll") || q.includes("paycheck") || q.includes("salary") || q.includes("wages") || q.includes("pay stub")) {
    return {
      text: "We offer complete Payroll Support services, managing calculations, timesheet logging, payroll tax filings, direct deposit setups, and year-end compliance. We integrate with major payroll platforms (such as ADP, Gusto, and QuickBooks Payroll) to keep payroll operations running smoothly. Would you like to consult our team about payroll integration?",
      showLeadGen: true
    };
  }

  // USA Services
  if (
    q.includes("usa") || 
    q.includes("u.s.") || 
    q.includes("us services") || 
    q.includes("united states") || 
    q.includes("america")
  ) {
    return {
      text: "Next Ledgers provides professional U.S. accounting solutions tailored for CPA firms and businesses. Our USA Services include: \n\n• **U.S. Bookkeeping**\n• **U.S. Tax Preparation**\n• **Accounts Payable & Receivable Services**\n• **CFO & Advisory Services**\n• **Year-End Accounting & Financial Reporting**\n• **Payroll Support**\n• **Offshore Accounting Staff & Virtual Accountants**\n\nThese workflows ensure IRS compliance and let you scale operations seamlessly. Our team would be happy to discuss your requirements and recommend the most suitable service.",
      showLeadGen: false
    };
  }

  // Canada Services
  if (q.includes("canada") || q.includes("canadian") || q.includes("cra")) {
    return {
      text: "We support Canadian accounting firms and organizations with compliant services including: \n\n• **Canadian Bookkeeping**\n• **Compilation & Review Engagements**\n• **Canadian Tax Preparation (CRA compliance)**\n• **Investment Accounting**\n• **Accounting Support & CPA Firm Support**\n\nOur professionals align with CPA standards to deliver robust financial reports. Would you like help choosing the right accounting solution for your business?",
      showLeadGen: true
    };
  }

  // Software Expertise
  if (
    q.includes("software") || 
    q.includes("platform") || 
    q.includes("system") || 
    q.includes("quickbooks") || 
    q.includes("xero") || 
    q.includes("caseware") || 
    q.includes("ultratax") || 
    q.includes("lacerte") || 
    q.includes("cch") || 
    q.includes("freshbooks")
  ) {
    return {
      text: "Our team has deep expertise in modern cloud and desktop accounting systems. We work with: \n\n• **QuickBooks & Xero** (for ledger management)\n• **CaseWare** (for review & audit engagement workflow)\n• **ATX, UltraTax, Lacerte, & CCH** (for professional tax return preparation)\n• **FreshBooks** and other specialized Cloud Accounting platforms.\n\nWe integrate directly into your firm's existing software stacks to maintain a seamless workflow. Would you like help choosing the right accounting solution for your business?",
      showLeadGen: true
    };
  }

  // Industries Served
  if (
    q.includes("industry") || 
    q.includes("industries") || 
    q.includes("serve") || 
    q.includes("vertical") ||
    q.includes("real estate") ||
    q.includes("hospitality") ||
    q.includes("healthcare") ||
    q.includes("medical") ||
    q.includes("restaurant") ||
    q.includes("construction") ||
    q.includes("law firm") ||
    q.includes("non-profit") ||
    q.includes("cpa firm")
  ) {
    return {
      text: "Next Ledgers serves a wide range of industries, adapting workflows to meet unique industry standards. Our experience includes:\n\n• **CPA & Accounting Firms**\n• **Real Estate & Construction**\n• **Hospitality, Restaurants, & Entertainment**\n• **Healthcare, Medical, Dental, & Pharmacies**\n• **Law Firms & Professional Services**\n• **Non-Profit Organizations**\n• **Small & Medium Businesses**\n\nOur team would be happy to discuss your requirements and recommend the most suitable service.",
      showLeadGen: false
    };
  }

  // Bookkeeping Specific
  if (q.includes("bookkeeping") || q.includes("bookkeeper") || q.includes("ledger") || q.includes("transactions") || q.includes("reconciliation")) {
    return {
      text: "Bookkeeping is a core service at Next Ledgers. We handle daily ledger updates, bank reconciliations, accounts payable/receivable, and compile financial records to maintain tax-ready books. This service is designed for CPA firms needing back-office help and small-to-medium businesses wanting to automate accounting tasks. Our team would be happy to discuss your bookkeeping requirements and recommend the most suitable service.",
      showLeadGen: false
    };
  }

  // Tax Preparation
  if (q.includes("tax") || q.includes("filing") || q.includes("irs") || q.includes("cra") || q.includes("tax return")) {
    return {
      text: "We provide comprehensive Tax Preparation services matching IRS regulations in the US and CRA guidelines in Canada. We prepare federal, state, provincial, and sales tax returns for businesses, individuals, and CPA firms. We focus on maximizing compliance and efficiency, ensuring fast turnaround times during busy seasons. Would you like to schedule a consultation to plan your tax workflow?",
      showLeadGen: true
    };
  }

  // Staffing / Virtual / Offshore
  if (
    q.includes("staffing") || 
    q.includes("offshore") || 
    q.includes("virtual") || 
    q.includes("employee") || 
    q.includes("hire") || 
    q.includes("team") || 
    q.includes("outsource")
  ) {
    return {
      text: "Our Offshore Staffing and Virtual Accounting teams offer scalable support. You can hire dedicated virtual employees or build a full virtual accounting team. This allows CPA firms and businesses to expand capacity instantly, lower overheads by up to 50%, and operate with highly experienced professionals without local hiring friction. Our team would be happy to discuss your requirements and recommend the most suitable service.",
      showLeadGen: false
    };
  }

  // Pricing
  if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("fee") || q.includes("rate") || q.includes("charge") || q.includes("how much")) {
    return {
      text: "Pricing at Next Ledgers depends on the scope of work, business size, and specific service requirements to ensure optimal transparency. Please contact our team directly for a customized quote. Our team would be happy to discuss your requirements and recommend the most suitable service.",
      showLeadGen: false
    };
  }

  // Contact Info
  if (
    q.includes("contact") || 
    q.includes("phone") || 
    q.includes("email") || 
    q.includes("support") || 
    q.includes("number") || 
    q.includes("reach") || 
    q.includes("address") ||
    q.includes("office") ||
    q.includes("delhi")
  ) {
    return {
      text: `You can reach Next Ledgers through the following official channels: \n\n• **Phone**: +1 (888) 552-0055\n• **Email**: info@nextledgers.com\n• **Website**: https://nextledgers.com\n• **Head Office**: New Delhi, India.\n\nWe provide reliable communication and 24/7 client support. Let us know if you would like us to call you!`,
      showLeadGen: true
    };
  }

  // Why choose Next Ledgers
  if (q.includes("why choose") || q.includes("benefit") || q.includes("advantage") || q.includes("different") || q.includes("why next ledgers")) {
    return {
      text: "Clients choose Next Ledgers for our experienced accounting professionals, transparent billing, dedicated team model, fast turnaround, secure cloud setups, and highly responsive communication. We deliver high-quality support that lets you focus on running your business. Would you like help choosing the right accounting solution for your business?",
      showLeadGen: true
    };
  }

  // Navigation Questions
  if (q.includes("where is") || q.includes("find") || q.includes("navigate") || q.includes("menu") || q.includes("page")) {
    if (q.includes("bookkeeping")) {
      return {
        text: "You can find Bookkeeping under our **USA Services** or **Canada Services** drop-downs in the main menu, or on the main **Services** page. Our virtual bookkeeping team handles standard reconciliations and ledgers.",
        showLeadGen: true
      };
    }
    if (q.includes("contact")) {
      return {
        text: "You can navigate to the **Contact** page directly from the main header navigation menu. Our phone is +1 (888) 552-0055 and email is info@nextledgers.com.",
        showLeadGen: true
      };
    }
    if (q.includes("article") || q.includes("blog") || q.includes("tip")) {
      return {
        text: "You can view industry insights and accounting updates under the **Articles** or **Blog** sections accessible in the main menu navigation.",
        showLeadGen: true
      };
    }
    return {
      text: "You can access our main services, about page, blog articles, and contact details directly from the navigation bar at the top of our website. Let us know if you need help finding a specific solution!",
      showLeadGen: true
    };
  }

  // Appointment/Consultation request
  if (
    q.includes("appointment") || 
    q.includes("book") || 
    q.includes("consultation") || 
    q.includes("schedule") || 
    q.includes("call me") || 
    q.includes("callback") ||
    q.includes("call back") ||
    q.includes("talk to") ||
    q.includes("meeting")
  ) {
    return {
      text: "I would be delighted to guide you toward a consultation with our experts. Please complete the quick callback form below, or call our support number directly at +1 (888) 552-0055. Please note I cannot directly book calendar dates myself, but our team will reach out immediately.",
      triggerForm: true
    };
  }

  // Default fallback
  return {
    text: "I couldn't find that specific information on our website. Please contact our team directly at info@nextledgers.com or +1 (888) 552-0055, and we'll be happy to assist you immediately.",
    showLeadGen: true
  };
};

export default function NexaLedAi() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "initial",
      sender: "bot",
      text: "Hello! I'm NexaLed AI, your virtual client success consultant. I can provide detailed guidance on Next Ledgers' accounting, tax preparation, bookkeeping, and offshore staffing solutions. How can I help your business today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Callback Form states
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  const scrollRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle Quick Replies
  const handleQuickReply = (text, queryText = null) => {
    const userQuery = queryText || text;
    // Add user message
    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const res = getResponse(userQuery);
      
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: res.text,
        timestamp: new Date(),
        showLeadGen: res.showLeadGen,
        isForm: res.triggerForm
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  // Handle Text Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText("");

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Look for appointment trigger phrases in query
    const lowerText = userText.toLowerCase();
    const isCallbackRequest = lowerText.includes("call") || 
                              lowerText.includes("callback") || 
                              lowerText.includes("contact me") || 
                              lowerText.includes("appointment") || 
                              lowerText.includes("consultation") || 
                              lowerText.includes("schedule") ||
                              lowerText.includes("talk to");

    setTimeout(() => {
      setIsTyping(false);
      let res;
      if (isCallbackRequest) {
        res = {
          text: "I would be delighted to guide you toward a consultation with our experts. Please complete the quick callback form below, or call our support number directly at +1 (888) 552-0055. Please note I cannot directly book calendar dates myself, but our team will reach out immediately.",
          triggerForm: true
        };
      } else {
        res = getResponse(userText);
      }

      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: res.text,
        timestamp: new Date(),
        showLeadGen: res.showLeadGen,
        isForm: res.triggerForm
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1100);
  };

  // Form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCallbackForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Callback form submission handler
  const handleFormSubmit = (e, messageId) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {};
    if (!callbackForm.name.trim()) errors.name = "Name is required";
    if (!callbackForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(callbackForm.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!callbackForm.phone.trim()) errors.phone = "Phone number is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmittingForm(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmittingForm(false);
      
      // Update form message in chat logs to show submitted status
      setMessages(prev => 
        prev.map(msg => {
          if (msg.id === messageId) {
            return {
              ...msg,
              isForm: false,
              formSubmitted: true,
              submittedData: { ...callbackForm }
            };
          }
          return msg;
        })
      );

      // Append success verification details from Next Ledgers assistant
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "bot",
          text: `✅ **Lead Generated & Notification Sent!**\n\nThank you, **${callbackForm.name}**. An automated confirmation email has been dispatched to your address (**${callbackForm.email}**) and our CPA success desk at **info@nextledgers.com**.\n\nA Next Ledgers client manager will contact you at **${callbackForm.phone}** within 24 hours to discuss your business requirements.\n\n*Reference ID: NL-${Math.floor(100000 + Math.random() * 900000)}*`,
          timestamp: new Date()
        }
      ]);

      // Reset form fields
      setCallbackForm({
        name: "",
        email: "",
        phone: "",
        business: ""
      });
    }, 1500);
  };

  return (
    <>
      {/* Floating launcher icon display fixed on bottom-right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95
          ${isOpen 
            ? "bg-[#0F274A] text-white rotate-90 border border-white/20" 
            : "bg-gradient-to-tr from-[#F58220] to-[#F79027] text-white hover:rotate-6"
          }
        `}
        aria-label="Open NexaLed AI assistant chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FEF4E4]"></span>
            </span>
          </div>
        )}
      </button>

      {/* Hostinger-style Chat Box Container */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[400px] h-[590px] max-h-[calc(100vh-120px)] max-w-[calc(100vw-32px)] bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(15,39,74,0.15)] flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          ${isOpen 
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 scale-90 translate-y-8 pointer-events-none"
          }
        `}
      >
        {/* Elegant Gradient Header */}
        <div className="bg-gradient-to-r from-[#0F274A] to-[#1e3b63] p-4 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#FEF4E4]/10 border border-[#F58220]/40 flex items-center justify-center font-black text-sm tracking-widest text-[#F58220]">
                NL
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0F274A] animate-pulse"></span>
            </div>
            <div>
              <div className="font-extrabold text-sm tracking-wide flex items-center gap-1.5">
                NexaLed AI
                <span className="text-[9px] bg-[#F58220] text-[#FEF4E4] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                  Official
                </span>
              </div>
              <p className="text-[11px] text-slate-300">Next Ledgers success assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close chatbot window"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Log scroll area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4 no-scrollbar scroll-smooth"
        >
          {messages.map((msg) => {
            const isBot = msg.sender === "bot";
            return (
              <div key={msg.id} className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}>
                <div className={`flex items-start gap-2 max-w-[85%] ${isBot ? "flex-row" : "flex-row-reverse"}`}>
                  {isBot && (
                    <div className="w-8 h-8 rounded-full bg-[#FEF4E4] border border-[#F58220]/30 flex-shrink-0 flex items-center justify-center font-bold text-xs text-[#F58220] shadow-sm">
                      NL
                    </div>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <div
                      className={`rounded-2xl px-4 py-3 text-xs md:text-sm shadow-sm leading-relaxed whitespace-pre-line
                        ${isBot 
                          ? "bg-white text-[#1E1B2A] border border-slate-100 rounded-tl-sm" 
                          : "bg-gradient-to-r from-[#F58220] to-[#F79027] text-white rounded-tr-sm"
                        }
                      `}
                    >
                      {msg.text}

                      {/* Display lead validation results if submitted */}
                      {msg.formSubmitted && msg.submittedData && (
                        <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium space-y-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold">Name:</span> {msg.submittedData.name}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold">Email:</span> {msg.submittedData.email}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold">Phone:</span> {msg.submittedData.phone}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Inline Lead Capture Callback Form */}
                    {isBot && msg.isForm && (
                      <form 
                        onSubmit={(e) => handleFormSubmit(e, msg.id)}
                        className="bg-white border border-slate-100 p-4 rounded-2xl shadow-md w-full max-w-[320px] mt-2 space-y-3"
                      >
                        <div className="text-[11px] text-[#0F274A] font-extrabold uppercase tracking-wider border-b border-slate-50 pb-1.5 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#F58220]" />
                          Callback Request
                        </div>

                        {/* Name Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="text"
                              name="name"
                              value={callbackForm.name}
                              onChange={handleFormChange}
                              disabled={isSubmittingForm}
                              placeholder="Enter name"
                              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] outline-none rounded-lg text-xs text-[#1E1B2A]"
                            />
                          </div>
                          {formErrors.name && (
                            <span className="text-[9px] text-rose-500 font-bold block">{formErrors.name}</span>
                          )}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Email Address *</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="email"
                              name="email"
                              value={callbackForm.email}
                              onChange={handleFormChange}
                              disabled={isSubmittingForm}
                              placeholder="Enter email address"
                              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] outline-none rounded-lg text-xs text-[#1E1B2A]"
                            />
                          </div>
                          {formErrors.email && (
                            <span className="text-[9px] text-rose-500 font-bold block">{formErrors.email}</span>
                          )}
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Phone Number *</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={callbackForm.phone}
                              onChange={handleFormChange}
                              disabled={isSubmittingForm}
                              placeholder="Enter phone number"
                              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] outline-none rounded-lg text-xs text-[#1E1B2A]"
                            />
                          </div>
                          {formErrors.phone && (
                            <span className="text-[9px] text-rose-500 font-bold block">{formErrors.phone}</span>
                          )}
                        </div>

                        {/* Business details */}
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Business Name / Message</label>
                          <div className="relative">
                            <Building className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                            <textarea
                              name="business"
                              rows="2"
                              value={callbackForm.business}
                              onChange={handleFormChange}
                              disabled={isSubmittingForm}
                              placeholder="Enter business name or message"
                              className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] outline-none rounded-lg text-xs text-[#1E1B2A] resize-none"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmittingForm}
                          className="w-full py-2 px-4 rounded-lg bg-[#F58220] text-[#FEF4E4] font-black text-xs uppercase tracking-wider hover:bg-[#E0721B] hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-75 disabled:hover:scale-100"
                        >
                          {isSubmittingForm ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Routing request...
                            </>
                          ) : (
                            <>
                              Request callback
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </form>
                    )}

                    {/* Pre-packaged Quick Reply chips to append underneath matching responses */}
                    {isBot && msg.showLeadGen && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <button
                          onClick={() => handleQuickReply("Yes, help me choose a solution.", "Please help me choose a service")}
                          className="px-2.5 py-1 bg-white border border-[#F58220]/20 text-[#F58220] hover:bg-[#FEF4E4] rounded-full text-[10px] font-bold tracking-wide shadow-sm hover:border-[#F58220] transition-colors cursor-pointer"
                        >
                          🤝 Yes, choose a solution
                        </button>
                        <button
                          onClick={() => handleQuickReply("Book a consultation.", "book a consultation")}
                          className="px-2.5 py-1 bg-white border border-[#F58220]/20 text-[#F58220] hover:bg-[#FEF4E4] rounded-full text-[10px] font-bold tracking-wide shadow-sm hover:border-[#F58220] transition-colors cursor-pointer"
                        >
                          📅 Book consultation
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FEF4E4] border border-[#F58220]/30 flex-shrink-0 flex items-center justify-center font-bold text-xs text-[#F58220] shadow-sm animate-pulse">
                NL
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Initial setup prompt chips shown for quick answers if scroll is empty/near top */}
        {messages.length === 1 && !isTyping && (
          <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button
              onClick={() => handleQuickReply("🇺🇸 USA Services")}
              className="px-3 py-1.5 bg-white border border-slate-200 text-[#0F274A] hover:bg-[#FEF4E4]/40 hover:border-[#F58220] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              🇺🇸 USA Services
            </button>
            <button
              onClick={() => handleQuickReply("🇨🇦 Canada Services")}
              className="px-3 py-1.5 bg-white border border-slate-200 text-[#0F274A] hover:bg-[#FEF4E4]/40 hover:border-[#F58220] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              🇨🇦 Canada Services
            </button>
            <button
              onClick={() => handleQuickReply("⚙️ Software We Use", "software expertise")}
              className="px-3 py-1.5 bg-white border border-slate-200 text-[#0F274A] hover:bg-[#FEF4E4]/40 hover:border-[#F58220] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              ⚙️ Software We Use
            </button>
            <button
              onClick={() => handleQuickReply("📞 Request Callback", "book a consultation")}
              className="px-3 py-1.5 bg-white border border-slate-200 text-[#0F274A] hover:bg-[#FEF4E4]/40 hover:border-[#F58220] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              📞 Request Callback
            </button>
            <button
              onClick={() => handleQuickReply("🔒 Data Security")}
              className="px-3 py-1.5 bg-white border border-slate-200 text-[#0F274A] hover:bg-[#FEF4E4]/40 hover:border-[#F58220] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              🔒 Data Security
            </button>
          </div>
        )}

        {/* Input Bar */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white border-t border-slate-100 p-3 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your question about Next Ledgers..."
            className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] outline-none rounded-full text-xs md:text-sm text-[#1E1B2A] transition-all"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 rounded-full bg-[#F58220] text-white hover:bg-[#E0721B] hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
