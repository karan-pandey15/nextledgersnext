import {
  REGION_ROUTES,
  getRegionCodeFromPath,
} from "@/app/components/RegionSelect/regionData";
import { UK_SERVICE_LINKS } from "@/app/uk/ukServiceLinks";
import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";
import { CANADA_SERVICE_LINKS } from "@/app/canada/canadaServiceLinks";
import { IRELAND_SERVICE_LINKS } from "@/app/ireland/irelandServiceLinks";
import { AUSTRALIA_SERVICE_LINKS } from "@/app/australia/australiaServiceLinks";
import { NEW_ZEALAND_SERVICE_LINKS } from "@/app/new-zealand/newZealandServiceLinks";
import { NETHERLANDS_SERVICE_LINKS } from "@/app/netherlands/netherlandsServiceLinks";
import { UAE_SERVICE_LINKS } from "@/app/uae/uaeServiceLinks";
import { SINGAPORE_SERVICE_LINKS } from "@/app/singapore/singaporeServiceLinks";

export { getRegionCodeFromPath };

export const REGION_STORAGE_KEY = "selected-region";

/** Navbar config for every market region */
export const REGION_NAV_BY_CODE = {
  UK: {
    homePath: "/uk",
    servicesLabel: "Services in UK",
    serviceLinks: UK_SERVICE_LINKS,
    flagCode: "gb",
    backLabel: "Back To UK",
    regionName: "UK",
    navbar: "uk",
  },
  US: {
    homePath: "/usa",
    servicesLabel: "Services in USA",
    serviceLinks: USA_SERVICE_LINKS,
    flagCode: "us",
    backLabel: "Back To USA",
    regionName: "USA",
    navbar: "usa",
  },
  CA: {
    homePath: "/canada",
    servicesLabel: "Services in Canada",
    serviceLinks: CANADA_SERVICE_LINKS,
    flagCode: "ca",
    backLabel: "Back To Canada",
    regionName: "Canada",
    navbar: "canada",
  },
  IE: {
    homePath: "/ireland",
    servicesLabel: "Services in Ireland",
    serviceLinks: IRELAND_SERVICE_LINKS,
    flagCode: "ie",
    backLabel: "Back To Ireland",
    regionName: "Ireland",
    navbar: "regional",
  },
  AU: {
    homePath: "/australia",
    servicesLabel: "Services in Australia",
    serviceLinks: AUSTRALIA_SERVICE_LINKS,
    flagCode: "au",
    backLabel: "Back To Australia",
    regionName: "Australia",
    navbar: "regional",
  },
  NZ: {
    homePath: "/new-zealand",
    servicesLabel: "Services in New Zealand",
    serviceLinks: NEW_ZEALAND_SERVICE_LINKS,
    flagCode: "nz",
    backLabel: "Back To New Zealand",
    regionName: "New Zealand",
    navbar: "regional",
  },
  NL: {
    homePath: "/netherlands",
    servicesLabel: "Services in Netherlands",
    serviceLinks: NETHERLANDS_SERVICE_LINKS,
    flagCode: "nl",
    backLabel: "Back To Netherlands",
    regionName: "Netherlands",
    navbar: "regional",
  },
  AE: {
    homePath: "/uae",
    servicesLabel: "Services in UAE",
    serviceLinks: UAE_SERVICE_LINKS,
    flagCode: "ae",
    backLabel: "Back To UAE",
    regionName: "UAE",
    navbar: "regional",
  },
  SG: {
    homePath: "/singapore",
    servicesLabel: "Services in Singapore",
    serviceLinks: SINGAPORE_SERVICE_LINKS,
    flagCode: "sg",
    backLabel: "Back To Singapore",
    regionName: "Singapore",
    navbar: "regional",
  },
};

export function readStoredRegionCode() {
  try {
    const saved = localStorage.getItem(REGION_STORAGE_KEY);
    if (saved && saved !== "IN" && REGION_NAV_BY_CODE[saved]) return saved;
  } catch {
    /* ignore */
  }
  return null;
}

export function persistRegionCode(code) {
  try {
    if (code) localStorage.setItem(REGION_STORAGE_KEY, code);
  } catch {
    /* ignore */
  }
}

export function regionHomePath(code) {
  if (!code || code === "IN") return "/";
  return REGION_ROUTES[code] || "/";
}

export function regionFooterKey(code) {
  const path = regionHomePath(code);
  if (!path || path === "/") return null;
  return path.replace(/^\//, "");
}

/** On a region hub (/uk, /usa, …) Home + logo go to global `/`. */
export function isRegionHubPath(pathname, homePath) {
  if (!pathname || !homePath) return false;
  return pathname === homePath || pathname === `${homePath}/`;
}

export function siteHomeHref(pathname, regionHome) {
  if (isRegionHubPath(pathname, regionHome)) return "/";
  return regionHome || "/";
}

export function isNavLinkActive(pathname, href, homePath) {
  if (!pathname || !href) return false;
  const path = href.split("#")[0];
  if (!path) return false;

  const isExactHome = path === "/" || (homePath && path === homePath);
  if (isExactHome) {
    return pathname === path || pathname === `${path}/`;
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
