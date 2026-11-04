
"use client";

import { useState } from "react";
import Link from "next/link";
import PublicShell from "@/src/components/layout/PublicShell";
import {
  GraduationCap,
  Mail,
  LockKeyhole,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendOtp = async () => {
    setError("");
    setSuccess("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          purpose: "login",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send OTP.");
      }

      setOtpSent(true);
      setSuccess("OTP sent successfully to your email.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          otp,
          purpose: "login",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "OTP verification failed.");
      }

      setSuccess("Login successful!");

      window.location.href = data.redirectTo || "/dashboard";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicShell>
    <main className="flex min-h-screen bg-[#f4f3ee]">
      <section className="relative hidden overflow-hidden bg-[#171717] px-12 py-12 text-white lg:flex lg:w-1/2 lg:flex-col lg:justify-between xl:px-20">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-12 top-32 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-black/10 blur-3xl" />

        <Link href="/" className="relative z-10 flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#171717]">
            <GraduationCap size={30} />
          </span>
          <span className="text-2xl font-bold tracking-tight">CampusSeat</span>
        </Link>

        <div className="relative z-10 max-w-xl py-12">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-[#ededE7]">
            Your future starts here
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight xl:text-6xl">
            Every big journey
            <span className="block text-[#ededE7]">starts with a seat.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#ededE7]">
            Discover colleges, explore courses and take the next step
            towards your academic goals with CampusSeat.
          </p>

          <div className="mt-10 space-y-5">
            {[
              "Explore colleges and universities",
              "Compare courses and study options",
              "Get guidance for your career",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-[#ededE7]">
                  ✓
                </span>
                <span className="text-[#343434]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-[#ededE7]">
          Helping you make informed education choices.
        </p>
      </section>

      <section className="flex w-full items-center justify-center px-5 py-10 sm:px-10 lg:w-1/2">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#77776f] hover:text-[#171717] lg:hidden"
          >
            <GraduationCap size={25} className="text-[#171717]" />
            CampusSeat
          </Link>

          <div className="mb-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f7f4] text-[#171717]">
              <LockKeyhole size={28} />
            </div>

            <p className="text-sm font-bold uppercase tracking-widest text-[#171717]">
              Welcome back
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
              Sign in to your account
            </h2>

            <p className="mt-3 leading-6 text-[#77776f]">
              Enter your email address to receive a secure login OTP.
            </p>
          </div>

          <form onSubmit={verifyOtp} className="space-y-5">
            {!otpSent ? (
              <>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#343434]">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full rounded-xl border border-[#deded8] bg-white py-3.5 pl-12 pr-4 outline-none focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                      required
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-black disabled:opacity-60"
                >
                  {loading ? "Sending OTP..." : "Send Login OTP"}
                  <ArrowRight size={19} />
                </button>
              </>
            ) : (
              <>
                <div className="rounded-xl bg-[#f7f7f4] p-4 text-sm text-[#171717]">
                  OTP sent to {email}
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false);
                      setOtp("");
                      setError("");
                      setSuccess("");
                    }}
                    className="ml-2 font-bold underline"
                  >
                    Change
                  </button>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#343434]">
                    Enter 6-digit OTP
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="Enter OTP"
                    className="w-full rounded-xl border border-[#deded8] bg-white px-4 py-4 text-center text-2xl tracking-[0.5em] outline-none focus:border-[#171717] focus:ring-4 focus:ring-black/5"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-4 font-semibold text-white shadow-lg transition hover:bg-black disabled:opacity-60"
                >
                  {loading ? "Verifying..." : "Verify OTP & Sign In"}
                  <ArrowRight size={19} />
                </button>

                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 py-2 text-sm font-semibold text-[#171717] hover:underline"
                >
                  <RefreshCw size={15} />
                  Resend OTP
                </button>
              </>
            )}
          </form>

          {error && (
            <p role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {success && (
            <p role="status" className="mt-4 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800">
              {success}
            </p>
          )}

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">YOUR EDUCATION JOURNEY</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <p className="text-center text-sm text-[#77776f]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-bold text-[#171717] hover:underline">
              Create an account
            </Link>
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={16} />
            <span>Your account security matters.</span>
          </div>
        </div>
      </section>
    </main>
    </PublicShell>
  );
}
