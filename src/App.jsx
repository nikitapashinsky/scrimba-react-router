import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Models from "./pages/Models";
import About from "./pages/About";

import "./server/server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Classics" />} />
        <Route path="/models" element={<Models title="Models" />} />
        <Route path="/about" element={<About title="About Classics" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
