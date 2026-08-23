"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  POPUP_REGIONS,
  REGION_ROUTES,
  DEFAULT_REGION,
  getRegionCodeFromPath,
} from "./regionData";
import {
  clearStoredRegionCode,
  persistRegionCode,
  readStoredRegionCode,
  siteHomeHref,
} from "@/app/lib/regionNav";

const NAVY = "#0F274A";
const CODE = "#5B4B8A";
const TRIGGER_FLAGS = POPUP_REGIONS;
const MENU_ESTIMATE = 400;
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
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  /** Default: India (IN) until user picks a market region */
  const [selectedRegion, setSelectedRegion] = useState(
    () => getRegionCodeFromPath(pathname) || "IN"
  );
  const [menuPos, setMenuPos] = useState({
    top: 0,
    left: 0,
    width: 280,
    maxHeight: 320,
  });
  const [mounted, setMounted] = useState(false);
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
      Math.min(MENU_ESTIMATE, POPUP_REGIONS.length * 42 + 80);

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

  const activeRegion =
    selectedRegion === "IN"
      ? DEFAULT_REGION
      : POPUP_REGIONS.find((r) => r.code === selectedRegion) || DEFAULT_REGION;

  const regionHub =
    selectedRegion && selectedRegion !== "IN"
      ? REGION_ROUTES[selectedRegion]
      : null;
  const isMarketRegion = Boolean(regionHub);
  const backHref = isMarketRegion ? siteHomeHref(pathname, regionHub) : "/";

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
              padding: "8px",
              boxShadow: "0 12px 32px rgba(15,39,74,0.16)",
              border: "1px solid rgba(255,106,0,0.12)",
            }}
          >
            {isMarketRegion ? (
              <>
                <Link
                  href={backHref}
                  onClick={() => {
                    setIsOpen(false);
                    if (onRegionChange) onRegionChange(selectedRegion);
                  }}
                  className="flex items-center gap-1.5 rounded-[10px] px-2.5 py-2.5 text-[#0F274A] transition-colors hover:bg-[#FFF7F0] hover:text-[#FF6A00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00]/35"
                  aria-label="Back to Home"
                >
                  <ArrowLeft
                    className="h-3.5 w-3.5 shrink-0"
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-bold uppercase leading-none tracking-[0.12em] whitespace-nowrap">
                    Back To Home
                  </span>
                </Link>
                <div
                  style={{
                    height: 1,
                    margin: "4px 6px 2px",
                    background: "#F3F4F6",
                  }}
                  aria-hidden="true"
                />
              </>
            ) : null}

            <p
              style={{
                margin: isMarketRegion ? "6px 0 6px" : "2px 0 6px",
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
                const href = REGION_ROUTES[region.code] || "/";
                return (
                  <Link
                    key={region.code}
                    href={href}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      persistRegionCode(region.code);
                      setIsOpen(false);
                      onRegionChange?.(region.code);
                    }}
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
                      textDecoration: "none",
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
                  </Link>
                );
              })}
            </div>
          </div>,
          document.body
        )
      : null;

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
                  : "px-2 py-1 gap-1.5 sm:px-2.5 sm:py-1.5 sm:gap-2"
              }`
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={
          isMarketRegion
            ? `Choose Other Regions. Current: ${activeRegion.name}`
            : `Region: ${activeRegion.name}`
        }
      >
        {isMarketRegion ? (
          <span className="inline-flex min-w-0 items-center gap-2">
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
              className={`h-3.5 w-px shrink-0 ${isDark ? "bg-white/25" : "bg-[#D1D5DB]"}`}
              aria-hidden="true"
            />

            <span
              className={`min-w-0 whitespace-nowrap font-bold leading-none ${
                compact
                  ? "text-[10px] tracking-[0.01em] sm:text-[11px]"
                  : "text-[11px] tracking-[0.01em]"
              } ${isDark ? "text-white" : "text-[#0F274A]"}`}
            >
              Choose Other Regions
            </span>
          </span>
        ) : minimize || compact ? (
          showLabel ? (
            <>
              <div
                className={`relative flex flex-shrink-0 overflow-hidden rounded-sm border shadow-xs ${
                  isDark ? "border-white/80" : "border-[#E5E7EB]"
                } h-3.5 w-5`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeRegion.flag}
                  alt={activeRegion.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <span
                className={`min-w-0 truncate font-bold leading-none ${
                  compact ? "text-[10px] sm:text-[11px]" : "text-[11px]"
                } ${isDark ? "text-white" : "text-[#374151]"}`}
              >
                {activeRegion.name}
              </span>
            </>
          ) : (
            <span className="inline-flex min-w-0 items-center gap-1.5 sm:gap-2">
              <span
                className={`relative flex flex-shrink-0 overflow-hidden rounded-[3px] border shadow-[0_1px_2px_rgba(15,39,74,0.12)] ${
                  isDark ? "border-white/70" : "border-[#E5E7EB]"
                } h-3.5 w-5`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeRegion.flag}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>

              <span
                className={`h-3.5 w-px shrink-0 ${isDark ? "bg-white/25" : "bg-[#D1D5DB]"}`}
                aria-hidden="true"
              />

              <span
                className={`min-w-0 whitespace-nowrap font-bold uppercase leading-none text-[10px] tracking-[0.12em] sm:text-[11px] sm:tracking-[0.14em] ${
                  isDark ? "text-white" : "text-[#0F274A]"
                }`}
              >
                Regions
              </span>
            </span>
          )
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

            <span
              className={`font-bold uppercase leading-none shrink-0 whitespace-nowrap ${
                compact
                  ? "text-[9px] tracking-[0.1em] sm:text-[10px] sm:tracking-[0.12em]"
                  : "text-[10px] tracking-[0.12em] sm:text-[11px] sm:tracking-[0.14em]"
              } ${isDark ? "text-white" : "text-[#0F274A]"}`}
            >
              Regions
            </span>
          </>
        )}

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
