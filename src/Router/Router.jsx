import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllPlants from "../pages/AllPlants/AllPlants";
import AddPlant from "../pages/AddPlant/AddPlant";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import MyPlants from "../pages/MyPlants/MyPlants";
import UpdatePlant from "../pages/UpadatePlant/UpdatePlant";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch('https://server-leaf-log.vercel.app/plants'),
        Component: Home
      },
      {
        path: "allPlant",
        Component: AllPlants
      },
      {
        path: "addPlant",
        Component: AddPlant
      },
      {
        path: "myPlant",
        loader: () => fetch('https://server-leaf-log.vercel.app/plants'),
        Component: MyPlants
      },
      {
        path: "plants/:id",
        Component: PlantDetails
      },
      {
        path: "updatePlant/:id",
        loader: ({ params }) => fetch(`https://server-leaf-log.vercel.app/plants/${params.id}`),
        Component: UpdatePlant
      },
      {
        path: "login",
        Component: Login
      }
    ]
  },
  {
    path: "signup",
    Component: Register
  }
]);

export default router;