import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export const metadata = { title: "Properties" };

export default function PropertiesPage() {
  return (
    <main className="bg-[#060D17] min-h-screen text-slate-100">
      <section className="bg-[#0A1320] border-b border-[#E2BD6A]/15 py-12">
        <div className="container">
          <div className="eyebrow">Curated Listings</div>
          <h1 className="display mt-3 text-4xl text-white sm:text-5xl font-extrabold">
            Explore Selected <span className="text-gold-gradient">Properties</span>
          </h1>
          <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-7 text-slate-300">
            Browse verified residential flats and luxury floors presented by Krish Real Estate in Kolkata.
          </p>
        </div>
      </section>

      <section className="section bg-[#060D17]">
        <div className="container grid gap-6 md:grid-cols-2">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
