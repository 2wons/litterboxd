import "./App.css";

import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./components/theme-provider";

import { TooltipProvider } from "./components/ui/tooltip";

import { router } from "@/router";

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
