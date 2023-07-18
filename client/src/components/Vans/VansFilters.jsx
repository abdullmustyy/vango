import { useContext, useEffect } from "react";
import { VansContext } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { filter, clearFilter, setFilterOptions } from "../../state/vansSlice";

export default function VansFilters() {
  const vansData = useContext(VansContext);
  const { filters, isFiltered, filterOptions } = useSelector(
    (state) => state.vans
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const vansTypes = vansData.map((van, index) => ({
      id: index,
      type: van.type,
      typeBg: van.typeBg,
    }));
    const filterOptions = vansTypes
      .sort((a, b) => {
        const typeA = a.type.toUpperCase();
        const typeB = b.type.toUpperCase();
        return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
      })
      .filter((data, index, arr) => data.type !== arr[index - 1]?.type);
    dispatch(setFilterOptions(filterOptions));
  }, [dispatch, vansData]);

  return (
    <div className="flex items-center justify-between">
      <div className="space-x-8">
        {filters &&
          filters.map((filterOption) => {
            const styles = {
              color: isFiltered ? "#FFEAD0" : "#4D4D4D",
            };

            return (
              <button
                key={filterOption.id}
                onClick={() => dispatch(filter(filterOption))}
                style={styles}
                className={`${
                  isFiltered ? filterOption.typeBg : "bg-[#FFEAD0]"
                } hover:bg-inherit hover:outline hover:outline-2 hover:outline-[#FFEAD0] text-base hover:text-[#4D4D4D] font-medium rounded-md py-2 px-6 transition`}
              >
                {filterOption.type}
              </button>
            );
          })}
        {!isFiltered &&
          filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => dispatch(filter(option))}
              className="bg-[#FFEAD0] hover:bg-inherit hover:outline hover:outline-2 hover:outline-[#FFEAD0] text-[#4D4D4D] text-base font-medium rounded-md py-2 px-6 transition"
            >
              {option.type}
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
