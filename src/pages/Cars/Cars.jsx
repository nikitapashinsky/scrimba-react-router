import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import FilterButton from "../../components/FilterButton";

function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const modelFilter = searchParams.get("model");

  const models = [...new Set(cars.map((car) => car.model))];

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
    <section className="flex flex-col gap-12 p-6">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-xl font-medium">Models</h1>
        <nav className="flex flex-wrap gap-2 text-sm font-medium">
          <FilterButton
            filter={modelFilter}
            handleClick={handleNewFilter}
            model={null}
          />
          {models.map((model) => (
            <FilterButton
              key={model}
              filter={modelFilter}
              handleClick={handleNewFilter}
              model={model}
            />
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {displayedCars.map((car) => {
          return (
            <Link
              to={car.id}
              state={{ filter: searchParams.toString() }}
              key={car.id}
            >
              <img src={`/${car.img}.webp`} />
              <h3 className="font-semibold">{car.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Cars;
