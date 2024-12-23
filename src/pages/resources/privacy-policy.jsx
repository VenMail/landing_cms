import React from "react";

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
          text: "Welcome to Venmail! Your privacy is important to us, and we are committed to safeguarding your personal information while delivering secure, AI-powered email services. This Privacy Policy outlines how we collect, use, and protect your data when you use Venmail.",
        },
      ],
    },
    {
      id: "1.",
      title: "Information We Collect",
      content: [
        {
          type: "list",
          items: [
            "Personal Information: When you sign up for Venmail, we may collect your name, email address, and payment details.",
            "Usage Data: We gather data on how you use our services to improve functionality, including your interactions with our AI features.",
            "Device Information: Information about the device you use to access Venmail, such as IP address, browser type, and operating system.",
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
            "To provide and maintain our secure email services.",
            "To enhance user experience through AI-driven features.",
            "To communicate with you regarding updates, security notices, and promotions.",
            "To analyze usage patterns and improve Venmail’s performance and security.",
          ],
        },
      ],
    },
    {
      id: "3.",
      title: "Data Protection",
      content: [
        {
          type: "paragraph",
          text: "We prioritize the security of your data using industry-standard encryption and access controls. Our systems are regularly monitored and updated to protect against unauthorized access or breaches.",
        },
      ],
    },
    {
      id: "4.",
      title: "Sharing Your Information",
      content: [
        {
          type: "paragraph",
          text: "We do not sell your data. Your information may be shared with trusted third-party service providers solely to enable core functionality, such as payment processing, under strict confidentiality agreements.",
        },
      ],
    },
    {
      id: "5.",
      title: "Your Rights",
      content: [
        {
          type: "list",
          items: [
            "Access and Control: You have the right to access, update, or delete your personal information.",
            "Opt-Out: You can opt out of marketing communications at any time.",
            "Data Portability: Request a copy of your data in a portable format.",
          ],
        },
      ],
    },
    {
      id: "6.",
      title: "Cookies and Tracking",
      content: [
        {
          type: "paragraph",
          text: "We use cookies to enhance your browsing experience and to analyze traffic on our site. You can manage your cookie preferences through your browser settings.",
        },
      ],
    },
    {
      id: "7.",
      title: "Third-party Links",
      content: [
        {
          type: "paragraph",
          text: "Venmail may include links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies.",
        },
      ],
    },
    {
      id: "8.",
      title: "Policy Updates",
      content: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy periodically. Changes will be communicated via email or on our website. Please review this policy regularly.",
        },
      ],
    },
    {
      id: "9.",
      title: "Contact Us",
      content: [
        {
          type: "paragraph",
          text: "For questions or concerns about this Privacy Policy, contact us at",
        },
        {
          type: "paragraph",
          text: "Thank you for trusting Venmail. Your privacy is our priority as we deliver secure and efficient email services to drive your business growth.",
        },
      ],
    },
  ],
};

function PrivacyPolicy() {
  return (
    <section className="bg-white ">
      <div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
        <h1 className="mb-4 py-14 md:py-20 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
          Privacy Policy
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
  );
}

export default PrivacyPolicy;
