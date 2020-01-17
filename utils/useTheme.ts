import { useState } from 'react'
import { themes } from 'styles'

export type ThemeActionTypes = 'dayClear' | 'dayCloudy' | 'nightClear' | 'nightCloudy'

type UseThemeProps = [{ [colorName: string]: string }, Function]

export const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useState(themes.dayClear)

  const toggleTheme = (nextTheme: ThemeActionTypes) => {
    setTheme(themes[nextTheme])
  }

  return [theme, toggleTheme]
}
