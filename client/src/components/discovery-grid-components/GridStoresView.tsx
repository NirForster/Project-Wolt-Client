import React, { useEffect, useState } from "react";
import {
  fetchBusinessesByCity,
  BusinessSummary,
} from "../../services/api/businessApi";
import BusinessCard from "../BusinessCard";
import { unslugCityName } from "@/lib/constants/cities-constants";

interface GridStoresViewProps {
  cityName: string; // Allow cityName to be passed as a prop
}

const GridStoresView: React.FC<GridStoresViewProps> = ({ cityName }) => {
  const [stores, setStores] = useState<BusinessSummary[]>([]);

  useEffect(() => {
    const loadStores = async () => {
      try {
        const data = await fetchBusinessesByCity(cityName, "stores");
        console.log(`Loaded Stores in ${cityName}:`, data);
        setStores(data);
      } catch (error) {
        console.error(`Failed to load stores in ${cityName}:`, error);
      }
    };

    if (cityName) loadStores();
  }, [cityName]);

  const unslugedCity = unslugCityName(cityName || "tlv-herzliya-area");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Stores in {unslugedCity}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stores.map((store) => (
          <BusinessCard
            key={store.id}
            id={store.id}
            city={store.location.city}
            type="store"
            name={store.name}
            description={store.shortDescription}
            image={store.image}
            link={store.link}
            estimatedDeliveryTime={store.estimatedDeliveryTime}
            rating={store.rating}
            dollarCount={store.dollarCount}
            label={{
              deliveryFee: store.label.deliveryFee || "N/A",
              storeType: store.label.storeType || "N/A",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GridStoresView;
