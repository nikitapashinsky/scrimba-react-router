import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";

function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);

  const modelFilter = searchParams.get("model");

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/cars");
      const data = await response.json();
      setCars(data.cars);
    }
    getData();
  }, []);

  function handleNewFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  const displayedCars = modelFilter
    ? cars.filter((car) => car.model.toLowerCase() === modelFilter)
    : cars;

  return (
    <>
      <main className="flex flex-col gap-12 scroll-smooth p-6 text-neutral-900">
        <div className="flex w-full flex-col gap-4">
          <h1 className="font-heading text-3xl font-bold">All models</h1>
          <nav className="flex -translate-x-2 gap-2 text-sm font-medium">
            <button
              onClick={() => handleNewFilter("model", null)}
              className={`${
                !modelFilter ? "bg-neutral-800 text-white hover:text-white" : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              All models
            </button>
            <button
              onClick={() => handleNewFilter("model", "718")}
              className={`${
                modelFilter === "718"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-lg py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              718
            </button>
            <button
              onClick={() => handleNewFilter("model", "911")}
              className={`${
                modelFilter === "911"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              911
            </button>
            <button
              onClick={() => handleNewFilter("model", "taycan")}
              className={`${
                modelFilter === "taycan"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              Taycan
            </button>
            <button
              onClick={() => handleNewFilter("model", "panamera")}
              className={`${
                modelFilter === "panamera"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              Panamera
            </button>
            <button
              onClick={() => handleNewFilter("model", "macan")}
              className={`${
                modelFilter === "macan"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              Macan
            </button>
            <button
              onClick={() => handleNewFilter("model", "cayenne")}
              className={`${
                modelFilter === "cayenne"
                  ? "bg-neutral-800 text-white hover:text-white"
                  : ""
              } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900`}
            >
              Cayenne
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-8 scroll-smooth md:grid md:grid-cols-2 xl:grid-cols-3">
          {displayedCars.map((car) => {
            return (
              <Link to={`/cars/${car.model}/${car.id}`} key={car.id}>
                <img src={`/${car.img}.webp`} />
                <h3 className="font-heading text-lg font-bold">{car.name}</h3>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Cars;
