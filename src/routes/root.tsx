import App from "../App";
import { lazy } from "react";
import { News } from "../pages/news";
import { Login, SignUp } from "../pages/auth";
import { Blogs } from "../pages/blogs";
import About from "../pages/about/About";
import { Contact } from "../components/about";
import { createBrowserRouter } from "react-router-dom";
import { SecondaryNews } from "../pages/secondaryNews";
import { ForgotPassword } from "../pages/auth/components";
import { PlatformProducts } from "../pages/platformsProducts";
import { OurProjectsInfo } from "../pages/OurProjectsInfo";
import { SecondaryBlogs } from "../pages/secondaryBlogs";

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
        path: "/blogs_informations/:id",
        element: <SecondaryBlogs />,
      },

      {
        path: "/platform_products",
        element: <PlatformProducts />,
      },

      { path: "/", element: <HomeAsync /> },

      { path: "/login", element: <Login /> },

      { path: "/sign-up", element: <SignUp /> },

      { path: "/about-us", element: <About /> },

      { path: "/contact", element: <Contact /> },

      { path: "retail", element: <RetailAsync /> },

      { path: "travels", element: <TravelAsync /> },

      { path: "fintech", element: <FintechAsync /> },

      { path: "/forgot-password", element: <ForgotPassword /> },

      { path: "our-projects-info/:id", element: <OurProjectsInfo /> },
    ],
  },
]);

export default router;
