import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";
import { ArrowIcon, HomeIcon } from "./icons";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group glass-card glass-card-hover overflow-hidden rounded-3xl relative flex flex-col justify-between">
      <div>
        <div className="relative aspect-[16/10.5] overflow-hidden bg-[#060D17]">
          <Image src={property.featuredImage} alt={property.title} fill className="object-cover transition duration-700 group-hover:scale-108" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1726] via-transparent to-black/30" />
          <div className="absolute left-4 top-4 rounded-full bg-[#060D17]/85 border border-[#E2BD6A]/40 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#E2BD6A] backdrop-blur-md">
            {property.status}
          </div>
          <div className="absolute right-4 bottom-3 text-xs font-bold text-slate-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10">
            {property.area}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#E2BD6A]">
            <HomeIcon size={14}/> {property.type}
          </div>
          <h3 className="mt-2 display text-xl font-bold text-white group-hover:text-[#E2BD6A] transition-colors">{property.title}</h3>
          <p className="mt-1.5 text-xs text-slate-400 flex items-center gap-1.5">
            <span className="text-[#E2BD6A]">📍</span> {property.location}
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2 border-y border-[#E2BD6A]/15 py-3.5 text-center text-xs">
            <div className="border-r border-[#E2BD6A]/10 pr-2">
              <span className="block font-bold text-white text-sm">{property.bedrooms}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Bedrooms</span>
            </div>
            <div className="border-r border-[#E2BD6A]/10 px-2">
              <span className="block font-bold text-white text-sm">{property.bathrooms}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Bathrooms</span>
            </div>
            <div className="pl-2">
              <span className="block font-bold text-white text-xs truncate">{property.parking}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">Parking</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-1 flex items-center justify-between gap-3">
        <div>
          <div className="text-[9px] font-extrabold uppercase tracking-[.18em] text-slate-400">Price</div>
          <div className="text-base font-extrabold text-gold-gradient">{property.price}</div>
        </div>
        <Link href={`/properties/${property.slug}`} className="btn-gold rounded-full px-4 py-2 text-xs flex items-center gap-1.5 group-hover:gap-2">
          View Listing <ArrowIcon size={13}/>
        </Link>
      </div>
    </article>
  );
}
