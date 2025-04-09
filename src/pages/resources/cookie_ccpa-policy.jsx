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
					text: "Venmail LLC (\"Venmail,\" \"we,\" \"our,\" or \"us\") is committed to providing transparency regarding the collection and use of personal data. This document outlines your options for managing cookie preferences and your rights under the California Consumer Privacy Act (CCPA).",
				},
			],
		},
		{
			id: "1.",
			title: "Cookie Preferences",
			content: [
				{
					type: "paragraph",
					text: "Venmail uses cookies to enhance functionality, improve user experience, and analyze service performance. You can manage your cookie preferences as follows:",
				},
				{
					type: "list",
					items: [
						"Essential Cookies: Required for authentication and core service functionality; cannot be disabled.",
						"Analytics Cookies: Used to improve performance; can be disabled in cookie settings.",
						"Marketing Cookies: Help track engagement for promotions; can be disabled.",
						"Functional Cookies: Store user preferences such as language and theme settings; can be disabled.",
					],
				},
				{
					type: "paragraph",
					text: "Users can adjust cookie settings via our Cookie Preference Manager or their browser settings.",
				},
			],
		},
		{
			id: "2.",
			title: "CCPA Preferences & Your Rights",
			content: [
				{
					type: "paragraph",
					text: "If you are a California resident, you have the following rights under CCPA:",
				},
				{
					type: "list",
					items: [
						"Right to Know: You can request details on the personal data we collect and share.",
						"Right to Delete: You may request the deletion of your personal information, subject to legal obligations.",
						"Right to Opt-Out: You can opt out of data sales via our \"Do Not Sell My Personal Information\" link.",
						"Right to Non-Discrimination: Exercising your CCPA rights will not affect your access to our services.",
					],
				},
				{
					type: "paragraph",
					text: "To exercise your CCPA rights, submit a request by emailing hello@venmail.io.",
				},
			],
		},
		{
			id: "3.",
			title: "How to Update Preferences",
			content: [
				{
					type: "paragraph",
					text: "Users can update their cookie and CCPA preferences via:",
				},
				{
					type: "list",
					items: [
						"The Cookie Preference Manager on our website",
						"Browser settings (for blocking or deleting cookies)",
						"Contacting us directly at hello@venmail.io",
					],
				},
			],
		},
		{
			id: "4.",
			title: "Changes to This Policy",
			content: [
				{
					type: "paragraph",
					text: "We may update this document periodically. Changes will be communicated via email or in-app notifications.",
				},
			],
		},
		{
			id: "5.",
			title: "Contact Us",
			content: [
				{
					type: "paragraph",
					text: "For any questions regarding cookie preferences or CCPA rights, please contact:",
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
					text: "By using Venmail, you acknowledge and agree to this Cookie & CCPA Preference Policy.",
				},
			],
		},
	],
};

function CookieCCPAPolicy() {
	return (
		<DefaultLayout>
			<section className="bg-white">
				<div className="max-w-screen-xl px-4 mx-auto md:gap-8 xl:gap-0">
					<h1 className="mb-4 pt-3 pb-6 md:py-18 text-3xl md:text-7xl text-center font-medium tracking-tight md:leading-[96px] text-black">
						Cookie & CCPA Preferences
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

export default CookieCCPAPolicy;
