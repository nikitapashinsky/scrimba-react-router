export default function Footer() {
  return (
    <footer className="sticky top-[100vh] mt-12 space-y-4 border-t border-neutral-100 px-6 py-12 text-sm">
      <div className="max-w-prose space-y-2">
        <h4 className="font-medium">Ferdinand</h4>
        <p className="max-w-prose text-xs leading-normal text-neutral-600">
          This is a student project for the{" "}
          <a
            href="https://scrimba.com/learn/reactrouter6"
            className="underline decoration-neutral-300 underline-offset-2"
          >
            Learn React Router 6
          </a>{" "}
          course, and is not affiliated with Porsche AG in any way.
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
