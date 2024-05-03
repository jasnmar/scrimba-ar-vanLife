import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Van/Vans/Vans";
import Layout from "./components/Layout/Layout";

import "./server";
import VanDetail from "./pages/Van/VanDetail/VanDetail";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Reviews from "./pages/Host/Reviews/Reviews";
import Income from "./pages/Host/Income/Income";
import HostLayout from "./components/HostLayout/HostLayout";
import HostVans from "./pages/Host/Vans/HostVans";
import HostVanDetails from "./pages/Host/Vans/HostVanDetails/HostVanDetails";
import HostVanLayout from "./components/HostVanLayout/HostVanLayout";
import HostVansPricing from "./pages/Host/Vans/HostVansPricing/HostVansPricing";
import HostVansPhotos from "./pages/Host/Vans/HostVansPhotos/HostVansPhotos";
import NotFound from "./pages/NotFound/NotFound";
/**
 * Challenge: Create a 404 page.
 * 
 * 1. Create a new component in the pages dir called "NotFound"
 * 2. Add the elements from the design. Style it if you want.
 * 3. Add a "catch-all" route as a nested route under the Route. 
 *    (It doesn't matter where amongst the children it is.)
 * 4. Use the NotFound component as the element for that catch-all route
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/>
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanLayout />}>
                <Route index element={<HostVanDetails />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhotos />} />
              </Route>
              <Route path="income" element={<Income />} />
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
