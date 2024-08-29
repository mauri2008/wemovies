import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { Root } from "../template/root";
import { Shopping } from "../pages/shopping/Shopping";
import { Finish } from "../pages/finish/Finish";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carrinho",
        element: <Shopping />,
      },
      {
        path: "/finalizar",
        element: <Finish />,
      },
    ],
  },
]);
