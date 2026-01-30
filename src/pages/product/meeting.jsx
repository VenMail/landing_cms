import Image from "next/image";
import { useState, useRef } from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import { LuFileMinus } from "react-icons/lu";
import { BsListUl } from "react-icons/bs";
import ProductHero from "@/components/PageSections/ProductHero";
import FeatureCard from "@/components/PageSections/FeatureCard";
import ProductLayout from "@/components/layout/ProductLayout";
import { VideoCameraIcon, ClockIcon, LinkIcon, LockClosedIcon, ShareIcon, CalendarIcon, MicrophoneIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Meeting() {
  const features = [
    {
      icon: (
        <DocumentTextIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "AI Transcriptions Built-in",
      text: "Every meeting automatically transcribed. Searchable, shareable, and always accurate.",
    },
    {
      icon: (
        <MicrophoneIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Meeting Summaries",
      text: "AI-powered summaries capture key decisions, action items, and next steps automatically.",
    },
    {
      icon: (
        <ClockIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "2 Hours Meeting Limit",
      text: "Perfect for productive sessions. No endless meetings. Focus on what matters.",
    },
    {
      icon: (
        <UserGroupIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Up to 25 Participants",
      text: "Bring your whole team. From 1:1s to team standups. Everyone stays connected.",
    },
    {
      icon: (
        <LockClosedIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Smart Waiting Room",
      text: "Seamless guest management. Professional lobby experience. No awkward interruptions.",
    },
    {
      icon: (
        <CalendarIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />
      ),
      title: "Email → Meeting",
      text: "'Let's meet next week' becomes a scheduled meeting. Your calendar checked. Time found. Done.",
    },
  ];

  const boxes = [
    {
      subheading: "TEAM COLLABORATION",
      title: "Schedule introductory calls",
      description: "Create meeting links with name and email collection. Set 30-minute durations. Perfect for client consultations.",
      image: "/product/meeting/meeting-feat-3.png",
    },
    {
      subheading: "PROFESSIONAL EXPERIENCE",
      title: "Set your meeting schedule",
      description: "Check available days (Mon, Tue, Wed) and set time slots from 9:00 AM to 10:00 PM. Let clients book when you're free.",
      image: "/product/meeting/meeting-feat-4.png",
    },
  ];

  return (
    <ProductLayout>
      <ProductHero
        subheading={<VideoCameraIcon className="h-8 w-8 md:h-12 md:w-12 text-primary-600" />}
        title={"Every meeting moves work forward"}
        description={
          "AI transcriptions. Smart summaries. 25 participants. Professional waiting rooms. Meetings that actually move work forward."
        }
        image={"/product/meetings.png"}
        button1Text={"Schedule Meeting"}
        button2Text={"Compare Pricing"}
      />

      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl text-black">{feature.title}</h3>
                <p className="text-gray-400 ">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              See how teams collaborate better
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of freelancers, contractors, and businesses who've transformed their meetings
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img src="/happy-business-meeting-1.jpg" alt="Happy business team collaborating" className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Productive Collaboration</h3>
                <p className="text-sm opacity-90">Teams that meet better, work better</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img src="/happy-business-meeting-2.jpg" alt="Business professionals celebrating success" className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Success Celebrated</h3>
                <p className="text-sm opacity-90">Every meeting ends with accomplishment</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img src="/happy-business-meeting-3.jpg" alt="Modern office meeting space" className="w-full h-64 object-cover" />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-xl font-bold mb-2">Modern Workspace</h3>
                <p className="text-sm opacity-90">Professional environment for professional results</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">92%</div>
                <p className="text-gray-600">Fewer follow-up meetings needed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
                <p className="text-gray-600">User satisfaction rating</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                <div className="text-3xl font-bold text-primary-600 mb-2">2hrs</div>
                <p className="text-gray-600">Average meeting time saved weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Experience the VenMail difference
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI-powered features that make every meeting more productive
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img src="/meeting-room.png" alt="Professional meeting room interface" className="w-full h-96 object-cover" />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2">Professional Meeting Experience</h3>
                <p className="text-sm opacity-90">Crystal clear video, smart participant management, and AI-powered insights</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Compare with the competition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See why teams choose us over Google Meet and Zoom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/product/meeting-vs-google-meet" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black">vs Google Meet</h3>
                  <div className="text-primary-600 group-hover:translate-x-2 transition-transform">→</div>
                </div>
                <p className="text-gray-600 mb-4">Built-in transcriptions, AI summaries, and smarter scheduling</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Transcriptions</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AI Summaries</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">25 Participants</span>
                </div>
              </div>
            </a>
            <a href="/product/meeting-vs-zoom" className="group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black">vs Zoom</h3>
                  <div className="text-primary-600 group-hover:translate-x-2 transition-transform">→</div>
                </div>
                <p className="text-gray-600 mb-4">No time limits, better waiting rooms, and integrated scheduling</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">2 Hour Limit</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Smart Lobby</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Built-in Scheduling</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boxes.map((box, index) => (
              <FeatureCard
                key={index}
                index={index}
                subheading={box.subheading}
                title={box.title}
                description={box.description}
                image={box.image}
                count={boxes.length}
              />
            ))}
          </div>
        </div>
      </section>
    </ProductLayout>
  );
}
