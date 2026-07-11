/**
 * Home page navigation — USA experience (global header).
 * About has a dropdown; USA/Canada service items stay as placeholders until pages exist.
 */
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
    label: "About",
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
    id: "services-usa",
    label: "Services In USA",
    href: "#",
    icon: "flag-usa",
    hasDropdown: true,
    dropdownWidth: "w-[380px]",
    dropdownItems: [
      {
        label: "Self-Directed & Nonprofit Accounting Services",
        href: null,
        icon: "charity",
      },
      {
        label: "Bookkeeping Services For U.S Businesses",
        href: null,
        icon: "book",
      },
      {
        label: "U.S Tax Preparation Services - USA",
        href: null,
        icon: "tax",
      },
      {
        label: "Accounts Payable Services & Receivable Services - USA",
        href: null,
        icon: "card",
      },
      {
        label:
          "Year End Accounts Preparation, Strategic Advisory & CFO-Level-Services - USA",
        href: null,
        icon: "chart",
      },
    ],
  },
  {
    id: "services-canada",
    label: "Services in Canada",
    href: "#",
    icon: "flag-canada",
    hasDropdown: true,
    dropdownWidth: "w-[340px]",
    dropdownItems: [
      {
        label: "Compilation Engagement Services",
        href: null,
        icon: "document",
      },
      {
        label: "Review Engagement Services",
        href: null,
        icon: "search",
      },
      {
        label: "Bookkeeping Services For Canada Businesses",
        href: null,
        icon: "book-open",
      },
      {
        label: "Investment Accounting Services in Canada",
        href: null,
        icon: "pie-chart",
      },
      {
        label: "CA Tax Preparation Services",
        href: null,
        icon: "calculator",
      },
    ],
  },
  {
    id: "contact",
    label: "Contact Us",
    href: "/contact",
    icon: "mail",
    hasDropdown: false,
  },
];
