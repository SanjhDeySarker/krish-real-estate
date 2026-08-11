import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/data/properties";
import { site } from "@/data/site";
import { ArrowIcon, CheckIcon, MessageIcon, PhoneIcon } from "@/components/icons";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProperty(params.slug);
  return { title: p?.title || "Property" };
}

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  const p = getProperty(params.slug);
  if (!p) notFound();

  return (
    <main className="bg-[#060D17] text-slate-100 min-h-screen">
      <section className="bg-[#0A1320] border-b border-[#E2BD6A]/15 py-10">
        <div className="container">
          <Link href="/properties" className="inline-flex items-center gap-2 text-xs text-[#E2BD6A] hover:text-white transition-colors mb-3">
            ← Back to Properties
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-[#E2BD6A]/20 border border-[#E2BD6A]/40 px-3 py-1 text-[10px] font-bold text-[#E2BD6A] uppercase tracking-wider mb-2">
                {p.status} • {p.type}
              </span>
              <h1 className="display text-3xl sm:text-5xl font-extrabold text-white">{p.title}</h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">📍 {p.location}</p>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold text-slate-400">Asking Price</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-gold-gradient">{p.price}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <div className="glass-card p-2 rounded-3xl overflow-hidden border border-[#E2BD6A]/30">
              <div className="relative aspect-[16/10.5] overflow-hidden rounded-2xl bg-[#040910]">
                <Image src={p.featuredImage} alt={p.title} fill className="object-cover" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {p.images.map((src, i) => (
                <div key={src} className="glass-card p-1 rounded-xl relative aspect-square overflow-hidden border border-[#E2BD6A]/20 group">
                  <Image src={src} alt={`${p.title} photo ${i + 1}`} fill className="object-cover rounded-lg group-hover:scale-110 transition duration-500" />
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-card rounded-3xl p-6 sm:p-8 border border-[#E2BD6A]/30 h-fit">
            <div className="text-xs font-extrabold uppercase tracking-[.18em] text-[#E2BD6A]">Overview & Features</div>
            <h3 className="display text-2xl font-bold text-white mt-1">Property Details</h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Bedrooms", String(p.bedrooms)],
                ["Bathrooms", String(p.bathrooms)],
                ["Parking", p.parking],
                ["Area", p.area],
              ].map(([a, b]) => (
                <div key={a} className="rounded-xl bg-[#060D17] border border-[#E2BD6A]/15 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[.12em] text-slate-400">{a}</div>
                  <div className="mt-1 font-bold text-white text-sm">{b}</div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-300">{p.description}</p>

            <div className="mt-6 grid gap-2">
              <div className="text-xs font-bold uppercase text-[#E2BD6A] tracking-wider mb-1">Highlights</div>
              {p.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="text-[#E2BD6A]">✓</span> {h}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Krish Real Estate, I am interested in ${p.title}. Please share details.`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold justify-center rounded-full px-5 py-3 text-xs flex items-center gap-2"
              >
                <MessageIcon size={16} /> Enquire on WhatsApp
              </a>
              <a
                href={`tel:${site.phone}`}
                className="btn-outline-gold justify-center rounded-full px-5 py-3 text-xs flex items-center gap-2"
              >
                <PhoneIcon size={16} /> Call {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
