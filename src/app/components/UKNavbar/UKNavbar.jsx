"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UK_SERVICE_LINKS } from "@/app/uk/ukServiceLinks";
import RegionSelect from "@/app/components/RegionSelect/RegionSelect";

const UK_NAV_LINKS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  {
    id: "services",
    label: "Services in UK",
    href: "/uk#services",
    hasDropdown: true,
    dropdownItems: UK_SERVICE_LINKS,
  },
  { id: "byot", label: "BYOT", href: "/byot" },
  { id: "tools", label: "Tool", href: "/tools" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export default function UKNavbar({ isSidebarOpen = false, setIsSidebarOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const timeoutRef = useRef(null);
  const sidebarPanelRef = useRef(null);
  const pathname = usePathname();

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
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4 lg:-ml-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/images/nextledgerlogo3.png"
                alt="NextLedgers Logo"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
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
                          ? "bg-[#FF6A00]/10 text-[#FF6A00]"
                          : "text-[#1E1B2A] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180 text-[#FF6A00]" : "text-gray-400"
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
                          {/* Back To UK Action Header */}
                          {pathname !== "/uk" && pathname !== "/uk/" && (
                            <Link
                              href="/uk"
                              className="group flex items-center gap-2.5 p-2.5 mb-2 rounded-xl bg-[#FF6A00]/5 hover:bg-[#FF6A00]/10 border border-[#FF6A00]/20 transition-all duration-200 text-left"
                            >
                              <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="w-7 h-[18px] object-cover flex-shrink-0 rounded-xs" />
                              <span className="text-[13px] font-extrabold text-[#FF6A00]">
                                Back To UK
                              </span>
                            </Link>
                          )}

                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-[#FF6A00]/5 border-l-2 border-transparent hover:border-[#FF6A00]/40 text-left"
                            >
                              <span className="text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                                {item.icon}
                              </span>
                              <span className="text-[13px] font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00] leading-snug">
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
                  className={`px-3 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-200 ${
                    pathname === link.href ||
                    (link.href !== "/" && pathname?.startsWith(link.href))
                      ? "bg-[#FF6A00]/10 text-[#FF6A00]"
                      : "text-[#1E1B2A] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Region select (Desktop) — same as home header */}
          <div className="hidden lg:flex items-center">
            <RegionSelect />
          </div>

          {/* Hamburger (Mobile) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -mr-2 rounded-lg text-[#FF6A00] hover:bg-[#FF6A00]/5 focus:outline-none transition-all duration-200 cursor-pointer"
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
          ref={sidebarPanelRef}
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
              className="p-1.5 rounded-lg text-[#FF6A00] hover:bg-[#FF6A00]/5 cursor-pointer transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-[#FF6A00]/20 w-full" />

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
                          ? "bg-[#FF6A00]/6 text-[#FF6A00]"
                          : "text-[#1E1B2A] hover:text-[#FF6A00] hover:bg-[#FF6A00]/4"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isExpanded ? (
                        <span className="text-[10px] text-[#FF6A00] select-none">▲</span>
                      ) : (
                        <span className="text-[16px] font-bold text-[#FF6A00] select-none">+</span>
                      )}
                    </button>

                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-1"
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}>
                      <div className="overflow-hidden">
                        <div className="bg-[#FF6A00]/2 border border-[#FF6A00]/5 rounded-[18px] p-3 flex flex-col gap-1 mx-2">
                          {pathname !== "/uk" && pathname !== "/uk/" && (
                            <Link
                              href="/uk"
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-2.5 p-2.5 mb-1.5 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] transition-colors"
                            >
                              <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag" className="w-7 h-[18px] object-cover flex-shrink-0 rounded-xs" />
                              <span className="text-xs font-black">
                                Back To UK
                              </span>
                            </Link>
                          )}

                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FF6A00]/4 transition-colors"
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
                  className="flex items-center px-4 py-3.5 rounded-xl font-bold text-sm text-[#1E1B2A] hover:text-[#FF6A00] hover:bg-[#FF6A00]/4 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile region select */}
            <div className="shrink-0 border-t border-[#FF6A00]/15 pt-3 px-2">
              <p className="mb-2 px-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#9CA3AF]">
                Choose region
              </p>
              <RegionSelect
                onRegionChange={() => setIsSidebarOpen(false)}
                compact
                showLabel
                boundaryRef={sidebarPanelRef}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
