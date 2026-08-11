import Image from "next/image";
import { site } from "@/data/site";
import { CheckIcon } from "@/components/icons";
import BrandBannerSection from "@/components/BrandBannerSection";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main className="bg-[#060D17] text-slate-100 min-h-screen">
      <section className="bg-[#0A1320] border-b border-[#E2BD6A]/15 py-12">
        <div className="container">
          <div className="eyebrow">About Krish Real Estate</div>
          <h1 className="display mt-3 max-w-3xl text-4xl sm:text-5xl font-extrabold text-white">
            A trusted, personal approach to property in <span className="text-gold-gradient">Kolkata.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-300">
            Personal guidance, clear communication, and a streamlined real estate experience built entirely around the buyer.
          </p>
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <div className="glass-card p-2 rounded-3xl border border-[#E2BD6A]/30 overflow-hidden">
            <div className="relative aspect-[16/10.5] overflow-hidden rounded-2xl">
              <Image src="/branding/krish-brand-banner.jpg" alt="Krish Real Estate Brand Banner" fill className="object-cover" />
            </div>
          </div>

          <div>
            <div className="eyebrow">Our Philosophy</div>
            <h2 className="display mt-3 text-3xl text-white font-extrabold">Property decisions deserve absolute clarity.</h2>
            <p className="mt-4 text-xs sm:text-sm leading-7 text-slate-300">
              Krish Real Estate is a boutique property advisory brand dedicated to assisting home seekers in discovering residential properties in Kolkata.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-7 text-slate-400">
              We believe every successful property experience is rooted in honest conversations, complete transparency, and attentive support from initial consultation to handing over keys.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                "Personalized property recommendations tailored to your budget",
                "Focused expertise in Garia, Kamdahari & Kolkata market",
                "Seamless site visit scheduling and neighborhood tours",
                "Complete assistance with price negotiations & legal paperwork",
              ].map((x) => (
                <div key={x} className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#E2BD6A]/20 text-[#E2BD6A]">✓</span>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandBannerSection />

      <section className="section section-soft border-t border-[#E2BD6A]/15">
        <div className="container grid gap-5 md:grid-cols-3">
          {[
            ["01", "Understand", "We start with your exact living requirements, preferred locations in Kolkata, and financial goals."],
            ["02", "Explore", "We curate verified listings, guide you through site visits, and evaluate property specs."],
            ["03", "Move Forward", "We manage negotiations, paper validation, and bank loan support until you move into your home."],
          ].map(([n, t, d]) => (
            <div key={n} className="glass-card glass-card-hover rounded-2xl p-6 border border-[#E2BD6A]/20">
              <div className="display text-3xl font-extrabold text-gold-gradient">{n}</div>
              <h3 className="mt-4 text-lg font-bold text-white">{t}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
