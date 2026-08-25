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
