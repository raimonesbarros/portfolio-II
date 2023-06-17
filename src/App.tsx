import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello, there.</h1>
    </ThemeProvider>
  )
}
