"use client";

import { useParams } from "next/navigation";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { NEW_ZEALAND_SERVICE_LINKS } from "../newZealandServiceLinks";

export default function NewZealandServiceStubPage() {
  const params = useParams();
  const slug = params?.serviceSlug;
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
