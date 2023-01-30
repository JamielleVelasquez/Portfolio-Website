import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import KaEnteng from "./Projects/KaEnteng";
import Luvamine from "./Projects/Luvamine";
import Thesis from "./Projects/Thesis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Projects/KaEnteng",
    element: <KaEnteng />,
  },
  {
    path: "/Projects/Luvamine",
    element: <Luvamine />,
  },
  {
    path: "/Projects/Thesis",
    element: <Thesis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
