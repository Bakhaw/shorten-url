export interface ShortenUrlApiResponse {
  data: {
    originalUrl: string;
    shortenUrl: string;
  };
  error: boolean;
}
