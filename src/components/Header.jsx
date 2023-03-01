import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-900/10 bg-white/95 bg-clip-padding p-4 px-6 text-sm backdrop-blur-md">
      <nav className="flex w-full items-center justify-between gap-4">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-neutral-900"
        >
          Ferdinand
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className={`text-neutral-900 hover:underline`}>
            Home
          </Link>
          <Link to="/cars" className={`text-neutral-900 hover:underline`}>
            Cars
          </Link>
          <Link to="/account" className={`text-neutral-900 hover:underline`}>
            Account
          </Link>
          <Link to="/about" className="text-neutral-900 hover:underline">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
