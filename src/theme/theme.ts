// theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  /* ================= PALETTE ================= */
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
      subtle: "#f2f7f3",
    },

    grey: {
      100: "#f5f5f5",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
    },
    green: {
      50: "#f2f7f3",
      100: "#d7e8d9",
      200: "#a9d0ad",
      300: "#7ab77f",
      400: "#4c9f52",
      500: "#134d18",
      600: "#0f3e13",
      700: "#0c320f",
      800: "#08250b",
      900: "#051906",
    },
  },

  /* ================= SHAPE ================= */
  shape: {
    borderRadius: 8,
  },

  /* ================= TYPOGRAPHY ================= */
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,

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
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    caption: {
      fontSize: "0.75rem",
      color: "#616161",
    },
  },

  /* ================= COMPONENTS ================= */
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
        },
      },
    },
    /* ---------- FORM LABEL ---------- */
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
          backgroundColor: "#ffffff",

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 8,
          },
        },
      },
    },

    /* ---------- BUTTON (FileUpload, Forms, etc) ---------- */
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontSize: "0.875rem",
        },
        contained: {
          backgroundColor: "#2E7D32", // verde médio vibrante
          color: "#ffffff",

          "&:hover": {
            backgroundColor: "#1B5E20",
          },

          "&.Mui-disabled": {
            backgroundColor: "#A5D6A7",
            color: "#ffffff",
          },
        },

        outlined: {
          borderColor: "#134d18",
          color: "#134d18",

          "&:hover": {
            backgroundColor: "rgba(19, 77, 24, 0.08)",
            borderColor: "#134d18",
          },
        },
      },
    },

    /* ---------- ICON BUTTON (delete file, etc) ---------- */
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },

    /* ---------- APP BAR ---------- */
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "none",
          borderBottom: "none",
        },
      },
    },

    /* ---------- TOOLBAR ---------- */
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
    },

    /* ---------- DIVIDER ---------- */
    MuiDivider: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },

    /* ---------- PAGINATION ---------- */
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#134d18",
            color: "#ffffff",

            "&:hover": {
              backgroundColor: "#0f3e13",
            },
          },
        },
      },
    },
  },
});
