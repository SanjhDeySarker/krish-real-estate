import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.krishrealestate.in";
  const paths = ["", "/about", "/properties", "/gallery", "/contact", ...properties.map(p => `/properties/${p.slug}`)];
  return paths.map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "" ? 1 : .7 }));
}
