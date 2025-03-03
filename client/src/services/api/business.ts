import api from "./api";
import { ApiResponse, Business, BusinessSummary, Menu } from "@/types";

export const fetchAllBusinesses = async (
  type: "store" | "restaurant"
): Promise<ApiResponse<BusinessSummary[]>> => {
  return api.get(`/business?type=${type}`);
};

export const fetchBusinessesByCity = async (
  citySlug: string,
  type: "restaurants" | "stores"
): Promise<ApiResponse<BusinessSummary[]>> => {
  return api.get(`/business/cities/${citySlug}/${type}`);
};

export const fetchBusinessById = async (
  id: string
): Promise<ApiResponse<Business>> => {
  return api.get(`/business/${id}`);
};

export const fetchMenuByBusinessId = async (
  businessId: string
): Promise<ApiResponse<Menu>> => {
  return api.get(`/business/${businessId}/menu`);
};

export const fetchBusinessesByCategory = async (
  cityName: string,
  type: "restaurant" | "store"
): Promise<ApiResponse<Record<string, BusinessSummary[]>>> => {
  return api.get(`/business/cities/${cityName}/${type}/categories`);
};
