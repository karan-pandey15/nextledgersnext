/** Circular orange icons from /public/images/homepagelogo */
export const HOME_LOGO_BASE = "/images/homepagelogo";

export function homeLogoSrc(n) {
  return `${HOME_LOGO_BASE}/${n}.png`;
}

/** Quote / Contact form field icons — same mapping on popup and /contact */
export const FORM_LOGOS = {
  header: 23,
  fullName: 24,
  company: 27,
  email: 25,
  phone: 1,
  country: 26,
  message: 3,
};

export const FORM_TRUST_LOGOS = [
  { title: "100% Secure", text: "Your information is safe with us", logo: 18 },
  { title: "Quick Response", text: "We reply within 24 hours", logo: 6 },
  { title: "Expert Team", text: "Experienced professionals ready to help", logo: 4 },
  { title: "Global Support", text: "Serving businesses worldwide", logo: 26 },
];

/** Team member modal highlight icons — keyed by highlight.icon name */
export const TEAM_HIGHLIGHT_LOGOS = {
  briefcase: 22, // projects / business growth
  building: 27, // office buildings
  globe: 26, // globe + pin
  shield: 18, // shield check
  file: 13, // certificate document
  gavel: 23, // tax / compliance document
  chart: 17, // analytics chart
  gear: 14, // sync / process
  handshake: 4, // people / relationships
  heart: 19, // excellence / stewardship
};

/**
 * Service page hero overlay stats — matched to /images/homepagelogo
 * 4  people/team     → Businesses / Firms Supported
 * 15 network nodes   → Software Integrations
 * 18 shield check    → Secure / Compliant Processes
 * 16 headset         → Dedicated Accounting / Support Team
 */
export const SERVICE_STAT_LOGOS = {
  businesses: 4,
  integrations: 15,
  secure: 18,
  dedicated: 16,
};

/** Default 4-stat bar used across global + regional service heroes */
export const DEFAULT_SERVICE_HERO_STATS = [
  { logo: SERVICE_STAT_LOGOS.businesses, value: "500+", label: "Businesses Supported" },
  { logo: SERVICE_STAT_LOGOS.integrations, value: "30+", label: "Software Integrations" },
  { logo: SERVICE_STAT_LOGOS.secure, value: "100%", label: "Secure Processes" },
  { logo: SERVICE_STAT_LOGOS.dedicated, value: "Dedicated", label: "Accounting Team" },
];

/** Navbar About dropdown — matched logos */
export const NAV_ABOUT_LOGOS = {
  aboutUs: 24, // professional person
  ourTeam: 4, // people / team
};

export function HomeLogoImg({
  n,
  alt = "",
  className = "block h-full w-full object-contain",
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={homeLogoSrc(n)} alt={alt} className={className} />
  );
}
