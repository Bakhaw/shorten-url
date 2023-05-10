import axios from "axios";

import { ShortenUrlApiResponse } from "@/types";
import config from "./config";

export async function getShortenUrl(
  url: string
): Promise<ShortenUrlApiResponse> {
  const baseUrl = `${config.API_BASE_URL}/shorturl`;
  const body = {
    url,
  };

  const { data } = await axios.post(baseUrl, body);
  return data;
}
