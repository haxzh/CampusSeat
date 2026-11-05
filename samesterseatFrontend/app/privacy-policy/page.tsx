
import type { Metadata } from "next";
import Link from "next/link";

// const unsplash = (id) =>
//     `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;


export const metadata: Metadata = {
  title: "Privacy Policy | CampusSeat",
  description:
    "Learn how CampusSeat collects, uses, protects and handles your personal data and information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};


const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      'CampusSeat ("we," "us," or "our") may collect personal information when you visit our website, submit an enrollment form, contact us, request counselling, or subscribe to our newsletter.',
    ],
    bullets: [
      {
        label: "Contact Details:",
        text: "Your name, email address, phone number, and country when you submit an enrollment form, Get In Touch contact form, or newsletter sign-up.",
      },
      {
        label: "Program Interest Data:",
        text: "Information about the courses or programs you enquire about, including Doctorate (DBA), Master's (MBA and MCS), Bachelor's (BBA and BSCS), Artificial Intelligence certifications, and other skill-based education programs.",
      },
      {
        label: "Communications:",
        text: "Messages, questions, enquiries, and other information you send us through our contact forms or email.",
      },
      {
        label: "Technical Information:",
        text: "IP address, browser type, device type, operating system, and pages visited. This information may be collected automatically through cookies and analytics tools.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use the information collected to provide our educational services, respond to your enquiries, and improve your experience with CampusSeat.",
    ],
    bullets: [
      {
        label: "Enquiry Support:",
        text: "To respond to your questions and provide information about the educational programs in which you have expressed interest.",
      },
      {
        label: "Applications and Enrollment:",
        text: "To process applications and enrollment requests with our university and industry partners.",
      },
      {
        label: "Marketing Communications:",
        text: "To send newsletters, updates, and promotional communications where you have opted in. You may unsubscribe at any time using the link provided in our emails.",
      },
      {
        label: "Website Improvement:",
        text: "To improve our website's content, functionality, performance, and user experience.",
      },
      {
        label: "Legal Requirements:",
        text: "To meet applicable legal, regulatory, compliance, and accreditation-reporting obligations.",
      },
    ],
  },
  {
    title: "Sharing Your Information",
    paragraphs: [
      "We share personal information only when necessary to provide our services, process applications, support enrollment, or fulfil legal obligations.",
      "Depending on the program or service you enquire about, your information may be shared with the following parties:",
    ],
    bullets: [
      {
        label: "University Partners:",
        text: "Accredited university partners, including EIMT, LSMT, STRIDE, RUSHFORD, and DUNSTER, for processing applications and enrollment requests initiated by you.",
      },
      {
        label: "Industry Partners:",
        text: "BrainCruise, Real-State, and One Stock Academy, where you have applied for or expressed interest in a related program, certification, or placement opportunity.",
      },
      {
        label: "Service Providers:",
        text: "Website hosting providers, email delivery services, analytics providers, and other service providers that support our operations. These providers are expected to handle information confidentially and use it only to provide their services.",
      },
      {
        label: "Legal Authorities:",
        text: "We may disclose information when required by law or when necessary to protect the rights, safety, or property of CampusSeat or others.",
      },
    ],
    note: "We do not sell personal information to third parties.",
  },
  {
    title: "Cookies and Tracking Technologies",
    paragraphs: [
      "Our website may use cookies and similar technologies to remember your preferences, understand how visitors interact with our website, and support website performance and marketing analytics.",
      "Cookies help us improve website functionality and provide a better browsing experience.",
      "You can control or disable cookies through your browser settings. Please note that disabling cookies may affect certain website features and functionality.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by applicable laws and regulations.",
      "When personal information is no longer required, it will be deleted or anonymized where appropriate, subject to any legal retention obligations.",
    ],
  },
  {
    title: "International Data Transfers",
    paragraphs: [
      "CampusSeat may operate across different countries, including the UAE and India, and may work with university partners, industry partners, and service providers located in other countries.",
      "As a result, your personal information may be transferred to and processed in countries other than your country of residence.",
      "Where international transfers occur, we take reasonable steps to ensure that your personal information remains protected to a standard consistent with this Privacy Policy and applicable data protection requirements.",
    ],
  },
  {
    title: "Your Privacy Rights",
    paragraphs: [
      "Depending on your location and applicable data protection laws, you may have certain rights regarding your personal information.",
    ],
    bullets: [
      {
        label: "Right to Access:",
        text: "You may request access to the personal information we hold about you.",
      },
      {
        label: "Right to Correction:",
        text: "You may request that inaccurate or incomplete personal information be corrected.",
      },
      {
        label: "Right to Deletion:",
        text: "You may request deletion of your personal information where applicable.",
      },
      {
        label: "Right to Restrict Processing:",
        text: "You may request restrictions on how your personal information is used, where applicable.",
      },
      {
        label: "Marketing Preferences:",
        text: "You may withdraw your consent to marketing communications at any time by using the unsubscribe link in our emails.",
      },
    ],
    note: "To exercise these rights or ask questions about your information, please contact us through our Contact page.",
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our website and educational programs are primarily intended for adults seeking higher education, professional development, and certification opportunities.",
      "We do not knowingly collect personal information from individuals under the age of 18.",
      "If we become aware that personal information has been collected from an individual under 18 without appropriate authorization, we will take reasonable steps to address and remove such information where required by applicable law.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update or revise this Privacy Policy from time to time to reflect changes in our services, website practices, business operations, or applicable legal and regulatory requirements.",
      'The "Last Updated" date displayed at the top of this page indicates when the policy was most recently revised.',
      "We encourage visitors to review this page periodically to stay informed about how we collect, use, and protect personal information.",
      "Continued use of the website after changes are published constitutes acceptance of the revised policy, to the extent permitted by applicable law.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f4f3ee] px-5 pb-20 pt-32 text-[#171717] sm:px-8">
      <article className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="border-b border-[#deded8] pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#77776f]">
            CampusSeat
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-[#77776f]">
            Last updated: November 5, 2026
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-[#55554f]">
            This Privacy Policy explains what personal information CampusSeat
            collects, how we use and protect your information, when we may
            share it, and the choices and rights available to you when using
            our website and educational services.
          </p>
        </header>

        {/* Introduction */}
        <section className="border-b border-[#deded8] py-7">
          <p className="leading-7 text-[#55554f]">
            CampusSeat ("we," "us," or "our") operates this website and
            provides information and guidance relating to educational
            opportunities. This Privacy Policy describes our practices
            regarding the collection, use, storage, and disclosure of
            personal information.
          </p>
        </section>

        {/* Policy Sections */}
        <div className="divide-y divide-[#deded8]">
          {sections.map((section, index) => (
            <section key={section.title} className="py-7">

              <h2 className="text-xl font-semibold tracking-tight">
                {index + 1}. {section.title}
              </h2>

              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-3 leading-7 text-[#55554f]"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-4 space-y-3 pl-5 text-[#55554f]">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet.label}
                      className="list-disc leading-7"
                    >
                      <strong className="text-[#171717]">
                        {bullet.label}
                      </strong>{" "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="mt-4 leading-7 text-[#171717]">
                  <strong>{section.note}</strong>
                </p>
              )}

            </section>
          ))}
        </div>

        {/* Contact Section */}
        <footer className="mt-2 rounded-2xl bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold">
            10. Contact Us
          </h2>

          <p className="mt-3 leading-7 text-[#55554f]">
            If you have any questions about this Privacy Policy, your
            personal information, or wish to exercise your privacy rights,
            you can reach out to our team through our Contact page.
          </p>

          <p className="mt-3 leading-7 text-[#55554f]">
            We will make reasonable efforts to respond to your privacy-related
            requests and enquiries.
          </p>

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center font-semibold underline underline-offset-4 hover:text-black"
          >
            Contact Us →
          </Link>
        </footer>

      </article>
    </main>
  );
}
