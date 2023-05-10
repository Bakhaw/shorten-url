import { useRef, useState } from "react";

import { getShortenUrl } from "./api";
import { ShortenUrlApiResponse } from "@/types";

import Divider from "./components/Divider";
import Header from "./components/Header";
import Snackbar from "./components/Snackbar";

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<ShortenUrlApiResponse["data"] | null>(null);
  const [error, setError] = useState<ShortenUrlApiResponse["error"] | null>(
    null
  );

  async function handleSubmit() {
    if (!inputRef.current || !inputRef.current.value) return;

    const response = await getShortenUrl(inputRef.current.value);

    if (response.error) {
      setError(response.error);
      setData(null);
    } else {
      setError(null);
      setData(response.data);
    }
  }

  return (
    <main className="flex flex-col items-center h-screen">
      <Header />

      <div className="flex flex-col gap-16 w-96">
        <h1 className="text-2xl text-white text-center">URRL</h1>
        <div className="flex gap-4">
          <input
            className="flex-1"
            placeholder="Entrez une URL"
            type="text"
            ref={inputRef}
          />
          <button className="bg-yellow" onClick={handleSubmit}>
            Raccourcir
          </button>
        </div>

        <Divider />

        {data && (
          <Snackbar
            message={
              <>
                Voici le lien raccourci:{" "}
                <a href={data.shortenUrl} target="_blank">
                  {data.shortenUrl}
                </a>
              </>
            }
            type="success"
          />
        )}

        {error && <Snackbar message={error} type="error" />}
      </div>
    </main>
  );
}

export default Home;
