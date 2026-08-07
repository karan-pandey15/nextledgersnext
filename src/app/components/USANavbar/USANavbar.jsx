"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";

const USA_NAV_LINKS = [
  { id: "home", label: "Home", href: "/usa" },
  { id: "about", label: "About Us", href: "/about" },
  {
    id: "services",
    label: "Services in USA",
    href: "/usa#services",
    hasDropdown: true,
    dropdownItems: USA_SERVICE_LINKS,
  },
  { id: "byot", label: "BYOT", href: "/byot" },
  { id: "tools", label: "Tool", href: "/tools" },
  { id: "contact", label: "Contact Us", href: "/contact" },
];

export default function USANavbar({ isSidebarOpen = false, setIsSidebarOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const timeoutRef = useRef(null);
  const pathname = usePathname();

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

  const isUsaHome = pathname === "/usa" || pathname === "/usa/";

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
      <style>{`
        @keyframes usaNavDropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-usa-nav-dropdown {
          animation: usaNavDropdownSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .usa-no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .usa-no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-[68px]">
          <div className="flex-shrink-0 flex items-center -ml-2 sm:-ml-4 lg:-ml-6">
            <Link href="/usa" className="flex items-center group">
              <img
                src="/images/nextledgerlogo3.png"
                alt="NextLedgers Logo"
                className="h-7 md:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {USA_NAV_LINKS.map((link) => {
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

                    {isOpen && (
                      <div
                        className="absolute left-0 mt-2 w-[380px] origin-top-left rounded-[20px] bg-white border border-gray-100 p-4 shadow-[0_12px_45px_rgba(0,0,0,0.08)] z-50 animate-usa-nav-dropdown"
                        onMouseEnter={() => handleMouseEnter(link.id)}
                        onMouseLeave={() => handleMouseLeave(link.id)}
                      >
                        <div className="flex flex-col gap-0.5">
                          {!isUsaHome && (
                            <Link
                              href="/usa"
                              className="group flex items-center gap-2.5 p-2.5 mb-2 rounded-xl bg-[#FF6A00]/5 hover:bg-[#FF6A00]/10 border border-[#FF6A00]/20 transition-all duration-200 text-left"
                            >
                              <img
                                src="https://flagcdn.com/w40/us.png"
                                alt="USA Flag"
                                className="w-7 h-[18px] object-cover flex-shrink-0 rounded-xs"
                              />
                              <span className="text-[13px] font-extrabold text-[#FF6A00]">
                                Back To USA
                              </span>
                            </Link>
                          )}

                          {link.dropdownItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                            <Link
                              key={idx}
                              href={item.href}
                              className="group flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-[#FF6A00]/5 border-l-2 border-transparent hover:border-[#FF6A00]/40 text-left"
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00] transition-transform duration-200 group-hover:scale-110">
                                <Icon className="h-4 w-4" strokeWidth={2} />
                              </span>
                              <span className="text-[13px] font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00] leading-snug">
                                {item.label}
                              </span>
                            </Link>
                            );
                          })}
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
                  className="px-3 py-2 rounded-full text-[13px] font-bold tracking-wide text-[#1E1B2A] hover:text-[#FF6A00] hover:bg-[#FF6A00]/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button
              text="BOOK A CALL"
              className="!py-2 !px-6 !text-[13px] !font-extrabold !tracking-wider"
            />
          </div>

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

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />

        <div
          className={`absolute inset-y-0 left-0 w-[300px] bg-white shadow-2xl p-6 flex flex-col gap-5 transform transition-transform duration-300 ease-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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

          <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 usa-no-scrollbar">
            {USA_NAV_LINKS.map((link) => {
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

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-1"
                          : "grid-rows-[0fr] opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="bg-[#FF6A00]/2 border border-[#FF6A00]/5 rounded-[18px] p-3 flex flex-col gap-1 mx-2">
                          {!isUsaHome && (
                            <Link
                              href="/usa"
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-2.5 p-2.5 mb-1.5 rounded-xl bg-[#FF6A00]/10 border border-[#FF6A00]/20 text-[#FF6A00] transition-colors"
                            >
                              <img
                                src="https://flagcdn.com/w40/us.png"
                                alt="USA Flag"
                                className="w-7 h-[18px] object-cover flex-shrink-0 rounded-xs"
                              />
                              <span className="text-xs font-black">Back To USA</span>
                            </Link>
                          )}

                          {link.dropdownItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setIsSidebarOpen(false)}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FF6A00]/4 transition-colors"
                            >
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00]">
                                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                              </span>
                              <span className="text-xs font-bold text-[#1E1B2A]/90">
                                {item.label}
                              </span>
                            </Link>
                            );
                          })}
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

            <div className="pt-3 px-2">
              <Button
                text="BOOK A CALL"
                className="!w-full !py-3 !text-sm !font-extrabold"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
