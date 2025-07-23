import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Creators from "./pages/Creators";
import Players from "./pages/Players";
import LatestWork from "./pages/LatestWork";
import Store from "./pages/Store";

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/players" element={<Players />} />
          <Route path="/latest-work" element={<LatestWork />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
