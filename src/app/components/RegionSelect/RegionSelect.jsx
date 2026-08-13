"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  POPUP_REGIONS,
  REGION_ROUTES,
  DEFAULT_REGION,
  getRegionCodeFromPath,
  isRegionalServicePath,
} from "./regionData";
import {
  clearStoredRegionCode,
  persistRegionCode,
  readStoredRegionCode,
} from "@/app/lib/regionNav";

const NAVY = "#0F274A";
const CODE = "#5B4B8A";
const TRIGGER_FLAGS = POPUP_REGIONS;
const COMPACT_FLAGS = POPUP_REGIONS.slice(0, 5);
const MENU_ESTIMATE = 360;
const GAP = 6;
const PAD = 8;

/**
 * Region picker with flip-up / flip-down placement and optional boundary clamp
 * (keeps the menu inside the mobile sidebar when boundaryRef is provided).
 */
export default function RegionSelect({
  onRegionChange,
  className = "",
  minimize = false,
  variant = "light",
  /** Fewer flags + tighter chrome — for phone top bar / sidebar */
  compact = false,
  /** Clamp menu inside this element (e.g. mobile sidebar panel) */
  boundaryRef = null,
  /** Show region name beside code (better for sidebar) */
  showLabel = false,
  /** Force the single-flag + Back to Home control (regional service pages) */
  showBackHome = null,
}) {
  const [isOpen, setIsOpen] = useState(false);
  /** Default: India (IN) until user picks a market region */
  const [selectedRegion, setSelectedRegion] = useState("IN");
  const [menuPos, setMenuPos] = useState({
    top: 0,
    left: 0,
    width: 280,
    maxHeight: 320,
  });
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isDark = variant === "dark";
  const rootRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keep header/sidebar selection in sync with the current page.
  // Regional routes save that market. Home (/) resets to IN / worldwide
  // so About/BYOT/Tools/Contact use the global navbar afterward.
  useEffect(() => {
    const fromPath = getRegionCodeFromPath(pathname);
    if (fromPath) {
      setSelectedRegion(fromPath);
      persistRegionCode(fromPath);
      return;
    }

    if (pathname === "/") {
      setSelectedRegion("IN");
      clearStoredRegionCode();
      return;
    }

    setSelectedRegion(readStoredRegionCode() || "IN");
  }, [pathname]);

  const updateMenuPosition = useCallback(() => {
    const trigger = rootRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const boundaryEl = boundaryRef?.current;
    const bounds = boundaryEl
      ? boundaryEl.getBoundingClientRect()
      : {
          top: PAD,
          left: PAD,
          right: window.innerWidth - PAD,
          bottom: window.innerHeight - PAD,
        };

    const availableWidth = Math.max(160, bounds.right - bounds.left - PAD * 2);
    const menuWidth = Math.min(280, availableWidth, window.innerWidth - PAD * 2);

    const spaceBelow = bounds.bottom - rect.bottom - GAP;
    const spaceAbove = rect.top - bounds.top - GAP;
    const openUp = spaceBelow < 200 && spaceAbove > spaceBelow;

    const measured =
      menuRef.current?.scrollHeight ||
      Math.min(MENU_ESTIMATE, POPUP_REGIONS.length * 42 + 40);

    const maxHeight = Math.max(
      160,
      Math.min(measured, openUp ? spaceAbove : spaceBelow, MENU_ESTIMATE)
    );

    let top = openUp ? rect.top - GAP - maxHeight : rect.bottom + GAP;
    if (top < bounds.top + PAD) top = bounds.top + PAD;
    if (top + maxHeight > bounds.bottom - PAD) {
      top = Math.max(bounds.top + PAD, bounds.bottom - PAD - maxHeight);
    }

    let left = rect.right - menuWidth;
    if (left < bounds.left + PAD) left = bounds.left + PAD;
    if (left + menuWidth > bounds.right - PAD) {
      left = Math.max(bounds.left + PAD, bounds.right - PAD - menuWidth);
    }

    setMenuPos({ top, left, width: menuWidth, maxHeight });
  }, [boundaryRef]);

  useEffect(() => {
    if (!isOpen) return undefined;

    updateMenuPosition();
    // Re-measure after paint once menu exists (more accurate height)
    const raf = requestAnimationFrame(() => updateMenuPosition());

    const onPointerDown = (e) => {
      const inTrigger = rootRef.current?.contains(e.target);
      const inMenu = menuRef.current?.contains(e.target);
      if (!inTrigger && !inMenu) setIsOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const onReposition = () => updateMenuPosition();

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onReposition);
      window.removeEventListener("scroll", onReposition, true);
    };
  }, [isOpen, updateMenuPosition]);

  const handleSelect = (code) => {
    setSelectedRegion(code);
    setIsOpen(false);
    persistRegionCode(code);

    if (REGION_ROUTES[code]) {
      router.push(REGION_ROUTES[code]);
    }

    if (onRegionChange) {
      onRegionChange(code);
    }
  };

  const activeRegion =
    selectedRegion === "IN"
      ? DEFAULT_REGION
      : POPUP_REGIONS.find((r) => r.code === selectedRegion) || DEFAULT_REGION;

  const triggerCode = activeRegion.displayCode || activeRegion.code;
  const isServicePage =
    showBackHome === null ? isRegionalServicePath(pathname) : Boolean(showBackHome);

  const goHome = () => {
    setIsOpen(false);
    clearStoredRegionCode();
    setSelectedRegion("IN");
  };

  const dropdown =
    mounted && isOpen
      ? createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label="Choose your region"
            style={{
              position: "fixed",
              top: menuPos.top,
              left: menuPos.left,
              zIndex: 200,
              width: menuPos.width,
              maxHeight: menuPos.maxHeight,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: 14,
              background: "#ffffff",
              padding: "10px 8px 8px",
              boxShadow: "0 12px 32px rgba(15,39,74,0.16)",
              border: "1px solid rgba(255,106,0,0.12)",
            }}
          >
            <p
              style={{
                margin: "0 0 6px",
                textAlign: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#9CA3AF",
              }}
            >
              Choose Your Region
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {POPUP_REGIONS.map((region) => {
                const isSelected = region.code === selectedRegion;
                return (
                  <button
                    key={region.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(region.code)}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      width: "100%",
                      margin: 0,
                      padding: "9px 10px",
                      border: "none",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: isSelected ? "#FFF7F0" : "transparent",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        width: 22,
                        height: 15,
                        flexShrink: 0,
                        overflow: "hidden",
                        borderRadius: 2,
                        border: "1px solid #E5E7EB",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={region.flag}
                        alt=""
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </span>

                    <span
                      style={{
                        width: 26,
                        flexShrink: 0,
                        fontSize: 12,
                        fontWeight: 800,
                        lineHeight: 1,
                        color: CODE,
                      }}
                    >
                      {region.displayCode || region.code}
                    </span>

                    <span
                      style={{
                        flex: 1,
                        minWidth: 0,
                        fontSize: 13,
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: NAVY,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {region.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>,
          document.body
        )
      : null;

  const shellClass = isDark
    ? "rounded-full border border-white/20 bg-white/10"
    : "rounded-full border border-[#D1D5DB] bg-white shadow-[0_2px_8px_rgba(15,39,74,0.06)]";

  if (isServicePage) {
    return (
      <div
        ref={rootRef}
        className={`relative inline-block shrink-0 text-left ${compact ? "w-full min-w-0" : ""} ${className}`}
      >
        <div
          className={`inline-flex max-w-full min-w-0 items-stretch overflow-hidden ${shellClass} ${
            compact ? "w-full" : ""
          } transition-shadow duration-200 ${
            isDark ? "" : "hover:shadow-[0_4px_14px_rgba(15,39,74,0.1)]"
          }`}
        >
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`inline-flex min-w-0 items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]/35 focus-visible:ring-inset ${
              compact ? "gap-1.5 px-2 py-1.5" : "gap-2 pl-2.5 pr-2.5 py-1.5"
            } ${isDark ? "hover:bg-white/10" : "hover:bg-[#FFF7F0]"}`}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-label={`Change region. Current: ${activeRegion.name}`}
          >
            <span
              className={`relative flex flex-shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_rgba(15,39,74,0.12)] ${
                isDark ? "border-white/70" : "border-[#E5E7EB]"
              } ${compact ? "h-3.5 w-5" : "h-4 w-[22px]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeRegion.flag}
                alt=""
                className="h-full w-full object-cover"
              />
            </span>

            <span
              className={`font-bold uppercase leading-none shrink-0 ${
                compact
                  ? "text-[10px] tracking-[0.12em]"
                  : "text-[11px] tracking-[0.14em]"
              } ${isDark ? "text-white" : "text-[#0F274A]"}`}
            >
              {triggerCode}
            </span>

            <svg
              className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-in-out ${
                isOpen ? "rotate-180" : ""
              } ${isDark ? "text-white/70" : "text-[#9CA3AF]"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <span
            className={`w-px self-stretch my-[7px] shrink-0 ${
              isDark ? "bg-white/20" : "bg-[#E5E7EB]"
            }`}
            aria-hidden="true"
          />

          <Link
            href="/"
            onClick={goHome}
            className={`inline-flex min-w-0 items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]/35 focus-visible:ring-inset transition-colors duration-200 ${
              compact ? "ml-auto px-2.5 py-1.5" : "pl-2.5 pr-3 py-1.5"
            } ${
              isDark
                ? "text-white/90 hover:bg-white/10 hover:text-white"
                : "text-[#0F274A] hover:bg-[#FFF7F0] hover:text-[#FF6A00]"
            }`}
            aria-label="Back to home"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 shrink-0"
              strokeWidth={2.4}
              aria-hidden="true"
            />
            <span className="text-[11px] font-bold uppercase leading-none tracking-[0.12em] whitespace-nowrap">
              Back to Home
            </span>
          </Link>
        </div>

        {dropdown}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`inline-flex max-w-full items-center cursor-pointer focus:outline-none transition-all duration-200 min-w-0 ${
          isDark
            ? `rounded-full border border-white/20 bg-white/10 hover:bg-white/15 ${
                compact
                  ? "px-1.5 py-1 gap-1 sm:px-2 sm:py-1.5 sm:gap-1.5"
                  : "px-2.5 py-1.5 gap-2"
              }`
            : `rounded-full border border-[#D1D5DB] bg-white shadow-[0_2px_8px_rgba(15,39,74,0.06)] hover:shadow-[0_4px_12px_rgba(15,39,74,0.1)] ${
                compact
                  ? "px-1.5 py-1 gap-1 sm:px-2.5 sm:py-1.5 sm:gap-2"
                  : "px-2.5 py-1.5 gap-2"
              }`
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Region: ${activeRegion.name}`}
      >
        {minimize || compact ? (
          <>
            <div
              className={`relative flex flex-shrink-0 overflow-hidden rounded-sm border shadow-xs ${
                isDark ? "border-white/80" : "border-[#E5E7EB]"
              } ${compact ? "h-3.5 w-5" : "h-3.5 w-5"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeRegion.flag}
                alt={activeRegion.name}
                className="h-full w-full object-cover"
              />
            </div>

            {compact && !minimize && !showLabel ? (
              <div
                className="hidden sm:flex items-center gap-0.5 flex-shrink-0"
                aria-hidden="true"
              >
                {COMPACT_FLAGS.filter((r) => r.code !== activeRegion.code)
                  .slice(0, 4)
                  .map((region) => (
                    <span
                      key={region.code}
                      className="inline-flex h-[11px] w-4 flex-shrink-0 overflow-hidden rounded-sm border border-white/70 bg-white"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={region.flag}
                        alt=""
                        className="block h-full w-full object-cover"
                        loading="lazy"
                        draggable={false}
                      />
                    </span>
                  ))}
              </div>
            ) : null}
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {TRIGGER_FLAGS.slice(0, 5).map((region) => (
                <span
                  key={region.code}
                  style={{
                    display: "inline-flex",
                    width: 16,
                    height: 11,
                    flexShrink: 0,
                    overflow: "hidden",
                    borderRadius: 2,
                    border: "1px solid #E5E7EB",
                    background: "#fff",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={region.flag}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    draggable={false}
                  />
                </span>
              ))}
            </div>

            <span
              className={`h-3.5 w-px shrink-0 ${isDark ? "bg-white/25" : "bg-[#D1D5DB]"}`}
              aria-hidden="true"
            />

            <span
              className={`inline-flex items-center justify-center shrink-0 ${
                isDark ? "text-white/80" : "text-[#6B7280]"
              }`}
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path
                  d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </>
        )}

        <span
          className={`font-bold uppercase leading-none shrink-0 ${
            compact
              ? "text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em]"
              : "text-[11px] tracking-[0.14em]"
          } ${isDark ? "text-white" : "text-[#374151]"}`}
        >
          {minimize || compact ? triggerCode : "Regions"}
        </span>

        <svg
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          } ${isDark ? "text-white/70" : "text-[#6B7280]"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {dropdown}
    </div>
  );
}
