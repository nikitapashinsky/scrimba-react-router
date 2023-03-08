import { NavLink, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <section>
      <div className="flex flex-col gap-4 p-6">
        <h1 className="text-xl font-medium">Account</h1>
        <nav className="flex gap-4 text-sm text-neutral-500">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 underline decoration-transparent underline-offset-2 hover:underline hover:decoration-neutral-900/30"
                : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="cars"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 underline decoration-transparent underline-offset-2 hover:underline hover:decoration-neutral-900/30"
                : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            My cars
          </NavLink>
          <NavLink
            to="concierge"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 underline decoration-transparent underline-offset-2 hover:underline hover:decoration-neutral-900/30"
                : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            Concierge
          </NavLink>
          <NavLink
            to="membership"
            className={({ isActive }) =>
              isActive
                ? "text-neutral-900 underline decoration-transparent underline-offset-2 hover:underline hover:decoration-neutral-900/30"
                : "underline decoration-transparent underline-offset-2 transition-all hover:text-neutral-900 hover:underline hover:decoration-neutral-900/30"
            }
          >
            Membership
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </section>
  );
}
