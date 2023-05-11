import { useRef, useState } from "react";
import { Nunito } from "next/font/google";

import { getShortenUrl } from "./api";
import { ShortenUrlApiResponse } from "@/types";

import Divider from "./components/Divider";
import Header from "./components/Header";
import Snackbar from "./components/Snackbar";

const nunito = Nunito({ subsets: ["latin"] });

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
    <main className={`${nunito.className} flex flex-col items-center h-screen`}>
      <Header />

      <div className="flex flex-col gap-16 w-80 md:w-[600px]">
        <h1 className="text-2xl font-bold text-white text-center mt-9">URRL</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="w-full text-sm h-10 px-2 rounded outline-blue"
            placeholder="Entrez une URL"
            type="text"
            ref={inputRef}
          />
          <button
            className="h-10 px-8 rounded text-sm font-bold bg-yellow"
            onClick={handleSubmit}
          >
            Raccourcir
          </button>
        </div>

        <Divider />

        {data && (
          <Snackbar
            message={
              <>
                Voici le lien raccourci :&nbsp;
                <a className="underline" href={data.shortenUrl} target="_blank">
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
