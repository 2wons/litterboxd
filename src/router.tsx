import { createBrowserRouter } from "react-router-dom";

import Landing from "./routes/Landing";
import ErrorPage from "./routes/Error";
import FilmList from "./routes/Films";
import Layout from "./components/Layout";
import Film from "./routes/Film";
import Crew from "./routes/Film/Crew";
import Cast from "./routes/Film/Cast";
import Details from "./routes/Film/Details";
import Genre from "./routes/Film/Genre";
import Popular from "./routes/Popular";
import Actor from "./routes/Actor";
import Search from "./routes/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "films/",
        element: <FilmList />,
      },
      {
        path: "films/popular",
        element: <Popular />,
      },
      {
        path: "films/popular/page/:pageno",
        element: <Popular />,
      },
      {
        path: "actor/:actorid",
        element: <Actor />,
      },
      {
        path: "search/:keyword",
        element: <Search />,
      },
      {
        path: "film/:filmid",
        element: <Film />,
        children: [
          {
            path: "/film/:filmid",
            element: <Cast />,
          },
          {
            path: "/film/:filmid/crew",
            element: <Crew />,
          },
          {
            path: "/film/:filmid/details",
            element: <Details />,
          },
          {
            path: "/film/:filmid/genre",
            element: <Genre />,
          },
          {
            path: "/film/:filmid/releases",
            element: <Crew />,
          },
        ],
      },
    ],
  },
]);
