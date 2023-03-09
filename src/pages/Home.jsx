import { Link } from "react-router-dom";
const models = ["718", "911", "Panamera", "Taycan", "Macan", "Cayenne"];

function Home() {
  return (
    <section className="flex flex-col items-center gap-8 p-6">
      <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-12 xl:grid-cols-3">
        {models.map((model) => (
          <Link
            to={`/cars?model=${model.toLowerCase()}`}
            key={model}
            className="flex flex-col items-center text-center"
          >
            <img src={`/${model.toLowerCase()}-hero.webp`} />
            <h3 className="font-semibold">{model}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
