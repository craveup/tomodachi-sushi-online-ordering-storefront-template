import type { RequestConfig } from "@craveup/storefront-sdk";
import { apiPatch, apiPost, swrFetcher } from "@/lib/api/fetcher";

export const fetcherSWR = <T = unknown>(endpoint: string) =>
  swrFetcher<T>(endpoint);

export const postData = async <T = unknown>(
  endpoint: string,
  data: Record<string, any>,
  _baseUrl?: string,
  config?: RequestConfig
) => {
  return apiPost<T>(endpoint, data, config);
};

export const patchData = async <T = unknown>(
  endpoint: string,
  data: Record<string, any>,
  _baseUrl?: string,
  config?: RequestConfig
) => {
  return apiPatch<T>(endpoint, data, config);
};
