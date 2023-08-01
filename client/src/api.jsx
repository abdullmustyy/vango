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
  const processedData = await data.vans.map((data) => {
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
  data.vans = await {
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
  data.vans = await {
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

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
