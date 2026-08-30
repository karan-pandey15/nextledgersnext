"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoneRegionTopBar from "../RegionSelect/PhoneRegionTopBar";
import RegionSelect from "../RegionSelect/RegionSelect";
import NavIcon from "./NavIcon";
import { NAVIGATION_LINKS } from "./navigationData";
import useActiveRegion from "@/app/lib/useActiveRegion";
import { regionHomePath } from "@/app/lib/regionNav";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

function DropdownItemIcon({ icon, logo, className = "w-5 h-5" }) {
  if (logo != null) {
    return <HomeLogoImg n={logo} alt="" className={`block h-full w-full object-contain ${className}`} />;
  }
  if (!icon) return null;
  // Lucide icons are forwardRef components (objects), not plain functions
  if (typeof icon === "function" || (typeof icon === "object" && icon.$$typeof)) {
    const Icon = icon;
    return <Icon className={className} strokeWidth={2} aria-hidden="true" />;
  }
  if (typeof icon === "string") {
    return <NavIcon name={icon} className={className} />;
  }
  return null;
}

function DropdownItemGlyph({ item, sizeClass = "h-8 w-8" }) {
  if (item?.logo != null) {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center ${sizeClass}`}>
        <HomeLogoImg n={item.logo} alt="" />
      </span>
    );
  }
  return (
    <span className={`mt-0.5 flex shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00] ${sizeClass}`}>
      <DropdownItemIcon icon={item?.icon} className="h-4 w-4" />
    </span>
  );
}

export default function Header({ isSidebarOpen = false, setIsSidebarOpen }) {
  const pathname = usePathname();
  const { rememberedCode, isGlobalHome } = useActiveRegion();
  const homeHref = isGlobalHome ? "/" : regionHomePath(rememberedCode);
  const navLinks = NAVIGATION_LINKS.map((link) =>
    link.id === "home" ? { ...link, href: homeHref } : link
  );
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const timeoutRefs = useRef({});
  const sidebarPanelRef = useRef(null);

  const isActiveLink = (href) => {
    if (!href || href === "#") return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isNavItemActive = (link) => {
    if (isActiveLink(link.href)) return true;
    return Boolean(
      link.dropdownItems?.some((item) => item.href && isActiveLink(item.href))
    );
  };

  const desktopLinkClass = (href, isOpen = false, link = null) => {
    const isActive = (link ? isNavItemActive(link) : isActiveLink(href)) || isOpen;
    return `relative px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
      isActive ? "text-[#1A1A1A]" : "text-[#4A4A4A] hover:text-[#1A1A1A]"
    }`;
  };

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
    <header className="sticky top-0 z-40 w-full overflow-visible border-b border-[#ECECEC] bg-white">
      <PhoneRegionTopBar
        isSidebarOpen={isSidebarOpen}
        onRegionChange={handleRegionChange}
      />

      {/* Custom Styles for Nav Dropdown Opening */}
      <style>{`
        @keyframes navDropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-nav-dropdown {
          animation: navDropdownSlideIn 0.2s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .usa-services-dropdown {
          width: 420px;
          min-width: 420px;
          max-width: min(420px, calc(100vw - 2rem));
        }
        .canada-services-dropdown {
          width: 420px;
          min-width: 420px;
          max-width: min(420px, calc(100vw - 2rem));
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex-shrink-0 flex items-center">
            <Link href={homeHref} className="flex items-center group">
              <img
                src="/images/nextledgerlogo3.png"
                alt="NextLedgers Logo"
                className="h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-1 overflow-visible xl:flex">
            {navLinks.map((link) => {
              const isOpen = activeDropdown === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative overflow-visible"
                    onMouseEnter={() => handleMouseEnter(link.id)}
                    onMouseLeave={() => handleMouseLeave(link.id)}
                  >
                    <button
                      onClick={(e) => handleDropdownClick(link.id, e)}
                      className={`${desktopLinkClass(link.href, isOpen, link)} flex items-center gap-1 cursor-pointer focus:outline-none`}
                      aria-expanded={isOpen}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={`w-3 h-3 text-current transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      {isNavItemActive(link) && (
                        <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#FF6A00] rounded-full" />
                      )}
                    </button>

                    {/* Dropdown Modal Menu */}
                    {isOpen && (
                      <div
                        className={`absolute left-0 top-full z-50 mt-2 origin-top-left rounded-[20px] border border-gray-100 bg-white p-4 shadow-[0_12px_45px_rgba(0,0,0,0.08)] animate-nav-dropdown ${
                          link.dropdownLayout === "cards"
                            ? link.dropdownWidth || "usa-services-dropdown"
                            : link.dropdownWidth || "w-[340px]"
                        }`}
                        onMouseEnter={() => handleMouseEnter(link.id)}
                        onMouseLeave={() => handleMouseLeave(link.id)}
                      >
                        {link.dropdownLayout === "cards" ? (
                          <div className="flex flex-col gap-0.5">
                            <Link
                              href={link.regionHub?.href || link.href}
                              className="group mb-2 flex items-center gap-2.5 rounded-xl border border-[#FF6A00]/20 bg-[#FF6A00]/5 p-2.5 text-left transition-all duration-200 hover:bg-[#FF6A00]/10"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={link.regionHub?.flagSrc || "https://flagcdn.com/w40/us.png"}
                                alt={link.regionHub?.flagAlt || ""}
                                className="h-[18px] w-7 shrink-0 rounded-sm object-cover"
                              />
                              <span className="text-[13px] font-extrabold text-[#FF6A00]">
                                {link.regionHub?.label || "All Services"}
                              </span>
                            </Link>

                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-3 rounded-xl border-l-2 border-transparent p-2.5 text-left transition-all duration-200 hover:border-[#FF6A00]/40 hover:bg-[#FF6A00]/5"
                              >
                                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00] transition-transform duration-200 group-hover:scale-110">
                                  <DropdownItemIcon icon={item.icon} className="h-4 w-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[13px] font-bold leading-snug text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00]">
                                    {item.label}
                                  </span>
                                  {item.blurb ? (
                                    <span className="mt-0.5 block text-[11px] leading-relaxed text-[#6B7280]">
                                      {item.blurb}
                                    </span>
                                  ) : null}
                                </span>
                              </Link>
                            ))}
                          </div>
                        ) : link.dropdownLayout === "services-list" ? (
                          <div className="flex flex-col gap-0.5">
                            <p className="mb-2 px-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#FF6A00]">
                              Our Services
                            </p>
                            {link.dropdownItems.map((item, idx) => (
                              <Link
                                key={item.label || idx}
                                href={item.href || "/"}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-2.5 rounded-xl px-2.5 py-2.5 text-left transition-all duration-200 hover:bg-[#FF6A00]/6"
                              >
                                <svg
                                  className="h-3 w-3 shrink-0 text-[#FF6A00]"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                                </svg>
                                <span className="text-[13px] font-semibold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00]">
                                  {item.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1">
                            {link.dropdownItems.map((item, idx) => {
                              const itemClass =
                                "group flex items-start gap-3.5 p-3 rounded-xl transition-all duration-200 hover:bg-[#FF6A00]/4 border-l-2 border-transparent hover:border-[#FF6A00]/40 text-left w-full";

                              if (!item.href) {
                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    className={`${itemClass} cursor-default`}
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <div className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                                      <DropdownItemGlyph item={item} sizeClass="h-8 w-8" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00] leading-snug">
                                      {item.label}
                                    </span>
                                  </button>
                                );
                              }

                              return (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  className={itemClass}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                                    <DropdownItemGlyph item={item} sizeClass="h-8 w-8" />
                                  </div>
                                  <span className="text-sm font-bold text-[#1E1B2A]/90 transition-colors duration-200 group-hover:text-[#FF6A00] leading-snug">
                                    {item.label}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              // Contact Us → contact page
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={desktopLinkClass(link.href)}
                >
                  <span>{link.label}</span>
                  {isActiveLink(link.href) && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[#FF6A00] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden xl:flex items-center gap-4">
            <RegionSelect onRegionChange={handleRegionChange} />
          </div>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <div className="flex xl:hidden items-center">
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
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
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
          ref={sidebarPanelRef}
          className={`absolute inset-y-0 left-0 flex w-[min(300px,85vw)] flex-col gap-4 overflow-hidden bg-white p-5 shadow-2xl sm:gap-5 sm:p-6 transform transition-transform duration-300 ease-out ${
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
              className="p-1.5 rounded-lg text-[#FF6A00] hover:bg-[#FF6A00]/5 cursor-pointer transition-all duration-200"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Horizontal Orange-tinted Divider */}
          <div className="border-b border-[#FF6A00]/20 w-full" />

          {/* Sidebar Menu Scrollable Links */}
          <nav className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1 no-scrollbar">
            {navLinks.map((link) => {
              const isExpanded = !!expandedMobileMenus[link.id];

              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="flex flex-col gap-1.5">
                    {/* Trigger Button to toggle expansion */}
                    <button
                      onClick={() => toggleMobileMenu(link.id)}
                      className={`flex items-center justify-between w-full text-left px-4 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                        isExpanded
                          ? "bg-[#FF6A00]/6 text-[#FF6A00]"
                          : "text-[#FF6A00] hover:bg-[#FF6A00]/4"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <NavIcon name={link.icon} className="w-4 h-4 text-[#FF6A00]" />
                        <span>{link.label}</span>
                      </div>
                      {isExpanded ? (
                        <span className="text-[10px] text-[#FF6A00] transition-transform duration-200 select-none">▲</span>
                      ) : (
                        <span className="text-[16px] font-bold text-[#FF6A00] transition-transform duration-200 select-none">+</span>
                      )}
                    </button>

                    {/* Sublinks drawer container with smooth grid height transition */}
                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded 
                        ? "grid-rows-[1fr] opacity-100 mt-1" 
                        : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}>
                      <div className="overflow-hidden">
                        <div className="bg-[#FF6A00]/2 border border-[#FF6A00]/5 rounded-[18px] p-3 flex flex-col gap-1 mx-2">
                          {link.dropdownItems.map((item, idx) => {
                            if (link.dropdownLayout === "services-list") {
                              return (
                                <Link
                                  key={item.label || idx}
                                  href={item.href || "/"}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-[#FF6A00]/4 transition-colors"
                                >
                                  <svg
                                    className="h-3 w-3 shrink-0 text-[#FF6A00]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                                  </svg>
                                  <span className="text-xs font-bold text-[#1E1B2A]/90">
                                    {item.label}
                                  </span>
                                </Link>
                              );
                            }

                            if (!item.href) {
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FF6A00]/4 transition-colors w-full text-left cursor-default"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <div className="flex-shrink-0 mt-0.5">
                                    <DropdownItemGlyph item={item} sizeClass="h-8 w-8" />
                                  </div>
                                  <span className="text-xs font-bold text-[#1E1B2A]/90">
                                    {item.label}
                                  </span>
                                </button>
                              );
                            }

                            return (
                              <Link
                                key={item.href || idx}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FF6A00]/4 transition-colors"
                              >
                                <DropdownItemGlyph item={item} sizeClass="h-8 w-8" />
                                <span className="min-w-0">
                                  <span className="block text-xs font-bold text-[#1E1B2A]/90 leading-snug">
                                    {item.label}
                                  </span>
                                  {item.blurb ? (
                                    <span className="mt-0.5 block text-[10.5px] leading-relaxed text-[#6B7280]">
                                      {item.blurb}
                                    </span>
                                  ) : null}
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

              // Simple links (Home, BYOT, Careers, Contact)
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl font-bold text-sm text-[#FF6A00] hover:bg-[#FF6A00]/4 transition-all duration-200"
                >
                  <NavIcon name={link.icon} className="w-4 h-4 text-[#FF6A00]" />
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
