import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AllPlants from "../pages/AllPlants/AllPlants";
import AddPlant from "../pages/AddPlant/AddPlant";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import MyPlants from "../pages/MyPlants/MyPlants";
import UpdatePlant from "../pages/UpadatePlant/UpdatePlant";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            loader: ()=> fetch('http://localhost:3000/plants'),
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
          loader: ()=> fetch('http://localhost:3000/plants'),
          Component: MyPlants
        },
        {
          path: "plants/:id",
          Component: PlantDetails
        },
        {
          path: "updatePlant/:id",
          loader: ({params})=> fetch(`http://localhost:3000/plants/${params.id}`),
          Component: UpdatePlant
        }
    ]
  },
]);

export default router;