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
    { value: "35+", label: "University & Industry Partners" },
    { value: "30+", label: "Countries Represented" },
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
        level: "University Network",
        description:
            "Choose from six university partners and explore internationally recognised academic pathways. Compare universities, discover degree programmes, understand admission requirements and receive personalised guidance throughout your application journey.",

        icon: Globe2,

        image: [
            homepageUnsplash("photo-1498243691581-b145c3f54a5a"),
            homepageUnsplash("photo-1562774053-701939374585"),
        ],

        imageAlt: "University campus buildings surrounded by trees",

        partner: "CampusSeat University Network",
        location: "International University Destinations",

        bestFor: "Students comparing international universities and academic pathways",

        tags: [
            "40+ University Partners",
            // "Guided Admissions",
            "International Education",
            "Global Opportunities",
        ],

        overview:
            "CampusSeat connects students with university opportunities across different countries and academic disciplines. Explore institutions, compare programmes, understand eligibility criteria and make informed decisions about your academic future with dedicated admission guidance.",

        highlights: [
            "Explore academic opportunities across six university partners.",
            "Compare universities, programmes and international study destinations.",
            "Discover undergraduate, postgraduate and professional qualifications.",
            "Receive personalised university selection guidance.",
            "Understand admission requirements and application deadlines.",
            "Explore available scholarships and financial support opportunities.",
            // "Get assistance with application documentation and enrolment.",
            // "Access international education guidance throughout your journey.",
        ],

        eligibility: [
            "Eligibility depends on the selected university and programme.",
            "Students must meet the minimum academic requirements.",
            "Previous academic transcripts and certificates may be required.",
            "English language proficiency may be required for international programmes.",
            "Additional entrance examinations may apply to selected courses.",
        ],

        programmes: [
            "Bachelor's Degree Programmes",
            "Master's Degree Programmes",
            "MBA and Management Programmes",
            "Doctoral and Research Programmes",
            "Technology and Computer Science",
            "Business and Finance",
            "Professional Certificates and Diplomas",
        ],

        benefits: [
            "University selection and comparison assistance.",
            "Personalised programme recommendations.",
            "Application and documentation guidance.",
            "Scholarship information and guidance.",
            "Admission process assistance.",
            "International study destination guidance.",
            "Pre-departure assistance where applicable.",
        ],

        careerOutcomes: [
            "International Business and Management",
            "Technology and Software Development",
            "Finance and Consulting",
            "Research and Academic Careers",
            "Entrepreneurship",
            "Professional Specialisation",
        ],

        admissionProcess: [
            "Submit your enquiry through CampusSeat.",
            "Discuss your academic background and career goals.",
            "Explore suitable universities and programmes.",
            "Check programme eligibility and requirements.",
            "Prepare and submit your application.",
            "Receive admission updates from the university.",
            "Complete enrolment and prepare to begin your studies.",
        ],

        documentsRequired: [
            "Academic marksheets and certificates.",
            "Valid passport for international applications.",
            "Updated resume where required.",
            "Statement of purpose where required.",
            "English proficiency test results where applicable.",
            "Passport-size photographs.",
            "Additional university-specific documents.",
        ],

        stats: [
            { label: "University Partners", value: "60+" },
            { label: "Countries", value: "50+" },
            { label: "Pathways", value: "30+" },
            // { label: "Support", value: "End-to-end" },
        ],

        duration: "Depends on selected programme",
        studyMode: "Campus / Online / Hybrid",
        qualification: "University-specific qualification",

        href: "#university-partners",
    },

    {
        title: "Research-Led Doctoral Degrees",
        level: "Doctorate",

        description:
            "Advance your expertise through research-led doctoral degrees designed for experienced professionals, academics and researchers. Develop original research, work with academic supervisors and contribute meaningful knowledge to your chosen discipline.",

        icon: Award,

        image: [
            homepageUnsplash("photo-1532094349884-543bc11b234d"),
            homepageUnsplash("photo-1564981797816-1043664bf78d"),
        ],

        imageAlt: "Researcher working with scientific equipment in a laboratory",

        partner: "CampusSeat Partner University Network",
        location: "International / Online / Research Residencies",

        bestFor: "Senior professionals, researchers and academics pursuing advanced doctoral study",

        tags: [
            "Research Focused",
            "Faculty Supervised",
            "Advanced Research",
            "Professional Development",
        ],

        overview:
            "Doctoral education provides an opportunity to develop specialised expertise, investigate complex research questions and contribute original knowledge to an academic or professional field. Students undertake structured research supported by academic supervision and work towards completing a doctoral thesis according to the awarding university's requirements.",

        highlights: [
            "Develop advanced expertise in a specialised research area.",
            "Conduct independent and original academic research.",
            "Receive faculty-supervised academic guidance.",
            "Explore advanced qualitative and quantitative research methodologies.",
            "Develop academic writing and research publication skills.",
            "Work on a structured doctoral research proposal.",
            // "Build expertise in your professional discipline.",
            // "Explore flexible study arrangements where available.",
        ],

        eligibility: [
            "A recognised Master's degree or equivalent qualification.",
            "Relevant academic background in the proposed research area.",
            "A preliminary research proposal where required.",
            "Professional experience may be considered by selected universities.",
            "English language proficiency where applicable.",
            "Final eligibility depends on university admission requirements.",
        ],

        programmes: [
            "Doctor of Philosophy (PhD)",
            "Doctor of Business Administration (DBA)",
            "Doctorate in Management",
            "Doctorate in Education",
            "Doctorate in Computer Science",
            "Doctorate in Engineering",
            "Doctorate in Research and Applied Sciences",
        ],

        benefits: [
            "Structured doctoral research guidance.",
            "Academic supervision subject to university policies.",
            "Advanced research methodology training.",
            "Academic and professional networking opportunities.",
            "Development of specialised expertise.",
            "Research planning and documentation assistance.",
            "Opportunities to contribute to academic research.",
        ],

        careerOutcomes: [
            "University Professor and Lecturer",
            "Research Scientist",
            "Academic Researcher",
            "Corporate Research and Development",
            "Research Consultant",
            "Policy Research Specialist",
            "Academic and Institutional Leadership",
        ],

        admissionProcess: [
            "Submit your doctoral programme enquiry.",
            "Share your academic and professional background.",
            "Identify your preferred research area.",
            "Discuss programme suitability and eligibility.",
            "Prepare a research proposal where required.",
            "Submit your application and supporting documents.",
            "Attend an academic interview where required.",
            "Receive the admission decision and complete enrolment.",
        ],

        documentsRequired: [
            "Bachelor's degree certificate.",
            "Master's degree certificate.",
            "Academic transcripts.",
            "Updated academic or professional CV.",
            "Research proposal where required.",
            "Statement of purpose.",
            "Identity and passport documents where applicable.",
            "English proficiency certificate where required.",
        ],

        stats: [
            { label: "Duration", value: "3–4 Years*" },
            { label: "Study Mode", value: "Online / Hybrid*" },
            { label: "Qualification", value: "Doctorate" },
            // { label: "Eligibility", value: "Master's*" },
        ],

        duration: "Typically 3–4 years, subject to university regulations",
        studyMode: "Online / Hybrid / Research Residency",
        qualification: "Doctoral Degree",

        href: "#doctorate-section",
    },

    {
        title: "Career-Accelerating Master's",
        level: "Master's",

        description:
            "Build on your undergraduate education with an MBA or specialised Master's degree. Develop advanced subject knowledge, leadership capabilities and industry-relevant skills through practical assignments, case studies, capstone projects and professional learning opportunities.",

        icon: BriefcaseBusiness,

        image: [
            homepageUnsplash("photo-1523240795612-9a054b0db644"),
            homepageUnsplash("photo-1521737711867-e3b97375f902"),
        ],

        imageAlt: "Graduate students collaborating on a university campus",

        partner: "CampusSeat Partner University Network",
        location: "International / Online / Hybrid",

        bestFor: "Graduates and working professionals building specialist or leadership skills",

        tags: [
            "MBA Options",
            "Industry Mentors",
            "Career Development",
            "Advanced Learning",
        ],

        overview:
            "A Master's degree helps graduates deepen their knowledge, develop specialised expertise and prepare for advanced professional opportunities. CampusSeat provides guidance to explore postgraduate programmes across business, management, technology, finance and other disciplines. Depending on the institution, students may benefit from industry projects, academic mentorship, practical assignments and professional networking.",

        highlights: [
            "Explore MBA and specialised Master's programmes.",
            "Develop advanced subject-specific knowledge.",
            "Learn business strategy and leadership principles.",
            "Apply learning through practical projects and case studies.",
            "Work on capstone projects and research assignments.",
            "Develop communication and management capabilities.",
            // "Gain exposure to professional and industry environments.",
            // "Prepare for advanced career opportunities.",
        ],

        eligibility: [
            "A recognised Bachelor's degree or equivalent qualification.",
            "Minimum academic scores as specified by the university.",
            "Relevant work experience for selected MBA programmes.",
            "English language proficiency where applicable.",
            "GMAT or GRE may be required by certain institutions.",
            "Additional programme-specific requirements may apply.",
        ],

        programmes: [
            "Master of Business Administration (MBA)",
            "Master of Computer Applications (MCA)",
            "Master of Science (MSc)",
            "Master of Arts (MA)",
            "Master of Technology (MTech)",
            "Master of Finance",
            "Master of Data Science",
            "Master of International Business",
            "Master of Marketing",
            "Master of Management",
        ],

        benefits: [
            "Postgraduate programme selection guidance.",
            "University comparison and application support.",
            "Academic documentation assistance.",
            "Scholarship and funding information.",
            "Career-oriented programme exploration.",
            "Guidance throughout the admission journey.",
            "Information about industry-oriented learning opportunities.",
        ],

        careerOutcomes: [
            "Business Development Manager",
            "Marketing Manager",
            "Financial Analyst",
            "Business Consultant",
            "Project Manager",
            "Product Manager",
            "Data Analyst",
            "Operations Manager",
            "Entrepreneur",
        ],

        admissionProcess: [
            "Submit your postgraduate enquiry.",
            "Share your academic and professional background.",
            "Explore suitable Master's programmes.",
            "Review eligibility and admission requirements.",
            "Prepare the required application documents.",
            "Submit your university application.",
            "Attend an interview or assessment where required.",
            "Receive your admission decision and complete enrolment.",
        ],

        documentsRequired: [
            "Bachelor's degree certificate.",
            "Academic transcripts.",
            "Updated CV or resume.",
            "Statement of purpose.",
            "Letters of recommendation where required.",
            "English language test results where applicable.",
            "Work experience documents for selected programmes.",
            "Passport or identity documents.",
        ],

        stats: [
            { label: "Duration", value: "1–2 Years*" },
            { label: "Study Mode", value: "Online / Hybrid*" },
            { label: "Qualification", value: "Master's" },
            // { label: "Eligibility", value: "Bachelor's*" },
        ],

        duration: "Typically 1–2 years, depending on programme",
        studyMode: "Online / Campus / Hybrid",
        qualification: "Master's Degree / MBA",

        href: "#masters-section",
    },

    {
        title: "A Global Bachelor's Foundation",
        level: "Bachelor's",

        description:
            "Build a strong academic foundation through internationally focused undergraduate education. Explore diverse academic disciplines, develop practical skills, discover internship opportunities and prepare for future postgraduate study or professional careers.",

        icon: GraduationCap,

        image: [
            homepageUnsplash("photo-1562774053-701939374585"),
            homepageUnsplash("photo-1523050854058-8df90110c9f1"),
        ],

        imageAlt: "Students walking through a modern university campus",

        partner: "CampusSeat University Network",
        location: "India / USA / UK / Europe / International",

        bestFor: "School graduates and students beginning an undergraduate degree",

        tags: [
            "Global Curriculum",
            "Internship Opportunities",
            "Undergraduate Education",
            "International Exposure",
        ],

        overview:
            "Your Bachelor's degree is the foundation of your academic and professional future. CampusSeat helps students explore undergraduate opportunities across different countries and academic disciplines. Compare universities, discover suitable courses, understand entry requirements and identify learning pathways that match your interests and career ambitions.",

        highlights: [
            "Explore Bachelor's programmes across multiple disciplines.",
            "Compare universities and international study destinations.",
            "Build strong academic and professional foundations.",
            "Discover internship opportunities where available.",
            "Develop practical and problem-solving skills.",
            "Participate in academic projects and collaborative activities.",
            // "Explore international academic pathways.",
            // "Prepare for employment or postgraduate education.",
        ],

        eligibility: [
            "Completion of Class 12 or an equivalent qualification.",
            "Minimum academic percentage as required by the university.",
            "Relevant subject combinations for selected programmes.",
            "English language proficiency for international programmes where applicable.",
            "Entrance examinations may be required.",
            "Some programmes may have portfolio or aptitude requirements.",
        ],

        programmes: [
            "Bachelor of Business Administration (BBA)",
            "Bachelor of Computer Applications (BCA)",
            "Bachelor of Technology (BTech)",
            "Bachelor of Science (BSc)",
            "Bachelor of Arts (BA)",
            "Bachelor of Commerce (BCom)",
            "Bachelor of Economics",
            "Bachelor of Design",
            "Bachelor of Engineering (BE)",
            "Bachelor of Psychology",
        ],

        benefits: [
            "Undergraduate university selection guidance.",
            "Course and destination comparisons.",
            "Application and documentation assistance.",
            "Scholarship opportunity information.",
            "Academic eligibility guidance.",
            "International admission support.",
            "Pre-departure assistance where applicable.",
        ],

        careerOutcomes: [
            "Software Developer",
            "Business Analyst",
            "Marketing Executive",
            "Financial Analyst",
            "Data Analyst",
            "Management Trainee",
            "Research Assistant",
            "Entrepreneur",
            "Higher Education Opportunities",
        ],

        admissionProcess: [
            "Complete your undergraduate enquiry.",
            "Share your Class 10 and Class 12 academic details.",
            "Select your preferred course and destination.",
            "Check programme-specific eligibility.",
            "Prepare your academic documents.",
            "Submit the university application.",
            "Complete entrance tests or interviews where required.",
            "Receive your admission offer.",
            "Complete enrolment and prepare for university.",
        ],

        documentsRequired: [
            "Class 10 marksheet and certificate.",
            "Class 12 marksheet and certificate.",
            "School leaving certificate where required.",
            "Valid passport for international applications.",
            "Passport-size photographs.",
            "English proficiency results where applicable.",
            "Statement of purpose where required.",
            "Other programme-specific documents.",
        ],

        stats: [
            { label: "Duration", value: "3–4 Years*" },
            { label: "Study Mode", value: "Campus / Hybrid*" },
            { label: "Qualification", value: "Bachelor's" },
            // { label: "Eligibility", value: "12th Pass*" },
        ],

        duration: "Typically 3–4 years, depending on programme and country",
        studyMode: "Campus / Online / Hybrid",
        qualification: "Bachelor's Degree",

        href: "#undergraduate-section",
    },

    {
        title: "Professional Skills for What Comes Next",
        level: "Professional",

        description:
            "Build job-ready skills through industry-informed professional certificates and diplomas. Explore practical learning opportunities in artificial intelligence, data science, digital marketing, finance, business and emerging technologies.",

        icon: Lightbulb,

        image: [
            homepageUnsplash("photo-1516321318423-f06f85e504b3"),
            homepageUnsplash("photo-1497366754035-f200968a6e72"),
        ],

        imageAlt: "Professional learning new skills using a laptop in a modern workspace",

        partner: "CampusSeat Industry Learning Partners",
        location: "Online / Global Access",

        bestFor: "Students, graduates and professionals building practical career skills",

        tags: [
            "Industry-Informed",
            "Career-Focused",
            "Practical Learning",
            "Professional Certificates",
        ],

        overview:
            "The professional learning pathway is designed for individuals who want to develop relevant skills, improve their career prospects and stay competitive in a changing employment landscape. Explore focused certificates and diploma programmes in technology, business and other professional disciplines. Build practical knowledge through projects, assignments and structured learning experiences.",

        highlights: [
            "Explore AI, data science, marketing and finance programmes.",
            "Develop practical and industry-relevant capabilities.",
            "Choose certificate and diploma learning options.",
            "Build knowledge through real-world case studies.",
            "Develop professional communication and teamwork skills.",
            "Apply your learning through practical assignments.",
            // "Explore emerging technologies and industry trends.",
            // "Receive guidance on your next professional development step.",
        ],

        eligibility: [
            "Eligibility depends on the selected certificate or diploma.",
            "Some programmes are suitable for beginners.",
            "Certain advanced courses may require previous experience.",
            "Basic computer knowledge may be required for technology courses.",
            "English language understanding may be recommended.",
            "Programme-specific prerequisites may apply.",
        ],

        programmes: [
            "Artificial Intelligence and Machine Learning",
            "Data Science and Analytics",
            "Cybersecurity",
            "Full Stack Web Development",
            "Digital Marketing",
            "Business Analytics",
            "Finance and Accounting",
            "Project Management",
            "Leadership and Management",
            "Cloud Computing",
        ],

        benefits: [
            "Flexible professional learning options.",
            "Industry-informed course content.",
            "Practical assignments and projects.",
            "Professional skill development.",
            "Certificate and diploma opportunities.",
            "Career development guidance.",
            "Learning opportunities for working professionals.",
        ],

        careerOutcomes: [
            "Junior Data Analyst",
            "Digital Marketing Executive",
            "Business Analyst",
            "Web Developer",
            "AI and Technology Associate",
            "Cybersecurity Analyst",
            "Financial Analyst",
            "Project Coordinator",
            "Business Development Executive",
        ],

        admissionProcess: [
            "Explore professional learning programmes.",
            "Choose your preferred subject or skill area.",
            "Review course structure and eligibility.",
            "Submit your registration or enquiry.",
            "Complete the required application process.",
            "Receive enrolment confirmation.",
            "Begin your learning journey.",
            "Complete assessments and projects where applicable.",
        ],

        documentsRequired: [
            "Basic personal information.",
            "Academic qualifications where required.",
            "Updated CV for selected advanced programmes.",
            "Valid identity document.",
            "Previous experience details where applicable.",
            "Other programme-specific documents.",
        ],

        stats: [
            { label: "Duration", value: "3–12 Months*" },
            { label: "Study Mode", value: "Online" },
            { label: "Qualification", value: "Certificate / Diploma" },
            // { label: "Eligibility", value: "Programme Based" },
        ],

        duration: "Typically 3–12 months, depending on programme",
        studyMode: "Online / Flexible Learning",
        qualification: "Professional Certificate / Diploma",

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
    {
        name: "MONTGOMERY",
        monogram: "M",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover available degree programmes and get guidance on the admissions process and next steps.",  
    },
    {
        name: "HARRINGTON",
        monogram: "H",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore degree options and receive support understanding programme requirements and admissions guidance.", 
    },
    {
        name: "WILLOWBROOK",
        monogram: "W",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
        description:
            "Review available academic pathways and get help navigating programme selection and admissions.",
    },
    {
        name: "KINGSLEY",
        monogram: "K",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
        description:
            "Learn about degree programmes and receive guidance on selecting an academic pathway and admissions process.",
    },
    {
        name: "FAIRHAVEN",      
        monogram: "F",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover degree options and get support understanding programme requirements and admissions guidance.",
    },
    {
        name: "RAVENWOOD",
        monogram: "R",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore available academic pathways and receive guidance on programme selection and admissions.",
    },
    {
        name: "SILVERWOOD",
        monogram: "S",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
        description:
            "Review degree programmes and get help navigating programme selection and admissions guidance.",
    },
    {   
        name: "HARTFORD",
        monogram: "H",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        description:
            "Learn about degree options and receive support understanding programme requirements and admissions guidance.",
    },
    {
        name: "OAKWOOD",
        monogram: "O",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover available academic pathways and get help navigating programme selection and admissions.",
    },
    {   
        name: "BRIGHTON",
        monogram: "B",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore degree programmes and receive guidance on selecting an academic pathway and admissions process.",
    },
    {
        name: "GREENWOOD",
        monogram: "G",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
        description:
            "Review available academic pathways and get support understanding programme requirements and admissions guidance.",
    },
    {
        name: "RIVERSIDE",
        monogram: "R",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
        description:
            "Learn about degree options and receive guidance on selecting an academic pathway and admissions process.",
    },
    {
        name: "MAPLEWOOD",
        monogram: "M",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover degree programmes and get help navigating programme selection and admissions guidance.",
    },
    {
        name: "CRESCENTWOOD",      
        monogram: "C",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore available academic pathways and receive support understanding programme requirements and admissions guidance.",
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
