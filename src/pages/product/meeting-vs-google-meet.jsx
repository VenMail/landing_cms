import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import ProductLayout from "@/components/layout/ProductLayout";
import { VideoCameraIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function MeetingVsGoogleMeet() {
  const comparisonData = [
    {
      feature: "AI Transcriptions",
      venmail: "Built-in automatic transcriptions for every meeting",
      googleMeet: "Limited transcription features, requires add-ons",
      venmailHas: true,
      googleMeetHas: false,
    },
    {
      feature: "AI Meeting Summaries",
      venmail: "Smart AI-powered summaries with action items",
      googleMeet: "No built-in AI summaries",
      venmailHas: true,
      googleMeetHas: false,
    },
    {
      feature: "Meeting Duration",
      venmail: "2 hours - perfect for productive sessions",
      googleMeet: "60 minutes on free tier, unlimited on paid",
      venmailHas: true,
      googleMeetHas: true,
    },
    {
      feature: "Participant Limit",
      venmail: "Up to 25 participants",
      googleMeet: "100 participants on free tier, 500 on paid",
      venmailHas: true,
      googleMeetHas: true,
    },
    {
      feature: "Waiting Room Management",
      venmail: "Smart waiting room with guest verification",
      googleMeet: "Basic lobby feature, limited customization",
      venmailHas: true,
      googleMeetHas: false,
    },
    {
      feature: "Calendar Integration",
      venmail: "Seamless calendar sync and scheduling",
      googleMeet: "Requires Google Calendar setup",
      venmailHas: true,
      googleMeetHas: true,
    },
    {
      feature: "Recording Storage",
      venmail: "Unlimited cloud storage included",
      googleMeet: "Limited storage, requires Google Drive",
      venmailHas: true,
      googleMeetHas: false,
    },
    {
      feature: "Custom Branding",
      venmail: "Custom branded meeting rooms and pages",
      googleMeet: "No customization options",
      venmailHas: true,
      googleMeetHas: false,
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<VideoCameraIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"VenMail Meetings vs Google Meet"}
        description={
          "See why teams choose VenMail for smarter, more productive meetings with AI-powered features."
        }
        image={"/product/meetings.png"}
        button1Text={"Start Free Trial"}
        button2Text={"View Pricing"}
      />

      <section className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Side-by-side comparison of key meeting features
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-black">Feature</th>
                  <th className="text-center p-4 font-semibold text-primary-600">VenMail Meetings</th>
                  <th className="text-center p-4 font-semibold text-gray-600">Google Meet</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-black">{item.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.venmailHas ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircleIcon className="h-5 w-5 text-red-600" />
                        )}
                        <span className="text-sm text-gray-700">{item.venmail}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.googleMeetHas ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircleIcon className="h-5 w-5 text-red-600" />
                        )}
                        <span className="text-sm text-gray-700">{item.googleMeet}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Teams Choose VenMail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key advantages that make VenMail the smarter choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">AI-Powered Productivity</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Built-in transcriptions and AI summaries mean no more manual note-taking. 
                Every meeting is captured, searchable, and actionable.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Automatic transcription for every meeting
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  AI extracts action items and decisions
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Searchable meeting history
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">Professional Experience</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Smart waiting rooms and custom branding create a professional impression 
                for clients and partners.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Custom branded meeting rooms
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Smart guest verification
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Professional lobby experience
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">All-in-One Solution</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Meetings, scheduling, and follow-up are seamlessly integrated. 
                No need for multiple tools or subscriptions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Built-in scheduling system
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Unlimited recording storage
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Calendar integration included
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">Better for Business</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Designed specifically for freelancers, contractors, and businesses 
                who need reliable, professional meetings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  2-hour optimal meeting length
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Up to 25 participants
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Enterprise-grade security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Ready to upgrade your meetings?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who've switched to VenMail for smarter meetings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="/product/meeting"
              className="px-8 py-3 border border-black text-black rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back to Meetings
            </a>
          </div>
        </div>
      </section>
    </ProductLayout>
  );
}
