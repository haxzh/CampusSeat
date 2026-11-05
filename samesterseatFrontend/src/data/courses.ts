import {
    Award,
    BrainCircuit,
    Briefcase,
    Clock3,
    Code2,
    Globe2,
    Laptop,
    Palette,
    ShieldCheck,
    Users,
} from "lucide-react";

const u = (id: string, w = 1200) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const categories = [
    { id: "development", label: "Software Development", icon: Code2, image: u("1555066931-4365d14bab8c") },
    { id: "ai-data", label: "AI & Data", icon: BrainCircuit, image: u("1551288049-bebda4e38f71") },
    { id: "infrastructure", label: "Cloud, Security & Emerging Tech", icon: ShieldCheck, image: u("1558494949-ef010cbdcc31") },
    { id: "design", label: "Design & Creative", icon: Palette, image: u("1561070791-2526d30994b5") },
    { id: "business", label: "Business & Management", icon: Briefcase, image: u("1556761175-5973dc0f32e7") },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
    id: string;
    title: string;
    category: CategoryId;
    level: Level;
    duration: string;
    summary: string;
    skills: string[];
    outcomes: string[];
};

const c = (
    title: string,
    category: CategoryId,
    level: Level,
    duration: string,
    summary: string,
    skills: string[],
    outcomes: string[],
): Course => ({
    id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title,
    category,
    level,
    duration,
    summary,
    skills,
    outcomes,
});

