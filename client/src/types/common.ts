// Common utility types and shared interfaces
export type Nullable<T> = T | null;

export interface ApiError {
  status: "Error";
  message: string;
  code?: number;
}

export interface ApiSuccess<T> {
  status: "Success";
  data: T;
  message?: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
