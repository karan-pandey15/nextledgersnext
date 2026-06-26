"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "../utils/Button/Button";

const UK_NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  {
    id: "services",
    label: "Services",
    href: "#services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Management Accounts & Financial Reporting", href: "/uk/#management-accounts", icon: "📊" },
      { label: "Payroll & CIS Services", href: "/uk/#payroll-cis", icon: "💰" },
      { label: "Personal Tax Services", href: "/uk/#personal-tax", icon: "📋" },
      { label: "UK Bookkeeping Service", href: "/uk/#bookkeeping-vat", icon: "📒" },
      { label: "UK Business Advisory & Virtual CFO Services", href: "/uk/#advisory", icon: "📈" },
      { label: "UK Company Formation & Company Secretarial", href: "/uk/#company-formation", icon: "🏢" },
      { label: "VAT Service & Making Tax Digital (MTD)", href: "/uk/#vat-mtd", icon: "🧾" },
      { label: "Year-End Accounts & Corporation Tax", href: "/uk/#year-end", icon: "📑" },
    ],
  },
  { id: "tools", label: "Tools", href: "/tools" },
  { id: "pricing", label: "Pricing", href: "/pricing" },
  { id: "process", label: "Process", href: "/process" },
  { id: "contact", label: "Contact Us", href: "/contact" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "free-trial", label: "Free Trial", href: "/free-trial" },
];

export default function UKNavbar({ isSidebarOpen = false, setIsSidebarOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const timeoutRef = useRef(null);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = (menuId) => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown((current) => (current === menuId ? null : current));
    }, 180);
  };

  const handleDropdownClick = (menuId, e) => {
    e.preventDefault();
    setActiveDropdown((current) => (current === menuId ? null : menuId));
  };

  const toggleMobileMenu = (menuId) => {
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
      <style>{`
        @keyframes ukNavDropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-uk-nav-dropdown {
          animation: ukNavDropdownSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .uk-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .uk-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[68px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4 lg:-ml-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/nextledgerlogo3.png"
                alt="NextLedgers Logo"
                className="h-7 md:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {UK_NAV_LINKS.map((link) => {
              const isOpen = activeDropdown === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.id)}
                    onMouseLeave={() => handleMouseLeave(link.id)}
                  >
                    <button
                      onClick={(e) => handleDropdownClick(link.id, e)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                        isOpen
                          ? "bg-[#F58220]/10 text-[#F58220]"
                          : "text-[#1E1B2A] hover:text-[#F58220] hover:bg-[#F58220]/5"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180 text-[#F58220]" : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-[380px] origin-top-left rounded-[20px] bg-white border border-gray-100 p-4 shadow-[0_12px_45px_rgba(0,0,0,0.08)] z-50 animate-uk-nav-dropdown"
                        onMouseEnter={() => handleMouseEnter(link.id)}
                        onMouseLeave={() => handleMouseLeave(link.id)}
                      >
                        <div className="flex flex-col gap-0.5">
                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-[#F58220]/5 border-l-2 border-transparent hover:border-[#F58220]/40 text-left"
                            >
                              <span className="text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                                {item.icon}
                              </span>
                              <span className="text-[13px] font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#F58220] leading-snug">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="px-3 py-2 rounded-full text-[13px] font-bold tracking-wide text-[#1E1B2A] hover:text-[#F58220] hover:bg-[#F58220]/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* BOOK A CALL Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Button text="BOOK A CALL" className="!py-2 !px-6 !text-[13px] !font-extrabold !rounded-full !tracking-wider" />
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -mr-2 rounded-lg text-[#F58220] hover:bg-[#F58220]/5 focus:outline-none transition-all duration-200 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute inset-y-0 left-0 w-[300px] bg-white shadow-2xl p-6 flex flex-col gap-5 transform transition-transform duration-300 ease-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo & Close */}
          <div className="flex items-center justify-between">
            <img
              src="/images/nextledgerlogo3.png"
              alt="NextLedgers Logo"
              className="h-7 w-auto object-contain"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-1.5 rounded-lg text-[#F58220] hover:bg-[#F58220]/5 cursor-pointer transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-[#F58220]/20 w-full" />

          {/* Mobile Nav Links */}
          <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 uk-no-scrollbar">
            {UK_NAV_LINKS.map((link) => {
              const isExpanded = !!expandedMobileMenus[link.id];

              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="flex flex-col gap-1.5">
                    <button
                      onClick={() => toggleMobileMenu(link.id)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                        isExpanded
                          ? "bg-[#F58220]/6 text-[#F58220]"
                          : "text-[#1E1B2A] hover:text-[#F58220] hover:bg-[#F58220]/4"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isExpanded ? (
                        <span className="text-[10px] text-[#F58220] select-none">▲</span>
                      ) : (
                        <span className="text-[16px] font-bold text-[#F58220] select-none">+</span>
                      )}
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}>
                      <div className="overflow-hidden">
                        <div className="bg-[#F58220]/2 border border-[#F58220]/5 rounded-[18px] p-3 flex flex-col gap-1 mx-2">
                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F58220]/4 transition-colors"
                            >
                              <span className="text-base flex-shrink-0">{item.icon}</span>
                              <span className="text-xs font-bold text-[#1E1B2A]/90">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-xl font-bold text-sm text-[#1E1B2A] hover:text-[#F58220] hover:bg-[#F58220]/4 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-3 px-2">
              <Button text="BOOK A CALL" className="!w-full !py-3 !text-sm !font-extrabold !rounded-full" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
