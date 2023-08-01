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
        message: `To view the ${location.pathname.slice(
          1
        )} page, you have to login.`,
      }}
      replace
    />
  );
}
