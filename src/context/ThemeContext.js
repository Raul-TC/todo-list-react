import { createContext, useEffect, useState } from 'react'

import moon from '../assets/icon-moon.svg'
import sun from '../assets/icon-sun.svg'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [DarkTheme, setDarkTheme] = useState(true)

  useEffect(() => {
    if (DarkTheme) {
      localStorage.setItem('theme', 'dark')
      setDarkTheme(true)
      document.body.classList.add('classDark')
    }

    if (localStorage.getItem('theme') === 'dark') {
      setDarkTheme(true)
      document.body.classList.add('classDark')
    } else {
      setDarkTheme(false)
      document.body.classList.remove('classDark')
    }
  }, [DarkTheme])

  const handleTheme = () => {
    if (DarkTheme) {
      localStorage.setItem('theme', 'light')
      setDarkTheme(false)
    } else {
      localStorage.setItem('theme', 'dark')
      setDarkTheme(true)
    }
  }
  const data = { DarkTheme, handleTheme }
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeProvider }
export default ThemeContext
