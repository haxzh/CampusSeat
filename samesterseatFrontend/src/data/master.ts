import { Award, Briefcase, Clock3, Globe2, GraduationCap, Laptop, Users } from "lucide-react";

const u = (id: string, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export type MasterProgramme = {
    id: string;
    code: string;
    title: string;
    tagline: string;
    duration: string;
    description: string;
    specialisations: string[];
    eligibility: string;
    careers: string[];
    image: string;
};

export const masterProgrammes: MasterProgramme[] = [
    {
        id: "mba",
        code: "MBA",
        title: "Master of Business Administration",
        tagline: "Lead teams. Shape strategy.",
        duration: "2 years",
        description:
            "A leadership-focused management degree covering strategy, marketing, finance, operations and people, taught through real business cases.",
        specialisations: ["Marketing", "Finance", "Human Resources", "Operations", "International Business"],
        eligibility: "Bachelor's degree in any discipline from a recognised university.",
        careers: ["Business Manager", "Consultant", "Product Manager", "Entrepreneur"],
        image: u("1552664730-d307ca884978"),
    },
    {
        id: "mca",
        code: "MCA",
        title: "Master of Computer Applications",
        tagline: "Engineer software at scale",
        duration: "2 years",
        description:
            "Advanced training in software engineering, algorithms, cloud and databases, with project work that mirrors industry practice.",
        specialisations: ["Software Engineering", "Cloud Computing", "AI & Machine Learning", "Web Technologies"],
        eligibility: "BCA / B.Sc (Computer Science) or a bachelor's degree with Mathematics.",
        careers: ["Software Engineer", "Solutions Architect", "Backend Developer", "Tech Lead"],
        image: u("1555066931-4365d14bab8c"),
    },
    {
        id: "msc",
        code: "M.Sc",
        title: "Master of Science",
        tagline: "Go deeper into scientific research",
        duration: "2 years",
        description:
            "A research-oriented degree strengthening theory, laboratory method and quantitative analysis in your chosen science discipline.",
        specialisations: ["Physics", "Chemistry", "Mathematics", "Biotechnology", "Environmental Science"],
        eligibility: "B.Sc or equivalent in the relevant science discipline.",
        careers: ["Research Scientist", "Lecturer", "Lab Manager", "PhD Candidate"],
        image: u("1507413245164-6160d8298b31"),
    },
    {
        id: "ma",
        code: "MA",
        title: "Master of Arts",
        tagline: "Advanced thinking in the humanities",
        duration: "2 years",
        description:
            "Advanced study in humanities and social sciences, building research, critical analysis and scholarly writing skills.",
        specialisations: ["English", "Psychology", "Political Science", "Sociology", "History"],
        eligibility: "Bachelor's degree in Arts or a related discipline.",
        careers: ["Researcher", "Policy Analyst", "Writer", "Academic"],
        image: u("1456513080510-7bf3a84b82f8"),
    },
    {
        id: "mcom",
        code: "M.Com",
        title: "Master of Commerce",
        tagline: "Specialise in accounting and finance",
        duration: "2 years",
        description:
            "In-depth study of advanced accounting, taxation, corporate finance and business research for senior finance roles.",
        specialisations: ["Advanced Accounting", "Taxation", "Corporate Finance", "Banking", "Auditing"],
        eligibility: "B.Com or a bachelor's degree with commerce subjects.",
        careers: ["Senior Accountant", "Tax Consultant", "Auditor", "Finance Manager"],
        image: u("1454165804606-c3d57bc86b40"),
    },
    {
        id: "mds",
        code: "M.DS",
        title: "Master of Data Science",
        tagline: "Turn data into decisions",
        duration: "2 years",
        description:
            "Covers statistics, machine learning, big data and visualisation, with applied projects on real datasets.",
        specialisations: ["Machine Learning", "Deep Learning", "Big Data", "Business Analytics"],
        eligibility: "Bachelor's degree with Mathematics, Statistics or Computer Science background.",
        careers: ["Data Scientist", "ML Engineer", "Data Engineer", "Analytics Lead"],
        image: u("1551288049-bebda4e38f71"),
    },
    {
        id: "mcs",
        code: "M.Cyber",
        title: "Master of Cybersecurity",
        tagline: "Defend the digital world",
        duration: "2 years",
        description:
            "Builds expertise in network security, ethical hacking, cryptography and incident response for protecting modern systems.",
        specialisations: ["Network Security", "Ethical Hacking", "Digital Forensics", "Cloud Security"],
        eligibility: "Bachelor's degree in Computer Science, IT or a related field.",
        careers: ["Security Analyst", "Penetration Tester", "SOC Lead", "Security Architect"],
        image: u("1550751827-4bd374c3f58b"),
    },
    {
        id: "mfin",
        code: "M.Fin",
        title: "Master of Finance",
        tagline: "Master markets, risk and capital",
        duration: "2 years",
        description:
            "Quantitative and applied finance covering investments, risk management, derivatives and financial modelling.",
        specialisations: ["Investment Banking", "Risk Management", "Financial Modelling", "FinTech"],
        eligibility: "Bachelor's degree in any discipline; quantitative background preferred.",
        careers: ["Investment Analyst", "Risk Manager", "Portfolio Manager", "Financial Consultant"],
        image: u("1611974789855-9c2a0a7236a3"),
    },
];

export const courseOptions = masterProgrammes.map((p) => `${p.title} (${p.code})`);

export const masterHeroImage = u("1541339907198-e08756dedf3f", 2400);

export const masterHighlights = [
    { label: "Duration", value: "2 years, flexible schedule", icon: Clock3 },
    { label: "Programmes", value: "8 postgraduate degrees", icon: GraduationCap },
    { label: "Learning", value: "Online and hybrid delivery", icon: Laptop },
    { label: "Recognition", value: "Awarded by partner universities", icon: Award },
    { label: "Global network", value: "Partner universities worldwide", icon: Globe2 },
];

export const masterStats = [
    { value: "8", label: "Master's programmes" },
    { value: "2", label: "Years to graduate" },
    { value: "100%", label: "Admissions support" },
    { value: "24/7", label: "Learning access" },
];

export const masterStages = [
    { title: "Core Foundations", icon: GraduationCap },
    { title: "Specialisation", icon: Briefcase },
    { title: "Dissertation / Capstone", icon: Users },
];

export const masterOutcomes = [
    { text: "Apply advanced, discipline-specific knowledge to complex problems.", icon: GraduationCap },
    { text: "Lead projects and teams with confidence and clear communication.", icon: Users },
    { text: "Use data, research methods and modern tools to support decisions.", icon: Laptop },
    { text: "Build a capstone or dissertation that demonstrates real expertise.", icon: Briefcase },
    { text: "Advance into senior roles or progress to doctoral study.", icon: Award },
];

export const masterFaqs = [
    {
        question: "Who can apply for a master's programme?",
        answer: "Graduates with a recognised bachelor's degree. Each programme lists its own preferred background in the eligibility section.",
    },
    {
        question: "How long are the programmes?",
        answer: "All master's programmes run for 2 years.",
    },
    {
        question: "Can I study while working?",
        answer: "Yes. Programmes are delivered online or in hybrid mode so you can study alongside a full-time career.",
    },
    {
        question: "Are the degrees awarded by partner universities?",
        answer: "Yes. Degrees are awarded by our partner universities. Admissions can confirm the awarding body for each programme.",
    },
];