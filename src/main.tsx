import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { ThemeCSSVars } from "./theme/ThemeCSSVars";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeCSSVars />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
