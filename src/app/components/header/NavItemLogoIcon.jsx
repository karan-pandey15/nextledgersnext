import { HomeLogoImg } from "@/app/lib/homePageLogos";

/**
 * Renders a navbar dropdown item icon — prefers matched homepagelogo when `logo` is set.
 */
export default function NavItemLogoIcon({ item, className = "h-8 w-8" }) {
  if (item?.logo != null) {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
        <HomeLogoImg n={item.logo} alt="" />
      </span>
    );
  }

  const icon = item?.icon;
  if (!icon) return null;

  if (typeof icon === "function" || (typeof icon === "object" && icon.$$typeof)) {
    const Icon = icon;
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00]">
        <Icon className="h-4 w-4" strokeWidth={2} />
      </span>
    );
  }

  if (typeof icon === "string") {
    return <span className="text-lg flex-shrink-0">{icon}</span>;
  }

  return <span className="text-lg flex-shrink-0">{icon}</span>;
}
