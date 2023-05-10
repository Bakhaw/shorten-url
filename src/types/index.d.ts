export interface ShortenUrlApiResponse {
  data: {
    originalUrl: string;
    shortenUrl: string;
  } | null;
  error: string | null;
  success: boolean;
}
