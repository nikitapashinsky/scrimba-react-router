import { useOutletContext } from "react-router-dom";

export default function MyCarPhotos() {
  const { currentCar } = useOutletContext();
  return <div>my car photos</div>;
}
