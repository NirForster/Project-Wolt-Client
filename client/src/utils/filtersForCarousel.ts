import { BusinessWithSummary } from "@/services/api/businessApi";

/**
 * ✅ Shuffle an array using Fisher-Yates algorithm
 */
export const shuffleArray = (
  array: BusinessWithSummary[]
): BusinessWithSummary[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * ✅ Filters businesses based on title prop (for "business" type) or additional criteria
 */
export const filterBusinesses = (
  businesses: BusinessWithSummary[],
  filterType: string
): BusinessWithSummary[] => {
  if (!filterType) return businesses; // ✅ No title filter, return all

  const lowerFilter = filterType.toLowerCase();
  let filtered = businesses;

  if (lowerFilter.includes("popular") || lowerFilter.includes("top")) {
    filtered = filtered.filter((business) => business.summary?.rating >= 7.0);

    if (filtered.length > 40) {
      filtered = filtered.filter((business) => business.summary?.rating >= 7.5);
    }
    if (filtered.length > 40) {
      filtered = filtered.filter((business) => business.summary?.rating >= 8);
    }
    if (filtered.length > 40) {
      filtered = filtered.filter((business) => business.summary?.rating >= 8.5);
    }
    if (filtered.length > 40) {
      filtered = filtered.filter((business) => business.summary?.rating >= 9);
    }

    if (filtered.length > 30) {
      filtered = filtered.slice(0, 40); // ✅ Keep max 40 businesses
    }

    if (filtered.length < 30) {
      console.warn(
        "Warning: Less than 30 businesses found for popular filter."
      );
    }

    return shuffleArray(filtered); // ✅ Shuffle to mix restaurants & stores
  }

  if (
    lowerFilter.includes("it’s a deal") ||
    lowerFilter.includes(" Wallet friendly")
  ) {
    return filtered.filter(
      (business) =>
        business.summary?.dollarCount === "$" ||
        business.summary?.dollarCount === "$$"
    );
  }

  if (lowerFilter.includes("delivery fee")) {
    return filtered.filter(
      (business) => business.summary?.label?.deliveryFee === "0"
    );
  }

  if (lowerFilter.includes("fast delivery")) {
    return filtered.filter(
      (business) => business.summary?.estimatedDeliveryTime?.min <= 30
    );
  }

  if (lowerFilter.includes("best reviewed")) {
    return filtered.filter((business) => business.summary?.rating >= 9.0);
  }

  return filtered;
};
