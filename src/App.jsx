import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "@fontsource/inter/variable.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars/Cars";
import Model from "./pages/Cars/Model";
import Car from "./pages/Cars/Car";
import AccountLayout from "./components/AccountLayout";
import Dashboard from "./pages/Account/Dashboard";
import Membership from "./pages/Account/Membership";
import Concierge from "./pages/Account/Concierge";
import MyCars from "./pages/Account/MyCars";
import MyCar from "./pages/Account/MyCar";
import MyCarInfo from "./pages/Account/MyCarInfo";
import MyCarPricing from "./pages/Account/MyCarPricing";
import MyCarPhotos from "./pages/Account/MyCarPhotos";

import "./server/server.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cars" element={<Cars />} />
      <Route path="cars/:model" element={<Model />} />
      <Route path="cars/:model/:id" element={<Car />} />
      <Route path="account" element={<AccountLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="cars" element={<MyCars />} />
        <Route path="cars/:id" element={<MyCar />}>
          <Route index element={<MyCarInfo />} />
          <Route path="pricing" element={<MyCarPricing />} />
          <Route path="photos" element={<MyCarPhotos />} />
        </Route>
        <Route path="concierge" element={<Concierge />} />
        <Route path="membership" element={<Membership />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
