// theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#134d18",
      dark: "#0f3e13",
      light: "#1b6b25",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#2e2e2e",
    },

    info: { main: "#1976d2" },
    success: { main: "#2e7d32" },
    warning: { main: "#ed6c02" },
    error: { main: "#d32f2f" },

    text: {
      primary: "#000000",
      secondary: "#5f5f5f",
      disabled: "#9e9e9e",
    },

    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },

    grey: {
      100: "#f5f5f5",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
    },
  },

  /* ================= TYPOGRAPHY ================= */
  typography: {
    fontFamily: `"Libre Franklin", "Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontWeight: 800,
      letterSpacing: "0.06em",
    },

    h2: {
      fontWeight: 700,
      letterSpacing: "0.04em",
    },

    h3: {
      fontWeight: 600,
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },

  shape: {
    borderRadius: 8,
  },

  /* ================= COMPONENTS ================= */
  components: {
    /* ---------- LABEL ---------- */
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",

          "&.Mui-focused": {
            color: "#ffffff",
          },

          "&.Mui-error": {
            color: "#d32f2f",
          },

          "&.Mui-disabled": {
            color: "rgba(255,255,255,0.5)",
          },
        },
      },
    },

    /* ---------- INPUT ---------- */
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 8,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          "&.Mui-disabled": {
            backgroundColor: "#2e7d32",
            color: "#ffffff",
            opacity: 0.8,
          },
        },
      },
    },
  },
});
