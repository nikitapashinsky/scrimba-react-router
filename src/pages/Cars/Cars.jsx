import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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

  const displayedCars = modelFilter
    ? cars.filter((car) => car.model.toLowerCase() === modelFilter)
    : cars;

  return (
    <>
      <main className="flex flex-col gap-12 scroll-smooth p-6 text-neutral-900">
        <div className="flex w-full flex-col gap-4">
          <h1 className="font-heading text-3xl font-bold">All models</h1>
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
