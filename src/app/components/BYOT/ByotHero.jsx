"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Calculator,
  ClipboardList,
  FileText,
  Headphones,
  Percent,
  UserRound,
  Users,
  ShieldCheck,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const ROLES = [
  { label: "Accountant", icon: UserRound },
  { label: "Bookkeeper", icon: Calculator },
  { label: "Payroll Specialist", icon: ClipboardList },
  { label: "Tax Professional", icon: Percent },
  { label: "Management Accountant", icon: BarChart3 },
  { label: "Virtual CFO", icon: FileText },
  { label: "Admin & Back Office Support", icon: Headphones },
];

const ORBIT = [
  {
    label: "Accountant",
    src: "/images/TeamImage/Avneesh_Mishra-removebg-preview.png",
    style: { top: "2%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    label: "Payroll Specialist",
    src: "/images/TeamImage/Anjali_Sharma-removebg-preview.png",
    style: { top: "18%", right: "4%" },
  },
  {
    label: "Virtual CFO",
    src: "/images/TeamImage/Durgesh_Pandey-removebg-preview.png",
    style: { bottom: "18%", right: "6%" },
  },
  {
    label: "Management Accountant",
    src: "/images/TeamImage/Kirti_Kapoor-removebg-preview.png",
    style: { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    label: "Tax Professional",
    src: "/images/TeamImage/Akash_Gangwar-removebg-preview.png",
    style: { bottom: "18%", left: "6%" },
  },
  {
    label: "Bookkeeper",
    src: "/images/TeamImage/Ankita-removebg-preview.png",
    style: { top: "18%", left: "4%" },
  },
];

export default function ByotHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_70%_40%,rgba(255,106,0,0.06),transparent_55%)] lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-14">
        {/* Left copy */}
        <div className="order-1 text-center lg:text-left">
          <div className="inline-flex overflow-hidden rounded-full shadow-sm">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-white"
              style={{ background: ORANGE }}
            >
              <Users className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
            <span
              className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px]"
              style={{ background: NAVY }}
            >
              Build Your Own Team
            </span>
          </div>

          <h1
            className="mt-5 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[42px]"
            style={{ color: NAVY }}
          >
            Build Your Dedicated{" "}
            <span style={{ color: ORANGE }}>Offshore Finance Team</span>
          </h1>

          <p
            className="mt-4 max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: GREY }}
          >
            Scale your business with experienced accountants, bookkeepers, tax
            professionals, payroll specialists, and virtual CFOs who work
            exclusively for your business.
          </p>
          <p
            className="mt-2.5 max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: GREY }}
          >
            Fully integrated with your systems, processes, software, and working
            hours—without the cost and complexity of local hiring.
          </p>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <Users className="h-4 w-4" style={{ color: ORANGE }} strokeWidth={2} />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: GREY }}
              >
                Dedicated Roles You Can Build
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {ROLES.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-[12px] border border-[#F0E6DC] bg-white px-2 py-3 text-center shadow-[0_2px_10px_rgba(15,39,74,0.04)]"
                >
                  <span
                    className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ background: "#FFF4EA", color: ORANGE }}
                  >
                    <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span
                    className="text-[11px] font-semibold leading-tight sm:text-[12px]"
                    style={{ color: NAVY }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/contact"
              className="cta-fill-orange inline-flex items-center gap-2 rounded-[10px] bg-[#FF6A00] px-5 py-3 text-[13px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/25 transition hover:bg-[#E85E00] sm:text-[14px]"
            >
              <Users className="h-4 w-4" strokeWidth={2.2} />
              Build Your Team Today
            </Link>
            <div className="flex items-start gap-2 text-left">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: ORANGE }}
                strokeWidth={1.75}
              />
              <div>
                <p className="text-[13px] font-bold" style={{ color: NAVY }}>
                  Secure. Reliable. Scalable.
                </p>
                <p className="text-[12px]" style={{ color: GREY }}>
                  Your growth, our responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right orbit visual */}
        <div className="order-2 flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-[480px] sm:max-w-[520px]">
            <div
              className="absolute inset-[12%] rounded-full border border-dashed opacity-50"
              style={{ borderColor: `${ORANGE}66` }}
            />
            <div
              className="absolute inset-[26%] rounded-full border border-dashed opacity-40"
              style={{ borderColor: `${ORANGE}55` }}
            />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white p-3 text-center shadow-[0_8px_28px_rgba(15,39,74,0.12)] sm:h-[136px] sm:w-[136px]">
              <Image
                src="/images/nextledgerlogo3.png"
                alt="Next Ledgers"
                width={88}
                height={48}
                className="h-auto w-[72px] object-contain sm:w-[82px]"
              />
              <p
                className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] sm:text-[9px]"
                style={{ color: GREY }}
              >
                Accounting &amp; Advisory
              </p>
            </div>

            {ORBIT.map((person) => (
              <div
                key={person.label}
                className="absolute z-[5] flex w-[88px] flex-col items-center sm:w-[100px]"
                style={person.style}
              >
                <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full border-2 border-white bg-[#FFF4EA] shadow-md sm:h-[76px] sm:w-[76px]">
                  <Image
                    src={person.src}
                    alt={person.label}
                    fill
                    className="object-cover object-top"
                    sizes="76px"
                  />
                </div>
                <span
                  className="mt-1.5 rounded-full bg-white px-2 py-0.5 text-[9px] font-semibold shadow-sm sm:text-[10px]"
                  style={{ color: NAVY }}
                >
                  {person.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
