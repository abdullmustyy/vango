import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function VansFilters() {
  const { filterOptions } = useSelector((state) => state.vans);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-8">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSearchParams({ type: option.type.toLowerCase() });
            }}
            className={`${
              typeFilter === option.type.toLowerCase()
                ? option.typeBg
                : "bg-[#FFEAD0] hover:outline hover:outline-2 hover:outline-[#FFEAD0]"
            } text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition`}
          >
            {option.type}
          </button>
        ))}
      </div>
      {typeFilter && (
        <button
          onClick={() => {
            setSearchParams({});
          }}
          className="outline outline-[#FFEAD0] outline-2 py-2 px-6 rounded-md text-[#4D4D4D] hover:text-white text-base font-medium hover:bg-[#a61414] self-end transition"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
