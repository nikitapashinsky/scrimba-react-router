import { useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";

function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Nav />
      <main className="flex flex-col items-center gap-8 p-6">
        <div className="grid grid-cols-2 gap-6 md:gap-12 xl:grid-cols-3">
          <img src="/718.webp" />
          <img src="/911.webp" />
          <img src="/panamera.webp" />
          <img src="/taycan-hero.webp" />
          <img src="/macan-hero.webp" />
          <img src="/cayenne-hero.webp" />
        </div>
        <Link
          to="/models"
          className="border border-neutral-300 py-4 px-8 font-medium text-neutral-900"
        >
          Explore all models
        </Link>
      </main>
    </>
  );
}

export default Home;
