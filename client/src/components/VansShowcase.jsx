import { useContext } from "react";
import { useSelector } from "react-redux";
import { VansContext } from "../App";

export default function VansShowcase() {
  const { filters, isFiltered } = useSelector((state) => state.vans);
  const vansData = useContext(VansContext);
  const vansProcessedData = !isFiltered
    ? vansData
    : vansData.filter((data) => filters.includes(data.type));

  //   const styles = {
  //     backgroundColor: "",
  //   };

  return (
    <div className="grid grid-cols-2 sm:gap-12 gap-6">
      {vansProcessedData.map((data) => (
        <div key={data.id} className="flex flex-col sm:space-y-4 space-y-2">
          <div className="rounded-lg outline outline-[#4D4D4D] outline-offset-1 outline-2">
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-fit rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <h3 className="sm:text-2xl text-lg font-semibold">{data.name}</h3>
            <span className="sm:text-2xl text-lg font-semibold">${data.price}/day</span>
          </div>
          <span
            className={`${data.typeBg} text-[#FFEAD0] sm:text-base text-sm sm:font-bold font-semibold rounded-md sm:py-2 py-1 sm:px-6 px-4 w-fit`}
          >
            {data.type}
          </span>
        </div>
      ))}
    </div>
  );
}
