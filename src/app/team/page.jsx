"use client";

import { useCallback, useState } from "react";
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
  DEFAULT_LINKEDIN,
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
    image: "/images/TeamImage/Durgesh_Pandey-removebg-preview.png",
  },
  {
    name: "John Muchai, CPA",
    credentials: "CGMA",
    role: "Partner, North America",
    image: "/images/TeamImage/John_Muchai.jpg?v=3",
  },
];

/** GLOBAL LEADERSHIP / GLOBAL PARTNERS — 3 × 2 */
const GLOBAL_LEADERSHIP = [
  {
    name: "Anjali Sharma",
    credentials: "MBA",
    role: "Non-Profit Accounting Partner",
    image: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
  },
  {
    name: "Praveen Kumar",
    credentials: "CMA",
    role: "Audit & Tax Partner Canada",
    image: "/images/TeamImage/Praveen_Kumar-removebg-preview.png",
  },
  {
    name: "Ankita Varde",
    credentials: "CPA",
    role: "Head of Tax & Compliance",
    image: "/images/TeamImage/Ankita-removebg-preview.png",
  },
  {
    name: "Akash Gangwar",
    credentials: "M.com, EA",
    role: "Sr. Manager US Audit & Accounting",
    image: "/images/TeamImage/Akash_Gangwar-removebg-preview.png",
  },
  {
    name: "Parwinder Singh",
    credentials: "MBA, Finance",
    role: "Sr. Manager US Audit & Accounting",
    image: "/images/TeamImage/Parwinder_Singh-removebg-preview.png",
  },
  {
    name: "Prince Mishra",
    credentials: "MBA, Finance",
    role: "Sr. Manager Canada Audit & Accounting",
    image: "/images/TeamImage/SUMITNEXT.png",
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
    name: "Varun Chauhan",
    role: "Payroll Specialist",
    image: "/images/TeamImage/Varun_Chauhan-removebg-preview.png",
  },
  {
    name: "Md. Almasud",
    role: "Sales Tax & GST/HST Specialist",
    image: "/images/TeamImage/Md._Almasud-removebg-preview.png",
  },
  {
    name: "Nikhil Kushwaha",
    role: "AR/AP Specialist",
    image: "/images/TeamImage/Nikhil_Kushwaha-removebg-preview.png",
  },
  {
    name: "Karan Kapoor",
    role: "Marketing Manager",
    image: "/images/TeamImage/Karan Kapoor.jpg",
  },
  {
    name: "Kirti Kapoor",
    role: "HR Manager",
    image: "/images/TeamImage/Kirti_Kapoor-removebg-preview.png",
  },
];

/** SUPPORT TEAM — horizontal cards */
const SUPPORT_TEAM = [
  {
    name: "Piyush Adhikari",
    role: "IT & Security Administrator",
    image: "/images/TeamImage/Piyush_Adhikari-removebg-preview.png",
  },
  {
    name: "Avneesh Mishra",
    role: "Training & Quality Manager",
    image: "/images/TeamImage/Avneesh_Mishra-removebg-preview.png",
  },
];

const STATS = [
  { value: "250+", label: "Projects Delivered", Icon: BarChart3 },
  { value: "15+", label: "Industry Experts", Icon: Users },
  { value: "9+", label: "Countries Served", Icon: Globe2 },
  { value: "99.9%", label: "Client Satisfaction", Icon: ShieldCheck },
];

const PRESENCE = [
  { label: "Europe", flag: "https://flagcdn.com/eu.svg" },
  { label: "North America", flag: "https://flagcdn.com/us.svg" },
  { label: "Middle East", flag: "https://flagcdn.com/ae.svg" },
  { label: "Asia Pacific", flag: "https://flagcdn.com/in.svg" },
];

