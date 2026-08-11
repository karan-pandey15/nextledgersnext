"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  getRegionCodeFromPath,
  persistRegionCode,
  readStoredRegionCode,
} from "@/app/lib/regionNav";

/**
 * Current market region:
 * - On /uk, /usa, /canada, etc. → that region (also saved)
 * - On shared pages (about, byot, tools, contact, …) → last saved region
 * - Global home `/` → navbar is worldwide, but the saved region is kept
 *   so About / BYOT / Tools / Contact still return Home to that market.
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
    } else {
      setStoredCode(readStoredRegionCode());
    }
    setHydrated(true);
  }, [pathname, fromPath]);

  const rememberedCode = fromPath || storedCode;

  return {
    regionCode: isGlobalHome ? null : rememberedCode,
    rememberedCode,
    ready: isGlobalHome || Boolean(fromPath) || hydrated,
    isGlobalHome,
  };
}
