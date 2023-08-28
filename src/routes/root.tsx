import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import { PlatformProducts } from "../pages/platformsProducts";

const HomeAsync = lazy(() => import("../pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <h1>Error</h1>,
    children: [{ path: "/", element: <HomeAsync /> }],
  },
  {
    path: "/platform_products",
    element: <PlatformProducts />,
  },
]);

export default router;
