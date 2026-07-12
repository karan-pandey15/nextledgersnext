import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";

/**
 * Home page navigation — global header.
 * USA services come from the canonical USA_SERVICE_LINKS list.
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
    href: "/usa",
    icon: "flag-usa",
    hasDropdown: true,
    dropdownLayout: "cards",
    dropdownWidth: "usa-services-dropdown",
    dropdownItems: USA_SERVICE_LINKS.map((service) => ({
      label: service.label,
      href: service.href,
      icon: service.icon,
      blurb: service.blurb,
    })),
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
