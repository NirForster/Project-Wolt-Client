import { useState } from "react";
import { Input } from "@/components/ui/input";
import { BiTargetLock } from "react-icons/bi";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import Lottie from "lottie-react";
import cityAnimation from "@/assets/lottie-files/city_3-2.json";
import { getCoordinatesFromAddress } from "@/services/api/geoCodingApi";

// API key for Google Maps (imported from environment variables)
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Specify Google Maps libraries required
type Library = "places" | "drawing" | "geometry";
const libraries: Library[] = ["places"];

/**
 * NewLocationsModal Component
 * Allows users to input their address manually or fetch their current location.
 */
const NewLocationsModal = ({
  onBack,
  onClose,
  setStreet,
}: {
  onBack: () => void;
  onClose: () => void;
  setStreet: (street: string) => void;
}) => {
  // State variables for managing input, country, and loading state
  const [streetInput, setStreetInput] = useState<string>("");
  const [country, setCountry] = useState<string>("IL"); // Default country: Israel (ISO code)
  const [currentLocation, setCurrentLocation] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const isContinueDisabled = streetInput.trim() === "";

  // Load Google Maps script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });

  // Replace useRef with useState
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  /**
   * Handle place change when user selects an address from Google Places Autocomplete.
   */
  const handlePlaceChange = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setStreetInput(place.formatted_address);
      }
    }
  };

  /**
   * Fetch user's current location using the Geolocation API
   */
  const handleFetchLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch address based on latitude and longitude using Google Geocoding API
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await response.json();
          const address =
            data.results[0]?.formatted_address || "Unknown Location";

          // Update state with detected address
          setCurrentLocation(address);
          setStreetInput(address);
        } catch (error) {
          console.error("Error fetching location:", error);
          alert("Failed to fetch location details.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        alert("Failed to fetch location. Please try again.");
        console.error(error);
        setLoading(false);
      }
    );
  };

  /**
   * Handle user clicking 'Continue' - fetch coordinates for the entered address
   */
  const handleContinue = async () => {
    setLoading(true);
    const fullAddress = `${streetInput}`; // Ensure correct format

    try {
      const coordinates = await getCoordinatesFromAddress(fullAddress);
      if (coordinates) {
        setStreet(fullAddress); // Pass full address to parent component
        console.log(fullAddress);
        console.log("Coordinates:", coordinates);
        // TODO: Save coordinates to userContext for further use
      } else {
        alert("Failed to fetch coordinates. Try again.");
      }
    } catch (error) {
      console.error("Error getting location:", error);
      alert("Error fetching location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Modal Background Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        {/* Modal Content */}
        <div className="bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6">
          {/* Header with Back and Close Buttons */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onBack}
            >
              ←
            </button>

            <button
              className="w-8 h-8 text-black rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold font-woltHeader mb-2">
            Add new address
          </h2>

          {/* Address Input Section */}
          <div className="space-y-4">
            {/* Country Selection Dropdown */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium">
                Country
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="h-[54px] w-full border border-gray-300 rounded-lg px-2"
              >
                <option value="IL">Israel</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IN">India</option>
              </select>
            </div>

            {/* Google Maps Autocomplete Input */}
            {isLoaded ? (
              <Autocomplete
                onLoad={setAutocomplete}
                onPlaceChanged={handlePlaceChange}
              >
                <Input
                  id="Street"
                  type="text"
                  value={streetInput}
                  placeholder="Street name and number"
                  onChange={(e) => setStreetInput(e.target.value)}
                  required
                  className="h-[54px] mb-2"
                />
              </Autocomplete>
            ) : (
              <Input
                id="Street"
                type="text"
                value={streetInput}
                placeholder="Street name and number"
                onChange={(e) => setStreetInput(e.target.value)}
                required
                className="h-[54px] mb-2"
              />
            )}

            {/* Fetch Location Button */}
            <button
              className=" text-blue-500 hover:text-blue-700"
              onClick={handleFetchLocation}
              disabled={loading}
            >
              {loading ? "Loading..." : <BiTargetLock size={24} />}
            </button>

            {/* Display Current Location if Available */}
            {currentLocation && (
              <p className="text-gray-600">
                Detected Location: {currentLocation}
              </p>
            )}
          </div>

          {/* Continue Button */}
          <button
            disabled={isContinueDisabled}
            className={`w-full px-4 py-2 rounded-lg text-white text-center ${
              isContinueDisabled
                ? "bg-blue-200 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={handleContinue}
          >
            Continue
          </button>

          {/* Lottie Animation */}
          <div className="mt-6">
            <Lottie animationData={cityAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLocationsModal;
