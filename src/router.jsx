import { createBrowserRouter } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Layout from "./components/Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/red",
        element: <Red />,
      },
      {
        path: "/blue",
        element: <Blue />,
      },
    ],
  },
]);

export default router;
