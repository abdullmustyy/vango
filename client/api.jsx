import { json } from "react-router-dom";

export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw json(
      {
        message: "Failed to fetch vans",
        statusText: res.statusText,
      },
      res.status
    );
  }
  const data = await res.json();
  const processedData = data.vans.map((data) => {
    const typeBg =
      data.type === "simple"
        ? "bg-[#E17654] text-white hover:outline hover:outline-2 hover:outline-[#E17654]"
        : data.type === "luxury"
        ? "bg-[#161616] text-white hover:outline hover:outline-2 hover:outline-[#161616]"
        : "bg-[#115E59] text-white hover:outline hover:outline-2 hover:outline-[#115E59]";
    return {
      ...data,
      typeBg: typeBg,
      type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
    };
  });
  return processedData;
}
