import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "Please log in to view this page." }}
        replace
      />
    );
  }

  return <Outlet />;
}
