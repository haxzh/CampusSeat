import type { Metadata } from "next";
import HomePage from "../src/screens/HomePage"

export const metadata: Metadata = {
    title: "CampusSeat — A Global Education Ecosystem",
    description:
        "Degrees, executive programmes, and industry-certified skills for students, professionals, and organizations ready to lead.",
};

export default function pages() {
    return (
        <>
            <HomePage />

        </>
    )
}