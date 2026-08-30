import { HomeLogoImg, SERVICE_STAT_LOGOS } from "@/app/lib/homePageLogos";

export { SERVICE_STAT_LOGOS };

/**
 * Hero overlay stat cell — uses circular logos from /images/homepagelogo.
 * Pass `logo` (number) for the matched asset; falls back to `icon` JSX if needed.
 */
export default function ServiceHeroStat({ logo, icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div
        className={
          logo != null
            ? "flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10"
            : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00] sm:h-10 sm:w-10"
        }
      >
        {logo != null ? <HomeLogoImg n={logo} alt="" /> : icon}
      </div>
      <div className="text-[15px] font-extrabold leading-none text-[#0B1F3A] sm:text-[17px]">
        {value}
      </div>
      <div className="max-w-[90px] text-[10px] leading-tight text-gray-500 sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}
