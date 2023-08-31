import App from "../App";
import { lazy } from "react";
import { News } from "../pages/news";
import { Blogs } from "../pages/blogs";
import About from "../pages/about/About";
import { createBrowserRouter } from "react-router-dom";
import { SecondaryNews } from "../pages/secondaryNews";
import { PlatformProducts } from "../pages/platformsProducts";

// eslint-disable-next-line react-refresh/only-export-components
const HomeAsync = lazy(() => import("../pages/home/Home"));
// eslint-disable-next-line react-refresh/only-export-components
const TravelAsync = lazy(() => import("../pages/travels/Travels"));
// eslint-disable-next-line react-refresh/only-export-components
const RetailAsync = lazy(() => import("../pages/retail/Retail"));
// eslint-disable-next-line react-refresh/only-export-components
const FintechAsync = lazy(() => import("../pages/fintech/Fintech"));

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
        path: "/news_informations/:id",
        element: <SecondaryNews />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      { path: "travels", element: <TravelAsync /> },
      { path: "retail", element: <RetailAsync /> },
      { path: "fintech", element: <FintechAsync /> },

      { path: "/about-us", element: <About /> },
    ],
  },
]);

export default router;
