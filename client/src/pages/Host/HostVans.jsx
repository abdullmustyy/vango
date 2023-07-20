import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HostVans() {
  const { hostVansData } = useSelector((state) => state.host);

  return (
    <section className="text-[#161616] bg-[#FFF7ED] pb-8 md:px-0 px-4">
      <div className="container mx-auto">
        <h2 className="text-lg font-bold">Your listed vans</h2>
        <p className="text-lg font-light">
          Click on a van to see more details about it.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 pt-6">
          {hostVansData.map((vanData) => (
            <Link to={`${vanData.id}`} key={vanData.id}>
              <div className="flex flex-col space-y-2">
                <h1 className="text-lg font-semibold">{vanData.name}</h1>
                <div className="rounded-tr-[3rem] rounded-bl-[3rem] outline outline-offset-2 outline-[1px]">
                  <img
                    src={vanData.imageUrl}
                    alt={vanData.name}
                    className="rounded-tr-[3rem] rounded-bl-[3rem]"
                  />
                </div>
                <span className="text-base font-medium self-end">
                  ${vanData.price}/day
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
