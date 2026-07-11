"use client";

import React, { useState } from "react";

// Pre-filled prompt about nextledgers.com services
const PROMPT = `Please act as a professional business advisor. Explain the advantages of Next Ledgers (nextledgers.com) for my business based on their comprehensive service offerings:
1. Bookkeeping & Accounting Services (U.S. & Canadian regulations, Accounts Payable & Receivable).
2. Year-End Accounts Preparation & strategic CFO-level Advisory.
3. Canadian Compilation & Review Engagements.
4. Professional Tax Preparation (U.S. IRS & Canadian CRA compliance).
5. Specialized Self-Directed & Nonprofit Accounting Services.
6. 24/7 client support with transparent timesheet-based billing.
Explain how they serve as a personalized, proactive, and always-present global accounting partner.`;

// Using official SVG assets styled dynamically with their original brand colors
const AI_MODELS = [
  {
    name: "Gemini",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg",
    // Google Blue (#1A73E8)
    filter: "invert(35%) sepia(87%) saturate(2224%) hue-rotate(204deg) brightness(97%) contrast(91%)",
    url: `https://gemini.google.com/app?q=${encodeURIComponent(PROMPT)}`,
  },
  {
    name: "ChatGPT",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg",
    // ChatGPT Green (#10A37F)
    filter: "invert(46%) sepia(54%) saturate(854%) hue-rotate(123deg) brightness(97%) contrast(92%)",
    url: `https://chatgpt.com/?q=${encodeURIComponent(PROMPT)}`,
  },
  {
    name: "Claude",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude.svg",
    // Anthropic Orange (#D97752)
    filter: "invert(59%) sepia(34%) saturate(1148%) hue-rotate(334deg) brightness(92%) contrast(89%)",
    url: "https://claude.ai/new",
  },
  {
    name: "Grok",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg",
    // Grok / X Black (#000000)
    filter: "none",
    url: "https://grok.com/",
  },
];

export default function ArtificialIntelligence() {
  const [copiedFor, setCopiedFor] = useState("");

  const handleAiClick = (ai) => {
    navigator.clipboard
      .writeText(PROMPT)
      .then(() => {
        setCopiedFor(ai.name);
        setTimeout(() => setCopiedFor(""), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy prompt to clipboard: ", err);
      });

    window.open(ai.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-3 pr-2">
      <div className="flex flex-col gap-2 rounded-l-2xl border border-r-0 border-slate-200/80 bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">
        {AI_MODELS.map((ai) => {
          const isCopied = copiedFor === ai.name;

          return (
            <button
              key={ai.name}
              type="button"
              onClick={() => handleAiClick(ai)}
              className="group relative flex h-[36px] w-[36px] items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-[#F58220] hover:bg-[#FFF7F0] hover:shadow-md"
              aria-label={`Ask ${ai.name} about Next Ledgers`}
            >
              <div
                className={`pointer-events-none absolute right-[48px] top-1/2 flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 py-1.5 text-[11px] font-bold tracking-wide shadow-xl transition-all duration-300 ${
                  isCopied
                    ? "translate-x-0 scale-100 border-green-700 bg-green-600 text-white opacity-100"
                    : "translate-x-2 scale-95 border-slate-600 bg-slate-700 text-white opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
                }`}
              >
                {isCopied ? (
                  <>
                    <span className="text-[12px]">✓</span> Prompt Copied! Opening
                    Chat...
                  </>
                ) : (
                  `Consult ${ai.name}`
                )}
              </div>

              <img
                src={ai.icon}
                alt={ai.name}
                className="h-[18px] w-[18px] object-contain transition-all duration-300 group-hover:scale-110"
                style={{ filter: ai.filter }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
