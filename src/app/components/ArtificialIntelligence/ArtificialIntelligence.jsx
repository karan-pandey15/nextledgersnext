"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

const PROMPT = `Please act as a professional business advisor. Explain the advantages of Next Ledgers (nextledgers.com) for my business based on their comprehensive service offerings:
1. Bookkeeping & Accounting Services (U.S. & Canadian regulations, Accounts Payable & Receivable).
2. Year-End Accounts Preparation & strategic CFO-level Advisory.
3. Canadian Compilation & Review Engagements.
4. Professional Tax Preparation (U.S. IRS & Canadian CRA compliance).
5. Specialized Self-Directed & Nonprofit Accounting Services.
6. 24/7 client support with transparent timesheet-based billing.
Explain how they serve as a personalized, proactive, and always-present global accounting partner.`;

const AI_MODELS = [
  {
    name: "Gemini",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini.svg",
    filter:
      "invert(35%) sepia(87%) saturate(2224%) hue-rotate(204deg) brightness(97%) contrast(91%)",
    url: `https://gemini.google.com/app?q=${encodeURIComponent(PROMPT)}`,
  },
  {
    name: "ChatGPT",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg",
    filter:
      "invert(46%) sepia(54%) saturate(854%) hue-rotate(123deg) brightness(97%) contrast(92%)",
    url: `https://chatgpt.com/?q=${encodeURIComponent(PROMPT)}`,
  },
  {
    name: "Claude",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude.svg",
    filter:
      "invert(59%) sepia(34%) saturate(1148%) hue-rotate(334deg) brightness(92%) contrast(89%)",
    url: "https://claude.ai/new",
  },
  {
    name: "Grok",
    icon: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg",
    filter: "none",
    url: "https://grok.com/",
  },
];

const MOBILE_QUERY = "(max-width: 767px)";
const INITIAL_VISIBLE_MS = 5000;
const AUTO_HIDE_MS = 10000;

const panelTransition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
  mass: 1.05,
};

function useIsPhone() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsPhone(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isPhone;
}

function AiDockPanel({ copiedFor, onAiClick }) {
  return (
    <div className="flex flex-col gap-2 rounded-l-2xl border border-r-0 border-slate-200/80 bg-white/95 p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">
      {AI_MODELS.map((ai) => {
        const isCopied = copiedFor === ai.name;

        return (
          <button
            key={ai.name}
            type="button"
            onClick={() => onAiClick(ai)}
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
  );
}

export default function ArtificialIntelligence() {
  const isPhone = useIsPhone();
  const [copiedFor, setCopiedFor] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const hideTimerRef = useRef(null);
  const initialTimerRef = useRef(null);
  const initialPhaseRef = useRef(true);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const scheduleAutoHide = useCallback(() => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, AUTO_HIDE_MS);
  }, [clearHideTimer]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return undefined;

    if (!isPhone) {
      setIsOpen(true);
      initialPhaseRef.current = false;
      clearHideTimer();
      if (initialTimerRef.current) {
        clearTimeout(initialTimerRef.current);
        initialTimerRef.current = null;
      }
      return undefined;
    }

    initialPhaseRef.current = true;
    setIsOpen(true);
    initialTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      initialPhaseRef.current = false;
      initialTimerRef.current = null;
    }, INITIAL_VISIBLE_MS);

    return () => {
      if (initialTimerRef.current) {
        clearTimeout(initialTimerRef.current);
        initialTimerRef.current = null;
      }
    };
  }, [hasMounted, isPhone, clearHideTimer]);

  useEffect(() => {
    if (!isPhone || !isOpen) {
      clearHideTimer();
      return undefined;
    }

    if (initialPhaseRef.current) return undefined;

    scheduleAutoHide();
    return clearHideTimer;
  }, [isOpen, isPhone, scheduleAutoHide, clearHideTimer]);

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

    if (isPhone && !initialPhaseRef.current) {
      scheduleAutoHide();
    }
  };

  const handleOpen = () => {
    if (isOpen) return;

    if (initialTimerRef.current) {
      clearTimeout(initialTimerRef.current);
      initialTimerRef.current = null;
    }
    initialPhaseRef.current = false;
    setIsOpen(true);
  };

  if (!isPhone) {
    return (
      <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-end gap-3 pr-2">
        <AiDockPanel copiedFor={copiedFor} onAiClick={handleAiClick} />
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 items-center">
      <AnimatePresence initial={false} mode="sync">
        {isOpen ? (
          <motion.div
            key="ai-dock"
            initial={{ x: 72, opacity: 0.4 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 88, opacity: 0.35 }}
            transition={panelTransition}
            className="pr-1.5"
          >
            <AiDockPanel copiedFor={copiedFor} onAiClick={handleAiClick} />
          </motion.div>
        ) : (
          <motion.button
            key="ai-arrow"
            type="button"
            onClick={handleOpen}
            aria-label="Show AI tools"
            initial={{ x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 24,
              mass: 0.9,
            }}
            whileTap={{ scale: 0.94 }}
            className="flex h-12 w-7 items-center justify-center rounded-l-xl border border-r-0 border-slate-200/80 bg-white/95 text-[#F58220] shadow-[0_10px_28px_rgba(15,23,42,0.14)] backdrop-blur-md"
          >
            <motion.span
              animate={{ x: [0, -3, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2.75} />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
