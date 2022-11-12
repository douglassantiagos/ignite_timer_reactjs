import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'
// import { ThemeContextProvider } from './contexts/ThemeContext'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CyclesContextProvider>
            <Router />      
          </CyclesContextProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
  )
}
