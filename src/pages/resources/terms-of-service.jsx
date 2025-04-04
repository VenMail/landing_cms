import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

const data = {
  termsVersion: "1.0",
  lastUpdated: "2025-02-26",
  sections: [
    {
      id: "",
      title: "Last Updated: February 26, 2025",
      content: [
        {
          type: "paragraph",
          text: "These Terms of Service (\"Terms\") govern your use of Venmail LLC (\"Venmail,\" \"we,\" \"our,\" or \"us\") and all associated services, including email, calendar, meetings, and contact management. By accessing or using Venmail, you agree to comply with these Terms.",
        },
      ],
    },
    {
      id: "1.",
      title: "Eligibility",
      content: [
        {
          type: "paragraph",
          text: "You must be at least 18 years old to use Venmail. By using our services, you confirm that you have the legal capacity to enter into this agreement.",
        },
      ],
    },
    {
      id: "2.",
      title: "Account Registration",
      content: [
        {
          type: "paragraph",
          text: "To access certain features, you must create an account. You agree to:",
        },
        {
          type: "list",
          items: [
            "Provide accurate and up-to-date information",
            "Maintain the confidentiality of your login credentials",
            "Notify us immediately of unauthorized access to your account",
          ],
        },
      ],
    },
    {
      id: "3.",
      title: "Use of Services",
      content: [
        {
          type: "paragraph",
          text: "You agree to use Venmail in compliance with all applicable laws and regulations. Prohibited activities include:",
        },
        {
          type: "list",
          items: [
            "Sending spam, phishing, or malware",
            "Violating intellectual property rights",
            "Engaging in fraudulent or harmful activities",
          ],
        },
      ],
    },
    {
      id: "4.",
      title: "Subscription & Payment",
      content: [
        {
          type: "paragraph",
          text: "Venmail operates on a paid subscription model. By subscribing, you agree to:",
        },
        {
          type: "list",
          items: [
            "Pay all applicable fees on time",
            "Allow automatic renewal unless canceled before the billing period ends",
            "Understand that payments are non-refundable except as required by law",
          ],
        },
      ],
    },
    {
      id: "5.",
      title: "Privacy & Data Protection",
      content: [
        {
          type: "paragraph",
          text: "Your use of Venmail is subject to our Privacy Policy, which explains how we collect, use, and protect your data. By using our services, you consent to our data practices.",
        },
      ],
    },
    {
      id: "6.",
      title: "Service Availability & Modifications",
      content: [
        {
          type: "paragraph",
          text: "We strive to provide uninterrupted service but do not guarantee 100% uptime. We reserve the right to:",
        },
        {
          type: "list",
          items: [
            "Modify or discontinue features at any time",
            "Conduct maintenance that may temporarily affect service availability",
          ],
        },
      ],
    },
    {
      id: "7.",
      title: "Termination & Suspension",
      content: [
        {
          type: "paragraph",
          text: "We may suspend or terminate your account if you:",
        },
        {
          type: "list",
          items: [
            "Violate these Terms",
            "Engage in unlawful activity",
            "Fail to pay subscription fees",
          ],
        },
        {
          type: "paragraph",
          text: "Users may terminate their accounts at any time through their settings or by contacting hello@venmail.io.",
        },
      ],
    },
    {
      id: "8.",
      title: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: "All content and technology related to Venmail, including trademarks and software, are owned by Venmail LLC. Users may not reproduce, distribute, or modify our content without permission.",
        },
      ],
    },
    {
      id: "9.",
      title: "Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: "To the maximum extent permitted by law, Venmail is not liable for indirect, incidental, or consequential damages resulting from your use of our services.",
        },
      ],
    },
    {
      id: "10.",
      title: "Indemnification",
      content: [
        {
          type: "paragraph",
          text: "You agree to indemnify and hold Venmail harmless from any claims, losses, or damages arising from your violation of these Terms.",
        },
      ],
    },
    {
      id: "11.",
      title: "Governing Law",
      content: [
        {
          type: "paragraph",
          text: "These Terms are governed by the laws of the United States. Disputes shall be resolved through arbitration or litigation in the applicable jurisdiction.",
        },
      ],
    },
    {
      id: "12.",
      title: "Changes to These Terms",
      content: [
        {
          type: "paragraph",
          text: "We may update these Terms from time to time. Users will be notified of significant changes through email or in-app notifications.",
        },
      ],
    },
    {
      id: "13.",
      title: "Contact Information",
      content: [
        {
          type: "paragraph",
          text: "If you have any questions regarding these Terms, please contact us at:",
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
          text: "By using Venmail, you acknowledge and agree to these Terms of Service.",
        },
      ],
    },
  ],
};

function TermsOfService() {
  return (
    <DefaultLayout>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
          <h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
            Venmail Terms of Service
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

export default TermsOfService;
