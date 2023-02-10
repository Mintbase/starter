import { Route, Routes,
} from "react-router-dom";
import Home from "../components/Home";
import Minter from "../components/Minter";
import NewStore from "../components/NewStore";
import { SuccessPage } from "../components/Success";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/new-store/:id"
        element={<NewStore />}
      />
      <Route
        path="/new-store"
        element={<NewStore />}
      />
      <Route
        path="/mint/:id"
        element={<Minter />}
      />
      <Route
        path="/mint/"
        element={<Minter />}
      />
      <Route
        path="/success"
        element={<SuccessPage />} />
    </Routes>
  )
}