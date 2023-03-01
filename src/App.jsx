import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import ModelDetail from "./pages/ModelDetail";

import "./server/server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Ferdinand" />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/models" element={<Models title="Models" />} />
        <Route path="/models/:id" element={<ModelDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
