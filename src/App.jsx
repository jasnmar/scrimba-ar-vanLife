import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Van/Vans/Vans";
import vansLoader from "./pages/Van/Vans/Vans-loader";
import Layout from "./components/Layout/Layout";
import Error from "./components/Error/Error";
import VanDetail from "./pages/Van/VanDetail/VanDetail";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";
import Income from "./pages/Host/Income/Income";
import HostLayout from "./components/HostLayout/HostLayout";
import HostVans from "./pages/Host/Vans/HostVans";
import HostVansLoader from "./pages/Host/Vans/HostVans-loader";
import HostVanDetails from "./pages/Host/Vans/HostVanDetails/HostVanDetails";
import HostVanLayout from "./components/HostVanLayout/HostVanLayout";
import HostVanLayoutLoader from "./components/HostVanLayout/HostVanLayout-loader";
import HostVansPricing from "./pages/Host/Vans/HostVansPricing/HostVansPricing";
import HostVansPhotos from "./pages/Host/Vans/HostVansPhotos/HostVansPhotos";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import LoginAction from "./pages/Login/LoginAction";
import vanDetailLoader from "./pages/Van/VanDetail/VanDetail-loader";
import requireAuth from "./utils/utils";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error />} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" loader={vansLoader} element={<Vans />} />
      <Route path="vans/:id" loader={vanDetailLoader} element={<VanDetail />} />
      <Route path="login" action={LoginAction} element={<Login />} />
      <Route
        path="host"
        element={<HostLayout />}
        loader={async () => {
          return await requireAuth()
        }}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return await requireAuth();
          }}
        />
        <Route 
          path="vans" 
          element={<HostVans />} 
          loader={HostVansLoader} 
        />
        <Route
          path="vans/:id"
          element={<HostVanLayout />}
          loader={HostVanLayoutLoader}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="photos"
            element={<HostVansPhotos />}
            loader={async () => {
              return await requireAuth();
            }}
          />
        </Route>
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return await requireAuth();
          }}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
