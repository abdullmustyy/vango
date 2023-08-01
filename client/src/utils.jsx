import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn === "true" ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth"
      state={{
        from: location.pathname,
        message: `To view this page, you have to login.`,
      }}
      replace
    />
  );
}
