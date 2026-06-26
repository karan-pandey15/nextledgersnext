"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import RegionSelect from "../RegionSelect/RegionSelect";
import NavIcon from "./NavIcon";
import { NAVIGATION_LINKS } from "./navigationData";

export default function Header({ isSidebarOpen = false, setIsSidebarOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const timeoutRefs = useRef({});

  // Lock body scrolling when mobile sidebar is open to prevent double scrollbars
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

  const handleRegionChange = (regionCode) => {
    console.log("Selected Region in Header:", regionCode);
  };

  const handleMouseEnter = (menuId) => {
    if (timeoutRefs.current[menuId]) {
      clearTimeout(timeoutRefs.current[menuId]);
      timeoutRefs.current[menuId] = null;
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = (menuId) => {
    timeoutRefs.current[menuId] = setTimeout(() => {
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
      {/* Custom Styles for Nav Dropdown Opening */}
      <style>{`
        @keyframes navDropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-nav-dropdown {
          animation: navDropdownSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Hide scrollbars on mobile layout menus */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Shifted left and scaled smaller */}
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4 lg:-ml-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/nextledgerlogo3.png"
                alt="NextLedgers Logo"
                className="h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAVIGATION_LINKS.map((link) => {
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
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                        isOpen
                          ? "bg-[#F58220]/10 text-[#F58220]"
                          : "text-[#F58220] hover:bg-[#F58220]/5"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <NavIcon name={link.icon} className="w-4 h-4" />
                      <span>{link.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 text-[#F58220] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Modal Menu */}
                    {isOpen && (
                      <div
                        className={`absolute left-0 mt-2 ${link.dropdownWidth} origin-top-left rounded-[24px] bg-white border border-gray-100 p-5 shadow-[0_12px_45px_rgba(0,0,0,0.08)] z-50 animate-nav-dropdown`}
                        onMouseEnter={() => handleMouseEnter(link.id)}
                        onMouseLeave={() => handleMouseLeave(link.id)}
                      >
                        <div className="flex flex-col gap-1">
                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="group flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-[#F58220]/4 border-l-2 border-transparent hover:border-[#F58220]/40 text-left"
                            >
                              {/* Orange Icon Container */}
                              <div className="text-[#F58220] flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                                <NavIcon name={item.icon} className="w-5 h-5" />
                              </div>
                              {/* Text Label */}
                              <span className="text-sm font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#F58220] leading-snug">
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

              // Normal single links (Home, Contact)
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold tracking-wide text-[#F58220] hover:bg-[#F58220]/5 transition-all duration-200"
                >
                  <NavIcon name={link.icon} className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (RegionSelect - Desktop Only) */}
          <div className="hidden lg:flex items-center gap-4">
            <RegionSelect onRegionChange={handleRegionChange} />
          </div>

          {/* Hamburger Menu Icon (Mobile Only) */}
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
        {/* Dark Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar Panel Drawer */}
        <div
          className={`absolute inset-y-0 left-0 w-[300px] bg-white shadow-2xl p-6 flex flex-col gap-5 transform transition-transform duration-300 ease-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo & Close Button Row */}
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

          {/* Horizontal Orange-tinted Divider */}
          <div className="border-b border-[#F58220]/20 w-full" />

          {/* Sidebar Menu Scrollable Links */}
          <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 no-scrollbar">
            {NAVIGATION_LINKS.map((link) => {
              const isExpanded = !!expandedMobileMenus[link.id];

              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="flex flex-col gap-1.5">
                    {/* Trigger Button to toggle expansion */}
                    <button
                      onClick={() => toggleMobileMenu(link.id)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                        isExpanded
                          ? "bg-[#F58220]/6 text-[#F58220]"
                          : "text-[#F58220] hover:bg-[#F58220]/4"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <NavIcon name={link.icon} className="w-4 h-4 text-[#F58220]" />
                        <span>{link.label}</span>
                      </div>
                      {isExpanded ? (
                        <span className="text-[10px] text-[#F58220] transition-transform duration-200 select-none">▲</span>
                      ) : (
                        <span className="text-[16px] font-bold text-[#F58220] transition-transform duration-200 select-none">+</span>
                      )}
                    </button>

                    {/* Sublinks drawer container with smooth grid height transition */}
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
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F58220]/4 transition-colors"
                            >
                              <div className="text-[#F58220] flex-shrink-0 mt-0.5">
                                <NavIcon name={item.icon} className="w-4.5 h-4.5" />
                              </div>
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

              // Simple links (Home, Contact)
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl font-bold text-sm text-[#F58220] hover:bg-[#F58220]/4 transition-all duration-200"
                >
                  <NavIcon name={link.icon} className="w-4 h-4 text-[#F58220]" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
