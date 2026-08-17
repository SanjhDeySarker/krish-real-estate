export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  status: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: string;
  description: string;
  featuredImage: string;
  images: string[];
  highlights: string[];
};

export const properties: Property[] = [
  {
    id: "property-01",
    slug: "premium-3bhk-family-residence-garia-kolkata",
    title: "Premium 3BHK Family Residence",
    location: "Kamdahari, Garia, Kolkata",
    type: "Residential Floor",
    status: "For Sale",
    price: "Price on Request",
    area: "1,250 sq.ft.",
    bedrooms: 3,
    bathrooms: 2,
    parking: "Covered Parking",
    description:
      "Spacious and elegantly designed 3BHK family residence located in Kamdahari, Garia, Kolkata. Features a bright open living & dining hall, master bedroom, fully fitted functional kitchen, dedicated puja room, and serene surroundings with direct site visits available.",
    featuredImage: "/properties/property-01/living-dining.jpg",
    images: [
      "/properties/property-01/living-dining.jpg",
      "/properties/property-01/entrance.jpg",
      "/properties/property-01/bedroom.jpg",
      "/properties/property-01/kitchen.jpg",
      "/properties/property-01/puja-room.jpg",
    ],
    highlights: [
      "Prime Garia Kolkata Location",
      "Spacious 3BHK Layout",
      "Dedicated Puja Room",
      "Functional Modular Kitchen",
      "Comfortable Living & Dining Area",
      "Immediate Site Visit Available",
    ],
  },
  {
    id: "property-02",
    slug: "modern-2bhk-luxury-apartment-garia-kolkata",
    title: "Modern 2BHK Apartment & Fitness Suite",
    location: "Purba Para, Garia, Kolkata",
    type: "Boutique Apartment",
    status: "For Sale",
    price: "Price on Request",
    area: "980 sq.ft.",
    bedrooms: 2,
    bathrooms: 2,
    parking: "Reserved Parking",
    description:
      "Sophisticated 2BHK boutique apartment in Garia, Kolkata featuring a vibrant dining area, cozy secondary bedroom, private study/home office workspace, secondary utility kitchen, and modern fitness amenities. Ideal for modern families and professionals.",
    featuredImage: "/properties/property-01/bedroom-2.jpg",
    images: [
      "/properties/property-01/bedroom-2.jpg",
      "/properties/property-01/dining-2.jpg",
      "/properties/property-01/kitchen-2.jpg",
      "/properties/property-01/study.jpg",
      "/properties/property-01/gym.jpg",
    ],
    highlights: [
      "Peaceful Garia Neighborhood",
      "Vibrant Dining & Living Space",
      "Private Study / Office Nook",
      "Fully Equipped Fitness Gym",
      "Secondary Utility Kitchen",
      "Verified Legal Documentation",
    ],
  },
  {
    id: "property-03",
    slug: "2bhk-flat-bansdroni-raifail-club-kolkata",
    title: "2 BHK Flat in Bansdroni",
    location: "Raifail Club, Bansdroni, Kolkata",
    type: "2 BHK Flat",
    status: "For Sale",
    price: "₹38 Lakhs",
    area: "875 sq.ft.",
    bedrooms: 2,
    bathrooms: 2,
    parking: "No Parking",
    description:
      "Well-maintained 2 BHK flat located at Raifail Club, Bansdroni, Kolkata. The flat is situated on the 3rd floor and is the top floor of the building. Lift facility is available. The property has remained unused for approximately 4 years and is located around 1 KM from the nearest metro station.",
    featuredImage: "/properties/property-03/cover.jpg",
    images: [
      "/properties/property-03/cover.jpg",
    ],
    highlights: [
      "2 BHK Flat",
      "875 sq.ft.",
      "3rd Floor / Top Floor",
      "Lift Available",
      "No Parking",
      "Unused for 4 Years",
      "Approx. 1 KM from Metro",
      "Bansdroni, Kolkata",
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}
