import React, { createContext } from 'react'
import { theme } from './Theme'
type ThemeContextProvidedProps = {
        children: React.ReactNode
}

export const ThemeContext = createContext(theme)
const ThemeContextProvider = ({ children }: ThemeContextProvidedProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider