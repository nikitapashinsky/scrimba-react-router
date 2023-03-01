import { useEffect } from "react";

import Nav from "../components/Nav";
import { cars } from "../data";

function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => {
            return (
              <div key={car.id} className="flex flex-col p-6">
                <img src={`${car.id}.jpg`} />
                <div>
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-sm">{car.years}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
