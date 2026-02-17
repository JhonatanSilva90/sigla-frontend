import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    subtle: string;
  }

  interface Palette {
    green: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    protocolado: Palette["primary"];
  }

  interface PaletteOptions {
    green?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    protocolado?: PaletteOptions["primary"];
  }
}
