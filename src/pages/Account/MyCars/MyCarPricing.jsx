import { useOutletContext } from "react-router-dom";

export default function MyCarPricing() {
  const { currentCar } = useOutletContext();
  return <div>{currentCar.price}</div>;
}
