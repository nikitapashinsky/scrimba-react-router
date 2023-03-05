import { useEffect, useState } from "react";
import {
  useParams,
  Link,
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";

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
    <div className="p-6 text-neutral-900">
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
            </div>
          </div>
          <nav className="flex -translate-x-2 gap-2 text-xs text-neutral-500">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive
                  ? "cursor-default rounded-md bg-neutral-100 px-2 py-1 text-neutral-900"
                  : "rounded-md px-2 py-1 hover:text-neutral-900 hover:underline"
              }
              preventScrollReset={true}
            >
              Overview
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "cursor-default rounded-md bg-neutral-100 px-2 py-1 text-neutral-900"
                  : "rounded-md px-2 py-1 hover:text-neutral-900 hover:underline"
              }
              preventScrollReset={true}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive
                  ? "cursor-default rounded-md bg-neutral-100 px-2 py-1 text-neutral-900"
                  : "rounded-md px-2 py-1 hover:text-neutral-900 hover:underline"
              }
              preventScrollReset={true}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentCar }} />
        </div>
      )}
    </div>
  );
}
