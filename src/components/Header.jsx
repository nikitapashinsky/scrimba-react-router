import { Link, NavLink } from "react-router-dom";

function Nav() {
  function fakeLogOut() {
    localStorage.removeItem("loggedIn");
  }

  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-900/5 bg-white/95 bg-clip-padding p-4 px-6 pr-5 text-sm backdrop-blur-md">
      <nav className="flex w-full items-center justify-between gap-4">
        <Link to="/" className="font-medium text-neutral-900">
          Ferdinand
        </Link>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 underline decoration-transparent underline-offset-2 transition-all hover:decoration-neutral-900/30"
                : "text-neutral-500 underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:decoration-neutral-900/30"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="cars"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 decoration-transparent underline-offset-2 transition-all hover:underline hover:decoration-neutral-900/30"
                : "text-neutral-500 decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            All models
          </NavLink>
          <div className="block h-4 w-px bg-neutral-200"></div>
          <div className="flex gap-4">
            <NavLink
              to="account"
              className={({ isActive }) =>
                isActive
                  ? "text-neutral-900 decoration-transparent underline-offset-2 transition-all hover:underline hover:decoration-neutral-900/30"
                  : "text-neutral-500 decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </NavLink>
            <button
              onClick={fakeLogOut}
              className="text-neutral-500 decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 decoration-transparent underline-offset-2 transition-all hover:underline hover:decoration-neutral-900/30"
                : "text-neutral-500 decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            Log in
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
