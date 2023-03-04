import { useOutletContext } from "react-router-dom";

export default function MyCarPricing() {
  const { currentCar } = useOutletContext();
  return <div>my car pricing</div>;
}
