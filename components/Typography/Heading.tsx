import styled from 'styled-components'
import { StyledComponentProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  headingFontFamily,
  headingFontSizes,
  headingLineHeights,
  headingFontWeights,
  headingLetterSpacing,
  baseFontStyle
} = TYPOGRAPHY_DEFAULTS

const { mediaQueries } = LAYOUT_DEFAULTS

export interface StyledHeadingProps extends StyledComponentProps {
  textAlign?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled.div.attrs<StyledHeadingProps>(
  ({ level, as }) => ({
    role: as ? '' : 'heading',
    'aria-level': level,
    as: `h${level}`
  })
) <StyledHeadingProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-family: ${headingFontFamily};
  font-style: ${baseFontStyle};
  font-weight: ${({ level }) => headingFontWeights[level - 1]};
  line-height: ${({ level }) => headingLineHeights[level - 1]};
  font-size: ${({ level }) => headingFontSizes.mobile[level - 1]};
  letter-spacing: ${({ level }) => headingLetterSpacing[level - 1]};
  column-span: all;

  @media ${mediaQueries.desktop} {
    font-size: ${({ level }) => headingFontSizes.desktop[level - 1]};
  }
`
