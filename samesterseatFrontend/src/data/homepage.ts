import {
    Award,
    BrainCircuit,
    BookOpenCheck,
    BriefcaseBusiness,
    Building2,
    Compass,
    GraduationCap,
    Globe2,
    Headset,
    Hotel,
    Lightbulb,
    Network,
    Sparkles,
} from "lucide-react";

export const homepageStats = [
    { value: "6", label: "University & Industry Partners" },
    { value: "50+", label: "Countries Represented" },
    { value: "10,000+", label: "Learners Empowered" },
    { value: "95%", label: "Learner Satisfaction Rate" },
];

export const campusSeatServices = [
    {
        number: "01",
        title: "Academic Degrees",
        description:
            "Doctorate, Master's, and Bachelor's programmes delivered with university partners.",
        icon: GraduationCap,
    },
    {
        number: "02",
        title: "Executive Education",
        description:
            "Focused programmes for professionals growing their leadership and business capabilities.",
        icon: BriefcaseBusiness,
    },
    {
        number: "03",
        title: "AI Academy",
        description:
            "Career-ready AI learning and certification with Braincruise.",
        icon: BrainCircuit,
    },
    {
        number: "04",
        title: "Hospitality Academy",
        description:
            "Industry training with Seven Seas Hotel and certification through VocaTech.",
        icon: Hotel,
    },
    {
        number: "05",
        title: "Real Estate Academy",
        description:
            "Practical learning with OneX Developers and OneX Property, with VocaTech certification.",
        icon: Building2,
    },
];

export const pathways = [
    {
        title: "Globally Recognized University Partners",
        description:
            "Doctorate, Master's, and Bachelor's degrees delivered through six established international universities, giving every qualification real-world standing.",
        icon: Globe2,
    },
    {
        title: "Career-Focused Curriculum",
        description:
            "Every programme, from doctorate to certificate, is built around employability, promotion readiness, and practical application.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Flexible Learning for Working Professionals",
        description:
            "Study on your schedule, with formats built for people balancing careers, businesses, and family life.",
        icon: Compass,
    },
    {
        title: "Industry-Backed Certification",
        description:
            "Skill-based programmes are certified through VocaTech's KSDA-approved framework, giving employers confidence in every credential.",
        icon: Award,
    },
    {
        title: "A Truly International Community",
        description:
            "Learn alongside professionals and students from more than 50 countries, building a network that extends well beyond graduation.",
        icon: Network,
    },
    {
        title: "Dedicated Career Support",
        description:
            "From admissions to graduation, advisors guide every learner toward the outcome that matters most to them.",
        icon: Headset,
    },
];

export const universityPartners = [
    { name: "EIMT", monogram: "E" },
    { name: "LSMT", monogram: "L" },
    { name: "STRIDE", monogram: "S" },
    { name: "BIRCHWOOD", monogram: "B" },
    { name: "RUSHFORD", monogram: "R" },
    { name: "DUNSTER", monogram: "D" },
];

export const learningSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "Explore programmes across five verticals and find the path that matches your goal.",
        icon: Compass,
    },
    {
        number: "02",
        title: "Choose",
        description:
            "Select your programme and, for academic degrees, your preferred university partner.",
        icon: GraduationCap,
    },
    {
        number: "03",
        title: "Apply",
        description:
            "A simple, guided application process with dedicated admissions support.",
        icon: BookOpenCheck,
    },
    {
        number: "04",
        title: "Learn",
        description:
            "Study through a flexible, globally accessible learning experience built for working adults.",
        icon: Lightbulb,
    },
    {
        number: "05",
        title: "Certify",
        description:
            "Graduate with a recognized degree or industry certification.",
        icon: Award,
    },
    {
        number: "06",
        title: "Advance",
        description:
            "Move forward with career support, employer connections, and a global alumni network.",
        icon: Sparkles,
    },
];

export const industryPartners = [
    {
        name: "Braincruise",
        category: "AI Learning and Certification Partner",
        description: "Powering our AI Academy.",
        monogram: "B",
    },
    {
        name: "Seven Seas Hotel",
        category: "Industry Training Partner",
        description: "Supporting the Hospitality Academy.",
        monogram: "7S",
    },
    {
        name: "OneX Developers & OneX Property",
        category: "Industry Partners",
        description: "Supporting the Real Estate Academy.",
        monogram: "OX",
    },
    {
        name: "VocaTech",
        category: "Certification Partner",
        description:
            "Certifying the Hospitality and Real Estate Academies through its KSDA-approved certification framework.",
        monogram: "V",
    },
];

export const homepageFaqs = [
    {
        question: "Are OneX Academy degree programmes accredited?",
        answer:
            "Doctorate, Master's, and Bachelor's degrees are delivered in partnership with our university network — EIMT, LSMT, STRIDE, BIRCHWOOD, RUSHFORD, and DUNSTER. You choose which university awards your degree.",
    },
    {
        question: "How do I choose which university partner to study with?",
        answer:
            "All six university partners are available for every Doctorate, Master's, and Bachelor's programme. Your admissions advisor will explain the differences between each and help you decide based on your goals, budget, and recognition needs.",
    },
    {
        question: "Can I study while working full-time?",
        answer:
            "Yes. Every OneX Academy programme is designed with flexible, remote-first formats built specifically for working professionals.",
    },
    {
        question: "Which vertical is right for me?",
        answer:
            "If you're pursuing a full academic qualification, start with Doctorate, Master's, or Bachelor's. If you're an experienced professional focused on leadership, explore Executive Education. If you want fast, career-ready skills, explore the AI, Hospitality, or Real Estate Academy.",
    },
    {
        question: "Who certifies the skill-based programmes?",
        answer:
            "The AI Academy is certified by Braincruise. The Hospitality and Real Estate Academies are certified through VocaTech's KSDA-approved certification framework.",
    },
    {
        question: "Is OneX Academy open to international students?",
        answer:
            "Yes. OneX Academy learners join from more than 50 countries, and every programme is built for a fully international learning community.",
    },
];

export const programmeLinks = [
    { label: "Doctorate", href: "/programs/doctorate" },
    { label: "Master's", href: "/programs/management" },
    { label: "Bachelor's", href: "/programs/bachelor" },
    { label: "Executive Education", href: "/programs" },
    { label: "Skill-Based Education", href: "/program/Skill-Based" },
];
