import { BrowserRouter, Routes, Route } from "react-router-dom";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Home />} />
                
      </Routes>
    </BrowserRouter>
  );
}

export default App;
