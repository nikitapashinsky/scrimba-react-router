import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex h-full max-w-sm flex-col items-center justify-center gap-8 p-6 text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium">This page doesn't exist.</h1>
        <p className="text-sm leading-normal text-neutral-500">
          Please check that the address you entered is correct. If you're sure
          this page should exist, please try again later.
        </p>
      </div>
      <Link
        to="/"
        className="rounded-lg bg-neutral-50 px-4 py-2 text-sm text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
      >
        Go to home page
      </Link>
    </section>
  );
}
