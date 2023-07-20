import { useSelector } from "react-redux";

export default function HostPricing() {
  const { hostVanDetails } = useSelector((state) => state.host);

  return (
    <section>
      <span className="text-[#161616] text-2xl font-semibold">${hostVanDetails.price}/day</span>
    </section>
  );
}
