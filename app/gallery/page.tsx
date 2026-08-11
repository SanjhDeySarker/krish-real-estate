import Image from "next/image";
import Link from "next/link";
import { properties } from "@/data/properties";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main className="bg-[#060D17] text-slate-100 min-h-screen">
      <section className="bg-[#0A1320] border-b border-[#E2BD6A]/15 py-12">
        <div className="container">
          <div className="eyebrow">Visual Experience</div>
          <h1 className="display mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            Explore Property <span className="text-gold-gradient">Galleries</span>
          </h1>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-300">
            Browse real photographs categorized by property listings in Kolkata.
          </p>
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid gap-12">
          {properties.map((p, pIdx) => (
            <div key={p.id} className="glass-card rounded-3xl p-6 sm:p-8 border border-[#E2BD6A]/25 shadow-2xl">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center border-b border-[#E2BD6A]/15 pb-5">
                <div>
                  <div className="eyebrow">Property 0{pIdx + 1}</div>
                  <h2 className="display mt-2 text-2xl sm:text-3xl font-extrabold text-white">{p.title}</h2>
                  <p className="mt-1 text-xs text-slate-400">📍 {p.location} • {p.area}</p>
                </div>
                <Link href={`/properties/${p.slug}`} className="btn-gold rounded-full px-5 py-2 text-xs flex items-center gap-2 self-start sm:self-auto">
                  View Listing Details
                </Link>
              </div>

              <div className="mt-6 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-5">
                {p.images.map((src, i) => (
                  <div key={src} className={`group relative overflow-hidden rounded-2xl border border-[#E2BD6A]/20 bg-[#040910] ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                    <Image src={src} alt={`${p.title} photo ${i + 1}`} fill className="object-cover transition duration-700 group-hover:scale-108" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end">
                      <span className="text-xs font-bold text-gold-gradient">View Photo {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
