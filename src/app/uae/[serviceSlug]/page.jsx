"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { UAE_SERVICE_LINKS } from "../uaeServiceLinks";

export default function UaeServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
  const match = UAE_SERVICE_LINKS.find((s) => s.href === `/uae/${slug}`);

  return (
    <RegionalServiceComingSoon
      homePath="/uae"
      servicesLabel="Services in UAE"
      serviceLinks={UAE_SERVICE_LINKS}
      flagCode="ae"
      backLabel="Back To UAE"
      regionName="UAE"
      footerRegion="uae"
      serviceLabel={match?.label}
    />
  );
}
