import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";

const HomeAsync = lazy(() => import("../pages/home/Home"));
const TravelAsync = lazy(() => import("../pages/travels/Travels"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomeAsync /> },
      { path: "travels", element: <TravelAsync /> },
    ],
  },
]);

export default router;
