import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
