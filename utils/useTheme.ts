import { useState } from 'react'
import { themes } from 'styles'

export type ThemeActionTypes =
  | 'light'
  | 'dark'

type UseThemeProps = [{ [colorName: string]: string }, Function]

export const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = (nextTheme: ThemeActionTypes) => {
    setTheme(themes[nextTheme])
  }

  return [theme, toggleTheme]
}
