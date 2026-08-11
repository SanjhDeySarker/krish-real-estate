"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { MailIcon, MapPinIcon, MessageIcon, PhoneIcon } from "@/components/icons";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanFullName = fullName.trim();
    const cleanPhone = phone.trim();
    const cleanRequirement = requirement.trim();

    const message = [
      "Hello Krishan Pandey,",
      `Full Name: ${cleanFullName || "Not provided"}`,
      `Phone Number: ${cleanPhone || "Not provided"}`,
      "",
      "Property Requirement & Budget:",
      cleanRequirement || "No details provided",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="bg-[#060D17] text-slate-100 min-h-screen">
      <section className="bg-[#0A1320] border-b border-[#E2BD6A]/15 py-12">
        <div className="container">
          <div className="eyebrow">Direct Advisory</div>
          <h1 className="display mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Let&apos;s talk about your next <span className="text-gold-gradient">property.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-300">
            Send an enquiry or contact Krishan Pandey directly for a personalized property discussion or site visit in Kolkata.
          </p>
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#E2BD6A]/30 relative overflow-hidden">
            <div className="eyebrow">Krish Real Estate</div>
            <h2 className="display mt-3 text-3xl font-extrabold text-white">Get in touch.</h2>

            <div className="mt-8 grid gap-5 text-xs text-slate-300">
              <a href={`tel:${site.phone}`} className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#060D17]/80 border border-[#E2BD6A]/20 hover:border-[#E2BD6A]/60 transition-colors">
                <div className="h-10 w-10 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <PhoneIcon size={18}/>
                </div>
                <div>
                  <b className="block text-white text-sm">Call Direct</b>
                  <span className="text-slate-300">{site.phoneDisplay}</span>
                </div>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#060D17]/80 border border-[#E2BD6A]/20 hover:border-[#E2BD6A]/60 transition-colors">
                <div className="h-10 w-10 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <MailIcon size={18}/>
                </div>
                <div>
                  <b className="block text-white text-sm">Email Address</b>
                  <span className="text-slate-300">{site.email}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#060D17]/80 border border-[#E2BD6A]/20">
                <div className="h-10 w-10 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <MapPinIcon size={18}/>
                </div>
                <div>
                  <b className="block text-white text-sm">Office Location</b>
                  <span className="text-slate-300">{site.address}</span>
                </div>
              </div>
            </div>

            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="mt-8 btn-gold rounded-full px-6 py-3 text-xs font-bold inline-flex items-center gap-2 w-full justify-center">
              <MessageIcon size={16}/> Connect on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 sm:p-10 border border-[#E2BD6A]/30">
            <h2 className="display text-3xl font-extrabold text-white">Send Property Enquiry</h2>
            <p className="mt-1.5 text-xs text-slate-400">Fill in your information and click below to send your requirements straight via WhatsApp.</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-semibold text-slate-200">
                Full Name
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl bg-[#060D17] border border-[#E2BD6A]/25 px-4 py-3 text-xs text-white outline-none focus:border-[#E2BD6A]"
                />
              </label>

              <label className="text-xs font-semibold text-slate-200">
                Phone Number
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your contact number"
                  className="mt-2 w-full rounded-xl bg-[#060D17] border border-[#E2BD6A]/25 px-4 py-3 text-xs text-white outline-none focus:border-[#E2BD6A]"
                />
              </label>

              <label className="text-xs font-semibold text-slate-200 sm:col-span-2">
                Property Requirement & Budget
                <textarea
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  rows={4}
                  placeholder="Tell us what property type, bedrooms, or location in Kolkata you are looking for..."
                  className="mt-2 w-full rounded-xl bg-[#060D17] border border-[#E2BD6A]/25 px-4 py-3 text-xs text-white outline-none focus:border-[#E2BD6A]"
                />
              </label>
            </div>

            <p className="mt-4 text-[11px] text-slate-400">Your enquiry is transmitted securely directly to Krishan Pandey.</p>

            <button type="submit" className="mt-6 btn-gold rounded-full px-8 py-3.5 text-xs font-bold w-full sm:w-auto">
              Submit WhatsApp Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
