import Link from "next/link";
import { site } from "@/data/site";
import { MailIcon, MapPinIcon, PhoneIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-[#03070E] text-slate-200 border-t border-[#E2BD6A]/20">
      <div className="container grid gap-8 py-12 md:grid-cols-[1.2fr_.8fr_.9fr]">
        <div>
          <div className="display text-2xl font-bold tracking-[.18em] text-white">KRISH</div>
          <div className="text-[10px] font-extrabold tracking-[.3em] text-[#E2BD6A]">REAL ESTATE</div>
          <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
            {site.tagline}. Boutique real estate guidance helping Kolkata families discover verified residential flats and luxury homes.
          </p>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="mt-5 btn-gold rounded-full px-5 py-2.5 text-xs inline-flex items-center gap-2">
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[.2em] text-[#E2BD6A]">Navigation</div>
          <div className="mt-4 grid gap-2.5 text-xs text-slate-300 font-medium">
            <Link href="/" className="hover:text-[#E2BD6A] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#E2BD6A] transition-colors">About Us</Link>
            <Link href="/properties" className="hover:text-[#E2BD6A] transition-colors">Properties</Link>
            <Link href="/gallery" className="hover:text-[#E2BD6A] transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-[#E2BD6A] transition-colors">Contact Us</Link>
          </div>
        </div>

        <div>
          <div className="text-xs font-bold uppercase tracking-[.2em] text-[#E2BD6A]">Contact Info</div>
          <div className="mt-4 grid gap-3 text-xs text-slate-300">
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 hover:text-[#E2BD6A] transition-colors">
              <span className="text-[#E2BD6A]"><PhoneIcon size={15}/></span>{site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-[#E2BD6A] transition-colors">
              <span className="text-[#E2BD6A]"><MailIcon size={15}/></span>{site.email}
            </a>
            <div className="flex items-start gap-3">
              <span className="text-[#E2BD6A] mt-0.5"><MapPinIcon size={15}/></span><span>{site.address}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E2BD6A]/10 bg-[#02050A]">
        <div className="container flex flex-col gap-2 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Krish Real Estate. All rights reserved.</span>
          <span className="text-[#E2BD6A] font-semibold">Trusted Property Advisor • Kolkata</span>
        </div>
      </div>
    </footer>
  );
}
