import { HTMLProps } from 'react'
import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TYPOGRAPHY, LAYOUT } from 'styles'

const { spacing } = LAYOUT
const { boldFontWeight } = TYPOGRAPHY

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  bold?: boolean
  italic?: boolean
}

export const Text = styled.p.attrs<TextProps>(({ as }) => ({ as: as || 'p' }))<
  TextProps
>`
  ${DEFAULT_TEXT_STYLES}
  margin-bottom: ${spacing.large};
  font-style: ${({ italic }) => (italic ? 'italic' : undefined)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : undefined)};
`
