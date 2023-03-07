export default function FilterButton({ filter, handleClick, model }) {
  return (
    <button
      onClick={() => handleClick("model", model ? model.toLowerCase() : model)}
      className={`
      ${
        filter === model ? "bg-neutral-800 text-white hover:text-white" : ""
      } rounded-md py-1 px-2 text-neutral-500 hover:text-neutral-900 `}
    >
      {model ? model : "All models"}
    </button>
  );
}
