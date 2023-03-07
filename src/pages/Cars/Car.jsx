import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Car() {
  const params = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/cars/${params.id}`);
      const data = await response.json();
      console.log(data);
      setCar(data.cars);
    }

    getData();
  }, [params]);

  return (
    <>
      <main className="p-6 text-neutral-900">
        {car && (
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
            <div className="xl:w-10/12">
              <img src={`/${car.img}.webp`} className="" />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-16 xl:flex-col xl:gap-6 xl:pt-12 xl:pr-12">
              <div className="flex flex-col gap-4 md:w-1/2 lg:w-full xl:w-full xl:max-w-3xl xl:gap-8">
                <div className="space-y-1">
                  <Link
                    to={`/cars/?model=${car.model.toLowerCase()}`}
                    className="group text-xs"
                  >
                    <span className="group-hover:underline">{car.model}</span>{" "}
                    <span className="text-neutral-400">/</span>
                  </Link>
                  <h1 className="font-heading text-3xl font-bold md:text-4xl xl:text-6xl">
                    {car.name}
                  </h1>
                </div>
                <p>{car.description}</p>
              </div>
              <div className="w-auto md:w-1/2 lg:w-full">
                <table className="w-full table-auto text-left text-sm">
                  <tbody className="divide-y-[1px] divide-neutral-200">
                    <tr className="h-8">
                      <th scope="row">Body</th>
                      <td>{car.body}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Seats</th>
                      <td>{car.seats}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Drive</th>
                      <td>{car.drive}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Fuel Type</th>
                      <td>{car.fuelType}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Car;
