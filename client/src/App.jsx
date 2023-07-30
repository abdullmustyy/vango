import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
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
import AuthPage from "./pages/AuthPage";
import Error from "./components/Error";
// Loaders imports
import { vansPageLoader, vanDetailPageLoader } from "./loader/vansLoader";
import {
  hostVansPageLoader,
  hostVanDetailPageLoader,
} from "./loader/hostVansLoader";
// Layout components imports
import Layout from "./components/Layout/Layout";
import HostLayout from "./components/Layout/HostLayout";
import HostVanDetailLayout from "./components/Layout/HostVanDetailLayout";
// Server import
import "./server";
import ProtectedRoutes from "./utils";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="auth" element={<AuthPage />} />
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
        <Route element={<ProtectedRoutes />}>
          <Route path="host" element={<HostLayout />}>
            <Route
              index
              element={<Dashboard />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="income"
              element={<Income />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="reviews"
              element={<Reviews />}
              loader={async () => {
                return null;
              }}
            />
            <Route
              path="vans"
              element={<HostVans />}
              errorElement={<Error />}
              loader={async () => {
                return hostVansPageLoader();
              }}
            />
            <Route
              path="vans/:id"
              element={<HostVanDetailLayout />}
              errorElement={<Error />}
              loader={async ({ params }) => {
                return hostVanDetailPageLoader(params.id);
              }}
            >
              <Route
                index
                element={<HostVanDetail />}
                loader={async () => {
                  return null;
                }}
              />
              <Route
                path="pricing"
                element={<HostPricing />}
                loader={async () => {
                  return null;
                }}
              />
              <Route
                path="photos"
                element={<HostVanPhotos />}
                loader={async () => {
                  return null;
                }}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
