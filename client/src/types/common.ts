// Common utility types and shared interfaces
export type Nullable<T> = T | null;

export interface ApiResponse<T> {
  data: T;
  status: "Success" | "Error";
  message?: string;
}
