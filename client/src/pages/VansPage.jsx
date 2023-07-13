import VansFilters from "../components/VansFilters";
import VansShowcase from "../components/vansShowcase";

export default function VansPage() {
  return (
    <section className="container mx-auto my-12 md:px-0 px-4 text-[#161616]">
      <header className="mb-12 space-y-4">
        <h1 className="text-[2rem] font-semibold">Explore our van options</h1>
        <VansFilters />
      </header>
      <main>
        <VansShowcase />
      </main>
    </section>
  );
}
