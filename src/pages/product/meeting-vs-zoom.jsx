import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import ProductLayout from "@/components/layout/ProductLayout";
import { VideoCameraIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function MeetingVsZoom() {
  const comparisonData = [
    {
      feature: "AI Transcriptions",
      venmail: "Built-in automatic transcriptions for every meeting",
      zoom: "Requires paid add-on, limited features",
      venmailHas: true,
      zoomHas: false,
    },
    {
      feature: "AI Meeting Summaries",
      venmail: "Smart AI-powered summaries with action items",
      zoom: "AI companion available at extra cost",
      venmailHas: true,
      zoomHas: false,
    },
    {
      feature: "Meeting Duration",
      venmail: "2 hours - perfect for productive sessions",
      zoom: "40 minutes on free tier, unlimited on paid",
      venmailHas: true,
      zoomHas: true,
    },
    {
      feature: "Participant Limit",
      venmail: "Up to 25 participants",
      zoom: "100 participants on free tier, 1000 on paid",
      venmailHas: true,
      zoomHas: true,
    },
    {
      feature: "Waiting Room Management",
      venmail: "Smart waiting room with guest verification",
      zoom: "Basic waiting room, limited customization",
      venmailHas: true,
      zoomHas: false,
    },
    {
      feature: "Calendar Integration",
      venmail: "Seamless calendar sync and scheduling built-in",
      zoom: "Requires third-party integrations",
      venmailHas: true,
      zoomHas: false,
    },
    {
      feature: "Recording Storage",
      venmail: "Unlimited cloud storage included",
      zoom: "Limited storage, requires paid plan",
      venmailHas: true,
      zoomHas: false,
    },
    {
      feature: "Custom Branding",
      venmail: "Custom branded meeting rooms and pages",
      zoom: "Limited branding options on paid plans",
      venmailHas: true,
      zoomHas: false,
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<VideoCameraIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"VenMail Meetings vs Zoom"}
        description={
          "Discover why teams prefer VenMail for integrated AI features and professional meeting experiences."
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
                  <th className="text-center p-4 font-semibold text-gray-600">Zoom</th>
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
                        {item.zoomHas ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircleIcon className="h-5 w-5 text-red-600" />
                        )}
                        <span className="text-sm text-gray-700">{item.zoom}</span>
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
              The VenMail Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key benefits that make VenMail the superior choice for modern teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">AI Features Included</h3>
              </div>
              <p className="text-gray-600 mb-4">
                No expensive add-ons required. AI transcriptions and summaries are 
                built into every plan, helping you stay productive without extra costs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Automatic transcription included
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  AI summaries at no extra cost
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Action item extraction
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">All-in-One Platform</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Everything you need for meetings in one place. No need to juggle 
                multiple apps or pay for additional services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Built-in scheduling system
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Calendar integration included
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Unlimited recording storage
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-black">Professional Experience</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Impress clients with custom-branded meeting rooms and smart waiting 
                rooms that showcase your professionalism.
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
                <h3 className="text-xl font-bold text-black">Cost Effective</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get more features for less money. No hidden fees, no expensive add-ons, 
                and no surprise charges on your bill.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  All features included in base price
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  No per-user AI fees
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Transparent pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perfect for Freelancers & Businesses
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a solo freelancer or growing business, VenMail provides 
              the professional meeting experience you need without the complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">25</div>
                <p className="text-sm">Participants per meeting</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">2hrs</div>
                <p className="text-sm">Optimal meeting duration</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">∞</div>
                <p className="text-sm">Recording storage</p>
              </div>
            </div>
            <a
              href="https://m.venmail.io/register"
              target="_blank"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Make the switch to better meetings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the difference with AI-powered meetings designed for modern teams
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
