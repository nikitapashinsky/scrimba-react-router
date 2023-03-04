import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-900/10 bg-white/95 bg-clip-padding p-4 px-6 text-sm backdrop-blur-md">
      <nav className="flex w-full items-center justify-between gap-4">
        <Link
          to="/"
          className="font-heading text-lg font-bold text-neutral-900"
        >
          Ferdinand
        </Link>
        <div className="flex items-center gap-4 text-neutral-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            All models
          </NavLink>
          {/* <Link to="/about" className="text-neutral-900 hover:underline">
            About
          </Link> */}
          <div className="block h-4 w-px bg-neutral-200"></div>
          <NavLink
            to="/account"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            Account
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
