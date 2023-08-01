import { Suspense } from "react";
import { Link, NavLink, Outlet, useLoaderData, Await } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function HostVanDetailLayout() {
  const hostVanDetailsPromise = useLoaderData();

  const activeStyle = {
    color: "black",
    textDecoration: "underline",
  };

  return (
    <section className="bg-[#FFF7ED] py-8 md:px-0 px-4">
      <header className="container mx-auto">
        <Link
          to="../vans"
          // relative="path"
          className="flex items-center space-x-4 text-base font-medium underline w-fit"
        >
          <FaArrowLeftLong />
          <h2>Back to all vans</h2>
        </Link>
      </header>
      <main className="container mx-auto">
        <Suspense
          fallback={
            <p className="text-xl font-bold mt-12">
              Loading host&apos;s vans details ...
            </p>
          }
        >
          <Await resolve={hostVanDetailsPromise.hostVanDetails}>
            {(hostVanDetails) => (
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
                <Outlet context={{ hostVanDetails }} />
              </div>
            )}
          </Await>
        </Suspense>
      </main>
    </section>
  );
}
