import { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

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
    <section className="p-6">
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
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl xl:text-6xl">
                  {currentCar.name}
                </h1>
              </div>
            </div>
          </div>
          <nav className="flex gap-3 text-xs text-neutral-500">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-900 underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
                  : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
              }
              preventScrollReset={true}
            >
              Overview
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-900 underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
                  : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
              }
              preventScrollReset={true}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-900 underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
                  : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
              }
              preventScrollReset={true}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentCar }} />
        </div>
      )}
    </section>
  );
}
