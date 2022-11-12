import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { lightTheme } from "../styles/themes/light";

type Themes = 'default' | 'light';

interface ThemeContextProps {
  theme: Themes;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Themes>(() => {
    const storageTheme = localStorage.getItem('@ignite-timer:theme-1.0.0')
    
    if (storageTheme) {
      return JSON.parse(storageTheme)
    }  

   return 'default'
  })

  function toggleTheme() {
    const currentTheme = theme === 'default' ? 'light' : 'default'
    setTheme(currentTheme)
  }

  useEffect(() => {
    localStorage.setItem('@ignite-timer:theme-1.0.0', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'default' ? defaultTheme : lightTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}