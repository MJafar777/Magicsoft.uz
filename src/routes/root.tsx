import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import About from "../pages/about/About";

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
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
