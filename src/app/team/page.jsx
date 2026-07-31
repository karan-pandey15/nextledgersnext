"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ContactUsCTA from "../components/HomeTrust/ContactUsCTA";
import TeamMemberModal from "../components/Team/TeamMemberModal";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

/** Leadership — row 1: 2 cards (centered) */
const LEADERSHIP_ROW_1 = [
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

/** Leadership — row 2: 3 cards */
const LEADERSHIP_ROW_2 = [
  {
    name: "Anjali Sharma",
    credentials: "MBA",
    role: "Non-Profit Accounting, Partner",
    image: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
  },
  {
    name: "Praveen Kumar",
    credentials: "CMA",
    role: "Audit & Tax Partner, Canada",
    image: "/images/TeamImage/Praveen_Kumar-removebg-preview.png",
  },
  {
    name: "Ankita Varde",
    credentials: "CPA",
    role: "Head of Tax & Compliance",
    image: "/images/TeamImage/Ankita-removebg-preview.png",
  },
];

/** Leadership — row 3: 3 cards */
const LEADERSHIP_ROW_3 = [
  {
    name: "Akash Gangwar",
    credentials: "M.com, EA",
    role: "Sr. Manager, US Audit & Accounting",
    image: "/images/TeamImage/Akash_Gangwar-removebg-preview.png",
  },
  {
    name: "Parwinder Singh",
    credentials: "MBA, Finance",
    role: "Sr. Manager, US Audit & Accounting",
    image: "/images/TeamImage/Parwinder_Singh-removebg-preview.png",
  },
  {
    name: "Prince Mishra",
    credentials: "MBA, Finance",
    role: "Sr. Manager, Canada Audit & Accounting",
    image: "/images/TeamImage/SUMITNEXT.png",
  },
];

/** Support — 4 + 4 */
const SUPPORT_TEAM = [
  {
    name: "Dharmesh Kumar",
    role: "Client Onboarding Specialist",
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
    image:  "/images/TeamImage/Karan Kapoor.jpg",
  },
  {
    name: "Kirti Kapoor",
    role: "HR Manager",
    image: "/images/TeamImage/Kirti_Kapoor-removebg-preview.png",
  },
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

function SectionTitle({ children }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      <h2
        className="text-[22px] font-bold leading-tight sm:text-[26px] lg:text-[28px]"
        style={{ color: NAVY }}
      >
        {children}
      </h2>
      <div
        className="mx-auto mt-3 h-[3px] w-16 rounded-full sm:w-20"
        style={{ backgroundColor: ORANGE }}
        aria-hidden="true"
      />
    </div>
  );
}

function TeamAvatar({ src, name, bordered = false }) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));

  return (
    <div
      className={`relative mx-auto flex h-[124px] w-[124px] shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-[132px] sm:w-[132px] ${
        bordered ? "ring-[2px] ring-[#FF6A00]" : "ring-1 ring-[#E5E7EB]"
      } ${failed || !src ? "bg-[#FFF1E6]" : isCutout ? "bg-[#FFF7F0]" : "bg-[#E8EEF5]"}`}
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
          className="text-[28px] font-bold tracking-wide sm:text-[30px]"
          style={{ color: ORANGE }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

/** ~10% larger — height follows content so no empty gap under designation */
const CARD_BOX =
  "box-border flex w-[230px] cursor-pointer flex-col items-center rounded-[13px] bg-white px-4 pt-5 pb-4 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 sm:w-[242px]";

function TeamMemberCard({ member, accent = true, onOpen, onHoverStart, onHoverEnd }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${member.name}`}
      className={`${CARD_BOX} ${
        accent
          ? "border border-[#FF6A00] shadow-[0_4px_20px_rgba(255,106,0,0.18)] hover:shadow-[0_12px_32px_rgba(255,106,0,0.32)]"
          : "border border-[#D1D5DB] shadow-[0_4px_16px_rgba(15,39,74,0.06)] hover:border-[#FF6A00] hover:shadow-[0_12px_32px_rgba(255,106,0,0.28)]"
      }`}
      onMouseEnter={() => onHoverStart?.(member)}
      onMouseLeave={() => onHoverEnd?.()}
      onClick={() => onOpen?.(member)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.(member);
        }
      }}
    >
      <TeamAvatar src={member.image} name={member.name} bordered={accent} />
      <div className="mt-3.5 flex w-full flex-col items-center px-1">
        <h3
          className="text-[14px] font-bold leading-tight sm:text-[15px]"
          style={{ color: accent ? ORANGE : "#4B5563" }}
        >
          {member.name}
        </h3>
        {member.credentials ? (
          <p className="mt-1.5 text-[12px] font-normal leading-tight text-[#4B5563] sm:text-[13px]">
            {member.credentials}
          </p>
        ) : null}
        <p
          className={`mt-1.5 max-w-full text-[12px] leading-tight sm:text-[13px] ${
            accent ? "font-bold text-[#1A1A1A]" : "font-normal text-[#1A1A1A]"
          }`}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

function CardRow({ members, accent = true, onOpen, onHoverStart, onHoverEnd }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {members.map((member) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          accent={accent}
          onOpen={onOpen}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
        />
      ))}
    </div>
  );
}

const HOVER_OPEN_MS = 120;

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const openTimerRef = useRef(null);

  const clearOpenTimer = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  }, []);

  const openMember = useCallback(
    (member) => {
      clearOpenTimer();
      setSelectedMember(member);
    },
    [clearOpenTimer]
  );

  const closeMember = useCallback(() => {
    clearOpenTimer();
    setSelectedMember(null);
  }, [clearOpenTimer]);

  /** Hover opens modal. Do not close on mouse leave — the overlay covers the card
   *  and would fire leave immediately, causing flicker. Close via X / backdrop / Esc. */
  const handleHoverStart = useCallback(
    (member) => {
      clearOpenTimer();
      openTimerRef.current = setTimeout(() => {
        setSelectedMember(member);
        openTimerRef.current = null;
      }, HOVER_OPEN_MS);
    },
    [clearOpenTimer]
  );

  const handleHoverEnd = useCallback(() => {
    // Cancel only a pending open (user skimmed past the card).
    // Never auto-close an already-open modal from card leave.
    clearOpenTimer();
  }, [clearOpenTimer]);

  useEffect(() => () => clearOpenTimer(), [clearOpenTimer]);

  const cardHandlers = {
    onOpen: openMember,
    onHoverStart: handleHoverStart,
    onHoverEnd: handleHoverEnd,
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#F8F9FA] font-sans text-[#1A1A1A]">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section className="relative w-full overflow-hidden bg-[#111111]">
        <video
          src="/images/finalvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <div className="max-w-[720px]">
            <p className="mb-3 text-[13px] font-medium text-white/90 sm:mb-4 sm:text-[14px]">
              The people behind{" "}
              <span className="font-semibold text-[#FF6A00]">Next Ledgers</span>
            </p>
            <h1 className="text-[clamp(22px,6vw,28px)] font-bold leading-[1.12] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
              Our <span className="text-[#FF6A00]">Team.</span>
            </h1>
            <p className="mt-3 max-w-[540px] text-[14px] leading-7 text-white/85 sm:mt-4 sm:text-[15px]">
              Experienced professionals dedicated to delivering accurate, secure,
              and client-ready accounting support across the US and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership — 2 / 3 / 3 */}
      <section className="relative w-full overflow-hidden bg-[#F8F9FA] pt-8 pb-2 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-2 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
            <SectionTitle>Leadership Team</SectionTitle>

            <div className="flex flex-col gap-5 sm:gap-6">
              <CardRow members={LEADERSHIP_ROW_1} {...cardHandlers} />
              <CardRow members={LEADERSHIP_ROW_2} {...cardHandlers} />
              <CardRow members={LEADERSHIP_ROW_3} {...cardHandlers} />
            </div>
          </div>
        </div>
      </section>

      {/* Support — 4 / 4 */}
      <section className="relative w-full overflow-hidden bg-[#F8F9FA] pb-9 pt-6 sm:pb-10 sm:pt-8 lg:pb-12 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-2 sm:px-4 lg:px-6">
            <SectionTitle>Senior Professional & Support Team</SectionTitle>

            <div className="flex flex-col gap-5 sm:gap-6">
              <CardRow members={SUPPORT_TEAM.slice(0, 4)} accent={false} {...cardHandlers} />
              <CardRow members={SUPPORT_TEAM.slice(4)} accent={false} {...cardHandlers} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F9FA] px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <ContactUsCTA />
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
