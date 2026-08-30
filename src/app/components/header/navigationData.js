/**
 * Home page navigation — global header.
 * Order: Home → About Us → Services → BYOT → Gallery → Contact Us
 * (Regions sits beside the nav via RegionSelect)
 */

import { NAV_ABOUT_LOGOS } from "@/app/lib/homePageLogos";

export const GLOBAL_SERVICE_LINKS = [
  {
    label: "Accounting & Bookkeeping",
    href: "/services/bookkeeping",
    icon: "book",
  },
  {
    label: "Financial Reporting",
    href: "/services/financial-reporting",
    icon: "chart",
  },
  {
    label: "Tax Preparation & Planning",
    href: "/services/tax",
    icon: "tax",
  },
  {
    label: "Payroll & HR Services",
    href: "/services/payroll",
    icon: "users",
  },
  {
    label: "Management Reporting",
    href: "/services/management-reporting",
    icon: "document",
  },
  {
    label: "CFO & Advisory Services",
    href: "/services/cfo-advisory",
    icon: "building",
  },
];

export const NAVIGATION_LINKS = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: "home",
    hasDropdown: false,
  },
  {
    id: "about",
    label: "About Us",
    href: "/about",
    icon: "info",
    hasDropdown: true,
    dropdownWidth: "w-[240px]",
    dropdownItems: [
      {
        label: "About Us",
        href: "/about",
        logo: NAV_ABOUT_LOGOS.aboutUs,
      },
      {
        label: "Our Team",
        href: "/team",
        logo: NAV_ABOUT_LOGOS.ourTeam,
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    icon: "briefcase",
    hasDropdown: true,
    dropdownLayout: "services-list",
    dropdownWidth: "w-[300px]",
    dropdownItems: GLOBAL_SERVICE_LINKS,
  },
  {
    id: "byot",
    label: "BYOT",
    href: "/byot",
    icon: "users",
    hasDropdown: false,
  },
  {
    id: "gallery",
    label: "Gallery",
    href: "/gallery",
    icon: "book",
    hasDropdown: false,
  },
  {
    id: "contact",
    label: "Contact Us",
    href: "/contact",
    icon: "mail",
    hasDropdown: false,
  },
];
