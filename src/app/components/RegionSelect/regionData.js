export const POPUP_REGIONS = [
  {
    code: "UK",
    displayCode: "GB",
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    description: "Tailored services for UK businesses",
  },
  {
    code: "US",
    displayCode: "US",
    name: "United States",
    flag: "https://flagcdn.com/us.svg",
    description: "Accounting solutions for US businesses",
  },
  {
    code: "IE",
    displayCode: "IE",
    name: "Ireland",
    flag: "https://flagcdn.com/ie.svg",
    description: "Compliant services for Irish businesses",
  },
  {
    code: "AU",
    displayCode: "AU",
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    description: "Supporting businesses across Australia",
  },
  {
    code: "CA",
    displayCode: "CA",
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    description: "Expert accounting for Canadian businesses",
  },
  {
    code: "NZ",
    displayCode: "NZ",
    name: "New Zealand",
    flag: "https://flagcdn.com/nz.svg",
    description: "Dedicated support for NZ businesses",
  },
  {
    code: "NL",
    displayCode: "NL",
    name: "Netherlands",
    flag: "https://flagcdn.com/nl.svg",
    description: "Dedicated support for Dutch businesses",
  },
  {
    code: "AE",
    displayCode: "AE",
    name: "United Arab Emirates",
    flag: "https://flagcdn.com/ae.svg",
    description: "Accounting solutions for UAE businesses",
  },
  {
    code: "SG",
    displayCode: "SG",
    name: "Singapore",
    flag: "https://flagcdn.com/sg.svg",
    description: "Expert support for Singapore businesses",
  },
];

/** Default trigger when no region is chosen — India HQ (flag + IN only) */
export const DEFAULT_REGION = {
  code: "IN",
  displayCode: "IN",
  name: "India",
  flag: "https://flagcdn.com/in.svg",
  description: "NextLedgers headquarters",
};

export const REGION_ROUTES = {
  IN: "/",
  US: "/usa",
  CA: "/canada",
  UK: "/uk",
  IE: "/ireland",
  NL: "/netherlands",
  AE: "/uae",
  SG: "/singapore",
  AU: "/australia",
  NZ: "/new-zealand",
};
