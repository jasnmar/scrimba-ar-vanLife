import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import Nav from "./components/Nav/Nav";

import "./server"
import VanDetail from "./pages/VanDetail/VanDetail";


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
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
