import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Societe from "./pages/Societe";
import Solutions from "./pages/Solutions";
import "./assets/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/societe" element={<Societe />} />
        <Route exact path="/solutions" element={<Solutions />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;