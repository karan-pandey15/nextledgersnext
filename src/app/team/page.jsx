"use client";

import { useCallback, useEffect, useState } from "react";
import {
  BarChart3,
  Globe2,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import TeamMemberModal from "../components/Team/TeamMemberModal";
import {
  DEFAULT_EMAIL,
  toLinkedInHref,
  toMailHref,
} from "../components/Team/teamMemberDefaults";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const BODY = "#4B5563";
const BEIGE = "#F7F3EE";
const PAGE_BG = "#FFFFFF";

/** GLOBAL ADVISORS — 2 large cards */
const GLOBAL_ADVISORS = [
  {
    name: "Durgesh Pandey ACCA",
    credentials: "CPA Pursuing",
    role: "Managing Partner",
    companyRole: "Managing Partner",
    image: "/images/TeamImage/Durgesh_Pandey-removebg-preview.png",
    email: "Durgesh@nextledgers.com",
    linkedin: "linkedin.com/in/durgesh-pandey-157026111",
  },
  {
    name: "John Muchai, CPA",
    credentials: "CGMA",
    role: "Partner, North America",
    companyRole: "Partner - North America Region",
    image: "/images/TeamImage/John_Muchai.jpg?v=3",
    email: "John.muchai@nextledgers.com",
  },
];

/** GLOBAL LEADERSHIP / GLOBAL PARTNERS — 3 × 2 */
const GLOBAL_LEADERSHIP = [
  {
    name: "Praveen Kumar",
    credentials: "CMA",
    role: "Audit & Tax Partner Canada",
    companyRole: "Audit & Tax Partner - Canada Region",
    image: "/images/TeamImage/Praveen_Kumar-removebg-preview.png",
    email: "Praveen.kumar@nextledgers.com",
    linkedin: "linkedin.com/in/praveen-kumar-143b90216",
  },
  {
    name: "Anjali Sharma",
    credentials: "MBA",
    role: "Non Profit Accounting Partner",
    companyRole: "Non Profit Accounting Partner",
    image: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
    email: "Anjali@nextledgers.com",
  },
  {
    name: "Parwinder Singh",
    credentials: "MBA, Finance",
    role: "Accounting Partner - North America",
    companyRole: "Accounting Partner - North America Region",
    image: "/images/TeamImage/Parwinder_Singh-removebg-preview.png",
    email: "Parwinder.singh@nextledgers.com",
    linkedin: "linkedin.com/in/parwinder-singh-a915001b5",
  },
  {
    name: "Shivam Baranwal",
    credentials: "ACCA",
    role: "Accounting & Tax Partner - UK, Middle East & APAC",
    companyRole: "Accounting & Tax Partner - UK, Middle East & APAC",
    image: "/images/TeamImage/shivam.png",
    /** Portrait fill — slightly larger head-and-shoulders crop (unlike cutout photos) */
    avatarVariant: "shivam",
    email: "Shivam.baranwal@nextledgers.com",
    linkedin: "linkedin.com/in/shivam-baranwal-acca-b02627221",
    quote:
      "Accuracy, consistency, and commitment are the foundations of lasting client relationships.",
    highlights: [
      { value: "125+", label: "Projects Delivered", icon: "briefcase" },
      { value: "55+", label: "Businesses Supported", icon: "building" },
      { value: "7+", label: "Countries Served", icon: "globe" },
      { value: "100%", label: "Confidentiality & Data Security", icon: "shield" },
    ],
  },
  {
    name: "Ankita Varde",
    credentials: "CPA",
    role: "Head of Tax & Compliance - North America",
    companyRole: "Head of Tax & Compliance - North America Region",
    image: "/images/TeamImage/Ankita-removebg-preview.png",
    email: "Ankita.varde@nextledgers.com",
  },
  {
    name: "Akash Gangwar",
    credentials: "MBA",
    role: "Accounting Partner - North America",
    companyRole: "Accounting Partner - North America Region",
    image: "/images/TeamImage/Akash_Gangwar-removebg-preview.png",
    email: "Akash.gangwar@nextledgers.com",
    linkedin: "linkedin.com/in/akash-kumar-147346244",
  },
];

/** SENIOR PROFESSIONALS — horizontal cards, 3 × 2 */
const SENIOR_PROFESSIONALS = [
  {
    name: "Dharmesh Kumar",
    role: "Chief Onboarding Specialist",
    image: "/images/TeamImage/Dharmesh_Kumar-removebg-preview.png",
  },
  {
    name: "Kirti Kapoor",
    role: "Virtual Assistance Specialist",
    image: "/images/TeamImage/Kirti_Kapoor-removebg-preview.png",
  },
  {
    name: "Nikhil Kushwaha",
    role: "AP/AR Specialist",
    image: "/images/TeamImage/Nikhil_Kushwaha-removebg-preview.png",
  },
  {
    name: "Md. Almasud",
    role: "Tax Specialist",
    image: "/images/TeamImage/Md._Almasud-removebg-preview.png",
  },
  {
    name: "Nisha",
    role: "Payroll Specialist",
    image: "",
  },
  {
    name: "Abhishek",
    role: "FP&A Expert",
    image: "",
  },
];

/** SUPPORT TEAM — horizontal cards */
const SUPPORT_TEAM = [
  {
    name: "Avnish Mishra",
    role: "Marketing Manager",
    image: "/images/TeamImage/Avneesh_Mishra-removebg-preview.png",
  },
  {
    name: "Lakshya",
    role: "HR Manager",
    image: "",
  },
  {
    name: "Aditya",
    role: "IT & Security Administrator",
    image: "",
  },
];

const STATS = [
  { value: "250+", label: "Projects Delivered", Icon: BarChart3 },
  { value: "15+", label: "Industry Experts", Icon: Users },
  { value: "9+", label: "Countries Served", Icon: Globe2 },
  { value: "99.9%", label: "Client Satisfaction", Icon: ShieldCheck },
];

const PRESENCE = [
  { label: "Europe", flag: "https://flagcdn.com/eu.svg", flagClass: "h-4 w-6 rounded-[2px]" },
  { label: "North America", flag: "https://flagcdn.com/us.svg", flagClass: "h-5 w-5 rounded-full" },
  { label: "Middle East", flag: "https://flagcdn.com/ae.svg", flagClass: "h-5 w-5 rounded-full" },
  { label: "Asia Pacific", icon: "globe" },
];

function getInitials(name) {
  const first = name
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .filter((part) => !/^(ACCA|CPA|CMA|MBA|EA|CGMA|CA)$/i.test(part))[0];
  return (first?.[0] || "?").toUpperCase();
}

/** Section heading: short faded side rules + under-title ornament */
const TITLE_LINE = "#C4A574";

function SectionTitle({ children }) {
  return (
    <div className="mb-5 flex flex-col items-center sm:mb-6">
      <div className="flex items-center justify-center gap-2.5 sm:gap-3">
        <span
          className="h-px w-12 shrink-0 sm:w-16"
          style={{
            background: `linear-gradient(to right, transparent, ${TITLE_LINE})`,
          }}
          aria-hidden="true"
        />
        <h2
          className="shrink-0 text-center text-[15px] font-bold uppercase tracking-[0.14em] sm:text-[17px] lg:text-[18px]"
          style={{ color: NAVY }}
        >
          {children}
        </h2>
        <span
          className="h-px w-12 shrink-0 sm:w-16"
          style={{
            background: `linear-gradient(to left, transparent, ${TITLE_LINE})`,
          }}
          aria-hidden="true"
        />
      </div>
      <div className="mt-2 flex items-center gap-1.5" aria-hidden="true">
        <span className="h-px w-4 sm:w-5" style={{ backgroundColor: TITLE_LINE }} />
        <span
          className="h-[5px] w-[5px] rotate-45"
          style={{ backgroundColor: TITLE_LINE }}
        />
        <span className="h-px w-4 sm:w-5" style={{ backgroundColor: TITLE_LINE }} />
      </div>
    </div>
  );
}

function getAvatarImageClass(variant, isCutout) {
  // Shivam only — larger head-and-shoulders fill (matches portrait reference)
  if (variant === "shivam") {
    return "h-full w-full scale-[1.0] object-cover object-[center_18%]";
  }
  if (isCutout) {
    return "h-full w-full object-contain object-bottom";
  }
  return "h-full w-full object-contain object-center";
}

function TeamAvatar({
  src,
  name,
  size = "lg",
  ringColor = ORANGE,
  bgColor = "#FFF7F0",
  variant,
}) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));
  const imageSrc = src ? encodeURI(src) : "";
  const sizeClass =
    size === "sm"
      ? "h-[64px] w-[64px] sm:h-[72px] sm:w-[72px]"
      : size === "md"
        ? "h-[120px] w-[120px] sm:h-[132px] sm:w-[132px]"
        : "h-[144px] w-[144px] sm:h-[158px] sm:w-[158px]";

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ${sizeClass}`}
      style={{ backgroundColor: bgColor, boxShadow: `0 0 0 2px ${ringColor}` }}
    >
      {imageSrc && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={imageSrc}
          src={imageSrc}
          alt={name || ""}
          className={getAvatarImageClass(variant, isCutout)}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`font-bold tracking-wide ${size === "sm" ? "text-[18px]" : "text-[28px] sm:text-[30px]"}`}
          style={{ color: ringColor }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

/** Vertical leadership-style card with Email / LinkedIn footer */
function ProfileCard({ member, large = false, onOpen }) {
  const emailHref = toMailHref(member.email || DEFAULT_EMAIL);
  const linkedinHref = toLinkedInHref(member.linkedin);

  return (
    <article
      className={`flex w-[290px] max-w-full flex-col items-center rounded-[14px] border border-[#FF6A00] bg-white px-5 pb-4 pt-7 shadow-[0_4px_18px_rgba(15,39,74,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(15,39,74,0.12)] sm:px-6 sm:pb-5 sm:pt-8 ${
        large ? "" : "sm:w-[270px]"
      }`}
    >
      {/* Card body → opens popup; Email / LinkedIn below handle their own redirects */}
      <button
        type="button"
        className="flex w-full cursor-pointer flex-col items-center text-center transition-opacity hover:opacity-90"
        onClick={() => onOpen?.(member)}
        aria-label={`View details for ${member.name}`}
      >
        <TeamAvatar
          src={member.image}
          name={member.name}
          size={large ? "lg" : "md"}
          variant={member.avatarVariant}
        />
        <h3
          className={`mt-4 font-bold leading-snug ${large ? "text-[18px] sm:text-[19px]" : "text-[16px] sm:text-[17px]"}`}
          style={{ color: ORANGE }}
        >
          {member.name}
        </h3>
        {member.credentials ? (
          <p
            className={`mt-1.5 font-bold leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`}
            style={{ color: NAVY }}
          >
            {member.credentials}
          </p>
        ) : null}
        <p
          className={`mt-1 font-bold leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`}
          style={{ color: NAVY }}
        >
          {member.role}
        </p>
      </button>

      <div className="relative z-10 mt-3.5 w-full">
        <div className="h-px w-full bg-[#E5E7EB]" aria-hidden="true" />
        <div className="mt-3 flex w-full items-center justify-center gap-5 sm:gap-6">
          <a
            href={emailHref}
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-80 sm:text-[15px]"
            style={{ color: NAVY }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <Mail className="h-[17px] w-[17px] shrink-0" strokeWidth={2} style={{ color: ORANGE }} />
            Email
          </a>
          <span className="text-[14px] leading-none text-[#D1D5DB]" aria-hidden="true">
            |
          </span>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-80 sm:text-[15px]"
            style={{ color: NAVY }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <span
              className="flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border"
              style={{ borderColor: ORANGE, color: ORANGE }}
            >
              <FaLinkedinIn className="h-[10px] w-[10px]" />
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
}

/** Horizontal senior / support card — white card, accent name rule */
function CompactCard({ member, onOpen, accent = ORANGE }) {
  const openPopup = () => onOpen?.(member);

  const openPopupOnDesktopHover = () => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches) {
      openPopup();
    }
  };

  return (
    <button
      type="button"
      onClick={openPopup}
      onMouseEnter={openPopupOnDesktopHover}
      aria-label={`View details for ${member.name}`}
      className="flex w-full items-center gap-4 rounded-[14px] bg-white px-4 py-4 text-left shadow-[0_4px_16px_rgba(15,39,74,0.07)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(15,39,74,0.1)] sm:gap-4 sm:px-5 sm:py-[18px]"
    >
      <TeamAvatar
        src={member.image}
        name={member.name}
        size="sm"
        ringColor={accent}
        bgColor="#F3F4F6"
      />
      <div className="min-w-0">
        <h3 className="text-[15px] font-bold leading-snug sm:text-[16px]" style={{ color: NAVY }}>
          {member.name}
        </h3>
        <span
          className="mt-2 block h-[2px] w-9 rounded-full"
          style={{ backgroundColor: accent }}
          aria-hidden="true"
        />
        <p className="mt-2 text-[13px] leading-snug sm:text-[14px]" style={{ color: NAVY }}>
          {member.role}
        </p>
      </div>
    </button>
  );
}

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openMember = useCallback((member) => {
    setSelectedMember(member);
  }, []);

  const closeMember = useCallback(() => {
    setSelectedMember(null);
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col overflow-x-hidden font-sans"
      style={{ backgroundColor: PAGE_BG, color: NAVY }}
    >
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Hero — light, centered (matches SS) */}
      <section className="w-full" style={{ backgroundColor: PAGE_BG }}>
        <div className="mx-auto max-w-[900px] px-4 pb-6 pt-5 text-center sm:px-6 sm:pb-7 sm:pt-6 lg:pt-7">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.18em] sm:text-[13px]"
            style={{ color: ORANGE }}
          >
            Our Team
          </p>
          <h1
            className="mt-3 text-[26px] font-bold leading-[1.2] tracking-tight sm:mt-4 sm:text-[34px] lg:text-[40px]"
            style={{ color: NAVY }}
          >
            Meet the <span style={{ color: ORANGE }}>Experts</span> Behind Your Success
          </h1>
          <p
            className="mx-auto mt-3 max-w-[640px] text-[14px] leading-relaxed sm:mt-4 sm:text-[15px] sm:leading-7"
            style={{ color: BODY }}
          >
            Global professionals delivering accounting, tax, advisory, payroll, and financial
            leadership across Europe, North America, the Middle East, and Asia Pacific.
          </p>
        </div>
      </section>

      {/* Stats bar — icon + number above label */}
      <section className="relative z-10 w-full px-4 pb-5 sm:px-6 sm:pb-6 lg:px-10 lg:pb-7" style={{ backgroundColor: PAGE_BG }}>
        <div className="mx-auto max-w-[1100px] rounded-[14px] border border-[#E5E7EB] bg-white px-3 py-5 shadow-[0_8px_28px_rgba(15,39,74,0.06)] sm:px-4 sm:py-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
            {STATS.map(({ value, label, Icon }, index) => (
              <div
                key={label}
                className={`flex flex-row items-center justify-center gap-3 px-3 py-2 sm:gap-3.5 sm:px-5 ${
                  index > 0 ? "sm:border-l sm:border-[#E5E7EB]" : ""
                }`}
              >
                <Icon
                  className="h-[44px] w-[44px] shrink-0"
                  strokeWidth={1.5}
                  style={{ color: ORANGE }}
                />
                <div className="min-w-0 text-left">
                  <p
                    className="text-[22px] font-bold leading-none sm:text-[26px] lg:text-[28px]"
                    style={{ color: ORANGE }}
                  >
                    {value}
                  </p>
                  <p
                    className="mt-1.5 text-[12px] font-medium leading-snug sm:text-[13px]"
                    style={{ color: NAVY }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL ADVISORS */}
      <section className="w-full py-8 sm:py-9 lg:py-10" style={{ backgroundColor: "#FFF7F0" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Global Advisors</SectionTitle>
          <div className="mx-auto flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-stretch sm:gap-6">
            {GLOBAL_ADVISORS.map((member) => (
              <ProfileCard key={member.name} member={member} large onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL LEADERSHIP / GLOBAL PARTNERS */}
      <section className="w-full bg-white py-8 sm:py-9 lg:py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Global Leadership / Global Partners</SectionTitle>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {GLOBAL_LEADERSHIP.map((member) => (
              <ProfileCard key={member.name} member={member} large onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR PROFESSIONALS */}
      <section className="w-full py-8 sm:py-9 lg:py-10" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Senior Professionals</SectionTitle>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {SENIOR_PROFESSIONALS.map((member) => (
              <CompactCard key={member.name} member={member} onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="w-full py-8 sm:py-9 lg:py-10" style={{ backgroundColor: "#FFF7F0" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Support Team</SectionTitle>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {SUPPORT_TEAM.map((member) => (
              <CompactCard
                key={member.name}
                member={member}
                onOpen={openMember}
                accent={TITLE_LINE}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence bar — pill card */}
      <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-10" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto flex max-w-[980px] flex-col items-stretch rounded-[28px] bg-white py-2 shadow-[0_4px_16px_rgba(15,39,74,0.08)] sm:flex-row sm:items-center sm:rounded-full sm:py-0">
          <div className="flex items-center justify-center gap-2.5 px-5 py-3 sm:shrink-0 sm:justify-start sm:py-3.5 sm:pl-6 sm:pr-5">
            <Globe2 className="h-[18px] w-[18px] shrink-0" strokeWidth={2} style={{ color: NAVY }} />
            <span className="whitespace-nowrap text-[13px] font-bold sm:text-[14px]" style={{ color: NAVY }}>
              Our Global Presence
            </span>
          </div>

          {PRESENCE.map(({ label, flag, flagClass, icon }) => (
            <div
              key={label}
              className="flex flex-1 items-center justify-center gap-2 border-t border-[#E8E8E8] px-4 py-3 sm:border-t-0 sm:border-l sm:py-3.5"
            >
              {icon === "globe" ? (
                <Globe2 className="h-[18px] w-[18px] shrink-0" strokeWidth={2} style={{ color: TITLE_LINE }} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={flag} alt="" className={`shrink-0 object-cover shadow-sm ${flagClass}`} />
              )}
              <span
                className="whitespace-nowrap text-[13px] font-medium sm:text-[14px]"
                style={{ color: BODY }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />

      <TeamMemberModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={closeMember}
      />
    </main>
  );
}
