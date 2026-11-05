import founder1Image from "../screens/images/founder.jpg";
import founder2Image from "../screens/images/manju-guptafounder.jpeg";
import {
    Compass,
    Globe2,
    HeartHandshake,
    Target,
} from "lucide-react";

const unsplash = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

const photo = (primary, fallback) => [unsplash(primary), unsplash(fallback)];
export const aboutHero = {
    eyebrow: "About CampusSeat",
    title: "The people behind",
    accent: "CampusSeat.",
    description:
        "Great education isn't built by a platform alone. It's built by people who connect learning with real-world outcomes. Meet the leaders and global faculty shaping every programme.",
    image: photo("photo-1523240795612-9a054b0db644", "photo-1522202176988-66273c2fd55f"),
    imageAlt: "Students collaborating on a university campus",
    programmeCta: "Explore programmes",
    counsellingCta: "Get counselling",
    scrollCta: "Meet the people behind the work",
    programmeHref: "/programs",
    counsellingHref: "/contact",
};

export const aboutStats = [
    { value: 6, suffix: "", label: "University partners" },
    { value: 5, suffix: "", label: "Learning pathways" },
    { value: 50, suffix: "+", label: "Countries served" },
    { value: 10000, suffix: "+", label: "Learners supported" },
];

export const aboutSections = {
    founders: {
        eyebrow: "The people who build with us",
        title: "Leadership with",
        accent: "purpose.",
        description:
            "Founder profiles are placeholders until verified biographies and approved portraits are provided.",
    },
    faculty: {
        eyebrow: "Global faculty & advisory board",
        title: "A faculty built from every",
        accent: "corner of the world.",
        description:
            "Our academic and industry advisory board spans continents and disciplines, bringing real-world expertise from higher education, human capital development, mental health, entrepreneurship, and global business into every OneX Academy programme.",
        note:
            "The profiles below are placeholders. Replace them with approved names, roles, institutions, countries and biographies before publishing.",
        filters: ["All", "USA", "UK", "Asia", "Africa", "Europe"],
        filterLabel: "Filter advisors by region",
        socialLabel: "LinkedIn",
    },
    founderSocialLabel: "LinkedIn profile placeholder for",
    values: {
        eyebrow: "What drives us",
        title: "The principles behind",
        accent: "every pathway.",
    },
    journey: {
        eyebrow: "Our journey",
        title: "Built one step",
        accent: "at a time.",
    },
    closing: {
        eyebrow: "Build what comes next",
        statement:
            "Every programme at CampusSeat carries the fingerprints of people who've done the work themselves,",
        accent: "not just taught it.",
        programmeCta: "Explore our programmes",
        counsellingCta: "Talk to a counsellor",
    },
    disclaimer:
        "Programme details may be updated without notice. Participation does not guarantee employment or promotion.",
};

export const advisorRegions = aboutSections.faculty.filters;

export const featuredPartner = {
    eyebrow: "In partnership with TODO: add partner name",
    title: "The architect behind our CampusSeat: add flagship programme",
    paragraphs: [
        "Long before AI became boardroom conversation, Dr. Manju Gupta was already asking the question most institutions hadn't caught up to yet: how do you produce graduates who don't just enter the AI economy, but help shape it? That question became Braincruise the AI learning and transformation partner powering the OneX Academy AI Academy",
        "As Founder & CEO of Braincruise, Dr. Gupta has spent her career closing the gap between academic knowledge and real employability, building a methodology that pairs deep academic rigor with hands-on, practical technology skills. Under her leadership, Braincruise has grown into an award-winning institution transformation partner, working with more than 20 institutions and reaching thousands of students.",
    ],
    quote:
        "Curiosity is not a soft skill, it's the infrastructure every breakthrough is built on.",
    attribution: "Dr. Manju Gupta, Founder & CEO, CampusSeat.",
    image: photo("photo-1562774053-701939374585", "photo-1498243691581-b145c3f54a5a"),
    imageAlt: "University building and campus grounds representing the featured partner",
    href: "/programs",
    cta: "Explore the partnership",
};

