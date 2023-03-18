import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        localStorage.setItem("loggedIn", true);
        navigate("/account", { replace: true });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setStatus("idle"));
  }

  return (
    <>
      {location.state?.message && (
        <div className="flex w-full items-center justify-start gap-4 bg-neutral-50 px-6 py-3 text-neutral-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p className="text-xs">{location.state.message}</p>
        </div>
      )}
      <section className="flex h-full flex-col items-center justify-center gap-6 p-6">
        <h1 className="text-lg font-medium">Log in to Ferdinand</h1>
        {error && <p className="text-sm text-red-700">{error.message}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xs flex-col gap-3"
        >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={loginFormData.email}
            placeholder="Email address…"
            className="h-10 rounded-lg border-neutral-300 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={loginFormData.password}
            placeholder="Password…"
            className="h-10 rounded-lg border-neutral-300 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="h-10 rounded-lg bg-neutral-800 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:bg-neutral-200"
          >
            Log in
          </button>
        </form>
      </section>
    </>
  );
}
