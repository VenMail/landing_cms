import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
const data = {
  termsVersion: "1.0",
  lastUpdated: "2024-12-23",
  sections: [
    {
      id: "",
      title: "Last Updated: December 13, 2024",
      content: [
        {
          type: "paragraph",
          text: 'These Terms of Service ("Terms") govern your access to and use of the Venmail website and its associated services (the "Service"), provided by Venmail, Inc. ("Venmail," "we," "us," or "our"). By using the Service, you agree to be bound by these Terms, as well as our Privacy Policy. If you do not agree to these Terms, do not use the Service.',
        },
      ],
    },
    {
      id: "1.",
      title: "Service Disruption",

      content: [
        {
          type: "paragraph",
          text: "Venmail offers secure, AI-powered email services designed to help you stay organized and drive business growth. The Service includes access to your Venmail account, email management features, AI-powered tools, and other related functionalities as described on our website.",
        },
      ],
    },
    {
      id: "2.",
      title: "Account Registration and Security",

      content: [
        {
          type: "paragraph",
          text: "To use the Service, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately if you suspect any unauthorized use of your account.",
        },
      ],
    },
    {
      id: "3.",
      title: "Acceptable Use",

      content: [
        {
          type: "paragraph",
          text: "You agree to use the Service only for lawful purposes and in accordance with these Terms.",
        },
        {
          type: "paragraph",
          text: "You may not:",
        },
        {
          type: "list",
          items: [
            "Engage in spamming, phishing, or any form of unauthorized marketing.",
            "Violate any laws, regulations, or third-party rights while using the Service.",
            "Attempt to disrupt, damage, or compromise the security of the Service.",
            "Use the Service to transmit harmful or malicious content, including viruses, malware, or spyware.",
          ],
        },
      ],
    },
    {
      id: "4.",
      title: "Privacy and Data Security",
      content: [
        {
          type: "paragraph",
          text: "Venmail is committed to protecting your privacy and the security of your data. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.",
        },
      ],
    },
    {
      id: "5.",
      title: "AI Features and Data Usage",
      content: [
        {
          type: "paragraph",
          text: "Venmail's AI-powered features are designed to enhance your email experience. By using the Service, you consent to the processing of your email data for AI analysis and optimization. We will not share or sell your data to third parties for marketing purposes.",
        },
      ],
    },
    {
      id: "6.",
      title: "Service Availability and Maintenance",
      content: [
        {
          type: "paragraph",
          text: "Venmail aims to provide reliable, uninterrupted service, but we do not guarantee availability at all times. We may perform scheduled maintenance or upgrades, which could temporarily impact access to the Service. We will strive to provide advance notice of any significant downtime.",
        },
      ],
    },

    {
      id: "7.",
      title: "Fees and Payment",
      content: [
        {
          type: "paragraph",
          text: "Venmail may offer both free and paid tiers of Service. By subscribing to a paid plan, you agree to pay the fees associated with the selected plan. Fees are non-refundable, except as required by law. We reserve the right to change pricing or features at any time, with notice to you.",
        },
      ],
    },
    {
      id: "8.",
      title: "Intellectual Property",
      content: [
        {
          type: "paragraph",
          text: "Venmail retains all intellectual property rights to the Service, including its software, algorithms, and AI features. You are granted a limited, non-transferable, and non-exclusive license to use the Service for its intended purposes. You may not reverse engineer, decompile, or otherwise attempt to extract the underlying code.",
        },
      ],
    },
    {
      id: "9.",
      title: "Termination",
      content: [
        {
          type: "paragraph",
          text: "We may suspend or terminate your account if we believe you have violated these Terms. You may terminate your account at any time by following the instructions on the website. Upon termination, you will lose access to your account and any data stored in the",
        },
      ],
    },
    {
      id: "10.",
      title: "Limitation of Liability",
      content: [
        {
          type: "paragraph",
          text: "To the fullest extent permitted by law, Venmail’s liability for any claims, losses, or damages arising from your use of the Service is limited to the amount you paid for the Service in the last 12 months. We are not liable for any indirect, incidental, or consequential damages.",
        },
      ],
    },
    {
        id: "11.",
        title: "Indemnification",
        content: [
          {
            type: "paragraph",
            text: "You agree to indemnify, defend, and hold harmless Venmail, its affiliates, officers, and employees from any claims, damages, losses, or expenses arising from your use of the Service or your violation of these Terms.",
          },
        ],
      },
      {
        id: "12.",
        title: "Changes to Terms",
        content: [
          {
            type: "paragraph",
            text: "Venmail may update these Terms at any time. We will notify you of any material changes by posting the revised Terms on our website or through other appropriate means. Continued use of the Service after such updates constitutes your acceptance of the revised Terms.",
          },
        ],
      },
      {
        id: "13.",
        title: "Governing Law",
        content: [
          {
            type: "paragraph",
            text: "These Terms will be governed by and construed in accordance with the laws of the state of [Insert State], without regard to its conflict of law principles. Any disputes will be resolved in the competent courts of [Insert City, State].",
          },
        ],
      },
      {
        id: "14.",
        title: "Contact Us",
        content: [
          {
            type: "paragraph",
            text: "If you have any questions or concerns regarding these Terms, please contact us at:",
          },
          {
            type: "paragraph",
            text: "Venmail, Inc.",
          },
          {
            type: "paragraph",
            text: "For questions or concerns about this Privacy Policy, contact us at: Email: --  Address: --",
          },
          {
            type: "paragraph",
            text: "By using the Venmail Service, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
          },
        ],
      },
  ],
};

function PrivacyPolicy() {
  return (
    <DefaultLayout>
      <section className="bg-white ">
        <div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
          <h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
            Terms of Service
          </h1>
          {data.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 className="text-black text-xl md:text-3xl font-medium mb-5">
                {section.id} {section.title}
              </h2>
              {section.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={index} className="text-black">
                      {item.text}
                    </p>
                  );
                } else if (item.type === "list") {
                  return (
                    <div className="pl-5">
                      <ul key={index} className="list-disc">
                        {item.items.map((listItem, listIndex) => (
                          <li className="text-black" key={listIndex}>
                            {listItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null; // Handle other content types if necessary
              })}
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}

export default PrivacyPolicy;
