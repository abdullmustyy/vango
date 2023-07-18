import { useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVansDetails } from "../state/vansSlice";

export default function VansDetailsPage() {
  const { vanDetails } = useSelector((state) => state.vans);
  const dispatch = useDispatch();
  const params = useParams();
  const vanId = params.id;

  useEffect(() => {
    const getVanDetail = async () => {
      const res = await fetch(`/api/vans/${vanId}`);
      const data = await res.json();
      data.vans = {
        ...data.vans,
        typeBg:
          data.vans.type === "simple"
            ? "[#E17654]"
            : data.vans.type === "luxury"
            ? "[#161616]"
            : "[#115E59]",
        type: data.vans.type.charAt(0).toUpperCase() + data.vans.type.slice(1),
      };
      dispatch(setVansDetails(data.vans));
    };
    getVanDetail();
  }, [dispatch, vanId]);

  return (
    <section className="container mx-auto text-[#201F1D] sm:px-0 px-4">
      <header className="my-8">
        <Link
          to="/vans"
          className="flex items-center space-x-4 text-base font-medium underline"
        >
          <FaArrowLeftLong />
          <h2>Back to all vans</h2>
        </Link>
      </header>
      <main className="my-10 grid sm:grid-cols-2 gap-10">
        <section className="my-8">
          <div
            className={`outline-${vanDetails.typeBg} rounded-full max-w-2xl outline outline-offset-1 outline-2`}
          >
            <img
              src={vanDetails.imageUrl}
              alt={vanDetails.name}
              className="w-fit rounded-full object-center"
            />
          </div>
        </section>
        <section className="sm:flex items-center">
          <div className="flex flex-col sm:items-start items-center space-y-6">
            <span
              className={`bg-${vanDetails.typeBg} px-8 py-2 text-[#FFEAD0] text-lg font-semibold w-fit rounded-md`}
            >
              {vanDetails.type}
            </span>
            <h2 className="text-[2.5rem] font-bold">{vanDetails.name}</h2>
            <span className="text-2xl font-bold">${vanDetails.price}/day</span>
            <p className="text-base font-medium break-words sm:text-start text-center">
              {vanDetails.description}
            </p>
            <button
              className={`bg-${vanDetails.typeBg} text-white text-lg font-bold w-1/2 py-3 rounded-lg opacity-100 hover:opacity-90`}
            >
              Rent this van
            </button>
          </div>
        </section>
      </main>
    </section>
  );
}
