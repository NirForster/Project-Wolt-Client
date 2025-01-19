import { Link } from "react-router-dom";

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
  "Yokneam - Tivon area",
];

const formatCityName = (city: string): string => {
  return city
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "")
    .replace(/[^\w-]/g, "");
};

const ExploreCitiesSection = () => {
  return (
    <section className="py-12 px-8">
      <h2 className="text-4xl font-bold mb-6 text-center font-woltHeader">
        Explore Wolt cities
      </h2>
      {/* Country Section */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://flagcdn.com/w320/il.png"
            alt="Israel Flag"
            className="w-6 h-6"
          />
          <span className="font-semibold text-lg">Israel</span>
        </div>
      </div>
      {/* Show All Countries */}
      <div className="text-center mb-6">
        <a href="#" className="text-blue-600 hover:underline">
          Show all countries
        </a>
      </div>
      {/* Cities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {cities.map((city, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer flex justify-between items-center"
          >
            <span>
              <Link to={`/en/discovery/${formatCityName(city)}`}>{city}</Link>
            </span>
            <span>→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCitiesSection;
