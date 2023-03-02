import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/cars");
      const data = await response.json();
      setCars(data.cars);
    }

    getData();
  }, []);

  return (
    <>
      <main className="p-6 text-neutral-900">
        <h1 className="text-3xl font-bold tracking-tight">All models</h1>
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car) => {
            return (
              <div key={car.id}>
                <Link to={`/cars/${car.model}/${car.id}`}>
                  <img src={`/${car.img}.webp`} />
                  <h3>{car.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Cars;
