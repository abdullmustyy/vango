import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterOptions } from "../../state/vansSlice";
import VansFilters from "../../components/Vans/VansFilters";
import VansShowcase from "../../components/Vans/VansShowcase";

export default function VansPage() {
  const { vansData } = useSelector((state) => state.vans);
  const dispatch = useDispatch();

  useEffect(() => {
    const vansTypes = vansData.map((van, index) => ({
      id: index,
      type: van.type,
      typeBg: van.typeBg,
    }));
    const options = vansTypes
      .sort((a, b) => {
        const typeA = a.type.toUpperCase();
        const typeB = b.type.toUpperCase();
        return typeA < typeB ? -1 : typeA > typeB ? 1 : 0;
      })
      .filter((data, index, arr) => data.type !== arr[index - 1]?.type);
    dispatch(setFilterOptions(options));
  }, [dispatch, vansData]);

  return (
    <section className="container mx-auto my-12 md:px-0 px-4 text-[#161616]">
      <header className="mb-12 space-y-4">
        <h1 className="text-[2rem] font-semibold">Explore our van options</h1>
        <p className="text-lg font-light">
          Pick a van you&apos;ll like to rent by clicking on it.
        </p>
        <VansFilters />
      </header>
      <main>
        <VansShowcase />
      </main>
    </section>
  );
}
