import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import Landing from "./routes/Landing";
import ErrorPage from "./routes/Error";
import FilmList from "./routes/Films";
import Layout from "./components/Layout";
import Film from "./routes/Film";
import Crew from "./routes/FIlm/Crew";
import Cast from "./routes/FIlm/Cast";
import Details from "./routes/FIlm/Details";
import Genre from "./routes/FIlm/Genre";
import { TooltipProvider } from "./components/ui/tooltip";
import Popular from "./routes/Popular";
import Actor from "./routes/Actor";

const router = createBrowserRouter([
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

function App() {
  return (
    <div className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