export const courses: Course[] = [
    // Software Development
    c("Full Stack Development", "development", "Intermediate", "6 months", "Build complete web applications from database to user interface using the modern JavaScript stack.", ["React", "Node.js", "MongoDB", "REST APIs"], ["Full Stack Developer", "Frontend Engineer", "Backend Engineer"]),
    c("Python Programming", "development", "Beginner", "3 months", "Learn Python from fundamentals to scripting, automation and problem solving.", ["Python Basics", "OOP", "File Handling", "Automation"], ["Python Developer", "Automation Engineer", "QA Scripter"]),
    c("Java Development", "development", "Intermediate", "4 months", "Master core Java, object-oriented design and enterprise application development.", ["Core Java", "Spring Boot", "JDBC", "Hibernate"], ["Java Developer", "Backend Engineer", "Enterprise Developer"]),
    c("Software Engineering", "development", "Intermediate", "5 months", "Learn how professional teams design, test, ship and maintain reliable software.", ["System Design", "Testing", "Git & CI", "Agile"], ["Software Engineer", "SDET", "Technical Lead"]),
    c("Web Development", "development", "Beginner", "3 months", "Create responsive, accessible websites with HTML, CSS and JavaScript.", ["HTML & CSS", "JavaScript", "Responsive Design", "Accessibility"], ["Web Developer", "Frontend Developer", "Freelancer"]),
    c("Mobile App Development", "development", "Intermediate", "5 months", "Build cross-platform mobile apps for Android and iOS and publish them to the stores.", ["React Native", "Flutter", "App APIs", "Store Release"], ["Mobile Developer", "App Engineer", "Product Builder"]),

    // AI & Data
    c("Artificial Intelligence", "ai-data", "Intermediate", "5 months", "Understand how intelligent systems reason, learn and make decisions, with hands-on projects.", ["Search & Logic", "Neural Networks", "NLP", "Computer Vision"], ["AI Engineer", "AI Analyst", "Research Associate"]),
    c("Machine Learning", "ai-data", "Advanced", "5 months", "Train, evaluate and deploy machine learning models on real datasets.", ["Scikit-learn", "Feature Engineering", "Model Evaluation", "MLOps Basics"], ["ML Engineer", "Applied Scientist", "Data Scientist"]),
    c("Data Analytics", "ai-data", "Beginner", "4 months", "Turn raw data into clear insight using spreadsheets, SQL and visualisation tools.", ["Excel", "SQL", "Power BI", "Storytelling"], ["Data Analyst", "Reporting Analyst", "BI Associate"]),
    c("Data Science", "ai-data", "Advanced", "6 months", "Combine statistics, programming and machine learning to solve business problems with data.", ["Python", "Statistics", "Modelling", "Visualisation"], ["Data Scientist", "Analytics Engineer", "Research Analyst"]),
    c("Business Analytics", "ai-data", "Intermediate", "4 months", "Use data to guide strategy, forecast demand and measure business performance.", ["KPIs", "Forecasting", "Dashboards", "A/B Testing"], ["Business Analyst", "Strategy Analyst", "Product Analyst"]),
    c("Generative AI", "ai-data", "Intermediate", "3 months", "Build applications with large language models, image generators and AI agents.", ["LLM APIs", "RAG", "Fine-tuning Basics", "AI Agents"], ["GenAI Developer", "AI Product Builder", "Automation Specialist"]),
    c("Prompt Engineering", "ai-data", "Beginner", "6 weeks", "Write precise prompts and workflows that get reliable results from AI models.", ["Prompt Patterns", "Evaluation", "Chaining", "Safety"], ["Prompt Engineer", "AI Content Lead", "Operations Specialist"]),

    // Cloud, Security & Emerging Tech
    c("Cybersecurity", "infrastructure", "Intermediate", "5 months", "Learn to defend networks and applications, detect threats and respond to incidents.", ["Network Security", "Ethical Hacking", "SIEM", "Incident Response"], ["Security Analyst", "SOC Analyst", "Penetration Tester"]),
    c("Cloud Computing", "infrastructure", "Intermediate", "4 months", "Design, deploy and manage scalable applications on leading cloud platforms.", ["AWS / Azure", "Networking", "Storage", "Cost Control"], ["Cloud Engineer", "Solutions Associate", "Cloud Support"]),
    c("DevOps Engineering", "infrastructure", "Advanced", "5 months", "Automate build, test and release pipelines and run reliable infrastructure.", ["Docker", "Kubernetes", "CI/CD", "Terraform"], ["DevOps Engineer", "SRE", "Platform Engineer"]),
    c("Blockchain Technology", "infrastructure", "Intermediate", "4 months", "Understand distributed ledgers and build smart contracts and decentralised apps.", ["Ethereum", "Solidity", "Smart Contracts", "Web3"], ["Blockchain Developer", "Web3 Engineer", "Crypto Analyst"]),
    c("Robotics and Automation", "infrastructure", "Advanced", "6 months", "Design robotic systems and automate processes using sensors, controllers and software.", ["Control Systems", "ROS", "Sensors", "PLC Basics"], ["Robotics Engineer", "Automation Engineer", "Mechatronics Technician"]),
    c("Internet of Things (IoT)", "infrastructure", "Intermediate", "4 months", "Connect devices, collect sensor data and build smart, networked solutions.", ["Arduino / ESP32", "MQTT", "Edge Computing", "IoT Cloud"], ["IoT Engineer", "Embedded Developer", "Smart Systems Designer"]),

    // Design & Creative
    c("UI/UX Design", "design", "Beginner", "4 months", "Research users, design intuitive interfaces and test them with real people.", ["Figma", "User Research", "Prototyping", "Design Systems"], ["UI Designer", "UX Designer", "Product Designer"]),
    c("Graphic Design", "design", "Beginner", "3 months", "Create strong visual identities, layouts and marketing assets.", ["Typography", "Colour", "Photoshop", "Illustrator"], ["Graphic Designer", "Brand Designer", "Creative Associate"]),
    c("Video Editing and Animation", "design", "Beginner", "4 months", "Edit stories, add motion graphics and produce polished video content.", ["Premiere Pro", "After Effects", "Motion Graphics", "Sound"], ["Video Editor", "Motion Designer", "Content Producer"]),

    // Business & Management
    c("Digital Marketing", "business", "Beginner", "3 months", "Plan and run campaigns across search, social, email and content channels.", ["SEO", "Paid Ads", "Social Media", "Analytics"], ["Digital Marketer", "SEO Executive", "Growth Associate"]),
    c("Project Management", "business", "Intermediate", "3 months", "Plan, deliver and govern projects using proven frameworks and tools.", ["Agile & Scrum", "Risk", "Budgeting", "Stakeholders"], ["Project Coordinator", "Scrum Master", "Project Manager"]),
    c("Business Management", "business", "Beginner", "4 months", "Build core management skills in strategy, operations, finance and leadership.", ["Strategy", "Operations", "Finance Basics", "Leadership"], ["Operations Executive", "Management Trainee", "Team Lead"]),
    c("Financial Technology (FinTech)", "business", "Intermediate", "4 months", "Explore digital payments, lending, insurtech and the technology reshaping finance.", ["Digital Payments", "RegTech", "APIs", "Risk"], ["FinTech Analyst", "Product Associate", "Compliance Analyst"]),
    c("Human Resource Management", "business", "Beginner", "3 months", "Learn hiring, onboarding, performance and employee engagement practices.", ["Recruitment", "HR Analytics", "Labour Law", "L&D"], ["HR Executive", "Talent Acquisition", "HR Business Partner"]),
    c("Supply Chain Management", "business", "Intermediate", "4 months", "Optimise sourcing, inventory, logistics and distribution end to end.", ["Procurement", "Logistics", "Inventory", "ERP"], ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Executive"]),
    c("E-Commerce Management", "business", "Beginner", "3 months", "Launch and grow an online store, from catalogue to fulfilment and customer retention.", ["Marketplaces", "Storefronts", "Conversion", "Fulfilment"], ["E-Commerce Manager", "Marketplace Executive", "Store Owner"]),
    c("Entrepreneurship and Startups", "business", "Beginner", "3 months", "Validate ideas, build a business model and prepare to launch and fund a startup.", ["Idea Validation", "Business Model", "Pitching", "Funding"], ["Founder", "Startup Operator", "Innovation Associate"]),
];

export const courseOptions = courses.map((x) => x.title);

export const heroImage = u("1522202176988-66273c2fd55f", 2400);

export const highlights = [
    { label: "Courses", value: "30 industry-ready programmes", icon: Laptop },
    { label: "Duration", value: "6 weeks to 6 months", icon: Clock3 },
    { label: "Delivery", value: "Online, live and self-paced", icon: Globe2 },
    { label: "Mentors", value: "Guidance from industry experts", icon: Users },
    { label: "Certificate", value: "Certificate on completion", icon: Award },
];

export const stats = [
    { value: "30", label: "Courses" },
    { value: "5", label: "Career tracks" },
    { value: "100%", label: "Project-based" },
    { value: "24/7", label: "Learning access" },
];

export const whyUs = [
    { title: "Project-based learning", text: "Build a real portfolio, not just notes. Every course ends with a working project.", icon: Code2 },
    { title: "Industry mentors", text: "Learn from practitioners who have shipped products and led teams.", icon: Users },
    { title: "Flexible schedule", text: "Study around work or college with live and recorded sessions.", icon: Clock3 },
    { title: "Career support", text: "Resume reviews, mock interviews and guidance on next steps.", icon: Briefcase },
];

export const faqs = [
    { question: "Do I need prior experience?", answer: "No. Each course is labelled Beginner, Intermediate or Advanced so you can pick the right starting point." },
    { question: "How are the courses delivered?", answer: "Courses are delivered online through live sessions, recordings and guided projects." },
    { question: "Will I receive a certificate?", answer: "Yes. You receive a certificate after completing the course requirements and final project." },
    { question: "Can I take more than one course?", answer: "Yes. Many learners combine courses, for example Python with Data Science, or Web Development with UI/UX Design." },
];