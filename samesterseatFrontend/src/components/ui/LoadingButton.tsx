import type { ButtonHTMLAttributes, ReactNode } from "react";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingText?: string;
  children: ReactNode;
};

export default function LoadingButton({
  loading = false,
  loadingText = "Loading...",
  disabled,
  children,
  className = "",
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`inline-flex items-center justify-center gap-2 transition disabled:pointer-events-none disabled:cursor-wait disabled:opacity-60 ${className}`}
    >
      {loading ? (
        <>
          <svg
            aria-hidden="true"
            className="h-4 w-4 shrink-0 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span>{loadingText}</span>
        </>
      ) : children}
    </button>
  );
}
