"use client";

import RegionalCountryHome from "../components/RegionalNavbar/RegionalCountryHome";
import { NETHERLANDS_TRUST_BADGES } from "../components/ServiceMainPageContent/TrustBadgesBar";
import { NETHERLANDS_SERVICE_LINKS } from "./netherlandsServiceLinks";

export default function NetherlandsPage() {
  return (
    <RegionalCountryHome
      homePath="/netherlands"
      servicesLabel="Services in Netherlands"
      serviceLinks={NETHERLANDS_SERVICE_LINKS}
      flagCode="nl"
      backLabel="Back To Netherlands"
      regionName="Netherlands"
      footerRegion="netherlands"
      badge="Accounting Delivery Partner"
      titleBefore="Dutch Accounting Firms"
      subtitle="Dedicated support across bookkeeping, VAT (BTW), payroll, corporate & personal tax, management reporting & year-end accounts."
      badges={NETHERLANDS_TRUST_BADGES}
    />
  );
}
