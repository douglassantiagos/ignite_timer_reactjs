import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

import 'react-perfect-scrollbar/dist/css/styles.css';

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />      
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeContextProvider>
  )
}
