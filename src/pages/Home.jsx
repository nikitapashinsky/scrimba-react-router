import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-8 p-6 text-neutral-900">
        <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
          <Link
            to="/cars/718"
            className="flex flex-col items-center text-center"
          >
            <img src="/718-hero.webp" />
            <h3 className="font-heading text-lg font-bold">718</h3>
          </Link>
          <Link
            to="/cars/911"
            className="flex flex-col items-center text-center"
          >
            <img src="/911-hero.webp" />
            <h3 className="font-heading text-lg font-bold">911</h3>
          </Link>
          <Link
            to="/cars/Panamera"
            className="flex flex-col items-center text-center"
          >
            <img src="/panamera-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Panamera</h3>
          </Link>
          <Link
            to="/cars/Taycan"
            className="flex flex-col items-center text-center"
          >
            <img src="/taycan-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Taycan</h3>
          </Link>
          <Link
            to="/cars/Macan"
            className="flex flex-col items-center text-center"
          >
            <img src="/macan-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Macan</h3>
          </Link>
          <Link
            to="/cars/Cayenne"
            className="flex flex-col items-center text-center"
          >
            <img src="/cayenne-hero.webp" />
            <h3 className="font-heading text-lg font-bold">Cayenne</h3>
          </Link>
        </div>
        {/* <Link
          to="/models"
          className="border border-neutral-300 py-4 px-8 font-medium text-neutral-900"
        >
          Explore all models
        </Link> */}
      </main>
    </>
  );
}

export default Home;
