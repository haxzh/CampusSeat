import AboutUsClient from "./AboutUsClient";

export const metadata = {
    title: "About Us | CampusSeat",
    description:
        "Meet the founders behind CampusSeat and OneX Academy, and learn how we help students explore programmes, compare universities, and plan their next step.",
    alternates: {
        canonical: "/about-us",
    },
    openGraph: {
        title: "About Us | CampusSeat",
        description:
            "Discover the people and learning approach behind CampusSeat and OneX Academy.",
        url: "/about-us",
        type: "website",
    },
};

export default function AboutUsPage() {
    return <AboutUsClient />;
}
