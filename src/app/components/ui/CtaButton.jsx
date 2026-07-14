import Link from "next/link";

/**
 * Shared CTA button styles — use across USA/UK service pages for consistent
 * shape, hover, focus, and active behavior.
 *
 * Light outline buttons use `.cta-fill-orange` (globals.css) so orange fill
 * wins over global `.bg-white { !important }`.
 * Dark-panel outlines use `.cta-fill-orange-dark` (Call Now style).
 */
export const CTA_BASE =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6A00] active:scale-[0.98]";

export const CTA_VARIANTS = {
    primary:
        "bg-[#FF6A00] text-white shadow-md shadow-orange-500/25 hover:bg-[#E85E00] hover:shadow-lg hover:shadow-orange-500/30",
    /** Light bg — white + orange border → orange fill + white text */
    secondary: "cta-fill-orange",
    ghost: "cta-fill-orange",
    /** Dark navy panels — transparent + orange border → orange fill */
    outline: "cta-fill-orange-dark",
};

export const CTA_SIZES = {
    sm: "rounded-[10px] px-3.5 py-2 text-[12px] sm:whitespace-nowrap sm:px-4 sm:py-2 sm:text-[13px]",
    md: "rounded-[10px] px-5 py-3 text-sm",
    lg: "h-11 min-w-[200px] rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide sm:h-12 sm:min-w-[220px] sm:text-[14px]",
};

export function ctaClassName(variant = "primary", size = "md", className = "") {
    return [CTA_BASE, CTA_VARIANTS[variant], CTA_SIZES[size], className]
        .filter(Boolean)
        .join(" ");
}

/**
 * @param {"primary"|"secondary"|"ghost"|"outline"} variant
 * @param {"sm"|"md"|"lg"} size
 */
export default function CtaButton({
    href = "/contact",
    variant = "primary",
    size = "md",
    className = "",
    children,
    onClick,
    type = "button",
    ...rest
}) {
    const classes = ctaClassName(variant, size, className);

    if (!href) {
        return (
            <button type={type} onClick={onClick} className={classes} {...rest}>
                {children}
            </button>
        );
    }

    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
            <a href={href} onClick={onClick} className={classes} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} onClick={onClick} className={classes} {...rest}>
            {children}
        </Link>
    );
}
