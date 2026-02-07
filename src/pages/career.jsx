import React, { useState } from 'react'
import Head from "next/head";
import DefaultLayout from "@/components/layout/DefaultLayout";

function career() {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const openPositions = [
    {
      title: "Senior Sales Engineer",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Drive technical sales and help customers understand VenMail's email automation capabilities",
      fullDescription: `As a Senior Sales Engineer at VenMail, you'll be the technical bridge between our sales team and potential customers. You'll demonstrate our email automation platform, answer technical questions, and help prospects understand how VenMail can solve their business challenges.

Key Responsibilities:
• Lead technical demonstrations and product presentations for prospects
• Work with sales team to understand customer requirements and propose solutions
• Answer technical questions about email infrastructure, APIs, and integrations
• Conduct proof-of-concept implementations and trials
• Collaborate with product team to communicate customer feedback
• Create technical documentation and solution architectures

Requirements:
• 3+ years of experience in sales engineering or technical sales
• Strong understanding of email protocols, APIs, and web technologies
• Experience with SaaS products and cloud infrastructure
• Excellent communication and presentation skills
• Ability to translate technical concepts for non-technical audiences
• Bachelor's degree in Engineering, Computer Science, or related field

What We Offer:
• Competitive salary and equity package
• Remote-first work environment
• Comprehensive health benefits
• Professional development budget
• Opportunity to shape the future of email automation`
    },
    {
      title: "Executive Assistant",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Support executive team with calendar management, travel coordination, and operational tasks",
      fullDescription: `As an Executive Assistant at VenMail, you'll be the right-hand person to our executive team, ensuring smooth operations and enabling our leaders to focus on strategic priorities.

Key Responsibilities:
• Manage executive calendars and schedule meetings across multiple time zones
• Coordinate travel arrangements and itineraries
• Prepare meeting materials, agendas, and follow-up summaries
• Handle confidential information with discretion
• Liaise with internal teams and external partners
• Assist with special projects and initiatives
• Manage expense reports and administrative processes

Requirements:
• 3+ years of experience supporting C-level executives
• Exceptional organizational and time management skills
• Proficiency with productivity tools (Google Workspace, Slack, etc.)
• Strong written and verbal communication skills
• Ability to work independently and prioritize competing demands
• High level of discretion and professionalism
• Bachelor's degree preferred

What We Offer:
• Competitive salary and benefits package
• Remote work flexibility
• Direct exposure to executive decision-making
• Professional growth opportunities
• Collaborative and supportive team culture`
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work environment - remote first",
    "Unlimited PTO and flexible hours",
    "Professional development budget",
    "Latest equipment and tools",
    "Team retreats and events",
    "Parental leave and family support"
  ];

  const values = [
    {
      title: "Customer First",
      description: "We exist to solve our customers' email challenges and help them succeed."
    },
    {
      title: "Own It",
      description: "Take responsibility for your work and see projects through from start to finish."
    },
    {
      title: "Stay Curious",
      description: "We're always learning, experimenting, and pushing the boundaries of what's possible."
    },
    {
      title: "Move Fast",
      description: "We prioritize speed and iteration while maintaining quality and reliability."
    }
  ];

  const handleApply = (positionTitle) => {
    const subject = `Application for ${positionTitle}`;
    const body = `Dear VenMail Team,

I would like to apply for the ${positionTitle} position.

Please find my cover letter and CV attached.

Best regards`;
    
    window.location.href = `mailto:hello@venmail.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Careers at VenMail — Join Our Team</title>
        <meta name="description" content="Build the future of email with VenMail. View open positions and join our remote-first team." />
        <meta property="og:title" content="Careers at VenMail" />
        <meta property="og:description" content="Join our team and help build the future of email communication and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/career" />
      </Head>

      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Join the VenMail Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of email communication and automation. 
              Help us create tools that make businesses more productive and connected.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why VenMail?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're a remote-first team building email tools that thousands of businesses rely on every day. 
                  Join us if you want to solve meaningful problems and work with talented, passionate people.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-1">Remote</div>
                    <div className="text-sm text-gray-600">First Team</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600 mb-1">Growing</div>
                    <div className="text-sm text-gray-600">Fast</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Helping businesses save 60-90% on email tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Automating millions of email workflows monthly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">99.9% uptime and deliverability rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Growing 20% month-over-month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex gap-4 mb-4 text-sm text-gray-600">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <button 
                    onClick={() => setSelectedPosition(position)}
                    className="text-primary-600 hover:text-primary-700 font-medium mr-4"
                  >
                    View Details →
                  </button>
                  <button 
                    onClick={() => handleApply(position.title)}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-primary-600">{index + 1}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits & Perks</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't see the perfect role? We're always looking for talented people. 
              Send us your resume and we'll keep you in mind for future openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@venmail.io"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors"
              >
                Send Resume
              </a>
              <a
                href="mailto:hello@venmail.io"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-800 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description Modal */}
      {selectedPosition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {selectedPosition.title}
                  </h2>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>{selectedPosition.department}</span>
                    <span>•</span>
                    <span>{selectedPosition.location}</span>
                    <span>•</span>
                    <span>{selectedPosition.type}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPosition(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="prose prose-gray max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {selectedPosition.fullDescription}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleApply(selectedPosition.title)}
                    className="flex-1 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Apply for this Position
                  </button>
                  <button
                    onClick={() => setSelectedPosition(null)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}

export default career