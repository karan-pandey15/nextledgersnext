/**
 * Dummy detail fields for the team member modal.
 * Real card data (name, role, image, credentials) is merged on top.
 * Replace these placeholders per member when real content is ready:
 *   bio, email, linkedin, quote, highlights, companyRole, title
 */

export const DEFAULT_HIGHLIGHTS = [
  { value: "115+", label: "Projects Delivered", icon: "briefcase" },
  { value: "Financial", label: "Financial Reporting", icon: "building" },
  { value: "6+", label: "Client-Centric Approach", icon: "globe" },
  { value: "Quality", label: "Quality & Compliance", icon: "shield" },
];

export const DEFAULT_QUOTE =
  "Accuracy, consistency, and commitment are the foundations of lasting client relationships.";

export const DEFAULT_EMAIL = "info@nextledgers.com";
export const DEFAULT_LINKEDIN = "https://www.linkedin.com/company/next-ledgers";

/** Strip trailing credential tokens from a display name for headings. */
export function getCleanDisplayName(name = "") {
  return name
    .replace(/,?\s*(ACCA|CPA|CMA|MBA|EA|CGMA|M\.com|Finance)(\s|,|$)/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function inferCompanyRole(role = "") {
  if (/managing\s+partner/i.test(role)) return "Managing Partner, Next Ledgers.";
  if (/partner/i.test(role)) return "Partner, Next Ledgers.";
  if (/manager/i.test(role)) return "Manager, Next Ledgers.";
  return "Team Member, Next Ledgers.";
}

/**
 * Merge card data with dummy defaults.
 * Pass optional overrides on a member object later (bio, email, linkedin, quote, highlights, companyRole, title).
 */
export function getTeamMemberDetails(member) {
  if (!member) return null;

  const displayName = getCleanDisplayName(member.name);
  const firstName = displayName.split(" ")[0] || "Team Member";

  const resolvedBio = member.bio
    ? Array.isArray(member.bio)
      ? member.bio
      : [member.bio]
    : [
        `${displayName} is a valued member of Next Ledgers, specializing in accounting and financial reporting for clients across North America. With a strong foundation in financial operations and compliance, ${firstName} brings precision and clarity to every engagement.`,
        `${firstName} has extensive experience supporting businesses with accounting processes, financial reporting, and regulatory compliance. The approach focuses on accuracy, transparency, and delivering insights that help clients make informed decisions.`,
        `${firstName} is committed to building long-term client relationships through consistent delivery, proactive communication, and a deep understanding of business needs.`,
      ];

  return {
    name: member.name,
    displayName,
    image: member.image || "",
    /** Subtitle under the name — use real role from the card */
    title: member.title || member.role || "",
    credentials: member.credentials || "",
    companyRole: member.companyRole || inferCompanyRole(member.role),
    email: member.email || DEFAULT_EMAIL,
    linkedin: member.linkedin || DEFAULT_LINKEDIN,
    bio: resolvedBio,
    highlights: member.highlights || DEFAULT_HIGHLIGHTS,
    quote: member.quote || DEFAULT_QUOTE,
  };
}
