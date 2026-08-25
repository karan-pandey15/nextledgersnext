"use client";

import RegionSelect from "./RegionSelect";

/**
 * Phone-only region picker — same control as the desktop navbar RegionSelect.
 * hiddenBelow: "xl" for global Header, "lg" for regional navbars.
 */
export default function PhoneRegionTopBar({
  isSidebarOpen = false,
  hiddenBelow = "xl",
  onRegionChange,
}) {
  const hiddenClass = hiddenBelow === "lg" ? "lg:hidden" : "xl:hidden";

  return (
    <div
      className={`flex ${hiddenClass} min-h-10 w-full items-center justify-end gap-2 border-b border-[#FF6A00]/15 px-3 py-1.5 sm:px-4 ${
        isSidebarOpen ? "invisible pointer-events-none" : ""
      }`}
      style={{
        background:
          "linear-gradient(90deg, #FFF9F5 0%, #FFFFFF 45%, #FFF4EA 100%)",
      }}
    >
      {!isSidebarOpen ? (
        <RegionSelect
          onRegionChange={onRegionChange}
          className="shrink-0"
        />
      ) : null}
    </div>
  );
}
