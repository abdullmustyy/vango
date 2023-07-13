import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/VansPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./server";

export const VansContext = createContext();

export default function App() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    async function getVans() {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVansData(data.vans);
    }
    getVans();
  }, []);

  useEffect(() => {
    setVansData((prevVansData) =>
      prevVansData.map((data) => {
        const typeBg =
          data.type === "Simple"
            ? "bg-[#E17654]"
            : data.type === "Luxury"
            ? "bg-[#161616]"
            : "bg-[#115E59]";
        return {
          ...data,
          typeBg: typeBg,
          type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
        };
      })
    );
  }, [vansData]);

  return (
    <BrowserRouter>
      <NavBar />
      <VansContext.Provider value={vansData}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/vans" element={<VansPage />}></Route>
        </Routes>
      </VansContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}
