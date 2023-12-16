import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Details } from "./pages/detail";
import { NotFound } from "./pages/notFound";

import { Layout } from "./components/layout";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
