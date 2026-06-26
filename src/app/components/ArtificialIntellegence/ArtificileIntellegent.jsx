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
    name: "DeepSeek",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek.svg",
    // DeepSeek Blue (#4D6BFE)
    filter: "invert(40%) sepia(97%) saturate(3015%) hue-rotate(218deg) brightness(101%) contrast(101%)",
    url: "https://chat.deepseek.com/",
  },
  {
    name: "Grok",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg",
    // Grok / X Black (#000000)
    filter: "none",
    url: "https://grok.com/",
  },
  {
    name: "Copilot",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/copilot.svg",
    // Copilot Blue (#0078D4)
    filter: "invert(36%) sepia(82%) saturate(4649%) hue-rotate(193deg) brightness(93%) contrast(101%)",
    url: `https://copilot.microsoft.com/?q=${encodeURIComponent(PROMPT)}`,
  },
];

export default function ArtificileIntellegent() {
  const [copiedFor, setCopiedFor] = useState("");

  const handleAiClick = (ai) => {
    // Copy the custom prompt about Next Ledgers services to clipboard
    navigator.clipboard.writeText(PROMPT)
      .then(() => {
        setCopiedFor(ai.name);
        setTimeout(() => setCopiedFor(""), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy prompt to clipboard: ", err);
      });

    // Open chat client in a new tab
    window.open(ai.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 pr-2">
      {/* Floating dock using website brand color touches (orange border) and reduced sizing */}
      <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-l-2xl border border-r-0 border-[#F79027]/20 shadow-[0_10px_30px_rgba(247,144,39,0.08)]">
        {AI_MODELS.map((ai) => {
          const isCopied = copiedFor === ai.name;

          return (
            <button
              key={ai.name}
              onClick={() => handleAiClick(ai)}
              className="group relative w-[36px] h-[36px] flex items-center justify-center rounded-xl bg-white border border-slate-100 hover:border-[#F79027] hover:bg-[#FEF4E4] transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label={`Ask ${ai.name} about Next Ledgers`}
            >
              {/* Tooltip styled with website brand colors (Dark Blue #0F274A & Orange border) */}
              <div
                className={`absolute right-[48px] top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg shadow-xl text-[11px] font-bold tracking-wide transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5 border
                  ${
                    isCopied
                      ? "bg-green-600 border-green-700 text-white opacity-100 scale-100 translate-x-0"
                      : "bg-[#0F274A] border-[#F79027]/30 text-white opacity-0 scale-95 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0"
                  }`}
              >
                {isCopied ? (
                  <>
                    <span className="text-[12px]">✓</span> Prompt Copied! Opening Chat...
                  </>
                ) : (
                  `Consult ${ai.name}`
                )}
              </div>

              {/* Real brand logo image colored dynamically using brand SVG filters (width reduced by 10%) */}
              <img
                src={ai.icon}
                alt={ai.name}
                className="w-[18px] h-[18px] object-contain transition-all duration-300 group-hover:scale-110"
                style={{ filter: ai.filter }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
