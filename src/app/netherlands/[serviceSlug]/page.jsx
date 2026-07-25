"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { NETHERLANDS_SERVICE_LINKS } from "../netherlandsServiceLinks";

export default function NetherlandsServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
  const match = NETHERLANDS_SERVICE_LINKS.find(
    (s) => s.href === `/netherlands/${slug}`
  );

  return (
    <RegionalServiceComingSoon
      homePath="/netherlands"
      servicesLabel="Services in Netherlands"
      serviceLinks={NETHERLANDS_SERVICE_LINKS}
      flagCode="nl"
      backLabel="Back To Netherlands"
      regionName="Netherlands"
      footerRegion="netherlands"
      serviceLabel={match?.label}
    />
  );
}
