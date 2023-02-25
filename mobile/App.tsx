
import { Routes } from "./src/routes/Register";
import { ThemeProvider } from 'styled-components/native';
import { theme } from "./src/styles/theme";







export default function App() {
  return (
    <ThemeProvider theme={theme}>
       <Routes/>
    </ThemeProvider>
  );
}
