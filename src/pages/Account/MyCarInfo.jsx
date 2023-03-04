import { useOutletContext } from "react-router-dom";

export default function MyCarInfo() {
  const { currentCar } = useOutletContext();

  return (
    <div className="w-auto space-y-8 md:w-1/2 lg:w-full">
      <p>{currentCar.description}</p>
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
  );
}
