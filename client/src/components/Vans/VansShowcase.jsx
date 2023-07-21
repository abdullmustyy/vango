import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function VansShowcase() {
  const [searchParams] = useSearchParams();
  const typeFilter = Array.from(searchParams.values());
  const { vansData } = useSelector((state) => state.vans);
  const vansProcessedData =
    typeFilter.length > 0
      ? vansData.filter((data) => typeFilter.includes(data.type.toLowerCase()))
      : vansData;

  return (
    <div className="grid grid-cols-2 sm:gap-12 gap-6">
      {vansProcessedData.map((data) => (
        <Link to={`${data.id}`} key={data.id}>
          <div className="flex flex-col sm:space-y-4 space-y-2 shadow-inner">
            <div className="rounded-lg outline outline-[#4D4D4D] outline-offset-1 outline-[1px]">
              <img
                src={data.imageUrl}
                alt={data.name}
                className="w-fit rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <h3 className="sm:text-2xl text-lg font-semibold">{data.name}</h3>
              <span className="sm:text-2xl text-lg font-semibold">
                ${data.price}/day
              </span>
            </div>
            <span
              className={`${data.typeBg} text-[#FFEAD0] sm:text-base text-sm sm:font-bold font-semibold rounded-md sm:py-2 py-1 sm:px-6 px-4 w-fit`}
            >
              {data.type}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
