import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const V = "v4";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

const pick = (...labels) =>
  labels
    .map((label) => {
      const found = findIndustry(label);
      if (found) return { ...found, label };
      return null;
    })
    .filter((i) => i && i.src);

/** Personal Tax — client types mapped to closest industry icons */
const clientType = (label, iconLabel) => {
  const found = findIndustry(iconLabel);
  return {
    label,
    src: found?.src || `/images/industry-icons/professional-services.png?${V}`,
  };
};

/** 1 — Bookkeeping */
export const UK_BOOKKEEPING_INDUSTRIES = pick(
  "E-commerce",
  "Real Estate",
  "Hospitality",
  "Restaurants",
  "Technology",
  "Manufacturing",
  "Logistics & Transportation",
  "Construction",
  "Professional Services",
  "Healthcare",
  "Startups & SMEs",
  "Consulting"
);

/** 2 — Management Accounts & Financial Reporting */
export const UK_MANAGEMENT_ACCOUNTS_INDUSTRIES = pick(
  "Manufacturing",
  "Technology",
  "E-commerce",
  "Construction",
  "Logistics & Transportation",
  "Hospitality",
  "Real Estate",
  "Professional Services",
  "Consulting",
  "Healthcare",
  "Startups & SMEs",
  "Education"
);

/** 3 — Payroll & CIS */
export const UK_PAYROLL_INDUSTRIES = pick(
  "Construction",
  "Hospitality",
  "Restaurants",
  "Healthcare",
  "Manufacturing",
  "Logistics & Transportation",
  "Education",
  "Professional Services",
  "Automotive",
  "Fitness & Wellness",
  "Entertainment",
  "Non-Profit Organizations"
);

/** 4 — Personal Tax (client types) */
export const UK_PERSONAL_TAX_INDUSTRIES = [
  clientType("Company Directors", "Professional Services"),
  clientType("Self-Employed", "Startups & SMEs"),
  clientType("Contractors", "Consulting"),
  clientType("Landlords", "Real Estate"),
  clientType("Medical Professionals", "Healthcare"),
  clientType("IT Professionals", "Technology"),
  clientType("Consultants", "Consulting"),
  clientType("Lawyers", "Law Firms"),
  clientType("Teachers", "Education"),
  clientType("Business Owners", "Startups & SMEs"),
  clientType("Investors", "Real Estate"),
  clientType("High Net Worth Individuals", "Professional Services"),
];

/** 5 — Business Advisory & Virtual CFO */
export const UK_BUSINESS_ADVISORY_INDUSTRIES = pick(
  "Technology",
  "Startups & SMEs",
  "Manufacturing",
  "E-commerce",
  "Real Estate",
  "Construction",
  "Professional Services",
  "Consulting",
  "Healthcare",
  "Logistics & Transportation",
  "Hospitality",
  "Education"
);

/** 6 — Company Formation & Company Secretarial */
export const UK_COMPANY_FORMATION_INDUSTRIES = pick(
  "Startups & SMEs",
  "Technology",
  "Consulting",
  "Professional Services",
  "E-commerce",
  "Real Estate",
  "Healthcare",
  "Law Firms",
  "Manufacturing",
  "Logistics & Transportation",
  "Education",
  "Non-Profit Organizations"
);

/** 7 — VAT & Making Tax Digital */
export const UK_VAT_INDUSTRIES = pick(
  "E-commerce",
  "Construction",
  "Hospitality",
  "Restaurants",
  "Manufacturing",
  "Logistics & Transportation",
  "Automotive",
  "Real Estate",
  "Technology",
  "Professional Services",
  "Healthcare",
  "Startups & SMEs"
);

/** 8 — Year-End Accounts & Corporation Tax */
export const UK_YEAR_END_INDUSTRIES = pick(
  "Technology",
  "Manufacturing",
  "E-commerce",
  "Construction",
  "Real Estate",
  "Hospitality",
  "Professional Services",
  "Consulting",
  "Healthcare",
  "Logistics & Transportation",
  "Education",
  "Startups & SMEs"
);
