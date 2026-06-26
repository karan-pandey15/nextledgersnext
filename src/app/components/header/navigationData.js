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
        icon: "building",
      },
      {
        label: "Our Team",
        href: "/about/team",
        icon: "users",
      },
    ],
  },
  {
    id: "services-usa",
    label: "Services In USA",
    href: "/services/usa",
    icon: "flag-usa",
    hasDropdown: true,
    dropdownWidth: "w-[440px]",
    dropdownItems: [
      {
        label: "Self-Directed & Nonprofit Accounting Services",
        href: "/services/usa/nonprofit",
        icon: "charity",
      },
      {
        label: "Bookkeeping Services For U.S Businesses",
        href: "/services/usa/bookkeeping",
        icon: "book",
      },
      {
        label: "U.S Tax Preparation Services - USA",
        href: "/services/usa/tax",
        icon: "tax",
      },
      {
        label: "Accounts Payable Services & Receivable Services - USA",
        href: "/services/usa/accounts-payable",
        icon: "card",
      },
      {
        label: "Year End Accounts Preparation, Strategic Advisory & CFO-Level-Services - USA",
        href: "/services/usa/cfo",
        icon: "chart",
      },
    ],
  },
  {
    id: "services-canada",
    label: "Services In Canada",
    href: "/services/canada",
    icon: "flag-canada",
    hasDropdown: true,
    dropdownWidth: "w-[440px]",
    dropdownItems: [
      {
        label: "Compilation Engagement Services",
        href: "/services/canada/compilation",
        icon: "document",
      },
      {
        label: "Review Engagement Services",
        href: "/services/canada/review",
        icon: "search",
      },
      {
        label: "Bookkeeping Services For Canada Businesses",
        href: "/services/canada/bookkeeping",
        icon: "book-open",
      },
      {
        label: "Investment Accounting Services in Canada",
        href: "/services/canada/investment",
        icon: "pie-chart",
      },
      {
        label: "CA Tax Preparation Services",
        href: "/services/canada/tax",
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
