"use client";

import { useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ContactUsCTA from "../components/HomeTrust/ContactUsCTA";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

/** Photos from public/images/TeamImage */

/** TOP ROW — 2 cards */
const TOP_LEADERSHIP = [
  {
    name: "Durgesh Pandey",
    credentials: "ACCA",
    role: "CPA Pursuing · Managing Partner",
    image: "/images/TeamImage/Durgesh_Pandey-removebg-preview.png",
  },
  {
    name: "John Muchai",
    credentials: "CPA & CGMA",
    role: "Partner",
    image: "/images/TeamImage/John_Muchai.jpg?v=3",
  },
];

/** SECOND ROW — Anjali + Senior Managers, SAME card size/style as top row */
const SECOND_ROW = [
  {
    name: "Anjali Sharma",
    credentials: "MBA",
    role: "Non Profit Accounting Partner",
    image: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
  },
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
    name: "Ankita Varde",
    credentials: "CPA",
    role: "Head of Tax & Compliance",
    image: "/images/TeamImage/Ankita-removebg-preview.png",
  },
  {
    name: "Prince Mishra",
    credentials: "MBA, Finance",
    role: "Sr. Manager, Canada Audit & Accounting",
    image: "/images/TeamImage/SUMITNEXT.png",
  },
];

const SUPPORT_TEAM = [
  {
    name: "Praveen Kumar, CMA",
    role: "Audit & Tax Partner, Canada",
    image: "/images/TeamImage/Praveen_Kumar-removebg-preview.png",
  },
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
    image: null,
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
        className="mx-auto mt-2.5 h-[3px] w-16 rounded-full sm:w-20"
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
      className={`relative mx-auto flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-full sm:h-[120px] sm:w-[120px] ${
        bordered
          ? "ring-[2.5px] ring-[#F58220] ring-offset-2"
          : "ring-1 ring-[#E5E7EB]"
      } ${failed || !src ? "bg-[#FFF1E6]" : isCutout ? "bg-[#FFF7F0]" : "bg-[#E8EEF5]"}`}
    >
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className={
            isCutout
              ? "h-[92%] w-[92%] object-contain object-bottom"
              : "h-full w-full object-cover object-center"
          }
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="text-[28px] font-bold tracking-wide sm:text-[32px]"
          style={{ color: ORANGE }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

/**
 * UNIFIED LEADERSHIP CARD
 * Used for BOTH the top row (Durgesh, John Muchai) and the
 * second row (Anjali + Senior Managers) so every card is
 * IDENTICAL in width, height, padding, border, and font weight —
 * matching the reference image exactly.
 *
 * Fixed height (h-[300px]) + flex layout keeps names/roles of
 * different lengths from changing the card's box size.
 */
function TeamMemberCard({ member }) {
  return (
    <div
      className="flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start rounded-[16px] border-2 bg-white px-4 py-6 text-center shadow-[0_8px_22px_rgba(15,39,74,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(15,39,74,0.1)] sm:px-5 sm:py-7"
      style={{ borderColor: ORANGE }}
    >
      <TeamAvatar src={member.image} name={member.name} bordered />
      <h3
        className="mt-4 text-[15px] font-bold leading-snug sm:text-[16px]"
        style={{ color: ORANGE }}
      >
        {member.name}
      </h3>
      <p className="mt-1.5 text-[12px] font-medium text-[#1A1A1A] sm:text-[13px]">
        {member.credentials}
      </p>
      <p
        className="mt-1 text-[12px] font-bold leading-snug sm:text-[13px]"
        style={{ color: NAVY }}
      >
        {member.role}
      </p>
    </div>
  );
}

function SupportCard({ member }) {
  return (
    <div className="flex h-full w-full max-w-[220px] flex-col items-center rounded-[16px] border border-[#D1D5DB] bg-white px-3 py-5 text-center shadow-[0_8px_22px_rgba(15,39,74,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F58220]/35 hover:shadow-[0_12px_28px_rgba(15,39,74,0.1)] sm:px-4 sm:py-6">
      <TeamAvatar src={member.image} name={member.name} />
      <h3
        className="mt-3.5 text-[13px] font-bold leading-snug sm:text-[14px]"
        style={{ color: NAVY }}
      >
        {member.name}
      </h3>
      <p className="mt-1 text-[11px] leading-snug sm:text-[12px]" style={{ color: GREY }}>
        {member.role}
      </p>
    </div>
  );
}

export default function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Video hero — height fits text, same overlay as About/Home */}
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
              <span className="font-semibold text-[#F58220]">Next Ledgers</span>
            </p>
            <h1 className="text-[30px] font-bold leading-[1.08] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
              Our <span className="text-[#F58220]">Team.</span>
            </h1>
            <p className="mt-3 max-w-[540px] text-[14px] leading-7 text-white/85 sm:mt-4 sm:text-[15px]">
              Experienced professionals dedicated to delivering accurate, secure,
              and client-ready accounting support across the US and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership section — ALL cards use the same TeamMemberCard component,
          so top row (2) and second row (5) are pixel-identical in size */}
      <section className="relative w-full overflow-hidden bg-white pt-8 pb-0 sm:pt-9 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="bg-[#FFFFFF] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <SectionTitle>Leadership Team</SectionTitle>

            {/* TOP ROW — Durgesh, John Muchai */}
            <div className="flex flex-wrap items-stretch justify-center gap-5 sm:gap-6 lg:gap-8">
              {TOP_LEADERSHIP.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* SECOND ROW — Anjali + 4 Senior Managers, identical card style/size */}
            <div className="mt-6 flex flex-wrap items-stretch justify-center gap-5 sm:mt-8 sm:gap-6 lg:gap-6">
              {SECOND_ROW.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support — white bg like Why Choose Us (3rd reference) */}
      <section className="relative w-full overflow-hidden bg-white pb-9 pt-6 sm:pb-10 sm:pt-8 lg:pb-12 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-5 sm:px-8 lg:px-10">
            <SectionTitle>Senior Professional & Support Team</SectionTitle>

            {/* Row 1: 4 cards · Row 2: 5 cards — same card size, centered */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-5">
                {SUPPORT_TEAM.slice(0, 4).map((member) => (
                  <SupportCard key={member.name} member={member} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-5">
                {SUPPORT_TEAM.slice(4).map((member) => (
                  <SupportCard key={member.name} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <ContactUsCTA />
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}