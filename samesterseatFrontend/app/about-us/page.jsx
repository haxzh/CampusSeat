import AboutUsClient from "./AboutUsClient";

export const metadata = {
    title: "About Us | CampusSeat",
    description:
        "Meet the people, founders and global faculty building CampusSeat, a global education ecosystem connecting learning with real-world outcomes.",
    alternates: {
        canonical: "/about-us",
    },
    openGraph: {
        title: "About Us | CampusSeat",
        description:
            "Meet the people and global faculty shaping the CampusSeat education ecosystem.",
        url: "/about-us",
        type: "website",
    },
};

export default function AboutUsPage() {
    return <AboutUsClient />;
}
