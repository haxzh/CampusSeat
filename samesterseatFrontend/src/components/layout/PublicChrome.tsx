"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";
import SiteFooter from "./SiteFooter";

const ownsNavbar = new Set([
  "/",
  "/admissions",
  "/career-guidance",
  "/colleges",
  "/colleges/engineering",
  "/colleges/location",
  "/colleges/management",
  "/colleges/medical",
  "/compare",
  "/counselling",
  "/countries/australia",
  "/countries/canada",
  "/countries/france",
  "/countries/germany",
  "/countries/india",
  "/countries/japan",
  "/countries/singapore",
  "/countries/switzerland",
  "/countries/uae",
  "/countries/united-kingdom",
  "/countries/united-states",
  "/login",
  "/online-universities",
  "/program",
  "/reviews",
  "/signup",
]);

const ownsFooter = new Set([
  "/",
  "/career-guidance",
  "/login",
  "/online-universities",
  "/signup",
]);

export default function PublicChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {!ownsNavbar.has(pathname) && <Navbar />}
      {children}
      {!ownsFooter.has(pathname) && <SiteFooter />}
    </>
  );
}
