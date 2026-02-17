import { useTheme } from "@mui/material/styles";

export function ThemeCSSVars() {
  const theme = useTheme();

  return (
    <style>
      {`
        :root {
          /* ================= FONTS ================= */
          --font-primary: ${theme.typography.fontFamily};

          /* ================= BASE ================= */
          --white: ${theme.palette.background.default};
          --black: ${theme.palette.common.black};

          /* ================= BACKGROUNDS ================= */
          --bg-default: ${theme.palette.background.default};
          --bg-paper: ${theme.palette.background.paper};
          --bg-subtle: ${theme.palette.background.subtle};

          /* ================= BRAND ================= */
          --green-main: ${theme.palette.primary.main};
          --green-dark: ${theme.palette.primary.dark};
          --green-light: ${theme.palette.primary.light};
          
          /* ================= GREEN SCALE ================= */
          --green-50: ${theme.palette.green[50]};
          --green-100: ${theme.palette.green[100]};
          --green-200: ${theme.palette.green[200]};
          --green-300: ${theme.palette.green[300]};
          --green-400: ${theme.palette.green[400]};
          --green-500: ${theme.palette.green[500]};
          --green-600: ${theme.palette.green[600]};
          --green-700: ${theme.palette.green[700]};
          --green-800: ${theme.palette.green[800]};
          --green-900: ${theme.palette.green[900]};


          /* ================= GREYS ================= */
          --grey-100: ${theme.palette.grey[100]};
          --grey-300: ${theme.palette.grey[300]};
          --grey-500: ${theme.palette.grey[500]};
          --grey-700: ${theme.palette.grey[700]};

          /* ================= STATUS ================= */
          --status-protocolado: ${theme.palette.protocolado.main};
          --status-licenciada: ${theme.palette.success.main};
          --status-vencida: ${theme.palette.error.main};
          --status-a-vencer: ${theme.palette.warning.main};
          --status-em-andamento: ${theme.palette.info.main};

          /* ================= SPACING ================= */
          --space-0: 0px;
          --space-1: 8px;
          --space-2: 16px;
          --space-3: 24px;
          --space-4: 32px;
          --space-5: 40px;
          --space-6: 48px;
          --space-8: 64px;

          /* ================= RADIUS ================= */
          --radius-sm: 4px;
          --radius-md: ${theme.shape.borderRadius}px;
          --radius-lg: 12px;

          /* ================= ICON SIZES ================= */
          --icon-xs: 16px;
          --icon-sm: 32px;
          --icon-md: 64px;
          --icon-lg: 80px;
          --icon-xl: 120px;

          /* ================= LOGO ================= */
          --logo-color: ${theme.palette.common.white};
          --logo-small-color: ${theme.palette.primary.dark};
        }
      `}
    </style>
  );
}