function getInitials(name) {
  return name
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .filter((part) => !/^(ACCA|CPA|CMA|MBA|EA|CGMA)$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/** Section heading: navy caps + orange line with center diamond */
function SectionTitle({ children }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10 sm:gap-4">
      <div className="relative h-3 min-w-10 flex-1 max-w-[140px] sm:max-w-[200px]" aria-hidden="true">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-brand-orange" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-orange" />
      </div>
      <h2
        className="shrink-0 text-center text-[15px] font-bold uppercase tracking-[0.12em] sm:text-[17px] lg:text-[18px]"
        style={{ color: NAVY }}
      >
        {children}
      </h2>
      <div className="relative h-3 min-w-10 flex-1 max-w-[140px] sm:max-w-[200px]" aria-hidden="true">
        <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-brand-orange" />
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand-orange" />
      </div>
    </div>
  );
}

function TeamAvatar({ src, name, size = "lg" }) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));
  const sizeClass =
    size === "sm"
      ? "h-[64px] w-[64px] sm:h-[72px] sm:w-[72px]"
      : size === "md"
        ? "h-[110px] w-[110px] sm:h-[120px] sm:w-[120px]"
        : "h-[132px] w-[132px] sm:h-[148px] sm:w-[148px]";

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-[2px] ring-[#FF6A00] ${sizeClass} ${
        failed || !src ? "bg-[#FFF1E6]" : isCutout ? "bg-[#FFF7F0]" : "bg-[#E8EEF5]"
      }`}
    >
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className={
            isCutout
              ? "h-[94%] w-[94%] object-contain object-bottom"
              : "h-full w-full object-cover object-center"
          }
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`font-bold tracking-wide ${size === "sm" ? "text-[18px]" : "text-[28px] sm:text-[30px]"}`}
          style={{ color: ORANGE }}
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
  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-[14px] border border-[#FF6A00] bg-white shadow-[0_4px_18px_rgba(15,39,74,0.06)] ${
        large ? "max-w-[340px]" : "max-w-[300px]"
      }`}
    >
      <button
        type="button"
        className="flex flex-1 cursor-pointer flex-col items-center px-5 pt-7 pb-5 text-center transition-colors hover:bg-[#FFFBF8] sm:px-6 sm:pt-8"
        onClick={() => onOpen?.(member)}
        aria-label={`View details for ${member.name}`}
      >
        <TeamAvatar src={member.image} name={member.name} size={large ? "lg" : "md"} />
        <h3
          className={`mt-4 font-bold leading-snug ${large ? "text-[16px] sm:text-[17px]" : "text-[14px] sm:text-[15px]"}`}
          style={{ color: ORANGE }}
        >
          {member.name}
        </h3>
        {member.credentials ? (
          <p
            className={`mt-1.5 leading-snug ${large ? "text-[13px] sm:text-[14px]" : "text-[12px] sm:text-[13px]"}`}
            style={{ color: NAVY }}
          >
            {member.credentials}
          </p>
        ) : null}
        <p
          className={`mt-1.5 font-bold leading-snug ${large ? "text-[13px] sm:text-[14px]" : "text-[12px] sm:text-[13px]"}`}
          style={{ color: NAVY }}
        >
          {member.role}
        </p>
      </button>

      <div className="mt-auto flex items-stretch border-t border-[#E5E7EB]">
        <a
          href={`mailto:${member.email || DEFAULT_EMAIL}`}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-[13px] font-medium transition-colors hover:bg-[#FFF7F0] sm:text-[14px]"
          style={{ color: NAVY }}
          onClick={(e) => e.stopPropagation()}
        >
          <Mail className="h-[15px] w-[15px] shrink-0" strokeWidth={2} style={{ color: ORANGE }} />
          Email
        </a>
        <div className="w-px self-stretch bg-[#E5E7EB]" aria-hidden="true" />
        <a
          href={member.linkedin || DEFAULT_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 py-3 text-[13px] font-medium transition-colors hover:bg-[#FFF7F0] sm:text-[14px]"
          style={{ color: NAVY }}
          onClick={(e) => e.stopPropagation()}
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
    </article>
  );
}

/** Horizontal senior / support card — no social footer */
function CompactCard({ member, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(member)}
      aria-label={`View details for ${member.name}`}
      className="flex w-full items-center gap-3.5 rounded-[12px] bg-[#F3F0EB] px-3.5 py-3.5 text-left transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_20px_rgba(15,39,74,0.08)] sm:gap-4 sm:px-4 sm:py-4"
    >
      <TeamAvatar src={member.image} name={member.name} size="sm" />
      <div className="min-w-0">
        <h3 className="text-[14px] font-bold leading-snug sm:text-[15px]" style={{ color: NAVY }}>
          {member.name}
        </h3>
        <p className="mt-0.5 text-[12px] leading-snug sm:text-[13px]" style={{ color: BODY }}>
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
      <section className="w-full" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto max-w-[900px] px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-12 lg:pt-14">
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
            leadership across the UK, Canada, Europe, the Middle East, and Asia Pacific.
          </p>
        </div>
      </section>

      {/* Stats bar — icon + text on one horizontal line */}
      <section className="relative z-10 -mt-2 w-full px-4 sm:px-6 lg:px-10" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto max-w-[1100px] rounded-[14px] border border-[#E5E7EB] bg-white px-2 py-4 shadow-[0_8px_28px_rgba(15,39,74,0.06)] sm:px-3 sm:py-5">
          <div className="grid grid-cols-1 divide-y divide-[#E5E7EB] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {STATS.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex flex-row items-center justify-center gap-2.5 px-3 py-3 sm:gap-3 sm:px-4 sm:py-2"
              >
                <Icon
                  className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
                  strokeWidth={1.75}
                  style={{ color: ORANGE }}
                />
                <p className="flex flex-row flex-wrap items-baseline gap-x-1.5 whitespace-nowrap">
                  <span
                    className="text-[20px] font-bold leading-none sm:text-[24px] lg:text-[26px]"
                    style={{ color: ORANGE }}
                  >
                    {value}
                  </span>
                  <span
                    className="text-[12px] leading-none sm:text-[13px]"
                    style={{ color: BODY }}
                  >
                    {label}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL ADVISORS */}
      <section className="w-full py-10 sm:py-12 lg:py-14" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Global Advisors</SectionTitle>
          <div className="mx-auto flex max-w-[760px] flex-col items-center justify-center gap-6 sm:flex-row sm:items-stretch sm:gap-8">
            {GLOBAL_ADVISORS.map((member) => (
              <ProfileCard key={member.name} member={member} large onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL LEADERSHIP / GLOBAL PARTNERS */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Global Leadership / Global Partners</SectionTitle>
          <div className="mx-auto grid max-w-[1020px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {GLOBAL_LEADERSHIP.map((member) => (
              <ProfileCard key={member.name} member={member} onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* SENIOR PROFESSIONALS */}
      <section className="w-full py-10 sm:py-12 lg:py-14" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Senior Professionals</SectionTitle>
          <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {SENIOR_PROFESSIONALS.map((member) => (
              <CompactCard key={member.name} member={member} onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="w-full pb-10 pt-2 sm:pb-12 lg:pb-14" style={{ backgroundColor: BEIGE }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Support Team</SectionTitle>
          <div className="mx-auto grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:justify-items-stretch">
            {SUPPORT_TEAM.map((member) => (
              <CompactCard key={member.name} member={member} onOpen={openMember} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence bar */}
      <section className="w-full border-y border-[#E5E7EB] bg-[#F3F6FA]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-4 sm:justify-between sm:gap-x-4 sm:px-6 sm:py-5 lg:px-10">
          <div className="flex items-center gap-2.5">
            <Globe2 className="h-5 w-5 shrink-0" strokeWidth={2} style={{ color: NAVY }} />
            <span className="text-[14px] font-bold sm:text-[15px]" style={{ color: NAVY }}>
              Our Global Presence
            </span>
          </div>
          {PRESENCE.map(({ label, flag }) => (
            <div key={label} className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flag} alt="" className="h-4 w-6 rounded-[2px] object-cover shadow-sm" />
              <span className="text-[13px] font-medium sm:text-[14px]" style={{ color: NAVY }}>
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
