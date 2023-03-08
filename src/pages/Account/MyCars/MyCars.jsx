import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyCars() {
  const [myCars, setMyCars] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/account/cars");
      const data = await response.json();
      setMyCars(data.cars);
    }

    getData();
  }, []);

  return (
    <section className="p-6">
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {myCars &&
          myCars.map((car) => {
            return (
              <Link to={car.id}>
                <img src={`/${car.id}.webp`} />
                <h3 className="font-heading text-lg font-bold">{car.name}</h3>
              </Link>
            );
          })}
      </div>
    </section>
  );
}
