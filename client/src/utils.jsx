import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  const location = useLocation();
  const isLoggedIn = false;

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth"
      state={{
        from: location,
        message: "You must be logged in to view this page",
      }}
      replace
    />
  );
}
