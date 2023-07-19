import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/Vans/VansPage";
import VansDetailsPage from "./pages/Vans/VansDetailsPage";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/Layout/Layout";
import HostLayout from "./components/Layout/HostLayout";

import "./server";

export const VansContext = createContext();

export default function App() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    async function getVans() {
      const res = await fetch("/api/vans");
      const data = await res.json();
      const processedData = data.vans.map((data) => {
        const typeBg =
          data.type === "simple"
            ? "bg-[#E17654]"
            : data.type === "luxury"
            ? "bg-[#161616]"
            : "bg-[#115E59]";
        return {
          ...data,
          typeBg: typeBg,
          type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
        };
      });
      setVansData(processedData);
    }
    getVans();
  }, []);

  return (
    <BrowserRouter>
      <VansContext.Provider value={vansData}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="vans" element={<VansPage />} />
            <Route path="vans/:id" element={<VansDetailsPage />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </VansContext.Provider>
    </BrowserRouter>
  );
}
