import Image from "next/image";

const images = [
  ["Living & Dining", "/properties/property-01/living-dining.jpg"],
  ["Bedroom", "/properties/property-01/bedroom.jpg"],
  ["Kitchen", "/properties/property-01/kitchen.jpg"],
  ["Study Room", "/properties/property-01/study.jpg"],
  ["Entrance", "/properties/property-01/entrance.jpg"],
  ["Puja Room", "/properties/property-01/puja-room.jpg"],
  ["Kitchen Detail", "/properties/property-01/kitchen-2.jpg"],
  ["Bedroom Detail", "/properties/property-01/bedroom-2.jpg"],
  ["Dining Area", "/properties/property-01/dining-2.jpg"],
  ["Gym / Utility", "/properties/property-01/gym.jpg"],
];

export default function GalleryGrid({ limit }: { limit?: number }) {
  const list = typeof limit === "number" ? images.slice(0, limit) : images;
  return (
    <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
      {list.map(([title, src], i) => (
        <div key={src} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : i === 5 ? "md:col-span-2" : ""}`}>
          <Image src={src} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-12 text-sm font-bold text-white">{title}</div>
        </div>
      ))}
    </div>
  );
}
