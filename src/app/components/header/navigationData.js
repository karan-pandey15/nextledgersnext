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
    hasDropdown: false,
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    icon: "briefcase",
    hasDropdown: true,
    dropdownWidth: "w-[320px]",
    dropdownItems: [
      {
        label: "Bookkeeping Services",
        href: "/services/bookkeeping",
        icon: "book",
      },
      {
        label: "Tax Compliance & Filing",
        href: "/services/tax",
        icon: "tax",
      },
      {
        label: "Payroll Management",
        href: "/services/payroll",
        icon: "card",
      },
      {
        label: "Accounts & Reconciliations",
        href: "/services/accounts",
        icon: "document",
      },
      {
        label: "Financial Reporting & Analysis",
        href: "/services/reporting",
        icon: "chart",
      },
      {
        label: "Virtual Staffing Solutions",
        href: "/services/virtual-staffing",
        icon: "users",
      },
    ],
  },
  {
    id: "byot",
    label: "BYOT",
    href: "/byot",
    icon: "building",
    hasDropdown: false,
  },
  {
    id: "careers",
    label: "Careers",
    href: "/careers",
    icon: "users",
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
