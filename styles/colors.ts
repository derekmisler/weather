import { hexToRgba } from 'utils/hexToRgba'

export const gray = '#4c566a'
export const grayDarker = '#434c5e'
export const grayDarkest = '#3b4252'
export const black = '#2e3440'
export const transparentBlack = hexToRgba(gray, .2)

export const white = '#ECEFF4'
export const whiteDarker = '#E5E9F0'
export const whiteDarkest = '#D8DEE9'
export const transparentWhite = hexToRgba(whiteDarkest, .2)

export const red = '#BF616A'
export const orange = '#D08770'
export const yellow = '#EBCB8B'
export const green = '#A3BE8C'
export const teal = '#8FBCBB'
export const purple = '#B48EAD'

export const blue = '#88C0D0'
export const blueDarker = '#81A1C1'
export const blueDarkest = '#5E81AC'

export const themes = {
  light: {
    text: black,
    link: blueDarker,
    linkHover: blueDarkest,
    background: white,
    border: whiteDarkest,
    disabled: gray,
    shadow: transparentBlack
  },
  dark: {
    text: white,
    link: blue,
    linkHover: blueDarker,
    background: black,
    border: whiteDarker,
    disabled: gray,
    shadow: transparentBlack
  }
}
