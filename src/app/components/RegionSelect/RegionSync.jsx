"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  getRegionCodeFromPath,
  persistRegionCode,
} from "@/app/lib/regionNav";

/**
 * Keeps the chosen market region in localStorage whenever the URL is
 * /uk, /usa, /canada, /ireland, /new-zealand, etc.
 * Shared pages (about, byot, tools, contact) do not overwrite it, so
 * Home can return to that region.
 */
export default function RegionSync() {
  const pathname = usePathname();

  useEffect(() => {
    const code = getRegionCodeFromPath(pathname);
    if (code) persistRegionCode(code);
  }, [pathname]);

  return null;
}
