import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Roots/Rootlayout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Error404 from "./Pages/Error404";
import About from "./Pages/About";
import Write from "./Pages/Write";
import Category from "./Pages/Category";
import BlogDetails from "./Pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blogs },
      { path: "blog/:slug", Component: BlogDetails },
      { path: "category/:slug", Component: Category },
      { path: "about", Component: About },
      { path: "write", Component: Write },
      { path: "*", Component: Error404 },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
