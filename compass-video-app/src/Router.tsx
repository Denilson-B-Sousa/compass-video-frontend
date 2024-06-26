import { Home } from "@pages/Home";
import { Movies } from "@pages/Movies";
import { MyLists } from "@pages/MyLists";
import { Search } from "@pages/Search";
import { Series } from "@pages/Series";
import { Stars } from "@pages/Stars";
import { Login } from "@pages/index";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/series"
        element={<Series />}
      />
      <Route
        path="/movies"
        element={<Movies />}
      />
      <Route
        path="/stars"
        element={<Stars />}
      />
      <Route
        path="/search/:query"
        element={<Search />}
      />
      <Route
        path="/my-lists"
        element={<MyLists />}
      />
    </Routes>
  );
}
