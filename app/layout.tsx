import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.krishrealestate.in"),
  title: {
    default: "Krish Real Estate | Premium Properties in Kolkata",
    template: "%s | Krish Real Estate",
  },
  description: "Krish Real Estate is a trusted property advisor in Kolkata offering premium residential properties, personal guidance and property assistance.",
  keywords: ["Krish Real Estate", "property in Kolkata", "real estate Kolkata", "Garia property", "premium properties Kolkata"],
  openGraph: {
    title: "Krish Real Estate | Premium Properties in Kolkata",
    description: "Trusted Property Advisor & Real Estate in Kolkata.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${cinzel.variable}`}>
      <body className="bg-[#071722] text-slate-100 font-sans antialiased selection:bg-[#d9b067] selection:text-[#071722]">
        <Navbar />
        {children}
        <Footer />
        <a href="https://wa.me/918777209496" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] transition duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.8)]">
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
