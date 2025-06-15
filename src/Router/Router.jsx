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
import Users from "../pages/Users/Users";
import PrivateRoute from "../Provider/PrivateRoute";

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
        loader: () => fetch('https://server-leaf-log.vercel.app/plants'),
        Component: AllPlants
      },
      {
        path: "addPlant",
        element: <PrivateRoute>
          <AddPlant></AddPlant>
        </PrivateRoute>
      },
      {
        path: "myPlant",
        loader: () => fetch('https://server-leaf-log.vercel.app/plants'),
        element: <PrivateRoute>
          <MyPlants></MyPlants>
        </PrivateRoute>
      },
      {
        path: "plants/:id",
        loader: ({ params }) => fetch(`https://server-leaf-log.vercel.app/plants/${params.id}`),
        element: <PrivateRoute>
          <PlantDetails></PlantDetails>
        </PrivateRoute>
      },
      {
        path: "updatePlant/:id",
        loader: ({ params }) => fetch(`https://server-leaf-log.vercel.app/plants/${params.id}`),
        Component: UpdatePlant,
        element: <PrivateRoute>
          <UpdatePlant></UpdatePlant>
        </PrivateRoute>
      },
      {
        path: 'users',
        loader: () => fetch('https://server-leaf-log.vercel.app/users'),
        Component: Users
      }
    ]
  },
  {
    path: "signup",
    Component: Register
  },
  {
    path: "login",
    Component: Login
  }
]);

export default router;