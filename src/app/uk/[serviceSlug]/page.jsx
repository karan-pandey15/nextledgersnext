import React from "react";
import ServicePageClient from "./ServicePageClient";

export default async function ServicePage({ params }) {
  const { serviceSlug } = await params;
  return <ServicePageClient serviceSlug={serviceSlug} />;
}

// Generate static params for prerendering all 8 dynamic pages at build time
export function generateStaticParams() {
  return [
    { serviceSlug: "uk-bookkeeping-service" },
    { serviceSlug: "management-accounts-financial-reporting" },
    { serviceSlug: "vat-service-making-tax-digital-mtd" },
    { serviceSlug: "year-end-accounts-corporation-tax" },
    { serviceSlug: "payroll-cis-services" },
    { serviceSlug: "personal-tax-services" },
    { serviceSlug: "uk-business-advisory-virtual-cfo-services" },
    { serviceSlug: "uk-company-formation-company-secretarial-services" }
  ];
}
