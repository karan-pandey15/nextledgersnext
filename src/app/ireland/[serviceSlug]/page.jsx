"use client";

import { useParams } from "next/navigation";
import IrelandServiceTemplate from "../IrelandServiceTemplate";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { IRELAND_SERVICE_LINKS } from "../irelandServiceLinks";
import {
  IE_BOOKKEEPING,
  IE_COMPANY_SECRETARIAL,
  IE_CORPORATE_TAX,
  IE_MANAGEMENT_ACCOUNTS,
  IE_PERSONAL_TAX,
  IE_VAT,
  IE_YEAR_END,
} from "../irelandPageContent";

/** Maps URL slug → page content so Ireland services never fall through to Coming Soon. */
const IRELAND_SERVICE_PAGES = {
  IeBookkeeping: IE_BOOKKEEPING,
  IeCompanySecretarial: IE_COMPANY_SECRETARIAL,
  IeCorporateTax: IE_CORPORATE_TAX,
  IeManagementAccounts: IE_MANAGEMENT_ACCOUNTS,
  IePersonalTax: IE_PERSONAL_TAX,
  IeVat: IE_VAT,
  IeYearEndAccount: IE_YEAR_END,
};

export default function IrelandServiceSlugPage() {
  const params = useParams();
  const slug = String(params?.serviceSlug || "");
  const data = IRELAND_SERVICE_PAGES[slug];

  if (data) {
    return <IrelandServiceTemplate data={data} />;
  }

  const match = IRELAND_SERVICE_LINKS.find(
    (s) => s.href === `/ireland/${slug}`
  );

  return (
    <RegionalServiceComingSoon
      homePath="/ireland"
      servicesLabel="Services in Ireland"
      serviceLinks={IRELAND_SERVICE_LINKS}
      flagCode="ie"
      backLabel="Back To Ireland"
      regionName="Ireland"
      footerRegion="ireland"
      serviceLabel={match?.label}
    />
  );
}
