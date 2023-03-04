import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MyCar() {
  const params = useParams();
  const [currentCar, setCurrentCar] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/account/cars/${params.id}`);
      const data = await response.json();
      console.log(data.cars[0]);
      setCurrentCar(data.cars[0]);
    }

    getData();
  }, [params]);
  return (
    <>
      <main className="p-6 text-neutral-900">
        {currentCar && (
          <div className="flex flex-col gap-4 xl:flex-row xl:gap-24">
            <div className="xl:w-10/12">
              <img src={`/${currentCar.img}.webp`} className="" />
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-16 xl:flex-col xl:gap-6 xl:pt-12 xl:pr-12">
              <div className="flex flex-col gap-4 md:w-1/2 lg:w-full xl:w-full xl:max-w-3xl xl:gap-8">
                <div className="space-y-1">
                  <Link to=".." relative="path" className="group text-xs">
                    <span className="group-hover:underline">My Cars</span>{" "}
                    <span className="text-neutral-400">/</span>
                  </Link>
                  <h1 className="font-heading text-3xl font-bold md:text-4xl xl:text-6xl">
                    {currentCar.name}
                  </h1>
                </div>
                <p>{currentCar.description}</p>
              </div>
              <div className="w-auto md:w-1/2 lg:w-full">
                <table className="w-full table-auto text-left text-sm">
                  <tbody className="divide-y-[1px] divide-neutral-200">
                    <tr className="h-8">
                      <th scope="row">Body</th>
                      <td>{currentCar.body}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Seats</th>
                      <td>{currentCar.seats}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Drive</th>
                      <td>{currentCar.drive}</td>
                    </tr>
                    <tr className="h-8">
                      <th scope="row">Fuel Type</th>
                      <td>{currentCar.fuelType}</td>
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
