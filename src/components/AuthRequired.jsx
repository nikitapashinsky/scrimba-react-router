import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequired() {
  const auth = { token: null };

  if (!auth.token) {
    return (
      <Navigate
        to="/login"
        state={{ message: "Please log in to view this page." }}
      />
    );
  }

  return <Outlet />;
}
