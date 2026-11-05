"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { partners } from "@/src/data/doctorate";

const visiblePartners = Math.min(3, partners.length);
const cardHeight = 120;
const cardGap = 12;

export default function UniversityPartnersCarousel() {
    const reduceMotion = useReducedMotion();
    const hasMorePartners = partners.length > visiblePartners;
    const carouselPartners = hasMorePartners ? [...partners, ...partners] : partners;

    return (
        <div
            className="mt-5 overflow-hidden"
            style={{
                height: visiblePartners * cardHeight + (visiblePartners - 1) * cardGap,
            }}
        >
            <motion.ul
                aria-label="University partners"
                className="flex flex-col gap-3"
                animate={
                    hasMorePartners && !reduceMotion
                        ? { y: [0, -partners.length * (cardHeight + cardGap)] }
                        : { y: 0 }
                }
                transition={
                    hasMorePartners && !reduceMotion
                        ? {
                            duration: partners.length * 2.8,
                            ease: "linear",
                            repeat: Infinity,
                        }
                        : { duration: 0 }
                }
            >
                {carouselPartners.map((partner, index) => (
                    <li key={`${index}-${partner.id}`}>
                        <div
                            aria-hidden={index >= partners.length ? true : undefined}
                            inert={index >= partners.length}
                            className="flex h-[120px] items-center gap-4 overflow-hidden rounded-2xl border border-[#e3e0d6] bg-[#fffefa] p-3"
                        >
                            <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#e3e0d6] bg-white text-[18px] font-semibold text-[#77776f] shadow-sm">
                                <span aria-hidden="true">
                                    {partner.name
                                        .split(/\s+/)
                                        .map((word) => word[0])
                                        .join("")
                                        .slice(0, 2)
                                        .toUpperCase()}
                                </span>
                                {partner.logo && (
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        fill
                                        sizes="68px"
                                        unoptimized
                                        loading="lazy"
                                        onError={(event) => {
                                            event.currentTarget.style.display = "none";
                                        }}
                                        className="absolute inset-0 h-full w-full bg-white object-contain p-2"
                                    />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="line-clamp-2 font-semibold leading-5">{partner.name}</p>
                                <p className="mt-1 flex items-center gap-1.5 text-[12px] text-[#6b6d64]">
                                    <MapPin size={13} aria-hidden="true" />
                                    {partner.country}
                                </p>
                                {partner.website && (
                                    <Link
                                        href={partner.website}
                                        className="mt-1 inline-flex text-[12px] font-medium text-[#77776f] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#77776f]"
                                    >
                                        Visit website
                                    </Link>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </motion.ul>
        </div>
    );
}
