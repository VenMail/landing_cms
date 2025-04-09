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
					text: "Venmail LLC (\"Venmail,\" \"we,\" \"our,\" or \"us\") uses cookies and similar tracking technologies to enhance your experience when using our services, including email, calendar, meetings, and contact management. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.",
				},
			],
		},
		{
			id: "1.",
			title: "What Are Cookies?",
			content: [
				{
					type: "paragraph",
					text: "Cookies are small text files stored on your device when you visit a website. They help us recognize your preferences, improve functionality, and analyze service usage.",
				},
			],
		},
		{
			id: "2.",
			title: "Types of Cookies We Use",
			content: [
				{
					type: "paragraph",
					text: "We use the following types of cookies:",
				},
				{
					type: "subsection",
					title: "3.1 Essential Cookies",
					items: [
						"Necessary for authentication, login, and core service functionality.",
						"Without these cookies, certain features may not function properly.",
					],
				},
				{
					type: "subsection",
					title: "3.2 Analytics Cookies",
					items: [
						"Used to track service performance and user behavior.",
						"Examples: Google Analytics, Hotjar.",
					],
				},
				{
					type: "subsection",
					title: "3.3 Marketing Cookies",
					items: [
						"Help us track engagement for promotional activities.",
						"Examples: Facebook Pixel, LinkedIn tracking.",
					],
				},
				{
					type: "subsection",
					title: "3.4 Functional Cookies",
					items: [
						"Store user preferences such as language and theme settings.",
					],
				},
			],
		},
		{
			id: "3.",
			title: "How We Use Cookies",
			content: [
				{
					type: "list",
					items: [
						"Authenticate users and maintain secure sessions.",
						"Analyze and improve service performance.",
						"Personalize your user experience.",
						"Measure the effectiveness of marketing campaigns.",
					],
				},
			],
		},
		{
			id: "4.",
			title: "Managing Cookies & Your Choices",
			content: [
				{
					type: "list",
					items: [
						"Adjust browser settings to block or delete cookies.",
						"Use our cookie preference manager to opt in or out of non-essential cookies.",
						"For California users, exercise your rights under CCPA via the \"Do Not Sell My Personal Information\" link.",
					],
				},
			],
		},
		{
			id: "5.",
			title: "Third-Party Cookies",
			content: [
				{
					type: "paragraph",
					text: "Third-party services, such as analytics and advertising partners, may also place cookies on your device. These third parties have their own privacy policies governing their use of cookies.",
				},
			],
		},
		{
			id: "6.",
			title: "Changes to This Cookie Policy",
			content: [
				{
					type: "paragraph",
					text: "We may update this policy from time to time. Significant changes will be communicated through email or in-app notifications.",
				},
			],
		},
		{
			id: "7.",
			title: "Contact Us",
			content: [
				{
					type: "paragraph",
					text: "If you have any questions about this Cookie Policy, please contact us at:",
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
					text: "By using Venmail, you acknowledge and agree to this Cookie Policy.",
				},
			],
		},
	],
};

function CookiePolicy() {
	return (
		<DefaultLayout>
			<section className="bg-white">
				<div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
					<h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
						Cookie Policy
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

export default CookiePolicy;
