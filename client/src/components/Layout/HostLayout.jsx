import { Outlet } from "react-router-dom";
import HostNav from "../Host/HostNav";

export default function HostLayout() {
  return (
    <>
      <HostNav />
      <Outlet />
    </>
  );
}
