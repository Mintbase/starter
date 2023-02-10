import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import  NewStore  from "../components/NewStore";
import { SuccessPage } from "../components/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/new-store",
    element: <NewStore />,
  },
]);

export default router