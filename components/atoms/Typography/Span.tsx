import { HTMLProps } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY } from 'styles'

const { boldFontWeight, smallFontSize } = TYPOGRAPHY

export interface SpanProps extends HTMLProps<HTMLSpanElement> {
  bold?: boolean
  italic?: boolean
  small?: boolean
}

export const Span = styled.span.attrs<SpanProps>(({ italic, bold, small }) => {
  let as = 'span'
  if (bold) as = 'strong'
  if (italic) as = 'em'
  if (small) as = 'small'
  return { as }
})<SpanProps>`
  display: inline;
  font-style: ${({ italic }) => (italic ? 'italic' : undefined)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : undefined)};
  font-size: ${({ small }) => (small ? smallFontSize : undefined)};
`
