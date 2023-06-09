import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import Portfolio from "./pages/Portfolio";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#1456bf',
    },
    secondary: {
      main: '#bbdefb',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: 'Lato',
  },
};
const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{
        '@keyframes wobble': {
          '0%': { transform: 'rotate(40deg)' },
          '30%': { transform: 'rotate(-25deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '70%': { transform: 'rotate(-7deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        '@keyframes rotate': {
          '100%': { transform: 'rotate(40deg)' }
        }
      }} />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
