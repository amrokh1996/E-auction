import { Routes, Route } from "react-router-dom";

import Dashboard from "../../../Dashboard/Dashboard";
import Costumers from "../../../Dashboard/Costumers";
import Settings from "../../../Dashboard/Settings";
import Cars from "../../../Dashboard/Cars";
import Providers from "../../../Dashboard/Providers";
import Admins from "../../../Dashboard/Admins";
import RentedCars from "../../../Dashboard/RentedCars";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Dashboard />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Cars" element={<Cars />} />
        <Route path="Costumers" element={<Costumers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="Providers" element={<Providers />} />
        <Route path="Admins" element={<Admins />} />
        <Route path="RentedCars" element={<RentedCars />} />
      </Route>
    </Routes>
  );
};

export default Router;
