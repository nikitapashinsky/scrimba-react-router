export default function Footer() {
  return (
    <footer className="mt-12 space-y-6 border-t border-neutral-200 p-6">
      <div className="max-w-prose space-y-2">
        <h4 className="text-sm font-bold tracking-tight text-neutral-900">
          Ferdinand
        </h4>
        <p className="text-xs leading-normal text-neutral-500">
          This is a student project for the{" "}
          <a
            href="https://scrimba.com/learn/reactrouter6"
            className="underline"
          >
            Learn React Router 6
          </a>{" "}
          course by{" "}
          <a href="https://twitter.com/bobziroll" className="underline">
            Bob Ziroll
          </a>
          . <br />
          Ferdinand is not affiliated with Porsche AG.
        </p>
      </div>
      <p className="max-w-prose text-xs text-neutral-400">
        Porsche, the Porsche marque, 911, Carrera, Targa, Boxster, Cayenne,
        Cayman, Panamera, Tiptronic and Tequipment are registered trademarks of
        Dr. Ing. h.c. F. Porsche AG. The text, image, sound, and all other
        information published here is copyright by Dr. Ing. h.c. F. Porsche AG,
        Germany, except where indicated.
      </p>
    </footer>
  );
}
