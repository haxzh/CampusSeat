import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]";

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}) {
  const variants = {
    primary: "border border-[#171717] bg-[#171717] text-white hover:-translate-y-0.5 hover:bg-[#77776f]",
    secondary: "border border-[#e3e0d6] bg-white text-[#171717] hover:bg-[#f1f1ed]",
    ghost: "border border-transparent bg-transparent text-[#343434] hover:bg-[#f1f1ed]",
    link: "border border-transparent bg-transparent px-0 text-[#171717] underline-offset-4 hover:underline",
  };
  const sizes = {
    sm: "h-10 px-4 text-xs",
    md: "h-12 px-5 text-sm",
    lg: "h-14 px-6 text-sm sm:text-base",
  };

  return (
    <button
      className={cx("inline-flex items-center justify-center gap-2 rounded-full font-bold transition disabled:pointer-events-none disabled:opacity-60", variants[variant], sizes[size], focusRing, className)}
      {...props}
    />
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cx("h-12 w-full rounded-full border border-[#e3e0d6] bg-[#fffefa] px-5 text-sm text-[#171717] outline-none placeholder:text-[#8a897f] focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10", className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cx("min-h-28 w-full resize-y rounded-2xl border border-[#e3e0d6] bg-[#fffefa] px-5 py-3 text-sm text-[#171717] outline-none placeholder:text-[#8a897f] focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10", className)} {...props} />;
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cx("h-12 w-full rounded-full border border-[#e3e0d6] bg-[#fffefa] px-5 text-sm text-[#171717] outline-none focus:border-[#77776f] focus:ring-4 focus:ring-[#77776f]/10", className)} {...props} />;
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cx("mb-2 block text-sm font-semibold text-[#343434]", className)} {...props} />;
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("rounded-[28px] border border-[#e3e0d6] bg-white shadow-[0_10px_30px_rgba(32,59,55,0.05)]", className)} {...props} />;
}

export function Badge({ className, children }: HTMLAttributes<HTMLSpanElement> & { children?: ReactNode }) {
  return <span className={cx("inline-flex items-center rounded-full border border-[#e3e0d6] bg-[#fffefa] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#77776f]", className)}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77776f]">{eyebrow}</p>}
      <h2 className="mt-3 text-[36px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#171717] sm:text-5xl">{title}</h2>
      {description &&       <p className={cx("mt-5 text-[14px] leading-7 text-[#6b6d64]", centered && "mx-auto max-w-2xl")}>{description}</p>}
    </div>
  );
}

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14", className)} {...props} />;
}
