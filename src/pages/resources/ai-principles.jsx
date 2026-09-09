import React from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";

const data = {
  "principlesVersion": "1.1",
  "lastUpdated": "2026-09-09",
  "sections": [
    {
      "id": "",
      "title": "Last Updated: September 9, 2026",
      "content": [
        {
          "type": "paragraph",
          "text": "These principles explain how to evaluate and use Venmail AI features, including their processing boundaries and limitations."
        }
      ]
    },
    {
      "id": "1.",
      "title": "How processing works",
      "content": [
        {
          "type": "list",
          "items": [
            "Venmail performs email analysis on its servers. Message content and extracted attachment text can be sent to Groq, a third-party AI provider, for analysis.",
            "AI features include summaries and extracting information that helps with follow-ups and scheduling. Availability depends on the feature and account.",
            "Managed plans currently use shared storage; regional selections are future preferences, not current data residency choices. Customer-provided storage does not by itself restrict where application or third-party AI processing occurs."
          ]
        }
      ]
    },
    {
      "id": "2.",
      "title": "Review AI output",
      "content": [
        {
          "type": "list",
          "items": [
            "AI output can be inaccurate, incomplete, or biased. Check summaries, dates, recipients, and action items against the original message before relying on them.",
            "Use human review for decisions that affect people, contractual obligations, or sensitive information.",
            "Report incorrect or unexpected results to hello@venmail.io with only the information needed to investigate."
          ]
        }
      ]
    },
    {
      "id": "3.",
      "title": "Privacy and account choices",
      "content": [
        {
          "type": "list",
          "items": [
            "Server-side AI analysis requires readable content. Venmail is not a blanket end-to-end encrypted or zero-access email service.",
            "Review our Privacy Policy and discuss the current subprocessors and account controls with our team before enabling a sensitive workflow.",
            "Do not assume a universal AI opt-out or a storage-region selection disables all content processing. Confirm which controls apply to the exact features you use."
          ]
        }
      ]
    },
    {
      "id": "4.",
      "title": "Questions and feedback",
      "content": [
        {
          "type": "paragraph",
          "text": "Contact hello@venmail.io for current feature behavior, data processing questions, and AI feedback."
        }
      ]
    }
  ]
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
