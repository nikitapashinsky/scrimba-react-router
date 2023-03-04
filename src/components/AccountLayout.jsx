import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <>
      <header className="flex w-full items-center justify-between gap-4 bg-neutral-100 p-6 py-3 text-xs">
        <h1 className="-translate-y-px text-sm font-medium tracking-tight">
          Account
        </h1>
        <nav className="flex gap-4 text-neutral-500">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="cars"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            My cars
          </NavLink>
          <NavLink
            to="concierge"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            Concierge
          </NavLink>
          <NavLink
            to="membership"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 hover:underline"
                : "hover:text-neutral-900 hover:underline"
            }
          >
            Membership
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
