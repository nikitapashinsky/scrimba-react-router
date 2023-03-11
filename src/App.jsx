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
import Cars, { loader as carsLoader } from "./pages/Cars/Cars";
import Car from "./pages/Cars/Car";
import AccountLayout from "./components/AccountLayout";
import Dashboard from "./pages/Account/Dashboard";
import Membership from "./pages/Account/Membership";
import Concierge from "./pages/Account/Concierge";
import MyCars from "./pages/Account/MyCars/MyCars";
import MyCar from "./pages/Account/MyCars/MyCar";
import MyCarInfo from "./pages/Account/MyCars/MyCarInfo";
import MyCarPricing from "./pages/Account/MyCars/MyCarPricing";
import MyCarPhotos from "./pages/Account/MyCars/MyCarPhotos";

import NotFound from "./pages/404";

import "./server/server.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cars" loader={carsLoader} element={<Cars />} />
        <Route path="cars/:id" element={<Car />} />
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
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
