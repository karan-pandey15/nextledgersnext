const COUNTRY_IN_HEADING =
  /\b(United Kingdom|United States|United Arab Emirates|New Zealand|Singapore|Netherlands|Australia|Australian|Ireland|Irish|Canada|Canadian|USA|UAE|UK|Dutch)\b/gi;

const OUTSOURCING_IN_HEADING = /\bOutsourc(?:ing|ed)\b/gi;
const OFFSHORE_IN_HEADING = /\b[Oo]ffshore\b/g;

/** Strip country names, Outsourcing, and Offshore from visible headings. */
export function cleanRegionHeading(value = "") {
  return String(value)
    .replace(/^Helping\s+/i, "")
    .replace(COUNTRY_IN_HEADING, " ")
    .replace(OUTSOURCING_IN_HEADING, " ")
    .replace(OFFSHORE_IN_HEADING, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,&/])/g, "$1")
    .replace(/([,&/])\s+/g, "$1 ")
    .replace(/^[\s,&/-]+|[\s,&/-]+$/g, "")
    .trim();
}

export function cleanHeroTitleParts({
  titleBefore = "",
  titleAccent = "",
  titleAfter = "",
} = {}) {
  const before = cleanRegionHeading(titleBefore);
  const accent = cleanRegionHeading(titleAccent);
  const after = cleanRegionHeading(titleAfter);
  return {
    before,
    accent: accent || after || "Services",
    after: accent ? after : "",
  };
}
