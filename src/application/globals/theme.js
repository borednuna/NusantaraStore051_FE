import { createTheme } from "@mui/material/styles";

const Theme = () => {
  const theme = createTheme({
    palette: {
      yellow: {
        main: "#FFD600",
      },
      black: {
        main: "#000000",
      },
      white: {
        main: "#ffffff",
      },
      grey: {
        main: "#858585",
      },
    },
  });

  return theme;
};

export default Theme;
