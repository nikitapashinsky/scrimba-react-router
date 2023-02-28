import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="Classics" />} />
        <Route path="/about" element={<About title="About Classics" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
