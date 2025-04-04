import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

const data = {
  policyVersion: "1.0",
  lastUpdated: "2025-02-26",
  sections: [
    {
      id: "",
      title: "Last Updated: February 26, 2025",
      content: [
        {
          type: "paragraph",
          text: "Venmail LLC (\"Venmail,\" \"we,\" \"our,\" or \"us\") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share, and protect your information when you use our AI-powered email, calendar, meeting, and contact management services (the \"Services\"). By using Venmail, you agree to the terms outlined in this Privacy Policy.",
        },
      ],
    },
    {
      id: "1.",
      title: "Information We Collect",
      content: [
        {
          type: "paragraph",
          text: "We collect the following types of information:",
        },
        {
          type: "subsection",
          title: "2.1 Personal Data",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "IP address",
            "Device details",
          ],
        },
        {
          type: "subsection",
          title: "2.2 Sensitive Data",
          items: [
            "Calendar events",
            "Meeting recordings",
            "Contact lists",
          ],
        },
        {
          type: "subsection",
          title: "2.3 Automatically Collected Data",
          items: [
            "Usage data (e.g., interactions with our services, login history)",
            "Device and browser type",
            "Cookies and tracking technologies (see Cookie Policy)",
          ],
        },
      ],
    },
    {
      id: "2.",
      title: "How We Use Your Information",
      content: [
        {
          type: "list",
          items: [
            "To provide, maintain, and improve our Services",
            "To personalize user experience and AI-driven features",
            "To ensure security and fraud prevention",
            "To comply with legal obligations",
            "To communicate with you about service updates and support",
          ],
        },
      ],
    },
    {
      id: "3.",
      title: "Data Sharing & Third-Party Access",
      content: [
        {
          type: "paragraph",
          text: "We do not sell your personal data. However, we may share information with:",
        },
        {
          type: "list",
          items: [
            "Service providers (e.g., cloud storage, analytics tools) to enhance service performance",
            "Legal authorities if required by law",
            "Third-party integrations you enable (e.g., Google Calendar, Zoom)",
          ],
        },
      ],
    },
    {
      id: "4.",
      title: "Security & Encryption",
      content: [
        {
          type: "paragraph",
          text: "We implement industry-standard measures to protect your data, including:",
        },
        {
          type: "list",
          items: [
            "End-to-End Encryption: Emails, calendars, and meetings are encrypted.",
            "Data Protection: AES-256 encryption, SOC-2 compliance.",
            "Secure Storage: Data is stored on AWS/GCP/Azure cloud services.",
          ],
        },
      ],
    },
    {
      id: "5.",
      title: "Your Rights & Choices",
      content: [
        {
          type: "paragraph",
          text: "Under applicable laws such as GDPR and CCPA, you have the right to:",
        },
        {
          type: "list",
          items: [
            "Access your data",
            "Request data deletion",
            "Export your data",
            "Opt-out of AI processing",
            "Manage cookie preferences (see Cookie Policy)",
          ],
        },
        {
          type: "paragraph",
          text: "You can exercise these rights by contacting hello@venmail.io.",
        },
      ],
    },
    {
      id: "6.",
      title: "Data Retention",
      content: [
        {
          type: "paragraph",
          text: "We retain your data for as long as your account remains active. Upon request, personal data will be permanently deleted within 30 days unless required by law.",
        },
      ],
    },
    {
      id: "7.",
      title: "Changes to This Policy",
      content: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy periodically. We will notify you of any material changes through email or in-app notifications.",
        },
      ],
    },
    {
      id: "8.",
      title: "Contact Us",
      content: [
        {
          type: "paragraph",
          text: "If you have any questions regarding this Privacy Policy, please contact us at:",
        },
        {
          type: "paragraph",
          text: "Venmail LLC",
        },
        {
          type: "paragraph",
          text: "Email: hello@venmail.io",
        },
        {
          type: "paragraph",
          text: "By using Venmail, you acknowledge and agree to this Privacy Policy.",
        },
      ],
    },
  ],
};

function PrivacyPolicy() {
  return (
    <DefaultLayout>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
          <h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
            Venmail Privacy Policy
          </h1>
          {data.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-black text-xl md:text-3xl font-medium mb-5">
                {section.id} {section.title}
              </h2>
              {section.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={index} className="text-black mb-4">
                      {item.text}
                    </p>
                  );
                } else if (item.type === "list") {
                  return (
                    <div className="pl-5 mb-4">
                      <ul className="list-disc">
                        {item.items.map((listItem, listIndex) => (
                          <li className="text-black mb-2" key={listIndex}>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                } else if (item.type === "subsection") {
                  return (
                    <div key={index} className="mb-4">
                      <h3 className="text-black text-lg md:text-xl font-medium mb-3">
                        {item.title}
                      </h3>
                      <ul className="list-disc pl-5">
                        {item.items.map((listItem, listIndex) => (
                          <li className="text-black mb-2" key={listIndex}>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

export default PrivacyPolicy;
