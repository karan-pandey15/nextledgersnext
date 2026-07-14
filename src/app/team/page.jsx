"use client";

import { useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ContactUsCTA from "../components/HomeTrust/ContactUsCTA";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";


/** TOP ROW — 2 cards */
const TOP_LEADERSHIP = [
  {
    name: "Durgesh Pandey",
    credentials: "ACCA, CPA Pursuing",
    role: "Managing Partner",
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
      <div className="relative mx-auto mt-3 flex h-[3px] w-28 items-center justify-center sm:w-32">
        <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-[#FF6A00]" />
        <span className="relative z-[1] h-2.5 w-2.5 rounded-full bg-[#FF6A00]" aria-hidden="true" />
      </div>
    </div>
  );
}

function TeamAvatar({ src, name, bordered = false }) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));

  return (
    <div
      className={`relative mx-auto flex h-[100px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-[108px] sm:w-[108px] ${
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
              ? "h-[92%] w-[92%] object-contain object-bottom"
              : "h-full w-full object-cover object-center"
          }
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="text-[26px] font-bold tracking-wide sm:text-[28px]"
          style={{ color: ORANGE }}
          aria-hidden="true"
        >
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

/** One fixed size for every team card */
const CARD_BOX =
  "box-border flex h-[290px] w-[220px] flex-col items-center rounded-[14px] bg-white px-4 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5";

function TeamMemberCard({ member, accent = true }) {
  return (
    <div
      className={`${CARD_BOX} ${
        accent
          ? "border border-[#FF6A00] shadow-[0_4px_20px_rgba(255, 106, 0,0.18)] hover:shadow-[0_12px_32px_rgba(255, 106, 0,0.32)]"
          : "border border-[#D1D5DB] shadow-[0_4px_16px_rgba(15,39,74,0.06)] hover:border-[#FF6A00] hover:shadow-[0_12px_32px_rgba(255, 106, 0,0.28)]"
      }`}
    >
      <TeamAvatar src={member.image} name={member.name} bordered={accent} />
      <div className="mt-3.5 flex w-full flex-1 flex-col items-center">
        <h3
          className="text-[14px] font-bold leading-snug sm:text-[15px]"
          style={{ color: accent ? ORANGE : NAVY }}
        >
          {member.name}
        </h3>
        {member.credentials ? (
          <p className="mt-1 text-[12px] leading-snug text-[#1A1A1A] sm:text-[13px]">
            {member.credentials}
          </p>
        ) : null}
        <p
          className={`mt-0.5 text-[12px] leading-snug sm:text-[13px] ${
            accent ? "text-[#1A1A1A]" : "text-[#6B7280]"
          }`}
        >
          {member.role}
        </p>
      </div>
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
              <span className="font-semibold text-[#FF6A00]">Next Ledgers</span>
            </p>
            <h1 className="text-[30px] font-bold leading-[1.08] tracking-tight text-white sm:text-[40px] lg:text-[48px]">
              Our <span className="text-[#FF6A00]">Team.</span>
            </h1>
            <p className="mt-3 max-w-[540px] text-[14px] leading-7 text-white/85 sm:mt-4 sm:text-[15px]">
              Experienced professionals dedicated to delivering accurate, secure,
              and client-ready accounting support across the US and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership — every card same fixed size */}
      <section className="relative w-full overflow-hidden bg-[#F4F4F4] pt-8 pb-2 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-2 py-6 sm:px-4 sm:py-8 lg:px-6 lg:py-10">
            <SectionTitle>Leadership Team</SectionTitle>

            {/* Top: Durgesh + John */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
              {LEADERSHIP.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>

            {/* Below: Anjali + managers — same card size */}
            <div className="mt-7 flex flex-wrap justify-center gap-5 sm:mt-8 sm:gap-6">
              {SENIOR_MANAGERS.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support — same card size as leadership */}
      <section className="relative w-full overflow-hidden bg-white pb-9 pt-6 sm:pb-10 sm:pt-8 lg:pb-12 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-5 sm:px-8 lg:px-10">
            <SectionTitle>Senior Professional & Support Team</SectionTitle>

            <div className="flex flex-col gap-5 sm:gap-6">
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {SUPPORT_TEAM.slice(0, 4).map((member) => (
                  <TeamMemberCard key={member.name} member={member} accent={false} />
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {SUPPORT_TEAM.slice(4).map((member) => (
                  <TeamMemberCard key={member.name} member={member} accent={false} />
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