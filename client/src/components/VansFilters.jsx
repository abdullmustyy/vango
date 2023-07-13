import { useContext, useEffect } from "react";
import { VansContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { filter, clearFilter, setFilterOptions } from "../state/vansSlice";

export default function VansFilters() {
  const vansData = useContext(VansContext);
  const { filters, isFiltered, filterOptions } = useSelector(
    (state) => state.vans
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const vansTypes = vansData.map(
      (van) => van.type
    );
    const filterOptions = vansTypes
      .sort()
      .filter((data, index, arr) => data !== arr[index - 1]);
    dispatch(setFilterOptions(filterOptions));
  }, [dispatch, vansData]);

  // console.log(filters, isFiltered, filterOptions);

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-8">
        {filters &&
          filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => dispatch(filter(filterOption))}
              className="bg-[#FFEAD0] hover:bg-inherit hover:outline hover:outline-2 hover:outline-[#FFEAD0] text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition"
            >
              {filterOption}
            </button>
          ))}
        {!isFiltered &&
          filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => dispatch(filter(option))}
              className="bg-[#FFEAD0] hover:bg-inherit hover:outline hover:outline-2 hover:outline-[#FFEAD0] text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition"
            >
              {option}
            </button>
          ))}
      </div>
      {isFiltered && (
        <button
          onClick={() => dispatch(clearFilter())}
          className="outline outline-[#FFEAD0] hover:outline-[#4D4D4D] outline-2 py-2 px-6 rounded-md text-[#4D4D4D] hover:text-white text-base font-medium hover:bg-[#a61414] self-end transition"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
