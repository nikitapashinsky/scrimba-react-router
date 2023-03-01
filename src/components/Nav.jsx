import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex w-full items-center justify-between gap-4 border-b border-neutral-300 p-4 px-6 text-sm">
      <Link to="/" className="text-lg font-bold tracking-tight">
        Ferdinand
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/" className={`text-neutral-900 hover:underline`}>
          Home
        </Link>
        <Link to="/models" className={`text-neutral-900 hover:underline`}>
          Models
        </Link>
        <Link to="/about" className="text-neutral-900 hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
