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
  { id: "intro", label: "1. Introduction" },
  { id: "who", label: "2. Who we are" },
  { id: "collect", label: "3. Information we collect" },
  { id: "use", label: "4. How we use information" },
  { id: "legal-bases", label: "5. Legal bases" },
  { id: "sharing", label: "6. Sharing & processors" },
  { id: "transfers", label: "7. International transfers" },
  { id: "security", label: "8. Security" },
  { id: "retention", label: "9. Retention" },
  { id: "rights", label: "10. Your rights" },
  { id: "cookies", label: "11. Cookies & similar tech" },
  { id: "children", label: "12. Children" },
  { id: "changes", label: "13. Policy updates" },
  { id: "contact", label: "14. Contact us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle={`${COMPANY.name} is committed to protecting your privacy. This policy explains what personal data we collect through our website and forms, how we use it, and the choices you have — aligned with our GDPR-minded and secure-by-design approach.`}
      lastUpdated="12 August 2026"
      toc={TOC}
      otherHref="/terms"
      otherLabel="View Terms and Conditions →"
    >
      <LegalSection id="intro" title="1. Introduction">
        <p>
          This Privacy Policy applies to visitors and users of the {COMPANY.name} website,
          including people who submit Get a Quote, Contact Us, Careers, BYOT, or similar forms,
          and anyone who communicates with us by email or phone using the details published on
          this site.
        </p>
        <p>
          By using our website or submitting a form (after agreeing via the required checkbox),
          you acknowledge this policy. For contracted client work, additional confidentiality and
          data-processing terms in your engagement letter may also apply.
        </p>
      </LegalSection>

      <LegalSection id="who" title="2. Who we are">
        <p>
          The data controller for website enquiries is <strong className="text-[#0F274A]">{COMPANY.name}</strong>,
          founded in {COMPANY.founded}. We provide international accounting support for firms and
          businesses worldwide, with headquarters at:
        </p>
        <LegalList items={COMPANY.addressLines} />
        <p>
          Contact:{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.email}
          </a>{" "}
          ·{" "}
          <a
            href={COMPANY.phoneHref}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.phoneDisplay}
          </a>
        </p>
      </LegalSection>

      <LegalSection id="collect" title="3. Information we collect">
        <p>Depending on how you interact with us, we may collect:</p>
        <LegalList
          items={[
            "Identity & contact data — full name, company name, email, phone/mobile, country",
            "Enquiry content — messages, service interests, career application details, LinkedIn/portfolio links you choose to share",
            "Technical data — IP address, browser type, device, pages visited, and similar analytics needed to run and improve the site",
            "Communications — emails, call notes, or follow-ups related to your request",
          ]}
        />
        <p>
          We do not ask you to submit sensitive financial account passwords through public website
          forms. Client systems access, when needed, is arranged securely under a formal engagement.
        </p>
      </LegalSection>

      <LegalSection id="use" title="4. How we use information">
        <p>We use personal information to:</p>
        <LegalList
          items={[
            "Respond to quote requests and contact enquiries (typically within about 24 hours on business days)",
            "Provide information about our accounting, tax, bookkeeping, payroll, and related services",
            "Evaluate career applications and communicate with candidates",
            "Improve website performance, security, and user experience",
            "Comply with legal obligations and protect our rights, users, and systems",
            "Send service-related updates you have requested or that are necessary for an engagement",
          ]}
        />
        <p>
          We do not sell your personal information. Marketing emails, if any, are sent only where
          permitted and with an easy way to opt out.
        </p>
      </LegalSection>

      <LegalSection id="legal-bases" title="5. Legal bases (where GDPR / similar laws apply)">
        <p>Where required, we process personal data on these bases:</p>
        <LegalList
          items={[
            "Consent — for example, when you tick the agreement checkbox on a form",
            "Legitimate interests — responding to business enquiries and securing our website, balanced against your rights",
            "Contract — steps prior to entering a service agreement, or performance of an engagement",
            "Legal obligation — where we must retain or disclose information under applicable law",
          ]}
        />
      </LegalSection>

      <LegalSection id="sharing" title="6. Sharing & processors">
        <p>We may share information with:</p>
        <LegalList
          items={[
            "Internal team members who need it to handle your request",
            "Trusted service providers (hosting, email, analytics, security) under appropriate agreements",
            "Professional advisors or authorities when required by law or to protect legitimate interests",
          ]}
        />
        <p>
          Processors are instructed to use data only for specified purposes and to apply
          appropriate security measures consistent with our ISO 27001–oriented and
          privacy-first standards described on our Trust / security messaging.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="7. International transfers">
        <p>
          {COMPANY.name} serves clients globally and operates from India with collaboration across
          regions (including US, Canada, UK, Gulf, and APAC). Your information may be processed in
          countries other than your own. Where required, we use appropriate safeguards (such as
          contractual protections) for cross-border transfers.
        </p>
      </LegalSection>

      <LegalSection id="security" title="8. Security">
        <p>
          We implement administrative, technical, and organisational measures designed to protect
          personal data against unauthorised access, loss, or misuse — reflecting our emphasis on
          secure and confidential handling of client information. No method of transmission over
          the internet is 100% secure; we continually improve our controls.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="9. Retention">
        <p>
          We keep personal data only as long as needed for the purposes described above — for
          example, while we respond to an enquiry, for the life of a client relationship, or as
          required for legal, tax, or dispute-resolution reasons. When no longer needed, we delete
          or anonymise data where practicable.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="10. Your rights">
        <p>
          Depending on your location, you may have rights to access, correct, delete, restrict, or
          object to certain processing, and to data portability or withdrawal of consent. To
          exercise these rights, email{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.email}
          </a>
          . We may need to verify your identity before responding. You may also lodge a complaint
          with a supervisory authority where applicable.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="11. Cookies & similar technologies">
        <p>
          Our site may use cookies or similar technologies for essential functionality, preferences
          (such as remembering a selected region), and analytics. You can control cookies through
          your browser settings; disabling some cookies may affect site features.
        </p>
      </LegalSection>

      <LegalSection id="children" title="12. Children">
        <p>
          Our website and services are directed to businesses and professionals. We do not knowingly
          collect personal information from children. If you believe a child has provided us data,
          contact us and we will take appropriate steps to delete it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Policy updates">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          will change when we publish revisions. Continued use of the website after updates means
          you acknowledge the revised policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact us">
        <p>
          For privacy questions or requests, contact {COMPANY.name} at{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.email}
          </a>
          , call{" "}
          <a
            href={COMPANY.phoneHref}
            className="font-semibold hover:underline"
            style={{ color: ORANGE }}
          >
            {COMPANY.phoneDisplay}
          </a>
          , or write to {COMPANY.addressLines.join(" ")}. You can also review our{" "}
          <Link href="/terms" className="font-semibold hover:underline" style={{ color: ORANGE }}>
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/about" className="font-semibold hover:underline" style={{ color: ORANGE }}>
            About Us
          </Link>{" "}
          pages for more about who we are and how we work.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
