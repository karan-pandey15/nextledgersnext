/**
 * Home page navigation — global header.
 * Order: Home → About Us → Services → BYOT → Gallery → Contact Us
 * (Regions sits beside the nav via RegionSelect)
 */

export const GLOBAL_SERVICE_LINKS = [
  {
    label: "Accounting & Bookkeeping",
    href: "/#core-services",
    icon: "book",
  },
  {
    label: "Financial Reporting",
    href: "/#core-services",
    icon: "chart",
  },
  {
    label: "Tax Preparation & Planning",
    href: "/#core-services",
    icon: "tax",
  },
  {
    label: "Payroll & HR Services",
    href: "/#core-services",
    icon: "users",
  },
  {
    label: "Management Reporting",
    href: "/#core-services",
    icon: "document",
  },
  {
    label: "CFO & Advisory Services",
    href: "/#core-services",
    icon: "building",
  },
  {
    label: "Business Setup & Consulting",
    href: "/#core-services",
    icon: "briefcase",
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
        icon: "info",
      },
      {
        label: "Our Team",
        href: "/team",
        icon: "users",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    href: "/#core-services",
    icon: "briefcase",
    hasDropdown: true,
    dropdownLayout: "services-list",
    dropdownWidth: "w-[300px]",
    dropdownItems: GLOBAL_SERVICE_LINKS,
  },
  {
    id: "byot",
    label: "BYOT",
    href: "/tools",
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
