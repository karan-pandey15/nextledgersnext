"use client";

import RegionalCountryHome from "../components/RegionalNavbar/RegionalCountryHome";
import { UAE_TRUST_BADGES } from "../components/ServiceMainPageContent/TrustBadgesBar";
import { UAE_SERVICE_LINKS } from "./uaeServiceLinks";

export default function UaePage() {
  return (
    <RegionalCountryHome
      homePath="/uae"
      servicesLabel="Services in UAE"
      serviceLinks={UAE_SERVICE_LINKS}
      flagCode="ae"
      backLabel="Back To UAE"
      regionName="UAE"
      footerRegion="uae"
      badge="UAE Accounting Outsourcing Partner"
      titleBefore="UAE Accounting Firms"
      subtitle="Dedicated offshore support across business setup, virtual CFO, corporate tax, management reporting, payroll & WPS, VAT, year-end accounts & bookkeeping."
      badges={UAE_TRUST_BADGES}
      outsourcingAccent="UAE Outsourcing"
    />
  );
}
