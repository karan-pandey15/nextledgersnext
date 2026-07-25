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
      badge="Netherlands Accounting Outsourcing Partner"
      titleBefore="Dutch Accounting Firms"
      subtitle="Dedicated offshore support across bookkeeping, VAT (BTW), payroll, tax, management reporting, advisory & company secretarial."
      badges={NETHERLANDS_TRUST_BADGES}
      outsourcingAccent="Netherlands Outsourcing"
    />
  );
}
