import { css } from 'styled-components'
import { LAYOUT } from './layout'
import { BASE_MEASURE } from './variables'

export const TYPOGRAPHY = {
  baseFontFamily: "'Lato', sans-serif;",
  headingFontFamily: "'Playfair Display', serif;",
  htmlFontSize: `${BASE_MEASURE}px`,
  baseFontSize: {
    desktop: '2rem',
    mobile: '1.5rem'
  },
  smallFontSize: '.65em',
  buttonFontSize: {
    desktop: '1.35rem',
    mobile: '1rem'
  },
  baseLineHeight: 1.5,
  baseFontWeight: '400',
  boldFontWeight: '900',
  headingFontSizes: {
    mobile: ['6rem', '3.75rem', '3rem', '2.125rem', '1.5rem', '1rem'],
    desktop: ['9.75rem', '7.5rem', '5rem', '3rem', '2rem', '1.5rem']
  },
  headingLetterSpacing: [
    '-.55rem',
    '-.75rem',
    '-.75rem',
    '-.75rem',
    '0',
    '0'
  ],
  headingLineHeights: [1.2, 1.2, 1.2, 1.5, 1.5, 1.5],
  headingFontWeights: new Array(6).fill('600')
}

export const DEFAULT_TEXT_STYLES = css`
  font: unset;
  font-family: ${TYPOGRAPHY.baseFontFamily};
  font-size: ${TYPOGRAPHY.baseFontSize.mobile};
  line-height: ${TYPOGRAPHY.baseLineHeight};
  font-weight: ${TYPOGRAPHY.baseFontWeight};
  text-align: left;
  @media ${LAYOUT.mediaQueries.desktop} {
    font-size: ${TYPOGRAPHY.baseFontSize.desktop};
  }
`
