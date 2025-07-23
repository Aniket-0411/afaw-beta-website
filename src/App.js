import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
