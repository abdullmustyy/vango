import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = {
    color: "black",
    textDecoration: "underline",
  };

  return (
    <nav className="bg-[#FFF7ED] py-[2.16394rem] md:px-0 px-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <NavLink
            to="/"
            className="text-black text-[1.58456rem] font-black leading-[2.51694rem]"
          >
            #VANGO
          </NavLink>
        </div>
        <div className="flex space-x-6 items-center text-base font-semibold text-[#4D4D4D]">
          <NavLink
            to="/host"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="hover:underline"
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="hover:underline"
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="hover:underline"
          >
            Vans
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