export const founders = [
    {
        badge: "Rishabh Mishra",
        eyebrow: "CampusSeat leadership · placeholder",
        name: "Rishabh Mishra",
        role: "Founder, One Stock Academy | Expert in Hospitality & Real Estate",
        image: [founder1Image, founder1Image],
        imageAlt: "Placeholder portrait for Founder Name 01",
        paragraphs: [
            " Rishabh Mishra built his career inside the ultra-competitive world of luxury hospitality and real estate an environment where credentials open doors, but only competence keeps them open.",
            // "iography describing this founder's experience and role at CampusSeat.",
            "He brought that practitioner's instinct to CampusSeat: the ability to see not just what a student knows, but what the industry actually needs from them.",
        ],
        quote: "Great ideas create possibilities, but bold execution turns them into reality.",
        linkedin: "https://www.linkedin.com/haxzh",
    },
    {
        badge: "Dr. Manju Gupta",
        eyebrow: "CampusSeat leadership",
        name: "Dr. Manju Gupta",
        role: "Founder & CEO, Braincruise | Expert in Higher Education & Workforce Development",
        image: [founder2Image, founder2Image],
        imageAlt: "Dr. Manju Gupta",
        paragraphs: [
            "As Founder & CEO of Braincruise, Dr. Gupta has spent her career closing the gap between academic knowledge and real employability."
        ],
        quote: "Curiosity is not a soft skill, it's the infrastructure every breakthrough is built on.",
        linkedin: "https://www.linkedin.com/in/manju-gupta-09b8b8123/",
    },
];

export const advisors = [
    {
        name: "Advisor Name 01",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (USA placeholder)",
        region: "USA",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1500648767791-00dcc994a43e", "photo-1506794778202-cad84cf45f1d"),
        imageAlt: "Placeholder advisor portrait 01",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 02",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (USA placeholder)",
        region: "USA",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1506794778202-cad84cf45f1d", "photo-1500648767791-00dcc994a43e"),
        imageAlt: "Placeholder advisor portrait 02",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 03",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (UK placeholder)",
        region: "UK",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1507003211169-0a1dd7228f2d", "photo-1500648767791-00dcc994a43e"),
        imageAlt: "Placeholder advisor portrait 03",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 04",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (UK placeholder)",
        region: "UK",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1534528741775-53994a69daeb", "photo-1531123897727-8f129e1688ce"),
        imageAlt: "Placeholder advisor portrait 04",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 05",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (Asia placeholder)",
        region: "Asia",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1508214751196-bcfd4ca60f91", "photo-1531123897727-8f129e1688ce"),
        imageAlt: "Placeholder advisor portrait 05",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 06",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (Asia placeholder)",
        region: "Asia",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1506794778202-cad84cf45f1d", "photo-1507003211169-0a1dd7228f2d"),
        imageAlt: "Placeholder advisor portrait 06",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 07",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (Africa placeholder)",
        region: "Africa",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1504593811423-6dd665756598", "photo-1500648767791-00dcc994a43e"),
        imageAlt: "Placeholder advisor portrait 07",
        linkedin: "https://www.linkedin.com/",
    },
    {
        name: "Advisor Name 08",
        role: "TODO: Add role and institution",
        country: "TODO: Confirm country (Europe placeholder)",
        region: "Europe",
        bio: "TODO: Add a verified one-line biography.",
        image: photo("photo-1535713875002-d1d0cf377fde", "photo-1506794778202-cad84cf45f1d"),
        imageAlt: "Placeholder advisor portrait 08",
        linkedin: "https://www.linkedin.com/",
    },
];

export const aboutValues = [
    {
        number: "01",
        title: "Practitioner-led",
        description:
            "Learn from people who bring practical experience into the classroom.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Globally recognised",
        description:
            "Explore academic and professional pathways across a global partner network.",
        icon: Globe2,
    },
    {
        number: "03",
        title: "Career-first",
        description:
            "Build knowledge and capabilities with your next career step in mind.",
        icon: Target,
    },
    {
        number: "04",
        title: "Supported at every step",
        description:
            "Get guidance from exploring options through the learning journey.",
        icon: HeartHandshake,
    },
];

export const journeyMilestones = [
    {
        title: "Founded",
        description: "TODO: Add the verified founding year and origin story.",
    },
    {
        title: "First university partner",
        description: "TODO: Add the confirmed first partnership milestone.",
    },
    {
        title: "Six partners",
        description: "CampusSeat now lists six university partners.",
    },
    {
        title: "Learners across countries",
        description: "TODO: Add verified countries and learner reach.",
    },
    {
        title: "The next chapter",
        description: "TODO: Add the next confirmed milestone or initiative.",
    },
];
