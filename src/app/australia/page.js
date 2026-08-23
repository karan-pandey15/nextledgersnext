"use client";

import RegionalCountryHome from "../components/RegionalNavbar/RegionalCountryHome";
import { AUSTRALIA_TRUST_BADGES } from "../components/ServiceMainPageContent/TrustBadgesBar";
import { AUSTRALIA_SERVICE_LINKS } from "./australiaServiceLinks";

export default function AustraliaPage() {
  return (
    <RegionalCountryHome
      homePath="/australia"
      servicesLabel="Services in Australia"
      serviceLinks={AUSTRALIA_SERVICE_LINKS}
      flagCode="au"
      backLabel="Back To Australia"
      regionName="Australia"
      footerRegion="australia"
      badge="Accounting Delivery Partner"
      titleBefore="Australian Accounting Firms"
      subtitle="Dedicated support across bookkeeping, corporate tax, income tax, management reporting, payroll & year-end accounts."
      badges={AUSTRALIA_TRUST_BADGES}
    />
  );
}
