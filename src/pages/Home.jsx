import { Link } from "react-router-dom";
const models = ["718", "911", "Panamera", "Taycan", "Macan", "Cayenne"];

function Home() {
  return (
    <>
      <main className="flex flex-col items-center gap-8 p-6 text-neutral-900">
        <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
          {models.map((model) => (
            <Link
              to={`/cars?model=${model.toLowerCase()}`}
              className="flex flex-col items-center text-center"
            >
              <img src={`/${model.toLowerCase()}-hero.webp`} />
              <h3 className="font-heading text-lg font-bold">{model}</h3>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
