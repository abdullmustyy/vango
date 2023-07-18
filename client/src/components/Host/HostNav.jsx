import { Link } from "react-router-dom";

export default function HostNav() {
  return (
    <nav className="bg-[#FFF7ED] py-6 md:px-0 px-4">
      <div className="container mx-auto text-base text-[#161616] font-medium space-x-6">
        <Link to="/host" className="hover:text-black hover:font-semibold hover:underline transition">
          Dashboard
        </Link>
        <Link
          to="/host/income"
          className="hover:text-black hover:font-semibold hover:underline transition"
        >
          Income
        </Link>
        <Link to="/host/vans" className="hover:text-black hover:font-semibold hover:underline transition">
          Vans
        </Link>
        <Link
          to="/host/reviews"
          className="hover:text-black hover:font-semibold hover:underline transition"
        >
          Reviews
        </Link>
      </div>
    </nav>
  );
}
