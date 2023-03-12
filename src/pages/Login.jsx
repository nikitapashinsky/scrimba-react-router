import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  return (
    <section className="flex h-full flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-lg font-medium">Log in to Ferdinand</h1>
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
          className="h-10 rounded-lg bg-neutral-800 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2"
        >
          Log in
        </button>
      </form>
    </section>
  );
}
