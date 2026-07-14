"use client";

import React from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";
const BORDER = "#E5E7EB";
const LEFT_HEADER_BG = "#F3F4F6";
const ROW_ALT = "#FFF7F0";

const ROWS = [
  { left: "Recruitment Cost", right: "No Hiring Cost" },
  { left: "Training & Onboarding", right: "Ready to Start" },
  { left: "Employee Benefits", right: "No Benefits / Overheads" },
  { left: "Office Space & Infrastructure", right: "100% Remote" },
  { left: "Payroll & Taxes", right: "Included" },
  { left: "HR Management", right: "Not Required" },
  { left: "Turnover Risk", right: "Dedicated Backup Available" },
  { left: "Scalability", right: "Increase or Decrease Anytime" },
];

function CrossIcon() {
  return (
    <span className="hire-icon hire-icon--cross" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="12" height="12" fill="none">
        <path
          d="M5.5 5.5l9 9M14.5 5.5l-9 9"
          stroke="#EF4444"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function CheckIcon() {
  return (
    <span className="hire-icon hire-icon--check" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="12" height="12" fill="none">
        <path
          d="M4.5 10.5 8.2 14.2 15.5 6.5"
          stroke="#22C55E"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function HiringComparison() {
  return (
    <section className="hire-section">
      <div className="hire-outer">
        <div className="hire-layout">
          {/* Left intro */}
          <div className="hire-copy">
            <h2 className="hire-title">
              Hiring In-House <span className="hire-title-vs">vs</span>
              <br />
              <span className="hire-title-accent">Next Ledgers</span>
            </h2>
            <p className="hire-desc">
              Save time, reduce costs and get expert accountants without the overhead.
            </p>
          </div>

          {/* Comparison table */}
          <div className="hire-table-wrap">
            <div className="hire-table">
              {/* Headers */}
              <div className="hire-headers">
                <div className="hire-header hire-header--left">
                  Traditional Hiring (In-House)
                </div>
                <div className="hire-header hire-header--right">
                  Next Ledgers (Offshore Team)
                </div>
                <div className="hire-vs" aria-hidden="true">
                  VS
                </div>
              </div>

              {/* Rows */}
              <div className="hire-rows">
                {ROWS.map((row, index) => (
                  <div
                    key={row.left}
                    className={`hire-row${index % 2 === 1 ? " hire-row--alt" : ""}`}
                  >
                    <div className="hire-cell hire-cell--left">
                      <CrossIcon />
                      <span>{row.left}</span>
                    </div>
                    <div className="hire-cell hire-cell--right">
                      <CheckIcon />
                      <span>{row.right}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hire-section {
          width: 100%;
          background: #ffffff;
        }
        .hire-outer {
          max-width: 1440px;
          margin: 0 auto;
          padding: 40px 16px 28px;
        }
        .hire-layout {
          display: flex;
          flex-direction: column;
          gap: 28px;
          align-items: stretch;
        }
        .hire-copy {
          text-align: center;
          max-width: 520px;
          margin: 0 auto;
        }
        .hire-eyebrow {
          margin: 0 0 8px;
          color: ${ORANGE};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .hire-title {
          margin: 0;
          color: ${NAVY};
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .hire-title-vs {
          color: ${NAVY};
          font-weight: 800;
        }
        .hire-title-accent {
          color: ${ORANGE};
        }
        .hire-desc {
          margin: 12px 0 0;
          color: ${GREY};
          font-size: 14px;
          line-height: 1.55;
        }

        .hire-table-wrap {
          width: 100%;
          min-width: 0;
        }
        .hire-table {
          width: 100%;
          border: 1px solid ${BORDER};
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 28px rgba(15, 39, 74, 0.06);
          position: relative;
        }

        .hire-headers {
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
        }
        .hire-header {
          padding: 14px 12px;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;
          text-align: center;
        }
        .hire-header--left {
          background: ${LEFT_HEADER_BG};
          color: ${NAVY};
        }
        .hire-header--right {
          background: ${ORANGE};
          color: #ffffff;
        }
        .hire-vs {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 9999px;
          background: ${NAVY};
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(15, 39, 74, 0.25);
          border: 3px solid #ffffff;
        }

        .hire-rows {
          display: flex;
          flex-direction: column;
        }
        .hire-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid ${BORDER};
          background: #ffffff;
          position: relative;
        }
        .hire-row--alt {
          background: ${ROW_ALT};
        }
        .hire-row::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 1px;
          background: ${BORDER};
          transform: translateX(-0.5px);
          pointer-events: none;
        }
        .hire-cell {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          color: ${NAVY};
          line-height: 1.2;
          min-width: 0;
        }
        .hire-cell span:last-child {
          min-width: 0;
        }
        .hire-cell--left {
          justify-content: flex-start;
          padding-right: 14px;
        }
        .hire-cell--right {
          justify-content: flex-start;
          padding-left: 14px;
        }

        .hire-icon {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hire-icon--cross {
          background: #FEE2E2;
        }
        .hire-icon--check {
          background: #DCFCE7;
        }

        @media (min-width: 640px) {
          .hire-outer {
            padding: 48px 24px 32px;
          }
          .hire-title {
            font-size: 28px;
          }
          .hire-header {
            padding: 12px 18px;
            font-size: 13px;
          }
          .hire-cell {
            padding: 6px 16px;
            font-size: 13px;
            gap: 8px;
          }
          .hire-vs {
            width: 40px;
            height: 40px;
            font-size: 12px;
          }
        }

        @media (min-width: 1024px) {
          .hire-outer {
            padding: 56px 32px 36px;
          }
          .hire-layout {
            flex-direction: row;
            align-items: center;
            gap: 36px;
          }
          .hire-copy {
            text-align: left;
            width: 340px;
            max-width: 360px;
            margin: 0;
            flex-shrink: 0;
          }
          .hire-title {
            font-size: 28px;
          }
            font-size: 14.5px;
            max-width: 320px;
          }
          .hire-table {
            border-radius: 18px;
          }
          .hire-header {
            padding: 12px 20px;
            font-size: 14px;
          }
          .hire-cell {
            padding: 6px 18px;
            font-size: 13.5px;
          }
        }

        @media (min-width: 1280px) {
          .hire-layout {
            gap: 48px;
          }
          .hire-copy {
            width: 380px;
            max-width: 400px;
          }
          .hire-title {
            font-size: 30px;
          }
        }

        /* Very small phones — stack icon above text, wrap freely */
        @media (max-width: 420px) {
          .hire-header {
            font-size: 10px;
            padding: 10px 6px;
            line-height: 1.25;
          }
          .hire-cell {
            font-size: 10px;
            padding: 5px 6px;
            gap: 4px;
            flex-direction: column;
            align-items: flex-start;
          }
          .hire-cell span:last-child {
            overflow-wrap: anywhere;
            word-break: break-word;
          }
          .hire-icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </section>
  );
}
