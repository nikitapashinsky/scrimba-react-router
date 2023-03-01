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
          <div className="flex flex-col gap-4">
            <img src={`/${car.img}.webp`} />
            <h1 className="text-3xl font-bold tracking-tight">{car.name}</h1>
            <p>{car.description}</p>
            <table className="table-auto text-left text-sm">
              <tbody className="divide-y divide-neutral-200">
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
        )}
      </main>
    </>
  );
}

export default ModelDetail;
