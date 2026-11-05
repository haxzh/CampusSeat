import {
    Award,
    Briefcase,
    Clock3,
    Globe2,
    GraduationCap,
    Laptop,
    Users,
} from "lucide-react";

const u = (id: string, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export type BachelorProgramme = {
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

export const bachelorProgrammes: BachelorProgramme[] = [
    {
        id: "bsc",
        code: "B.Sc",
        title: "Bachelor of Science",
        tagline: "Rigorous science, real laboratory thinking",
        duration: "3 years",
        description:
            "A discipline-focused degree that builds strong foundations in scientific reasoning, quantitative analysis and applied research across modern science streams.",
        specialisations: ["Physics", "Chemistry", "Mathematics", "Biotechnology", "Data Science"],
        eligibility: "10+2 (or equivalent) with Science stream from a recognised board.",
        careers: ["Research Associate", "Lab Analyst", "Data Analyst", "Science Educator"],
        image: u("1532094349884-543bc11b234d"),
    },
    {
        id: "ba",
        code: "BA",
        title: "Bachelor of Arts",
        tagline: "Think critically. Communicate with impact.",
        duration: "3 years",
        description:
            "A broad liberal-arts degree developing analytical thinking, writing and cultural understanding through humanities and social science disciplines.",
        specialisations: ["English", "Psychology", "Political Science", "Sociology", "Journalism"],
        eligibility: "10+2 (or equivalent) in any stream from a recognised board.",
        careers: ["Content Strategist", "Policy Analyst", "Journalist", "Civil Services Aspirant"],
        image: u("1481627834876-b7833e8f5570"),
    },
    {
        id: "bcom",
        code: "B.Com",
        title: "Bachelor of Commerce",
        tagline: "The language of finance and enterprise",
        duration: "3 years",
        description:
            "Covers accounting, taxation, corporate law and financial markets, preparing you for professional certifications and careers in finance.",
        specialisations: ["Accounting & Finance", "Taxation", "Banking", "E-Commerce", "Auditing"],
        eligibility: "10+2 (or equivalent) in any stream; Commerce preferred.",
        careers: ["Accountant", "Financial Analyst", "Tax Consultant", "CA / CMA / CFA Pathway"],
        image: u("1554224155-6726b3ff858f"),
    },
    {
        id: "bba",
        code: "BBA",
        title: "Bachelor of Business Administration",
        tagline: "Build the manager and founder in you",
        duration: "3 years",
        description:
            "A management foundation covering marketing, operations, people and strategy, with case-led learning and an entrepreneurial outlook.",
        specialisations: ["Marketing", "Finance", "Human Resources", "International Business", "Entrepreneurship"],
        eligibility: "10+2 (or equivalent) in any stream from a recognised board.",
        careers: ["Business Analyst", "Marketing Executive", "HR Associate", "Founder / Entrepreneur"],
        image: u("1522202176988-66273c2fd55f"),
    },
    {
        id: "bca",
        code: "BCA",
        title: "Bachelor of Computer Applications",
        tagline: "Code the next generation of software",
        duration: "3 years",
        description:
            "A hands-on computing degree in programming, databases, web and cloud technologies, with project work built around real industry problems.",
        specialisations: ["Full Stack Development", "AI & Machine Learning", "Cyber Security", "Cloud Computing", "Data Analytics"],
        eligibility: "10+2 (or equivalent) with Mathematics or Computer Science preferred.",
        careers: ["Software Developer", "Web Developer", "Data Analyst", "Cloud Engineer"],
        image: u("1517694712202-14dd9538aa97"),
    },
    {
        id: "bfa",
        code: "BFA",
        title: "Bachelor of Fine Arts",
        tagline: "Where craft meets creative vision",
        duration: "4 years",
        description:
            "Studio-driven training in visual arts, building technical craft, conceptual depth and a professional portfolio under practising artists.",
        specialisations: ["Painting", "Sculpture", "Applied Art", "Photography", "Animation"],
        eligibility: "10+2 (or equivalent) in any stream; portfolio review may apply.",
        careers: ["Visual Artist", "Illustrator", "Art Director", "Curator"],
        image: u("1513364776144-60967b0f800f"),
    },
    {
        id: "bdes",
        code: "B.Des",
        title: "Bachelor of Design",
        tagline: "Design systems, products and experiences",
        duration: "4 years",
        description:
            "A project-based design degree combining research, prototyping and visual thinking across product, communication and interaction design.",
        specialisations: ["UI/UX Design", "Product Design", "Fashion Design", "Interior Design", "Communication Design"],
        eligibility: "10+2 (or equivalent) in any stream; design aptitude test may apply.",
        careers: ["UX Designer", "Product Designer", "Brand Designer", "Design Strategist"],
        image: u("1558655146-9f40138edfeb"),
    },
];

export const courseOptions = bachelorProgrammes.map((p) => `${p.title} (${p.code})`);

export const bachelorHeroImage = u("1523050854058-8df90110c9f1", 2400);

export const bachelorHighlights = [
    { label: "Duration", value: "3–4 years, full-time", icon: Clock3 },
    { label: "Programmes", value: "7 undergraduate degrees", icon: GraduationCap },
    { label: "Learning", value: "Flexible online and hybrid delivery", icon: Laptop },
    { label: "Recognition", value: "Awarded by partner universities", icon: Award },
    { label: "Global network", value: "Partner universities worldwide", icon: Globe2 },
];

export const bachelorStats = [
    { value: "7", label: "Degree programmes" },
    { value: "3–4", label: "Years to graduate" },
    { value: "100%", label: "Admissions support" },
    { value: "24/7", label: "Learning access" },
];

export const bachelorStages = [
    { title: "Foundation Year", icon: GraduationCap },
    { title: "Core & Specialisation", icon: Briefcase },
    { title: "Capstone & Career", icon: Users },
];

export const bachelorOutcomes = [
    { text: "Apply discipline-specific knowledge to solve real-world problems.", icon: GraduationCap },
    { text: "Communicate ideas clearly and think critically across contexts.", icon: Users },
    { text: "Use modern digital tools and data to support decisions.", icon: Laptop },
    { text: "Build a portfolio or project record that employers recognise.", icon: Briefcase },
    { text: "Progress confidently to postgraduate study or a professional career.", icon: Award },
];

export const bachelorFaqs = [
    {
        question: "Who can apply for a bachelor's programme?",
        answer: "Students who have completed 10+2 or an equivalent qualification. Some programmes prefer a specific stream, as listed in each programme's eligibility.",
    },
    {
        question: "How long are the programmes?",
        answer: "B.Sc, BA, B.Com, BBA and BCA run for 3 years. BFA and B.Des run for 4 years.",
    },
    {
        question: "Are the degrees awarded by partner universities?",
        answer: "Yes. Degrees are awarded by our partner universities. Our admissions team can share the awarding body for each programme.",
    },
    {
        question: "Can I change my specialisation later?",
        answer: "Specialisation rules vary by university. Speak with admissions for the exact options and deadlines for your chosen programme.",
    },
];
