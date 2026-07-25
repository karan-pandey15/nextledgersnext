"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { AUSTRALIA_SERVICE_LINKS } from "../australiaServiceLinks";

export default function AustraliaServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
  const match = AUSTRALIA_SERVICE_LINKS.find(
    (s) => s.href === `/australia/${slug}`
  );

  return (
    <RegionalServiceComingSoon
      homePath="/australia"
      servicesLabel="Services in Australia"
      serviceLinks={AUSTRALIA_SERVICE_LINKS}
      flagCode="au"
      backLabel="Back To Australia"
      regionName="Australia"
      footerRegion="australia"
      serviceLabel={match?.label}
    />
  );
}
