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
    const buttonStyle =
      data.type === "simple"
        ? "bg-[#E17654] text-white hover:outline hover:outline-2 hover:outline-[#E17654]"
        : data.type === "luxury"
        ? "bg-[#161616] text-white hover:outline hover:outline-2 hover:outline-[#161616]"
        : "bg-[#115E59] text-white hover:outline hover:outline-2 hover:outline-[#115E59]";
    return {
      ...data,
      buttonStyle: buttonStyle,
      type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
    };
  });
  return processedData;
}

export async function getVanDetail(vanId) {
  const res = await fetch(`/api/vans/${vanId}`);
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
  data.vans = {
    ...data.vans,
    typeBg:
      data.vans.type === "simple"
        ? "[#E17654]"
        : data.vans.type === "luxury"
        ? "[#161616]"
        : "[#115E59]",
    type: data.vans.type.charAt(0).toUpperCase() + data.vans.type.slice(1),
  };
  return data.vans;
}

export async function getHostVans() {
  const res = await fetch("/api/host/vans");
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
  return data.vans;
}

export async function getHostVanDetail(vanId) {
  const res = await fetch(`/api/host/vans/${vanId}`);
  const data = await res.json();
  data.vans[0] = {
    ...data.vans[0],
    typeBg:
      data.vans[0].type === "simple"
        ? "[#E17654]"
        : data.vans[0].type === "luxury"
        ? "[#161616]"
        : "[#115E59]",
    type:
      data.vans[0].type.charAt(0).toUpperCase() + data.vans[0].type.slice(1),
  };
  return data.vans[0];
}
