import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <main className="flex flex-col items-center gap-8 p-6">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
          <div>
            <img src="/718.webp" />
            <h3 className="font-bold">Explore 718</h3>
          </div>
          <div>
            <img src="/911.webp" />
            <h3 className="font-bold">Explore 911</h3>
          </div>
          <div>
            <img src="/panamera.webp" />
            <h3 className="font-bold">Explore Panamera</h3>
          </div>
          <div>
            <img src="/taycan-hero.webp" />
            <h3 className="font-bold">Explore Taycan</h3>
          </div>
          <div>
            <img src="/macan-hero.webp" />
            <h3 className="font-bold">Explore Macan</h3>
          </div>
          <div>
            <img src="/cayenne-hero.webp" />
            <h3 className="font-bold">Explore Cayenne</h3>
          </div>
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
