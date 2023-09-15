import App from "../App";
import { lazy } from "react";
import { News } from "../pages/news";
import { Login } from "../pages/auth";
import { Blogs } from "../pages/blogs";
import About from "../pages/about/About";
import { Contact } from "../components/about";
import { createBrowserRouter } from "react-router-dom";
import { SecondaryNews } from "../pages/secondaryNews";
import { ForgotPassword } from "../pages/auth/components";
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
      {
        path: "/news",
        element: <News />,
      },

      {
        path: "/blog",
        element: <Blogs />,
      },

      {
        path: "/news_informations/:id",
        element: <SecondaryNews />,
      },

      {
        path: "/platform_products",
        element: <PlatformProducts />,
      },

      { path: "/", element: <HomeAsync /> },

      { path: "/login", element: <Login /> },

      { path: "/about-us", element: <About /> },

      { path: "/contact", element: <Contact /> },

      { path: "retail", element: <RetailAsync /> },

      { path: "travels", element: <TravelAsync /> },

      { path: "fintech", element: <FintechAsync /> },

      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

export default router;
