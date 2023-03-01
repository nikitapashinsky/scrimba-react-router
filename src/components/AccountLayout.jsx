import { Link, Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <>
      <header className="flex w-full flex-col gap-4 p-6 text-sm">
        <h1 className="text-3xl font-bold tracking-tight">Account</h1>
        <nav className="flex w-full gap-4">
          <Link to="/account">Dashboard</Link>
          <Link to="/account/revenue">Revenue</Link>
          <Link to="/account/reviews">Reviews</Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
