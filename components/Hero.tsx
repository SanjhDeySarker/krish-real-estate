import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, MessageIcon } from "./icons";
import { site } from "@/data/site";
import { properties } from "@/data/properties";

export default function Hero() {
  const featured = properties[0];
  return (
    <section className="relative overflow-hidden bg-[#060D17] py-12 lg:py-16 text-white border-b border-[#E2BD6A]/15">
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#E2BD6A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/8 blur-[160px] pointer-events-none" />

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E2BD6A]/30 bg-[#0D1726]/80 px-4 py-1.5 text-xs font-semibold text-[#E2BD6A] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#E2BD6A] animate-ping" />
            Trusted Property Advisor in Kolkata
          </div>

          <h1 className="display mt-6 text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-[54px] tracking-tight">
            Find a place you&apos;ll be <br />
            <span className="text-gold-gradient">proud to call home.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
            Verified luxury properties in Garia & Kolkata with personalized guidance, transparent advice, and full buying support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/properties" className="btn-gold rounded-full px-6 py-3.5 text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#E2BD6A]/20">
              Explore Properties <ArrowIcon size={16}/>
            </Link>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline-gold rounded-full px-6 py-3.5 text-sm font-bold flex items-center gap-2">
              <MessageIcon size={16}/> Talk to {site.advisor}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#E2BD6A]/15 pt-6 text-xs text-slate-300">
            <div>
              <div className="display text-xl font-bold text-gold-gradient">100%</div>
              <div className="mt-0.5 text-[11px] text-slate-400">Verified Listings</div>
            </div>
            <div className="border-x border-[#E2BD6A]/15 px-4">
              <div className="display text-xl font-bold text-gold-gradient">Direct</div>
              <div className="mt-0.5 text-[11px] text-slate-400">Owner Guidance</div>
            </div>
            <div>
              <div className="display text-xl font-bold text-gold-gradient">Full</div>
              <div className="mt-0.5 text-[11px] text-slate-400">Legal & Loan Support</div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px]">
          <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-r from-[#E2BD6A]/20 to-[#C99A3D]/10 blur-xl opacity-70" />
          <div className="glass-card relative overflow-hidden rounded-[30px] p-2 shadow-2xl">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-[#0A1320]">
              <Image src="/branding/krish-brand-banner.jpg" alt="Krish Real Estate brand banner" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-transparent to-black/20" />

              <div className="absolute top-4 left-4 rounded-full bg-[#060D17]/85 border border-[#E2BD6A]/40 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#E2BD6A] backdrop-blur-md">
                Trusted Kolkata Advisor
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#060D17]/90 border border-[#E2BD6A]/30 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="display text-lg font-bold text-white">{featured.title}</h3>
                    <p className="text-xs text-slate-300">📍 {featured.location} • {featured.area}</p>
                  </div>
                  <Link href={`/properties/${featured.slug}`} className="btn-gold rounded-full px-3.5 py-1.5 text-[11px] whitespace-nowrap">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#E2BD6A]/40 bg-[#0D1726]/95 px-4 py-2.5 shadow-2xl backdrop-blur-md flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#E2BD6A]/20 grid place-items-center text-[#E2BD6A] font-bold text-xs">
              ✓
            </div>
            <div>
              <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-[#E2BD6A]">Property Advisor</div>
              <div className="text-xs font-bold text-white">{site.advisor} • {site.phoneDisplay}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
