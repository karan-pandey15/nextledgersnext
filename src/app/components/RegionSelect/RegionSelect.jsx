"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { POPUP_REGIONS, REGION_ROUTES } from "./regionData";

const NAVY = "#0F274A";
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
    }
  }, []);

  const updateMenuPosition = useCallback(() => {
    const trigger = rootRef.current;
    if (!trigger) return;

    const rect = trigger.getBoundingClientRect();
    const menuWidth = Math.min(340, window.innerWidth - 16);
    let left = rect.left;

    // Keep menu on-screen; prefer left-align with trigger (as in mockup)
    if (left + menuWidth > window.innerWidth - 8) {
      left = Math.max(8, rect.right - menuWidth);
    }
    if (left < 8) left = 8;

    setMenuPos({
      top: rect.bottom + 10,
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
    POPUP_REGIONS.find((r) => r.code === selectedRegion) || POPUP_REGIONS[1];

  const dropdown =
    mounted && isOpen
      ? createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label="Choose your region"
            style={{ top: menuPos.top, left: menuPos.left }}
            className="fixed z-[130] w-[min(92vw,320px)] rounded-[22px] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(15,39,74,0.16)] sm:w-[340px] sm:px-5 sm:py-6"
          >
            <p className="text-center text-[12px] font-bold uppercase tracking-[0.18em] text-[#9CA3AF] sm:text-[13px]">
              Choose Your Region
            </p>

            <ul className="mt-4 flex flex-col gap-0.5 sm:mt-5">
              {POPUP_REGIONS.map((region) => {
                const isSelected = region.code === selectedRegion;
                return (
                  <li key={region.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(region.code)}
                      className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2.5 text-left transition-colors duration-150 hover:bg-[#FFF7F0] sm:gap-3.5 sm:px-3 sm:py-3 ${
                        isSelected ? "bg-[#FFF7F0]" : ""
                      }`}
                    >
                      <div className="h-5 w-8 shrink-0 overflow-hidden rounded-[3px] border border-[#E5E7EB] shadow-sm sm:h-6 sm:w-9">
                        <img
                          src={region.flag}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span
                        className="w-7 shrink-0 text-[12px] font-extrabold sm:w-8 sm:text-[13px]"
                        style={{ color: "#5B4B8A" }}
                      >
                        {region.displayCode || region.code}
                      </span>
                      <span
                        className="min-w-0 flex-1 text-[13px] font-bold sm:text-[14px]"
                        style={{ color: NAVY }}
                      >
                        {region.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body
        )
      : null;

  return (
    <div ref={rootRef} className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`flex items-center gap-2 sm:gap-2.5 cursor-pointer focus:outline-none transition-all duration-200 ${
          isDark
            ? "rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 hover:bg-white/15"
            : "rounded-full border border-[#ECEFF3] bg-white px-3 py-1.5 shadow-[0_4px_14px_rgba(15,39,74,0.08)] hover:shadow-[0_6px_18px_rgba(15,39,74,0.12)]"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center">
          {minimize ? (
            <div className="relative flex h-3.5 w-5 flex-shrink-0 overflow-hidden rounded-sm border border-white/80 shadow-xs">
              <img
                src={activeRegion.flag}
                alt={activeRegion.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex items-center">
              {TRIGGER_FLAGS.map((region, index) => (
                <div
                  key={region.code}
                  className="relative overflow-hidden rounded-sm border border-white shadow-xs"
                  style={{
                    width: "18px",
                    height: "13px",
                    marginLeft: index === 0 ? "0px" : "-7px",
                    zIndex: TRIGGER_FLAGS.length - index,
                  }}
                >
                  <img
                    src={region.flag}
                    alt={region.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <span
          className={`font-bold text-[11px] tracking-[0.14em] uppercase ${
            isDark ? "text-white" : "text-[#0F274A]"
          }`}
        >
          {minimize ? selectedRegion : "Regions"}
        </span>

        <svg
          className={`h-3.5 w-3.5 text-[#F58220] transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
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
