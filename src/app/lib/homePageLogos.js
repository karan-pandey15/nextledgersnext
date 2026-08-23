/** Circular orange icons from /public/images/homepagelogo */
export const HOME_LOGO_BASE = "/images/homepagelogo";

export function homeLogoSrc(n) {
  return `${HOME_LOGO_BASE}/${n}.png`;
}

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
