import { Link, ScrollRestoration } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-8 p-6 text-neutral-900">
        <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
          <Link
            to="/cars?model=718"
            className="flex flex-col items-center text-center"
          >
            <img src="/718-hero.webp" />
            <h3 className="font-heading text-lg font-bold">718</h3>
          </Link>
          <Link
            to="/cars?model=911"
            className="flex flex-col items-center text-center"
          >
            <img src="/911-hero.webp" />
            <h3 className="font-heading text-lg font-bold">911</h3>
          </Link>
          <Link
            to="/cars?model=panamera"
            className="flex flex-col items-center text-center"
          >
            <img src="/panamera-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Panamera</h3>
          </Link>
          <Link
            to="/cars?model=taycan"
            className="flex flex-col items-center text-center"
          >
            <img src="/taycan-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Taycan</h3>
          </Link>
          <Link
            to="/cars?model=macan"
            className="flex flex-col items-center text-center"
          >
            <img src="/macan-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Macan</h3>
          </Link>
          <Link
            to="/cars?model=cayenne"
            className="flex flex-col items-center text-center"
          >
            <img src="/cayenne-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Cayenne</h3>
          </Link>
        </div>
      </main>
      <ScrollRestoration />
    </>
  );
}

export default Home;
