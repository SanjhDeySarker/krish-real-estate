import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { MessageIcon, PhoneIcon } from "./icons";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#030d18] border-b border-[#E2BD6A]/10 text-slate-300 text-xs py-1.5 z-50 relative">
        <div className="container flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${site.phone}`} className="flex items-center gap-2 hover:text-[#E2BD6A] transition-colors"><PhoneIcon size={13}/><span className="font-medium">{site.phoneDisplay}</span></a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-[#E2BD6A] transition-colors"><span className="text-[#E2BD6A]">✉</span>{site.email}</a>
          </div>
          <div className="ml-auto flex items-center gap-4 text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#E2BD6A] animate-pulse"></span> Kolkata&apos;s Boutique Property Advisor</span>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="text-[#E2BD6A] font-bold hover:underline">Direct WhatsApp</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#E2BD6A]/20 bg-[#071722]/90 backdrop-blur-xl shadow-2xl">
        <div className="container flex h-[68px] items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative p-0.5 rounded-full bg-gradient-to-br from-[#F3E5AB] via-[#E2BD6A] to-[#C99A3D] shadow-[0_0_15px_rgba(226,189,106,0.3)]">
              <Image src="/logo/krish-logo.png" width={44} height={44} alt="Krish Real Estate logo" className="h-10 w-10 rounded-full object-cover"/>
            </div>
            <div className="leading-tight">
              <div className="display text-xl font-bold tracking-[.18em] text-white group-hover:text-[#E2BD6A] transition-colors">KRISH</div>
              <div className="text-[9px] font-extrabold tracking-[.32em] text-[#E2BD6A]">REAL ESTATE</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:flex">
            {[
              ["/","Home"],["/about","About Us"],["/properties","Properties"],["/gallery","Gallery"],["/contact","Contact Us"]
            ].map(([href,label]) => (
              <Link key={href} href={href} className="relative py-2 hover:text-[#E2BD6A] transition-colors group">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E2BD6A] to-[#C99A3D] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href={`tel:${site.phone}`} className="btn-outline-gold rounded-full px-4 py-2 text-xs flex items-center gap-2">
              <PhoneIcon size={14}/> Call Advisor
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold rounded-full px-5 py-2 text-xs flex items-center gap-2">
              <MessageIcon size={14}/> WhatsApp
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-[#E2BD6A]/30 text-[#E2BD6A] bg-[#0D1726]">☰</summary>
            <div className="absolute right-0 top-14 w-64 rounded-2xl border border-[#E2BD6A]/30 bg-[#0D1726] p-4 shadow-2xl backdrop-blur-2xl">
              <div className="grid gap-2 text-sm font-semibold text-slate-200">
                {[
                  ["/","Home"],["/about","About Us"],["/properties","Properties"],["/gallery","Gallery"],["/contact","Contact Us"]
                ].map(([href,label]) => <Link key={href} href={href} className="rounded-xl px-4 py-2.5 hover:bg-[#152438] hover:text-[#E2BD6A] transition-colors">{label}</Link>)}
              </div>
              <div className="mt-3 grid gap-2 border-t border-[#E2BD6A]/20 pt-3">
                <a href={`tel:${site.phone}`} className="btn-outline-gold text-center rounded-xl py-2.5 text-xs">Call Now</a>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="btn-gold text-center rounded-xl py-2.5 text-xs">WhatsApp</a>
              </div>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
