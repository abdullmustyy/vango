import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

export default function VansFilters() {
  const { filterOptions } = useSelector((state) => state.vans);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = Array.from(searchParams.values());
  console.log(typeFilter);

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-8">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSearchParams((prevSearchParams) => {
                !prevSearchParams.has(`type${option.id}`)
                  ? prevSearchParams.append(
                      `type${option.id}`,
                      option.type.toLowerCase()
                    )
                  : prevSearchParams.delete(`type${option.id}`);
                return prevSearchParams;
              });
            }}
            className={`${
              typeFilter.includes(option.type.toLowerCase())
                ? option.typeBg
                : "bg-[#FFEAD0] hover:outline hover:outline-2 hover:outline-[#FFEAD0]"
            } text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition`}
          >
            {option.type}
          </button>
        ))}
      </div>
      {typeFilter.length > 0 && (
        <>
          <button
            onClick={() => {
              setSearchParams({});
            }}
            className="outline outline-[#FFEAD0] outline-2 py-2 px-6 rounded-md text-[#4D4D4D] hover:text-white text-base font-medium hover:bg-[#a61414] transition sm:block hidden"
          >
            Clear filters
          </button>
          <button
            onClick={() => {
              setSearchParams({});
            }}
            className="hover:outline outline-[#a61414] outline-2 p-2 rounded-full text-white text-base font-medium bg-[#a61414] transition sm:hidden block"
          >
            <FaXmark />
          </button>
        </>
      )}
    </div>
  );
}
