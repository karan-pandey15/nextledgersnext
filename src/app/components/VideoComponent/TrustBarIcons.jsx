import { BRAND_ORANGE } from "@/app/lib/brandColors";
const baseProps = {
  fill: "none",
  stroke: BRAND_ORANGE,
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ShieldCheckIcon({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseProps}>
      <path d="M12 3.2 5.8 5.8v5.4c0 4 2.7 7.7 6.2 8.6 3.5-.9 6.2-4.6 6.2-8.6V5.8L12 3.2Z" />
      <path d="m9.1 12.2 1.7 1.7 4.1-4.3" />
    </svg>
  );
}

export function PadlockIcon({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseProps}>
      <rect x="6.8" y="10.6" width="10.4" height="8.6" rx="1.4" />
      <path d="M8.7 10.6V8.4a3.3 3.3 0 0 1 6.6 0v2.2" />
      <circle cx="12" cy="14.7" r="1" fill={BRAND_ORANGE} stroke="none" />
    </svg>
  );
}

export function TeamIcon({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseProps}>
      <circle cx="8.4" cy="8.6" r="2.2" />
      <path d="M4.8 16.4c.4-2 1.9-3.2 3.6-3.2s3.2 1.2 3.6 3.2" />
      <circle cx="15.8" cy="9.1" r="1.9" />
      <path d="M12.8 16.4c.4-1.7 1.6-2.8 3-2.8 1 0 1.9.4 2.5 1.2" />
      <circle cx="12" cy="8.2" r="1.6" />
      <path d="M9.6 15.8c.5-1.4 1.6-2.3 2.9-2.3.9 0 1.7.3 2.3.9" />
    </svg>
  );
}

export function TimerIcon({ className = "h-full w-full" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...baseProps}>
      <circle cx="12" cy="13.2" r="6.5" />
      <path d="M12 13.2V10.1" />
      <path d="M9.9 4.9h4.2" />
      <path d="M12 4.9V3.8" />
      <path d="M10.4 2.9h3.2" />
    </svg>
  );
}
