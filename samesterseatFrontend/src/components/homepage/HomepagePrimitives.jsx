import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export const linkStyle =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b46c]";

export function createFadeUp(reduceMotion, delay = 0) {
    if (reduceMotion) return {};

    return {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    };
}

export function PillLink({
    href,
    children,
    variant = "white",
    className = "",
    focusTone = "gold",
    monochrome = false,
}) {
    const styles = {
        white: monochrome
            ? "bg-white text-black hover:bg-[#e8e8e5]"
            : "bg-white text-black hover:bg-[#d6b46c]",
        gold: "bg-[#d6b46c] text-black hover:bg-white",
        dark: monochrome
            ? "bg-[#0a0a0a] text-white hover:bg-[#3a3a38]"
            : "bg-black text-white hover:bg-[#1f1f1f]",
        outline:
            "border border-white/40 bg-white/5 text-white backdrop-blur-md hover:bg-white hover:text-black",
    };
    const circle = variant === "dark" || variant === "outline" ? "bg-white/15" : "bg-black/10";
    const reduceMotion = useReducedMotion();
    const focusStyle =
        focusTone === "mono-light"
            ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            : focusTone === "mono"
              ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3a3a38]"
            : linkStyle;
    const transitionStyle = reduceMotion ? "transition-none" : "transition-colors duration-300";
    const arrowMotion = reduceMotion ? "" : "transition-transform duration-300 group-hover/pill:rotate-45";

    return (
        <Link
            href={href}
            className={`group/pill inline-flex min-h-14 items-center justify-between gap-6 rounded-full py-2 pl-7 pr-2 text-sm font-semibold ${transitionStyle} ${styles[variant]} ${focusStyle} ${className}`}
        >
            {children}
            <span
                className={`flex h-10 w-10 items-center justify-center rounded-full ${arrowMotion} ${circle}`}
            >
                <ArrowUpRight size={18} aria-hidden="true" />
            </span>
        </Link>
    );
}

export function Chip({ children, light = false, monochrome = false }) {
    const lightStyle = monochrome
        ? "border-white/30 text-white/80"
        : "border-white/25 text-white/80";

    return (
        <span
            className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] ${
                light
                    ? lightStyle
                    : "border-black/15 text-black/70"
            }`}
        >
            {children}
        </span>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    accent,
    description,
    light = false,
    monochrome = false,
}) {
    return (
        <div className="max-w-3xl">
            <Chip light={light} monochrome={monochrome}>{eyebrow}</Chip>
            <h2
                className={`mt-5 text-[clamp(2.3rem,5.2vw,4.5rem)] font-semibold leading-[1] tracking-[-0.055em] ${
                    light ? "text-white" : "text-black"
                }`}
            >
                {title}{" "}
                {accent && (
                    <span
                        className={`font-serif font-normal italic tracking-[-0.03em] ${
                            light
                                ? monochrome
                                    ? "text-[#bdbdb8]"
                                    : "text-[#d6b46c]"
                                : monochrome
                                  ? "text-[#8a8a85]"
                                  : "text-[#8a6a26]"
                        }`}
                    >
                        {accent}
                    </span>
                )}
            </h2>
            {description && (
                <p
                    className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8 ${
                        light ? "text-white/65" : "text-black/60"
                    }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
