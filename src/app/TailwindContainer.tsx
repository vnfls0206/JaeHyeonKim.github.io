import React, { useEffect } from "react"
import { StyledEngineProvider } from "@mui/material/styles"
import Layout from "../components/layout/Layout"

export interface IThemeContext {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export interface ITailwindContainerProps {
  children?: React.ReactNode,
}


const TailwindContainer = (
  {
    children
  }: ITailwindContainerProps
) => {

  const [theme, setTheme] = React.useState("dark")
  const ThemeContext = React.createContext<IThemeContext>({ theme, setTheme })

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme]);

  // const page  = useContext(pageContext);
  //
  // console.log("page " + page)


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledEngineProvider injectFirst>
        {children}
      </StyledEngineProvider>
    </ThemeContext.Provider>
  )

}

export default TailwindContainer


