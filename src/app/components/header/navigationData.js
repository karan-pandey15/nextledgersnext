import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";
import { CANADA_SERVICE_LINKS } from "@/app/canada/canadaServiceLinks";

/**
 * Home page navigation — global header.
 * USA/Canada services come from canonical regional service link lists.
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
    regionHub: {
      href: "/usa",
      label: "All USA Services",
      flagSrc: "https://flagcdn.com/w40/us.png",
      flagAlt: "United States flag",
    },
    dropdownItems: USA_SERVICE_LINKS.map((service) => ({
      label: service.label,
      href: service.href,
      icon: service.icon,
      blurb: service.blurb,
    })),
  },
  {
    id: "services-canada",
    label: "Services In Canada",
    href: "/canada",
    icon: "flag-canada",
    hasDropdown: true,
    dropdownLayout: "cards",
    dropdownWidth: "canada-services-dropdown",
    regionHub: {
      href: "/canada",
      label: "All Canada Services",
      flagSrc: "https://flagcdn.com/w40/ca.png",
      flagAlt: "Canada flag",
    },
    dropdownItems: CANADA_SERVICE_LINKS.map((service) => ({
      label: service.label,
      href: service.href,
      icon: service.icon,
      blurb: service.blurb,
    })),
  },
  {
    id: "contact",
    label: "Contact Us",
    href: "/contact",
    icon: "mail",
    hasDropdown: false,
  },
];
