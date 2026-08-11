import Image from "next/image";
import { site } from "@/data/site";
import { MailIcon, MapPinIcon, MessageIcon, PhoneIcon } from "./icons";

export default function BrandBannerSection() {
  return (
    <section className="section bg-[#060D17]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="eyebrow">Official Brand Advisor</div>
          <h2 className="display text-3xl font-extrabold text-white sm:text-4xl mt-3">
            Trusted Real Estate Guidance in <span className="text-gold-gradient">Kolkata</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            Backed by years of expertise, transparent property evaluations, and personalized guidance for every homebuyer.
          </p>
        </div>

        <div className="glass-card glass-card-hover rounded-3xl p-4 sm:p-6 relative overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center border border-[#E2BD6A]/30">
          <div className="relative aspect-[16/10.5] overflow-hidden rounded-2xl shadow-2xl border border-[#E2BD6A]/20 bg-[#040910]">
            <Image
              src="/branding/krish-brand-banner.jpg"
              alt="Krish Real Estate Brand Banner - Krishan Pandey"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-2 sm:p-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2BD6A]/30 bg-[#060D17]/80 px-3.5 py-1 text-[11px] font-bold text-[#E2BD6A]">
              ★ Official Business Partner
            </div>

            <h3 className="display text-2xl font-bold text-white mt-4">{site.advisor}</h3>
            <p className="text-xs text-[#E2BD6A] font-semibold mt-0.5">{site.tagline}</p>

            <p className="mt-4 text-xs leading-6 text-slate-300">
              Personalized property consultations, site visit assistance, loan support, and transparent legal documentation in Kolkata.
            </p>

            <div className="mt-6 grid gap-3 text-xs text-slate-300">
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 p-3 rounded-xl bg-[#060D17]/60 border border-[#E2BD6A]/15 hover:border-[#E2BD6A]/50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <PhoneIcon size={14}/>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Direct Phone</div>
                  <div className="font-bold text-white text-sm">{site.phoneDisplay}</div>
                </div>
              </a>

              <a href={`mailto:${site.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-[#060D17]/60 border border-[#E2BD6A]/15 hover:border-[#E2BD6A]/50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <MailIcon size={14}/>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</div>
                  <div className="font-semibold text-white text-xs">{site.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#060D17]/60 border border-[#E2BD6A]/15">
                <div className="h-8 w-8 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A]">
                  <MapPinIcon size={14}/>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Office Address</div>
                  <div className="text-xs text-slate-200">{site.address}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold text-xs rounded-full px-5 py-2.5 flex items-center gap-2">
                <MessageIcon size={14}/> Connect on WhatsApp
              </a>
              <a href={`tel:${site.phone}`} className="btn-outline-gold text-xs rounded-full px-5 py-2.5 flex items-center gap-2">
                <PhoneIcon size={14}/> Call Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
