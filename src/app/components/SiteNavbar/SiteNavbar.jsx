"use client";

import Header from "@/app/components/header/Header";
import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import USANavbar from "@/app/components/USANavbar/USANavbar";
import CanadaNavbar from "@/app/components/CanadaNavbar/CanadaNavbar";
import RegionalNavbar from "@/app/components/RegionalNavbar/RegionalNavbar";
import useActiveRegion from "@/app/lib/useActiveRegion";
import { REGION_NAV_BY_CODE } from "@/app/lib/regionNav";

/**
 * Shows the matching regional navbar (UK / USA / Canada / Ireland / …)
 * when the visitor is in a market region — including on shared pages
 * like About, BYOT, Tools and Contact (Home then returns to that region).
 * After visiting global `/`, the saved region is cleared and this falls
 * back to the worldwide Header.
 */
export default function SiteNavbar({
  isSidebarOpen = false,
  setIsSidebarOpen,
}) {
  const { regionCode, ready } = useActiveRegion();

  if (!ready) {
    return (
      <div className="sticky top-0 z-40 h-[72px] w-full border-b border-gray-100 bg-white" />
    );
  }

  const navProps = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  if (regionCode === "UK") {
    return <UKNavbar {...navProps} />;
  }
  if (regionCode === "US") {
    return <USANavbar {...navProps} />;
  }
  if (regionCode === "CA") {
    return <CanadaNavbar {...navProps} />;
  }

  const config = regionCode ? REGION_NAV_BY_CODE[regionCode] : null;
  if (config) {
    return (
      <RegionalNavbar
        {...navProps}
        homePath={config.homePath}
        servicesLabel={config.servicesLabel}
        serviceLinks={config.serviceLinks}
        flagCode={config.flagCode}
        backLabel={config.backLabel}
        regionName={config.regionName}
      />
    );
  }

  return <Header {...navProps} />;
}
