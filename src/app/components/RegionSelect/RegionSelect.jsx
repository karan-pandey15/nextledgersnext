"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { POPUP_REGIONS, REGION_ROUTES } from "./regionData";

const NAVY = "#0F274A";
const CODE = "#5B4B8A";
const TRIGGER_FLAGS = POPUP_REGIONS;

export default function RegionSelect({
  onRegionChange,
  className = "",
  minimize = false,
  variant = "light",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("US");
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const isDark = variant === "dark";
  const rootRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("selected-region");
    if (saved && POPUP_REGIONS.some((r) => r.code === saved)) {
      setSelectedRegion(saved);
    } else if (saved === "IN") {
      localStorage.removeItem("selected-region");
    }
  }, []);

  const updateMenuPosition = useCallback(() => {
    const trigger = rootRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const menuWidth = Math.min(280, window.innerWidth - 16);
    let left = rect.right - menuWidth;

    if (left < 8) left = 8;
    if (left + menuWidth > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - menuWidth - 8);
    }

    setMenuPos({
      top: rect.bottom + 6,
      left,
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    updateMenuPosition();

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
    document.addEventListener("touchstart", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onReposition);
    window.addEventListener("scroll", onReposition, true);

    return () => {
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
    localStorage.setItem("selected-region", code);

    if (REGION_ROUTES[code]) {
      router.push(REGION_ROUTES[code]);
    }

    if (onRegionChange) {
      onRegionChange(code);
    }
  };

  const activeRegion =
    POPUP_REGIONS.find((r) => r.code === selectedRegion) || POPUP_REGIONS[0];

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
              zIndex: 130,
              width: "min(92vw, 280px)",
              borderRadius: 16,
              background: "#ffffff",
              padding: "12px 10px 10px",
              boxShadow: "0 12px 32px rgba(15,39,74,0.14)",
            }}
          >
            <p
              style={{
                margin: "0 0 8px",
                textAlign: "center",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#9CA3AF",
              }}
            >
              Choose Your Region
            </p>

            {/* Single-column list — flag | code | name (matches reference) */}
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
                      padding: "8px 10px",
                      border: "none",
                      borderRadius: 10,
                      cursor: "pointer",
                      background: isSelected ? "#FFF7F0" : "transparent",
                      textAlign: "left",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FFF7F0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isSelected
                        ? "#FFF7F0"
                        : "transparent";
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

  return (
    <div
      ref={rootRef}
      className={`relative inline-block text-left ${className}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`inline-flex items-center cursor-pointer focus:outline-none transition-all duration-200 ${
          isDark
            ? "rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 gap-2 hover:bg-white/15"
            : "rounded-full border border-[#D1D5DB] bg-white px-2.5 py-1.5 gap-2 shadow-[0_2px_8px_rgba(15,39,74,0.06)] hover:shadow-[0_4px_12px_rgba(15,39,74,0.1)]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {minimize ? (
          <div className="relative flex h-3.5 w-5 flex-shrink-0 overflow-hidden rounded-sm border border-white/80 shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeRegion.flag}
              alt={activeRegion.name}
              className="h-full w-full object-cover"
            />
          </div>
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
              {TRIGGER_FLAGS.map((region) => (
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
          className={`font-bold text-[11px] tracking-[0.14em] uppercase leading-none ${
            isDark ? "text-white" : "text-[#374151]"
          }`}
        >
          {minimize ? selectedRegion : "Regions"}
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
