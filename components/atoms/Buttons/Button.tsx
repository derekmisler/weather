import styled from 'styled-components'
import { TYPOGRAPHY, LAYOUT, BUTTON_TEXT_STYLES } from 'styles'

const { buttonFontSize, headingFontFamily } = TYPOGRAPHY

const { spacing, borderRadius, borderStyle, borderSize, mediaQueries } = LAYOUT

interface StyledButtonProps {
  accent?: boolean
  href?: string
}

export const Button = styled.button.attrs<StyledButtonProps>(({ href }) => ({
  as: href ? 'a' : 'button'
}))<StyledButtonProps>`
  ${BUTTON_TEXT_STYLES}
  background-color: transparent;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  text-decoration: none;
  border-radius: ${borderRadius};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.linkHover};
    border-color: ${({ theme }) => theme.linkHover};
  }
`
