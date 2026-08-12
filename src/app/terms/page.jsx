"use client";

import Link from "next/link";
import LegalPageLayout, {
  COMPANY,
  LegalList,
  LegalSection,
} from "@/app/components/Legal/LegalPageLayout";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;

const TOC = [
  { id: "acceptance", label: "1. Acceptance of terms" },
  { id: "who-we-are", label: "2. Who we are" },
  { id: "services", label: "3. Our services" },
  { id: "quotes", label: "4. Quotes & enquiries" },
  { id: "accounts", label: "5. Client responsibilities" },
  { id: "confidentiality", label: "6. Confidentiality" },
  { id: "ip", label: "7. Intellectual property" },
  { id: "acceptable-use", label: "8. Acceptable use" },
  { id: "payments", label: "9. Fees & payments" },
  { id: "liability", label: "10. Limitation of liability" },
  { id: "third-party", label: "11. Third-party tools" },
  { id: "changes", label: "12. Changes to these terms" },
  { id: "governing-law", label: "13. Governing law" },
  { id: "contact", label: "14. Contact" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitle={`These Terms and Conditions govern your use of the ${COMPANY.name} website and related services, including quote requests, contact forms, and engagement with our international accounting support.`}
      lastUpdated="12 August 2026"
      toc={TOC}
      otherHref="/privacy"
      otherLabel="View Privacy Policy →"
    >
      <p>
        Welcome to <strong className="text-[#0F274A]">{COMPANY.name}</strong>. By accessing
        our website, submitting a quote request, applying for a role, or using any of our
        online forms, you agree to these Terms and Conditions and our{" "}
        <Link href="/privacy" className="font-semibold hover:underline" style={{ color: ORANGE }}>
          Privacy Policy
        </Link>
        . If you do not agree, please do not use this website or submit personal information
        through our forms.
      </p>

      <LegalSection id="acceptance" title="1. Acceptance of terms">
        <p>
          These terms form a binding agreement between you (an individual or business) and{" "}
          {COMPANY.name}. Continued use of the site after updates means you accept the revised
          terms. Please review this page periodically.
        </p>
      </LegalSection>

      <LegalSection id="who-we-are" title="2. Who we are">
        <p>
          {COMPANY.name} was founded in {COMPANY.founded} by experienced accounting and finance
          professionals. We provide modern accounting, bookkeeping, payroll, tax, and related
          support for accounting firms and businesses across the United States, Canada, the
          United Kingdom, the Gulf region, APAC, and other markets we serve.
        </p>
        <p>
          Our registered communications and headquarters details used on this website are:
        </p>
        <LegalList
          items={[
            `Email: ${COMPANY.email}`,
            `Phone: ${COMPANY.phoneDisplay}`,
            `Address: ${COMPANY.addressLines.join(" ")}`,
          ]}
        />
      </LegalSection>

      <LegalSection id="services" title="3. Our services">
        <p>
          {COMPANY.name} offers offshore and nearshore accounting support designed to help firms
          save time, reduce cost, and scale with a dedicated team. Service descriptions on this
          website — including region-specific offerings for markets such as the UK, USA, Canada,
          Ireland, Australia, New Zealand, Netherlands, UAE, and Singapore — are for general
          information.
        </p>
        <p>
          A formal engagement (scope, deliverables, timelines, and fees) begins only when both
          parties agree in writing, typically through a proposal, engagement letter, or service
          agreement. Website content does not itself create a client–advisor relationship.
        </p>
      </LegalSection>

      <LegalSection id="quotes" title="4. Quotes, forms & enquiries">
        <p>
          When you use Get a Quote, Contact Us, Careers, or similar forms, you confirm that the
          information you provide is accurate and that you are authorised to share it. Submitting
          a form:
        </p>
        <LegalList
          items={[
            "Does not guarantee acceptance of work or a specific price until confirmed in writing",
            "Authorises us to contact you about your enquiry using the details you provided",
            "Requires you to accept these Terms and our Privacy Policy via the checkbox before submission",
          ]}
        />
        <p>
          We aim to respond to quote and contact requests within about 24 hours on business days,
          but response times may vary based on volume and complexity.
        </p>
      </LegalSection>

      <LegalSection id="accounts" title="5. Client responsibilities">
        <p>Where you engage {COMPANY.name}, you agree to:</p>
        <LegalList
          items={[
            "Provide complete, timely, and accurate information, documents, and access needed for the work",
            "Ensure you have lawful authority to share client or business data with us",
            "Use our deliverables only for lawful business purposes and in line with applicable regulations",
            "Keep login credentials and shared systems secure when collaboration tools are used",
          ]}
        />
      </LegalSection>

      <LegalSection id="confidentiality" title="6. Confidentiality">
        <p>
          We treat client and prospect information as confidential and apply secure, privacy-first
          practices aligned with our ISO 27001–oriented controls and GDPR-minded processes
          described on our site. Mutual confidentiality obligations in a signed engagement letter
          will take priority for active clients.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="7. Intellectual property">
        <p>
          All website content — including branding, logos, copy, graphics, and layout — belongs to{" "}
          {COMPANY.name} or its licensors. You may view and share pages for personal or internal
          business evaluation, but you may not copy, scrape, resell, or reuse our materials for
          commercial purposes without prior written consent.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="8. Acceptable use of the website">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Misuse forms with false, abusive, or spam submissions",
            "Attempt to disrupt, probe, or gain unauthorised access to our systems",
            "Use the site in any way that violates applicable law or third-party rights",
            "Impersonate {COMPANY.name}, our staff, or other users",
          ].map((t) => t.replace("{COMPANY.name}", COMPANY.name))}
        />
      </LegalSection>

      <LegalSection id="payments" title="9. Fees & payments">
        <p>
          Pricing shared on the website or in preliminary quotes is indicative unless expressly
          stated as a fixed offer. Final fees, billing cycles, taxes, and payment terms are set out
          in your written engagement. Late or failed payments may pause services as stated in that
          agreement.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limitation of liability">
        <p>
          The website and general information are provided on an “as is” and “as available” basis.
          To the fullest extent permitted by law, {COMPANY.name} is not liable for indirect,
          incidental, or consequential losses arising from use of the website or reliance on
          general content. For contracted services, liability is limited as set out in the
          applicable engagement letter.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot be limited under applicable law
          (for example, fraud or personal injury caused by negligence where such exclusion is
          unlawful).
        </p>
      </LegalSection>

      <LegalSection id="third-party" title="11. Third-party tools & links">
        <p>
          Our services and website may reference cloud accounting platforms, maps, analytics, or
          social profiles (for example LinkedIn). Third-party sites and tools have their own terms
          and privacy practices. {COMPANY.name} is not responsible for content or policies outside
          our control.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to these terms">
        <p>
          We may update these Terms and Conditions to reflect new services, legal requirements, or
          operational changes. The “Last updated” date at the top of this page will change when we
          do. Material updates may also be highlighted on the website.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="13. Governing law">
        <p>
          These terms are governed by the laws applicable to {COMPANY.name} operating from India,
          without regard to conflict-of-law principles, except where mandatory consumer or local
          laws in your jurisdiction require otherwise. Disputes will first be addressed in good
          faith between the parties.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
        <p>
          For questions about these Terms and Conditions, contact us at{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.email}
          </a>{" "}
          or{" "}
          <a
            href={COMPANY.phoneHref}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.phoneDisplay}
          </a>
          , or write to us at {COMPANY.addressLines.join(" ")}.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
