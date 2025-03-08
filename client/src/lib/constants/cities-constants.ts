const cities = [
  "Afula & Emek Yizrael area",
  "Ashdod and Lachish Area",
  "Ashkelon",
  "Beer Sheva",
  "Eilat",
  "Haifa & HaKrayot",
  "Hasharon area",
  "Jerusalem",
  "Karmiel area",
  "Kiryat Shmona area",
  "Mevaseret Zion Area",
  "Modi'in",
  "Nazareth - Nof Hagalil area",
  "Netanya area",
  "Netivot - Sderot area",
  "Pardes Hanna - Hadera area",
  "Petah Tikva - Bik’at Ono",
  "Rishon Lezion & Hashfela",
  "Rosh Pinna - Zefat area",
  "TLV - Herzliya area",
];

// Generate slug for each city
export const cityService = cities.map((city) => ({
  name: city,
  slug: city
    .toLowerCase()
    .replace(/&/g, "and") // Replace '&' with 'and'
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with '-'
    .replace(/-+/g, "-"), // Replace multiple hyphens with a single hyphen
}));

export const unslugCityName = (slug: string): string | null => {
  const city = cityService.find((city) => city.slug === slug);
  return city ? city.name : null; // Return the name if found, otherwise null
};

// Get all cities
export const getAllCities = () => cityService;
