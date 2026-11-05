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

const homepageUnsplash = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;

export const TODO_PARTNER_LOCATION = "TODO: Confirm partner university locations";

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
            "Practical learning with OneX Developers and One Stock Academy, with VocaTech certification.",
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

export const pathwayCards = [
    {
        title: "Globally Recognized University Partners",
        level: "University network",
        description:
            "Choose from six university partners and explore academic pathways with guidance throughout your application.",
        icon: Globe2,
        image: [
            homepageUnsplash("photo-1498243691581-b145c3f54a5a"),
            homepageUnsplash("photo-1562774053-701939374585"),
        ],
        imageAlt: "University campus buildings surrounded by trees",
        partner: " CampusSeat university network",
        location: TODO_PARTNER_LOCATION,
        bestFor: "Learners comparing university pathways",
        tags: ["6 university partners", "Guided admissions"],
        highlights: [
            "Compare academic pathways across the university network",
            "Choose a university partner for your degree",
            "Get support from application through enrolment",
            "Explore flexible study formats",
        ],
        stats: [
            { label: "Partners", value: "6" },
            { label: "Countries", value: "50+" },
            { label: "Pathways", value: "5" },
        ],
        href: "#university-partners",
    },
    {
        title: "Research-led doctoral degrees",
        level: "Doctorate",
        description:
            "Advance your expertise through a research-led doctoral degree designed for senior professionals and supported by faculty supervision.",
        icon: Award,
        image: [
            homepageUnsplash("photo-1532094349884-543bc11b234d"),
            homepageUnsplash("photo-1564981797816-1043664bf78d"),
        ],
        imageAlt: "Researcher working with scientific equipment in a laboratory",
        partner: "Partner university network",
        location: TODO_PARTNER_LOCATION,
        bestFor: "Senior professionals pursuing doctoral study",
        tags: ["Faculty supervised", "Part-time friendly"],
        highlights: [
            "Research-led doctoral study",
            "Faculty-supervised academic guidance",
            "Flexible format for working professionals",
            "Part-time-friendly study structure",
        ],
        stats: [
            { label: "Duration", value: "3-4 yrs" },
            { label: "Mode", value: "Online + residencies" },
            { label: "Eligibility", value: "Master's required" },
        ],
        href: "#doctorate-section",
    },
    {
        title: "Career-accelerating Master's",
        level: "Master's",
        description:
            "Build on your degree with an MBA or specialised Master's featuring a capstone and opportunities to learn from industry mentors.",
        icon: BriefcaseBusiness,
        image: [
            homepageUnsplash("photo-1523240795612-9a054b0db644"),
            homepageUnsplash("photo-1521737711867-e3b97375f902"),
        ],
        imageAlt: "Graduate students collaborating on a university campus",
        partner: "Partner university network",
        location: TODO_PARTNER_LOCATION,
        bestFor: "Graduates building specialist or leadership skills",
        tags: ["MBA options", "Industry mentors"],
        highlights: [
            "Explore MBA and specialised Master's programmes",
            "Apply learning through a capstone project",
            "Learn with input from industry mentors",
            "Build skills for your next career step",
        ],
        stats: [
            { label: "Duration", value: "1-2 yrs" },
            { label: "Mode", value: "Online / Hybrid" },
            { label: "Eligibility", value: "Bachelor's required" },
        ],
        href: "#masters-section",
    },
    {
        title: "A global Bachelor's foundation",
        level: "Bachelor's",
        description:
            "Build a strong academic foundation with a global curriculum, practical internship opportunities and a global credit pathway.",
        icon: GraduationCap,
        image: [
            homepageUnsplash("photo-1562774053-701939374585"),
            homepageUnsplash("photo-1523050854058-8df90110c9f1"),
        ],
        imageAlt: "Students walking through a university campus",
        partner: "Partner university network",
        location: TODO_PARTNER_LOCATION,
        bestFor: "Students beginning an undergraduate degree",
        tags: ["Global curriculum", "Internship opportunities"],
        highlights: [
            "Build foundations through a global curriculum",
            "Explore internship opportunities",
            "Learn about global credit pathways",
            "Choose from available university partners",
        ],
        stats: [
            { label: "Duration", value: "3-4 yrs" },
            { label: "Mode", value: "Campus / Hybrid" },
            { label: "Eligibility", value: "12th pass" },
        ],
        href: "#undergraduate-section",
    },
    {
        title: "Professional skills for what comes next",
        level: "Professional",
        description:
            "Build job-ready skills through industry-informed certificates and diplomas in areas such as AI, data, marketing and finance.",
        icon: Lightbulb,
        image: [
            homepageUnsplash("photo-1516321318423-f06f85e504b3"),
            homepageUnsplash("photo-1497366754035-f200968a6e72"),
        ],
        imageAlt: "Professional learning new skills on a laptop",
        partner: " CampusSeat industry learning partners",
        location: "Online / global access",
        bestFor: "Learners building practical career skills",
        tags: ["Industry-informed", "Career-focused"],
        highlights: [
            "Explore AI, data, marketing and finance tracks",
            "Choose certificate and diploma options",
            "Apply practical skills through projects",
            "Get guidance on your next career step",
        ],
        stats: [
            { label: "Duration", value: "3-12 months" },
            { label: "Mode", value: "Online" },
            { label: "Eligibility", value: "Open eligibility" },
        ],
        href: "#profession-section",
    },
];

