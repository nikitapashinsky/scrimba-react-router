export default function FilterButton({ filter, handleClick, model }) {
  const modelLowerCase = model && model.toLowerCase();
  return (
    <button
      onClick={() => handleClick("model", modelLowerCase)}
      className={`
      ${
        filter === modelLowerCase
          ? "border-neutral-300 bg-neutral-50"
          : "text-neutral-500 hover:text-neutral-600"
      } rounded-lg border border-neutral-200 py-1 px-2 font-normal transition-colors hover:border-neutral-300 hover:bg-neutral-50`}
    >
      {model ? model : "All models"}
    </button>
  );
}
