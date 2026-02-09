import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ThemeCSSVars, theme } from "./theme/";
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