export const universityPartners = [
    {
        name: "EIMT",
        monogram: "E",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore degree options, compare study pathways, and get guidance on admissions through  CampusSeat.",
    },
    {
        name: "LSMT",
        monogram: "L",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover available academic pathways and get support understanding programme and application options.",
    },
    {
        name: "STRIDE",
        monogram: "S",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
        description:
            "Review degree pathways and connect with an admissions advisor to find an option suited to your goals.",
    },
    {
        name: "BIRCHWOOD",
        monogram: "B",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore academic programme choices with guidance on the next steps in the admissions journey.",
    },
    {
        name: "RUSHFORD",
        monogram: "R",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
        description:
            "Compare available degree options and get help navigating programme selection and admissions.",
    },
    {
        name: "DUNSTER",
        monogram: "D",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
        description:
            "Learn about degree pathways and receive support choosing an academic option that fits your plans.",
    },
];

export const learningSteps = [
    {
        number: "01",
        title: "Discover",
        description:
            "Explore programmes across five verticals with support from a free counsellor call.",
        icon: Compass,
        image: [
            homepageUnsplash("photo-1516321318423-f06f85e504b3"),
            homepageUnsplash("photo-1519389950473-47ba0277781c"),
        ],
        imageAlt: "Student exploring study options on a laptop",
        bullets: ["Browse programmes across five verticals", "Talk through your goals with a counsellor"],
        chip: "Free counselling",
    },
    {
        number: "02",
        title: "Choose",
        description:
            "Compare programmes and university partners by fee, duration and recognition.",
        icon: GraduationCap,
        image: [
            homepageUnsplash("photo-1562774053-701939374585"),
            homepageUnsplash("photo-1498243691581-b145c3f54a5a"),
        ],
        imageAlt: "University campus with students walking between buildings",
        bullets: ["Compare programme formats and duration", "Review partner university options"],
        chip: "Personalised guidance",
    },
    {
        number: "03",
        title: "Apply",
        description:
            "Complete one guided application, with documents checked by admissions support.",
        icon: BookOpenCheck,
        image: [
            homepageUnsplash("photo-1450101499163-c8848c66ca85"),
            homepageUnsplash("photo-1521737711867-e3b97375f902"),
        ],
        imageAlt: "Admissions advisor helping a student with application paperwork",
        bullets: ["Complete a guided application", "Get help reviewing required documents"],
        chip: "Takes about 5 minutes",
    },
    {
        number: "04",
        title: "Learn",
        description:
            "Learn through live and recorded classes, projects, mentors and a student community.",
        icon: Lightbulb,
        image: [
            homepageUnsplash("photo-1522202176988-66273c2fd55f"),
            homepageUnsplash("photo-1516321318423-f06f85e504b3"),
        ],
        imageAlt: "Students attending a collaborative online learning session",
        bullets: ["Join live and recorded classes", "Learn through projects and mentoring"],
        chip: "Flexible learning",
    },
    {
        number: "05",
        title: "Certify",
        description:
            "Complete your assessments and receive your degree or programme certificate.",
        icon: Award,
        image: [
            homepageUnsplash("photo-1523580494863-6f3031224c94"),
            homepageUnsplash("photo-1523050854058-8df90110c9f1"),
        ],
        imageAlt: "Graduates celebrating at a university ceremony",
        bullets: ["Complete programme assessments", "Receive a degree or certificate"],
        chip: "Your next milestone",
    },
    {
        number: "06",
        title: "Advance",
        description:
            "Move forward with career guidance, interview preparation, scholarship information and an alumni network.",
        icon: Sparkles,
        image: [
            homepageUnsplash("photo-1497366754035-f200968a6e72"),
            homepageUnsplash("photo-1521737711867-e3b97375f902"),
        ],
        imageAlt: "Professionals collaborating in a modern office",
        bullets: ["Get career and interview guidance", "Connect with the alumni community"],
        chip: "Career support",
    },
];

export const industryPartners = [
    {
        name: "Braincruise",
        category: "AI Learning and Certification Partner",
        description: "Powering our AI Academy.",
        monogram: "B",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    },
    {
        name: "Seven Seas Hotel",
        category: "Industry Training Partner",
        description: "Supporting the Hospitality Academy.",
        monogram: "7S",
        image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    },
    {
        name: "One Stock Developers & One Stock Academy",
        category: "Industry Partners",
        description: "Supporting the Real Estate Academy.",
        monogram: "OX",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
        name: "VocaTech",
        category: "Certification Partner",
        description:
            "Certifying the Hospitality and Real Estate Academies through its KSDA-approved certification framework.",
        monogram: "V",
        image:
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    },
];

export const homepageFaqs = [
    {
        question: "Are CampusSeat degree programmes accredited?",
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
            "Yes. Every CampusSeat programme is designed with flexible, remote-first formats built specifically for working professionals.",
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
        question: "Is CampusSeat open to international students?",
        answer:
            "Yes. CampusSeat learners join from more than 50 countries, and every programme is built for a fully international learning community.",
    },
];

export const programmeLinks = [
    { label: "Doctorate", href: "/programs/doctorate" },
    { label: "Master's", href: "/programs/management" },
    { label: "Bachelor's", href: "/programs/bachelor" },
    { label: "Executive Education", href: "/programs" },
    { label: "Skill-Based Education", href: "/program/Skill-Based" },
];
