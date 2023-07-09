export default function Hero() {
  return (
    <section className="hero w-screen h-screen grid place-content-center">
      <div className="text-white break-words flex flex-col space-y-10 px-20">
        <h1 className="text-6xl font-extrabold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-lg font-thin">
          Add adventure to your life by joining the #vango movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <a href="" className="bg-[#FF8C38] hover:bg-[#fc9951] text-lg font-bold w-96 py-4 text-center rounded-lg transition">
          Find your van
        </a>
      </div>
    </section>
  );
}
