import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setHostVanDetails } from "../../state/hostSlice";
import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

export default function HostVanDetailLayout() {
  const { hostVanDetails } = useSelector((state) => state.host);
  const dispatch = useDispatch();
  const vanId = useParams().id;

  useEffect(() => {
    const getHostVanDetail = async () => {
      const res = await fetch(`/api/host/vans/${vanId}`);
      const data = await res.json();
      data.vans[0] = {
        ...data.vans[0],
        typeBg:
          data.vans[0].type === "simple"
            ? "[#E17654]"
            : data.vans[0].type === "luxury"
            ? "[#161616]"
            : "[#115E59]",
        type:
          data.vans[0].type.charAt(0).toUpperCase() +
          data.vans[0].type.slice(1),
      };
      dispatch(setHostVanDetails(data.vans[0]));
    };
    getHostVanDetail();
  }, [dispatch, vanId]);

  const activeStyle = {
    color: "black",
    textDecoration: "underline",
  };

  return (
    <section className="bg-[#FFF7ED] py-8 md:px-0 px-4">
      <header className="container mx-auto">
        <Link
          to=".."
          relative="path"
          className="flex items-center space-x-4 text-base font-medium underline w-fit"
        >
          <FaArrowLeftLong />
          <h2>Back to all vans</h2>
        </Link>
      </header>
      <main className="container mx-auto">
        <div className="bg-white p-8 mt-8 rounded-lg space-y-6">
          <div className="flex space-x-10">
            <div className="w-fit rounded-l-lg">
              <img
                src={hostVanDetails.imageUrl}
                alt={hostVanDetails.name}
                className="w-60 object-cover rounded-l-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <span
                className={`bg-${hostVanDetails.typeBg} px-4 py-2 text-[#FFEAD0] text-sm font-bold w-fit rounded-md`}
              >
                {hostVanDetails.type}
              </span>
              <h1 className="text-[#161616] text-[2rem] font-bold">
                {hostVanDetails.name}
              </h1>
              <span className="text-[#161616] text-base font-semibold">
                ${hostVanDetails.price}/day
              </span>
            </div>
          </div>
          <nav className="text-base text-[#161616] font-medium space-x-8">
            <NavLink
              end
              to="."
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="hover:text-black hover:font-semibold hover:underline transition"
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="hover:text-black hover:font-semibold hover:underline transition"
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="hover:text-black hover:font-semibold hover:underline transition"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </main>
    </section>
  );
}
