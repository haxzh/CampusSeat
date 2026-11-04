import {
    BookOpenCheck,
    BriefcaseBusiness,
    Clock3,
    FileCheck2,
    FlaskConical,
    GraduationCap,
    Laptop,
    LibraryBig,
    Lightbulb,
    type LucideIcon,
} from "lucide-react";

export const programmeHighlights: {
    label: string;
    value: string;
    icon: LucideIcon;
}[] = [
    {
        label: "Qualification",
        value: "Doctorate in Business Administration — MQF Level 8",
        icon: GraduationCap,
    },
    {
        label: "Exit Award",
        value: "MPhil (MQF Level 7), after two years",
        icon: FileCheck2,
    },
    {
        label: "Duration",
        value: "Full-Time 3–3.5 years · Part-Time 6–7 years",
        icon: Clock3,
    },
    {
        label: "Total Learning Hours",
        value: "4,500",
        icon: BookOpenCheck,
    },
    {
        label: "Delivery",
        value: "Fully online — lectures, case studies, asynchronous forums, dedicated VLE",
        icon: Laptop,
    },
    {
        label: "Entry Test",
        value: "No GMAT/GRE required",
        icon: Lightbulb,
    },
];

export const programmeStages = [
    { title: "Taught Phase", icon: LibraryBig },
    { title: "Research Phase", icon: FlaskConical },
    { title: "Viva Voce", icon: BriefcaseBusiness },
];

export const modules = [
    {
        title: "Strategic Financial Management",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Entrepreneurship & Innovation",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Strategic Marketing",
        image:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Globalisation & Corporate Governance",
        image:
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Developing Strategic Management & Leadership Potential",
        image:
            "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Developing Research Capability",
        image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Advanced Research Design & Methodologies",
        image:
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
    {
        title: "Research & Dissertation",
        image:
            "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=85",
        description:
            "TODO: Add the approved module paragraph. The provided DBA PDF lists this module but does not include its description.",
        assessment:
            "TODO: Add the assessment breakdown from the approved module content. No assessment details or percentages appear in the provided PDF.",
    },
] as const;

// TODO: Replace these examples with your real university partners, country, logo, and website.
export const partners = [
    {
        id: "partner-1",
        name: "University partner 1",
        country: "Country",
        logo: "",
        website: "",
    },
    {
        id: "partner-2",
        name: "University partner 2",
        country: "Country",
        logo: "",
        website: "",
    },
] as const;

export const graduateOutcomes = [
    {
        text: "Design and lead complex strategic initiatives, managing large-scale organisational transformation",
        icon: BriefcaseBusiness,
    },
    {
        text: "Conduct original, rigorous research using advanced quantitative and qualitative methodologies",
        icon: FlaskConical,
    },
    {
        text: "Communicate complex research and strategic insight to academic, executive, and policy audiences",
        icon: BookOpenCheck,
    },
    {
        text: "Apply the highest standards of ethical practice and sustainability across all professional decisions",
        icon: FileCheck2,
    },
    {
        text: "Contribute new theoretical and practical knowledge to the field of business administration",
        icon: Lightbulb,
    },
];

export const faqs = [
    {
        question: "Who should consider a DBA?",
        answer:
            "Experienced business professionals, senior executives, consultants, and academic scholars seeking to sharpen executive and research capability without stepping away from their careers.",
    },
    {
        question: "What are the admission requirements?",
        answer:
            "A relevant Master's degree, demonstrated English proficiency (or applicable waiver), basic digital competence, and relevant professional experience. Prior learning is assessed under the Recognition of Prior Learning policy.",
    },
    {
        question: "Can I transfer credits from another institution?",
        answer:
            "Credits from accredited institutions are generally eligible for transfer, subject to review by the admissions team.",
    },
    {
        question: "What happens if I don't complete the full programme?",
        answer:
            "Candidates who complete two years but do not finish the doctorate are eligible for the MPhil (MQF Level 7) exit award.",
    },
    {
        question: "How is the programme delivered?",
        answer:
            "Entirely online, in academic partnership with the university network, structured around milestones designed for full-time working professionals.",
    },
];

export const courseOptions = [
    "Full DBA programme",
    ...modules.map((module) => module.title),
];
