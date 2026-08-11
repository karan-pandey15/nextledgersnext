"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import RegionPopup from "./RegionPopup";
import { REGION_ROUTES } from "./regionData";
import { persistRegionCode } from "@/app/lib/regionNav";

const REGION_POPUP_DELAY_MS = 25000; // 25s on non-home pages
const TRUSTED_SECTION_ID = "trusted-by-businesses";
const SESSION_KEY = "nl-region-popup-shown";

/**
 * Site-wide region popup.
 * Home: opens when the user scrolls to "Trusted by Businesses Across 9+ Countries".
 * All other pages: opens after 25 seconds.
 * Shows at most once per browser session.
 */
export default function RegionPopupHost() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("IN");
  const triggeredRef = useRef(false);
  const timerRef = useRef(null);
  const observerRef = useRef(null);

  const isHome = pathname === "/";

  const clearObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current != null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const openPopup = useCallback(() => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    clearTimer();
    clearObserver();
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setIsOpen(true);
  }, [clearTimer, clearObserver]);

  const alreadyShown = useCallback(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        triggeredRef.current = true;
        return true;
      }
    } catch {
      /* ignore */
    }
    return triggeredRef.current;
  }, []);

  // Sync selected region with route (home → IN) + non-home popup timer
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    if (isHome) {
      setSelectedRegion("IN");
      clearTimer();
      return undefined;
    }

    try {
      const saved = localStorage.getItem("selected-region");
      if (saved) setSelectedRegion(saved);
    } catch {
      /* ignore */
    }

    if (alreadyShown()) return undefined;

    clearTimer();
    timerRef.current = window.setTimeout(openPopup, REGION_POPUP_DELAY_MS);

    return () => {
      clearTimer();
    };
  }, [isHome, pathname, openPopup, clearTimer, alreadyShown]);

  // Home only: open when scrolling to Trusted by Businesses section
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (!isHome) {
      clearObserver();
      return undefined;
    }
    if (alreadyShown()) return undefined;

    clearObserver();

    const attachObserver = () => {
      if (triggeredRef.current || observerRef.current) return;

      const section = document.getElementById(TRUSTED_SECTION_ID);
      if (!section) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry?.isIntersecting) return;
          openPopup();
        },
        {
          root: null,
          threshold: 0.35,
          rootMargin: "0px 0px -10% 0px",
        }
      );
      observerRef.current.observe(section);
    };

    attachObserver();
    const retryId = window.setTimeout(attachObserver, 400);
    const retryId2 = window.setTimeout(attachObserver, 1200);

    return () => {
      window.clearTimeout(retryId);
      window.clearTimeout(retryId2);
      clearObserver();
    };
  }, [isHome, pathname, openPopup, clearObserver, alreadyShown]);

  const handleSelect = useCallback(
    (code) => {
      setSelectedRegion(code);
      persistRegionCode(code);
      setIsOpen(false);

      const route = REGION_ROUTES[code];
      if (route) {
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
