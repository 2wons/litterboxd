import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";
import Landing from "./routes/Landing";
import ErrorPage from "./routes/Error";
import FilmList from "./routes/Films";
import Layout from "./components/Layout";
import Film from "./routes/Film";

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
        path: "film/:filmid",
        element: <Film />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
