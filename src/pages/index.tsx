import Divider from "./components/Divider";
import Header from "./components/Header";
import Snackbar from "./components/Snackbar";

function Home() {
  function handleClick() {
    // call api here
  }

  return (
    <main className="flex flex-col items-center h-screen">
      <Header />

      <div className="flex flex-col gap-16 w-96">
        <h1 className="text-2xl text-white text-center">URRL</h1>
        <div className="flex gap-4">
          <input type="text" placeholder="Entrez une URL" className="flex-1" />
          <button className="bg-yellow" onClick={handleClick}>
            Raccourcir
          </button>
        </div>

        <Divider />
        <Snackbar />
      </div>
    </main>
  );
}

export default Home;
