"use client";

import { useParams } from "next/navigation";
import SingaporeServiceTemplate from "../SingaporeServiceTemplate";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { SINGAPORE_SERVICE_LINKS } from "../singaporeServiceLinks";
import {
  SG_ACCOUNTING_CLEANUP,
  SG_BOOKKEEPING,
  SG_CORPORATE_TAX,
  SG_GST,
  SG_MANAGEMENT_ACCOUNTS,
  SG_PAYROLL,
  SG_YEAR_END,
} from "../singaporePageContent";

/** Maps URL slug → page content so Singapore services never fall through to Coming Soon. */
const SINGAPORE_SERVICE_PAGES = {
  SgBookkeeping: SG_BOOKKEEPING,
  SgCorporateTax: SG_CORPORATE_TAX,
  SgGst: SG_GST,
  SgManagementAccounts: SG_MANAGEMENT_ACCOUNTS,
  SgAccountingCleanup: SG_ACCOUNTING_CLEANUP,
  SgPayroll: SG_PAYROLL,
  SgYearEndAccount: SG_YEAR_END,
};

export default function SingaporeServiceSlugPage() {
  const params = useParams();
  const slug = String(params?.serviceSlug || "");
  const data = SINGAPORE_SERVICE_PAGES[slug];

  if (data) {
    return <SingaporeServiceTemplate data={data} />;
  }

  const match = SINGAPORE_SERVICE_LINKS.find(
    (s) => s.href === `/singapore/${slug}`
  );

  return (
    <RegionalServiceComingSoon
      homePath="/singapore"
      servicesLabel="Services in Singapore"
      serviceLinks={SINGAPORE_SERVICE_LINKS}
      flagCode="sg"
      backLabel="Back To Singapore"
      regionName="Singapore"
      footerRegion="singapore"
      serviceLabel={match?.label}
    />
  );
}
