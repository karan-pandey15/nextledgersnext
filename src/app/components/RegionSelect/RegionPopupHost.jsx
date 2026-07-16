"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import RegionPopup from "./RegionPopup";
import { REGION_ROUTES } from "./regionData";

const REGION_POPUP_DELAY_MS = 20000; // 20s on any page

/**
 * Site-wide region popup — opens once after 20s, regardless of current route.
 */
export default function RegionPopupHost() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("US");
  const triggeredRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("selected-region");
    if (saved) setSelectedRegion(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const open = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      setIsOpen(true);
    };

    const timer = window.setTimeout(open, REGION_POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSelect = useCallback(
    (code) => {
      setSelectedRegion(code);
      localStorage.setItem("selected-region", code);
      setIsOpen(false);

      const route = REGION_ROUTES[code];
      if (route && route !== "/") {
        router.push(route);
      }
    },
    [router]
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <RegionPopup
      isOpen={isOpen}
      onClose={handleClose}
      onSelect={handleSelect}
      selectedCode={selectedRegion}
    />
  );
}
