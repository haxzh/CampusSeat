"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingMessages = [
  "Exploring global opportunities...",
  "Discovering international universities...",
  "Preparing your study journey...",
  "Connecting you with possibilities...",
  "Getting everything ready for you...",
];

const flightPath =
  "M 83 206 C 98 105 165 49 252 54 C 347 58 420 118 437 204 C 451 277 398 321 326 324 C 223 329 115 289 83 206";

function GlobeIllustration({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 18;

  return (
    <motion.svg
      viewBox="0 0 520 390"
      role="img"
      aria-label="An airplane travelling between locations around a globe"
      className={`campusseat-globe ${compact ? "campusseat-globe--compact" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.86, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <defs>
        <radialGradient id="campusseat-globe-fill" cx="38%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="65%" stopColor="#edf3ff" />
          <stop offset="100%" stopColor="#dce8ff" />
        </radialGradient>
        <radialGradient id="campusseat-globe-glow">
          <stop offset="60%" stopColor="#b8c9f3" stopOpacity=".4" />
          <stop offset="100%" stopColor="#b8c9f3" stopOpacity="0" />
        </radialGradient>
        <clipPath id="campusseat-globe-clip">
          <circle cx="260" cy="190" r="137" />
        </clipPath>
        <filter id="campusseat-marker-glow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.circle
        cx="260"
        cy="190"
        r="188"
        fill="url(#campusseat-globe-glow)"
        animate={reduceMotion ? undefined : { opacity: [0.55, 0.9, 0.55], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "260px 190px" }}
      />

      <motion.g
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="260" cy="190" r="137" fill="url(#campusseat-globe-fill)" />
        <circle cx="260" cy="190" r="137" fill="none" stroke="#2563eb" strokeOpacity=".38" strokeWidth="1.5" />
        <g clipPath="url(#campusseat-globe-clip)" fill="none" stroke="#2563eb" strokeOpacity=".24" strokeWidth="1.2">
          <ellipse cx="260" cy="190" rx="57" ry="137" />
          <ellipse cx="260" cy="190" rx="106" ry="137" />
          <ellipse cx="260" cy="190" rx="137" ry="52" />
          <ellipse cx="260" cy="190" rx="137" ry="96" />
          <path d="M123 190h274M132 145h256M132 235h256" />
          <motion.g
            fill="#b8c9f3"
            fillOpacity=".75"
            stroke="#2563eb"
            strokeOpacity=".5"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.45 }}
          >
            <path d="m178 105 17-11 20 4 9 10 18 2 7 11-12 8-3 15-12 12-10 1-7 16-10-4-1-17-12-9 4-11-12-5-7-13z" />
            <path d="m213 172 13 3 8 15-4 18 7 13-9 29-8 19-9 19-10-7 2-17-10-16 4-15-8-16 6-14-4-15z" />
            <path d="m252 100 19-8 17 5 8 11 19 1 11 11 21 5 11 13-9 8-18-4-7 11-17 1-8 12-14-2-4 14-13 2-7-17-12-8-8-17-13-7 5-15z" />
            <path d="m302 184 18-7 17 6 13 17-5 12 9 13-11 10-13-5-6 14-14-4-7-16-11-7 1-17-8-11z" />
            <path d="m355 271 18-5 17 10-3 14-17 7-14-9z" />
            <path d="m365 104 15-7 14 8-4 11-15 3-10-7z" />
          </motion.g>
        </g>

        <motion.g
          filter="url(#campusseat-marker-glow)"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 1.1 }}
        >
          {[
            [190, 133],
            [292, 143],
            [326, 202],
            [231, 231],
          ].map(([cx, cy], index) => (
            <motion.g
              key={`${cx}-${cy}`}
              animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.88, 1.15, 0.88] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.45,
              }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              <circle cx={cx} cy={cy} r="7" fill="#ffffff" fillOpacity=".9" />
              <circle cx={cx} cy={cy} r="4" fill="#2563eb" />
            </motion.g>
          ))}
        </motion.g>
      </motion.g>

      <motion.path
        d={flightPath}
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="5 8"
        initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.5 : 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: reduceMotion ? 0 : 1.6, delay: reduceMotion ? 0 : 0.45, ease: "easeInOut" }}
      />
      {!reduceMotion && (
        <motion.g
          initial={{ opacity: 0, x: 83, y: 206, rotate: -70 }}
          animate={{
            x: [83, 112, 176, 252, 345, 420, 437, 410, 326, 220, 125, 83],
            y: [206, 132, 78, 54, 72, 132, 204, 274, 324, 317, 273, 206],
            rotate: [-70, -48, -22, 3, 29, 55, 83, 120, 166, 207, 250, 290],
            opacity: 1,
          }}
          transition={{
            x: { duration, repeat: Infinity, ease: "linear", delay: 0.85 },
            y: { duration, repeat: Infinity, ease: "linear", delay: 0.85 },
            rotate: { duration, repeat: Infinity, ease: "linear", delay: 0.85 },
            opacity: { duration: 0.35, delay: 0.85 },
          }}
        >
          <path
            d="M0-12 3.2-2.5 12 2.5 11 5 3.1 3.5 2 10 5 12 5 14 0 12 -5 14 -5 12 -2 10 -3.1 3.5 -11 5 -12 2.5 -3.2-2.5Z"
            transform="translate(-8 -8) scale(.8)"
            fill="#1e2d72"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </motion.g>
      )}
      {reduceMotion && (
        <g transform="translate(350 83) rotate(34)">
          <path d="M0-12 3.2-2.5 12 2.5 11 5 3.1 3.5 2 10 5 12 5 14 0 12 -5 14 -5 12 -2 10 -3.1 3.5 -11 5 -12 2.5 -3.2-2.5Z" fill="#1e2d72" />
        </g>
      )}
    </motion.svg>
  );
}

export function CampusSeatLoader({
  variant = "fullscreen",
  showMessages = true,
}: {
  variant?: "fullscreen" | "page";
  showMessages?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (!showMessages || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setMessageIndex((index) => (index + 1) % loadingMessages.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduceMotion, showMessages]);

  const compact = variant === "page";
  const content = (
    <div className={`campusseat-loader-content ${compact ? "campusseat-loader-content--compact" : ""}`}>
      <GlobeIllustration compact={compact} />
      <div className="campusseat-loader-brand" aria-label="CampusSeat">
        <span>Campus</span><span>Seat</span>
      </div>
      <h1 className={compact ? "campusseat-loader-title--compact" : ""}>
        Your Global Education Journey
      </h1>
      {!compact && <p className="campusseat-loader-subtitle">Connecting dreams with global opportunities.</p>}
      {showMessages && (
        <div className="campusseat-loader-message" aria-live="polite">
          {reduceMotion ? (
            <p>{loadingMessages[messageIndex]}</p>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.25 }}
              >
                {loadingMessages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          )}
        </div>
      )}
    </div>
  );

  if (compact) {
    return (
      <section className="campusseat-loader-page" role="status" aria-label="Loading page">
        {content}
      </section>
    );
  }

  return (
    <motion.main
      className="campusseat-loader-fullscreen"
      role="status"
      aria-label="CampusSeat is loading"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.35 }}
    >
      {content}
    </motion.main>
  );
}

function SkeletonBlock({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`campusseat-skeleton ${className}`} />;
}

export function UniversityCardSkeleton() {
  return (
    <div className="campusseat-skeleton-card" role="status" aria-label="Loading university">
      <span className="sr-only">Loading university...</span>
      <SkeletonBlock className="campusseat-skeleton-image" />
      <SkeletonBlock className="campusseat-skeleton-line campusseat-skeleton-line--wide" />
      <SkeletonBlock className="campusseat-skeleton-line campusseat-skeleton-line--short" />
      <div className="campusseat-skeleton-footer">
        <SkeletonBlock className="campusseat-skeleton-pill" />
        <SkeletonBlock className="campusseat-skeleton-pill campusseat-skeleton-pill--small" />
      </div>
    </div>
  );
}

export function CourseCardSkeleton() {
  return (
    <div className="campusseat-skeleton-card" role="status" aria-label="Loading course">
      <span className="sr-only">Loading course...</span>
      <SkeletonBlock className="campusseat-skeleton-badge" />
      <SkeletonBlock className="campusseat-skeleton-line campusseat-skeleton-line--wide" />
      <SkeletonBlock className="campusseat-skeleton-line" />
      <SkeletonBlock className="campusseat-skeleton-line campusseat-skeleton-line--short" />
      <div className="campusseat-skeleton-footer">
        <SkeletonBlock className="campusseat-skeleton-pill" />
        <SkeletonBlock className="campusseat-skeleton-pill campusseat-skeleton-pill--small" />
      </div>
    </div>
  );
}

export function SearchResultsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="campusseat-search-skeletons" role="status" aria-label="Loading search results">
      {Array.from({ length: Math.max(0, Math.min(count, 12)) }, (_, index) => (
        <div key={index} className="campusseat-search-skeleton-row" aria-hidden="true">
          <SkeletonBlock className="campusseat-skeleton-avatar" />
          <div className="campusseat-search-skeleton-copy">
            <SkeletonBlock className="campusseat-skeleton-line campusseat-skeleton-line--wide" />
            <SkeletonBlock className="campusseat-skeleton-line" />
          </div>
          <SkeletonBlock className="campusseat-skeleton-pill campusseat-search-skeleton-action" />
        </div>
      ))}
      <span className="sr-only">Loading search results...</span>
    </div>
  );
}
