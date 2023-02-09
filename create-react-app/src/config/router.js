import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
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
]);

export default router