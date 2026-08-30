"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Mail,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import SiteNavbar from "../components/SiteNavbar/SiteNavbar";
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
    name: "Durgesh Pandey, ACCA",
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
    companyRole: "Partner, North America",
    image: "/images/TeamImage/John_Muchai-removebg-preview.png",
    email: "John.muchai@nextledgers.com",
  },
];

/** GLOBAL LEADERSHIP / GLOBAL PARTNERS — order: Anjali, Praveen, Ankita, Shivam, Parwinder, Akash */
const GLOBAL_LEADERSHIP = [
  {
    name: "Anjali Sharma",
    credentials: "MBA",
    role: "Non Profit Accounting Partner",
    companyRole: "Non Profit Accounting Partner",
    image: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
    email: "Anjali@nextledgers.com",
    bio: [
      "I am an non-profit qualified professional with over 5+ years of experience in accounting, tax, and financial management. My expertise lies in delivering accurate financial reporting, ensuring regulatory compliance, and providing strategic insights that help businesses make informed decisions and achieve sustainable growth.",
      "At Next Ledgers, I lead the Europe, Middle East & Asia Pacific operations, helping accounting firms and businesses streamline their financial processes through reliable outsourcing and technology-driven solutions. I am passionate about building long-term client relationships and delivering exceptional value through quality, transparency, and timely communication.",
      "My mission is to empower businesses by optimizing their financial operations and supporting their growth journey with efficient accounting, compliance, and advisory services across global markets.",
    ],
    highlights: [
      { value: "120+", label: "Non-Profit Accounting", icon: "briefcase" },
      { value: "55+", label: "Grant & Fund Reporting", icon: "heart" },
      { value: "2+", label: "Countries Served", icon: "file" },
      { value: "100%", label: "Compliance & Financial Stewardship", icon: "shield" },
    ],
  },
  {
    name: "Praveen Kumar",
    credentials: "CMA",
    role: "Audit & Tax Partner, Canada",
    companyRole: "Audit & Tax Partner, Canada",
    designationLines: ["Audit & Tax Partner, Canada"],
    image: "/images/TeamImage/Praveen-__1_-removebg-preview.png",
    /** Slight zoom — fill circle so portrait displays properly */
    avatarVariant: "praveen",
    email: "Praveen.kumar@nextledgers.com",
    linkedin: "linkedin.com/in/praveen-kumar-143b90216",
    bio: [
      "Praveen Kumar serves as the Audit & Tax Partner – Canada at Next Ledgers, supporting accounting firms and businesses with high-quality audit support, financial reporting, and tax compliance solutions. He is committed to helping clients strengthen financial governance through accuracy, transparency, and practical business insight.",
      "Working closely with organisations across diverse industries, Praveen focuses on delivering dependable accounting solutions, supporting regulatory compliance, and ensuring financial information is both accurate and decision-ready. His collaborative approach and attention to detail help clients confidently navigate complex accounting and tax requirements. As a member of the Global Partners team, Praveen plays a key role in maintaining Next Ledgers’ commitment to quality, integrity, and exceptional client service. He believes trusted financial reporting and proactive advisory support enable businesses to make informed decisions and achieve sustainable growth.",
    ],
    highlights: [
      { value: "140+", label: "Projects Delivered", icon: "briefcase" },
      { value: "Audit", label: "Excellence", icon: "file" },
      { value: "Tax", label: "Compliance", icon: "gavel" },
      { value: "Regulatory", label: "Assurance", icon: "shield" },
    ],
  },
  {
    name: "Ankita Varde",
    credentials: "CPA",
    role: "Head of Tax & Compliance",
    companyRole: "Head of Tax & Compliance",
    image: "/images/TeamImage/Ankita-removebg-preview.png",
    email: "Ankita.varde@nextledgers.com",
    bio: [
      "Ankita Varde is the Head of Tax & Compliance – North America at Next Ledgers, helping accounting firms and businesses stay compliant while making tax processes clearer and more efficient. She focuses on delivering accurate, timely, and practical tax solutions that support confident decision-making.",
      "Her expertise covers corporate tax compliance, tax planning, and regulatory reporting. Ankita works closely with clients to manage complex tax requirements, reduce risk, and maintain strong compliance standards across North American jurisdictions.",
      "As a member of the Global Partners team, Ankita plays a key role in upholding Next Ledgers’ commitment to quality, integrity, and exceptional client service. She believes proactive tax guidance and disciplined compliance practices help businesses grow with confidence.",
    ],
    highlights: [
      { value: "130+", label: "Projects Delivered", icon: "briefcase" },
      { value: "Tax", label: "Planning", icon: "building" },
      { value: "Regulatory", label: "Compliance", icon: "globe" },
      { value: "Risk", label: "Management", icon: "shield" },
    ],
  },
  {
    name: "Shivam Baranwal",
    /** Shown only in the detail modal, not on the main team card */
    modalName: "Shivam Baranwal ACCA",
    credentials: "ACCA Member | B.Com",
    role: "Accounting & Tax Partner",
    companyRole: "Accounting & Tax Partner",
    designationLines: ["Accounting & Tax Partner", "UK, Middle East & APAC"],
    image: "/images/TeamImage/shivam.png",
    /** Portrait fill — slightly larger head-and-shoulders crop (unlike cutout photos) */
    avatarVariant: "shivam",
    email: "Shivam.baranwal@nextledgers.com",
    linkedin: "linkedin.com/in/shivam-baranwal-acca-b02627221",
    quote:
      "Growth begins with trust, and trust is earned through consistency, integrity, and excellence.",
    bio: [
      "Shivam Baranwal is an ACCA-qualified accounting professional and Partner at Next Ledgers, leading the firm’s Accounting & Tax practice across Europe, the Middle East, and Asia Pacific. He collaborates with accounting firms and businesses to deliver scalable outsourcing solutions that enhance operational efficiency, strengthen financial reporting, and support sustainable business growth.",
      "His expertise spans year-end accounting, bookkeeping, management reporting, VAT, payroll, corporation tax support, and cloud accounting solutions. By combining technical knowledge with a client-first approach, Shivam helps businesses streamline finance functions, maintain compliance, and make informed financial decisions through reliable financial reporting.",
      "Committed to quality, transparency, and continuous improvement, Shivam believes every client engagement should create measurable business value. His focus is on building trusted partnerships that enable businesses and accounting firms to scale confidently while maintaining the highest standards of accuracy, confidentiality, and service excellence.",
    ],
    highlights: [
      { value: "125+", label: "Projects Delivered", icon: "briefcase" },
      { value: "55+", label: "Businesses Supported", icon: "building" },
      { value: "7+", label: "Countries Served", icon: "globe" },
      { value: "100%", label: "Confidentiality & Data Security", icon: "shield" },
    ],
  },
  {
    name: "Parwinder Singh",
    credentials: "MBA, Finance",
    role: "Accounting & Tax Partner",
    companyRole: "Accounting & Tax Partner",
    designationLines: ["Accounting & Tax Partner", "North America"],
    image: "/images/TeamImage/Parwinder_Singh-removebg-preview.png",
    email: "Parwinder.singh@nextledgers.com",
    linkedin: "linkedin.com/in/parwinder-singh-a915001b5",
    bio: [
      "Parwinder Singh is an Accounting Partner at Next Ledgers, supporting businesses and accounting firms across North America with reliable accounting solutions, financial reporting, and business support services. He is dedicated to helping clients improve financial operations through accuracy, consistency, and a practical approach to accounting.",
      "Working closely with organisations across a wide range of industries, Parwinder focuses on maintaining high-quality financial reporting, streamlining accounting workflows, and supporting businesses with dependable financial information. His collaborative mindset and attention to detail help clients strengthen operational efficiency while maintaining compliance and financial transparency.",
      "As a member of the Global Partners team, Parwinder plays a key role in delivering scalable accounting solutions, building trusted client relationships, and upholding Next Ledgers’ commitment to quality, professionalism, and confidential service delivery.",
    ],
    highlights: [
      { value: "110+", label: "Projects Delivered", icon: "briefcase" },
      { value: "Financial", label: "Reporting", icon: "chart" },
      { value: "Process", label: "Improvement", icon: "gear" },
      { value: "Trusted Client", label: "Relationships", icon: "handshake" },
    ],
  },
  {
    name: "Akash Gangwar",
    credentials: "MBA",
    role: "Accounting & Tax Partner",
    companyRole: "Accounting & Tax Partner",
    designationLines: ["Accounting & Tax Partner", "North America"],
    image: "/images/TeamImage/akashfinal.png",
    email: "Akash.gangwar@nextledgers.com",
    linkedin: "linkedin.com/in/akash-kumar-147346244",
    bio: [
      "Akash Gangwar is an Accounting Partner at Next Ledgers, supporting accounting firms and businesses across North America with dependable accounting solutions and client-focused financial support. He is committed to helping organisations improve operational efficiency through accurate financial reporting, streamlined accounting processes, and reliable compliance support.",
      "With a strong foundation in accounting principles and financial management, Akash works closely with clients to maintain accurate books, strengthen reporting processes, and deliver timely financial information. His practical approach and attention to detail help businesses operate with greater confidence while ensuring quality and consistency in every engagement.",
      "As a member of the Global Partners team, Akash contributes to Next Ledgers' commitment to delivering scalable accounting solutions, fostering trusted client relationships, and maintaining the highest standards of professionalism, confidentiality, and service excellence.",
    ],
    highlights: [
      { value: "115+", label: "Projects Delivered", icon: "briefcase" },
      { value: "Financial", label: "Reporting", icon: "building" },
      { value: "6+", label: "Countries Served", icon: "globe" },
      { value: "100%", label: "Quality & Compliance", icon: "shield" },
    ],
  },
];

