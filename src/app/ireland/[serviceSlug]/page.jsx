"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { IRELAND_SERVICE_LINKS } from "../irelandServiceLinks";

export default function IrelandServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
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
