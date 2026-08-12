"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  clearStoredRegionCode,
  getRegionCodeFromPath,
  persistRegionCode,
  readStoredRegionCode,
} from "@/app/lib/regionNav";

/**
 * Current market region:
 * - On /uk, /usa, /canada, etc. → that region (also saved)
 * - On shared pages (about, byot, tools, contact, …) → last saved region
 * - Global home `/` → worldwide navbar and clears the saved region so
 *   About / BYOT / Tools / Contact use the global navbar afterward
 */
export default function useActiveRegion() {
  const pathname = usePathname();
  const isGlobalHome = pathname === "/";
  const fromPath = getRegionCodeFromPath(pathname);
  const [storedCode, setStoredCode] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (fromPath) {
      persistRegionCode(fromPath);
      setStoredCode(fromPath);
    } else if (isGlobalHome) {
      clearStoredRegionCode();
      setStoredCode(null);
    } else {
      setStoredCode(readStoredRegionCode());
    }
    setHydrated(true);
  }, [pathname, fromPath, isGlobalHome]);

  const rememberedCode = isGlobalHome ? null : fromPath || storedCode;

  return {
    regionCode: isGlobalHome ? null : rememberedCode,
    rememberedCode,
    ready: isGlobalHome || Boolean(fromPath) || hydrated,
    isGlobalHome,
  };
}
