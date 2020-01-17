export const gray: string = '#4c566a'
export const grayDarker: string = '#434c5e'
export const grayDarkest: string = '#3b4252'
export const black: string = '#2e3440'

export const white: string = '#ECEFF4'
export const whiteDarker: string = '#E5E9F0'
export const whiteDarkest: string = '#D8DEE9'

export const red: string = '#BF616A'
export const orange: string = '#D08770'
export const yellow: string = '#EBCB8B'
export const green: string = '#A3BE8C'
export const teal: string = '#8FBCBB'
export const purple: string = '#B48EAD'

export const blue: string = '#88C0D0'
export const blueDarker: string = '#81A1C1'
export const blueDarkest: string = '#5E81AC'

export const themes = {
  dayClear: {
    text: black,
    link: blueDarker,
    linkHover: blueDarkest,
    background: white
  },
  dayCloudy: {
    text: grayDarkest,
    link: blueDarker,
    linkHover: blueDarkest,
    background: whiteDarker
  },
  nightClear: {
    text: white,
    link: blue,
    linkHover: blueDarker,
    background: black
  },
  nightCloudy: {
    text: whiteDarker,
    link: blue,
    linkHover: blueDarker,
    background: grayDarkest
  }
}
