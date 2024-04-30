import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import Nav from "./Nav";

import "./server"

/**
 * Challenge: Create the Vans list page, Route, and Link
 * 
 * 1. Create a Vans component in the "pages" directory. For now,
 *    just render <h1>Vans page goes here 🚐</h1>
 * 2. Create a Route for the Vans page on the /vans route
 * 3. Add a Link in the nav bar to the Vans route
 */

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <Nav />
      </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
