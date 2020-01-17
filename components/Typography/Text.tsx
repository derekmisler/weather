import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TYPOGRAPHY_DEFAULTS, TextProps, LAYOUT_DEFAULTS } from 'styles'

const { spacing } = LAYOUT_DEFAULTS
const { baseFontWeight, boldFontWeight } = TYPOGRAPHY_DEFAULTS

export const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
}))<TextProps>`
  ${DEFAULT_TEXT_STYLES}
  margin-bottom: ${spacing.large};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : baseFontWeight)};
`
