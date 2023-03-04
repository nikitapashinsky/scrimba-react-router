import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Model() {
  const params = useParams();
  const [cars, setCars] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/cars`);
      const data = await response.json();
      setCars(data.cars.filter((car) => car.model === params.model));
    }

    getData();
  }, [params]);

  return (
    <main className="p-6 text-neutral-900">
      {cars && (
        <>
          <h1 className="font-heading text-3xl font-bold">{cars[0].model}</h1>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => {
              return (
                <div key={car.id}>
                  <Link to={`/cars/${car.model}/${car.id}`}>
                    <img src={`/${car.img}.webp`} />
                    <h3 className="font-heading text-lg font-bold tracking-wide">
                      {car.name}
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}
