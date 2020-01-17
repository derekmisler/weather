import { createGlobalStyle } from 'styled-components'
import { TYPOGRAPHY_DEFAULTS } from './typography'

const {
  baseFontWeight,
  baseLineHeight,
  baseFontFamily,
  htmlFontSize
} = TYPOGRAPHY_DEFAULTS

interface GlobalStyleProps {
  theme: {
    background: string,
    text: string
  }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p, pre,
  a, code, em, img,
  small, strong, ol, ul, li,
  article, aside,
  figure, figcaption, footer, header,
  menu, nav, section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }
  html { font-size: ${htmlFontSize}; }
  body {
    background-color: ${({ theme }) => theme.background};
    font-family: ${baseFontFamily};
    font-weight: ${baseFontWeight};
    line-height: ${baseLineHeight};
    color: ${({ theme }) => theme.text};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  ul, ol {
    list-style-type: none;
  }
`
