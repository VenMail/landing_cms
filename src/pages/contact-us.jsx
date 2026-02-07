import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { CONTACT_EMAIL, getContactMailtoHref } from "@/config/contact";

function ContactUs() {
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayText, setDisplayText] = useState("");
  const originalText = "We are constantly improving our platform to better serve you. If you have any questions or feedback, please don't hesitate to contact us.";
  const contactEmail = CONTACT_EMAIL;

  useEffect(() => {
    // Text animation
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setDisplayText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 20);

    setTimeout(() => {
      setDisplayEmail(contactEmail);
    }, 1000);

    return () => clearInterval(textInterval);
  }, [contactEmail]);

  const handleContactClick = () => {
    window.location.href = getContactMailtoHref({
      cc: "outreach@venmail.io",
      subject: "VenMail contact request",
      body: "Hi VenMail team,\n\nI'd like to discuss...",
    });
  };

  return (
    <DefaultLayout>
      <section className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-[#050910] text-white">
        <div className="max-w-6xl px-4 mx-auto relative pb-24">
          <div className="max-w-3xl pt-20 md:pt-28 space-y-6">
            <p className="uppercase tracking-[0.18em] text-xs text-white/60">Contact</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Talk to the VenMail team</h1>
            <p className="text-lg md:text-xl text-white/70 leading-8 min-h-[48px]">{displayText}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-400/10 text-emerald-200 border border-emerald-500/30">Response under 24h</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-400/10 text-blue-100 border border-blue-500/30">Global support</span>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-white/60">Prefer email? We'll draft it for you.</p>
                <a
                  href={getContactMailtoHref({
                    cc: "outreach@venmail.io",
                    subject: "VenMail sales inquiry",
                    body: "Hi VenMail team,\n\nI'd like to discuss...",
                  })}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-primary-400 text-black font-semibold hover:bg-primary-300 transition transform hover:-translate-y-[1px]"
                >
                  Talk to sales
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold">Live support</p>
                  <p className="text-white/60">Migration, deliverability, compliance.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold">Security</p>
                  <p className="text-white/60">SOC 2-aligned vendors and reviews.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold">Data residency</p>
                  <p className="text-white/60">Multi-region options for teams.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-semibold">Onboarding</p>
                  <p className="text-white/60">White-glove rollout for any size.</p>
                </div>
              </div>

              <div className="text-sm text-white/60">
                Urgent? <span className="select-all cursor-pointer text-white hover:text-primary-200 transition-colors">{displayEmail}</span>
                <div className="mt-2 space-y-1 text-white/70">
                  <p>Phone: <a href="tel:+19027090836" className="text-white hover:text-primary-200 transition-colors">+1 902-709-0836</a></p>
                  <p className="text-white/60">8 The Green, Dover, Delaware USA</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.15),transparent_30%)]" />
              <div className="relative p-8 md:p-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/15 border border-white/10" />
                  <div>
                    <p className="text-sm text-white/60">Customer success</p>
                    <p className="font-semibold">Here to make migrations easy</p>
                  </div>
                </div>
                <img
                  src="/contact.png"
                  alt="Contact VenMail"
                  className="w-full object-cover rounded-xl border border-white/10 shadow-2xl"
                />
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-semibold">Office hours</p>
                    <p className="text-white/60">Mon–Fri, 8am–6pm UTC</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-semibold">SLAs</p>
                    <p className="text-white/60">Priority routing for paid plans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ContactUs;