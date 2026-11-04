import type { ReactNode } from "react";
import Navbar from "@/src/components/Navbar";
import SiteFooter from "./SiteFooter";

export default function PublicShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <SiteFooter />
    </>
  );
}
