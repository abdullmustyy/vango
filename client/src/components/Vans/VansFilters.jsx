import { useSelector, useDispatch } from "react-redux";
import { setIsFiltered, clearFilter } from "../../state/vansSlice";
import { Link } from "react-router-dom";

export default function VansFilters() {
  const { isFiltered, filterOptions } = useSelector((state) => state.vans);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-8">
        {filterOptions.map((option) => (
          <Link
            key={option.id}
            to={`?type=${option.type.toLowerCase()}`}
            onClick={() => dispatch(setIsFiltered())}
            className="bg-[#FFEAD0] hover:bg-inherit hover:outline hover:outline-2 hover:outline-[#FFEAD0] text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition"
          >
            {option.type}
          </Link>
        ))}
      </div>
      {isFiltered && (
        <Link
          to="."
          onClick={() => dispatch(clearFilter())}
          className="outline outline-[#FFEAD0] hover:outline-[#4D4D4D] outline-2 py-2 px-6 rounded-md text-[#4D4D4D] hover:text-white text-base font-medium hover:bg-[#a61414] self-end transition"
        >
          Clear filters
        </Link>
      )}
    </div>
  );
}
