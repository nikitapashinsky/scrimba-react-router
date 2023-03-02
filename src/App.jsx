import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars/Cars";
import Model from "./pages/Cars/Model";
import Car from "./pages/Cars/Car";
import AccountLayout from "./components/AccountLayout";
import Dashboard from "./pages/Account/Dashboard";
import Revenue from "./pages/Account/Revenue";
import Reviews from "./pages/Account/Reviews";

import "./server/server.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:model" element={<Model />} />
          <Route path="cars/:model/:id" element={<Car />} />
          <Route path="account" element={<AccountLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
