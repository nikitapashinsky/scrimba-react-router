import { useState } from "react";
import {
  useLocation,
  useNavigate,
  Form,
  useActionData,
} from "react-router-dom";
import { loginUser } from "../api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  localStorage.setItem("loggedIn", true);

  return data;
}

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  // Receive data from action
  const data = useActionData();
  // Send the user to the page they were trying to access
  const from = location.state?.from?.pathname || "/account";

  if (data?.token) {
    navigate(from, { replace: true });
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
        <Form
          action="/login"
          method="post"
          className="flex w-full max-w-xs flex-col gap-3"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address…"
            className="h-10 rounded-lg border-neutral-300 text-sm placeholder-neutral-400 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-100"
          />
          <input
            type="password"
            name="password"
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
        </Form>
      </section>
    </>
  );
}