/** SENIOR PROFESSIONALS — Global Leadership card style, original data */
const SENIOR_PROFESSIONALS = [
  {
    name: "Dharmesh Kumar",
    role: "Client Onboarding Specialist",
    image: "/images/TeamImage/Dharmesh-_Final-removebg-preview.png",
  },
  {
    name: "Kirti Kapoor",
    role: "Virtual Assistance Specialist",
    image: "/images/TeamImage/Kirti-Final-removebg-preview.png",
  },
  {
    name: "Nikhil Kushwaha",
    role: "Global AP & AR Specialist",
    image: "/images/TeamImage/Nikhil-removebg-preview.png",
  },
  {
    name: "Md. Almasud",
    role: "Indirect Tax & Compliance Expert",
    image: "/images/TeamImage/Al_masud..-removebg-preview.png",
  },
  {
    name: "Nisha Jindal",
    role: "Payroll & Compliance Specialist",
    image: "/images/TeamImage/Nisha__1_-removebg-preview.png",
    avatarVariant: "nisha",
  },
  {
    name: "Abhishek Rawat",
    role: "Financial Planning & KPIs Expert",
    image: "/images/TeamImage/abhishekremove.png",
    avatarVariant: "abhishek",
  },
];

/** SUPPORT TEAM — Global Leadership card style, original data */
const SUPPORT_TEAM = [
  {
    name: "Avnish Mercer",
    role: "Business Development Specialist",
    image: "/images/TeamImage/Avneesh_Mishra-removebg-preview.png",
    avatarVariant: "avnish",
  },
  {
    name: "Richa Chaudhary",
    role: "HR Manager",
    image: "/images/TeamImage/Richa_HR-removebg-preview.png",
    avatarVariant: "richa",
  },
  {
    name: "Rahul Paul",
    role: "IT & Security Administrator",
    image: "/images/TeamImage/rahul.png",
    /** Zoom crop — frame head + crossed arms/hands tightly in the circle */
    avatarVariant: "rahul",
  },
];

