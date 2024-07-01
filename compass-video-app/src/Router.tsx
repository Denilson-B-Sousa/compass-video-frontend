import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import { Home } from "@pages/Home/index.tsx";
import { Search } from "@pages/Search/index.tsx";
import { Series } from "@pages/Series/index.tsx";
import { Movies } from "@pages/Movies/index.tsx";
import { Stars } from "@pages/Stars/index.tsx";
import { MyLists } from "@pages/MyLists/index.tsx";
import { Login } from "@components/index.ts";
import { MovieDetails } from "@pages/MovieDetails/index.tsx";
import { SeriesDetails } from "@pages/SeriesDetails/index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/series",
        element: <Series />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/stars",
        element: <Stars />
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/my-lists",
        element: <MyLists />
      },
      {
        path: "/details/movie/:id", 
        element: <MovieDetails />
      },
      {
        path: "/details/tv/:id", 
        element: <SeriesDetails />
      }
    ],
  },
  {path: "/login", element: <Login />}
]);