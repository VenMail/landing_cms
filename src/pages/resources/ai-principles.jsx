import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

const data = {
	principlesVersion: "1.0",
	lastUpdated: "2025-02-26",
	sections: [
		{
			id: "",
			title: "Last Updated: February 26, 2025",
			content: [
				{
					type: "paragraph",
					text: "Venmail LLC (\"Venmail,\" \"we,\" \"our,\" or \"us\") integrates artificial intelligence (AI) into our email, calendar, meetings, and contact management services to enhance user experience and efficiency. These AI Principles outline our commitment to ethical AI usage, transparency, privacy, and user control.",
				},
			],
		},
		{
			id: "1.",
			title: "Transparency",
			content: [
				{
					type: "list",
					items: [
						"We clearly disclose when AI is used within our services, including email categorization, calendar scheduling, and meeting summaries.",
						"Users are informed when AI-generated content is presented and can opt-out of AI-driven suggestions where applicable.",
						"We provide accessible documentation on how AI-powered features work.",
					],
				},
			],
		},
		{
			id: "2.",
			title: "Privacy & Security",
			content: [
				{
					type: "list",
					items: [
						"AI processing is designed to respect user privacy by minimizing data retention and ensuring data protection.",
						"Personal data used for AI-driven features is encrypted and processed securely, aligning with our Privacy Policy.",
						"AI does not store or misuse personally identifiable information beyond what is necessary for functionality.",
					],
				},
			],
		},
		{
			id: "3.",
			title: "Bias & Fairness",
			content: [
				{
					type: "list",
					items: [
						"We actively audit AI models to prevent biases in recommendations, meeting scheduling, and auto-replies.",
						"AI-driven decisions are regularly reviewed to ensure fairness across all users, regardless of demographics or usage patterns.",
						"We prioritize responsible AI development by continuously refining our models to eliminate potential discrimination.",
					],
				},
			],
		},
		{
			id: "4.",
			title: "Accountability",
			content: [
				{
					type: "list",
					items: [
						"Users can report AI errors or unintended behavior through our feedback mechanism.",
						"We maintain a human-in-the-loop approach for critical AI-driven actions to ensure human oversight.",
						"If AI-generated decisions lead to incorrect results, we provide a clear process for users to correct them.",
					],
				},
			],
		},
		{
			id: "5.",
			title: "Human Control & Opt-Out Options",
			content: [
				{
					type: "list",
					items: [
						"Users retain control over AI-assisted features and can opt-out of automated decision-making where applicable.",
						"AI-driven suggestions require user confirmation before execution, ensuring informed decision-making.",
						"We provide customizable AI settings so users can tailor their experience based on their preferences.",
					],
				},
			],
		},
		{
			id: "6.",
			title: "Continuous Improvement",
			content: [
				{
					type: "list",
					items: [
						"We continuously update our AI models based on user feedback and evolving ethical AI standards.",
						"AI-driven processes are regularly tested to enhance accuracy, relevance, and user trust.",
						"We collaborate with AI ethics experts and industry leaders to align with global best practices.",
					],
				},
			],
		},
		{
			id: "7.",
			title: "Contact Us",
			content: [
				{
					type: "paragraph",
					text: "If you have any questions or concerns regarding our AI Principles, please contact us at:",
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
					text: "By using Venmail's AI-powered features, you acknowledge and agree to these AI Principles.",
				},
			],
		},
	],
};

function AIPrinciples() {
	return (
		<DefaultLayout>
			<section className="bg-white">
				<div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
					<h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
						AI Principles
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
								return null;
							})}
						</div>
					))}
				</div>
			</section>
		</DefaultLayout>
	);
}

export default AIPrinciples;
