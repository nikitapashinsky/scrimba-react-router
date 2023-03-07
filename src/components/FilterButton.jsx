export default function FilterButton({ filter, handleClick, model }) {
  const modelLowerCase = model && model.toLowerCase();
  return (
    <button
      onClick={() => handleClick("model", modelLowerCase)}
      className={`
      ${
        filter === modelLowerCase
          ? "bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white"
          : "text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
      } rounded-md py-1 px-2`}
    >
      {model ? model : "All models"}
    </button>
  );
}
