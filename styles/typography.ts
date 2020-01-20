import { css } from 'styled-components'
import { LAYOUT } from './layout'
import { BASE_MEASURE } from './variables'

export const TYPOGRAPHY = {
  baseFontFamily: "'Lato', sans-serif;",
  headingFontFamily: "'Playfair Display', serif;",
  htmlFontSize: `${BASE_MEASURE}px`,
  iconSize: '6rem',
  baseFontSize: {
    mobile: '1.5rem',
    desktop: '2rem'
  },
  smallFontSize: '.65em',
  buttonFontSize: {
    mobile: '3rem',
    desktop: '5rem'
  },
  baseLineHeight: 1.5,
  baseFontWeight: '400',
  boldFontWeight: '900',
  headingFontSizes: {
    mobile: ['5rem', '4rem', '3rem', '2rem', '1.5rem', '1rem'],
    desktop: ['7rem', '6rem', '5rem', '3rem', '2rem', '1.5rem']
  },
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

export const BUTTON_TEXT_STYLES = css`
  font: unset;
  color: ${({ theme }) => theme.link};
  font-family: ${TYPOGRAPHY.headingFontFamily};
  font-size: ${TYPOGRAPHY.buttonFontSize.mobile};
  line-height: ${TYPOGRAPHY.baseLineHeight};
  font-weight: ${TYPOGRAPHY.baseFontWeight};
  text-align: center;
  font-style: italic;
  padding: ${LAYOUT.spacing.small} ${LAYOUT.spacing.medium};
  @media ${LAYOUT.mediaQueries.desktop} {
    font-size: ${TYPOGRAPHY.buttonFontSize.desktop};
  }
`
