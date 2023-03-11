import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getData } from "../../api";
import FilterButton from "../../components/FilterButton";

export function loader() {
  return getData();
}

function Cars() {
  const cars = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const modelFilter = searchParams.get("model");

  const models = [...new Set(cars?.map((car) => car.model))];

  const displayedCars = modelFilter
    ? cars.filter((car) => car.model.toLowerCase() === modelFilter)
    : cars;

  function handleNewFilter(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  // if (error) {
  //   return (
  //     <section className="flex h-full flex-col items-center justify-center p-6">
  //       <p className="max-w-sm text-center text-sm leading-normal text-neutral-500">
  //         An error occurred while loading data. Please try refreshing the page,
  //         or try again later.
  //       </p>
  //     </section>
  //   );
  // }

  return (
    <section className="flex flex-col gap-12 p-6">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-xl font-medium">Models</h1>
        <nav className="flex flex-wrap gap-2 text-sm font-medium">
          <FilterButton
            filter={modelFilter}
            handleClick={handleNewFilter}
            model={null}
          />
          {models?.map((model) => (
            <FilterButton
              key={model}
              filter={modelFilter}
              handleClick={handleNewFilter}
              model={model}
            />
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {displayedCars?.map((car) => {
          return (
            <Link
              to={car.id}
              state={{ filter: searchParams.toString(), model: modelFilter }}
              key={car.id}
            >
              <img src={`/${car.img}.webp`} />
              <h3 className="font-semibold">{car.name}</h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Cars;