const TEAM_ICON_BASE = "/images/icon/Our%20Team";

const STATS = [
  {
    value: "250+",
    label: "Projects Delivered",
    icon: `${TEAM_ICON_BASE}/${encodeURIComponent("250+ Project.png")}`,
  },
  {
    value: "15+",
    label: "Industry Experts",
    icon: `${TEAM_ICON_BASE}/${encodeURIComponent("15+.png")}`,
  },
  {
    value: "9+",
    label: "Countries Served",
    icon: `${TEAM_ICON_BASE}/${encodeURIComponent("9+.png")}`,
  },
  {
    value: "99.9%",
    label: "Client Satisfaction",
    icon: `${TEAM_ICON_BASE}/${encodeURIComponent("99.9.png")}`,
  },
];

const PRESENCE = [
  { label: "Europe", flag: "https://flagcdn.com/w80/eu.png" },
  { label: "North America", flag: "https://flagcdn.com/w80/us.png" },
  { label: "Middle East", flag: "https://flagcdn.com/w80/ae.png" },
  { label: "Asia Pacific", flag: "/images/specificreason.png", isGlobe: true },
];

const PRESENCE_INTERVAL_MS = 1500;

function PresenceFlag({ flag, label, isGlobe, size = "md" }) {
  const globeClass =
    size === "sm"
      ? "h-8 w-8 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10"
      : "h-8 w-8 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10 sm:h-9 sm:w-9";
  const flagClass =
    size === "sm"
      ? "h-6 w-9 shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-black/10"
      : "h-6 w-9 shrink-0 rounded-[3px] object-cover shadow-sm ring-1 ring-black/10 sm:h-7 sm:w-10";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={flag}
      alt={`${label} ${isGlobe ? "region" : "flag"}`}
      className={isGlobe ? globeClass : flagClass}
      draggable={false}
    />
  );
}

function GlobalPresenceBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPhone, setIsPhone] = useState(false);

  // Detect phone viewport and keep carousel in sync on resize
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setIsPhone(mq.matches);
    sync();

    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", sync);
      return () => mq.removeEventListener("change", sync);
    }

    mq.addListener(sync);
    return () => mq.removeListener(sync);
  }, []);

  // Infinite region carousel — phone only; title/logo stay fixed
  useEffect(() => {
    if (!isPhone) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PRESENCE.length);
    }, PRESENCE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [isPhone]);

  // Preload flags so swaps don't flash empty
  useEffect(() => {
    PRESENCE.forEach((item) => {
      const img = new window.Image();
      img.src = item.flag;
    });
  }, []);

  return (
    <section className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-10" style={{ backgroundColor: BEIGE }}>
      {/* Phone — fixed title + one region at a time */}
      <div className="mx-auto flex max-w-[980px] flex-col items-stretch overflow-hidden rounded-[28px] bg-white py-2 shadow-[0_4px_16px_rgba(15,39,74,0.08)] sm:hidden">
        <div className="flex items-center justify-center gap-2.5 px-5 py-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/worldfooter.png"
            alt=""
            className="h-7 w-7 shrink-0 rounded-full object-cover"
          />
          <span className="whitespace-nowrap text-[13px] font-bold" style={{ color: NAVY }}>
            Our Global Presence
          </span>
        </div>

        <div
          className="relative flex h-[52px] items-center justify-center overflow-hidden border-t border-[#E8E8E8] px-4"
          aria-live="polite"
          aria-atomic="true"
        >
          {PRESENCE.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.label}
                className={`absolute inset-x-0 flex items-center justify-center gap-2.5 px-4 transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <PresenceFlag
                  flag={item.flag}
                  label={item.label}
                  isGlobe={item.isGlobe}
                  size="sm"
                />
                <span
                  className="whitespace-nowrap text-[13px] font-medium"
                  style={{ color: BODY }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet / laptop — full horizontal pill (unchanged) */}
      <div className="mx-auto hidden max-w-[980px] flex-row items-center rounded-full bg-white py-0 shadow-[0_4px_16px_rgba(15,39,74,0.08)] sm:flex">
        <div className="flex shrink-0 items-center justify-start gap-2.5 py-3.5 pl-6 pr-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/worldfooter.png"
            alt=""
            className="h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <span className="whitespace-nowrap text-[14px] font-bold" style={{ color: NAVY }}>
            Our Global Presence
          </span>
        </div>

        {PRESENCE.map(({ label, flag, isGlobe }) => (
          <div
            key={label}
            className="flex flex-1 items-center justify-center gap-2.5 border-l border-[#E8E8E8] px-4 py-3.5"
          >
            <PresenceFlag flag={flag} label={label} isGlobe={isGlobe} />
            <span className="whitespace-nowrap text-[14px] font-medium" style={{ color: BODY }}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function getInitials(name) {
  const first = name
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .filter((part) => !/^(ACCA|CPA|CMA|MBA|EA|CGMA|CA)$/i.test(part))[0];
  return (first?.[0] || "?").toUpperCase();
}

/** Split "Title - Region" into lines; prefer explicit designationLines when set */
function getRoleLines(memberOrRole) {
  if (!memberOrRole) return [];
  if (typeof memberOrRole === "object") {
    if (Array.isArray(memberOrRole.designationLines) && memberOrRole.designationLines.length) {
      return memberOrRole.designationLines;
    }
    memberOrRole = memberOrRole.role || memberOrRole.companyRole || "";
  }
  if (!memberOrRole) return [];
  return String(memberOrRole)
    .split(/\s*[-–—]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
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
  // Shivam only — source photo sits right; center face without scaling (avoids bottom cut)
  if (variant === "shivam") {
    return "h-full w-full object-cover object-[70%_48%]";
  }
  // Praveen only — mild zoom so full head + crossed arms fit inside the circle
  if (variant === "praveen") {
    return "h-full w-full object-contain object-bottom scale-[1.05] origin-bottom";
  }
  // Rahul only — same framing as Abhishek (head + crossed arms/hands)
  if (variant === "rahul") {
    return "h-full w-full object-cover object-[50%_10%] scale-[1.55] origin-top";
  }
  // Avnish / Richa — slightly eased crop; 5px top inset is applied on the box
  if (variant === "avnish") {
    return "h-full w-full object-cover object-[50%_10%] scale-[1.45] origin-top";
  }
  if (variant === "richa") {
    return "h-full w-full object-cover object-[50%_10%] scale-[1.42] origin-top";
  }
  // Nisha — slightly reduce size so top head gap matches Md. Almasud
  if (variant === "nisha") {
    return "h-full w-full object-contain object-bottom scale-[0.9] origin-bottom";
  }
  // Abhishek — head + shoulders like Md. Almasud (crop folded hands, match head gap)
  if (variant === "abhishek") {
    return "h-full w-full object-cover object-[50%_26%] scale-[1.38] origin-top";
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
  const isCutout = Boolean(src?.includes("removebg") || src?.includes("remove.png"));
  const imageSrc = src ? encodeURI(src) : "";
  const hasHeadGap = variant === "avnish" || variant === "richa";
  const hasAlmasudGap = variant === "abhishek";
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
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ${sizeClass} ${
        hasAlmasudGap ? "pt-[10px]" : hasHeadGap ? "pt-[5px]" : ""
      }`}
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
  const roleLines = getRoleLines(member);
  const cardName = member.name;
  const roleTextClass = `font-bold leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`;

  return (
    <article
      className={`flex w-full max-w-[290px] flex-col items-center rounded-[14px] border border-[#FF6A00] bg-white px-5 pb-4 pt-7 shadow-[0_4px_18px_rgba(15,39,74,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(15,39,74,0.12)] sm:px-6 sm:pb-5 sm:pt-8 ${
        large ? "" : "sm:w-[270px]"
      }`}
    >
      {/* Card body → opens popup; Email / LinkedIn below handle their own redirects */}
      <button
        type="button"
        className="flex w-full cursor-pointer flex-col items-center text-center transition-opacity hover:opacity-90"
        onClick={() => onOpen?.(member)}
        aria-label={`View details for ${cardName}`}
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
          {cardName}
        </h3>
        {member.credentials ? (
          <p
            className={`mt-1.5 font-normal leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`}
            style={{ color: NAVY }}
          >
            {member.credentials}
          </p>
        ) : null}
        <div className="mt-1 space-y-0.5">
          {roleLines.map((line) => (
            <p key={line} className={roleTextClass} style={{ color: NAVY }}>
              {line}
            </p>
          ))}
        </div>
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

/** Same look as Global Leadership cards — no Email/LinkedIn, not clickable */
function DisplayProfileCard({ member, large = false }) {
  const roleLines = getRoleLines(member);
  const cardName = member.name;
  const roleTextClass = `font-bold leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`;

  return (
    <article
      className={`flex w-full max-w-[290px] flex-col items-center rounded-[14px] border border-[#FF6A00] bg-white px-5 pb-6 pt-7 shadow-[0_4px_18px_rgba(15,39,74,0.06)] sm:px-6 sm:pb-7 sm:pt-8 ${
        large ? "" : "sm:w-[270px]"
      }`}
    >
      <div className="flex w-full flex-col items-center text-center">
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
          {cardName}
        </h3>
        {member.credentials ? (
          <p
            className={`mt-1.5 font-normal leading-snug ${large ? "text-[14px] sm:text-[15px]" : "text-[13px] sm:text-[14px]"}`}
            style={{ color: NAVY }}
          >
            {member.credentials}
          </p>
        ) : null}
        <div className="mt-1 space-y-0.5">
          {roleLines.map((line) => (
            <p key={line} className={roleTextClass} style={{ color: NAVY }}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </article>
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
      <SiteNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

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
          <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
            {STATS.map(({ value, label, icon }, index) => (
              <div
                key={label}
                className={`flex flex-row items-center justify-center gap-2.5 px-2 py-2 sm:gap-3.5 sm:px-5 ${
                  index % 2 === 1 ? "border-l border-[#E5E7EB]" : ""
                } ${index > 0 ? "sm:border-l sm:border-[#E5E7EB]" : ""}`}
              >
                <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-[44px] sm:w-[44px]">
                  <img
                    src={icon}
                    alt={label}
                    className="h-full w-full object-cover scale-[1.04]"
                  />
                </span>
                <div className="min-w-0 text-left">
                  <p
                    className="text-[20px] font-bold leading-none sm:text-[26px] lg:text-[28px]"
                    style={{ color: ORANGE }}
                  >
                    {value}
                  </p>
                  <p
                    className="mt-1 text-[11px] font-medium leading-snug sm:mt-1.5 sm:text-[13px]"
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
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {SENIOR_PROFESSIONALS.map((member) => (
              <DisplayProfileCard key={member.name} member={member} large />
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section className="w-full py-8 sm:py-9 lg:py-10" style={{ backgroundColor: "#FFF7F0" }}>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <SectionTitle>Support Team</SectionTitle>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {SUPPORT_TEAM.map((member) => (
              <DisplayProfileCard key={member.name} member={member} large />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence bar — phone carousel / desktop pill */}
      <GlobalPresenceBar />

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
