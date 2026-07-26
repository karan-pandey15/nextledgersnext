"use client";

import { useParams } from "next/navigation";
import NZServiceTemplate from "../NZServiceTemplate";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { NEW_ZEALAND_SERVICE_LINKS } from "../newZealandServiceLinks";
import {
  NZ_INCOME_TAX,
  NZ_PAYROLL,
  NZ_YEAR_END,
} from "../nzPageContent";

/** Maps URL slug → page content so NZ services never fall through to Coming Soon. */
const NZ_SERVICE_PAGES = {
  NzIncomeTax: NZ_INCOME_TAX,
  NzPayroll: NZ_PAYROLL,
  NzYearEndAccount: NZ_YEAR_END,
};

export default function NewZealandServiceSlugPage() {
  const params = useParams();
  const slug = String(params?.serviceSlug || "");
  const data = NZ_SERVICE_PAGES[slug];

  if (data) {
    return <NZServiceTemplate data={data} />;
  }

  const match = NEW_ZEALAND_SERVICE_LINKS.find(
    (s) => s.href === `/new-zealand/${slug}`
  );

  return (
    <RegionalServiceComingSoon
      homePath="/new-zealand"
      servicesLabel="Services in New Zealand"
      serviceLinks={NEW_ZEALAND_SERVICE_LINKS}
      flagCode="nz"
      backLabel="Back To New Zealand"
      regionName="New Zealand"
      footerRegion="new-zealand"
      serviceLabel={match?.label}
    />
  );
}
