import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import GalleryGrid from "@/components/GalleryGrid";
import BrandBannerSection from "@/components/BrandBannerSection";
import { properties } from "@/data/properties";
import { site } from "@/data/site";
import { ArrowIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <main className="bg-[#060D17] text-slate-100">
      <Hero />

      <section className="border-b border-[#E2BD6A]/15 bg-[#081220] py-6">
        <div className="container grid gap-6 sm:grid-cols-3">
          {[
            ["01", "100% Verified Properties", "Thoroughly inspected residential properties with transparent legal documentation."],
            ["02", "Kolkata Local Expertise", "Deep market insight focused on Garia and premier Kolkata neighborhoods."],
            ["03", "End-to-End Assistance", "Personal guidance from property selection to site visits & loan support."],
          ].map(([n, t, d]) => (
            <div key={n} className="glass-card rounded-2xl p-5 border border-[#E2BD6A]/15 flex items-start gap-4">
              <div className="display text-2xl font-extrabold text-gold-gradient">{n}</div>
              <div>
                <h3 className="font-bold text-white text-sm">{t}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-5">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="eyebrow">About Krish Real Estate</div>
            <h2 className="display mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Property guidance with a <span className="text-gold-gradient">personal touch.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-7 text-slate-300">
              Krish Real Estate is built around a simple philosophy: making property decisions feel clearer, transparent, and completely stress-free.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-7 text-slate-400">
              From finding the right residential flat to scheduling on-site visits and navigating loan financing, we walk alongside you every step of the way.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-bold text-[#E2BD6A] hover:text-white transition-colors text-xs sm:text-sm">
              Discover our philosophy <ArrowIcon size={14}/>
            </Link>
          </div>

          <div className="glass-card p-2 rounded-3xl relative overflow-hidden border border-[#E2BD6A]/25">
            <div className="relative aspect-[16/10.5] overflow-hidden rounded-2xl">
              <Image src="/properties/property-01/living-dining.jpg" alt="Living and dining room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#060D17]/90 border border-[#E2BD6A]/30 p-4 text-white backdrop-blur-md">
                <div className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#E2BD6A]">Trusted Property Advisor</div>
                <div className="mt-1 display text-base font-bold">Helping Kolkata families move with absolute confidence.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft border-y border-[#E2BD6A]/15">
        <div className="container">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end mb-8">
            <div>
              <div className="eyebrow">Featured Listings</div>
              <h2 className="display mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                Explore Premier <span className="text-gold-gradient">Properties</span>
              </h2>
            </div>
            <Link href="/properties" className="btn-outline-gold rounded-full px-5 py-2 text-xs inline-flex items-center gap-2">
              View all listings <ArrowIcon size={14}/>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <BrandBannerSection />

      <section className="section bg-[#060D17] border-t border-[#E2BD6A]/15">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow">Why Choose Krish</div>
            <h2 className="display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Simple. Personal. <span className="text-gold-gradient">Professional.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              A boutique property advisory experience built for buyers who value honesty, clear communication, and reliable Kolkata guidance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Verified Listings", "Every property is physically verified and accurately presented with real photos."],
              ["Local Market Mastery", "Focused specifically on Garia, Kamdahari, Purba Para & Kolkata hotspots."],
              ["Full Buying Support", "Assistance with site visits, price negotiations, and legal documentation."],
              ["Buyer-First Value", "Unbiased recommendations tailored to your family's lifestyle and budget."],
            ].map(([t, d]) => (
              <div key={t} className="glass-card glass-card-hover rounded-2xl p-6 border border-[#E2BD6A]/20">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E2BD6A]/15 text-[#E2BD6A] font-bold text-lg">
                  ✓
                </span>
                <h3 className="mt-4 font-bold text-white text-base">{t}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark border-t border-[#E2BD6A]/15">
        <div className="container grid items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">Visual Gallery</div>
            <h2 className="display mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Take a closer look at <span className="text-gold-gradient">the spaces.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-300">
              Explore authentic interior and exterior photos, from living halls and master bedrooms to functional kitchens and fitness spaces.
            </p>
            <Link href="/gallery" className="mt-6 btn-gold rounded-full px-6 py-3 text-xs inline-flex items-center gap-2">
              Open Full Gallery <ArrowIcon size={14}/>
            </Link>
          </div>

          <GalleryGrid limit={6} />
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#E2BD6A]/30 text-center max-w-4xl mx-auto">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#E2BD6A]/15 blur-3xl pointer-events-none" />
            <div className="eyebrow">Start Your Journey</div>
            <h2 className="display mt-4 text-3xl font-extrabold text-white sm:text-5xl">
              Looking for your dream home in <span className="text-gold-gradient">Kolkata?</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-6">
              Connect directly with Krishan Pandey today. Get personalized property recommendations and arrange immediate site visits.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold rounded-full px-7 py-3.5 text-xs font-bold flex items-center gap-2">
                Chat on WhatsApp
              </a>
              <a href={`tel:${site.phone}`} className="btn-outline-gold rounded-full px-7 py-3.5 text-xs font-bold flex items-center gap-2">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
