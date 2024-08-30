import "./App.css";

import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

import { HelmetProvider } from "react-helmet-async";

import { router } from "@/router";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
