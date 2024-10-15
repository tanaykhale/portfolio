import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    homeBackground: string;
    aboutBackground: string;
    portfolioBackground: string;
    contactBackground: string;
  }

  interface PaletteOptions {
    homeBackground?: string;
    aboutBackground?: string;
    portfolioBackground?: string;
    contactBackground?: string;
  }
}

const theme = (checked: boolean) =>
  createTheme({
    palette: {
      mode: checked ? "dark" : "light",
      primary: {
        main: checked ? "#90caf9" : "#1976d2",
      },
      background: {
        default: checked ? "#121212" : "#ffffff",
        paper: checked ? "#424242" : "#ffffff",
      },
      homeBackground: checked ? "#333" : "white",
      aboutBackground: checked ? "#444" : "white",
      portfolioBackground: checked ? "#555" : "white",
      contactBackground: checked ? "#666" : "white",
    },
  });

export default theme;
