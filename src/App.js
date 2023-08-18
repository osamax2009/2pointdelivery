import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import FollowShipment from "./pagesPartials/index/followShipment";
// import PopularRoutes from "./pagesPartials/index/popularRoutes";
// import WorkWith from "./pagesPartials/index/workWith";
// import HowToShip from "./pagesPartials/index/ourServices";
import Navbar from "./pagesPartials/index/navbar";
import { UserContextProvider } from "./contexts/userContext";

// import Brand from "./pagesPartials/index/brand";
// import ParcelTypes from "./pagesPartials/index/parcelTypes";
// import DeliveryMan from "./pagesPartials/index/deliveryMan";
// import PointFooter from "./pagesPartials/index/2pointFooter";
// import Prohibited from "./pagesPartials/index/prohibited";
import Index from "./userInterface/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);
function App() {
  return (
    <UserContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </UserContextProvider>
  );
}

export default App;
