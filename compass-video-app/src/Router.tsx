import { Login } from "@pages/index";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
    </Routes>
  );
}
