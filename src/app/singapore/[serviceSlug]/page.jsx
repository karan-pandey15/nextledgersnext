"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { SINGAPORE_SERVICE_LINKS } from "../singaporeServiceLinks";

export default function SingaporeServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
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
