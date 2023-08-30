import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App";
import { News } from "../pages/news";
import { Blogs } from "../pages/blogs";
import { SecondaryNews } from "../pages/secondaryNews";
import { PlatformProducts } from "../pages/platformsProducts";

// eslint-disable-next-line react-refresh/only-export-components
const HomeAsync = lazy(() => import("../pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <h1>Error</h1>,
    children: [
      { path: "/", element: <HomeAsync /> },
      {
        path: "/platform_products",
        element: <PlatformProducts />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news_informations",
        element: <SecondaryNews />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
