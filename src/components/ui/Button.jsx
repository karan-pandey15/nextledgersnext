"use client";

import { useRouter } from "next/navigation";
import { ctaClassName } from "@/app/components/ui/CtaButton";

/**
 * Primary CTA used in navbars — same hover/active/focus as page CTAs.
 */
export default function Button({
    text,
    onClick,
    className = "",
    href = "/contact",
}) {
    const router = useRouter();

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
            return;
        }
        router.push(href);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={ctaClassName("primary", "sm", `font-extrabold tracking-wider ${className}`)}
        >
            {text}
        </button>
    );
}
