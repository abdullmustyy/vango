import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHostVansData } from "./state/hostSlice";
// Pages imports
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import VansPage from "./pages/Vans/VansPage";
import VansDetailsPage from "./pages/Vans/VansDetailsPage";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostPricing from "./pages/Host/HostPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFoundPage from "./pages/NotFoundPage";
import AuthForm from "./pages/AuthForm";
import Error from "./components/Error";
// Loaders imports
import { vansPageLoader, vanDetailPageLoader } from "./pages/Vans/vansLoader";
// Layout components imports
import Layout from "./components/Layout/Layout";
import HostLayout from "./components/Layout/HostLayout";
import HostVanDetailLayout from "./components/Layout/HostVanDetailLayout";
// Server import
import "./server";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getHostVans() {
      const res = await fetch("/api/host/vans");
      const data = await res.json();
      dispatch(setHostVansData(data.vans));
    }

    getHostVans();
  }, [dispatch]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="auth" element={<AuthForm />} />
        <Route
          path="vans"
          element={<VansPage />}
          errorElement={<Error />}
          loader={vansPageLoader}
        />
        <Route
          path="vans/:id"
          element={<VansDetailsPage />}
          loader={({ params }) => vanDetailPageLoader(params.id)}
        />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetailLayout />}>
            <Route index element={<HostVanDetail />} />
            <Route path="pricing" element={<HostPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
