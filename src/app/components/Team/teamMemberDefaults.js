/**
 * Dummy detail fields for the team member modal.
 * Real card data (name, role, image, credentials) is merged on top.
 * Replace these placeholders per member when real content is ready:
 *   bio, email, linkedin, quote, highlights, companyRole, title
 */

export const DEFAULT_HIGHLIGHTS = [
  { value: "115+", label: "Projects Delivered", icon: "briefcase" },
  { value: "Financial", label: "Reporting", icon: "building" },
  { value: "6+", label: "Countries Served", icon: "globe" },
  { value: "100%", label: "Quality & Compliance", icon: "shield" },
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

/**
 * Merge card data with dummy defaults.
 * Pass optional overrides on a member object later (bio, email, linkedin, quote, highlights, companyRole, title).
 * companyRole (below diamond in modal) = designation — never "Partner, Next Ledgers."
 */
/** Normalize LinkedIn profile / company URLs for navigation. */
export function toLinkedInHref(url) {
  if (!url) return DEFAULT_LINKEDIN;
  let value = String(url).trim();
  if (!value) return DEFAULT_LINKEDIN;
  value = value.replace(/^https?:\/\//i, "").replace(/^\/+/, "");
  if (!/^linkedin\.com\//i.test(value) && !/^www\.linkedin\.com\//i.test(value)) {
    value = value.replace(/^in\//i, "linkedin.com/in/");
  }
  if (!/^www\./i.test(value)) {
    value = `www.${value.replace(/^linkedin\.com/i, "linkedin.com")}`;
  }
  return `https://${value}`;
}

export function toMailHref(email) {
  const address = (email || DEFAULT_EMAIL).trim();
  return `mailto:${address}`;
}

export function getTeamMemberDetails(member) {
  if (!member) return null;

  const displayName = getCleanDisplayName(member.name);
  const firstName = displayName.split(" ")[0] || "Team Member";
  /** Degree under the name — fallback M.Com when missing */
  const rawCredentials = (member.credentials || "").trim();
  const degree = rawCredentials || "M.Com";
  /** Sidebar / card title — keep full name including ACCA/CPA suffix */
  const headingName = (member.name || displayName).trim();
  /**
   * ABOUT header — e.g. "Shivam Baranwal ACCA"
   * No comma; drop "Member"; prefer name when it already has the credential.
   */
  const aboutHeading = /\b(ACCA|CPA|CMA|MBA|EA|CGMA)\b/i.test(member.name || "")
    ? headingName
    : (() => {
        const shortCred = (rawCredentials.split("|")[0] || rawCredentials)
          .replace(/\bMember\b/gi, "")
          .replace(/\s+/g, " ")
          .trim();
        return shortCred ? `${displayName} ${shortCred}` : displayName;
      })();

  const resolvedBio = member.bio
    ? Array.isArray(member.bio)
      ? member.bio
      : [member.bio]
    : [
        `${displayName} is a valued member of Next Ledgers, specializing in accounting and financial reporting for clients across North America. With a strong foundation in financial operations and compliance, ${firstName} brings precision and clarity to every engagement.`,
        `${firstName} has extensive experience supporting businesses with accounting processes, financial reporting, and regulatory compliance. The approach focuses on accuracy, transparency, and delivering insights that help clients make informed decisions.`,
        `${firstName} is committed to building long-term client relationships through consistent delivery, proactive communication, and a deep understanding of business needs.`,
      ];

  /**
   * Designation under the orange line — title only (no region suffix).
   * Prefer companyRole; if "Title - Region" is present, keep only the title.
   */
  const designationSource = (member.companyRole || member.role || "").trim();
  const designationParts = designationSource
    .split(/\s*[-–—]\s*/)
    .map((p) => p.trim())
    .filter(Boolean);
  const designationLines = member.designationLines || (designationParts[0] ? [designationParts[0]] : []);

  return {
    name: member.name,
    displayName,
    headingName,
    aboutHeading,
    image: member.image || "",
    avatarVariant: member.avatarVariant || "",
    title: member.title || member.role || "",
    credentials: degree,
    /** Degree under the name (credentials, fallback M.Com) */
    degree,
    /** Designation lines under the orange diamond divider */
    designationLines,
    companyRole: designationSource,
    email: member.email || DEFAULT_EMAIL,
    mailHref: toMailHref(member.email),
    linkedin: toLinkedInHref(member.linkedin),
    bio: resolvedBio,
    highlights: member.highlights || DEFAULT_HIGHLIGHTS,
    quote: member.quote || DEFAULT_QUOTE,
  };
}
