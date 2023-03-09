import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function Car() {
  const params = useParams();
  const [car, setCar] = useState(null);
  const location = useLocation();
  const filter = location.state && location.state.filter;
  console.log(location);

  const path = filter ? `..?${filter}` : "..";
  const backBtnText =
    car && filter ? `Back to ${car.model}` : `Back to all models`;

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
      <section className="p-6">
        {car && (
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
            <Link
              to={path}
              relative="path"
              className="absolute flex -translate-x-2 gap-2 self-start rounded-md px-2 py-1 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              <span>←</span> <span>{backBtnText}</span>
            </Link>
            <div className="xl:w-10/12">
              <img src={`/${car.img}.webp`} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex gap-1 text-xs text-neutral-600">
                  <Link
                    to=".."
                    relative="path"
                    className="underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
                  >
                    All models{" "}
                  </Link>
                  <span className="cursor-default text-neutral-300">/</span>
                  <Link
                    to={`..?model=${car.model.toLowerCase()}`}
                    relative="path"
                    className="underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
                  >
                    {car.model}{" "}
                  </Link>
                  <span className="cursor-default text-xs text-neutral-300">
                    /
                  </span>
                </div>
                <h1 className="text-3xl font-bold md:text-4xl xl:text-6xl">
                  {car.name}
                </h1>
              </div>
              <p>{car.description}</p>
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
      </section>
    </>
  );
}

export default Car;
