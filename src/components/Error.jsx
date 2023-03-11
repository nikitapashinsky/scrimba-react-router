import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="flex h-full max-w-sm flex-col justify-center gap-8 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-medium">{error.message}</h1>
        <p className="text-sm leading-normal text-neutral-500">
          Please refresh the page, or try again later.
        </p>
      </div>
      <pre className="text-xs uppercase text-neutral-500">
        <a
          href="https://httpwg.org/specs/rfc9110.html#status.400"
          rel="noreferrer"
          target="_blank"
          className="underline decoration-neutral-300 underline-offset-2"
        >
          Error {error.status} {error.statusText}
        </a>
      </pre>
    </section>
  );
}
