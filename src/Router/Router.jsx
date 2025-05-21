import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllPlants from "../pages/AllPlants/AllPlants";
import AddPlant from "../pages/AddPlant/AddPlant";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: "allPlant",
          Component: AllPlants
        },
        {
          path: "addPlant",
          Component: AddPlant
        }
    ]
  },
]);

export default router;