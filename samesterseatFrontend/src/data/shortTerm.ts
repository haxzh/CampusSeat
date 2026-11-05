import {
    Award,
    CalendarClock,
    Clock3,
    Globe2,
    GraduationCap,
    Languages,
    MessagesSquare,
    Target,
    Users,
    Video,
} from "lucide-react";

const u = (id: string, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export type ShortTermCourse = {
    id: string;
    title: string;
    tagline: string;
    duration: string;
    level: string;
    format: string;
    summary: string;
    suitableFor: string;
    modules: string[];
    included: string[];
    image: string;
};

export const shortTermCourses: ShortTermCourse[] = [
    {
        id: "ielts",
        title: "IELTS Preparation",
        tagline: "Prepare for the band score you need",
        duration: "6–8 weeks",
        level: "Intermediate to Advanced",
        format: "Live online + mock tests",
        summary:
            "Structured preparation for all four IELTS sections, with strategy sessions, timed practice and personal feedback on writing and speaking.",
        suitableFor: "Students and professionals planning to study, work or migrate abroad.",
        modules: ["Listening strategies", "Academic and General Reading", "Writing Task 1 and Task 2", "Speaking practice and feedback", "Full-length mock tests"],
        included: ["Weekly mock tests", "Personal writing feedback", "Speaking practice sessions", "Study material and vocabulary lists"],
        image: u("1434030216411-0b793f4b4173"),
    },
    {
        id: "english",
        title: "English Language",
        tagline: "Speak and write with confidence",
        duration: "8–12 weeks",
        level: "Beginner to Advanced",
        format: "Live online batches",
        summary:
            "Build fluency in spoken and written English for study, work and everyday life, with a focus on grammar, vocabulary and clear communication.",
        suitableFor: "Learners who want better spoken English for college, interviews or the workplace.",
        modules: ["Grammar foundations", "Vocabulary building", "Conversation practice", "Business writing and email", "Pronunciation and listening"],
        included: ["Small speaking batches", "Weekly assignments", "Progress assessments", "Course completion certificate"],
        image: u("1546410531-bb4caa6b424d"),
    },
    {
        id: "german",
        title: "German Language",
        tagline: "Your first step to studying in Germany",
        duration: "10–14 weeks per level",
        level: "A1 to B2",
        format: "Live online batches",
        summary:
            "Learn German step by step following the CEFR framework, with speaking, listening, reading and writing practice for study and work abroad.",
        suitableFor: "Students and professionals preparing for university, jobs or life in German-speaking countries.",
        modules: ["Alphabet, greetings and basics", "Everyday grammar and sentence building", "Listening and speaking practice", "Reading and writing skills", "Exam-style practice"],
        included: ["Level-wise batches", "Speaking practice", "Worksheets and recordings", "Mock tests for each level"],
        image: u("1467269204594-9661b134dd2b"),
    },
    {
        id: "french",
        title: "French Language",
        tagline: "Learn the language of culture and diplomacy",
        duration: "10–14 weeks per level",
        level: "A1 to B2",
        format: "Live online batches",
        summary:
            "Progress from first words to confident conversation in French, with a balanced focus on speaking, comprehension and writing.",
        suitableFor: "Learners interested in study, careers or travel in French-speaking regions.",
        modules: ["Pronunciation and basics", "Core grammar and verbs", "Conversation and listening", "Reading and writing practice", "Exam-style practice"],
        included: ["Level-wise batches", "Conversation circles", "Audio and practice material", "Mock tests for each level"],
        image: u("1502602898657-3e91760cbb34"),
    },
    {
        id: "certification",
        title: "Professional Certification",
        tagline: "Add a credential employers recognise",
        duration: "4–12 weeks",
        level: "All levels",
        format: "Live online + self-paced",
        summary:
            "Short, focused certification courses that build job-ready skills and give you a credential to add to your resume and profile.",
        suitableFor: "Students and working professionals who want to upskill quickly.",
        modules: ["Core concepts and tools", "Guided practical exercises", "Case studies", "Capstone assignment", "Final assessment"],
        included: ["Certificate on completion", "Recorded sessions", "Project feedback", "Career guidance"],
        image: u("1523240795612-9a054b0db644"),
    },
];

export const shortTermOptions = shortTermCourses.map((c) => c.title);

export const shortTermHeroImage = u("1523050854058-8df90110c9f1", 2400);

export const shortTermHighlights = [
    { label: "Courses", value: "5 focused short-term courses", icon: GraduationCap },
    { label: "Duration", value: "4 to 14 weeks", icon: Clock3 },
    { label: "Delivery", value: "Live online batches", icon: Video },
    { label: "Schedule", value: "Weekday and weekend batches", icon: CalendarClock },
    { label: "Certificate", value: "Certificate on completion", icon: Award },
];

export const shortTermStats = [
    { value: "5", label: "Courses" },
    { value: "4–14", label: "Weeks" },
    { value: "A1–B2", label: "Language levels" },
    { value: "Live", label: "Online classes" },
];

export const steps = [
    { title: "Pick a course", text: "Choose the course that matches your goal and current level.", icon: Target },
    { title: "Join a batch", text: "Select a weekday or weekend batch that fits your schedule.", icon: CalendarClock },
    { title: "Learn and practise", text: "Attend live classes, practise with assignments and take mock tests.", icon: MessagesSquare },
    { title: "Get certified", text: "Complete the course and receive your certificate.", icon: Award },
];

export const whyShortTerm = [
    { title: "Fast and focused", text: "Short programmes built around one clear outcome.", icon: Clock3 },
    { title: "Small batches", text: "More speaking time and personal feedback from instructors.", icon: Users },
    { title: "Level-wise learning", text: "Start at your level and move up step by step.", icon: Languages },
    { title: "Study-abroad ready", text: "Language and test preparation aligned with international admissions.", icon: Globe2 },
];

export const shortTermFaqs = [
    { question: "Do I need prior knowledge?", answer: "No. Language courses start from A1 for complete beginners, and each course lists its recommended level." },
    { question: "Are classes live?", answer: "Yes. Courses are taught in live online batches, and recordings are shared so you can revise." },
    { question: "How do I choose my batch?", answer: "Our admissions team will help you pick a weekday or weekend batch based on your availability." },
    { question: "Will I get a certificate?", answer: "Yes. You receive a certificate of completion after meeting the course requirements. Official exam certificates such as IELTS are issued by the exam body." },
];