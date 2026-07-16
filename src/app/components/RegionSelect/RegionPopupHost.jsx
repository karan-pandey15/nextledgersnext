"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import RegionPopup from "./RegionPopup";
import { REGION_ROUTES } from "./regionData";

const REGION_POPUP_DELAY_MS = 30000; // 30s fallback if section not reached
const TRUSTED_SECTION_ID = "trusted-by-businesses";
const SESSION_KEY = "nl-region-popup-shown";

/**
 * Site-wide region popup.
 * Opens when the user scrolls to "Trusted by Businesses Across 9+ Countries",
 * or after 30 seconds if they never reach that section.
 * Shows at most once per browser session.
 */
export default function RegionPopupHost() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("US");
  const triggeredRef = useRef(false);
  const timerRef = useRef(null);
  const observerRef = useRef(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("selected-region");
    if (saved) setSelectedRegion(saved);
  }, []);

  // 30s fallback — starts once on mount, not reset on route changes
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        triggeredRef.current = true;
        return undefined;
      }
    } catch {
      /* ignore */
    }

    if (triggeredRef.current) return undefined;

    timerRef.current = window.setTimeout(openPopup, REGION_POPUP_DELAY_MS);

    return () => {
      clearTimer();
    };
  }, [openPopup, clearTimer]);

  // Scroll trigger — watch the Trusted by Businesses section when present (home)
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        triggeredRef.current = true;
        return undefined;
      }
    } catch {
      /* ignore */
    }

    if (triggeredRef.current) return undefined;

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
  }, [pathname, openPopup, clearObserver]);

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
