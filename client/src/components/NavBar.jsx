import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-[#FFF7ED] py-[2.16394rem] md:px-0 px-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link
            to="/"
            className="text-black text-[1.58456rem] font-black leading-[2.51694rem]"
          >
            #VANGO
          </Link>
        </div>
        <div className="flex space-x-6 items-center text-base font-semibold text-[#4D4D4D]">
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
    </nav>
  );
}
