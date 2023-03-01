import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

function ModelDetail() {
  const params = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/models/${params.id}`);
      const data = await response.json();
      setCar(data.cars);
    }

    getData();
  }, [params]);

  return (
    <>
      <Nav />
      <main className="p-6">
        {car && (
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
            <div className="">
              <img src={`/${car.img}.webp`} className="" />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-16 xl:flex-col xl:gap-6 xl:pt-12 xl:pr-12">
              <div className="flex flex-col gap-4 md:w-1/2 lg:w-full xl:w-full xl:max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  {car.name}
                </h1>
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

export default ModelDetail;
