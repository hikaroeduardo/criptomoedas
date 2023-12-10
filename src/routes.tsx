import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Details } from "./pages/details";
import { NotFound } from "./pages/notFound";

export const routes = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
