import { useOutletContext } from "react-router-dom";

export default function MyCarPhotos() {
  const { currentCar } = useOutletContext();
  return (
    <div>
      <img src={`/${currentCar.img}.webp`} className="w-48" />
    </div>
  );
}
